/* ── AUTO-HIDE LOADING SCREEN ── */
(function(){
  function doHide(){var ls=document.getElementById('loadingScreen');if(ls){ls.style.transition='opacity .5s ease';ls.style.opacity='0';setTimeout(function(){ls.style.visibility='hidden';ls.style.pointerEvents='none';},500);}}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(doHide,800);});}else{setTimeout(doHide,800);}
})();

/* ============================================================
   VERDANT WEALTH CO. — MASTER SITE CONFIG v7
   ============================================================ */
const SITE = {
  brand:'Verdant Wealth Co.',tagline:'Your wealth, intelligently cultivated.',
  advisor:'P. Saravana Kumar',year:'2026',defaultTheme:'dark',advisorPhoto:'saravana.png',

  pages:{
    home:'index.html',about:'about.html',services:'services.html',models:'models.html',
    analyzer:'analyzer.html',updates:'market.html',pricing:'pricing.html',
    blog:'blog.html',faq:'faq.html',contact:'contact.html',
    privacy:'privacy.html',terms:'terms.html',notfound:'404.html',
  },

  contact:{
    email:'ilamugilan343@gmail.com',phone:'+91 98765 43210',
    whatsapp:'+91 98765 43210',location:'Chennai, Tamil Nadu, India',
    calendly:'https://calendly.com/ilamugilan343/new-meeting',
  },
  social:{twitter:'#',linkedin:'#',youtube:'#',instagram:'#'},

  api:{
    baseUrl:'http://127.0.0.1:8080',
    analyzeEndpoint:'http://127.0.0.1:8080/analyze',
    contactEndpoint:'http://127.0.0.1:8080/contact',
    welcomeEndpoint:'http://127.0.0.1:8080/send-welcome',
    marketEndpoint:'http://127.0.0.1:8080/market-data',
    worldEndpoint:'http://127.0.0.1:8080/world-data',
    sectorEndpoint:'http://127.0.0.1:8080/sector-data',
  },

  supabase:{
    url:'https://aivctqxlrzpucahuaxsy.supabase.co',
    anonKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpdmN0cXhscnpwdWNhaHVheHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NDE5NTYsImV4cCI6MjA4OTIxNzk1Nn0.GOZZ6Z-WqcGRm9fEmrFwVZm6NKzAcrArfkh7xqOa9Hg',
  },

  analytics:{googleId:'YOUR_GA_MEASUREMENT_ID'},
  database:{type:'sqlite',file:'verdant_wealth.db',enabled:true},

  /* ── Developer info ── */
  dev:{
    name:'Ilam Ugilan',
    role:'Full-Stack Developer & AI Engineer',
    bio:'Designed and built the entire Verdant Wealth Co. platform — Flask backend, Groq AI integration, Solari Prime intelligence engine, Supabase authentication, live market data pipelines, and every line of the frontend. Specialises in AI-powered fintech applications.',
    github:'https://github.com/Sovyte',
    email:'ilamugilan343@gmail.com',
    initials:'IU',
    stack:['Python · Flask','Groq Llama 3.3 70B','Supabase Auth','TwelveData API','Vanilla JS / CSS3','SQLite · PostgreSQL'],
  },

  pricing:{
    basic:{name:'Basic',amount:'4,000',cycle:'per hour',popular:false,
      features:['Real-time hourly advisory coverage','Precise goal alignment in every hour','Focused cashflow and risk review','Tactical position and allocation input','Straightforward execution checklist']},
    pro:{name:'Pro',amount:'4,999',cycle:'per hour',popular:true,
      features:['Premium hourly consult with deeper modeling','Custom scenario design & capital plan','Tax-aware portfolio structuring','Sector and macro factor calibration','Priority response window','Actionable follow-up framework']},
    elite:{name:'Elite',amount:'7,999',cycle:'per hour',popular:false,
      features:['Executive-level hourly strategy session','Complete wealth architecture and legacy planning','Advanced risk overlay and drawdown defense','Personalized high-conviction investment blueprints','Dedicated support with rapid turnaround','High-touch execution review and optimization']},
  },

  testimonials:[
    {name:'Rajesh Menon',     role:'Senior Engineer, TCS · Chennai',   quote:'Saravana completely changed how I think about money. Within 6 months I had a clear retirement plan, a rebalanced portfolio, and for the first time in years I actually sleep well knowing my family\'s future is secure.',stars:5,initials:'RM'},
    {name:'Priya & Arun Nair',role:'Business Owners · Coimbatore',     quote:'We came to Saravana with no financial plan and a lot of anxiety. He was patient, direct, and never talked down to us. The AI tools gave us confidence that our decisions are backed by real data — not just gut feel.',stars:5,initials:'PN'},
    {name:'Deepak Subramaniam',role:'NRI · Dubai, UAE',                quote:'Managing wealth from abroad is complicated. Saravana understands the NRI situation deeply — tax implications, repatriation, dual-country planning. The Pro plan is worth every rupee. My India portfolio has never been better managed.',stars:5,initials:'DS'},
    {name:'Kavitha Rajan',    role:'Doctor · Bengaluru',               quote:'I was sceptical of financial advisors — most just push products. Saravana is different. He listened first, then built a plan around my actual goals. Two years in, I am on track to retire at 55.',stars:5,initials:'KR'},
    {name:'Vikram Sharma',    role:'Entrepreneur · Mumbai',            quote:'The Elite plan is genuinely elite. Bi-weekly calls, instant responses, and an advisor who knows my business and personal situation in depth. The AI analyzer flagged a sector risk I would have completely missed.',stars:5,initials:'VS'},
    {name:'Anita Krishnamurthy',role:'School Principal · Madurai',     quote:'I never thought I earned enough to need a financial advisor. Saravana showed me that\'s exactly the wrong way to think. Starting with the Basic consultation changed everything. I am now building real wealth on a teacher\'s salary.',stars:5,initials:'AK'},
  ],

  faq:[
    {q:'Who will I actually be working with?',a:'Always P. Saravana Kumar — the founder. There are no junior advisors, no handoffs, and no automated replacements for human judgement. Every client gets Saravana directly.'},
    {q:'Is there a free trial or introductory offer?',a:'The Basic plan at ₹4,500 is designed as a risk-free entry point. You receive a full 60-minute session, a financial health assessment, and a Solari Prime AI report before committing to any ongoing plan.'},
    {q:'Can I switch or cancel my plan?',a:'Yes. You can upgrade, downgrade, or cancel at any time with 30 days written notice. Saravana will personally walk you through the transition to ensure continuity.'},
    {q:'I am an NRI. Can you advise on India-specific planning?',a:'Absolutely. Saravana has deep experience with NRI financial planning — FEMA regulations, NRE/NRO accounts, repatriation, double taxation, and India portfolio management from abroad.'},
    {q:'What does the AI analysis actually do?',a:'The Solari Prime engine analyses NIFTY, sector momentum, RBI policy, FII/DII flows, global macro events, and more — producing a structured report with confidence scores, risk alerts, and a step-by-step reasoning chain.'},
    {q:'How quickly do you respond?',a:'Basic and Pro clients receive responses within 24 business hours. Elite clients receive a concierge response within 4 hours, including weekends for urgent matters.'},
    {q:'Is my financial information kept confidential?',a:'Completely. All client data is encrypted in transit and at rest via Supabase, handled with strict confidentiality, and never shared with third parties under any circumstances.'},
    {q:'Do you manage money directly?',a:'No. Saravana provides advisory and planning services — investment decisions and execution remain entirely in your hands. This keeps the relationship transparent and conflict-free.'},
  ],

  blog:[
    {slug:'rbi-rate-cycle-2026',title:'The RBI rate cycle and what it means for your retirement portfolio in 2026',excerpt:'With the MPC holding rates steady for the third consecutive quarter, here is what every long-term investor should be doing with their debt and equity allocation right now.',date:'March 2026',readTime:'6 min read',tags:['RBI','Retirement','Portfolio'],featured:true,body:''},
    {slug:'nri-india-planning-guide',title:'The complete NRI guide to building wealth in India from abroad',excerpt:'Managing Indian assets from Dubai, Singapore, or London comes with unique challenges — FEMA rules, repatriation limits, NRE vs NRO accounts. Here is the full picture.',date:'February 2026',readTime:'8 min read',tags:['NRI','Planning','Tax'],featured:false,body:''},
    {slug:'retire-at-55-india',title:'How to retire at 55 in India — a realistic roadmap',excerpt:'Early retirement is not just for the ultra-wealthy. With the right strategy starting in your 30s, retiring at 55 is achievable on a normal Indian salary. Here is the maths.',date:'January 2026',readTime:'7 min read',tags:['Retirement','Planning','Strategy'],featured:false,body:''},
    {slug:'gold-vs-equity-2026',title:'Gold vs equities for Indian retirement portfolios — the 2026 case',excerpt:'With gold at all-time highs and NIFTY volatile, where should the next decade of savings go? Solari Prime data and Saravana\'s take.',date:'December 2025',readTime:'5 min read',tags:['Gold','Equity','Allocation'],featured:false,body:''},
    {slug:'fii-dii-explained',title:'FII vs DII flows explained — and why it matters for your portfolio',excerpt:'Foreign and domestic institutional investors move markets. Understanding their behaviour is one of the most useful edges a retail investor can have.',date:'November 2025',readTime:'5 min read',tags:['FII/DII','Macro','Markets'],featured:false,body:''},
    {slug:'ai-in-personal-finance',title:'How AI is changing personal finance — and what it means for you',excerpt:'The technology behind Solari Prime, and why AI-augmented advice is the next evolution of financial planning for individual investors.',date:'October 2025',readTime:'6 min read',tags:['AI','Technology','Future'],featured:false,body:''},
  ],

  ticker:[
    {label:'NIFTY 50',    val:'22,450', change:'+1.12%',up:true, badge:'idx'},
    {label:'BANK NIFTY',  val:'48,210', change:'+0.85%',up:true, badge:'idx'},
    {label:'SENSEX',      val:'73,980', change:'+0.92%',up:true, badge:'idx'},
    {label:'NIFTY MID 50',val:'12,840', change:'+1.34%',up:true, badge:'idx'},
    {label:'NIFTY IT',    val:'36,210', change:'+1.55%',up:true, badge:'idx'},
    {label:'NIFTY PHARMA',val:'19,640', change:'-0.22%',up:false,badge:'idx'},
    {label:'NIFTY AUTO',  val:'22,100', change:'+2.10%',up:true, badge:'idx'},
    {label:'RELIANCE',    val:'2,910',  change:'+1.45%',up:true, badge:'idx'},
    {label:'TCS',         val:'3,820',  change:'+0.25%',up:true, badge:'idx'},
    {label:'INFY',        val:'1,585',  change:'-0.42%',up:false,badge:'idx'},
    {label:'HDFC BANK',   val:'1,640',  change:'+0.68%',up:true, badge:'idx'},
    {label:'ICICI BANK',  val:'1,210',  change:'+1.12%',up:true, badge:'idx'},
    {label:'USD/INR',     val:'83.45',  change:'+0.04%',up:true, badge:'fx'},
    {label:'EUR/INR',     val:'89.72',  change:'-0.12%',up:false,badge:'fx'},
    {label:'GBP/INR',     val:'105.30', change:'+0.08%',up:true, badge:'fx'},
    {label:'GOLD',        val:'$2,345', change:'+0.65%',up:true, badge:'com'},
    {label:'SILVER',      val:'$29.40', change:'+1.20%',up:true, badge:'com'},
    {label:'BRENT',       val:'$84.15', change:'-0.35%',up:false,badge:'com'},
    {label:'COPPER',      val:'$4.52',  change:'+0.82%',up:true, badge:'com'},
    {label:'BITCOIN',     val:'$68,200',change:'+3.10%',up:true, badge:'cry'},
    {label:'ETHEREUM',    val:'$3,620', change:'+2.44%',up:true, badge:'cry'},
    {label:'10Y GSEC',    val:'7.12%',  change:'-2bp',  up:false,badge:'idx'},
    {label:'VIX INDIA',   val:'13.42',  change:'-4.20%',up:false,badge:'idx'},
  ],

  heroStats:[
    {num:'20+',lbl:'Years Experience'},
    {num:'200+',lbl:'Families Served'},
    {num:'1:1',lbl:'Direct Advisory'},
    {num:'6',lbl:'AI Models'},
  ],

  analyzerChips:[
    'Analyze NIFTY50 outlook for retirement portfolio over next 12 months',
    'Best sectors for retirement wealth building considering RBI policy',
    'FII vs DII flow analysis and impact on long-term portfolio',
    'Impact of RBI rate cycle on debt and equity allocation for retirement',
    'Gold vs equity allocation strategy for Indian retirement portfolio',
  ],

  modelPages:{solari:'models.html',pythia:'models.html',scutum:'models.html',mercur:'models.html',bellator:'models.html',janus:'models.html'},
  legal:{privacy:'privacy.html',terms:'terms.html'},
};

