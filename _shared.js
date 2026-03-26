/* ── AUTO-HIDE LOADING SCREEN (fires as soon as this script loads) ── */
(function(){
  function doHide(){
    var ls=document.getElementById('loadingScreen');
    if(ls){ls.style.transition='opacity .5s ease';ls.style.opacity='0';
    setTimeout(function(){ls.style.visibility='hidden';ls.style.pointerEvents='none';},500);}
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){setTimeout(doHide,800);});
  } else {
    setTimeout(doHide,800);
  }
})();

/* ============================================================
   VERDANT WEALTH CO. — MASTER SITE CONFIG
   ✏️  Edit ALL constants here. One file controls everything.
   ============================================================ */

const SITE = {

  /* ── Brand ── */
  brand:    'Verdant Wealth Co.',
  tagline:  'Your wealth, intelligently cultivated.',
  advisor:  'P. Saravana Kumar',
  year:     '2026',

  /* ── Theme ── */
  defaultTheme: 'dark',

  /* ── Photo ── */
  advisorPhoto: 'saravana.png',

  /* ── Pages ── */
  pages: {
    home:      'index.html',
    about:     'about.html',
    services:  'services.html',
    models:    'models.html',
    analyzer:  'analyzer.html',
    pricing:   'pricing.html',
    blog:      'blog.html',
    faq:       'faq.html',
    contact:   'contact.html',
    privacy:   'privacy.html',
    terms:     'terms.html',
    notfound:  '404.html',
  },

  /* ── Contact ── */
  contact: {
    email:    'ilamugilan343@gmail.com',
    phone:    '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    location: 'Chennai, Tamil Nadu, India',
    calendly: 'https://calendly.com/ilamugilan343/new-meeting',
  },

  /* ── Social ── */
  social: {
    twitter:   '#',
    linkedin:  '#',
    youtube:   '#',
    instagram: '#',
  },

  /* ── API endpoints ── */
  api: {
    baseUrl:         'http://127.0.0.1:8080',
    analyzeEndpoint: 'http://127.0.0.1:8080/analyze',
    contactEndpoint: 'http://127.0.0.1:8080/contact',
    welcomeEndpoint: 'http://127.0.0.1:8080/send-welcome',
  },

  /* ── Supabase ── */
  supabase: {
    url:     'https://aivctqxlrzpucahuaxsy.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpdmN0cXhscnpwdWNhaHVheHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NDE5NTYsImV4cCI6MjA4OTIxNzk1Nn0.GOZZ6Z-WqcGRm9fEmrFwVZm6NKzAcrArfkh7xqOa9Hg',
  },

  /* ── Analytics ── */
  analytics: {
    googleId: 'YOUR_GA_MEASUREMENT_ID',
  },

  /* ── Database ── */
  database: {
    type: 'sqlite',
    file: 'verdant_wealth.db',
    enabled: true
  },

  /* ── Pricing ── */
  pricing: {
    basic: {
      name:    'Basic',
      amount:  '4,000',
      cycle:   'per hour',
      popular: false,
      features: [
        'Real-time hourly advisory coverage',
        'Precise goal alignment in every hour',
        'Focused cashflow and risk review',
        'Tactical position and allocation input',
        'Straightforward execution checklist',
      ],
    },
    pro: {
      name:    'Pro',
      amount:  '4,999',
      cycle:   'per hour',
      popular: true,
      features: [
        'Premium hourly consult with deeper modeling',
        'Custom scenario design & capital plan',
        'Tax-aware portfolio structuring',
        'Sector and macro factor calibration',
        'Priority response window',
        'Actionable follow-up framework',
      ],
    },
    elite: {
      name:    'Elite',
      amount:  '7,999',
      cycle:   'per hour',
      popular: false,
      features: [
        'Executive-level hourly strategy session',
        'Complete wealth architecture and legacy planning',
        'Advanced risk overlay and drawdown defense',
        'Personalized high-conviction investment blueprints',
        'Dedicated support with rapid turnaround',
        'High-touch execution review and optimization',
      ],
    },
  },

  /* ── Testimonials ── */
  testimonials: [
    {
      name:     'Rajesh Menon',
      role:     'Senior Engineer, TCS · Chennai',
      quote:    'Saravana completely changed how I think about money. Within 6 months I had a clear retirement plan, a rebalanced portfolio, and for the first time in years I actually sleep well knowing my family\'s future is secure.',
      stars:    5,
      initials: 'RM',
    },
    {
      name:     'Priya & Arun Nair',
      role:     'Business Owners · Coimbatore',
      quote:    'We came to Saravana with no financial plan and a lot of anxiety. He was patient, direct, and never talked down to us. The AI tools gave us confidence that our decisions are backed by real data — not just gut feel.',
      stars:    5,
      initials: 'PN',
    },
    {
      name:     'Deepak Subramaniam',
      role:     'NRI · Dubai, UAE',
      quote:    'Managing wealth from abroad is complicated. Saravana understands the NRI situation deeply — tax implications, repatriation, dual-country planning. The Pro plan is worth every rupee. My India portfolio has never been better managed.',
      stars:    5,
      initials: 'DS',
    },
    {
      name:     'Kavitha Rajan',
      role:     'Doctor · Bengaluru',
      quote:    'I was sceptical of financial advisors — most just push products. Saravana is different. He listened first, then built a plan around my actual goals. Two years in, I am on track to retire at 55.',
      stars:    5,
      initials: 'KR',
    },
    {
      name:     'Vikram Sharma',
      role:     'Entrepreneur · Mumbai',
      quote:    'The Elite plan is genuinely elite. Bi-weekly calls, instant responses, and an advisor who knows my business and personal situation in depth. The AI analyzer flagged a sector risk I would have completely missed.',
      stars:    5,
      initials: 'VS',
    },
    {
      name:     'Anita Krishnamurthy',
      role:     'School Principal · Madurai',
      quote:    'I never thought I earned enough to need a financial advisor. Saravana showed me that\'s exactly the wrong way to think. Starting with the Basic consultation changed everything. I am now building real wealth on a teacher\'s salary.',
      stars:    5,
      initials: 'AK',
    },
  ],

  faq: [
    {
      q: 'Who will I actually be working with?',
      a: 'Always P. Saravana Kumar — the founder. There are no junior advisors, no handoffs, and no automated replacements for human judgement. Every client gets Saravana directly.',
    },
    {
      q: 'Is there a free trial or introductory offer?',
      a: 'The Basic plan at ₹4,500 is designed as a risk-free entry point. You receive a full 60-minute session, a financial health assessment, and a Solari Prime AI report before committing to any ongoing plan.',
    },
    {
      q: 'Can I switch or cancel my plan?',
      a: 'Yes. You can upgrade, downgrade, or cancel at any time with 30 days written notice. Saravana will personally walk you through the transition to ensure continuity.',
    },
    {
      q: 'I am an NRI. Can you advise on India-specific planning?',
      a: 'Absolutely. Saravana has deep experience with NRI financial planning — FEMA regulations, NRE/NRO accounts, repatriation, double taxation, and India portfolio management from abroad.',
    },
    {
      q: 'What does the AI analysis actually do?',
      a: 'The Solari Prime engine analyses NIFTY, sector momentum, RBI policy, FII/DII flows, global macro events, and more — producing a structured report with confidence scores, risk alerts, and a step-by-step reasoning chain.',
    },
    {
      q: 'How quickly do you respond?',
      a: 'Basic and Pro clients receive responses within 24 business hours. Elite clients receive a concierge response within 4 hours, including weekends for urgent matters.',
    },
    {
      q: 'Is my financial information kept confidential?',
      a: 'Completely. All client data is encrypted in transit and at rest via Supabase, handled with strict confidentiality, and never shared with third parties under any circumstances.',
    },
    {
      q: 'Do you manage money directly?',
      a: 'No. Saravana provides advisory and planning services — investment decisions and execution remain entirely in your hands. This keeps the relationship transparent and conflict-free.',
    },
  ],

  /* ── Blog posts ── */
  blog: [
    {
      slug:     'rbi-rate-cycle-2026',
      title:    'The RBI rate cycle and what it means for your retirement portfolio in 2026',
      excerpt:  'With the MPC holding rates steady for the third consecutive quarter, here is what every long-term investor should be doing with their debt and equity allocation right now.',
      date:     'March 2026',
      readTime: '6 min read',
      tags:     ['RBI', 'Retirement', 'Portfolio'],
      featured: true,
      body:     '',
    },
    {
      slug:     'nri-india-planning-guide',
      title:    'The complete NRI guide to building wealth in India from abroad',
      excerpt:  'Managing Indian assets from Dubai, Singapore, or London comes with unique challenges — FEMA rules, repatriation limits, NRE vs NRO accounts. Here is the full picture.',
      date:     'February 2026',
      readTime: '8 min read',
      tags:     ['NRI', 'Planning', 'Tax'],
      featured: false,
      body:     '',
    },
    {
      slug:     'retire-at-55-india',
      title:    'How to retire at 55 in India — a realistic roadmap',
      excerpt:  'Early retirement is not just for the ultra-wealthy. With the right strategy starting in your 30s, retiring at 55 is achievable on a normal Indian salary. Here is the maths.',
      date:     'January 2026',
      readTime: '7 min read',
      tags:     ['Retirement', 'Planning', 'Strategy'],
      featured: false,
      body:     '',
    },
    {
      slug:     'gold-vs-equity-2026',
      title:    'Gold vs equities for Indian retirement portfolios — the 2026 case',
      excerpt:  'With gold at all-time highs and NIFTY volatile, where should the next decade of savings go? Solari Prime data and Saravana\'s take.',
      date:     'December 2025',
      readTime: '5 min read',
      tags:     ['Gold', 'Equity', 'Allocation'],
      featured: false,
      body:     '',
    },
    {
      slug:     'fii-dii-explained',
      title:    'FII vs DII flows explained — and why it matters for your portfolio',
      excerpt:  'Foreign and domestic institutional investors move markets. Understanding their behaviour is one of the most useful edges a retail investor can have.',
      date:     'November 2025',
      readTime: '5 min read',
      tags:     ['FII/DII', 'Macro', 'Markets'],
      featured: false,
      body:     '',
    },
    {
      slug:     'ai-in-personal-finance',
      title:    'How AI is changing personal finance — and what it means for you',
      excerpt:  'The technology behind Solari Prime, and why AI-augmented advice is the next evolution of financial planning for individual investors.',
      date:     'October 2025',
      readTime: '6 min read',
      tags:     ['AI', 'Technology', 'Future'],
      featured: false,
      body:     '',
    },
  ],

  /* ── Ticker ── */
  ticker: [
    {label:'NIFTY 50',  val:'22,450', change:'+1.12%', up:true},
    {label:'BANK NIFTY',val:'48,210', change:'+0.85%', up:true},
    {label:'SENSEX',    val:'73,980', change:'+0.92%', up:true},
    {label:'USD/INR',   val:'83.45',  change:'+0.04%', up:true},
    {label:'RELIANCE',  val:'2,910',  change:'+1.45%', up:true},
    {label:'TCS',       val:'3,820',  change:'+0.25%', up:true},
    {label:'INFY',      val:'1,585',  change:'-0.42%', up:false},
    {label:'GOLD',      val:'$2,150', change:'+0.65%', up:true},
    {label:'SILVER',    val:'$24.80', change:'+1.20%', up:true},
    {label:'BRENT',     val:'$84.15', change:'-0.35%', up:false},
    {label:'BITCOIN',   val:'$68,200',change:'+3.10%', up:true},
  ],

  /* ── Hero stats ── */
  heroStats: [
    {num:'20+',  lbl:'Years Experience'},
    {num:'200+', lbl:'Families Served'},
    {num:'1:1',  lbl:'Direct Advisory'},
    {num:'6',    lbl:'AI Models'},
  ],

  /* ── AI Analyzer chips ── */
  analyzerChips: [
    'Analyze NIFTY50 outlook for retirement portfolio over next 12 months',
    'Best sectors for retirement wealth building considering RBI policy',
    'FII vs DII flow analysis and impact on long-term portfolio',
    'Impact of RBI rate cycle on debt and equity allocation for retirement',
    'Gold vs equity allocation strategy for Indian retirement portfolio',
  ],

  /* ── Model pages ── */
  modelPages: {
    solari:'models.html', pythia:'models.html', scutum:'models.html',
    mercur:'models.html', bellator:'models.html', janus:'models.html',
  },

  legal: {privacy:'privacy.html', terms:'terms.html'},
};

