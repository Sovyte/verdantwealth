/* ============================================================
   _shared.js — Verdant Wealth Co.
   All issues fixed:
   - #4  No SEBI badge anywhere
   - #6  Consistent navbar + WhatsApp icon added
   - #7  No social links / newsletter in footer
   - #8  Light mode navbar fixed (always readable)
   - #10 Consistent footer on ALL pages
   - #15 No Solari Prime / AI model mentions
   ============================================================ */

/* ── SITE DATA ── */
var SITE = {
  advisorPhoto: 'saravana.png',
  contact: {
    email: 'saravana@verdantwealth.co',
    whatsapp: 'https://wa.me/919876543210',
    calendly: 'https://calendly.com/ilamugilan343/new-meeting'
  },
  pricing: {
    basic: {
      name: 'Basic',
      amount: '4,000',
      cycle: 'per hour · pay as you go',
      popular: false,
      features: [
        '60-minute advisory session',
        'Financial health assessment',
        'Portfolio review & feedback',
        'Written recommendations',
        '24-hour response window'
      ]
    },
    pro: {
      name: 'Pro',
      amount: '4,999',
      cycle: 'per hour · priority access',
      popular: true,
      features: [
        'Everything in Basic',
        'Custom scenario modelling',
        'Tax-aware portfolio structuring',
        'Sector & macro calibration',
        'Priority response window',
        'Follow-up framework included'
      ]
    },
    elite: {
      name: 'Elite',
      amount: '7,999',
      cycle: 'per hour · full partnership',
      popular: false,
      features: [
        'Everything in Pro',
        'Complete wealth architecture',
        'Legacy & estate planning',
        'Advanced drawdown defence',
        '4-hour response incl. weekends',
        'Annual financial audit'
      ]
    }
  },
  faq: [
    { q: 'Who will I actually be working with?', a: 'You work directly with P. Saravana Kumar — always. There are no junior advisors, no handoffs, and no templates. Every session is with Saravana personally.' },
    { q: 'Is there a free trial or introductory offer?', a: 'Yes. We offer a free 15-minute discovery call via Calendly so you can meet Saravana, share your situation, and understand if this is the right fit — before any commitment.' },
    { q: 'Can I switch or cancel my plan?', a: 'Absolutely. Because our model is hourly, there is no lock-in. You can book sessions as needed and stop at any time. No cancellation fees.' },
    { q: 'I am an NRI. Can you advise on India-specific planning?', a: 'Yes. NRI planning is a core specialisation — including FEMA compliance, repatriation strategies, NRE/NRO accounts, taxation under DTAA, and sovereign gold bond eligibility.' },
    { q: 'How quickly do you respond between sessions?', a: 'Basic plan: within 24 hours on business days. Pro plan: priority queue, typically same day. Elite plan: within 4 hours including weekends.' },
    { q: 'Is my financial information kept confidential?', a: 'Completely. All client data is treated with strict confidentiality. We do not share any information with third parties. See our Privacy Policy for full details.' },
    { q: 'Do you manage money directly?', a: 'No. Verdant Wealth Co. is a pure advisory practice. Saravana provides expert guidance and recommendations — you retain full control of your accounts and execute decisions yourself.' }
  ],
  testimonials: [
    { quote: 'Saravana restructured my entire retirement corpus in two sessions. I finally understand exactly what I own and why. No jargon, no confusion — just clarity.', name: 'Rajan Mehta', role: 'Retired IAS Officer · New Delhi', initials: 'RM', stars: 5 },
    { quote: 'As an NRI in Dubai, navigating FEMA and Indian taxation felt impossible. Saravana mapped everything out clearly and got my repatriation structure right on the first attempt.', name: 'Priya Nair', role: 'NRI Professional · Dubai', initials: 'PN', stars: 5 },
    { quote: 'I had three different funds all doing the same thing. Saravana spotted the overlap immediately, consolidated my portfolio, and freed up capital I did not even know was sitting idle.', name: 'Krishnamurthy S.', role: 'Business Owner · Chennai', initials: 'KS', stars: 5 }
  ],
  ticker: [
    { label: 'NIFTY 50', val: '22,450', change: '+1.12%', up: true },
    { label: 'BANK NIFTY', val: '48,210', change: '+0.72%', up: true },
    { label: 'SENSEX', val: '73,890', change: '+0.98%', up: true },
    { label: 'USD/INR', val: '83.45', change: '+0.04%', up: true },
    { label: 'GOLD MCX', val: '₹72,400', change: '+0.65%', up: true },
    { label: 'NIFTY IT', val: '38,640', change: '+2.10%', up: true },
    { label: 'NIFTY AUTO', val: '22,180', change: '+1.90%', up: true },
    { label: 'NIFTY METAL', val: '8,920', change: '-1.40%', up: false },
    { label: 'BRENT CRUDE', val: '$84.15', change: '+0.32%', up: true },
    { label: '10Y GSEC', val: '6.82%', change: '-0.03%', up: false }
  ]
};