/* ═══ THEME ═══ */
(function(){var saved=localStorage.getItem('vwc_theme')||SITE.defaultTheme;document.documentElement.setAttribute('data-theme',saved);})();
function toggleTheme(){var cur=document.documentElement.getAttribute('data-theme'),next=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);localStorage.setItem('vwc_theme',next);var btn=document.getElementById('themeToggle');if(btn)btn.textContent=next==='dark'?'☀':'☽';}
function trackEvent(e,d){if(SITE.database&&SITE.database.enabled)console.log('[DB]',e,d);}

function logoSVG(w,h){w=w||34;h=h||38;return '<svg width="'+w+'" height="'+h+'" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0"><path d="M4,4 L64,4 L64,50 Q64,72 34,74 Q4,72 4,50 Z" fill="var(--logo-bg)" stroke="#2ecc71" stroke-width="1.8"/><polygon points="34,16 46,32 34,29 22,32" fill="#1a7a48"/><polygon points="22,32 34,29 34,58 23,46" fill="#155e38"/><polygon points="46,32 34,29 34,58 45,46" fill="#22a05a"/><polygon points="23,46 34,58 45,46 34,29" fill="#0f4a2a"/><polygon points="22,32 46,32 45,46 23,46" fill="#2ecc71" opacity="0.22"/><polyline points="34,16 46,32 45,46 34,58 23,46 22,32 34,16" fill="none" stroke="#2ecc71" stroke-width="0.9" opacity="0.8"/><line x1="34" y1="16" x2="34" y2="29" stroke="#2ecc71" stroke-width="0.6" opacity="0.5"/><line x1="34" y1="29" x2="22" y2="32" stroke="#2ecc71" stroke-width="0.6" opacity="0.5"/><line x1="34" y1="29" x2="46" y2="32" stroke="#2ecc71" stroke-width="0.6" opacity="0.5"/><line x1="34" y1="29" x2="34" y2="58" stroke="#2ecc71" stroke-width="0.5" opacity="0.3"/></svg>';}

