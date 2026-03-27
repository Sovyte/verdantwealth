"""
╔══════════════════════════════════════════════════════════════╗
║   VERDANT WEALTH CO. — FLASK BACKEND                        ║
║   Run:  python app.py                                       ║
║   Deps: pip install flask flask-cors requests               ║
╚══════════════════════════════════════════════════════════════╝
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import sqlite3
from datetime import datetime
import threading

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)

# ── CONFIG ────────────────────────────────────────────────────
CONTACT_TO_EMAIL     = "ilamugilan343@gmail.com"

TWELVEDATA_API_KEY   = os.getenv("TWELEVE_DATA")
MARKET_API_URL       = "https://api.twelvedata.com/quote"

ALPHA_VANTAGE_KEY    = os.getenv("ALPHA_VANTAGE_KEY", "")

# Email config (set via env vars)
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")
FROM_EMAIL = os.getenv("FROM_EMAIL", SMTP_USER)

DB_FILE = "verdant_wealth.db"

# ── SQLITE INIT ──────────────────────────────────────────────
def init_db():
    try:
        with sqlite3.connect(DB_FILE) as conn:
            with open('schema.sql', 'r') as f:
                conn.executescript(f.read())
        print("✔ Connected to SQLite")
    except Exception as e:
        print(f"✘ SQLite connection failed: {e}")

init_db()

def get_db():
    conn = sqlite3.connect(DB_FILE, detect_types=sqlite3.PARSE_DECLTYPES)
    conn.row_factory = sqlite3.Row
    return conn

# ── SMTP EMAIL HELPER ────────────────────────────────────────
def _send_smtp_sync(to_email, subject, html_content):
    try:
        msg = MIMEMultipart()
        msg['From'] = FROM_EMAIL
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(html_content, 'html'))
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
        print(f"✔ Email sent to {to_email}")
    except Exception as e:
        print(f"✘ SMTP Error: {e}")

def send_smtp_email(to_email, subject, html_content):
    thread = threading.Thread(target=_send_smtp_sync, args=(to_email, subject, html_content))
    thread.daemon = True
    thread.start()
    return True

# ── SERVE FRONTEND ────────────────────────────────────────────
@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/<path:path>")
def static_files(path):
    return app.send_static_file(path)

# ── MARKET DATA (ticker) ─────────────────────────────────────
@app.route("/market-data", methods=["GET"])
def market_data():
    symbols_list = [
        "NSEI", "NSEBANK", "RELIANCE:NSE", "TCS:NSE",
        "HDFCBANK:NSE", "INFY:NSE", "ICICIBANK:NSE", "USD/INR"
    ]
    label_map = {
        "NSEI": "NIFTY 50", "NSEBANK": "BANK NIFTY",
        "XAU/USD": "GOLD", "USD/INR": "USD/INR"
    }
    try:
        if not TWELVEDATA_API_KEY:
            raise ValueError("Missing TwelveData API key")
        params = {"symbol": ",".join(symbols_list), "apikey": TWELVEDATA_API_KEY}
        r = requests.get(MARKET_API_URL, params=params, timeout=12)
        r.raise_for_status()
        data = r.json()
        ticks = []
        for s in symbols_list:
            q = data.get(s)
            if not q or q.get("status") == "error":
                continue
            price  = float(q.get("close") or q.get("price") or 0)
            change = float(q.get("change") or 0)
            pct    = float(q.get("percent_change") or 0)
            raw_sym = s.split(':')[0]
            display_label = label_map.get(raw_sym) or q.get("name") or raw_sym
            ticks.append({
                "label":  display_label.upper(),
                "val":    f"{price:,.2f}",
                "change": f"{pct:+.2f}%",
                "up":     change >= 0
            })
        if not ticks:
            raise ValueError("No quotes returned")
        return jsonify({"success": True, "ticks": ticks})
    except Exception as e:
        print("market_data error", str(e))
        return jsonify({
            "success": True,
            "ticks": [
                {"label": "NIFTY", "val": "22,200", "change": "+0.95%", "up": True},
                {"label": "BANKNIFTY", "val": "48,100", "change": "+0.38%", "up": True},
                {"label": "USD/INR", "val": "83.45", "change": "+0.05%", "up": True},
                {"label": "RELIANCE", "val": "2,850", "change": "+1.2%", "up": True},
                {"label": "TCS", "val": "3,780", "change": "-0.3%", "up": False}
            ]
        })

# ── WORLD DATA ───────────────────────────────────────────────
@app.route("/world-data", methods=["GET"])
def world_data():
    try:
        if not TWELVEDATA_API_KEY:
            raise ValueError("Missing TwelveData API key")
        symbols_list = ["BRENT", "XAU/USD", "XAG/USD", "USD/INR", "BTC/USD"]
        params = {"symbol": ",".join(symbols_list), "apikey": TWELVEDATA_API_KEY}
        r = requests.get(MARKET_API_URL, params=params, timeout=12)
        r.raise_for_status()
        data = r.json()
        events = []
        for s in symbols_list:
            q = data.get(s)
            if not q or q.get("status") == "error":
                continue
            price = float(q.get("close") or q.get("price") or 0)
            pct   = float(q.get("percent_change") or 0)
            display_symbol = s
            if s == "XAU/USD":  display_symbol = "Gold"
            elif s == "XAG/USD": display_symbol = "Silver"
            elif s == "BRENT":   display_symbol = "Brent Crude"
            elif s == "BTC/USD": display_symbol = "Bitcoin"
            events.append({
                "symbol": display_symbol,
                "value":  f"{price:,.2f}",
                "impact": "HIGH" if abs(pct) > 1 else "MEDIUM",
                "note":   f"{pct:+.2f}%"
            })
        if not events:
            raise ValueError("No world data")
        return jsonify({"success": True, "events": events})
    except Exception as e:
        print("world_data error", str(e))
        return jsonify({
            "success": True,
            "events": [
                {"symbol": "USD/INR",    "value": "83.22", "impact": "HIGH",   "note": "+0.25%"},
                {"symbol": "Brent",      "value": "84.72", "impact": "MEDIUM", "note": "+1.1%"},
                {"symbol": "Gold",       "value": "1,975", "impact": "MEDIUM", "note": "-0.4%"},
                {"symbol": "Bitcoin",    "value": "68,200","impact": "LOW",    "note": "+3.1%"}
            ]
        })

# ── SECTOR DATA ──────────────────────────────────────────────
@app.route("/sector-data", methods=["GET"])
def sector_data():
    if ALPHA_VANTAGE_KEY:
        try:
            url = f"https://www.alphavantage.co/query?function=SECTOR&apikey={ALPHA_VANTAGE_KEY}"
            r = requests.get(url, timeout=10)
            r.raise_for_status()
            payload = r.json()
            realtime = payload.get("Rank A: Real-Time Performance", {})
            sectors = []
            for k, v in realtime.items():
                val = float(v.replace("%", ""))
                sectors.append({
                    "sector":    k,
                    "value":     val,
                    "direction": "up" if val >= 0 else "down"
                })
            sectors.sort(key=lambda x: -x["value"])
            return jsonify({"success": True, "sectors": sectors[:8]})
        except Exception:
            pass
    return jsonify({
        "success": True,
        "sectors": [
            {"sector": "IT / Technology",  "value":  2.4,  "direction": "up"},
            {"sector": "Banking / BFSI",   "value": -0.6,  "direction": "down"},
            {"sector": "Pharma & Health",  "value":  1.1,  "direction": "up"},
            {"sector": "FMCG",             "value":  0.0,  "direction": "neutral"},
            {"sector": "Auto & EV",        "value":  3.2,  "direction": "up"},
            {"sector": "Metals & Mining",  "value": -1.4,  "direction": "down"},
            {"sector": "Infra & Cement",   "value":  0.8,  "direction": "up"},
            {"sector": "Energy / Oil & Gas","value": 1.9,  "direction": "up"}
        ]
    })

# ── CONTACT FORM ──────────────────────────────────────────────
@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name     = data.get("name", "Unknown")
    email    = data.get("email", "")
    phone    = data.get("phone", "Not provided")
    plan     = data.get("plan", "Not specified")
    goal     = data.get("goal", "Not provided")
    referral = data.get("referral", "Not provided")

    try:
        send_smtp_email(
            CONTACT_TO_EMAIL,
            f"New advisory enquiry — {name}",
            f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;background:#0d1a0f;color:#f4f4f0;padding:2rem;border-radius:8px">
              <h2 style="color:#2ecc71;margin:0 0 1rem">New Advisory Enquiry</h2>
              <p style="color:#8a9a8e;font-size:.85rem">{datetime.now().strftime('%d %b %Y, %I:%M %p')}</p>
              <table style="width:100%;border-collapse:collapse;margin-top:1rem">
                <tr><td style="padding:.5rem 0;color:#8a9a8e;width:120px">Name</td><td style="color:#f4f4f0"><strong>{name}</strong></td></tr>
                <tr><td style="padding:.5rem 0;color:#8a9a8e">Email</td><td><a href="mailto:{email}" style="color:#2ecc71">{email}</a></td></tr>
                <tr><td style="padding:.5rem 0;color:#8a9a8e">Phone</td><td style="color:#f4f4f0">{phone}</td></tr>
                <tr><td style="padding:.5rem 0;color:#8a9a8e">Plan</td><td style="color:#f4f4f0">{plan}</td></tr>
                <tr><td style="padding:.5rem 0;color:#8a9a8e">Referred by</td><td style="color:#f4f4f0">{referral}</td></tr>
              </table>
              <div style="margin-top:1.5rem;padding:1rem;background:rgba(46,204,113,.06);border:1px solid rgba(46,204,113,.2);border-radius:4px">
                <p style="color:#8a9a8e;font-size:.8rem;margin:0 0 .5rem">Primary Goal</p>
                <p style="color:#f4f4f0;margin:0;line-height:1.6">{goal}</p>
              </div>
              <div style="margin-top:1.5rem;text-align:center">
                <a href="mailto:{email}" style="background:#2ecc71;color:#090c09;padding:.7rem 1.5rem;border-radius:4px;text-decoration:none;font-weight:600">Reply to {name}</a>
              </div>
            </div>
            """
        )
        send_smtp_email(
            email,
            "We received your message — Verdant Wealth Co.",
            f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;background:#0d1a0f;color:#f4f4f0;padding:2rem;border-radius:8px">
              <h1 style="color:#2ecc71;font-family:Georgia,serif;font-size:1.6rem;text-align:center;margin-bottom:1.5rem">Verdant Wealth Co.</h1>
              <h2 style="color:#f4f4f0;font-family:Georgia,serif;font-weight:300">Hi {name},</h2>
              <p style="color:#8a9a8e;line-height:1.8">Thank you for reaching out. I've received your message and will personally respond within <strong style="color:#f4f4f0">24 hours</strong>.</p>
              <div style="text-align:center;margin:2rem 0">
                <a href="https://calendly.com/ilamugilan343/new-meeting" style="background:#2ecc71;color:#090c09;padding:1rem 2rem;border-radius:4px;text-decoration:none;font-weight:600">Schedule a Free Call →</a>
              </div>
              <p style="color:#8a9a8e;line-height:1.8">Best regards,<br><strong style="color:#f4f4f0">P. Saravana Kumar</strong><br>Founder, Verdant Wealth Co.</p>
            </div>
            """
        )
        return jsonify({"success": True, "message": "Message sent successfully"})
    except Exception as e:
        print(f"Contact error: {e}")
        return jsonify({"success": False, "error": "Email service error. Please try again later."}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