/* ── NAV ── Fixed Issue #6 (consistency + WhatsApp) + Issue #8 (light mode) */
function renderNav(active) {
  var links = [
    { href: 'about.html', key: 'about', label: 'About' },
    { href: 'services.html', key: 'services', label: 'Services' },
    { href: 'market.html', key: 'updates', label: 'Markets' },
    { href: 'pricing.html', key: 'pricing', label: 'Pricing' },
    { href: 'blog.html', key: 'blog', label: 'Blog' },
    { href: 'faq.html', key: 'faq', label: 'FAQ' }
  ];

  var linkHTML = links.map(function(l) {
    var isActive = l.key === active;
    return '<a href="' + l.href + '" class="nav-link' + (isActive ? ' active' : '') + '">' + l.label + '</a>';
  }).join('');

  var navHTML = '<nav class="nav" id="sharedNav">' +
    '<a href="index.html" class="nav-logo">' +
      '<svg width="24" height="28" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M4,4 L64,4 L64,50 Q64,72 34,74 Q4,72 4,50 Z" fill="#0d1a0f" stroke="#22c55e" stroke-width="2"/>' +
        '<polygon points="34,16 46,32 34,29 22,32" fill="#1a7a48"/>' +
        '<polygon points="22,32 34,29 34,58 23,46" fill="#155e38"/>' +
        '<polygon points="46,32 34,29 34,58 45,46" fill="#22a05a"/>' +
        '<polygon points="23,46 34,58 45,46 34,29" fill="#0f4a2a"/>' +
        '<polyline points="34,16 46,32 45,46 34,58 23,46 22,32 34,16" fill="none" stroke="#22c55e" stroke-width="1" opacity=".85"/>' +
      '</svg>' +
      '<span class="nav-logo-text">Verdant <em>Wealth Co.</em></span>' +
    '</a>' +
    '<div class="nav-links">' + linkHTML + '</div>' +
    '<div class="nav-actions">' +
      '<a href="' + SITE.contact.whatsapp + '" class="nav-wa" target="_blank" rel="noopener" title="WhatsApp">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
      '</a>' +
      '<a href="contact.html" class="nav-cta">Book a Call →</a>' +
      '<button class="nav-burger" onclick="toggleMobileMenu()" aria-label="Menu">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</div>' +
  '</nav>' +
  '<div class="mobile-menu" id="mobileMenu">' +
    '<button class="mm-close" onclick="toggleMobileMenu()">✕</button>' +
    links.map(function(l) { return '<a href="' + l.href + '" onclick="toggleMobileMenu()">' + l.label + '</a>'; }).join('') +
    '<a href="contact.html" class="mm-cta" onclick="toggleMobileMenu()">Book a Call →</a>' +
  '</div>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  _initNav();
}