/* ═══ NAV — includes Market Updates ═══ */
function renderNav(activePage){
  activePage=activePage||'';var p=SITE.pages;
  document.write(
    '<nav id="mainNav">'+
      '<a href="'+p.home+'" class="nav-logo-link">'+logoSVG(30,34)+'<span class="nav-brand">Verdant <span>Wealth</span> Co.</span></a>'+
      '<ul class="nav-links" id="navLinks">'+
        '<li><a href="'+p.home+'"     class="'+(activePage==='home'?'nav-active':'')+'">Home</a></li>'+
        '<li><a href="'+p.about+'"    class="'+(activePage==='about'?'nav-active':'')+'">About</a></li>'+
        '<li><a href="'+p.services+'" class="'+(activePage==='services'?'nav-active':'')+'">Services</a></li>'+
        '<li><a href="'+p.models+'"   class="'+(activePage==='models'?'nav-active':'')+'">AI Models</a></li>'+
        '<li><a href="'+p.analyzer+'" class="'+(activePage==='analyzer'?'nav-active':'')+'">Analyzer</a></li>'+
        '<li><a href="'+p.updates+'"  class="'+(activePage==='updates'?'nav-active':'')+'">Updates <span class="nav-new-badge">NEW</span></a></li>'+
        '<li><a href="'+p.pricing+'"  class="'+(activePage==='pricing'?'nav-active':'')+'">Pricing</a></li>'+
        '<li><a href="'+p.blog+'"     class="'+(activePage==='blog'?'nav-active':'')+'">Blog</a></li>'+
      '</ul>'+
      '<div class="nav-right">'+
        '<button id="themeToggle" class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">☀</button>'+
        '<a href="'+p.contact+'" class="nav-cta">Get Personalized Advice</a>'+
        '<button class="nav-hamburger" id="navHamburger" onclick="toggleMobileNav()" aria-label="Open menu"><span></span><span></span><span></span></button>'+
      '</div>'+
    '</nav>'+
    '<div class="mobile-nav" id="mobileNav" role="dialog" aria-label="Navigation menu">'+
      '<ul>'+
        '<li><a href="'+p.home+'"     onclick="toggleMobileNav()">Home</a></li>'+
        '<li><a href="'+p.about+'"    onclick="toggleMobileNav()">About</a></li>'+
        '<li><a href="'+p.services+'" onclick="toggleMobileNav()">Services</a></li>'+
        '<li><a href="'+p.models+'"   onclick="toggleMobileNav()">AI Models</a></li>'+
        '<li><a href="'+p.analyzer+'" onclick="toggleMobileNav()">Analyzer</a></li>'+
        '<li><a href="'+p.updates+'"  onclick="toggleMobileNav()" style="color:var(--em-glow)">Market Updates ✦</a></li>'+
        '<li><a href="'+p.pricing+'"  onclick="toggleMobileNav()">Pricing</a></li>'+
        '<li><a href="'+p.blog+'"     onclick="toggleMobileNav()">Blog</a></li>'+
        '<li><a href="'+p.contact+'"  onclick="toggleMobileNav()">Contact</a></li>'+
      '</ul>'+
    '</div>'
  );
}

