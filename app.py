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
import json
import re
import sqlite3
from datetime import datetime
import threading
from collections import defaultdict
import time

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)

# ── IN-MEMORY RATE LIMITER ────────────────────────────────────
# Allows MAX_REQUESTS per IP within WINDOW_SECONDS on /analyze
MAX_REQUESTS   = 10
WINDOW_SECONDS = 3600  # 1 hour

_rate_store = defaultdict(list)  # ip -> [timestamp, ...]

def is_rate_limited(ip):
    now = time.time()
    window_start = now - WINDOW_SECONDS
    # Prune old entries
    _rate_store[ip] = [t for t in _rate_store[ip] if t > window_start]
    if len(_rate_store[ip]) >= MAX_REQUESTS:
        return True
    _rate_store[ip].append(now)
    return False

# ── CONFIG ────────────────────────────────────────────────────
CONTACT_TO_EMAIL     = "ilamugilan343@gmail.com"


GROQ_API_KEY         = "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"
GROQ_MODEL           = "llama-3.3-70b-versatile"

# Live market / sector data keys (Alpha Vantage is used for sector performance; TwelveData is used for quotes)
ALPHA_VANTAGE_KEY    = os.getenv("ALPHA_VANTAGE_KEY", "")
TWELVEDATA_API_KEY   = "c14e487a134846cc998fefde9605f8e3"
MARKET_API_URL       = "https://api.twelvedata.com/quote"
DB_FILE              = "verdant_wealth.db"

# ── SQLITE INIT ──────────────────────────────────────────────
def init_db():
    try:
        with sqlite3.connect(DB_FILE) as conn:
            with open('schema.sql', 'r') as f:
                conn.executescript(f.read())
        print("✔ Connected to SQLite")
    except Exception as e:
        print(f"✘ SQLite connection failed: {e}")