/* ═══════════════════════════════════════════════════════════
   THEME SYSTEM
═══════════════════════════════════════════════════════════ */
(function(){
  var saved = localStorage.getItem('vwc_theme') || SITE.defaultTheme;
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme(){
  var cur = document.documentElement.getAttribute('data-theme');
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('vwc_theme', next);
  var btn = document.getElementById('themeToggle');
  if(btn) btn.textContent = next === 'dark' ? '☀' : '☽';
}

/* ═══════════════════════════════════════════════════════════
   TRACKING
═══════════════════════════════════════════════════════════ */
function trackEvent(eventName, data) {
  if (SITE.database && SITE.database.enabled) {
    console.log('[DB Log] Event: ' + eventName, data);
  }
}

/* ═══════════════════════════════════════════════════════════
   LOGO SVG
═══════════════════════════════════════════════════════════ */
function logoSVG(w,h){
  w=w||34;h=h||38;
  return '<svg width="'+w+'" height="'+h+'" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0"><path d="M4,4 L64,4 L64,50 Q64,72 34,74 Q4,72 4,50 Z" fill="var(--logo-bg)" stroke="#2ecc71" stroke-width="1.8"/><polygon points="34,16 46,32 34,29 22,32" fill="#1a7a48"/><polygon points="22,32 34,29 34,58 23,46" fill="#155e38"/><polygon points="46,32 34,29 34,58 45,46" fill="#22a05a"/><polygon points="23,46 34,58 45,46 34,29" fill="#0f4a2a"/><polygon points="22,32 46,32 45,46 23,46" fill="#2ecc71" opacity="0.22"/><polyline points="34,16 46,32 45,46 34,58 23,46 22,32 34,16" fill="none" stroke="#2ecc71" stroke-width="0.9" opacity="0.8"/><line x1="34" y1="16" x2="34" y2="29" stroke="#2ecc71" stroke-width="0.6" opacity="0.5"/><line x1="34" y1="29" x2="22" y2="32" stroke="#2ecc71" stroke-width="0.6" opacity="0.5"/><line x1="34" y1="29" x2="46" y2="32" stroke="#2ecc71" stroke-width="0.6" opacity="0.5"/><line x1="34" y1="29" x2="34" y2="58" stroke="#2ecc71" stroke-width="0.5" opacity="0.3"/></svg>';
}

/* ═══════════════════════════════════════════════════════════
   NAV RENDERER  (no cursor div, no cursor ring)
═══════════════════════════════════════════════════════════ */
function renderNav(activePage){
  activePage = activePage||'';
  var p = SITE.pages;
  document.write(
    '<nav id="mainNav">' +
      '<a href="'+p.home+'" class="nav-logo-link">' +
        logoSVG(30,34) +
        '<span class="nav-brand">Verdant <span>Wealth</span> Co.</span>' +
      '</a>' +
      '<ul class="nav-links" id="navLinks">' +
        '<li><a href="'+p.home+'"     class="'+(activePage==='home'?'nav-active':'')+'">Home</a></li>' +
        '<li><a href="'+p.about+'"    class="'+(activePage==='about'?'nav-active':'')+'">About</a></li>' +
        '<li><a href="'+p.services+'" class="'+(activePage==='services'?'nav-active':'')+'">Services</a></li>' +
        '<li><a href="'+p.models+'"   class="'+(activePage==='models'?'nav-active':'')+'">AI Models</a></li>' +
        '<li><a href="'+p.analyzer+'" class="'+(activePage==='analyzer'?'nav-active':'')+'">Analyzer</a></li>' +
        '<li><a href="'+p.pricing+'"  class="'+(activePage==='pricing'?'nav-active':'')+'">Pricing</a></li>' +
        '<li><a href="'+p.faq+'"      class="'+(activePage==='faq'?'nav-active':'')+'">FAQ</a></li>' +
        '<li><a href="'+p.blog+'"     class="'+(activePage==='blog'?'nav-active':'')+'">Blog</a></li>' +
      '</ul>' +
      '<div class="nav-right">' +
        '<button id="themeToggle" class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">☀</button>' +
        '<a href="'+p.contact+'" class="nav-cta">Get Personalized Advice</a>' +
        '<button class="nav-hamburger" id="navHamburger" onclick="toggleMobileNav()" aria-label="Open menu">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</nav>' +
    '<div class="mobile-nav" id="mobileNav" role="dialog" aria-label="Navigation menu">' +
      '<ul>' +
        '<li><a href="'+p.home+'"     onclick="toggleMobileNav()">Home</a></li>' +
        '<li><a href="'+p.about+'"    onclick="toggleMobileNav()">About</a></li>' +
        '<li><a href="'+p.services+'" onclick="toggleMobileNav()">Services</a></li>' +
        '<li><a href="'+p.models+'"   onclick="toggleMobileNav()">AI Models</a></li>' +
        '<li><a href="'+p.analyzer+'" onclick="toggleMobileNav()">Analyzer</a></li>' +
        '<li><a href="'+p.pricing+'"  onclick="toggleMobileNav()">Pricing</a></li>' +
        '<li><a href="'+p.faq+'"      onclick="toggleMobileNav()">FAQ</a></li>' +
        '<li><a href="'+p.blog+'"     onclick="toggleMobileNav()">Blog</a></li>' +
        '<li><a href="'+p.contact+'"  onclick="toggleMobileNav()">Contact</a></li>' +
      '</ul>' +
    '</div>'
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER RENDERER
═══════════════════════════════════════════════════════════ */
function renderFooter(){
  var p=SITE.pages, mp=SITE.modelPages, s=SITE.social;
  document.write(
    '<footer>' +
      '<div class="footer-top">' +
        '<div class="footer-brand-col">' +
          '<a href="'+p.home+'" class="footer-logo-link">' +
            logoSVG(26,30) +
            '<span class="footer-brand-name">Verdant <span>Wealth</span> Co.</span>' +
          '</a>' +
          '<p class="foot-tagline">'+SITE.tagline+'<br>Built for every Indian investor.</p>' +
          '<div class="foot-social">' +
            '<a href="'+s.twitter+'"   title="Twitter"   target="_blank" rel="noopener">𝕏</a>' +
            '<a href="'+s.linkedin+'"  title="LinkedIn"  target="_blank" rel="noopener">in</a>' +
            '<a href="'+s.youtube+'"   title="YouTube"   target="_blank" rel="noopener">▶</a>' +
            '<a href="'+s.instagram+'" title="Instagram" target="_blank" rel="noopener">◎</a>' +
          '</div>' +
          '<a href="'+SITE.contact.calendly+'" target="_blank" rel="noopener" class="footer-calendly-btn">📅 Book a Free Session</a>' +
        '</div>' +
        '<div>' +
          '<div class="foot-col-title">AI Models</div>' +
          '<ul class="foot-col-links">' +
            '<li><a href="'+mp.solari+'">Solari Prime <span class="link-badge">Live</span></a></li>' +
            '<li><a href="'+mp.pythia+'">Pythia <span class="link-badge">Soon</span></a></li>' +
            '<li><a href="'+mp.scutum+'">Scutum <span class="link-badge">Soon</span></a></li>' +
            '<li><a href="'+mp.mercur+'">Mercur <span class="link-badge">Soon</span></a></li>' +
            '<li><a href="'+mp.bellator+'">Bellator <span class="link-badge">Soon</span></a></li>' +
            '<li><a href="'+mp.janus+'">Janus <span class="link-badge">Soon</span></a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<div class="foot-col-title">Advisory</div>' +
          '<ul class="foot-col-links">' +
            '<li><a href="'+p.services+'">Services</a></li>' +
            '<li><a href="'+p.pricing+'">Pricing</a></li>' +
            '<li><a href="'+p.about+'">About Saravana</a></li>' +
            '<li><a href="'+p.analyzer+'">AI Analyzer</a></li>' +
            '<li><a href="'+p.blog+'">Blog</a></li>' +
            '<li><a href="'+p.contact+'">Contact</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<div class="foot-col-title">Company</div>' +
          '<ul class="foot-col-links">' +
            '<li><a href="'+p.about+'">About</a></li>' +
            '<li><a href="'+p.blog+'">Blog</a></li>' +
            '<li><a href="'+p.contact+'">Contact</a></li>' +
            '<li><a href="'+p.privacy+'">Privacy Policy</a></li>' +
            '<li><a href="'+p.terms+'">Terms of Service</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<div class="foot-copy">© '+SITE.year+' '+SITE.brand+' · '+SITE.advisor+'. All rights reserved.</div>' +
        '<div class="foot-status"><span class="sdot"></span>NSE · BSE · MCX Live</div>' +
      '</div>' +
    '</footer>' +
    '<a href="https://wa.me/'+SITE.contact.whatsapp.replace(/[^0-9]/g,'')+'" target="_blank" rel="noopener" class="whatsapp-float" title="Chat on WhatsApp">' +
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    '</a>' +
    '<div class="cookie-banner" id="cookieBanner">' +
      '<div class="cookie-content">' +
        '<p>We use cookies to improve your experience. <a href="'+SITE.legal.privacy+'">Privacy Policy</a></p>' +
        '<div class="cookie-btns">' +
          '<button onclick="acceptCookies()" class="cookie-accept">Accept All</button>' +
          '<button onclick="declineCookies()" class="cookie-decline">Decline</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

/* ═══════════════════════════════════════════════════════════
   SHARED UTILITIES
═══════════════════════════════════════════════════════════ */

/* initCursor — no-op; custom cursor removed */
function initCursor(){ /* intentionally empty */ }

function initReveal(){
  var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.07});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
}

function initNavScroll(){
  window.addEventListener('scroll',function(){
    var nav=document.getElementById('mainNav');
    if(nav)nav.classList.toggle('scrolled',window.scrollY>60);
  });
}

function toggleMobileNav(){
  var nav=document.getElementById('mobileNav');
  var btn=document.getElementById('navHamburger');
  if(!nav)return;
  var isOpen = nav.classList.toggle('open');
  if(btn)btn.classList.toggle('open', isOpen);
  // Prevent body scroll when menu open
  document.body.style.overflow = isOpen ? 'hidden' : '';
  if(btn)btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

// Close mobile nav on Escape key
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    var nav = document.getElementById('mobileNav');
    if(nav && nav.classList.contains('open')) toggleMobileNav();
  }
});

function getSupabase(){
  if(window._sb)return window._sb;
  if(window.supabase&&window.supabase.createClient){
    window._sb=window.supabase.createClient(SITE.supabase.url,SITE.supabase.anonKey);
    return window._sb;
  }
  return null;
}

function acceptCookies(){localStorage.setItem('vwc_cookies','accepted');var b=document.getElementById('cookieBanner');if(b)b.classList.remove('visible');}
function declineCookies(){localStorage.setItem('vwc_cookies','declined');var b=document.getElementById('cookieBanner');if(b)b.classList.remove('visible');}

function initCookieBanner(){
  if(!localStorage.getItem('vwc_cookies')){
    setTimeout(function(){var b=document.getElementById('cookieBanner');if(b)b.classList.add('visible');},2500);
  }
}

function initTheme(){
  var saved = localStorage.getItem('vwc_theme') || SITE.defaultTheme || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

function initThemeBtn(){
  var btn=document.getElementById('themeToggle');
  if(btn){
    var cur=document.documentElement.getAttribute('data-theme')||'dark';
    btn.textContent = cur==='dark'?'☀':'☽';
  }
}

function initBackToTop(){
  if(document.getElementById('backToTop'))return;
  var b=document.createElement('button');
  b.id='backToTop';
  b.className='back-to-top';
  b.innerHTML='↑';
  b.title='Back to Top';
  b.setAttribute('aria-label','Back to top');
  b.onclick=function(){window.scrollTo({top:0,behavior:'smooth'});};
  document.body.appendChild(b);
  window.addEventListener('scroll',function(){
    b.classList.toggle('visible',window.scrollY>window.innerHeight);
  });
}

function initAnalytics(){
  var id=SITE.analytics.googleId;
  if(!id||id==='YOUR_GA_MEASUREMENT_ID')return;
  var s=document.createElement('script');
  s.src='https://www.googletagmanager.com/gtag/js?id='+id;
  s.async=true;document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  gtag('js',new Date());gtag('config',id);
}

function initAll(){
  initTheme();
  initCursor();   /* no-op */
  initReveal();
  initNavScroll();
  initCookieBanner();
  initThemeBtn();
  initBackToTop();
}

/* ── Loading screen hide ── */
function hideLoading(){
  var ls=document.getElementById('loadingScreen');
  if(!ls)return;
  setTimeout(function(){ls.classList.add('hide');},800);
}

/* ── Helpers ── */
function renderTestimonials(containerId, count){
  count = count||6;
  var el=document.getElementById(containerId);
  if(!el)return;
  SITE.testimonials.slice(0,count).forEach(function(t){
    el.innerHTML+='<div class="testimonial-card reveal">' +
      '<div class="testimonial-stars">'+'★'.repeat(t.stars)+'</div>' +
      '<p class="testimonial-quote">"'+t.quote+'"</p>' +
      '<div style="display:flex;align-items:center;gap:.8rem">' +
        '<div class="testimonial-initials">'+t.initials+'</div>' +
        '<div><div class="testimonial-name">'+t.name+'</div><div class="testimonial-role">'+t.role+'</div></div>' +
      '</div>' +
    '</div>';
  });
}

function renderFAQ(containerId){
  var el=document.getElementById(containerId);
  if(!el)return;
  SITE.faq.forEach(function(f){
    el.innerHTML+='<div class="faq-item">' +
      '<div class="faq-question" onclick="this.parentElement.classList.toggle(\'open\')">' +
        '<span>'+f.q+'</span><div class="faq-icon">+</div>' +
      '</div>' +
      '<div class="faq-answer">'+f.a+'</div>' +
    '</div>';
  });
}

function renderPricingCards(containerId){
  var el=document.getElementById(containerId);
  if(!el)return;
  ['basic','pro','elite'].forEach(function(key){
    var p=SITE.pricing[key];
    var featured=p.popular?'featured':'';
    var badge=p.popular?'<div class="plan-popular">Most Popular</div>':'';
    var btnClass=p.popular?'plan-btn plan-btn-fill':'plan-btn plan-btn-out';
    var features=p.features.map(function(f){return '<li>'+f+'</li>';}).join('');
    el.innerHTML+='<div class="plan-card '+featured+'">'+badge+
      '<div class="plan-tier">'+p.name+'</div>'+
      '<div class="plan-price"><sup>₹</sup>'+p.amount+'</div>'+
      '<div class="plan-cycle">'+p.cycle+'</div>'+
      '<div class="plan-divider"></div>'+
      '<ul class="plan-features">'+features+'</ul>'+
      '<a href="'+SITE.pages.contact+'" class="'+btnClass+'">Consult Now →</a>'+
    '</div>';
  });
}

function renderTicker(containerId){
  var el=document.getElementById(containerId);
  if(!el)return;
  var ticks = (SITE.ticker && SITE.ticker.length) ? SITE.ticker : [];
  if(!ticks.length){
    ticks = [{label:'NIFTY',val:'22,200',change:'+0.95%',up:true},{label:'BANKNIFTY',val:'48,100',change:'+0.38%',up:true}];
  }
  var html='';
  var loop = ticks.concat(ticks, ticks);
  loop.forEach(function(t){
    html+='<span class="tick-item"><span class="ts">'+t.label+'</span>' +
      '<span class="'+(t.up?'tu':'td')+'">'+(t.up?'▲':'▼')+' '+t.val+(t.change?' '+t.change:'')+'</span></span>';
  });
  el.innerHTML=html;
  var speed = parseInt(localStorage.getItem('vwc_ticker_speed')||'15');
  el.style.animationDuration = speed + 's';
}

/* ── Settings helpers ── */
function getSetting(key, def){
  var v = localStorage.getItem('vwc_'+key);
  return (v !== null) ? v : def;
}
function setSetting(key, val){
  localStorage.setItem('vwc_'+key, val);
}
function getAnalyzerSettings(){
  return {
    model:        getSetting('ai_model', 'groq-llama3'),
    temperature:  parseFloat(getSetting('ai_temp', '0.4')),
    responseLen:  getSetting('ai_len', 'detailed'),
    autoFollowUp: getSetting('ai_followup', 'true') === 'true',
    streamText:   getSetting('ai_stream', 'true') === 'true',
    tickerSpeed:  parseInt(getSetting('ticker_speed', '12')),
    showMindmap:  getSetting('show_mindmap', 'true') === 'true',
    showPie:      getSetting('show_pie', 'true') === 'true',
    focusArea:    getSetting('focus_area', 'retirement'),
  };
}

function refreshMarketTicker(){
  fetch('/market-data').then(function(r){return r.json();}).then(function(d){
    if(d && d.success && d.ticks){
      SITE.ticker = d.ticks;
      var ti = document.getElementById('tickerInner');
      if(ti){ renderTicker('tickerInner'); }
    }
  }).catch(function(){});
}

function fetchWorldEvents(){
  return fetch('/world-data').then(function(r){return r.json();}).then(function(d){
    if(d && d.success && d.events) return d.events;
    return [];
  }).catch(function(){return [];});
}

function fetchSectorData(){
  return fetch('/sector-data').then(function(r){return r.json();}).then(function(d){
    if(d && d.success && d.sectors) return d.sectors;
    return [];
  }).catch(function(){return [];});
}