/* ═══ FOOTER ═══ */
function renderFooter(){
  var p=SITE.pages,mp=SITE.modelPages,s=SITE.social;
  document.write(
    '<footer>'+
      '<div class="footer-top">'+
        '<div class="footer-brand-col">'+
          '<a href="'+p.home+'" class="footer-logo-link">'+logoSVG(26,30)+'<span class="footer-brand-name">Verdant <span>Wealth</span> Co.</span></a>'+
          '<p class="foot-tagline">'+SITE.tagline+'<br>Built for every Indian investor.</p>'+
          '<div class="foot-social">'+
            '<a href="'+s.twitter+'"   title="Twitter"   target="_blank" rel="noopener">𝕏</a>'+
            '<a href="'+s.linkedin+'"  title="LinkedIn"  target="_blank" rel="noopener">in</a>'+
            '<a href="'+s.youtube+'"   title="YouTube"   target="_blank" rel="noopener">▶</a>'+
            '<a href="'+s.instagram+'" title="Instagram" target="_blank" rel="noopener">◎</a>'+
          '</div>'+
          '<a href="'+SITE.contact.calendly+'" target="_blank" rel="noopener" class="footer-calendly-btn">📅 Book a Free Session</a>'+
        '</div>'+
        '<div>'+
          '<div class="foot-col-title">AI Models</div>'+
          '<ul class="foot-col-links">'+
            '<li><a href="'+mp.solari+'">Solari Prime <span class="link-badge">Live</span></a></li>'+
            '<li><a href="'+mp.pythia+'">Pythia <span class="link-badge">Soon</span></a></li>'+
            '<li><a href="'+mp.scutum+'">Scutum <span class="link-badge">Soon</span></a></li>'+
            '<li><a href="'+mp.mercur+'">Mercur <span class="link-badge">Soon</span></a></li>'+
            '<li><a href="'+mp.bellator+'">Bellator <span class="link-badge">Soon</span></a></li>'+
            '<li><a href="'+mp.janus+'">Janus <span class="link-badge">Soon</span></a></li>'+
          '</ul>'+
        '</div>'+
        '<div>'+
          '<div class="foot-col-title">Advisory</div>'+
          '<ul class="foot-col-links">'+
            '<li><a href="'+p.services+'">Services</a></li>'+
            '<li><a href="'+p.pricing+'">Pricing</a></li>'+
            '<li><a href="'+p.updates+'">Market Updates</a></li>'+
            '<li><a href="'+p.about+'">About Saravana</a></li>'+
            '<li><a href="'+p.analyzer+'">AI Analyzer</a></li>'+
            '<li><a href="'+p.blog+'">Blog</a></li>'+
          '</ul>'+
        '</div>'+
        '<div>'+
          '<div class="foot-col-title">Company</div>'+
          '<ul class="foot-col-links">'+
            '<li><a href="'+p.about+'">About</a></li>'+
            '<li><a href="'+p.blog+'">Blog</a></li>'+
            '<li><a href="'+p.contact+'">Contact</a></li>'+
            '<li><a href="'+p.privacy+'">Privacy Policy</a></li>'+
            '<li><a href="'+p.terms+'">Terms of Service</a></li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
      '<div class="footer-bottom">'+
        '<div class="foot-copy">© '+SITE.year+' '+SITE.brand+' · '+SITE.advisor+'. All rights reserved.</div>'+
        '<div class="foot-status"><span class="sdot"></span>NSE · BSE · MCX Live</div>'+
      '</div>'+
    '</footer>'+
    '<a href="https://wa.me/'+SITE.contact.whatsapp.replace(/[^0-9]/g,'')+'" target="_blank" rel="noopener" class="whatsapp-float" title="Chat on WhatsApp">'+
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'+
    '</a>'+
    '<div class="cookie-banner" id="cookieBanner">'+
      '<div class="cookie-content">'+
        '<p>We use cookies to improve your experience. <a href="'+SITE.legal.privacy+'">Privacy Policy</a></p>'+
        '<div class="cookie-btns"><button onclick="acceptCookies()" class="cookie-accept">Accept All</button><button onclick="declineCookies()" class="cookie-decline">Decline</button></div>'+
      '</div>'+
    '</div>'
  );
}