# Initialize on startup
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
    # Run in a separate thread to avoid blocking the API response
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
    # TwelveData requires exchange suffixes (e.g., :NSE) for Indian stocks to resolve correctly
    symbols_list = ["NSEI", "NSEBANK", "RELIANCE:NSE", "TCS:NSE", "HDFCBANK:NSE", "INFY:NSE", "ICICIBANK:NSE", "USD/INR"]
    
    # Pretty labels for technical symbols
    label_map = {"NSEI": "NIFTY 50", "NSEBANK": "BANK NIFTY", "XAU/USD": "GOLD", "USD/INR": "USD/INR"}

    try:
        if not TWELVEDATA_API_KEY:
            raise ValueError("Missing TwelveData API key")

        # Use a batch request (comma-separated symbols) to improve performance and stay within rate limits
        params = {"symbol": ",".join(symbols_list), "apikey": TWELVEDATA_API_KEY}
        r = requests.get(MARKET_API_URL, params=params, timeout=12)
        r.raise_for_status()
        data = r.json()

        # For batch requests, TwelveData returns a dictionary where keys are the symbols
        ticks = []
        for s in symbols_list:
            q = data.get(s)
            if not q or q.get("status") == "error":
                continue

            price = float(q.get("close") or q.get("price") or 0)
            change = float(q.get("change") or 0)
            pct = float(q.get("percent_change") or 0)
            
            raw_sym = s.split(':')[0]
            display_label = label_map.get(raw_sym) or q.get("name") or raw_sym
            ticks.append({
                "label": display_label.upper(),
                "val": f"{price:,.2f}",
                "change": f"{change:+.2f} ({pct:+.2f}%)",
                "up": change >= 0
            })

        if not ticks:
            raise ValueError("No quotes returned")

        return jsonify({"success": True, "ticks": ticks})
    except Exception as e:
        print("market_data error", str(e))
        # Fallback static values
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

        # Use a batch request for Brent Crude, Gold, and USD/INR
        # TwelveData symbols for these are typically BRENT, XAU/USD, and USD/INR
        symbols_list = ["BRENT", "XAU/USD", "XAG/USD", "USD/INR", "BTC/USD"]
        
        params = {"symbol": ",".join(symbols_list), "apikey": TWELVEDATA_API_KEY}
        r = requests.get(MARKET_API_URL, params=params, timeout=12)
        r.raise_for_status()
        data = r.json()

        events = []
        
        # Process each symbol from the batch response
        for s in symbols_list:
            q = data.get(s)
            if not q or q.get("status") == "error":
                # Handle cases where a specific symbol might fail or not be found
                print(f"Error fetching {s}: {q.get('message', 'Unknown error') if q else 'No data'}")
                continue

            price = float(q.get("close") or q.get("price") or 0)
            pct = float(q.get("percent_change") or 0)
            
            # Map TwelveData symbols to more readable labels if needed
            display_symbol = s
            if s == "XAU/USD": display_symbol = "Gold"
            elif s == "XAG/USD": display_symbol = "Silver"
            elif s == "BRENT": display_symbol = "Brent Crude"
            elif s == "BTC/USD": display_symbol = "Bitcoin"

            events.append({
                "symbol": display_symbol,
                "value": f"{price:,.2f}",
                "impact": "HIGH" if abs(pct) > 1 else "MEDIUM", # Example logic for impact
                "note": f"{pct:+.2f}%"
            })

        if not events:
            raise ValueError("No world data")

        return jsonify({"success": True, "events": events})
    except Exception as e:
        print("world_data error", str(e))
        return jsonify({
            "success": True,
            "events": [
                {"symbol": "USD/INR", "value": "83.22", "impact": "HIGH", "note": "+0.25%"},
                {"symbol": "Brent", "value": "84.72", "impact": "MEDIUM", "note": "+1.1%"},
                {"symbol": "Gold", "value": "1,975", "impact": "MEDIUM", "note": "-0.4%"}
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
                sectors.append({"sector": k, "value": float(v.replace("%", "")), "direction": "up" if float(v.replace("%", "")) >= 0 else "down"})
            sectors.sort(key=lambda x: -x["value"])
            return jsonify({"success": True, "sectors": sectors[:8]})
        except Exception:
            pass
    # fallback
    return jsonify({
        "success": True,
        "sectors": [
            {"sector": "IT / Technology", "value": 2.4, "direction": "up"},
            {"sector": "Banking / BFSI", "value": -0.6, "direction": "down"},
            {"sector": "Pharma & Health", "value": 1.1, "direction": "up"},
            {"sector": "FMCG", "value": 0.0, "direction": "neutral"},
            {"sector": "Auto & EV", "value": 3.2, "direction": "up"},
            {"sector": "Metals & Mining", "value": -1.4, "direction": "down"},
            {"sector": "Infra & Cement", "value": 0.8, "direction": "up"},
            {"sector": "Energy / Oil & Gas", "value": 1.9, "direction": "up"}
        ]
    })


# ── AI ANALYZE ────────────────────────────────────────────────
@app.route("/analyze", methods=["POST"])
def analyze():
    ip = request.headers.get("X-Forwarded-For", request.remote_addr or "").split(",")[0].strip()
    if is_rate_limited(ip):
        return jsonify({"success": False, "error": "Rate limit reached. Please wait a moment before trying again."})

    data = request.get_json()
    query = data.get("query", "").strip()
    if not query:
        return jsonify({"success": False, "error": "No query provided"}), 400

    if not GROQ_API_KEY or GROQ_API_KEY.startswith("gsk_YOUR") or GROQ_API_KEY == "":
        # Provide a meaningful fallback for local development without an API key
        return jsonify({
            "success": True,
            "follow_ups": ["How do I set up my Groq API key?", "Tell me more about retirement planning.", "Contact Saravana Kumar for advice."],
            "cot_steps": [{"tag": "INFO", "text": "System is in Demo Mode. API key is missing or invalid."}],
            "scores": {"bullish": 60, "risk": 30, "confidence": 100},
            "sentiment": [{"label": "Market Stability", "score": 70, "color": "#4a9e6a"}],
            "full_analysis": "You are seeing this message because the GROQ_API_KEY is not configured in app.py. To enable live AI analysis, please obtain a free key from console.groq.com and update the backend configuration.",
            "alerts": [{"type": "info", "text": "Demo Mode Active"}],
            "mindmap_nodes": [{"id": "c", "label": "Demo Mode", "x": 450, "y": 200, "r": 42, "color": "#2ecc71", "root": True}],
            "mindmap_links": [], "portfolio_pie": [], "sector_data": [], "world_events": []
        })

    system_prompt = """You are Solari Prime — an elite AI financial intelligence engine for Indian markets, 
built by Verdant Wealth Co. and P. Saravana Kumar. You specialise in retirement and long-term planning 
for Indian investors. You analyse NIFTY, SENSEX, sectors, RBI policy, FII/DII flows, macro trends, 
and geopolitical impacts on Indian portfolios.

IMPORTANT: ALL scores, charts, mindmap nodes, sector data, world events, and pie allocations MUST be 
directly derived from and relevant to the specific query asked. Do NOT return generic placeholder data.
The confidence/bullish/risk scores must reflect your actual assessment of the specific topic queried.
STRICT: Limit 'full_analysis' to 250 words maximum. Ensure the JSON is compact to prevent truncation.

Respond ONLY with a valid JSON object (no markdown, no backticks, no preamble) with this exact structure:
{
  "success": true,
  "follow_ups": [
    "A specific question to deepen this analysis",
    "A related question about another sector or asset",
    "A question about specific retirement implications"
  ],
  "cot_steps": [
    {"tag": "MACRO", "text": "Specific macro factor directly relevant to this query..."},
    {"tag": "TECHNICAL", "text": "Technical analysis specific to the assets/sectors in this query..."},
    {"tag": "SENTIMENT", "text": "Current sentiment for the specific topic queried..."},
    {"tag": "RISK", "text": "Key risks specific to this query..."},
    {"tag": "SIGNAL", "text": "Actionable signal derived from this analysis..."}
  ],
  "scores": {
    "bullish": <0-100 integer based on your genuine assessment of the query topic — e.g. if query is about a bearish sector this should be low>,
    "risk": <0-100 integer reflecting actual risk level of this topic>,
    "confidence": <0-100 integer reflecting how confident you are in this analysis given data available>
  },
  "sentiment": [
    {"label": "<sentiment dimension 1 specific to the query>", "score": <0-100>, "color": "#4a9e6a"},
    {"label": "<sentiment dimension 2 specific to the query>", "score": <0-100>, "color": "#e05a3a"},
    {"label": "<sentiment dimension 3 specific to the query>", "score": <0-100>, "color": "#2ecc71"},
    {"label": "<sentiment dimension 4 specific to the query>", "score": <0-100>, "color": "#c8a96e"}
  ],
  "full_analysis": "Detailed multi-paragraph analysis addressing the query with specific Indian market context, data points, and retirement-grade insights...",
  "flowchart_reasoning": "Step by step decision framework specific to this query...",
  "world_analysis": "How current global macro events (US Fed, crude oil, DXY, China, geopolitics) specifically impact this query for Indian investors...",
  "sector_analysis": "Sector rotation insights directly relevant to this query...",
  "alerts": [
    {"type": "warn|info|danger", "text": "Alert specific to this query..."}
  ],
  "mindmap_nodes": [
    {"id": "c", "label": "<2-word core topic of query>", "x": 450, "y": 200, "r": 42, "color": "#2ecc71", "root": true},
    {"id": "n1", "label": "<key theme 1>", "x": 240, "y": 105, "r": 30, "color": "#8a9a8e"},
    {"id": "n2", "label": "<key theme 2>", "x": 660, "y": 105, "r": 30, "color": "#8a9a8e"},
    {"id": "n3", "label": "<key theme 3>", "x": 240, "y": 295, "r": 26, "color": "#4a9e6a"},
    {"id": "n4", "label": "<key theme 4>", "x": 660, "y": 295, "r": 26, "color": "#4a9e6a"},
    {"id": "n5", "label": "<sub-theme 1>", "x": 120, "y": 50, "r": 20, "color": "#8a9a8e"},
    {"id": "n6", "label": "<sub-theme 2>", "x": 360, "y": 30, "r": 20, "color": "#8a9a8e"},
    {"id": "n7", "label": "<sub-theme 3>", "x": 580, "y": 30, "r": 20, "color": "#8a9a8e"},
    {"id": "n8", "label": "<sub-theme 4>", "x": 780, "y": 175, "r": 18, "color": "#2ecc71"},
    {"id": "n9", "label": "<sub-theme 5>", "x": 660, "y": 360, "r": 18, "color": "#4a9e6a"},
    {"id": "n10", "label": "<sub-theme 6>", "x": 120, "y": 350, "r": 18, "color": "#4a9e6a"},
    {"id": "n11", "label": "<sub-theme 7>", "x": 100, "y": 210, "r": 18, "color": "#4a9e6a"}
  ],
  "mindmap_links": [["c","n1"],["c","n2"],["c","n3"],["c","n4"],["n1","n5"],["n1","n6"],["n2","n7"],["n2","n8"],["n4","n9"],["n3","n10"],["n3","n11"]],
  "portfolio_pie": [
    {"label": "<asset class 1 recommended for this query>", "value": <integer>, "color": "#2ecc71"},
    {"label": "<asset class 2>", "value": <integer>, "color": "#7a8e7e"},
    {"label": "<asset class 3>", "value": <integer>, "color": "#c8a96e"},
    {"label": "<asset class 4>", "value": <integer>, "color": "#4a9e6a"},
    {"label": "<asset class 5>", "value": <integer>, "color": "#2a6f24"}
  ],
  "sector_data": [
    {"sector": "<sector name most relevant to query>", "value": <float positive or negative momentum score>, "direction": "up|down|neutral"},
    {"sector": "<sector 2>", "value": <float>, "direction": "up|down|neutral"},
    {"sector": "<sector 3>", "value": <float>, "direction": "up|down|neutral"},
    {"sector": "<sector 4>", "value": <float>, "direction": "up|down|neutral"},
    {"sector": "<sector 5>", "value": <float>, "direction": "up|down|neutral"},
    {"sector": "<sector 6>", "value": <float>, "direction": "up|down|neutral"},
    {"sector": "<sector 7>", "value": <float>, "direction": "up|down|neutral"},
    {"sector": "<sector 8>", "value": <float>, "direction": "up|down|neutral"}
  ],
  "world_events": [
    {"symbol": "<global factor 1 relevant to India>", "value": "<current status>", "impact": "HIGH|MEDIUM|LOW", "note": "<how it affects Indian markets>"},
    {"symbol": "<global factor 2>", "value": "<current status>", "impact": "HIGH|MEDIUM|LOW", "note": "<impact>"},
    {"symbol": "<global factor 3>", "value": "<current status>", "impact": "HIGH|MEDIUM|LOW", "note": "<impact>"},
    {"symbol": "<global factor 4>", "value": "<current status>", "impact": "HIGH|MEDIUM|LOW", "note": "<impact>"},
    {"symbol": "<global factor 5>", "value": "<current status>", "impact": "HIGH|MEDIUM|LOW", "note": "<impact>"}
  ]
}"""

    try:
        resp = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": GROQ_MODEL,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": f"Analyse this for Indian retirement investors: {query}"}
                ],
                "response_format": {"type": "json_object"},
                "temperature": 0.4,
                "max_tokens": 4000
            },
            timeout=30
        )
        resp.raise_for_status()
        raw = resp.json()["choices"][0]["message"]["content"].strip()

        # Strip markdown fences if present
        raw = re.sub(r"^```json\s*", "", raw)
        raw = re.sub(r"^```\s*", "", raw)
        raw = re.sub(r"\s*```$", "", raw)

        result = json.loads(raw)
        result["success"] = True
        return jsonify(result)

    except json.JSONDecodeError:
        # Wrap raw response in expected structure if JSON parsing fails partially
        return jsonify({
            "success": True,
            "follow_ups": ["Try rephrasing your request", "Contact support if this persists"],
            "full_analysis": "The analysis was generated but required formatting correction. Raw output summary: " + (raw[:500] if 'raw' in locals() else "Parsing error."),
            "scores": {"bullish": 50, "risk": 50, "confidence": 0},
            "cot_steps": [{"tag": "SYSTEM", "text": "AI response format was non-standard."}],
            "sentiment": [], "alerts": [{"type": "warn", "text": "Partial analysis generated"}],
            "mindmap_nodes": [], "mindmap_links": [], "portfolio_pie": [], "sector_data": [], "world_events": []
        })
    except Exception:
        return jsonify({"success": False, "error": "Unable to reach AI intelligence engine. Please try again shortly."}), 500


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
        # Send notification to Saravana
        send_smtp_email(
            CONTACT_TO_EMAIL,
            f"New advisory enquiry — {name}",
            f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;background:#0d1a0f;color:#f4f4f0;padding:2rem;border-radius:8px">
              <div style="border-bottom:1px solid rgba(46,204,113,.3);padding-bottom:1rem;margin-bottom:1.5rem">
                <h2 style="color:#2ecc71;margin:0;font-size:1.2rem">New Advisory Enquiry</h2>
                <p style="color:#8a9a8e;margin:.3rem 0 0;font-size:.85rem">Verdant Wealth Co. · {datetime.now().strftime('%d %b %Y, %I:%M %p')}</p>
              </div>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:.6rem 0;color:#8a9a8e;font-size:.85rem;width:120px">Name</td><td style="padding:.6rem 0;color:#f4f4f0;font-size:.9rem"><strong>{name}</strong></td></tr>
                <tr><td style="padding:.6rem 0;color:#8a9a8e;font-size:.85rem">Email</td><td style="padding:.6rem 0;color:#2ecc71;font-size:.9rem"><a href="mailto:{email}" style="color:#2ecc71">{email}</a></td></tr>
                <tr><td style="padding:.6rem 0;color:#8a9a8e;font-size:.85rem">Phone</td><td style="padding:.6rem 0;color:#f4f4f0;font-size:.9rem">{phone}</td></tr>
                <tr><td style="padding:.6rem 0;color:#8a9a8e;font-size:.85rem">Plan interest</td><td style="padding:.6rem 0;color:#f4f4f0;font-size:.9rem">{plan}</td></tr>
                <tr><td style="padding:.6rem 0;color:#8a9a8e;font-size:.85rem">Referred by</td><td style="padding:.6rem 0;color:#f4f4f0;font-size:.9rem">{referral}</td></tr>
              </table>
              <div style="margin-top:1.5rem;padding:1rem;background:rgba(46,204,113,.06);border:1px solid rgba(46,204,113,.2);border-radius:4px">
                <p style="color:#8a9a8e;font-size:.8rem;margin:0 0 .5rem">Primary Goal</p>
                <p style="color:#f4f4f0;font-size:.9rem;margin:0;line-height:1.6">{goal}</p>
              </div>
              <div style="margin-top:1.5rem;text-align:center">
                <a href="mailto:{email}" style="background:#2ecc71;color:#090c09;padding:.7rem 1.5rem;border-radius:4px;text-decoration:none;font-weight:600;font-size:.85rem">Reply to {name}</a>
              </div>
            </div>
            """
        )

        # Send confirmation to user
        send_smtp_email(
            email,
            "We received your message — Verdant Wealth Co.",
            f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;background:#0d1a0f;color:#f4f4f0;padding:2rem;border-radius:8px">
              <div style="text-align:center;padding-bottom:1.5rem;border-bottom:1px solid rgba(46,204,113,.2);margin-bottom:1.5rem">
                <h1 style="color:#2ecc71;font-family:Georgia,serif;font-size:1.6rem;margin:0">Verdant Wealth Co.</h1>
                <p style="color:#8a9a8e;font-size:.8rem;margin:.4rem 0 0;letter-spacing:.1em;text-transform:uppercase">P. Saravana Kumar · Financial Advisor</p>
              </div>
              <h2 style="color:#f4f4f0;font-family:Georgia,serif;font-weight:300;font-size:1.4rem">Hi {name},</h2>
              <p style="color:#8a9a8e;line-height:1.8;font-size:.95rem">Thank you for reaching out. I've received your message and will personally review your goals and get back to you within <strong style="color:#f4f4f0">24 hours</strong>.</p>
              <p style="color:#8a9a8e;line-height:1.8;font-size:.95rem">In the meantime, you can book a free discovery call directly:</p>
              <div style="text-align:center;margin:2rem 0">
                <a href="https://calendly.com/ilamugilan343/new-meeting" style="background:#2ecc71;color:#090c09;padding:1rem 2rem;border-radius:4px;text-decoration:none;font-weight:600;font-size:.9rem">Schedule a Free Call →</a>
              </div>
              <p style="color:#8a9a8e;line-height:1.8;font-size:.9rem">Best regards,<br><strong style="color:#f4f4f0">P. Saravana Kumar</strong><br>Founder, Verdant Wealth Co.</p>
            </div>
            """
        )

        return jsonify({"success": True, "message": "Message sent successfully"})

    except Exception:
        return jsonify({"success": False, "error": "Email service error. Please try again later."}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