function _initNav() {
  var nav = document.getElementById('sharedNav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });
}

function toggleMobileMenu() {
  var m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

/* ── FOOTER ── Fixed Issue #10 (consistent on all pages) + #7 (no newsletter/social) */
function renderFooter() {
  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="sf-inner">' +
        '<div class="sf-top">' +
          '<div class="sf-brand">' +
            '<a href="index.html" class="sf-logo">' +
              '<svg width="22" height="26" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M4,4 L64,4 L64,50 Q64,72 34,74 Q4,72 4,50 Z" fill="#0d1a0f" stroke="#22c55e" stroke-width="2"/>' +
                '<polygon points="34,16 46,32 34,29 22,32" fill="#1a7a48"/>' +
                '<polygon points="22,32 34,29 34,58 23,46" fill="#155e38"/>' +
                '<polygon points="46,32 34,29 34,58 45,46" fill="#22a05a"/>' +
                '<polygon points="23,46 34,58 45,46 34,29" fill="#0f4a2a"/>' +
                '<polyline points="34,16 46,32 45,46 34,58 23,46 22,32 34,16" fill="none" stroke="#22c55e" stroke-width="1" opacity=".85"/>' +
              '</svg>' +
              '<span>Verdant <em>Wealth Co.</em></span>' +
            '</a>' +
            '<p class="sf-tagline">Your wealth, intelligently cultivated.<br>Personal 1:1 advisory with P. Saravana Kumar.</p>' +
          '</div>' +
          '<div class="sf-cols">' +
            '<div class="sf-col">' +
              '<div class="sf-col-title">Advisory</div>' +
              '<a href="services.html">Services</a>' +
              '<a href="pricing.html">Pricing</a>' +
              '<a href="about.html">About Saravana</a>' +
              '<a href="market.html">Market Updates</a>' +
            '</div>' +
            '<div class="sf-col">' +
              '<div class="sf-col-title">Resources</div>' +
              '<a href="blog.html">Blog</a>' +
              '<a href="faq.html">FAQ</a>' +
              '<a href="' + SITE.contact.calendly + '" target="_blank" rel="noopener">Book a Call</a>' +
              '<a href="contact.html">Contact</a>' +
            '</div>' +
            '<div class="sf-col">' +
              '<div class="sf-col-title">Legal</div>' +
              '<a href="privacy.html">Privacy Policy</a>' +
              '<a href="terms.html">Terms of Service</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="sf-bot">' +
          '<span class="sf-copy">© 2026 Verdant Wealth Co. · P. Saravana Kumar. All rights reserved.</span>' +
          '<div class="sf-status"><span class="sf-dot"></span> NSE · BSE · MCX Live</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

/* ── TICKER ── */
function renderTicker(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var html = SITE.ticker.concat(SITE.ticker).map(function(t) {
    var cls = t.up ? 'up' : 'dn';
    return '<span class="tk-item ' + cls + '">' +
      '<span class="tk-name">' + t.label + '</span>' +
      '<span class="tk-val">' + t.val + '</span>' +
      '<span class="tk-chg">' + (t.up ? '▲' : '▼') + ' ' + t.change + '</span>' +
    '</span>';
  }).join('');
  el.innerHTML = html;
}

/* ── REVEAL ── Intersection Observer for scroll animations */
function initReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(function(el) { io.observe(el); });
}

/* ── TESTIMONIALS ── */
function renderTestimonials(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = SITE.testimonials.map(function(t) {
    return '<div class="testimonial-card reveal">' +
      '<div class="testimonial-stars">' + '★'.repeat(t.stars) + '</div>' +
      '<p class="testimonial-quote">"' + t.quote + '"</p>' +
      '<div class="testimonial-person">' +
        '<div class="testimonial-av">' + t.initials + '</div>' +
        '<div><div class="testimonial-name">' + t.name + '</div><div class="testimonial-role">' + t.role + '</div></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* ── FAQ ── Fixed Issue #1 (accordion not opening) + #2 (consistency) */
function initFAQ(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = SITE.faq.map(function(f, i) {
    return '<div class="faq-item" id="faq-' + i + '">' +
      '<button class="faq-q" onclick="toggleFAQ(' + i + ')">' +
        '<span>' + f.q + '</span>' +
        '<span class="faq-icon">+</span>' +
      '</button>' +
      '<div class="faq-a" id="faq-a-' + i + '">' +
        '<div class="faq-a-inner">' + f.a + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function toggleFAQ(i) {
  var item = document.getElementById('faq-' + i);
  var ans = document.getElementById('faq-a-' + i);
  if (!item || !ans) return;
  var isOpen = item.classList.contains('open');
  // close all
  document.querySelectorAll('.faq-item').forEach(function(el) { el.classList.remove('open'); });
  document.querySelectorAll('.faq-a').forEach(function(el) { el.style.maxHeight = ''; });
  if (!isOpen) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

/* ── LOADING SCREEN ── */
function hideLoading() {
  var ls = document.getElementById('loadingScreen');
  if (ls) { ls.style.opacity = '0'; ls.style.pointerEvents = 'none'; ls.style.visibility = 'hidden'; }
}

/* ── INIT ALL ── */
function initAll() {
  initReveal();
  // Floating WhatsApp button (fixed, bottom-right)
  var wa = document.createElement('a');
  wa.href = SITE.contact.whatsapp;
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.className = 'wa-float';
  wa.title = 'WhatsApp Saravana';
  wa.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(wa);
}

function initAnalytics() { /* placeholder */ }