/* ═══ DEVELOPER INFO SECTION ═══ */
function renderDevInfo(targetId){
  var d=SITE.dev;
  var stackHtml=d.stack.map(function(s){return '<span class="dev-stack-tag">'+s+'</span>';}).join('');
  var html=
    '<section class="dev-section">'+
      '<div class="dev-section-inner">'+
        '<div class="dev-label">Built by</div>'+
        '<div class="dev-card">'+
          '<div class="dev-card-left">'+
            '<div class="dev-avatar">'+d.initials+'</div>'+
            '<div class="dev-links">'+
              '<a href="'+d.github+'" target="_blank" rel="noopener" class="dev-link-btn">'+
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'+
                'GitHub'+
              '</a>'+
              '<a href="mailto:'+d.email+'" class="dev-link-btn">'+
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'+
                'Email'+
              '</a>'+
            '</div>'+
          '</div>'+
          '<div class="dev-card-right">'+
            '<div class="dev-name">'+d.name+'</div>'+
            '<div class="dev-role">'+d.role+'</div>'+
            '<p class="dev-bio">'+d.bio+'</p>'+
            '<div class="dev-stack">'+stackHtml+'</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</section>';
  if(targetId){var el=document.getElementById(targetId);if(el)el.innerHTML=html;}
  else{document.write(html);}
}

/* ═══ MARQUEE TESTIMONIALS ═══ */
function renderTestimonialsMarquee(containerId){
  var el=document.getElementById(containerId);if(!el)return;
  function card(t){
    return '<div class="tmarq-card">'+
      '<div class="tmarq-stars">'+'★'.repeat(t.stars)+'</div>'+
      '<p class="tmarq-quote">"'+t.quote+'"</p>'+
      '<div class="tmarq-footer">'+
        '<div class="tmarq-av">'+t.initials+'</div>'+
        '<div><div class="tmarq-name">'+t.name+'</div><div class="tmarq-role">'+t.role+'</div></div>'+
      '</div>'+
    '</div>';
  }
  /* Split testimonials into two rows, triple each for seamless loop */
  var row1=SITE.testimonials.slice(0,3),row2=SITE.testimonials.slice(3,6);
  var r1html=row1.concat(row1,row1).map(card).join('');
  var r2html=row2.concat(row2,row2).map(card).join('');
  el.innerHTML=
    '<div class="tmarq-track-wrap"><div class="tmarq-track tmarq-left">'+r1html+'</div></div>'+
    '<div class="tmarq-track-wrap" style="margin-top:1.2rem"><div class="tmarq-track tmarq-right">'+r2html+'</div></div>';
}

/* ═══ CUSTOM CURSOR — pointer devices only ═══ */
function initCursor(){
  if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches)return;
  if(!document.getElementById('vwc-cursor')){
    var dot=document.createElement('div');dot.id='vwc-cursor';dot.className='cursor';
    var ring=document.createElement('div');ring.id='vwc-cursor-ring';ring.className='cursor-ring';
    document.body.appendChild(dot);document.body.appendChild(ring);
  }
  var dot=document.getElementById('vwc-cursor'),ring=document.getElementById('vwc-cursor-ring');
  var mx=-200,my=-200,rx=-200,ry=-200;
  function lerp(a,b,t){return a+(b-a)*t;}
  (function animate(){rx=lerp(rx,mx,.14);ry=lerp(ry,my,.14);ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animate);})();
  document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  document.addEventListener('mouseenter',function(){dot.style.opacity='1';ring.style.opacity='1';});
  document.addEventListener('mouseleave',function(){dot.style.opacity='0';ring.style.opacity='0';});
  var hsel='a,button,[role="button"],.tmarq-card,.plan-card,.model-card,.card-base,.update-card,.dev-card';
  document.addEventListener('mouseover',function(e){if(e.target.closest(hsel))document.body.classList.add('cursor-hover');});
  document.addEventListener('mouseout',function(e){if(e.target.closest(hsel))document.body.classList.remove('cursor-hover');});
  document.addEventListener('mousedown',function(){document.body.classList.add('cursor-click');});
  document.addEventListener('mouseup',function(){document.body.classList.remove('cursor-click');});
}

/* ═══ MOBILE CHAT ═══ */
function renderMobileChat(){
  var qQ=['NIFTY Outlook','RBI Policy','Gold vs Equity','FII/DII Flows','Retirement Plan','Sector Picks'];
  var fQ=['Analyze NIFTY50 for retirement portfolio over 12 months','Impact of RBI rate cycle on debt and equity allocation','Gold vs equity allocation for Indian retirement','FII vs DII flow analysis and long-term portfolio impact','What sectors are best for retirement wealth building?','How to build a ₹2 crore retirement corpus by age 55?'];
  document.write(
    '<button class="mobile-chat-fab" id="mobileChatFab" onclick="openMobileChat()" title="Ask Solari Prime"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>'+
    '<div class="mobile-chat-overlay" id="mobileChatOverlay" onclick="closeMobileChat()"></div>'+
    '<div class="mobile-chat-panel" id="mobileChatPanel">'+
      '<div class="mobile-chat-handle"></div>'+
      '<div class="mobile-chat-header"><div class="mobile-chat-title">🤖 Solari Prime <span>Live</span></div><button class="mobile-chat-close" onclick="closeMobileChat()">✕</button></div>'+
      '<div class="mobile-chat-messages" id="mobileChatMessages"><div class="mc-msg bot"><div class="mc-avatar bot">SP</div><div><div class="mc-bubble bot">Hello! Ask me anything about Indian markets, retirement planning, or portfolio strategy.</div><div class="mc-time">Just now</div></div></div></div>'+
      '<div class="mobile-chat-quick" id="mobileChatQuick">'+qQ.map(function(q,i){return '<button class="mc-quick-btn" onclick="sendMobileQuick('+i+')">'+q+'</button>';}).join('')+'</div>'+
      '<div class="mobile-chat-input-area"><textarea class="mc-input" id="mcInput" placeholder="Ask about markets, sectors, retirement..." rows="1" oninput="autoResizeMcInput(this)" onkeydown="mcInputKeydown(event)"></textarea><button class="mc-send" id="mcSend" onclick="sendMobileMessage()">➤</button></div>'+
    '</div>'
  );
  window._mcFullQuestions=fQ;
}
function openMobileChat(){var o=document.getElementById('mobileChatOverlay'),p=document.getElementById('mobileChatPanel');if(o)o.style.display='block';if(p)requestAnimationFrame(function(){p.classList.add('open');});document.body.style.overflow='hidden';}
function closeMobileChat(){var o=document.getElementById('mobileChatOverlay'),p=document.getElementById('mobileChatPanel');if(p)p.classList.remove('open');setTimeout(function(){if(o)o.style.display='none';document.body.style.overflow='';},350);}
function autoResizeMcInput(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,100)+'px';}
function mcInputKeydown(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMobileMessage();}}
function sendMobileQuick(i){var q=window._mcFullQuestions?window._mcFullQuestions[i]:'';if(q){document.getElementById('mcInput').value=q;sendMobileMessage();}}
function addMobileMessage(content,isUser,isTyping){
  var c=document.getElementById('mobileChatMessages');if(!c)return;
  var d=document.createElement('div');d.className='mc-msg '+(isUser?'user':'bot');
  var t=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  if(isTyping){d.id='mcTyping';d.innerHTML='<div class="mc-avatar bot">SP</div><div><div class="mc-bubble bot"><div class="mc-typing"><span></span><span></span><span></span></div></div></div>';}
  else{d.innerHTML=isUser?'<div class="mc-avatar user">You</div><div><div class="mc-bubble user">'+content+'</div><div class="mc-time">'+t+'</div></div>':'<div class="mc-avatar bot">SP</div><div><div class="mc-bubble bot">'+content+'</div><div class="mc-time">'+t+'</div></div>';}
  c.appendChild(d);c.scrollTop=c.scrollHeight;
}
async function sendMobileMessage(){
  var inp=document.getElementById('mcInput'),btn=document.getElementById('mcSend');if(!inp)return;
  var q=inp.value.trim();if(!q)return;
  inp.value='';inp.style.height='auto';btn.disabled=true;
  addMobileMessage(q,true);addMobileMessage('',false,true);
  try{
    var res=await fetch(SITE.api.analyzeEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({query:q})});
    var data=await res.json();
    var t2=document.getElementById('mcTyping');if(t2)t2.remove();
    if(data.success){
      var analysis=data.full_analysis||'Analysis complete.';
      var maxLen=600,trunc=analysis.length>maxLen?analysis.slice(0,maxLen)+'...<br><em style="font-size:.78rem">Open full analyzer for complete report →</em>':analysis;
      var html=trunc.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
      if(data.scores){var sc=data.scores;html+='<div style="display:flex;gap:.8rem;margin-top:.7rem;padding-top:.7rem;border-top:1px solid rgba(6,9,8,.12)"><div style="text-align:center"><div style="font-size:.95rem;font-weight:700">'+sc.bullish+'%</div><div style="font-size:.58rem;opacity:.6">Bullish</div></div><div style="text-align:center"><div style="font-size:.95rem;font-weight:700">'+sc.risk+'%</div><div style="font-size:.58rem;opacity:.6">Risk</div></div><div style="flex:1;display:flex;align-items:center;justify-content:flex-end"><a href="analyzer.html" style="font-size:.65rem;font-family:var(--mono);color:#060c09;text-decoration:none;opacity:.7">Full Report →</a></div></div>';}
      addMobileMessage(html,false);
    }else throw new Error(data.error||'Failed');
  }catch(e){var t3=document.getElementById('mcTyping');if(t3)t3.remove();addMobileMessage('Unable to reach engine. <a href="analyzer.html" style="color:#060c09;font-weight:600">Open full analyzer →</a>',false);}
  finally{btn.disabled=false;}
}

/* ═══ UTILITIES ═══ */
function initReveal(){var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.07});document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});}
function initNavScroll(){window.addEventListener('scroll',function(){var nav=document.getElementById('mainNav');if(nav)nav.classList.toggle('scrolled',window.scrollY>60);});}
function toggleMobileNav(){var nav=document.getElementById('mobileNav'),btn=document.getElementById('navHamburger');if(!nav)return;var isOpen=nav.classList.toggle('open');if(btn)btn.classList.toggle('open',isOpen);document.body.style.overflow=isOpen?'hidden':'';if(btn)btn.setAttribute('aria-label',isOpen?'Close menu':'Open menu');}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var nav=document.getElementById('mobileNav');if(nav&&nav.classList.contains('open'))toggleMobileNav();if(typeof closeMobileChat==='function')closeMobileChat();}});
function getSupabase(){if(window._sb)return window._sb;if(window.supabase&&window.supabase.createClient){window._sb=window.supabase.createClient(SITE.supabase.url,SITE.supabase.anonKey);return window._sb;}return null;}
function acceptCookies(){localStorage.setItem('vwc_cookies','accepted');var b=document.getElementById('cookieBanner');if(b)b.classList.remove('visible');}
function declineCookies(){localStorage.setItem('vwc_cookies','declined');var b=document.getElementById('cookieBanner');if(b)b.classList.remove('visible');}
function initCookieBanner(){if(!localStorage.getItem('vwc_cookies')){setTimeout(function(){var b=document.getElementById('cookieBanner');if(b)b.classList.add('visible');},2500);}}
function initTheme(){var saved=localStorage.getItem('vwc_theme')||SITE.defaultTheme||'dark';document.documentElement.setAttribute('data-theme',saved);}
function initThemeBtn(){var btn=document.getElementById('themeToggle');if(btn){var cur=document.documentElement.getAttribute('data-theme')||'dark';btn.textContent=cur==='dark'?'☀':'☽';}}
function initBackToTop(){if(document.getElementById('backToTop'))return;var b=document.createElement('button');b.id='backToTop';b.className='back-to-top';b.innerHTML='↑';b.title='Back to Top';b.setAttribute('aria-label','Back to top');b.onclick=function(){window.scrollTo({top:0,behavior:'smooth'});};document.body.appendChild(b);window.addEventListener('scroll',function(){b.classList.toggle('visible',window.scrollY>window.innerHeight);});}
function initAnalytics(){var id=SITE.analytics.googleId;if(!id||id==='YOUR_GA_MEASUREMENT_ID')return;var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id='+id;s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',id);}
function initAll(){initTheme();initCursor();initReveal();initNavScroll();initCookieBanner();initThemeBtn();initBackToTop();}
function hideLoading(){var ls=document.getElementById('loadingScreen');if(!ls)return;setTimeout(function(){ls.classList.add('hide');},800);}

/* Helpers */
function renderTestimonials(cid,count){count=count||6;var el=document.getElementById(cid);if(!el)return;SITE.testimonials.slice(0,count).forEach(function(t){el.innerHTML+='<div class="testimonial-card reveal"><div class="testimonial-stars">'+'★'.repeat(t.stars)+'</div><p class="testimonial-quote">"'+t.quote+'"</p><div style="display:flex;align-items:center;gap:.8rem"><div class="testimonial-initials">'+t.initials+'</div><div><div class="testimonial-name">'+t.name+'</div><div class="testimonial-role">'+t.role+'</div></div></div></div>';});}
function renderFAQ(cid){var el=document.getElementById(cid);if(!el)return;SITE.faq.forEach(function(f){el.innerHTML+='<div class="faq-item"><div class="faq-question" onclick="this.parentElement.classList.toggle(\'open\')"><span>'+f.q+'</span><div class="faq-icon">+</div></div><div class="faq-answer">'+f.a+'</div></div>';});}
function renderPricingCards(cid){var el=document.getElementById(cid);if(!el)return;['basic','pro','elite'].forEach(function(k){var p=SITE.pricing[k],f=p.popular?'featured':'',b=p.popular?'<div class="plan-popular">Most Popular</div>':'',bc=p.popular?'plan-btn plan-btn-fill':'plan-btn plan-btn-out',feats=p.features.map(function(f){return '<li>'+f+'</li>';}).join('');el.innerHTML+='<div class="plan-card '+f+'">'+b+'<div class="plan-tier">'+p.name+'</div><div class="plan-price"><sup>₹</sup>'+p.amount+'</div><div class="plan-cycle">'+p.cycle+'</div><div class="plan-divider"></div><ul class="plan-features">'+feats+'</ul><a href="'+SITE.pages.contact+'" class="'+bc+'">Consult Now →</a></div>';});}

function renderTicker(cid){
  var el=document.getElementById(cid);if(!el)return;
  var ticks=(SITE.ticker&&SITE.ticker.length)?SITE.ticker:[{label:'NIFTY',val:'22,200',change:'+0.95%',up:true,badge:'idx'}];
  var html='',loop=ticks.concat(ticks,ticks);
  loop.forEach(function(t){
    var bh=t.badge?'<span class="tick-badge '+t.badge+'">'+t.badge.toUpperCase()+'</span>':'';
    html+='<span class="tick-item"><span class="tick-label">'+t.label+'</span>'+bh+'<span class="tick-value '+(t.up?'tu':'td')+'">'+t.val+'</span><span class="tick-change '+(t.up?'tu':'td')+'">'+(t.up?'▲':'▼')+' '+t.change+'</span></span>';
  });
  el.innerHTML=html;
  el.style.animationDuration=Math.max(30,Math.min(60,ticks.length*2))+'s';
}

function refreshMarketTicker(){
  fetch(SITE.api.marketEndpoint||'/market-data').then(function(r){return r.json();}).then(function(d){
    if(d&&d.success&&d.ticks&&d.ticks.length){
      var bm={'NIFTY 50':'idx','NIFTY':'idx','BANK NIFTY':'idx','BANKNIFTY':'idx','SENSEX':'idx','USD/INR':'fx','EUR/INR':'fx','GBP/INR':'fx','GOLD':'com','SILVER':'com','BRENT':'com','BITCOIN':'cry','BTC/USD':'cry'};
      d.ticks.forEach(function(t){t.badge=bm[t.label]||'idx';});
      SITE.ticker=d.ticks;var ti=document.getElementById('tickerInner');if(ti)renderTicker('tickerInner');
    }
  }).catch(function(){});
}
function fetchWorldEvents(){return fetch(SITE.api.worldEndpoint||'/world-data').then(function(r){return r.json();}).then(function(d){if(d&&d.success&&d.events)return d.events;return[];}).catch(function(){return[];});}
function fetchSectorData(){return fetch(SITE.api.sectorEndpoint||'/sector-data').then(function(r){return r.json();}).then(function(d){if(d&&d.success&&d.sectors)return d.sectors;return[];}).catch(function(){return[];});}
function getSetting(k,def){var v=localStorage.getItem('vwc_'+k);return v!==null?v:def;}
function setSetting(k,val){localStorage.setItem('vwc_'+k,val);}
