/* ================= UPSC THINKERS — APP LOGIC ================= */

/* ---- GS Paper IV syllabus map: topic -> thinker ids ---- */
const SYLLABUS = [
  { t:"Ethics & Human Interface", s:"Essence, determinants and consequences of ethics; dimensions; ethics in private and public relationships",
    ids:["socrates","aristotle","kant","bentham","mill","gandhi","kohlberg","gilligan","arendt","buddha"] },
  { t:"Human Values", s:"Lessons from the lives of great leaders, reformers and administrators; role of family, society and educational institutions",
    ids:["gandhi","vivekananda","kalam","mother-teresa","savitribai-phule","tagore","freire","nussbaum","gibran","malala"] },
  { t:"Attitude", s:"Content, structure, function; its influence on thought and behaviour; moral and political attitudes; social influence and persuasion",
    ids:["allport","festinger","epictetus","beauvoir","goleman","vinoba"] },
  { t:"Aptitude & Foundational Values for Civil Service", s:"Integrity, impartiality, non-partisanship, objectivity, dedication, empathy, tolerance and compassion towards the weaker sections",
    ids:["patel","weber","gokhale","kalam","ambedkar","nehru","gandhi","rawls","mother-teresa","gilligan"] },
  { t:"Emotional Intelligence", s:"Concepts, and their utilities and application in administration and governance",
    ids:["goleman","maslow","marcus-aurelius","epictetus","nussbaum","gilligan"] },
  { t:"Moral Thinkers & Philosophers of India", s:"Contributions of moral thinkers and philosophers from India",
    ids:["buddha","mahavira","kautilya","thiruvalluvar","kabir","guru-nanak","basavanna","shankara","gandhi","ambedkar","vivekananda","tagore","jyotirao-phule","periyar","narayana-guru","deendayal","vinoba","jp-narayan","aurobindo","mn-roy"] },
  { t:"Moral Thinkers & Philosophers of the World", s:"Contributions of moral thinkers and philosophers from the world",
    ids:["socrates","plato","aristotle","kant","bentham","mill","rawls","nozick","arendt","berlin","confucius","laozi","machiavelli","marcus-aurelius","nussbaum","mlk","mandela","thoreau","tolstoy"] },
  { t:"Public / Civil Service Values & Ethics in Public Administration", s:"Status and problems; ethical concerns and dilemmas; laws, rules, regulations and conscience as sources of ethical guidance",
    ids:["weber","appleby","woodrow-wilson","barnard","simon","drucker","mcgregor","patel","arendt","berlin"] },
  { t:"Accountability & Ethical Governance", s:"Strengthening of ethical and moral values in governance; ethical issues in international relations and funding",
    ids:["kautilya","machiavelli","habermas","ostrom","foucault","orwell","burke","jp-narayan"] },
  { t:"Probity in Governance", s:"Concept of public service; philosophical basis of governance and probity; RTI, codes of ethics, citizen's charters, work culture, corruption",
    ids:["kautilya","gandhi","amartya-sen","gokhale","habermas","festinger","drucker","weber"] },
  { t:"Corruption, Whistleblowing & Conflict of Interest", s:"Sources and consequences of corruption; whistleblower protection; conflict of interest and the duty to disclose",
    ids:["kautilya","gandhi","gokhale","weber","arendt","bentham","orwell","jp-narayan"] },
  { t:"Corporate Governance & Workplace Ethics", s:"Ethics in private enterprise; boards, auditors and disclosure; the ethics of the workplace and of the manager",
    ids:["drucker","barnard","mcgregor","simon","gandhi","weber","schumacher"] },
  { t:"Ethics in Science, Technology & Media", s:"Research integrity; data, privacy and surveillance; medical ethics; the responsibilities of reporting",
    ids:["einstein","habermas","orwell","bentham","kalam","nehru","foucault","schumacher"] },
  { t:"Environmental & Development Ethics", s:"Obligations to future generations; the commons; displacement and the ethics of a development project",
    ids:["schumacher","gandhi","ostrom","thoreau","amartya-sen","mahavira","vinoba","tagore"] },
  { t:"Social Justice, Gender & the Weaker Sections", s:"Equality and dignity; gender in administration; obligations to those the system reaches last",
    ids:["ambedkar","jyotirao-phule","savitribai-phule","periyar","narayana-guru","rawls","beauvoir","nussbaum","amartya-sen"] },
  { t:"Case Studies", s:"Frameworks most useful when structuring a case-study answer",
    ids:["kant","bentham","mill","rawls","gilligan","kohlberg","weber","simon","gandhi","arendt"] }
];

/* ---- Recurring essay themes -> thinker ids ---- */
/* The nine themes the Essay paper actually keeps asking, derived from the
   2018-2026 papers in pyq.js. Each carries five model paragraphs (answers.js)
   that split it into its five recurring sub-themes, the full model essays
   (essays.js) written for it, and the stories from the Thought Atlas (atlas.js)
   that suit it, the ones its essays actually use listed first. */
const ESSAY_THEMES = [
  { t:"Ends, Means and the Ethics of Decision", n:"Ends and Means", ic:"scale",
    s:"How to decide, when to act, whether the means matter, and the gap between ideal and real",
    ids:["gandhi","machiavelli","kautilya","kant","bentham","mill","simon","barnard","goleman","weber","arendt","drucker","aristotle","socrates","ambedkar","periyar","thoreau","rawls","nehru","hegel","aurobindo"],
    essays:["The file that nobody moved","A standard nobody meets is still a standard"],
    atlas:["bystander","campbell","gyges","noblelie","trolley","cobra","principalagent","burninghouse","dissonance","rentseeking","fineprice"] },
  { t:"Knowledge, Education and the Doubting Mind", n:"Knowledge and Education", ic:"book",
    s:"What knowing is for, and why the educated mind ends with more questions",
    ids:["socrates","plato","aristotle","tagore","freire","nussbaum","vivekananda","kalam","mill","einstein","habermas","ambedkar","gandhi"],
    essays:["The certificate and the question","The romantic man was never the enemy"],
    atlas:["goodhart","meno","zeno","staghunt","cave","gettier","raft","babel","framing","lemons"] },
  { t:"Character, Adversity and the Test of Power", n:"Character and Adversity", ic:"mountain",
    s:"What pressure reveals — failure, risk, time and authority as examinations",
    ids:["marcus-aurelius","epictetus","nietzsche","camus","mandela","malala","aristotle","kalam","gandhi","arendt","thoreau","laozi","buddha","machiavelli","bose","vivekananda","ambedkar","hegel","tagore","weber"],
    essays:["We examine for endurance and promote for compliance","The straight line is the least likely path"],
    atlas:["asch","dictator","theseus","ooda","milgram","stanfordprison","tacitus","gadfly","angulimala","groupthink"] },
  { t:"The Good Life: Contentment, Simplicity and Being Humane", n:"The Good Life", ic:"sun",
    s:"What a life should aim at, argued against the economy of accumulation",
    ids:["epicurus","buddha","mahavira","laozi","gandhi","thiruvalluvar","gibran","marcus-aurelius","epictetus","aristotle","camus","schumacher","amartya-sen","kabir","guru-nanak","vivekananda","mother-teresa","gilligan","deendayal","kohlberg"],
    essays:["The country is richer. Ask it whether it is better","The inner life is not a private matter"],
    atlas:["hedonic","nachiketa","gorilla","samaritan","epicurus","kisagotami","chariot","twobirds","threepoisons","midas"] },
  { t:"Culture, Memory and the Making of Meaning", n:"Culture and Memory", ic:"landmark",
    s:"How a society carries its past and makes sense — art, history, language, perception",
    ids:["tagore","gibran","tolstoy","plato","aurobindo","gandhi","nehru","burke","azad","marx","hegel","orwell","socrates","camus","nietzsche","laozi","kabir","kant","shankara","sartre"],
    essays:["The argument a country has with itself","The most confident account is rarely the true one"],
    atlas:["panopticon","anekanta","dunningkruger","blindmen","butterflydream","maya","nasreddin","babel","framing","robberscave"] },
  { t:"Justice, Equality and the Excluded", n:"Justice and Equality", ic:"users",
    s:"What a society owes its weakest members, and why patriarchy is a structure not a sentiment",
    ids:["rawls","ambedkar","amartya-sen","nozick","deendayal","gandhi","mother-teresa","lohia","nussbaum","jyotirao-phule","savitribai-phule","beauvoir","wollstonecraft","pandita-ramabai","periyar","gilligan","mill","bentham","tocqueville"],
    essays:["A country should not need this much kindness","Educated, and still not counted","Somebody always pays for the public good"],
    atlas:["marshmallow","collectiveaction","freerider","omelas","veil","heinz","samaritan","noblelie","scarcity","womenleaders","fineprice"] },
  { t:"Democracy, the State and India in the World", n:"Democracy and the State", ic:"globe",
    s:"Leadership, media, plural identity, borders and the ethics of asymmetric power",
    ids:["ambedkar","tocqueville","habermas","montesquieu","nehru","kautilya","patel","orwell","gandhi","mandela","tagore","azad","aurobindo","mill","rousseau","jp-narayan","machiavelli","barnard"],
    essays:["Between two elections","Autonomy is a capability, not a posture"],
    atlas:["generalwill","focal","securitydilemma","dictator","gadfly","beforelaw","pd","chicken","mad","groupthink","robberscave","womenleaders"] },
  { t:"Nature, Development and Civilisation", n:"Nature and Development", ic:"leaf",
    s:"Whether nature is a resource, a teacher or a moral limit — and what growth is for",
    ids:["schumacher","ostrom","gandhi","thoreau","mahavira","burke","deendayal","amartya-sen","tagore","aurobindo","gibran","nussbaum","kalam","einstein"],
    essays:["The bill arrives in a different currency","We stopped being taught by anything we did not make"],
    atlas:["commons","uselesstree","aesop","midas","butterfly","prometheus","icarus","rentseeking"] },
  { t:"Technology and the Modern Self", n:"Technology and the Self", ic:"cpu",
    s:"What a tool does to the person, the worker and the state that uses it",
    ids:["foucault","orwell","einstein","schumacher","habermas","drucker","bentham","maslow","allport","festinger","marx","amartya-sen","mcgregor","buddha","marcus-aurelius","kautilya","nehru","ambedkar"],
    essays:["We built the rails without asking where they go","The jobs question is the wrong question"],
    atlas:["experience","apprentice","sisyphus","skinner","panopticon","vat","prometheus","laplace","lemons"] }
];

/* ---- State ---- */
const state = { view:"home", q:"", tag:"", mode:"thinker", page:0,
                sel:null, nav:"views", fold:false, amode:"section", aq:"" };
const byId = Object.fromEntries(THINKERS.map(t => [t.id, t]));
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

/* ---- Reading progress ----
   What has been opened in the two maps and the atlas, and where the reader last
   was in each. Kept in this browser only; a private window simply starts fresh. */
const READ_KEY = "upsc_thinkers_read_v1", LAST_KEY = "upsc_thinkers_last_v1";
const readDone = (() => {
  try { return JSON.parse(localStorage.getItem(READ_KEY) || "{}"); } catch (e) { return {}; }
})();
const isRead = key => !!readDone[key];
function lastPlaces(){
  try { return JSON.parse(localStorage.getItem(LAST_KEY) || "{}"); } catch (e) { return {}; }
}
function markRead(key, info){
  readDone[key] = 1;
  try {
    localStorage.setItem(READ_KEY, JSON.stringify(readDone));
    const last = lastPlaces();
    last[key.split("|")[0]] = Object.assign({ to:key, at:Date.now() }, info);
    localStorage.setItem(LAST_KEY, JSON.stringify(last));
  } catch (e) {}
}

/* ================= PORTRAITS ================= */
const CACHE_KEY = "upsc_thinkers_portraits_v2";
const CACHE_TTL = 1000 * 60 * 60 * 24 * 30; // 30 days

/* Start from the pre-resolved URLs in portraits.js — no network lookup needed. */
let portraits = Object.assign({}, typeof PORTRAITS !== "undefined" ? PORTRAITS : {});
const noPortrait = new Set(typeof PORTRAITS_NONE !== "undefined" ? PORTRAITS_NONE : []);

function loadCache(){
  try{
    const raw = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (raw && Date.now() - raw.at < CACHE_TTL) Object.assign(portraits, raw.map || {});
  }catch(e){}
}
function saveCache(){
  try{ localStorage.setItem(CACHE_KEY, JSON.stringify({ at:Date.now(), map:portraits })); }catch(e){}
}

/* Fallback only: looks up any thinker added later that has no baked-in portrait.
   With the shipped data this makes zero network requests. */
async function fetchPortraits(){
  const missing = THINKERS
    .filter(t => t.wiki && !t.img && !portraits[t.wiki] && !noPortrait.has(t.wiki))
    .map(t => t.wiki);
  if (!missing.length) return;

  for (let i = 0; i < missing.length; i += 40){
    const batch = missing.slice(i, i + 40);
    const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2"
              + "&prop=pageimages&piprop=thumbnail&pithumbsize=400&redirects=1&origin=*"
              + "&titles=" + encodeURIComponent(batch.join("|"));
    try{
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      const q = data.query || {};

      // Requested title may be normalised and/or redirected before reaching the page.
      const hop = {};
      (q.normalized || []).forEach(n => { hop[n.from] = n.to; });
      (q.redirects  || []).forEach(r => { hop[r.from] = r.to; });
      const resolve = title => {
        let cur = title, guard = 0;
        while (hop[cur] && guard++ < 5) cur = hop[cur];
        return cur;
      };

      const pages = {};
      (q.pages || []).forEach(p => { if (p.thumbnail) pages[p.title] = p.thumbnail.source; });

      batch.forEach(title => {
        const src = pages[resolve(title)] || pages[resolve(title.replace(/_/g, " "))];
        if (src) portraits[title] = src;
      });
    }catch(e){ /* offline or blocked — monograms stay */ }
  }
  saveCache();
  applyPortraits();
}

function portraitSrc(t){ return t.img || portraits[t.wiki] || null; }

/* Layer an <img> over the monogram. If the image 404s or we are offline it removes
   itself and the monogram underneath shows through. */
function applyPortraits(root){
  (root || document).querySelectorAll(".portrait[data-tid]").forEach(el => {
    const t = byId[el.dataset.tid];
    if (!t || el.querySelector("img")) return;
    const src = portraitSrc(t);
    if (!src) return;
    const img = document.createElement("img");
    img.alt = t.name;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => img.remove();
    img.src = src;
    el.appendChild(img);
  });
}

function initials(name){
  return name.replace(/^(Dr\.|Sri|Swami|Sardar|Pandit|Maulana|Acharya|Guru|Mother|Raja|Sree)\s+/i, "")
             .split(/\s+/).filter(w => /^[A-Za-z]/.test(w))
             .slice(0, 2).map(w => w[0].toUpperCase()).join("");
}
function portraitHTML(t){
  return `<div class="portrait" data-tid="${t.id}"><span class="mono">${initials(t.name)}</span></div>`;
}

/* ================= HELPERS ================= */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const splitIdea = s => {
  const i = s.indexOf(" — ");
  return i === -1 ? { h:"", d:s } : { h:s.slice(0, i), d:s.slice(i + 3) };
};

/* ================= THE FRONT PAGE =================
   Counts are read out of the data rather than written down, so the page cannot
   promise more than the site holds. */
function siteStats(){
  const A  = (typeof ANSWERS !== "undefined") ? ANSWERS : {};
  const C  = (typeof GS4_CONCEPTS !== "undefined") ? GS4_CONCEPTS : {};
  const Q4 = (typeof GS4_PYQ !== "undefined") ? GS4_PYQ : [];
  const OO = (typeof OPENOUTS !== "undefined") ? OPENOUTS : {};
  return {
    headings: SYLLABUS.length,
    concepts: Object.keys(C).reduce((n, k) => n + C[k].length, 0),
    gsq:      Q4.length,
    cases:    Q4.filter(q => q.sec === "B").length,
    themes:   ESSAY_THEMES.length,
    paras:    Object.keys(A).reduce((n, k) => n + A[k].length, 0),
    opens:    Object.keys(OO).length,
    essays:   (typeof ESSAYS !== "undefined") ? Object.keys(ESSAYS).length : 0,
    topics:   (typeof PYQ_PAPERS !== "undefined")
                ? PYQ_PAPERS.reduce((n, p) => n + p.a.length + p.b.length, 0) : 0,
    thinkers: THINKERS.length,
    quotes:   THINKERS.reduce((n, t) => n + t.quotes.length, 0),
    works:    (typeof WORKLAB !== "undefined") ? Object.keys(WORKLAB).length : 0,
    stories:  (typeof ATLAS !== "undefined") ? ATLAS.length : 0
  };
}

/* Where the reader last was. The home page offers the most recent place across
   the maps and the atlas; each map's index offers its own. */
function resumeHTML(x){
  if (!x || !x.to) return "";
  return `
    <button class="resume" data-to="${esc(x.to)}">
      <span class="resume-k">Continue where you left off</span>
      <b>${esc(x.t || "")}</b>
      <span class="resume-w">${esc(x.where || "")}${x.h ? " &middot; " + esc(x.h) : ""}</span>
      <i aria-hidden="true">&rarr;</i>
    </button>`;
}

const plural = (n, one, many) => n + " " + (n === 1 ? one : many);

/* ================= ICONS =================
   Line icons drawn in the text colour, so one set serves both themes. */
const ICONS = {
  home:     '<path d="M3 11 12 4l9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  users:    '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M15.5 5.2a3.5 3.5 0 0 1 0 6.6"/><path d="M17.5 14.3A6.5 6.5 0 0 1 21.5 20"/>',
  scale:    '<path d="M12 3v18M7 21h10M4 7h16"/><path d="M4 7 1.5 13a2.5 2.5 0 0 0 5 0z"/><path d="m20 7-2.5 6a2.5 2.5 0 0 0 5 0z"/>',
  nib:      '<path d="M12 3 6 13l6 8 6-8z"/><path d="M12 3v8.3"/><circle cx="12" cy="13" r="1.7"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  quote:    '<path d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/><path d="M8.5 9h7M8.5 12.5h4.5"/>',
  compass:  '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  book:     '<path d="M3 5.5c2.5-1.3 5.5-1.3 9 .5v14c-3.5-1.8-6.5-1.8-9-.5z"/><path d="M21 5.5c-2.5-1.3-5.5-1.3-9 .5v14c3.5-1.8 6.5-1.8 9-.5z"/>',
  landmark: '<path d="M3 21h18M4 10h16M12 3l9 5H3z"/><path d="M6.5 10v8M10.2 10v8M13.8 10v8M17.5 10v8"/>',
  bulb:     '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.5.5.8 1.2.8 1.9V16h6v-.5c0-.7.3-1.4.8-1.9A6 6 0 0 0 12 3z"/>',
  target:   '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  case:     '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12.5h18"/>',
  globe:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  mountain: '<path d="M2.5 20 9.5 7.5l4 7 2.5-4 5.5 9.5z"/>',
  sun:      '<circle cx="12" cy="12" r="4"/><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
  leaf:     '<path d="M5 19C5 11 10 5 20 4c-1 10-7 15-15 15z"/><path d="M5 19c3-4 6-7 10-10"/>',
  cpu:      '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
  file:     '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  help:     '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6"/><path d="M12 17h.01"/>',
  infinity: '<path d="M12 12c-2-2.7-3.7-4-5.5-4a4 4 0 0 0 0 8c1.8 0 3.5-1.3 5.5-4zm0 0c2 2.7 3.7 4 5.5 4a4 4 0 0 0 0-8c-1.8 0-3.5 1.3-5.5 4z"/>',
  flame:    '<path d="M12 21c-4 0-6.5-2.6-6.5-6 0-3.5 3-5.5 3.5-9 2 1.5 3 3.5 3 5.5 1-1 1.5-2.5 1.5-4 2.5 2 5 4.8 5 7.5 0 3.4-2.5 6-6.5 6z"/>',
  flask:    '<path d="M9 3h6M10 3v6L4.5 18.5A1.8 1.8 0 0 0 6 21h12a1.8 1.8 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>',
  layers:   '<path d="M12 3 2 8l10 5 10-5z"/><path d="m2 13 10 5 10-5"/>',
  link:     '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  chart:    '<path d="M4 20V11M10 20V5M16 20v-8M21 20H3"/>',
  atom:     '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)"/>',
  eye:      '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  alert:    '<path d="M12 3.5 2.5 20h19z"/><path d="M12 10v4.5M12 17.2h.01"/>',
  search:   '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  arrow:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev:     '<path d="m9 6 6 6-6 6"/>'
};
const ico = (name, cls) =>
  `<svg class="ic${cls ? " " + cls : ""}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* Three broad groupings of the schools, for readers who browse by region. The
   keys must not repeat a category id, or the category would answer first. */
const REGIONS = {
  indian:       { name:"Indian Thinkers", label:"Indian", cats:["indian-class", "indian-modern", "reform"],
                  blurb:"From Kautilya, Thiruvalluvar and the Bhakti poets to the freedom movement and the social reformers." },
  western:      { name:"Western Thinkers", label:"Western", cats:["classical", "west-political"],
                  blurb:"From Socrates and Aristotle to Machiavelli, Kant, Mill and Marx." },
  voices:       { name:"Contemporary Voices", label:"Contemporary", cats:["contemporary"],
                  blurb:"Twentieth-century and living thinkers, from Arendt and Rawls to Sen and Nussbaum." }
};
const CAT_SHORT = { eastern:"Eastern", "ethics-psych":"Moral psychology", admin:"Administration", humanist:"Humanist" };
function regionOf(t){
  for (const k in REGIONS) if (REGIONS[k].cats.includes(t.cat)) return REGIONS[k].label;
  return CAT_SHORT[t.cat] || (catById[t.cat] ? catById[t.cat].name : "");
}

/* The years the site's questions come from, e.g. "2013–2026". */
function yearSpan(){
  const ys = [];
  if (typeof GS4_PYQ !== "undefined") GS4_PYQ.forEach(q => ys.push(q.y));
  if (typeof PYQ_PAPERS !== "undefined") PYQ_PAPERS.forEach(p => ys.push(p.y));
  return ys.length ? Math.min.apply(null, ys) + "–" + Math.max.apply(null, ys) : "";
}

/* A short quotation from the quote bank, the same one all day. */
function quoteOfDay(){
  const pool = [];
  THINKERS.forEach(t => t.quotes.forEach(q => { if (q.length <= 90) pool.push([t, q]); }));
  return pool.length ? pool[Math.floor(Date.now() / 864e5) % pool.length] : null;
}

/* The page itself: search first, then the reader's own place, then the two
   papers, the thinkers and the themes the paper asks most. */
function heroHTML(){
  const qd = quoteOfDay();
  const theme = w => ESSAY_THEMES.findIndex(t => t.t.startsWith(w)) + 1;
  const cs = SYLLABUS.findIndex(r => r.t === "Case Studies") + 1;
  const pop = [
    ["Gandhi", `data-open="gandhi"`],
    ["Ambedkar", `data-open="ambedkar"`],
    ["Justice", `data-to="themes|${theme("Justice")}|"`],
    ["Sisyphus", `data-to="atlas|0|sisyphus"`],
    ["Happiness", `data-to="themes|${theme("The Good Life")}|"`],
    ["Technology", `data-to="themes|${theme("Technology")}|"`],
    cs && ["Ethics case studies", `data-to="syllabus|${cs}|method"`],
    ["Emotional intelligence", `data-find="emotional intelligence"`]
  ].filter(Boolean);
  return `
  <section class="hero">
    <div class="hero-art art-thinker" aria-hidden="true"></div>
    <div class="hero-body">
      <h2 class="hero-t">Thinkers for UPSC Mains</h2>
      <p class="hero-s">Ideas from thinkers. Structured around UPSC questions.</p>
      ${searchBoxHTML("")}
      <div class="hero-pop"><span>Popular:</span>${pop.map(p =>
        `<button class="pop" ${p[1]}>${esc(p[0])}</button>`).join("")}</div>
    </div>
    ${qd ? `
    <button class="hero-q" data-open="${qd[0].id}" title="Open ${esc(qd[0].name)}">
      <q>${esc(qd[1])}</q><span>&mdash; ${esc(qd[0].name)}</span>
    </button>` : ""}
  </section>`;
}

function searchBoxHTML(q){
  return `
      <form class="hsearch" role="search" data-search>
        ${ico("search")}
        <input type="search" name="q" value="${esc(q)}" autocomplete="off"
               aria-label="Search the site"
               placeholder="Search thinkers, concepts, PYQs, quotes (e.g. Gandhi, justice, Sisyphus, emotional intelligence)">
        <button class="cta" type="submit">Search</button>
      </form>`;
}

/* The last place read, with how much of its heading, theme or section is done.
   Before anything has been read, the card offers the first heading of each paper. */
function continueHTML(){
  const x = Object.values(lastPlaces()).sort((a, b) => b.at - a.at)[0];
  if (!x || !x.to) return `
  <section class="hblock">
    <div class="hb-head"><h3 class="hb-t">Start Studying</h3></div>
    <div class="cont">
      <span class="cont-art art-thinker" aria-hidden="true"></span>
      <div class="cont-body">
        <div class="cont-t"><b>Begin with the first heading of either paper</b></div>
        <p class="cont-w">Your place and progress are kept in this browser, so this card will
           bring you back to where you stopped.</p>
      </div>
      <div class="cont-go">
        <button class="cta" data-to="syllabus|1|">GS-IV ${ico("arrow")}</button>
        <button class="obtn" data-to="themes|1|">Essay ${ico("arrow")}</button>
      </div>
    </div>
  </section>`;

  const bits = x.to.split("|"), view = bits[0], page = +bits[1] || 0, id = bits[2];
  let done = 0, total = 0, unit = "", kind = "", art = "thinker";
  if ((view === "syllabus" || view === "themes") && page) {
    const spec = mapSpec(view), h = spec.list[page - 1];
    if (h) {
      const items = spec.items(h), it = items.find(i => i.id === id);
      total = items.length;
      done = items.filter(i => isRead(readKey(view, page, i.id))).length;
      unit = view === "syllabus" ? "heading" : "theme";
      kind = it ? (it.k || it.lab || it.g) : "";
    }
    art = view === "syllabus" ? "aristotle" : "pen";
  } else if (view === "atlas" && typeof ATLAS !== "undefined") {
    const e = atlasById()[id];
    const list = e ? ATLAS.filter(a => a.sec === e.sec) : [];
    total = list.length;
    done = list.filter(a => isRead("atlas|0|" + a.id)).length;
    unit = "section";
    kind = e ? e.form : "";
  }
  const pct = total ? Math.round(done / total * 100) : 0;
  return `
  <section class="hblock">
    <div class="hb-head">
      <h3 class="hb-t">Continue Studying</h3>
      <button class="hb-link" data-to="${esc(view)}|0|">Go to my reading ${ico("arrow")}</button>
    </div>
    <div class="cont">
      <span class="cont-art art-${art}" aria-hidden="true"></span>
      <div class="cont-body">
        <div class="cont-t"><b>${esc(x.t || "")}</b>${kind ? `<span class="cont-tag">${esc(kind)}</span>` : ""}</div>
        <p class="cont-w">${esc(x.where || "")}${x.h ? " &middot; " + esc(x.h) : ""}</p>
        ${total ? `
        <div class="cont-bar" role="progressbar" aria-label="Read in this ${unit}"
             aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></div>
        <div class="cont-n"><span>${done} of ${total} read in this ${unit}</span><b>${pct}%</b></div>` : ""}
      </div>
      <div class="cont-go"><button class="cta" data-to="${esc(x.to)}">Continue ${ico("arrow")}</button></div>
    </div>
  </section>`;
}

/* The numbers on a paper's card are links: each opens what it counts. */
function paperCardHTML(o){
  return `
    <section class="pcard">
      <span class="pcard-art art-${o.art}" aria-hidden="true"></span>
      <div class="pcard-h">
        <span class="pcard-ico">${ico(o.icon)}</span>
        <div><h4>${o.t}</h4><p>${o.d}</p></div>
      </div>
      <div class="pcard-stats">${o.stats.map(s => `
        <button data-to="${s[2]}"><b>${s[0]}</b><span>${s[1]}</span></button>`).join("")}
      </div>
      <button class="obtn" data-to="${o.to}">${o.go} ${ico("arrow")}</button>
    </section>`;
}

const HOME_THINKERS = ["gandhi", "ambedkar", "aristotle", "kant", "nietzsche", "camus"];

function thinkerTileHTML(t){
  const ideas = t.ideas.map(i => splitIdea(i).h.replace(/\s*\(.*?\)\s*/g, " ").trim())
    .filter(h => h && h.length <= 24).slice(0, 3);
  return `
    <button class="tcard" data-open="${t.id}">
      <div class="tcard-top">
        ${portraitHTML(t)}
        <div class="tcard-id"><b>${esc(t.name.split(" ").pop())}</b><span>${esc(regionOf(t))}</span></div>
      </div>
      <div class="tcard-tags">${ideas.map(h => `<span>${esc(h)}</span>`).join("")}</div>
    </button>`;
}

function renderHome(){
  const s = siteStats();
  const cs = SYLLABUS.findIndex(r => r.t === "Case Studies") + 1;
  const topics = ESSAY_THEMES.map((t, i) => ({ t, i, q:themeQuestions(t) }))
    .sort((a, b) => b.q - a.q || a.i - b.i).slice(0, 6);
  return `
    ${heroHTML()}
    <div class="home">
    ${continueHTML()}

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">Study by Paper</h3>
          <p class="hb-s">Structured around the questions UPSC has actually set, ${yearSpan()}.</p></div>
      </div>
      <div class="pcards">
        ${paperCardHTML({
          t:"GS-IV: Ethics", d:"Concepts, thinkers, case studies and PYQs", icon:"scale", art:"aristotle",
          to:"syllabus|0|", go:"Explore GS-IV",
          stats:[[s.headings, "Syllabus topics", "syllabus|0|"], [s.gsq, "Past questions", "gs4pyq|0|"],
                 [s.concepts, "Concept notes", "syllabus|1|"],
                 [s.cases, "Case studies", cs ? "syllabus|" + cs + "|pyq" : "gs4pyq|0|"]]
        })}
        ${paperCardHTML({
          t:"Essay Paper", d:"Themes, model essays, arguments and examples", icon:"nib", art:"pen",
          to:"themes|0|", go:"Explore Essays",
          stats:[[s.themes, "Essay themes", "themes|0|"], [s.essays, "Model essays", "essays|0|"],
                 [s.paras, "Model paragraphs", "themes|1|p:0"], [s.stories, "Stories & examples", "atlas|0|"]]
        })}
      </div>
    </section>

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">Explore Thinkers</h3>
          <p class="hb-s">Browse thinkers, their key ideas, and how they appear in UPSC questions.</p></div>
        <button class="hb-link" data-view="all">View all ${s.thinkers} thinkers ${ico("arrow")}</button>
      </div>
      <div class="tcards">${HOME_THINKERS.map(id => byId[id]).filter(Boolean).map(thinkerTileHTML).join("")}</div>
    </section>

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">High-yield Topics</h3>
          <p class="hb-s">The essay themes the paper has asked most, with their thinkers and model material.</p></div>
        <button class="hb-link" data-to="themes|0|">View all ${s.themes} themes ${ico("arrow")}</button>
      </div>
      <div class="topics">${topics.map((r, k) => `
        <button class="topic" data-to="themes|${r.i + 1}|">
          <span class="topic-ico tone-${k}">${ico(r.t.ic)}</span>
          <span class="topic-t"><b>${esc(r.t.n)}</b>
            <small>${plural(r.q, "PYQ", "PYQs")} &middot; ${plural(r.t.ids.length, "thinker", "thinkers")}</small></span>
        </button>`).join("")}
      </div>
    </section>
    </div>`;
}

/* ================= SEARCH =================
   One box for the whole site. Every word of the query has to appear, in any
   order, so "emotional intelligence" finds the concept rather than every page
   that mentions emotion. Matches in a title come before matches in the text. */
const SEARCH_SHOW = 8;
function searchHits(q){
  const words = atlasFold(q).split(/\s+/).filter(Boolean);
  const has = s => { const h = atlasFold(s); return words.every(w => h.includes(w)); };
  const out = { thinkers:[], concepts:[], stories:[], essays:[], questions:[], quotes:[] };
  if (!words.length) return out;
  const titled = (list, title, body) => {
    const a = [], b = [];
    list.forEach(x => { if (has(title(x))) a.push(x); else if (body && has(body(x))) b.push(x); });
    return a.concat(b);
  };

  out.thinkers = titled(THINKERS, t => t.name + " " + t.school, haystack);

  if (typeof GS4_CONCEPTS !== "undefined") {
    const all = [];
    SYLLABUS.forEach((r, p) => (GS4_CONCEPTS[r.t] || []).forEach((c, i) =>
      all.push({ t:c.t, h:r.t, to:"syllabus|" + (p + 1) + "|c:" + i,
                 d:[].concat(c.d || [], ...(c.secs || []).map(x => [x[0]].concat(...x[1])), c.take || "").join(" ") })));
    out.concepts = titled(all, c => c.t, c => c.d);
  }
  if (typeof ATLAS !== "undefined") {
    const secName = {};
    ATLAS_SECTIONS.forEach(s => { secName[s.id] = s.t; });
    out.stories = titled(ATLAS, x => x.t + " " + x.q, x => {
      const e = ATLAS_ENTRIES[x.id] || {};
      return [x.src].concat(e.setup || [], [e.reveals || ""]).join(" ");
    }).map(x => ({ t:x.t, h:secName[x.sec] || "", to:"atlas|0|" + x.id }));
  }
  if (typeof ESSAYS !== "undefined") {
    out.essays = titled(Object.keys(ESSAYS), k => k + " " + (ESSAYS[k].et || ""))
      .map(k => ({ t:k, h:themeOfEssay(k) || "", essay:k }));
  }
  if (typeof PYQ_PAPERS !== "undefined")
    PYQ_PAPERS.forEach(p => p.a.concat(p.b).forEach(q => {
      if (has(q)) out.questions.push({ t:q, h:"Essay " + p.y, y:p.y, to:"pyq|0|" });
    }));
  if (typeof GS4_PYQ !== "undefined")
    GS4_PYQ.forEach(q => {
      if (has(q.q)) out.questions.push({ t:q.q, h:"GS-IV " + q.y + (q.sec === "B" ? " · case study" : ""), y:q.y, to:"gs4pyq|0|" });
    });
  out.questions.sort((a, b) => b.y - a.y);
  THINKERS.forEach(t => t.quotes.forEach(q => { if (has(q)) out.quotes.push({ t:q, h:t.name, open:t.id }); }));
  return out;
}

function renderSearch(){
  const q = state.q.trim();
  const hits = searchHits(q);
  const more = state.more || {};
  const groups = [
    ["thinkers", "Thinkers"], ["concepts", "GS-IV concepts"], ["stories", "Stories and models"],
    ["essays", "Model essays"], ["questions", "Past questions"], ["quotes", "Quotations"]
  ].filter(g => hits[g[0]].length);
  const total = groups.reduce((n, g) => n + hits[g[0]].length, 0);
  const row = x => {
    const act = x.open ? `data-open="${x.open}"` : x.essay ? `data-essay="${esc(x.essay)}"` : `data-to="${esc(x.to)}"`;
    return `<button class="srow" ${act}><b>${esc(x.t)}</b><span>${esc(x.h)}</span></button>`;
  };
  return `
    <div class="srch">
      ${searchBoxHTML(q)}
      <p class="srch-sum">${q
        ? (total ? `${plural(total, "result", "results")} for &ldquo;${esc(q)}&rdquo;`
                 : `Nothing found for &ldquo;${esc(q)}&rdquo;. Try fewer words, or another spelling.`)
        : "Type a thinker, an idea, a word from a question or a line from a quotation."}</p>
      ${groups.map(g => {
        const list = hits[g[0]], all = more[g[0]] || list.length <= SEARCH_SHOW;
        const shown = all ? list : list.slice(0, SEARCH_SHOW);
        return `
      <section class="hblock srch-g">
        <div class="hb-head"><h3 class="hb-t">${g[1]} <small>${list.length}</small></h3></div>
        ${g[0] === "thinkers"
          ? `<div class="tgrid">${shown.map(cardHTML).join("")}</div>`
          : `<div class="srows">${shown.map(row).join("")}</div>`}
        ${all ? "" : `<button class="obtn srch-more" data-more="${g[0]}">Show all ${list.length}</button>`}
      </section>`;
      }).join("")}
    </div>`;
}

function runSearch(q){
  state.q = q.trim();
  state.more = {};
  const box = document.getElementById("search");
  if (box) box.value = state.q;
  state.view = state.q ? "search" : "home";
  state.nav = "views";
  render();
}

/* The two past-question pages sit under one section, with a switch between them. */
function pyqSwitchHTML(on){
  return `
    <div class="pyq-switch" role="group" aria-label="Which paper">
      <button class="${on === "pyq" ? "on" : ""}" data-view="pyq" aria-pressed="${on === "pyq"}">Essay topics</button>
      <button class="${on === "gs4pyq" ? "on" : ""}" data-view="gs4pyq" aria-pressed="${on === "gs4pyq"}">GS-IV questions</button>
    </div>`;
}

/* ================= THE TOP MENU =================
   The site's sections along the header band, each with a menu of what is in
   it. Built once: render() only moves the highlight, so a menu is never torn
   down under the pointer. Every entry is view|page|selection. */
function topSections(){
  const s = siteStats();
  const tagged = x => THINKERS.filter(t => t.tag.includes(x)).length;
  const cs = SYLLABUS.findIndex(r => r.t === "Case Studies") + 1;
  const g4y = (typeof GS4_PYQ !== "undefined") ? GS4_PYQ.map(q => q.y) : [];
  const g4span = g4y.length ? Math.min.apply(null, g4y) + " to " + Math.max.apply(null, g4y) : "";
  return [
    { id:"home", t:"Home", to:"home|0|" },
    { id:"thinkers", t:"Thinkers", to:"all|0|" },
    { id:"gs4", t:"GS-IV", to:"syllabus|0|", items:[
      ["syllabus|0|", "Syllabus map", s.headings + " headings, with the concepts, thinkers and questions under each"],
      ["gs4pyq|0|", "Past questions", s.gsq + " questions" + (g4span ? ", " + g4span : "") + ", by topic"],
      cs && ["syllabus|" + cs + "|method", "Case studies", "six moves for answering one, and " + s.cases + " past cases"],
      ["ethics|0|", "Thinkers for Ethics", tagged("Ethics") + " named in or serving the syllabus"]
    ]},
    { id:"essay", t:"Essay", to:"themes|0|", items:[
      ["themes|0|", "Theme map", s.themes + " themes that cover every past topic"],
      ["essays|0|", "Model essays", s.essays + " essays, written out in full"],
      ["themes|1|p:0", "Model paragraphs", s.paras + " paragraphs to adapt, arranged by theme"],
      typeof ATLAS !== "undefined" &&
        ["atlas|0|", "Stories and models", ATLAS.length + " stories and thought experiments to open an essay with"],
      ["essay|0|", "Thinkers for Essay", tagged("Essay") + " who open, carry or answer an essay"]
    ]},
    { id:"pyq", t:"PYQs", to:"pyq|0|" }
  ];
}

function renderTopNav(){
  const nav = document.getElementById("topNav");
  if (!nav) return;
  nav.innerHTML = `<ul class="tn-list">${topSections().map(x => {
    const items = (x.items || []).filter(Boolean);
    return `
    <li class="tn" data-sec="${x.id}">
      <button class="tn-btn" data-to="${x.to}"${items.length ? ` aria-expanded="false"` : ""}>${
        esc(x.t)}${items.length ? `<i class="tn-caret" aria-hidden="true"></i>` : ""}</button>
      ${items.length ? `
      <div class="dd"><ul>${items.map(it => `
        <li><button class="dd-item" data-to="${it[0]}"><b>${esc(it[1])}</b><span>${esc(it[2])}</span></button></li>`).join("")}
      </ul></div>` : ""}
    </li>`;
  }).join("")}</ul>`;
}

function topSectionOf(v){
  if (v === "home") return "home";
  if (v === "syllabus" || v === "ethics") return "gs4";
  if (v === "themes" || v === "essays" || v.startsWith("essay:") || v === "atlas" || v === "essay") return "essay";
  if (v === "pyq" || v === "gs4pyq") return "pyq";
  if (v === "search") return "";
  return "thinkers";
}

function markTopNav(){
  const sec = topSectionOf(state.view);
  document.querySelectorAll("#topNav .tn").forEach(li => {
    const on = li.dataset.sec === sec;
    li.classList.toggle("on", on);
    const b = li.querySelector(".tn-btn");
    if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
  });
}

/* shut: after a choice, keep the menu closed even though the pointer is still
   over it, until the pointer leaves */
function closeTopMenus(shut){
  const nav = document.getElementById("topNav");
  if (!nav) return;
  nav.querySelectorAll(".tn.open").forEach(li => {
    li.classList.remove("open");
    li.querySelector(".tn-btn").setAttribute("aria-expanded", "false");
  });
  if (shut) {
    nav.classList.add("shut");
    if (nav.contains(document.activeElement)) document.activeElement.blur();
  }
}

function openSearch(){
  document.getElementById("searchBar").classList.add("open");
  document.getElementById("searchBtn").setAttribute("aria-expanded", "true");
  document.getElementById("search").focus();
}
/* force: close even with a query in the box; otherwise a live query keeps it open */
function closeSearch(force){
  const bar = document.getElementById("searchBar");
  if (!bar || !bar.classList.contains("open")) return;
  if (!force && document.getElementById("search").value) return;
  bar.classList.remove("open");
  const btn = document.getElementById("searchBtn");
  btn.setAttribute("aria-expanded", "false");
  // focus must not stay behind in a box that is no longer on screen
  if (document.activeElement && document.activeElement.id === "search") btn.focus();
}

/* ================= NAVIGATION ================= */
/* Inside a map the sidebar is the map's contents: every heading, with the one
   being read opened to show what is in it, and a tick against everything already
   read. One column of navigation, so the reading gets the rest of the width. */
function renderMapNav(spec){
  const n = state.page | 0;
  document.getElementById("viewNav").innerHTML = `
    <button class="nav-item nav-back" data-nav="views" title="All views">
      <span class="nav-ico">&larr;</span><span class="nav-name">All views</span>
    </button>
    <button class="nav-item nav-intro ${n ? "" : "active"}" data-page="0"
            title="Every ${spec.unit.toLowerCase()} on one page">
      <span class="nav-ico">&#9776;</span><span class="nav-name">All ${spec.units}</span>
    </button>
    <div class="side-label">${spec.label}</div>
    ${spec.list.map((x, i) => {
      const items = spec.items(x), here = n === i + 1, open = here && !state.fold;
      const done = items.filter(it => isRead(readKey(spec.view, i + 1, it.id))).length;
      return `
      <button class="nav-item tree-head${here ? " active" : ""}" data-page="${i + 1}"
              aria-expanded="${String(open)}"
              title="${esc(x.t)}${here ? (open ? " — click to hide its contents" : " — click to show its contents") : ""}">
        <span class="nav-ico syl-no">${i + 1}</span>
        <span class="nav-name">${esc(x.t)}</span>
        <span class="nav-count${items.length && done === items.length ? " full" : ""}"
              title="${done} of ${items.length} read">${done}/${items.length}</span>
      </button>
      ${open ? treeHTML(spec, i + 1, items) : ""}`;
    }).join("")}`;
  document.getElementById("catNav").innerHTML = "";
  const lab = document.getElementById("catLabel");
  if (lab) lab.hidden = true;
}

/* The contents of the open heading, grouped as they are read. */
function treeHTML(spec, page, items){
  const sel = mapSel(items);
  const groups = [];
  items.forEach(it => {
    const last = groups[groups.length - 1];
    if (last && last.g === it.g) last.items.push(it); else groups.push({ g:it.g, items:[it] });
  });
  return `
    <div class="tree">${groups.map(g => `
      <div class="tree-g">${esc(g.g)}</div>
      ${g.items.map(it => `
        <button class="tree-item${it.id === sel ? " on" : ""}${isRead(readKey(spec.view, page, it.id)) ? " done" : ""}"
                data-sel="${esc(it.id)}"${it.id === sel ? ` aria-current="true"` : ""}>
          <span class="tree-mark" aria-hidden="true"></span><span class="tree-t">${esc(it.t)}</span>
        </button>`).join("")}`).join("")}
    </div>`;
}

/* The sidebar everywhere outside a map: the five sections, then ways to browse.
   The three browse groups fold open one at a time; the one holding the page
   being read opens by itself. */
let sideOpen = null;
function renderNav(){
  if (state.view === "syllabus" && state.nav === "syllabus") return renderMapNav(mapSpec("syllabus"));
  if (state.view === "themes"   && state.nav === "themes")   return renderMapNav(mapSpec("themes"));
  if (state.view === "atlas"    && state.nav === "atlas" && typeof ATLAS !== "undefined") return renderAtlasNav();
  const lab = document.getElementById("catLabel");
  if (lab) lab.hidden = true;
  document.getElementById("catNav").innerHTML = "";

  const v = state.view, sec = topSectionOf(v);
  const cs = SYLLABUS.findIndex(r => r.t === "Case Studies") + 1;
  const open = sideOpen === "none" ? null : (sideOpen || (catById[v] ? "cats" : null));
  const item = (o, on, cls) => `
    <button class="nav-item${on ? " active" : ""}${cls ? " " + cls : ""}" ${o[2]} title="${esc(o[1])}">
      ${ico(o[0], "nav-ico")}<span class="nav-name">${esc(o[1])}</span>
    </button>`;
  const fold = (key, icon, name, kids) => `
    <button class="nav-item nav-fold" data-sidefold="${key}" aria-expanded="${String(open === key)}" title="${esc(name)}">
      ${ico(icon, "nav-ico")}<span class="nav-name">${esc(name)}</span>${ico("chev", "nav-chev")}
    </button>
    ${open === key ? `<div class="nav-kids">${kids}</div>` : ""}`;
  const kid = (attr, name, n, on) => `
    <button class="nav-kid${on ? " on" : ""}" ${attr}><span>${esc(name)}</span>${n === undefined ? "" : `<i>${n}</i>`}</button>`;

  document.getElementById("viewNav").innerHTML = `
    <button class="side-search" data-sidesearch title="Search the site">
      ${ico("search")}<span>Search&hellip;</span><kbd>Ctrl K</kbd>
    </button>
    ${item(["home", "Home", `data-view="home"`], sec === "home")}
    ${item(["user", "Thinkers", `data-view="all"`], sec === "thinkers")}
    ${item(["scale", "GS-IV", `data-view="syllabus"`], sec === "gs4")}
    ${item(["nib", "Essay", `data-view="themes"`], sec === "essay")}
    ${item(["calendar", "Past Year Questions", `data-view="pyq"`], sec === "pyq")}

    <div class="side-label">Explore</div>
    ${item(["users", "All Thinkers", `data-view="all"`], v === "all", "sub")}
    ${Object.keys(REGIONS).map(k => item(["user", REGIONS[k].name, `data-view="${k}"`], v === k, "sub")).join("")}
    ${item(["book", "Works in Depth", `data-view="worklab"`], v === "worklab" || v.startsWith("work:"), "sub")}

    <div class="side-label">Browse by theme</div>
    ${fold("cats", "landmark", "Schools & Traditions", CATEGORIES.map(c =>
      kid(`data-view="${c.id}"`, c.name, THINKERS.filter(t => t.cat === c.id).length, v === c.id)).join(""))}
    ${fold("concepts", "bulb", "Key Concepts", SYLLABUS.map((r, i) =>
      kid(`data-to="syllabus|${i + 1}|"`, r.t, (typeof GS4_CONCEPTS !== "undefined" && GS4_CONCEPTS[r.t]) ? GS4_CONCEPTS[r.t].length : undefined)).join(""))}
    ${fold("themes", "target", "Essay Themes", ESSAY_THEMES.map((t, i) =>
      kid(`data-to="themes|${i + 1}|"`, t.n || t.t)).join(""))}
    ${cs ? item(["case", "Case Studies", `data-to="syllabus|${cs}|method"`], false, "sub") : ""}
    ${item(["quote", "Quotes", `data-view="quotes"`], v === "quotes", "sub")}
    ${typeof ATLAS !== "undefined" ? item(["compass", "Stories & Examples", `data-view="atlas"`], v === "atlas", "sub") : ""}

    <div class="side-foot">
      ${ico("book")}
      <p>Built from ${yearSpan()} UPSC questions.<br>Read less. Think deeper. Write better.</p>
    </div>`;
}

/* ================= FILTERING ================= */
function haystack(t){
  return [t.name, t.school, t.gist, t.place, t.years, catById[t.cat]?.name,
          ...t.ideas, ...t.quotes, ...t.essay, ...t.ethics].join(" ").toLowerCase();
}
function currentList(){
  let list = THINKERS;
  if (state.view === "essay")  list = list.filter(t => t.tag.includes("Essay"));
  else if (state.view === "ethics") list = list.filter(t => t.tag.includes("Ethics"));
  else if (catById[state.view]) list = list.filter(t => t.cat === state.view);
  else if (REGIONS[state.view]) list = list.filter(t => REGIONS[state.view].cats.includes(t.cat));

  if (state.tag && state.view !== "essay" && state.view !== "ethics")
    list = list.filter(t => t.tag.includes(state.tag));

  // the site search has its own page; only the quote bank filters in place
  const q = state.view === "quotes" ? state.q.trim().toLowerCase() : "";
  if (q) list = list.filter(t => haystack(t).includes(q));
  return list;
}

/* ================= VIEWS ================= */
/* A thinker's card: who they were, the one line to remember, three ideas to
   name in an answer, and which paper they serve. */
function cardHTML(t){
  const ideas = t.ideas.map(i => splitIdea(i).h.replace(/\s*\(.*?\)\s*/g, " ").trim())
    .filter(h => h && h.length <= 26).slice(0, 3);
  return `
  <button class="tk" data-open="${t.id}">
    <div class="tk-top">
      ${portraitHTML(t)}
      <div class="tk-id">
        <b>${esc(t.name)}</b>
        <span class="tk-meta">${esc(t.years)} &middot; ${esc(t.place)}</span>
        <span class="tk-school">${esc(t.school)}</span>
      </div>
    </div>
    <p class="tk-gist">${esc(t.gist)}</p>
    ${ideas.length ? `<div class="tk-tags">${ideas.map(h => `<span>${esc(h)}</span>`).join("")}</div>` : ""}
    <div class="tk-foot">
      ${t.tag.map(x => `<span class="tk-paper">${x === "Ethics" ? "GS-IV" : esc(x)}</span>`).join("")}
      <span class="tk-go">Open ${ico("arrow")}</span>
    </div>
  </button>`;
}

/* The thinkers page: one header band for every way into the list (all, a
   region, a school, or one paper), then the list itself, grouped by school
   whenever it holds more than one. The box filters the cards in place. */
function renderGrid(){
  const v = state.view;
  const paper = v === "essay" ? "Essay" : v === "ethics" ? "Ethics" : state.tag;
  const list = currentList();
  const cat = catById[v], reg = REGIONS[v];
  const regionKey = reg ? v : cat ? (Object.keys(REGIONS).find(k => REGIONS[k].cats.includes(v)) || "") : "";
  const head = cat ? { h:cat.name, p:cat.blurb, k:"Schools & traditions" }
    : reg ? { h:reg.name, p:reg.blurb, k:"Thinkers by region" }
    : v === "essay" ? { h:"Thinkers for the Essay Paper", k:"Essay",
        p:"Thinkers who give an essay its opening quotation, its argument or its counter-argument." }
    : v === "ethics" ? { h:"Thinkers for GS-IV Ethics", k:"GS-IV",
        p:"Thinkers named in the GS-IV syllabus or serving one of its headings." }
    : { h:"All Thinkers", k:"Thinkers",
        p:THINKERS.length + " thinkers from " + CATEGORIES.length + " traditions, each with core ideas, quotations and where UPSC uses them." };
  const s = siteStats();
  const count = id => THINKERS.filter(t => t.cat === id).length;
  const scopeCats = regionKey ? REGIONS[regionKey].cats : CATEGORIES.map(c => c.id);
  const groups = CATEGORIES.map(c => ({ c, list:list.filter(t => t.cat === c.id) })).filter(g => g.list.length);

  return `
  <section class="hero hero-sm">
    <div class="hero-art art-athens" aria-hidden="true"></div>
    <div class="hero-body">
      <p class="hero-k">${esc(head.k)}</p>
      <h2 class="hero-t">${esc(head.h)}</h2>
      <p class="hero-s">${esc(head.p)}</p>
      <form class="hsearch" role="search" data-tfilter>
        ${ico("search")}
        <input id="thinkerQ" type="search" autocomplete="off" value="${esc(state.tq || "")}"
               aria-label="Filter the thinkers"
               placeholder="Filter by name, idea or quotation (e.g. Kant, trusteeship, the absurd)">
      </form>
      <div class="t-paper" role="group" aria-label="Which paper">
        ${[["", "All papers"], ["Essay", "Essay"], ["Ethics", "GS-IV Ethics"]].map(p => `
        <button class="${paper === p[0] ? "on" : ""}" data-tag="${p[0]}" aria-pressed="${paper === p[0]}">${p[1]}</button>`).join("")}
      </div>
    </div>
    <div class="hero-aside">
      <button data-view="all"><b>${s.thinkers}</b><span>thinkers</span></button>
      <button data-view="quotes"><b>${s.quotes}</b><span>quotations</span></button>
      <button data-view="worklab"><b>${s.works}</b><span>works read closely</span></button>
    </div>
  </section>

  <div class="home">
    <div class="t-scope">
      <div class="t-regions" role="group" aria-label="Region">
        <button class="${!regionKey && !cat ? "on" : ""}" data-view="all">All</button>
        ${Object.keys(REGIONS).map(k => `
        <button class="${regionKey === k ? "on" : ""}" data-view="${k}">${esc(REGIONS[k].label)}</button>`).join("")}
      </div>
      <div class="t-cats">${scopeCats.map(id => `
        <button class="pop${v === id ? " on" : ""}" data-view="${id}">${esc(catById[id].name)} <i>${count(id)}</i></button>`).join("")}
      </div>
    </div>
    <p class="t-count" id="thinkerCount"></p>
    ${list.length ? groups.map(g => `
    <section class="hblock t-group" data-cat="${g.c.id}">
      ${groups.length > 1 ? `
      <div class="hb-head">
        <div><h3 class="hb-t">${esc(g.c.name)} <small>${g.list.length}</small></h3>
          <p class="hb-s">${esc(g.c.blurb)}</p></div>
        <button class="hb-link" data-view="${g.c.id}">Open this school ${ico("arrow")}</button>
      </div>` : ""}
      <div class="tgrid">${g.list.map(cardHTML).join("")}</div>
    </section>`).join("") : ""}
    <div class="empty" id="thinkerNone"${list.length ? " hidden" : ""}><b>No thinker matches</b>Try one word, a shorter name, or a different paper.</div>
  </div>`;
}

/* Filtering in place keeps the box in focus while the reader types. Every word
   has to appear somewhere in the thinker's name, ideas, quotations or uses. */
let thinkerHay = null;
function applyThinkerFilter(){
  const box = document.getElementById("thinkerQ");
  if (!box) return;
  if (!thinkerHay) thinkerHay = Object.fromEntries(THINKERS.map(t => [t.id, atlasFold(haystack(t))]));
  const words = atlasFold(state.tq || "").split(/\s+/).filter(Boolean);
  let shown = 0;
  document.querySelectorAll(".t-group").forEach(g => {
    let n = 0;
    g.querySelectorAll(".tk").forEach(c => {
      const ok = words.every(w => thinkerHay[c.dataset.open].includes(w));
      c.hidden = !ok;
      if (ok) n++;
    });
    g.hidden = !n;
    const sm = g.querySelector(".hb-t small");
    if (sm) sm.textContent = n;
    shown += n;
  });
  const cnt = document.getElementById("thinkerCount");
  if (cnt) cnt.textContent = words.length
    ? plural(shown, "thinker matches", "thinkers match") + " “" + state.tq.trim() + "”"
    : "Showing " + plural(shown, "thinker", "thinkers");
  const none = document.getElementById("thinkerNone");
  if (none) none.hidden = shown > 0;
}

function renderQuotes(){
  const q = state.q.trim().toLowerCase();
  const rows = [];
  currentList().forEach(t => t.quotes.forEach(quote => {
    if (!q || quote.toLowerCase().includes(q) || t.name.toLowerCase().includes(q)) rows.push([t, quote]);
  }));
  return `
    <div class="sec-head">
      <h3>Quote Bank</h3>
      <p>${rows.length} quotations, ready for an introduction or a conclusion. Click a name to open that thinker.</p>
    </div>
    <div class="chips">
      <button class="chip ${state.tag === "" ? "on" : ""}" data-tag="">All papers</button>
      <button class="chip ${state.tag === "Essay" ? "on" : ""}" data-tag="Essay">Essay</button>
      <button class="chip ${state.tag === "Ethics" ? "on" : ""}" data-tag="Ethics">Ethics</button>
    </div>
    <div class="qbank">
      ${rows.map(([t, quote]) => `
        <div class="qcard">
          <p>&ldquo;${esc(quote)}&rdquo;</p>
          <footer>
            <span class="qmini portrait" data-tid="${t.id}"></span>
            <b data-open="${t.id}" style="cursor:pointer">${esc(t.name)}</b>
            <span>&middot; ${esc(t.years)}</span>
          </footer>
        </div>`).join("")}
    </div>`;
}

/* **double asterisks** become bold. Everything is escaped first, so the
   only live markup on an essay page is the emphasis the author intended. */
function rich(t){
  return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
}

/* ---- Glossary: terms of art explained where they are used ----
   A reader who has not met "difference principle" should not have to leave the
   paragraph to find out what it means. Concept terms and thinker names in the
   model paragraphs become buttons that raise a short card on hover, tap or
   keyboard focus. Terms come from glossary.js; names from the roster. */
let _glossIdx = null;
function glossIndex(){
  if (_glossIdx) return _glossIdx;
  const items = [];
  if (typeof GLOSSARY !== "undefined")
    Object.keys(GLOSSARY).forEach(k => items.push({ key:"c:" + k, src:GLOSSARY[k].t, ci:true }));
  const amb = (typeof GLOSS_AMBIGUOUS !== "undefined") ? GLOSS_AMBIGUOUS : [];
  (typeof THINKERS !== "undefined" ? THINKERS : []).forEach(t => {
    items.push({ key:"t:" + t.id, src:t.name, ci:false });
    const sur = t.name.split(" ").pop();          // "Mill", "Sen" are ordinary
    if (sur !== t.name && sur.length > 3 && amb.indexOf(sur) < 0)
      items.push({ key:"t:" + t.id, src:sur, ci:false });
  });
  _glossIdx = items;
  return items;
}

/* The GS-IV pages link the essay terms and the paper's own vocabulary. The two
   are kept apart so that adding a GS-IV term does not start underlining words
   in the essay paragraphs, where the prose already carries its own glossary. */
let _gs4Idx = null;
function gs4GlossIndex(){
  if (_gs4Idx) return _gs4Idx;
  const items = glossIndex().slice();
  if (typeof GS4_GLOSS !== "undefined")
    Object.keys(GS4_GLOSS).forEach(k => {
      items.push({ key:"g:" + k, src:GS4_GLOSS[k].t, ci:true });
      (GS4_GLOSS[k].alt || []).forEach(x => items.push({ key:"g:" + k, src:x, ci:true }));
    });
  _gs4Idx = items;
  return items;
}

/* Inside a concept note, a term whose card would only send the reader back to
   this same concept is left unlinked. */
function gs4Skip(title){
  return key => key.charAt(0) === "g" && typeof GS4_GLOSS !== "undefined" &&
                GS4_GLOSS[key.slice(2)] && GS4_GLOSS[key.slice(2)].c === title;
}


/* Where a concept note develops a term, so the card can offer the way to it. */
function conceptSite(title){
  if (typeof GS4_CONCEPTS === "undefined" || typeof SYLLABUS === "undefined") return null;
  for (let i = 0; i < SYLLABUS.length; i++) {
    const list = GS4_CONCEPTS[SYLLABUS[i].t];
    if (!list) continue;
    for (let j = 0; j < list.length; j++) if (list[j].t === title) return { h:i, c:j };
  }
  return null;
}

/* Escape the plain stretches, wrap the matches. Longest match wins, and each
   term is linked once per paragraph so the page does not fill with underlines. */
function glossText(text, idx, skip){
  idx = idx || glossIndex();
  const hits = [];
  idx.forEach(it => {
    const re = new RegExp("\\b" + it.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b",
                          it.ci ? "gi" : "g");
    let m;
    while ((m = re.exec(text))) hits.push({ s:m.index, e:m.index + m[0].length, key:it.key });
  });
  if (!hits.length) return esc(text);
  hits.sort((a, b) => a.s - b.s || (b.e - b.s) - (a.e - a.s));
  const used = {}, out = [];
  let at = 0;
  hits.forEach(h => {
    if (h.s < at || used[h.key] || (skip && skip(h.key))) return;
    out.push(esc(text.slice(at, h.s)));
    out.push(`<button class="gloss" data-gloss="${esc(h.key)}">${esc(text.slice(h.s, h.e))}</button>`);
    used[h.key] = 1;
    at = h.e;
  });
  out.push(esc(text.slice(at)));
  return out.join("");
}

/* A prompt names an example; openouts.js supplies the substance behind it.
   The material runs to a paragraph, too long for the glossary card, so it
   opens inline under the prompt instead of floating over the page. */
function openOutHTML(prompt, slug, i, j){
  const o = (typeof OPENOUTS !== "undefined") ? OPENOUTS[prompt] : null;
  if (!o) return `<li>${esc(prompt)}</li>`;
  const id = "oo-" + slug + "-" + i + "-" + j;
  return `<li class="has-oo">
    <button class="oo-t" data-oo="${id}" aria-expanded="false" aria-controls="${id}">
      <span>${esc(prompt)}</span><i></i>
    </button>
    <div class="oo" id="${id}" hidden>
      ${o.t ? `<b>${esc(o.t)}</b>` : ""}
      ${o.p.map(x => `<p>${glossText(x)}</p>`).join("")}
    </div>
  </li>`;
}

function glossCard(key){
  const id = key.slice(2);
  if (key.charAt(0) === "t") {
    const t = byId[id];
    if (!t) return "";
    return `<b>${esc(t.name)}</b>
      <span class="g-meta">${esc(t.years)}${t.school ? " &middot; " + esc(t.school) : ""}</span>
      <p>${esc(t.gist)}</p>
      <button class="g-more" data-open="${esc(t.id)}">Full page <i>&rarr;</i></button>`;
  }
  if (key.charAt(0) === "g") {
    const t = (typeof GS4_GLOSS !== "undefined") ? GS4_GLOSS[id] : null;
    if (!t) return "";
    return `<b>${esc(t.t)}</b>
      <span class="g-meta">${esc(t.a)}</span>
      <p>${esc(t.d)}</p>
      ${t.c && conceptSite(t.c) ? `<button class="g-more" data-concept="${esc(t.c)}">Read the concept <i>&rarr;</i></button>` : ""}`;
  }
  const g = (typeof GLOSSARY !== "undefined") ? GLOSSARY[id] : null;
  if (!g) return "";
  return `<b>${esc(g.t)}</b>
    <span class="g-meta">${esc(g.w)}</span>
    <p>${esc(g.d)}</p>
    ${byId[g.i] ? `<button class="g-more" data-open="${esc(g.i)}">Full page <i>&rarr;</i></button>` : ""}`;
}

/* One card, reused. Placed above the term when there is room, below when not,
   and always clamped inside the viewport. */
let glossPinned = null;
function glossBox(){
  let b = document.getElementById("glossbox");
  if (!b) {
    b = document.createElement("div");
    b.id = "glossbox";
    b.hidden = true;
    document.body.appendChild(b);
  }
  return b;
}
function glossShow(el, pin){
  const html = glossCard(el.dataset.gloss);
  if (!html) return;
  const b = glossBox();
  b.innerHTML = html;
  b.hidden = false;
  b.classList.toggle("pinned", !!pin);
  const r = el.getBoundingClientRect(), bw = b.offsetWidth, bh = b.offsetHeight;
  const pad = 10;
  let left = r.left + r.width / 2 - bw / 2;
  left = Math.max(pad, Math.min(left, window.innerWidth - bw - pad));
  const above = r.top > bh + pad;
  const top = above ? r.top - bh - 8 : r.bottom + 8;
  b.classList.toggle("below", !above);
  b.style.left = Math.round(left + window.scrollX) + "px";
  b.style.top  = Math.round(top + window.scrollY) + "px";
  document.querySelectorAll(".gloss.on").forEach(x => x.classList.remove("on"));
  el.classList.add("on");
}
function glossHide(force){
  if (glossPinned && !force) return;
  glossPinned = null;
  const b = document.getElementById("glossbox");
  if (b) { b.hidden = true; b.classList.remove("pinned"); }
  document.querySelectorAll(".gloss.on").forEach(x => x.classList.remove("on"));
}

/* An essay's first available register, since a theme editorial has only
   the editorial one. Used for word counts and card labels. */
function essayBody(e){
  return (e.p && e.p.length) ? e.p : (e.ep && e.ep.length) ? e.ep : (e.cp || []);
}
/* How many past questions this essay is the home for. */
function essayServes(e){
  return (e.serves && e.serves.length) ? e.serves.length : 0;
}

/* WORKS IN DEPTH. Three levels: an index classified by thinker, a page per
   thinker, and a page of roughly a thousand words per individual work. */
/* An entry may be a thinker or, like the Rigveda, a text with no single author. */
function wlWho(id){
  const e = WORKLAB[id], t = byId[id], cat = t ? catById[t.cat] : null;
  return { name:(t && t.name) || e.who || id,
           years:(t && t.years) || e.years || "",
           tradition:(cat && cat.name) || e.tradition || "",
           hasPage:!!t };
}

/* Paragraph array to HTML. "## " starts a section, "- " lines gather into a
   list, anything else is a paragraph. Keeps the data flat and readable. */
function wlBody(paras){
  let out = "", li = [];
  const flush = () => { if (li.length) { out += `<ul>${li.map(x => `<li>${rich(x)}</li>`).join("")}</ul>`; li = []; } };
  (paras || []).forEach(x => {
    if (x.indexOf("- ") === 0) { li.push(x.slice(2)); return; }
    flush();
    out += (x.indexOf("## ") === 0) ? `<h2>${esc(x.slice(3))}</h2>` : `<p>${rich(x)}</p>`;
  });
  flush();
  return out;
}

function wlTimeline(rows){
  if (!rows || !rows.length) return "";
  return `
    <div class="wl-timeline">
      <b>In one timeline</b>
      <ol>${rows.map(r => `<li><i>${esc(r.when)}</i><span>${esc(r.what)}</span></li>`).join("")}</ol>
    </div>`;
}

const wlSlug = x => String(x).replace(/[^A-Za-z0-9]/g, "");

function wlCover(id, work){
  const title = (typeof work === "string") ? work : work.t;
  const w = ((typeof WORKS !== "undefined") ? (WORKS[id] || []) : []).find(x => x.t === title);
  const own = (typeof work === "object" && work.cover) ? work.cover : null;
  const src = own || ((w && w.w && typeof COVERS !== "undefined") ? COVERS[w.w] : null);
  return { meta:w, html:`
    <div class="cover${src ? "" : " nocover"}">
      ${ src ? `<img src="${esc(src)}" alt="${esc(title)}" loading="lazy" decoding="async"
                 onerror="this.parentNode.classList.add('nocover');this.remove()">` : "" }
      <span class="spine">${esc(title)}</span>
    </div>` };
}

/* Level 3 — one work. */
function renderWork(id, title){
  const e = WORKLAB[id], t = byId[id];
  const w = e.works.find(x => x.t === title);
  if (!w) return renderWorkThinker(id);
  const who = wlWho(id), c = wlCover(id, w);
  const n = w.p.join(" ").split(/\s+/).length;
  const others = e.works.filter(x => x.t !== w.t);
  const yr = (c.meta && c.meta.y) || who.years;
  return `
    <button class="backlink" data-work="${esc(id)}:">&larr; ${esc(who.name)}</button>
    <article class="worklab work-one">
      <div class="wl-head">
        ${c.html}
        <div>
          <div class="essay-kicker">${esc(who.name)} &middot; ${esc(who.tradition)}</div>
          <h1>${esc(w.t)}</h1>
          <div class="essay-meta">${esc(yr)} &middot; ${n} words</div>
          <div class="wl-tags">
            <span class="wl-tag"><i>Form</i>${esc(w.form)}</span>
            <span class="wl-tag"><i>Fate</i>${esc(w.fate)}</span>
          </div>
        </div>
      </div>
      ${ w.coverNote ? `<p class="wl-covernote">${esc(w.coverNote)}</p>` : "" }
      <div class="wl-prose">${wlBody(w.p)}</div>
      ${wlTimeline(w.timeline)}
      ${ others.length ? `<div class="wl-sibs">
        <b>Also by ${esc(who.name)}</b>
        ${others.map(x => `<button class="pill" data-work="${esc(id)}:${esc(x.t)}">${esc(x.t)}</button>`).join("")}
      </div>` : "" }
      ${ who.hasPage ? `<button class="pill wl-open" data-open="${esc(id)}">Open the full page for ${esc(who.name)}</button>` : "" }
    </article>`;
}

/* Level 2 — one thinker's shelf. */
function renderWorkThinker(id){
  const e = WORKLAB[id];
  if (!e) return `<div class="empty"><b>Not found</b>No deep dive for this entry yet.</div>`;
  const who = wlWho(id);
  return `
    <button class="backlink" data-view="worklab">&larr; All works in depth</button>
    <article class="worklab">
      <div class="essay-kicker">${esc(who.name)} &middot; ${esc(who.years)} &middot; ${esc(who.tradition)}</div>
      <h1>${esc(e.t)}</h1>
      <p class="mode-note">${esc(e.why)}</p>
      ${wlBody(e.intro)}
      <div class="wl-shelf">${e.works.map(w => wlCard(id, w)).join("")}</div>
      <div class="wl-close">${e.close.map(x => `<p>${rich(x)}</p>`).join("")}</div>
    </article>`;
}

function wlCard(id, w){
  const c = wlCover(id, w);
  const n = w.p.join(" ").split(/\s+/).length;
  return `
    <button class="wl-card" data-work="${esc(id)}:${esc(w.t)}">
      ${c.html}
      <span class="wl-card-txt">
        <span class="radio" aria-hidden="true"></span>
        <b>${esc(w.t)}</b>
        ${(c.meta && c.meta.y) ? `<span class="yr">${esc(c.meta.y)}</span>` : ""}
        <span class="gist">${esc(w.gist)}</span>
        <span class="wl-mini"><i>Form</i>${esc(w.form)}</span>
        <span class="wl-mini"><i>Fate</i>${esc(w.fate)}</span>
        <span class="work-go">Read the piece &middot; ${n} words &rarr;</span>
      </span>
    </button>`;
}

/* Level 1 — the index, classified by thinker. */
function renderWorkLabList(){
  if (typeof WORKLAB === "undefined") return "";
  const ids = Object.keys(WORKLAB).filter(id => byId[id] || WORKLAB[id].who);
  const total = ids.reduce((a, id) => a + WORKLAB[id].works.length, 0);
  return `
    <div class="sec-head">
      <h3>Works in Depth</h3>
      <p>Five thinkers, one from each of five traditions, chosen to be as unlike each other as
         this roster allows &mdash; an aphoristic poem, a manual of statecraft, an unfinished
         economics, a sequence of interventions, and two novels. ${total} works, about a
         thousand words on each, on what is actually in the book and what happened to it.</p>
    </div>
    ${ids.map(id => {
      const e = WORKLAB[id], who = wlWho(id);
      return `
      <section class="wl-group">
        <header>
          <button class="wl-who" data-work="${esc(id)}:">
            <b>${esc(who.name)}</b>
            <span>${esc(who.years)} &middot; ${esc(who.tradition)}</span>
          </button>
          <p>${esc(e.why)}</p>
        </header>
        <div class="wl-shelf">${e.works.map(w => wlCard(id, w)).join("")}</div>
      </section>`;
    }).join("")}`;
}

/* An essay is keyed by its own title; the kicker should name its theme. */
function themeOfEssay(key){
  const t = ESSAY_THEMES.find(x => (x.essays || []).includes(key));
  return t ? t.t : "";
}

/* The past questions an essay is the home for, printed under its note so a
   reader can see exactly which paper questions it was written to answer. */
function servesHTML(e){
  if (!e.serves || !e.serves.length || typeof PYQ_PAPERS === "undefined") return "";
  const Q = pyqText();
  const rows = e.serves.map(k => Q[k]).filter(Boolean);
  if (!rows.length) return "";
  return `
    <div class="essay-serves">
      <b>Written to answer</b>
      <ul>${e.serves.map(k => Q[k]
        ? `<li><i>${Q[k].y} ${Q[k].s}${Q[k].n}</i>${esc(Q[k].q)}</li>` : "").join("")}</ul>
    </div>`;
}

/* Full-page essay view. Three registers: thinker-led, editorial, combined. */
const ESSAY_MODES = [
  { id:"thinker",   label:"Thinker-led", t:"t",  p:"p",
    note:"Argued through the thinkers, each introduced as an answer to the essay&rsquo;s central question." },
  { id:"editorial", label:"Editorial",   t:"et", p:"ep",
    note:"Argued as a columnist would &mdash; politics, economics, society and current policy, with thinkers barely present." },
  { id:"combined",  label:"Combined",    t:"ct", p:"cp",
    note:"Thinkers supply the conceptual spine and the evidence carries it, interleaved rather than taken in turns." }
];

function renderEssay(topic, mode){
  const e = (typeof ESSAYS !== "undefined") ? ESSAYS[topic] : null;
  if (!e) return `<div class="empty"><b>Not found</b>No essay for this theme yet.</div>`;
  const avail = ESSAY_MODES.filter(m => Array.isArray(e[m.p]) && e[m.p].length);
  const m = avail.find(x => x.id === mode) || avail[0];
  const paras = e[m.p], title = e[m.t];
  const n = paras.reduce((a, x) => a + x.split(/\s+/).length, 0);
  return `
    ${state.view === "themes"
      ? ""
      : `<button class="backlink" data-view="essays">&larr; All model essays</button>`}
    <article class="essay-doc">
      <div class="essay-kicker">${esc(themeOfEssay(topic) || topic)}</div>
      ${ avail.length > 1 ? `<div class="modebar" role="group" aria-label="Essay style">
          ${avail.map(x => `<button class="modebtn${x.id === m.id ? " on" : ""}"
             data-mode="${x.id}" data-topic="${esc(topic)}">${x.label}</button>`).join("")}
        </div>` : "" }
      <h1>${esc(title)}</h1>
      <div class="essay-meta">${m.label} &middot; ${n} words &middot; ${paras.length} paragraphs</div>
      <p class="mode-note">${esc(e.note || "") || m.note}</p>
      ${servesHTML(e)}
      ${paras.map(x => `<p>${rich(x)}</p>`).join("")}
      ${essayStoriesHTML(e)}
    </article>`;
}

/* The stories from the Thought Atlas that an essay draws on. Inside the theme
   map they open beside the essay; anywhere else they open in the atlas. */
function essayStoriesHTML(e){
  if (typeof ATLAS === "undefined" || !(e.atlas || []).length) return "";
  const ix = atlasById();
  const theme = state.view === "themes" ? ESSAY_THEMES[(state.page | 0) - 1] : null;
  const ids = e.atlas.filter(id => ix[id]);
  if (!ids.length) return "";
  return `
    <aside class="essay-stories">
      <b>Stories this essay uses</b>
      <p>Each is told in full in the Thought Atlas: the story, what it shows, how it has been read and where it breaks.</p>
      <div class="pills">${ids.map(id => theme && (theme.atlas || []).includes(id)
        ? `<button class="pill" data-sel="a:${id}">${esc(ix[id].t)}</button>`
        : `<button class="pill" data-to="atlas|0|${id}">${esc(ix[id].t)}</button>`).join("")}</div>
    </aside>`;
}

/* Index of every theme that has an essay. */
function renderEssayList(){
  const rows = [];
  if (typeof ESSAYS !== "undefined")
    ESSAY_THEMES.forEach(t => (t.essays || []).forEach(k => { if (ESSAYS[k]) rows.push({ theme:t.t, key:k }); }));
  return `
    <div class="sec-head">
      <h3>Model Essays</h3>
      <p>One full essay per theme, showing what a model paragraph becomes once
         evidence, counter-argument and a conclusion are added to it.</p>
    </div>
    ${ rows.length ? `<div class="essay-grid">${rows.map(r => {
        const e = ESSAYS[r.key];
        const n = essayBody(e).reduce((a, x) => a + x.split(/\s+/).length, 0);
        const q = essayServes(e);
        return `
          <button class="essay-card" data-essay="${esc(r.key)}">
            <span class="ec-theme">${esc(r.theme)}</span>
            <b>${esc(e.t || e.et)}</b>
            <span class="ec-meta">${n} words${q ? " &middot; answers " + q + " past question" + (q > 1 ? "s" : "") : ""}</span>
          </button>`;
      }).join("")}</div>`
      : `<div class="empty"><b>Nothing yet</b>Essays are added per theme in essays.js.</div>` }`;
}

/* Question id ("2023B4") -> the question as it was set. */
function pyqText(){
  const m = {};
  if (typeof PYQ_PAPERS === "undefined") return m;
  PYQ_PAPERS.forEach(p => ["a","b"].forEach(sec =>
    p[sec].forEach((q, i) => { m[p.y + sec.toUpperCase() + (i + 1)] = { y:p.y, s:sec.toUpperCase(), n:i + 1, q }; })));
  return m;
}

/* Question id -> the sub-theme paragraph written to answer it,
   as { ti, pi, h } indices into ESSAY_THEMES and ANSWERS. */
function pyqAnswer(){
  const m = {};
  if (typeof ANSWERS === "undefined") return m;
  ESSAY_THEMES.forEach((t, ti) => (ANSWERS[t.t] || []).forEach((a, pi) =>
    (a.qs || []).forEach(q => { if (!m[q]) m[q] = { ti, pi, h:a.h }; })));
  return m;
}

/* ---- Essay Theme Map, paginated ----
   Nine themes on a single scroll meant hunting for the one you wanted. The map
   is now an index page plus one page per theme, moved through with the pager. */
function themeStats(t){
  const list = (typeof ANSWERS !== "undefined") ? (ANSWERS[t.t] || []) : [];
  return { list, words: list.reduce((a, x) => a + x.p.join(" ").split(/\s+/).length, 0) };
}

/* What a theme contains: its model paragraphs, the full essays written from
   them, and the stories from the Thought Atlas that suit it. */
function themeItems(t){
  const items = [];
  const list = (typeof ANSWERS !== "undefined") ? (ANSWERS[t.t] || []) : [];
  list.forEach((x, i) => items.push({ id:"p:" + i, g:"Model paragraphs", k:"Model paragraph",
                                      t:x.h, n:(x.qs || []).length }));
  const keys = (t.essays || []).filter(k => (typeof ESSAYS !== "undefined") && ESSAYS[k]);
  keys.forEach(k => {
    const e = ESSAYS[k];
    const w = essayBody(e).reduce((n, x) => n + x.split(/\s+/).length, 0);
    items.push({ id:"e:" + k, g:"Written out in full", k:"Full essay", t:e.t || e.et, n:0, w:w });
  });
  themeStories(t).forEach(x => items.push({ id:"a:" + x.id, g:"Stories to use", k:"Story", t:x.t, n:0 }));
  return items;
}

function themeStories(t){
  if (typeof ATLAS === "undefined") return [];
  const ix = atlasById();
  return (t.atlas || []).map(id => ix[id]).filter(Boolean);
}

/* The questions a theme has been set, gathered from its model paragraphs. */
function themeQuestions(t){
  const qs = new Set();
  themeStats(t).list.forEach(a => (a.qs || []).forEach(q => qs.add(q)));
  return qs.size;
}

function paragraphPane(t, i){
  const list = (typeof ANSWERS !== "undefined") ? (ANSWERS[t.t] || []) : [];
  const x = list[i];
  if (!x) return "";
  const Q = pyqText();
  const slug = esc(t.t).replace(/[^A-Za-z]/g, "");
  return `
    <article class="ans sm-pane">
      <h5><span class="ans-no">${i + 1}</span>${esc(x.h)}</h5>
      ${x.s ? `<p class="ans-for">${esc(x.s)}</p>` : ""}
      ${(x.qs && x.qs.length) ? `<div class="ans-serves"><b>Answers</b>${x.qs.map(k => Q[k]
          ? `<span class="ans-q"><i>${Q[k].y} ${Q[k].s}${Q[k].n}</i>${esc(Q[k].q)}</span>` : "").join("")}</div>` : ""}
      ${x.p.map(y => `<p>${glossText(y)}</p>`).join("")}
      <div class="ans-open">
        <b>Open it out with</b>
        <ul>${x.open.map((y, j) => openOutHTML(y, slug, i, j)).join("")}</ul>
      </div>
    </article>`;
}

function themeRead(t, sel){
  if (sel && sel.charAt(0) === "p") return paragraphPane(t, +sel.slice(2));
  if (sel && sel.charAt(0) === "e") return renderEssay(sel.slice(2), state.mode);
  if (sel && sel.charAt(0) === "a" && typeof ATLAS !== "undefined") {
    const x = atlasById()[sel.slice(2)];
    if (x) return atlasEntryHTML(x, t);
  }
  return `<div class="empty"><b>Nothing here yet</b>No paragraphs written for this theme.</div>`;
}

function renderThemes(){
  const n = state.page | 0;
  if (!n || !ESSAY_THEMES[n - 1]) { state.page = 0; return mapIndexHTML(mapSpec("themes")); }
  return mapPageHTML(mapSpec("themes"));
}

/* ---- GS-IV: the concepts that keep coming back ----
   Sits above the question list, because a reader wants to know what the paper
   keeps asking before they read twenty questions. Ordered as written, which is
   by how often the paper has returned to each. */
/* Concept definitions carry **bold** on their key claims. Gloss first, then
   apply emphasis: glossText escapes the text and inserts buttons, and a bold
   span that encloses one simply wraps it. */
function gloss2(t, skip){
  return glossText(t, gs4GlossIndex(), skip)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\*([^*<]+?)\*/g, "<em>$1</em>");
}

/* Half the case studies and a handful of the theory questions ask several
   things at once. Shown as one block the demands run together; shown as parts
   the reader can see which part of the note answers which part of the question. */
function qParts(text){
  const at = [];
  ["(a)", "(b)", "(c)", "(d)", "(e)"].forEach(m => {
    const k = text.indexOf(m);
    if (k >= 0) at.push({ i:k, k:m.charAt(1) });
  });
  at.sort((x, y) => x.i - y.i);
  if (at.length < 2) return null;
  // (a) then (b) then (c); anything out of order is a citation, not a part list
  for (let j = 0; j < at.length; j++)
    if (at[j].k !== "abcde".charAt(j)) return null;
  const parts = [];
  for (let j = 0; j < at.length; j++) {
    const from = at[j].i + 3, to = (j + 1 < at.length) ? at[j + 1].i : text.length;
    parts.push({ k:at[j].k, t:text.slice(from, to).trim() });
  }
  return { lead:text.slice(0, at[0].i).trim(), parts:parts };
}

/* One question under a concept: its parts, its terms, and the other concepts on
   this heading that also turn on it. */
function gcQuestion(q, title, byHead){
  const also = (byHead[q.id] || []).filter(x => x !== title);
  const body = qParts(q.q);
  // the note suppresses a term that would only point back at itself; a question
  // does not, since the reader is asking what the words in it mean
  const mark = x => glossText(x, gs4GlossIndex());
  return `<span class="gc-q">
    <i>${q.y} ${esc(q.sec)}</i>
    ${body
      ? `${body.lead ? `<span class="gq-lead">${mark(body.lead)}</span>` : ""}
         ${body.parts.map(p => `<span class="gq-part"><em>${p.k}</em>${mark(p.t)}</span>`).join("")}`
      : `<span class="gq-lead">${mark(q.q)}</span>`}
    ${also.length ? `<span class="gq-also"><b>Also under</b>${also.map(x =>
        `<button class="gq-link" data-concept="${esc(x)}">${esc(x)}</button>`).join("")}</span>` : ""}
  </span>`;
}

/* ---- How to answer a case study ----
   Thirty-nine of the seventy-five case studies ask the same thing in different
   words: decide, and say why. The six moves are those demands deduplicated and
   put in an order that holds whichever subset a given case asks for. */
const CASE_MOVES = [
  { n:"Frame",    w:"25", x:"Say what you must decide, in one sentence. Name the pressure you are deciding against. Do not retell the story." },
  { n:"Collide",  w:"41", x:"Name the two sides of the dilemma. Then name what else matters but cannot override them." },
  { n:"Cost",     w:"51", x:"Weigh each course. What it saves, who pays, and whether the damage can be undone." },
  { n:"Choose",   w:"50", x:"Decide, and say what you would actually do, in order. Give the one reason that settles it." },
  { n:"Concede",  w:"25", x:"Admit what your choice costs. Then say why it is still right." },
  { n:"Close",    w:"42", x:"Fix responsibility and strengthen the system. The aim is to prevent a repeat, not just to settle this case." }
];
const CASE_TRAPS = [
  ["Frame",   "Retelling the case eats half your words before you begin."],
  ["Collide", "Listing every value in the syllabus. Name the two that clash."],
  ["Cost",    "The brave option \u2014 resign, call the press \u2014 chosen without counting its cost."],
  ["Choose",  "Forming a committee. That is a way of not deciding."],
  ["Concede", "The clean win. No real dilemma ends with nobody losing."],
  ["Close",   "Stopping at the choice, when the case asked what prevents a repeat."]
];
const CASE_SAMPLE = [
  ["Frame", "As Executive Engineer, I must decide whether to permit opening of the flyover despite safety-related deviations, contrary to my Chief Engineer's instruction to ignore them."],
  ["Collide", "The dilemma is between obedience to a superior and institutional hierarchy on one hand, and public safety, professional integrity and duty of care on the other. The contractor's interests and project timelines also have to be considered, but cannot override safety."],
  ["Cost", "Ignoring the deviations may prevent delay and financial loss to the contractor but could expose the public to structural risk and make me personally and institutionally accountable. Stopping the opening may delay an important road project and impose financial costs, but these are reversible whereas loss of life may be irreversible."],
  ["Choose", "I would not permit opening until the safety concerns are independently examined and resolved. I would document the deviations, seek the Chief Engineer's instructions in writing and escalate the matter to the competent authority if necessary. Seeking written directions is not insubordination; it ensures accountability within the chain of command."],
  ["Concede", "This may delay public infrastructure, inconvenience commuters and invite allegations of insubordination. However, administrative efficiency cannot justify knowingly exposing citizens to an avoidable safety risk."],
  ["Close", "I would order an independent structural assessment, examine the conduct of the Junior Engineers who submitted inaccurate reports, fix responsibility for supervisory failure, and strengthen inspection and reporting mechanisms. The objective is not merely to stop this opening but to prevent recurrence."]
];

function caseMethodHTML(title){
  if (title !== "Case Studies") return "";
  return `
    <div class="cm">
      <div class="ans-head">
        <b>How to answer one</b>
        <span>Thirty-nine of these ask the same thing in different words: decide, and say why.
          Six moves answer all of them. Word counts are what the worked answer below actually uses</span>
      </div>
      <ol class="cm-moves">
        ${CASE_MOVES.map((m, i) => `
          <li>
            <span class="cm-n">${i + 1}</span>
            <span class="cm-name">${m.n}</span>
            <span class="cm-x">${esc(m.x)}</span>
            <span class="cm-w">${m.w}<i>w</i></span>
          </li>`).join("")}
      </ol>
      <div class="cm-traps">
        <b>Six ways it goes wrong</b>
        <ul>${CASE_TRAPS.map(t => `<li><em>${t[0]}</em>${esc(t[1])}</li>`).join("")}</ul>
      </div>
      <details class="cm-eg">
        <summary><span class="chev">&#9656;</span>One written out in full
          <em>2013 &middot; the flyover with the deviations</em></summary>
        <div class="cm-eg-body">
          ${CASE_SAMPLE.map(x => `
            <div class="cm-slot"><span class="cm-tag">${x[0]}</span><p>${esc(x[1])}</p></div>`).join("")}
          <p class="cm-note">Shorter answer? Compress Cost to one sentence and fold Concede into Choose.</p>
        </div>
      </details>
    </div>`;
}

/* ---- GS-IV past questions under their syllabus heading ----
   The compilation groups twelve years of GS-IV into fourteen themes; each maps
   onto one or more headings here. Collapsed by default, because some headings
   carry more than thirty questions and the roster above them is the first
   thing a reader wants. */
function gs4For(title){
  if (typeof GS4_PYQ === "undefined" || typeof GS4_THEMES === "undefined") return [];
  if (title === "Case Studies") return GS4_PYQ.filter(q => q.sec === "B");
  const codes = GS4_THEMES.filter(t => (t.maps || []).indexOf(title) >= 0).map(t => t.c);
  if (!codes.length) return [];
  return GS4_PYQ.filter(q => codes.indexOf(q.th) >= 0);
}

function gs4Rows(qs){
  return qs.map(q => `
    <li class="g4-q">
      <span class="g4-yr">${q.y}<i>${esc(q.sec)}</i></span>
      <span class="g4-body">
        <span class="g4-text">${esc(q.q)}</span>
        <span class="g4-meta">${esc(q.syl || "")}${q.m ? " &middot; " + esc(q.m) : ""}</span>
      </span>
    </li>`).join("");
}

/* ---- GS-IV Syllabus Map ----
   One heading at a time. Its contents in the middle column, whatever is chosen
   from them on the right. There is no index page and no pager any more: with
   every heading in the sidebar, both were describing a list already on screen. */
function sylStats(r){
  const con = (typeof GS4_CONCEPTS !== "undefined" && GS4_CONCEPTS[r.t]) || [];
  return { thinkers:r.ids.filter(id => byId[id]).length,
           concepts:con, questions:gs4For(r.t).length };
}

/* ---- The two maps ----
   The GS-IV syllabus map and the essay theme map are read the same way: an
   index page with every heading on it, then one heading at a time, its contents
   a tree in the sidebar and the chosen item in the reading column. */
function mapSpec(view){
  return view === "syllabus"
    ? { view:"syllabus", name:"GS-IV Syllabus Map", paper:"GS Paper IV", unit:"Heading",
        units:"headings", label:"GS-IV syllabus", list:SYLLABUS, items:sylItems, read:sylRead,
        sub:r => glossText(r.s, gs4GlossIndex()) }
    : { view:"themes", name:"Essay Theme Map", paper:"Essay Paper", unit:"Theme",
        units:"themes", label:"Essay themes", list:ESSAY_THEMES, items:themeItems, read:themeRead,
        sub:t => esc(t.s) };
}
const mapSel = items => items.some(x => x.id === state.sel) ? state.sel : (items[0] ? items[0].id : null);
const readKey = (view, page, id) => view + "|" + page + "|" + id;

/* ---- The GS-IV syllabus map's first page ----
   The home page's look: a header band, then how a heading is built, where the
   paper asks most, and every heading as a card with what it holds. */
const SYL_ICON = {
  "Ethics & Human Interface":"scale", "Human Values":"heart", "Attitude":"eye",
  "Aptitude & Foundational Values for Civil Service":"target", "Emotional Intelligence":"sun",
  "Moral Thinkers & Philosophers of India":"book", "Moral Thinkers & Philosophers of the World":"globe",
  "Public / Civil Service Values & Ethics in Public Administration":"landmark",
  "Accountability & Ethical Governance":"file", "Probity in Governance":"compass",
  "Corruption, Whistleblowing & Conflict of Interest":"alert",
  "Corporate Governance & Workplace Ethics":"case", "Ethics in Science, Technology & Media":"cpu",
  "Environmental & Development Ethics":"leaf", "Social Justice, Gender & the Weaker Sections":"users",
  "Case Studies":"layers"
};
const SYL_PARTS = [
  ["layers",  "Concepts that repeat", "The ideas the paper keeps returning to, most asked first"],
  ["book",    "Inside each concept",  "A definition, numbered sections and a key takeaway"],
  ["file",    "Where it was asked",   "Every past question that turns on the concept"],
  ["users",   "Thinkers and questions", "Who to quote on the heading, and its full question list"]
];

/* Where the paper asks most: theory and case questions per heading. The case
   studies are counted under the heading they test, so the Case Studies heading,
   which gathers them all, is left out; the two moral-thinkers headings share
   one pool of questions and are shown once. */
function sylChartHTML(){
  const rows = [];
  SYLLABUS.forEach((r, i) => {
    if (r.t === "Case Studies" || r.t === "Moral Thinkers & Philosophers of the World") return;
    const q = gs4For(r.t);
    const t = r.t === "Moral Thinkers & Philosophers of India" ? "Moral thinkers, India and the world" : r.t;
    rows.push({ t, open:(i + 1) + "|", a:q.filter(x => x.sec === "A").length, b:q.filter(x => x.sec === "B").length });
  });
  return stackChartHTML(rows, "theory question (Section A)|theory questions (Section A)",
                         "case study (Section B)|case studies (Section B)");
}

function sylCardHTML(r, i){
  const s = sylStats(r), items = sylItems(r);
  const done = items.filter(it => isRead(readKey("syllabus", i + 1, it.id))).length;
  const cases = r.t === "Case Studies";
  const top = s.concepts.slice(0, 3).map(c => c.t);
  return `
      <button class="scard" data-open-at="${i + 1}|">
        <span class="scard-top">
          <span class="scard-no">${i + 1}</span>${ico(SYL_ICON[r.t] || "book")}
          <em>${done ? done + " of " + items.length + " read" : "Not started"}</em>
        </span>
        <b>${esc(r.t)}</b>
        <span class="scard-s">${esc(r.s)}</span>
        <span class="scard-stats">
          <span><b>${s.concepts.length}</b>${cases ? "patterns" : "concepts"}</span>
          <span><b>${s.questions}</b>${cases ? "cases" : "questions"}</span>
          <span><b>${s.thinkers}</b>thinkers</span>
        </span>
        ${top.length ? `<span class="scard-top-c"><i>Most asked</i>${top.map(esc).join(" &middot; ")}</span>` : ""}
        <i class="atile-bar"><i style="width:${items.length ? Math.round(done / items.length * 100) : 0}%"></i></i>
      </button>`;
}

function sylIndexHTML(spec){
  const s = siteStats();
  const cs = SYLLABUS.findIndex(r => r.t === "Case Studies") + 1;
  const g4y = GS4_PYQ.map(q => q.y);
  const span = Math.min.apply(null, g4y) + " to " + Math.max.apply(null, g4y);
  return `
  <section class="hero hero-sm">
    <div class="hero-art art-aristotle" aria-hidden="true"></div>
    <div class="hero-body">
      <p class="hero-k">GS Paper IV</p>
      <h2 class="hero-t">GS-IV Syllabus Map</h2>
      <p class="hero-s">The whole syllabus in ${SYLLABUS.length} headings. Under each: the concepts the paper
         keeps coming back to, the thinkers worth quoting, and every question set on it from ${span}.</p>
      <p class="hero-note">Open a heading to begin. Its contents stay in the panel beside you, each item
         is ticked once you have opened it, and your place is kept.</p>
    </div>
    <div class="hero-aside">
      <button data-open-at="1|"><b>${s.concepts}</b><span>concept notes</span></button>
      <button data-view="gs4pyq"><b>${s.gsq}</b><span>past questions</span></button>
      ${cs ? `<button data-open-at="${cs}|pyq"><b>${s.cases}</b><span>case studies</span></button>` : ""}
    </div>
  </section>

  <div class="home">
    ${resumeHTML(lastPlaces()[spec.view])}

    <section class="atl-guide" aria-label="How every heading is built">
      <h3 class="hb-t">How every heading is built</h3>
      <ol class="atl-steps">${SYL_PARTS.map((p, i) => `
        <li><span class="atl-step-ico">${ico(p[0])}</span>
            <b><i>${i + 1}</i>${esc(p[1])}</b><span>${esc(p[2])}</span></li>`).join("")}
      </ol>
    </section>

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">Where the paper asks most</h3>
          <p class="hb-s">Past questions under each heading, ${span}. Open a bar to go to its heading.</p></div>
        <button class="hb-link" data-view="gs4pyq">All ${s.gsq} questions ${ico("arrow")}</button>
      </div>
      <div class="schart-card">${sylChartHTML()}</div>
    </section>

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">The ${SYLLABUS.length} headings</h3>
          <p class="hb-s">In syllabus order. Each card shows what the heading holds and its most asked concepts.</p></div>
      </div>
      <div class="scards">${SYLLABUS.map(sylCardHTML).join("")}</div>
    </section>
  </div>`;
}

/* One tooltip for the chart, filled with textContent. Values lead; the
   heading's name follows. */
function vizTip(el, x, y){
  let tip = document.getElementById("vizTip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "vizTip";
    tip.className = "viz-tip";
    tip.setAttribute("role", "status");
    document.body.appendChild(tip);
  }
  if (!el) { tip.hidden = true; return; }
  const a = +el.dataset.a, b = +el.dataset.b;
  tip.textContent = "";
  const row = (cls, n, label) => {
    const d = document.createElement("div");
    const k = document.createElement("i"); k.className = cls;
    const v = document.createElement("b"); v.textContent = n;
    d.append(k, v, document.createTextNode(" " + label));
    return d;
  };
  const h = document.createElement("span");
  h.textContent = el.dataset.tip;
  tip.append(row("tk-a", a, nLab(el.dataset.la, a)), row("tk-b", b, nLab(el.dataset.lb, b)), h);
  tip.hidden = false;
  const w = tip.offsetWidth, hgt = tip.offsetHeight;
  tip.style.left = Math.min(window.innerWidth - w - 8, x + 14) + "px";
  tip.style.top = Math.max(8, y - hgt - 12) + "px";
}

/* A stacked bar per row, two series, sorted by total: used by both maps'
   first pages. rows: [{ t, open, a, b }]; open is a data-open-at value. A
   series label is "one|many", so a count of one reads correctly. */
const nLab = (lab, n) => { const p = lab.split("|"); return n === 1 ? p[0] : (p[1] || p[0]); };
function stackChartHTML(rows, la, lb, first){
  rows = rows.slice().sort((x, y) => (y.a + y.b) - (x.a + x.b));
  const max = Math.max.apply(null, rows.map(r => r.a + r.b)) || 1;
  const cap = s => { s = nLab(s, 2); return s.charAt(0).toUpperCase() + s.slice(1); };
  return `
    <div class="schart-legend" aria-hidden="true">
      <span><i class="sw-a"></i>${esc(cap(la))}</span>
      <span><i class="sw-b"></i>${esc(cap(lb))}</span>
    </div>
    <ol class="schart">${rows.map(r => `
      <li><button class="schart-row" data-open-at="${r.open}" data-tip="${esc(r.t)}" data-a="${r.a}" data-b="${r.b}"
                  data-la="${esc(la)}" data-lb="${esc(lb)}"
                  aria-label="${esc(r.t)}: ${r.a} ${esc(nLab(la, r.a))}, ${r.b} ${esc(nLab(lb, r.b))}, ${r.a + r.b} in all">
        <span class="schart-t">${esc(r.t)}</span>
        <span class="schart-track">
          <span class="schart-bar" style="width:calc((100% - 44px) * ${((r.a + r.b) / max).toFixed(3)})">
            ${r.a ? `<i class="seg-a" style="flex-grow:${r.a}"></i>` : ""}${r.b ? `<i class="seg-b" style="flex-grow:${r.b}"></i>` : ""}
          </span>
          <b class="schart-n">${r.a + r.b}</b>
        </span>
      </button></li>`).join("")}
    </ol>
    <details class="schart-table">
      <summary>Show as a table</summary>
      <table>
        <thead><tr><th scope="col">${esc(first || "Heading")}</th><th scope="col">${esc(cap(la))}</th><th scope="col">${esc(cap(lb))}</th><th scope="col">Total</th></tr></thead>
        <tbody>${rows.map(r => `<tr><th scope="row">${esc(r.t)}</th><td>${r.a}</td><td>${r.b}</td><td>${r.a + r.b}</td></tr>`).join("")}</tbody>
      </table>
    </details>`;
}

/* ---- The Essay Theme Map's first page ----
   The same look as the syllabus map: a header band, how a theme is built,
   where the paper asks most, and every theme as a card. */
const THEME_PARTS = [
  ["layers",  "Model paragraphs", "Five per theme, one for each kind of question the theme throws up"],
  ["nib",     "Full essays",      "Complete essays written from those paragraphs"],
  ["compass", "Stories to use",   "Atlas entries that can open or carry an essay on the theme"],
  ["file",    "The topics it answers", "Each paragraph names the past topics it serves"]
];

/* The past topics a theme has been set, as parsed keys: 2023B4 is 2023,
   Section B, topic 4. */
function themeTopics(t){
  const keys = new Set();
  themeStats(t).list.forEach(a => (a.qs || []).forEach(k => keys.add(k)));
  return [...keys].map(k => ({ k, y:+k.slice(0, 4), s:k.charAt(4) }));
}

function themeCardHTML(t, i, years){
  const items = themeItems(t), st = themeStats(t), tp = themeTopics(t);
  const done = items.filter(it => isRead(readKey("themes", i + 1, it.id))).length;
  const essays = (t.essays || []).filter(k => (typeof ESSAYS !== "undefined") && ESSAYS[k]).length;
  const Q = pyqText();
  const latest = tp.slice().sort((a, b) => b.y - a.y || a.k.localeCompare(b.k))[0];
  const per = y => tp.filter(x => x.y === y).length;
  const asked = years.filter(y => per(y)).map(y => y + (per(y) > 1 ? " (" + per(y) + ")" : ""));
  return `
      <button class="scard" data-open-at="${i + 1}|">
        <span class="scard-top">
          <span class="scard-no">${i + 1}</span>${ico(t.ic || "target")}
          <em>${done ? done + " of " + items.length + " read" : "Not started"}</em>
        </span>
        <b>${esc(t.t)}</b>
        <span class="scard-s">${esc(t.s)}</span>
        <span class="scard-stats">
          <span><b>${st.list.length}</b>paragraphs</span>
          <span><b>${essays}</b>essays</span>
          <span><b>${themeStories(t).length}</b>stories</span>
          <span><b>${tp.length}</b>topics</span>
        </span>
        <span class="tyears" aria-label="Asked in ${esc(asked.join(", ") || "no year yet")}">
          <i class="tyears-l">${years[0]}</i>${years.map(y => `<i class="ty${per(y) > 1 ? " ty2" : per(y) ? " ty1" : ""}" title="${y}: ${plural(per(y), "topic", "topics")}"></i>`).join("")}<i class="tyears-l">${years[years.length - 1]}</i>
        </span>
        ${latest && Q[latest.k] ? `<span class="scard-top-c"><i>Latest topic, ${latest.y}</i>${esc(Q[latest.k].q)}</span>` : ""}
        <i class="atile-bar"><i style="width:${items.length ? Math.round(done / items.length * 100) : 0}%"></i></i>
      </button>`;
}

function themeIndexHTML(spec){
  const s = siteStats();
  const years = (typeof PYQ_PAPERS !== "undefined") ? PYQ_PAPERS.map(p => p.y).sort() : [];
  const span = years.length ? years[0] + " to " + years[years.length - 1] : "";
  const rows = ESSAY_THEMES.map((t, i) => {
    const tp = themeTopics(t);
    return { t:t.t, open:(i + 1) + "|", a:tp.filter(x => x.s === "A").length, b:tp.filter(x => x.s === "B").length };
  });
  return `
  <section class="hero hero-sm">
    <div class="hero-art art-pen" aria-hidden="true"></div>
    <div class="hero-body">
      <p class="hero-k">Essay Paper</p>
      <h2 class="hero-t">Essay Theme Map</h2>
      <p class="hero-s">${ESSAY_THEMES.length} themes that cover every essay topic the paper has set, ${span}.
         Under each: model paragraphs to adapt, full essays written from them, and stories from the
         Thought Atlas that suit it.</p>
      <p class="hero-note">Open a theme to begin. Its contents stay in the panel beside you, each item
         is ticked once you have opened it, and your place is kept.</p>
    </div>
    <div class="hero-aside">
      <button data-open-at="1|p:0"><b>${s.paras}</b><span>model paragraphs</span></button>
      <button data-view="essays"><b>${s.essays}</b><span>full essays</span></button>
      <button data-view="pyq"><b>${s.topics}</b><span>past topics</span></button>
    </div>
  </section>

  <div class="home">
    ${resumeHTML(lastPlaces()[spec.view])}

    <section class="atl-guide" aria-label="How every theme is built">
      <h3 class="hb-t">How every theme is built</h3>
      <ol class="atl-steps">${THEME_PARTS.map((p, i) => `
        <li><span class="atl-step-ico">${ico(p[0])}</span>
            <b><i>${i + 1}</i>${esc(p[1])}</b><span>${esc(p[2])}</span></li>`).join("")}
      </ol>
    </section>

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">Where the paper asks most</h3>
          <p class="hb-s">Past essay topics under each theme, ${span}, by the section of the paper they were set in.
             Open a bar to go to its theme.</p></div>
        <button class="hb-link" data-view="pyq">All ${s.topics} topics ${ico("arrow")}</button>
      </div>
      <div class="schart-card">${stackChartHTML(rows, "Section A topic|Section A topics", "Section B topic|Section B topics", "Theme")}</div>
    </section>

    <section class="hblock">
      <div class="hb-head">
        <div><h3 class="hb-t">The ${ESSAY_THEMES.length} themes</h3>
          <p class="hb-s">Each card shows what the theme holds, the years it was asked, and its latest topic.</p></div>
      </div>
      <div class="scards">${ESSAY_THEMES.map((t, i) => themeCardHTML(t, i, years)).join("")}</div>
    </section>
  </div>`;
}

/* The first page of a map: every heading, what is inside it and how much of it
   has been read, so the whole paper can be seen before any of it is opened. */
function mapIndexHTML(spec){
  return spec.view === "syllabus" ? sylIndexHTML(spec) : themeIndexHTML(spec);
}

/* Every item in the open map, in reading order, so that previous and next can
   cross from the last item of one heading into the first of the next, and so
   that progress has a denominator. */
function mapWalk(){
  const out = [];
  if (state.view === "syllabus")
    SYLLABUS.forEach((r, i) => sylItems(r).forEach(it =>
      out.push({ p:i + 1, id:it.id, t:it.t, h:r.t })));
  else if (state.view === "themes")
    ESSAY_THEMES.forEach((t, i) => themeItems(t).forEach(it =>
      out.push({ p:i + 1, id:it.id, t:it.t, h:t.t })));
  return out;
}

function mapWhere(walk, page, sel){
  for (let i = 0; i < walk.length; i++)
    if (walk[i].p === page && walk[i].id === sel) return i;
  return -1;
}

/* The page for one heading: where it sits, what kind of item is open, then the
   item itself and the way on. */
function mapPageHTML(spec){
  const n = state.page | 0, x = spec.list[n - 1];
  const items = spec.items(x), sel = mapSel(items);
  const it = items.find(y => y.id === sel);
  const walk = mapWalk(), at = mapWhere(walk, n, sel);
  if (it) markRead(readKey(spec.view, n, sel), { t:it.t, h:x.t, where:spec.name });
  const kin = it ? items.filter(y => y.g === it.g) : [];
  const kind = !it ? "" : it.k ? it.k + " " + (kin.indexOf(it) + 1) + " of " + kin.length : (it.lab || it.g);
  return `
    <div class="rd">
      <header class="rd-head">
        <div class="rd-crumbs">
          <button class="rd-toc" data-toc aria-label="Show the contents">&#9776;<span>Contents</span></button>
          <button class="rd-up" data-page="0">${spec.name}</button>
          <span class="rd-sep" aria-hidden="true">/</span>
          <span>${spec.unit} ${n} of ${spec.list.length}</span>
        </div>
        <h2 class="rd-title">${esc(x.t)}</h2>
        <p class="rd-sub">${spec.sub(x)}</p>
        ${spec.view === "syllabus" ? (() => { const st = sylStats(x), cases = x.t === "Case Studies"; return `
        <p class="rd-stats">${ico(SYL_ICON[x.t] || "book")}
          <span><b>${st.concepts.length}</b> ${cases ? "case patterns" : "concepts"}</span>
          <span><b>${st.questions}</b> ${cases ? "cases" : "past questions"}</span>
          <span><b>${st.thinkers}</b> thinkers</span></p>`; })() : (() => {
          const es = (x.essays || []).filter(k => (typeof ESSAYS !== "undefined") && ESSAYS[k]).length; return `
        <p class="rd-stats">${ico(x.ic || "target")}
          <span><b>${themeStats(x).list.length}</b> model paragraphs</span>
          <span><b>${es}</b> full essays</span>
          <span><b>${themeStories(x).length}</b> stories</span>
          <span><b>${themeQuestions(x)}</b> past topics</span></p>`; })()}
        <div class="rd-where">
          ${kind ? `<span class="rd-kind">${esc(kind)}</span>` : "<span></span>"}
          ${stepHTML(walk, at)}
        </div>
      </header>
      ${spec.read(x, sel)}
      ${moveHTML(walk, at, x.t)}
    </div>`;
}

/* Previous and next, small, at the top of the column, so a reader need not
   scroll to the end of a long essay to move on. */
function stepHTML(walk, at){
  if (at < 0) return "";
  const step = (i, dir) => {
    const word = dir < 0 ? "Previous" : "Next", arrow = dir < 0 ? "&larr;" : "&rarr;";
    return walk[i]
      ? `<button class="rd-step" data-go="${i}" title="${word}: ${esc(walk[i].t)}"
                 aria-label="${word}: ${esc(walk[i].t)}">${arrow}</button>`
      : `<span class="rd-step off" aria-hidden="true">${arrow}</span>`;
  };
  return `<span class="rd-steps">${step(at - 1, -1)}${step(at + 1, 1)}</span>`;
}

/* Where the reader can go from here. The heading is named only when the step
   leaves the one they are in. */
function moveHTML(walk, at, here){
  if (at < 0) return "";
  const step = (i, dir) => {
    const x = walk[i];
    if (!x) return `<span class="mv-end">${dir < 0 ? "Start of the map" : "End of the map"}</span>`;
    return `<button class="mv ${dir < 0 ? "prev" : "next"}" data-go="${i}">
        <em>${dir < 0 ? "Previous" : "Next"}</em>
        <span>${esc(x.t)}</span>
        ${x.h !== here ? `<i>in ${esc(x.h)}</i>` : ""}
      </button>`;
  };
  return `
    <nav class="sm-move" aria-label="Move through the map">
      ${step(at - 1, -1)}
      ${step(at + 1, 1)}
    </nav>`;
}

/* What a heading contains, in the order it should be read. */
function sylItems(r){
  const items = [];
  const cases = r.t === "Case Studies";
  if (cases) items.push({ id:"method", g:"How to answer one", lab:"How to answer a case study",
                          t:"The six moves", n:0 });
  const list = (typeof GS4_CONCEPTS !== "undefined" && GS4_CONCEPTS[r.t]) || [];
  const g = cases ? "Sorted by what collides" : "Concepts that repeat";
  const k = cases ? "Case pattern" : "Concept";
  list.forEach((c, i) => items.push({ id:"c:" + i, g:g, k:k, t:c.t, n:c.qs.length }));
  const th = r.ids.filter(id => byId[id]).length;
  if (th) items.push({ id:"thinkers", g:"Also on this heading", lab:"Thinkers on this heading",
                       t:"Thinkers", n:th });
  const nq = gs4For(r.t).length;
  if (nq) items.push({ id:"pyq", g:"Also on this heading", lab:"Past questions on this heading",
                       t:"Past questions", n:nq });
  return items;
}

/* How often the paper has come back to a concept; cases are counted, not asked. */
function conceptFreq(title, c, byQ){
  const qs = c.qs.map(id => byQ[id]).filter(Boolean);
  if (!qs.length) return "";
  const yrs = qs.map(q => q.y).sort();
  const n = title === "Case Studies"
    ? (c.qs.length === 1 ? "1 case" : c.qs.length + " cases")
    : (c.qs.length === 1 ? "asked once" : "asked " + c.qs.length + " times");
  const a = yrs[0], b = yrs[yrs.length - 1];
  return n + (a === b ? " in " + a : ", " + a + " to " + b);
}

/* A note written as structured reading notes gets a definition box, numbered
   sections and a key takeaway; an older note is plain paragraphs. */
function conceptBody(c){
  const g = x => gloss2(x, gs4Skip(c.t));
  if (!c.secs) return c.d.map(x => `<p>${g(x)}</p>`).join("");
  const para = x => Array.isArray(x)
    ? `<ul>${x.map(li => `<li>${g(li)}</li>`).join("")}</ul>` : `<p>${g(x)}</p>`;
  return `
      <div class="gc-def" id="cp-def"><b class="gc-lab">${esc(c.dlab || "Definition")}</b>${c.d.map(para).join("")}</div>
      ${c.secs.map((sec, k) => `
      <section class="gc-sec" id="cp-s${k + 1}">
        <h6><span>${k + 1}</span>${esc(sec[0])}</h6>
        ${sec[1].map(para).join("")}
      </section>`).join("")}
      ${c.take ? `<div class="gc-take" id="cp-take"><b class="gc-lab">Key takeaway</b><p>${g(c.take)}</p></div>` : ""}`;
}

function conceptPane(title, i){
  const list = (typeof GS4_CONCEPTS !== "undefined" && GS4_CONCEPTS[title]) || [];
  const c = list[i];
  if (!c) return "";
  const byQ = {};
  if (typeof GS4_PYQ !== "undefined") GS4_PYQ.forEach(q => { byQ[q.id] = q; });
  const byHead = {};
  list.forEach(x => x.qs.forEach(id => { (byHead[id] = byHead[id] || []).push(x.t); }));
  const qs = c.qs.map(id => byQ[id]).filter(Boolean);
  const f = conceptFreq(title, c, byQ);
  const cases = title === "Case Studies";
  const strip = !c.secs ? "" : `
      <nav class="atl-jump gc-jump" aria-label="Parts of this note">
        <button data-apart="cp-def"><i>${ico("book")}</i>${esc(c.dlab || "Definition")}</button>${c.secs.map((sec, k) => `
        <button data-apart="cp-s${k + 1}" title="${esc(sec[0])}"><i>${k + 1}</i><span>${esc(sec[0])}</span></button>`).join("")}
        ${c.take ? `<button data-apart="cp-take"><i>${ico("bulb")}</i>Takeaway</button>` : ""}
        ${qs.length ? `<button data-apart="cp-qs"><i>${qs.length}</i>${cases ? "The cases" : "Where asked"}</button>` : ""}
      </nav>`;
  return `
    <article class="gc-item sm-pane">
      <h5><span class="gc-no">${i + 1}</span>${esc(c.t)}${f ? `<em>${esc(f)}</em>` : ""}</h5>
      ${strip}
      ${conceptBody(c)}
      ${qs.length ? `<div class="gc-qs" id="cp-qs"><b>${
          title === "Case Studies" ? "The cases" : "Where it was asked"}</b>${
          qs.map(q => gcQuestion(q, c.t, byHead)).join("")}</div>` : ""}
      ${c.src ? `<p class="gc-src">${esc(c.src)}</p>` : ""}
    </article>`;
}

function thinkerPane(r){
  const n = r.ids.filter(id => byId[id]).length;
  return `
    <div class="sm-pane">
      <div class="ans-head"><b>Thinkers on this heading</b>
        <span>${n} profile${n === 1 ? "" : "s"} mapped here &mdash; open one to read it</span></div>
      <div class="pills">
        ${r.ids.map(id => byId[id]
            ? `<button class="pill" data-open="${id}">${esc(byId[id].name)}</button>` : "").join("")}
      </div>
    </div>`;
}

function questionPane(title){
  const qs = gs4For(title);
  if (!qs.length) return "";
  const a = qs.filter(q => q.sec === "A"), b = qs.filter(q => q.sec === "B");
  const yrs = qs.map(q => q.y);
  const span = Math.min.apply(null, yrs) + " to " + Math.max.apply(null, yrs);
  return `
    <div class="sm-pane g4-list">
      <div class="ans-head"><b>Past questions</b>
        <span>${qs.length} from ${span} &middot; ${a.length} theory${
          b.length ? ", " + b.length + " case " + (b.length === 1 ? "study" : "studies") : ""}</span></div>
      ${title.indexOf("Moral Thinkers") === 0
        ? `<p class="g4-note">The paper sets one theme for moral thinkers, so this pool is shared with the other moral-thinkers heading.</p>` : ""}
      ${title === "Case Studies"
        ? `<p class="g4-note">Every Section B case from 2013 to 2025, gathered from all themes.</p>` : ""}
      ${a.length ? `<h6>Section A &middot; theory</h6><ul>${gs4Rows(a)}</ul>` : ""}
      ${b.length ? `<h6>Section B &middot; case studies</h6><ul>${gs4Rows(b)}</ul>` : ""}
    </div>`;
}

function sylRead(r, sel){
  if (sel === "method")   return caseMethodHTML(r.t);
  if (sel === "thinkers") return thinkerPane(r);
  if (sel === "pyq")      return questionPane(r.t);
  if (sel && sel.charAt(0) === "c") return conceptPane(r.t, +sel.slice(2));
  return `<div class="empty"><b>Nothing here yet</b>No notes written for this heading.</div>`;
}

function renderSyllabus(){
  const n = state.page | 0;
  if (!n || !SYLLABUS[n - 1]) { state.page = 0; return mapIndexHTML(mapSpec("syllabus")); }
  return mapPageHTML(mapSpec("syllabus"));
}

function render(){
  const main = document.getElementById("main");
  if (state.view === "home")          main.innerHTML = renderHome();
  else if (state.view.startsWith("essay:")) main.innerHTML = renderEssay(state.view.slice(6), state.mode);
  else if (state.view === "essays")   main.innerHTML = renderEssayList();
  else if (state.view === "pyq")      main.innerHTML = renderPYQ();
  else if (state.view === "gs4pyq")   main.innerHTML = renderGS4PYQ();
  else if (state.view === "atlas")    main.innerHTML = renderAtlas();
  else if (state.view.startsWith("work:")) {
    const rest = state.view.slice(5), c = rest.indexOf(":");
    const id = c < 0 ? rest : rest.slice(0, c), w = c < 0 ? "" : rest.slice(c + 1);
    main.innerHTML = (typeof WORKLAB !== "undefined" && WORKLAB[id])
      ? (w ? renderWork(id, w) : renderWorkThinker(id))
      : `<div class="empty"><b>Not found</b>No deep dive for this thinker yet.</div>`;
  }
  else if (state.view === "worklab")  main.innerHTML = renderWorkLabList();
  else if (state.view === "quotes")   main.innerHTML = renderQuotes();
  else if (state.view === "syllabus") main.innerHTML = renderSyllabus();
  else if (state.view === "themes")   main.innerHTML = renderThemes();
  else if (state.view === "search")   main.innerHTML = renderSearch();
  else                                main.innerHTML = renderGrid();
  glossHide(true);
  renderNav();
  markTopNav();
  applyPortraits(main);
  applyThinkerFilter();
  atlasApplyFilter();
  atlasWatch();
  vizTip(null);
  window.scrollTo({ top:0, behavior:"instant" });
}

/* The ~200-word introduction, collapsed by default so the page still opens clean.
   A thinker with no entry in profiles.js simply gets no toggle. */
function profileHTML(t){
  const pr = (typeof PROFILES !== "undefined") ? PROFILES[t.id] : null;
  if (!pr) return "";
  const hi = (typeof HINDI !== "undefined") ? HINDI[t.id] : null;
  const words = (pr.p.join(" ") + " " + pr.essence).trim().split(/\s+/).length;

  const body = (obj, lang, hidden) => `
    <div class="profile-body" data-lang="${lang}"${hidden ? " hidden" : ""}>
      ${obj.p.map(x => `<p>${esc(x)}</p>`).join("")}
      <p class="essence"><b>${lang === "hi" ? "संक्षेप में:" : "In essence:"}</b> ${esc(obj.essence)}</p>
    </div>`;

  return `
  <details class="profile">
    <summary>
      <span class="chev" aria-hidden="true">&#9656;</span>
      <span class="ptitle">Read full introduction</span>
      <span class="pmeta">${words} words</span>
    </summary>
    ${ hi ? `<div class="langbar" role="group" aria-label="Language">
        <button class="langbtn on" data-lang="en">English</button>
        <button class="langbtn" data-lang="hi">हिंदी</button>
      </div>` : "" }
    ${body(pr, "en", false)}
    ${hi ? body(hi, "hi", true) : ""}
  </details>`;
}

/* Major works, with a cover where a freely-licensed one exists. */
function worksHTML(t){
  const list = (typeof WORKS !== "undefined") ? WORKS[t.id] : null;
  if (!list || !list.length) return "";
  const lab = (typeof WORKLAB !== "undefined") ? WORKLAB[t.id] : null;
  const deep = lab ? new Set(lab.works.map(w => w.t)) : null;
  const cover = w => (typeof COVERS !== "undefined" && w.w) ? COVERS[w.w] : null;
  return `
  <section class="block">
    <div class="block-h"><span class="dot"></span>Major Works${
      lab ? `<span class="block-hint">${lab.works.length} of these are explored in depth &mdash; click one</span>` : ""}</div>
    <div class="works">
      ${list.map(w => {
        const src = cover(w);
        const on  = deep && deep.has(w.t);
        const body = `
          <div class="cover${src ? "" : " nocover"}">
            ${ src ? `<img src="${esc(src)}" alt="${esc(w.t)}" loading="lazy" decoding="async"
                       onerror="this.parentNode.classList.add('nocover');this.remove()">`
                   : "" }
            <span class="spine">${esc(w.t)}</span>
          </div>
          <div class="work-txt">
            ${on ? `<span class="radio" aria-hidden="true"></span>` : ""}
            <b>${esc(w.t)}</b>
            <span class="yr">${esc(w.y)}</span>
            <span class="note">${esc(w.n)}</span>
            ${on ? `<span class="work-go">Read this work in depth &rarr;</span>` : ""}
          </div>`;
        return on
          ? `<button class="work deep" data-work="${esc(t.id)}:${esc(w.t)}">${body}</button>`
          : `<div class="work">${body}</div>`;
      }).join("")}
    </div>
  </section>`;
}


/* Two practice questions, collapsed until the reader asks for them.
   Feedback appears the instant an option is picked — there is no submit step. */
function quizHTML(t){
  const qs = (typeof MCQS !== "undefined") ? MCQS[t.id] : null;
  if (!qs || !qs.length) return "";
  return `
  <details class="quiz">
    <summary>
      <span class="chev" aria-hidden="true">&#9656;</span>
      <span class="ptitle">Practice questions</span>
      <span class="pmeta">${qs.length} questions &middot; answer shown as you pick</span>
    </summary>
    <div class="quiz-body">
      ${qs.map((q, qi) => `
        <div class="q" data-a="${q.a}">
          <div class="q-head"><span class="q-no">Q${qi + 1}</span>${esc(q.q)}</div>
          <ol class="q-stmts">${q.s.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
          <div class="q-ask">Which of the statements given above ${q.s.length === 2 ? "is/are" : "is/are"} correct?</div>
          <div class="opts">
            ${q.o.map((o, oi) => `
              <button class="opt" data-i="${oi}">
                <span class="tick">${"abcd"[oi]}</span><span>${esc(o)}</span>
              </button>`).join("")}
          </div>
          <div class="why" hidden><b>Explanation.</b> ${esc(q.why)}</div>
        </div>`).join("")}
    </div>
  </details>`;
}

/* ================= DETAIL SHEET ================= */
function openSheet(id){
  const t = byId[id];
  if (!t) return;
  const cat = catById[t.cat];
  const sheet = document.getElementById("sheet");

  sheet.innerHTML = `
    <header class="sheet-head">
      <button class="close-btn" id="closeBtn" aria-label="Close">&times;</button>
      ${portraitHTML(t)}
      <div class="sheet-title">
        <h2>${esc(t.name)}</h2>
        <div class="sheet-meta">${esc(t.years)} &nbsp;&middot;&nbsp; ${esc(t.place)} &nbsp;&middot;&nbsp; ${esc(cat ? cat.name : "")}</div>
        <span class="sheet-school">${esc(t.school)}</span>
        <p class="sheet-gist">${esc(t.gist)}</p>
      </div>
    </header>

    <div class="sheet-body">
      ${profileHTML(t)}

      <section class="block">
        <div class="block-h"><span class="dot"></span>Core Ideas</div>
        ${t.ideas.map(i => { const { h, d } = splitIdea(i);
          return `<div class="idea">${h ? `<b>${esc(h)}</b>` : ""}<span>${esc(d)}</span></div>`; }).join("")}
      </section>

      <section class="block">
        <div class="block-h"><span class="dot"></span>Key Quotations</div>
        ${t.quotes.map(q => `<div class="quote">${esc(q)}</div>`).join("")}
      </section>

      ${worksHTML(t)}

      <details class="block fold">
        <summary class="block-h">
          <span class="dot"></span>Where to Use It
          <span class="foldhint">${t.essay.length} essay &middot; ${t.ethics.length} ethics</span>
          <span class="chev" aria-hidden="true">&#9656;</span>
        </summary>
        <div class="two-col">
          <div class="usebox">
            <h5>Essay Paper</h5>
            <ul class="uselist">${t.essay.map(e => `<li>${esc(e)}</li>`).join("")}</ul>
          </div>
          <div class="usebox">
            <h5>GS Paper IV — Ethics</h5>
            <ul class="uselist">${t.ethics.map(e => `<li>${esc(e)}</li>`).join("")}</ul>
          </div>
        </div>
        <a class="wiki-link" href="https://en.wikipedia.org/wiki/${encodeURIComponent(t.wiki)}"
           target="_blank" rel="noopener">Read more on Wikipedia &rarr;</a>
      </details>

      ${quizHTML(t)}
    </div>`;

  applyPortraits(sheet);
  const ov = document.getElementById("overlay");
  ov.classList.add("open");
  document.body.style.overflow = "hidden";
  ov.scrollTop = 0;
  location.hash = t.id;
}

function closeSheet(){
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
}

/* ================= PAST QUESTIONS =================
   Nine Mains papers classified by what the question asks you to do, most
   repeated theme first. The data and the reasoning behind each grouping live
   in pyq.js. Every question belongs to exactly one theme, so the ordering is
   a real frequency and not an impression. */
function renderPYQ(){
  if (typeof PYQ_THEMES === "undefined" || typeof PYQ_PAPERS === "undefined") return "";

  const Q = {};
  PYQ_PAPERS.forEach(p => ["a","b"].forEach(sec =>
    p[sec].forEach((q, i) => { Q[p.y + sec.toUpperCase() + (i + 1)] = { y:p.y, s:sec.toUpperCase(), n:i + 1, q }; })));

  const themeOf = {};
  PYQ_THEMES.forEach((t, i) => t.qs.forEach(k => { themeOf[k] = i; }));
  const ANS = pyqAnswer();

  const papers = PYQ_PAPERS.length;
  const total  = Object.keys(Q).length;
  const max    = PYQ_THEMES[0].qs.length;
  const span   = PYQ_PAPERS[PYQ_PAPERS.length - 1].y + " to " + PYQ_PAPERS[0].y;
  const chip   = k => `<span class="pyq-yr">${Q[k].y}<i>${Q[k].s}${Q[k].n}</i></span>`;

  const byTheme = PYQ_THEMES.map((t, i) => {
    const yrs = new Set(t.qs.map(k => Q[k].y)).size;
    return `
    <details class="fold pyqt">
      <summary>
        <span class="pyq-rank">${i + 1}</span>
        <span class="pyq-name">${esc(t.t)}</span>
        <span class="pyq-bar"><i style="width:${Math.round(t.qs.length / max * 100)}%"></i></span>
        <span class="foldhint">${t.qs.length} question${t.qs.length > 1 ? "s" : ""} &middot; ${yrs} of ${papers} papers</span>
        <span class="chev" aria-hidden="true">&#9656;</span>
      </summary>
      <div class="pyq-body">
        <p class="pyq-why">${esc(t.why)}</p>
        <ol class="pyq-list">${t.qs.map(k => {
          const a = ANS[k];
          return `
          <li>${chip(k)}<span class="pyq-q">${esc(Q[k].q)}</span>${
            a ? `<button class="pyq-para" data-para="${a.ti}:${a.pi}">&rarr; model paragraph ${a.pi + 1}: ${esc(a.h)}</button>` : ""}${
            (t.also && t.also[k]) ? `<em class="pyq-also">${esc(t.also[k])}</em>` : ""}</li>`;
        }).join("")}
        </ol>
        <div class="pyq-foot">
          ${t.link.length ? `<div class="pyq-row"><b>Model essay</b>${t.link.map(l =>
              `<button class="pyq-link" data-essay="${esc(l)}">${esc(l)}</button>`).join("")}</div>` : ""}
          <div class="pyq-row"><b>Write it with</b>${t.ids.map(id => byId[id]
              ? `<button class="pill" data-open="${id}">${esc(byId[id].name)}</button>` : "").join("")}</div>
        </div>
      </div>
    </details>`;
  }).join("");

  const byYear = PYQ_PAPERS.map(p => `
    <div class="pyq-paper">
      <h4>${p.y}<span>${p.a.length + p.b.length} questions</span></h4>
      ${["a","b"].map(sec => `
        <div class="pyq-sec">
          <b>Section ${sec.toUpperCase()}</b>
          <ol>${p[sec].map((q, i) => {
            const ti = themeOf[p.y + sec.toUpperCase() + (i + 1)];
            return `<li><span class="pyq-q">${esc(q)}</span>
              <button class="pyq-tag" data-jump="${ti}">${esc(PYQ_THEMES[ti].t)}</button></li>`;
          }).join("")}</ol>
        </div>`).join("")}
    </div>`).join("");

  return `
  <section class="pyq page" id="pyq">
    ${pyqSwitchHTML("pyq")}
    <div class="sec-head">
      <h3>Past Questions, Classified</h3>
      <p>Every essay set in the last ${papers} Mains papers &mdash; ${span}, ${total} questions &mdash;
         grouped by what the question actually asks you to do. Most repeated theme first, least
         repeated last. Each question sits in one group only, so the order is a count rather
         than an impression.</p>
    </div>

    ${ (typeof PYQ_NOTES !== "undefined") ? `<div class="pyq-notes">
      <h4>What ${papers} papers show</h4>
      <ul>${PYQ_NOTES.map(x => `<li>${rich(x)}</li>`).join("")}</ul>
    </div>` : "" }

    <div class="pyq-tabs">
      <button class="pyqtab on" data-pyq="theme">By theme</button>
      <button class="pyqtab" data-pyq="year">By year</button>
    </div>

    <div class="pyq-theme">${byTheme}</div>
    <div class="pyq-year" hidden>
      <p class="pyq-note">The papers as they were set. The label under each question is the group
         it belongs to &mdash; click it to jump there.</p>
      ${byYear}
    </div>
  </section>`;
}

/* ================= GS-IV PAST QUESTIONS =================
   Every GS Paper IV question, filed under the topic it tests, most asked topic
   first; and the same questions paper by paper. Built on the essay page's
   classes, so its tabs and the jump from a year back to a topic just work.
   A case study runs to a few hundred words, so it shows its opening and folds
   the rest: the list stays scannable and the whole case is one click away. */
function renderGS4PYQ(){
  if (typeof GS4_PYQ === "undefined" || typeof GS4_THEMES === "undefined") return "";

  const newest = (x, y) => y.y - x.y;
  const topics = GS4_THEMES
    .map(t => ({ t, qs:GS4_PYQ.filter(q => q.th === t.c).sort(newest) }))
    .filter(x => x.qs.length)
    .sort((x, y) => y.qs.length - x.qs.length);
  const rank = {}, name = {};
  topics.forEach((x, i) => { rank[x.t.c] = i; name[x.t.c] = x.t.t; });

  const years  = [...new Set(GS4_PYQ.map(q => q.y))].sort((a, b) => b - a);
  const papers = years.length;
  const span   = years[years.length - 1] + " to " + years[0];
  const max    = topics[0].qs.length;
  const nCases = GS4_PYQ.filter(q => q.sec === "B").length;
  const page   = h => SYLLABUS.findIndex(r => r.t === h) + 1;
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);

  const chip = q => `<span class="pyq-yr">${q.y}<i>${esc(q.sec)}</i></span>`;
  const text = q => {
    if (q.sec !== "B" || q.q.length <= 300) return `<span class="pyq-q">${esc(q.q)}</span>`;
    const cut = q.q.lastIndexOf(" ", 240);
    return `<details class="g4-case">
        <summary><span class="pyq-q g4-clip">${esc(q.q.slice(0, cut))}&hellip;</span><span class="g4-more"></span></summary>
        <span class="pyq-q">${esc(q.q)}</span>
      </details>`;
  };

  const byTopic = topics.map((x, i) => {
    const a = x.qs.filter(q => q.sec === "A"), b = x.qs.filter(q => q.sec === "B");
    const yrs = new Set(x.qs.map(q => q.y)).size;
    const heads = (x.t.maps || []).filter(h => page(h));
    return `
    <details class="fold pyqt">
      <summary>
        <span class="pyq-rank">${i + 1}</span>
        <span class="pyq-name">${esc(x.t.t)}</span>
        <span class="pyq-bar"><i style="width:${Math.round(x.qs.length / max * 100)}%"></i></span>
        <span class="foldhint">${plural(x.qs.length, "question", "questions")}${
          b.length ? " &middot; " + plural(b.length, "case", "cases") : ""} &middot; ${yrs} of ${papers} papers</span>
        <span class="chev" aria-hidden="true">&#9656;</span>
      </summary>
      <div class="pyq-body">
        ${a.length ? `<h5 class="g4-sub">Section A &middot; theory<span>${a.length}</span></h5>
        <ol class="pyq-list">${a.map(q => `<li>${chip(q)}${text(q)}</li>`).join("")}</ol>` : ""}
        ${b.length ? `<h5 class="g4-sub">Section B &middot; case studies<span>${b.length}</span></h5>
        <ol class="pyq-list">${b.map(q => `<li>${chip(q)}${text(q)}</li>`).join("")}</ol>` : ""}
        ${heads.length ? `<div class="pyq-foot">
          <div class="pyq-row"><b>Concept notes</b>${heads.map(h =>
            `<button class="pyq-link" data-to="syllabus|${page(h)}|">${esc(h)}</button>`).join("")}</div>
        </div>` : ""}
      </div>
    </details>`;
  }).join("");

  const byYear = years.map(y => {
    const qs = GS4_PYQ.filter(q => q.y === y);
    return `
    <div class="pyq-paper">
      <h4>${y}<span>${qs.length} questions</span></h4>
      ${["A", "B"].map(sec => {
        const list = qs.filter(q => q.sec === sec);
        return list.length ? `
        <div class="pyq-sec">
          <b>Section ${sec} &middot; ${sec === "A" ? "theory" : "case studies"}</b>
          <ol>${list.map(q => `<li>${text(q)}
            <button class="pyq-tag" data-jump="${rank[q.th]}">${esc(name[q.th] || "")}</button></li>`).join("")}</ol>
        </div>` : "";
      }).join("")}
    </div>`;
  }).join("");

  return `
  <section class="pyq page g4pyq" id="gs4pyq">
    ${pyqSwitchHTML("gs4pyq")}
    <div class="sec-head">
      <h3>GS-IV Past Questions, by Topic</h3>
      <p>All ${GS4_PYQ.length} questions from the ${papers} GS Paper IV papers, ${span}:
         ${GS4_PYQ.length - nCases} theory questions and ${nCases} case studies, filed under the
         topic each one tests. Most asked topic first. Open a topic to see its questions, newest
         first, and go from there to its concept notes.</p>
    </div>

    <div class="pyq-tabs">
      <button class="pyqtab on" data-pyq="theme">By topic</button>
      <button class="pyqtab" data-pyq="year">By year</button>
    </div>

    <div class="pyq-theme">${byTopic}</div>
    <div class="pyq-year" hidden>
      <p class="pyq-note">The papers as they were set. The label under each question is its topic
         &mdash; click it to jump there.</p>
      ${byYear}
    </div>
  </section>`;
}

/* ================= HUMAN THOUGHT ATLAS =================
   Read the way the two maps are read: the contents in the sidebar, arranged by
   section, essay theme, idea, tradition, form or name, and one entry in the
   reading column. Inside the essay theme map the same entries open beside the
   essays that use them. The data lives in atlas.js. */
const ATLAS_MODES = [["section", "Section"], ["essay", "Essay theme"], ["theme", "Idea"],
                     ["tradition", "Tradition"], ["form", "Form"], ["az", "A–Z"]];
const atlasFold = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
let atlasIds = null;
const atlasById = () => atlasIds || (atlasIds = Object.fromEntries(ATLAS.map(x => [x.id, x])));

function atlasGroups(list){
  const by = (obj, test) => Object.keys(obj).map(k => ({ t:obj[k], items:list.filter(x => test(x, k)) }));
  if (state.amode === "essay") {
    const tied = new Set(ESSAY_THEMES.flatMap(t => t.atlas || []));
    return ESSAY_THEMES.map(t => ({ t:t.t,
        items:(t.atlas || []).map(id => list.find(x => x.id === id)).filter(Boolean) }))
      .concat([{ t:"Not yet tied to a theme", items:list.filter(x => !tied.has(x.id)) }]);
  }
  if (state.amode === "theme")     return by(ATLAS_THEMES, (x, k) => x.th.includes(k));
  if (state.amode === "tradition") return by(ATLAS_TRADITIONS, (x, k) => x.tr === k);
  if (state.amode === "form")      return by(ATLAS_FORMS, (x, k) => x.fg === k);
  if (state.amode === "az") {
    const key = x => atlasFold(x.t.replace(/^(the|a|an)\s+/i, ""));
    const out = [];
    list.slice().sort((a, b) => key(a).localeCompare(key(b))).forEach(x => {
      const L = key(x).charAt(0).toUpperCase(), g = out[out.length - 1];
      if (g && g.t === L) g.items.push(x); else out.push({ t:L, items:[x] });
    });
    return out;
  }
  return ATLAS_SECTIONS.map(s => ({ t:s.t, items:list.filter(x => x.sec === s.id) }));
}

function atlasListHTML(sel){
  const q = atlasFold(state.aq.trim());
  const list = ATLAS.filter(x => !q || atlasFold([x.t, x.src, x.q, x.form].join(" ")).includes(q));
  const groups = atlasGroups(list).filter(g => g.items.length);
  if (!groups.length) return `<p class="atl-none">Nothing matches &ldquo;${esc(state.aq.trim())}&rdquo;.</p>`;
  return groups.map(g => `
    <div class="tree-g">${esc(g.t)}<span>${g.items.length}</span></div>
    ${g.items.map(x => `
      <button class="tree-item${x.id === sel ? " on" : ""}${isRead("atlas|0|" + x.id) ? " done" : ""}"
              data-sel="${x.id}"${x.id === sel ? ` aria-current="true"` : ""}>
        <span class="tree-mark" aria-hidden="true"></span><span class="tree-t">${esc(x.t)}</span>
      </button>`).join("")}`).join("");
}

function atlasRefreshList(top){
  const box = document.getElementById("atlasList");
  if (!box) return;
  box.innerHTML = atlasListHTML(atlasById()[state.sel] ? state.sel : "");
  if (top) document.getElementById("sidebar").scrollTop = 0;
}

/* The sidebar while the atlas is open: a search box, the ways to arrange the
   entries, and the entries themselves. */
function renderAtlasNav(){
  const x = atlasById()[state.sel];
  document.getElementById("viewNav").innerHTML = `
    <button class="nav-item nav-back" data-nav="views" title="All views">
      <span class="nav-ico">&larr;</span><span class="nav-name">All views</span>
    </button>
    <button class="nav-item nav-intro ${x ? "" : "active"}" data-to="atlas|0|" title="Every entry on one page">
      <span class="nav-ico">&#9776;</span><span class="nav-name">All ${ATLAS.length} entries</span>
    </button>
    <div class="atl-side">
      <input class="atl-search" id="atlasQ" type="search" placeholder="Search ${ATLAS.length} entries"
             autocomplete="off" aria-label="Search the atlas" value="${esc(state.aq)}">
      <div class="atl-modes" role="group" aria-label="Arrange the entries by">${ATLAS_MODES.map(m =>
        `<button class="atl-mode${state.amode === m[0] ? " on" : ""}" data-amode="${m[0]}"
                 aria-pressed="${state.amode === m[0]}">${m[1]}</button>`).join("")}</div>
    </div>
    <div class="tree atl-tree" id="atlasList">${atlasListHTML(x ? x.id : "")}</div>`;
  document.getElementById("catNav").innerHTML = "";
  const lab = document.getElementById("catLabel");
  if (lab) lab.hidden = true;
}

/* ---- How the atlas is read ----
   Every entry answers the same eight questions in the same order. The overview
   shows the order once, and each entry carries it as a strip of numbered parts,
   so a reader always knows what comes next and can jump to it. */
const ATLAS_PARTS = [
  ["story",    "book",    "The story",         "What happened, or the case to imagine"],
  ["question", "help",    "The question",      "The problem it forces you to face"],
  ["reveals",  "bulb",    "What it reveals",   "The insight, in plain words"],
  ["readings", "layers",  "Interpretations",   "Different ways to read it"],
  ["breaks",   "alert",   "Where it breaks",   "Its limits and its critics"],
  ["uses",     "globe",   "Where it shows up", "Cases from public life today"],
  ["exam",     "target",  "Use it in the exam","Where it fits in GS-IV and the Essay"],
  ["more",     "compass", "Go further",        "Related entries and reading"]
];

/* Four kinds of entry, told apart by colour everywhere they appear. */
const ATLAS_KINDS = {
  imagined: ["Imagined cases", "Thought experiments and paradoxes: situations built to test an idea"],
  story:    ["Stories", "Myths, parables, anecdotes, dialogues and literature"],
  finding:  ["Findings and models", "Experiments and models from the sciences"],
  idea:     ["Ideas and images", "Concepts and metaphors"]
};
const ATLAS_FORM_LOOK = {
  te:["imagined", "bulb"], paradox:["imagined", "infinity"],
  parable:["story", "nib"], myth:["story", "flame"], anecdote:["story", "file"],
  literary:["story", "book"], dialogue:["story", "quote"],
  experiment:["finding", "flask"], model:["finding", "layers"],
  concept:["idea", "compass"], metaphor:["idea", "link"]
};
const ATLAS_SECTION_ICON = {
  existence:"sun", knowledge:"book", morality:"scale", politics:"landmark", economics:"chart",
  science:"atom", psychology:"eye", strategy:"target", traditions:"globe", literature:"nib"
};
const atlasLook = x => ATLAS_FORM_LOOK[x.fg] || ["idea", "compass"];
const atlasKindHTML = x =>
  `<span class="akind fam-${atlasLook(x)[0]}">${ico(atlasLook(x)[1])}${esc(ATLAS_FORMS[x.fg] || x.form)}</span>`;
function atlasMinutes(e){
  const words = [].concat(e.setup, [e.question, e.reveals], e.readings.map(r => r[1]), e.breaks, e.uses)
    .join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

/* A card on the overview: what kind of entry it is, and the question it asks,
   which says more about what is inside than the title does. */
function atlasCardHTML(x){
  const e = ATLAS_ENTRIES[x.id];
  return `
      <button class="acard fam-${atlasLook(x)[0]}${isRead("atlas|0|" + x.id) ? " done" : ""}" data-sel="${x.id}">
        <span class="acard-top">${atlasKindHTML(x)}<i class="acard-tick" title="Read"></i></span>
        <b>${esc(x.t)}</b>
        <span class="acard-q">${esc(e.question)}</span>
        <span class="acard-foot">${esc(x.src)} &middot; ${atlasMinutes(e)} min</span>
      </button>`;
}

/* The overview: how an entry is built, then every entry as a card, grouped by
   whichever arrangement is chosen, with a tile per group to jump to it. */
function atlasIndexHTML(){
  const groups = atlasGroups(ATLAS).filter(g => g.items.length);
  const read = ATLAS.filter(x => isRead("atlas|0|" + x.id)).length;
  const secIcon = t => { const s = ATLAS_SECTIONS.find(y => y.t === t); return s ? ATLAS_SECTION_ICON[s.id] : ""; };
  return `
    <div class="rd atl-ix">
      <header class="rd-head">
        <div class="rd-crumbs">
          <button class="rd-toc" data-toc aria-label="Show the contents">&#9776;<span>Contents</span></button>
          <span>Essay Paper</span><span class="rd-sep" aria-hidden="true">/</span><span>Stories and models</span>
        </div>
        <h2 class="rd-title">Human Thought Atlas</h2>
        <p class="rd-sub">${ATLAS.length} stories, thought experiments, paradoxes and models to open an
           essay or support a GS-IV answer. Every entry answers the same eight questions in the same
           order, so you always know where to look.${read ? ` You have read ${read} of ${ATLAS.length}.` : ""}</p>
      </header>

      <section class="atl-guide" aria-label="How every entry is built">
        <h3 class="hb-t">How every entry is built</h3>
        <ol class="atl-steps">${ATLAS_PARTS.map((p, i) => `
          <li><span class="atl-step-ico">${ico(p[1])}</span>
              <b><i>${i + 1}</i>${esc(p[2])}</b><span>${esc(p[3])}</span></li>`).join("")}
        </ol>
      </section>

      <section class="atl-browse">
        <div class="atl-bar">
          <form class="hsearch" role="search" data-afilter>
            ${ico("search")}
            <input id="atlasIdxQ" type="search" autocomplete="off" value="${esc(state.aq)}"
                   aria-label="Find an entry" placeholder="Find an entry by name, idea or source">
          </form>
          <div class="t-regions atl-arrange" role="group" aria-label="Arrange the entries by">${ATLAS_MODES.map(m => `
            <button class="${state.amode === m[0] ? "on" : ""}" data-amode="${m[0]}"
                    aria-pressed="${state.amode === m[0]}">${m[1]}</button>`).join("")}
          </div>
        </div>
        <div class="atl-legend" aria-label="Kinds of entry">${Object.keys(ATLAS_KINDS).map(k => `
          <span class="akey fam-${k}" title="${esc(ATLAS_KINDS[k][1])}"><i></i>${esc(ATLAS_KINDS[k][0])}
            <em>${ATLAS.filter(x => atlasLook(x)[0] === k).length}</em></span>`).join("")}
        </div>
        <div class="atl-tiles">${groups.map((g, i) => {
          const done = g.items.filter(x => isRead("atlas|0|" + x.id)).length;
          const icon = state.amode === "section" ? secIcon(g.t)
            : { essay:"nib", theme:"bulb", tradition:"globe", form:"layers", az:"book" }[state.amode] || "book";
          return `
          <button class="atile" data-jumpto="ag-${i}">
            ${ico(icon)}<b>${esc(g.t)}</b>
            <span>${plural(g.items.length, "entry", "entries")}${done ? " &middot; " + done + " read" : ""}</span>
            <i class="atile-bar"><i style="width:${Math.round(done / g.items.length * 100)}%"></i></i>
          </button>`; }).join("")}
        </div>
      </section>

      ${groups.map((g, i) => `
      <section class="hblock atl-group" id="ag-${i}">
        <div class="hb-head"><h3 class="hb-t">${esc(g.t)} <small>${g.items.length}</small></h3></div>
        <div class="acards">${g.items.map(atlasCardHTML).join("")}</div>
      </section>`).join("")}
      <div class="empty" id="atlasNone" hidden><b>No entry matches</b>Try one word, or part of a name.</div>
    </div>`;
}

/* Filtering the overview in place keeps the box in focus while the reader types. */
let atlasHay = null;
function atlasApplyFilter(){
  const ix = document.querySelector(".atl-ix");
  if (!ix) return;
  if (!atlasHay) atlasHay = Object.fromEntries(ATLAS.map(x =>
    [x.id, atlasFold([x.t, x.src, x.q, x.form, ATLAS_ENTRIES[x.id].question].join(" "))]));
  const q = atlasFold(state.aq.trim());
  let shown = 0;
  ix.querySelectorAll(".atl-group").forEach((g, i) => {
    let n = 0;
    g.querySelectorAll(".acard").forEach(c => {
      const ok = !q || atlasHay[c.dataset.sel].includes(q);
      c.hidden = !ok;
      if (ok) n++;
    });
    g.hidden = !n;
    const tile = ix.querySelector(`[data-jumpto="ag-${i}"]`);
    if (tile) tile.hidden = !n;
    shown += n;
  });
  const none = document.getElementById("atlasNone");
  if (none) none.hidden = shown > 0;
}

/* Where an entry earns its place in the Essay paper on this site: the themes it
   suits, each opening it inside the theme map, and the model essays that use it. */
function atlasEssayHTML(id){
  const themes = ESSAY_THEMES.map((t, i) => ({ t, i })).filter(o => (o.t.atlas || []).includes(id));
  const essays = (typeof ESSAYS === "undefined") ? []
    : Object.keys(ESSAYS).filter(k => (ESSAYS[k].atlas || []).includes(id));
  const home = k => ESSAY_THEMES.findIndex(t => (t.essays || []).includes(k)) + 1;
  return (themes.length ? `
        <div class="aexam-row"><b>Essay themes</b><span class="pills">${themes.map(o =>
          `<button class="pill" data-to="themes|${o.i + 1}|a:${id}">${esc(o.t.t)}</button>`).join("")}</span></div>` : "")
    + (essays.length ? `
        <div class="aexam-row"><b>Model essays</b><span class="pills">${essays.map(k =>
          `<button class="pill" data-to="themes|${home(k)}|e:${esc(k)}">${esc(ESSAYS[k].et || ESSAYS[k].t)}</button>`).join("")}</span></div>` : "");
}

/* One entry. Inside a theme (theme given) an entry the theme lists opens beside
   it and anything else opens in the atlas; in the atlas itself everything opens
   in place and the entries can be paged through in order. */
function atlasEntryHTML(x, theme){
  const e = ATLAS_ENTRIES[x.id], ix = atlasById();
  const sec = ATLAS_SECTIONS.find(s => s.id === x.sec);
  const open = id => !theme ? `data-sel="${id}"`
    : (theme.atlas || []).includes(id) ? `data-sel="a:${id}"` : `data-to="atlas|0|${id}"`;
  const uses = e.uses.slice(0, -1), examText = e.uses[e.uses.length - 1].replace(/^Exam use:\s*/, "");
  const examRows = examText.split(/\.\s+(?=In )/).map(s => {
    const m = s.match(/^In (GS-[IVX]+|the Essay paper)[^,]*, (use it .*?)\.?$/);
    return m ? [m[1] === "the Essay paper" ? "Essay" : m[1], m[2].charAt(0).toUpperCase() + m[2].slice(1) + "."] : null;
  });
  const lead = u => {
    const m = u.match(/^([^:]{3,48}):\s(.*)$/);
    return m ? `<div class="ause"><b>${esc(m[1])}</b><p>${esc(m[2])}</p></div>` : `<div class="ause"><p>${esc(u)}</p></div>`;
  };
  const ref = r => `<li>${r[2]
    ? `<a href="${esc(r[2])}" target="_blank" rel="noopener">${esc(r[0])}</a>` : esc(r[0])}${
    r[1] ? `<span>${esc(r[1])}</span>` : ""}</li>`;
  const head = n => {
    const p = ATLAS_PARTS[n];
    return `<h6 class="apart-h"><span class="apart-n">${n + 1}</span>${ico(p[1])}${esc(p[2])}</h6>`;
  };
  let pager = "";
  if (!theme) {
    const i = ATLAS.indexOf(x), prev = ATLAS[i - 1], next = ATLAS[i + 1];
    const move = (y, fwd) => y
      ? `<button class="mv${fwd ? " next" : ""}" data-sel="${y.id}"><em>${fwd ? "Next" : "Previous"}</em><span>${esc(y.t)}</span></button>`
      : `<span class="mv-end">${fwd ? "The last entry" : "The first entry"}</span>`;
    pager = `<nav class="sm-move" aria-label="Previous and next entry">${move(prev, false)}${move(next, true)}</nav>`;
  }
  return `
    <article class="sm-pane atl-entry">
      <header class="atl-top">
        <p class="atl-eyebrow">${theme ? "From the Thought Atlas &middot; " : ""}${esc(sec ? sec.t : "")}</p>
        <h5>${esc(x.t)}</h5>
        <div class="atl-top-row">
          ${atlasKindHTML(x)}
          <span class="atl-time">${plural(atlasMinutes(e), "minute", "minutes")} to read</span>
          ${x.th.map(k => `<span class="atl-theme">${esc(ATLAS_THEMES[k])}</span>`).join("")}
        </div>
        <dl class="atl-meta">
          <dt>About</dt><dd>${esc(x.q)}</dd>
          <dt>Source</dt><dd>${esc(e.source)}</dd>
          <dt>Period</dt><dd>${esc(e.period)}</dd>
          <dt>Tradition</dt><dd>${esc(e.tradition)}</dd>
          <dt>Type</dt><dd>${esc(e.type)}</dd>
        </dl>
      </header>

      <nav class="atl-jump" aria-label="Parts of this entry">${ATLAS_PARTS.map((p, i) => `
        <button data-apart="ap-${p[0]}"><i>${i + 1}</i>${esc(p[2])}</button>`).join("")}
      </nav>

      <section class="apart ap-story" id="ap-story">${head(0)}
        ${e.setup.map(p => `<p>${esc(p)}</p>`).join("")}</section>

      <section class="apart ap-question" id="ap-question">${head(1)}
        <p class="atl-q">${esc(e.question)}</p></section>

      <section class="apart ap-reveals" id="ap-reveals">${head(2)}
        <div class="abox"><p>${esc(e.reveals)}</p></div></section>

      <section class="apart" id="ap-readings">${head(3)}
        <div class="areadings">${e.readings.map(r =>
          `<div class="areading"><b>${esc(r[0])}</b><p>${esc(r[1])}</p></div>`).join("")}</div></section>

      <section class="apart" id="ap-breaks">${head(4)}
        <ul class="abreaks">${e.breaks.map(b => `<li>${esc(b)}</li>`).join("")}</ul></section>

      <section class="apart" id="ap-uses">${head(5)}
        <div class="auses">${uses.map(lead).join("")}</div></section>

      <section class="apart" id="ap-exam">${head(6)}
        <div class="aexam">${examRows.every(Boolean)
          ? examRows.map(r => `<div class="aexam-row"><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`).join("")
          : `<div class="aexam-row"><span>${esc(examText)}</span></div>`}
          ${atlasEssayHTML(x.id)}
        </div></section>

      <section class="apart" id="ap-more">${head(7)}
        <div class="arelated">${e.related.filter(id => ix[id]).map(id => `
          <button class="arel" ${open(id)}>${atlasKindHTML(ix[id])}<b>${esc(ix[id].t)}</b><span>${esc(ix[id].q)}</span></button>`).join("")}
        </div>
        <h6 class="apart-sub">Primary source and reading</h6>
        <ol class="atl-refs">${e.reading.map(ref).join("")}</ol></section>
      ${pager}
    </article>`;
}

function renderAtlas(){
  if (typeof ATLAS === "undefined" || typeof ATLAS_ENTRIES === "undefined")
    return `<div class="empty"><b>Not available</b>The atlas could not be loaded.</div>`;
  const x = atlasById()[state.sel];
  if (!x) return atlasIndexHTML();
  const sec = ATLAS_SECTIONS.find(s => s.id === x.sec);
  markRead("atlas|0|" + x.id, { t:x.t, h:sec ? sec.t : "", where:"Human Thought Atlas" });
  return `
    <div class="rd">
      <div class="rd-crumbs atl-crumbs">
        <button class="rd-toc" data-toc aria-label="Show the contents">&#9776;<span>Contents</span></button>
        <button class="rd-up" data-to="atlas|0|">Human Thought Atlas</button>
        <span class="rd-sep" aria-hidden="true">/</span>
        <span>Entry ${ATLAS.indexOf(x) + 1} of ${ATLAS.length}</span>
      </div>
      ${atlasEntryHTML(x, null)}
    </div>`;
}

/* The numbered strip, on an atlas entry or a concept note, marks the part
   being read. */
let atlasObs = null;
function atlasWatch(){
  if (atlasObs) { atlasObs.disconnect(); atlasObs = null; }
  const nav = document.querySelector(".atl-jump");
  if (!nav || !("IntersectionObserver" in window)) return;
  const btns = [...nav.querySelectorAll("[data-apart]")];
  atlasObs = new IntersectionObserver(list => list.forEach(en => {
    if (en.isIntersecting) btns.forEach(b => b.classList.toggle("on", b.dataset.apart === en.target.id));
  }), { rootMargin:"-140px 0px -55% 0px" });
  btns.map(b => document.getElementById(b.dataset.apart)).filter(Boolean).forEach(el => atlasObs.observe(el));
}

/* ================= EVENTS ================= */
document.addEventListener("click", e => {
  if (!e.target.closest("#topNav")) closeTopMenus(false);
  if (!e.target.closest("#searchBar, #searchBtn")) closeSearch(false);
  // a tap anywhere outside the open drawer puts it away
  const side = document.getElementById("sidebar");
  if (side.classList.contains("open") && !e.target.closest("#sidebar, #menuBtn, [data-toc]"))
    side.classList.remove("open");

  if (e.target.closest("[data-sidesearch]")) {
    document.getElementById("sidebar").classList.remove("open");
    openSearch();
    return;
  }
  const sf = e.target.closest("[data-sidefold]");
  if (sf) {
    const key = sf.dataset.sidefold;
    sideOpen = sf.getAttribute("aria-expanded") === "true" ? "none" : key;
    renderNav();
    return;
  }
  const find = e.target.closest("[data-find]");
  if (find) { runSearch(find.dataset.find); return; }
  const more = e.target.closest("[data-more]");
  if (more) {
    state.more = Object.assign({}, state.more, { [more.dataset.more]:true });
    const y = window.scrollY;
    render();
    window.scrollTo({ top:y, behavior:"instant" });
    return;
  }

  const to = e.target.closest("[data-to]");
  if (to) {
    // the name is a real link: a modified click still opens a new tab
    if (to.tagName === "A" && (e.metaKey || e.ctrlKey || e.shiftKey || e.button)) return;
    e.preventDefault();
    const tn = to.classList.contains("tn-btn") ? to.closest(".tn") : null;
    // with no hover to open a menu, the first tap on a section opens its menu
    if (tn && tn.querySelector(".dd") && !window.matchMedia("(hover:hover)").matches) {
      const show = !tn.classList.contains("open");
      closeTopMenus(false);
      tn.classList.toggle("open", show);
      to.setAttribute("aria-expanded", String(show));
      return;
    }
    const bits = to.dataset.to.split("|");
    state.view = bits[0];
    state.page = +bits[1] || 0;
    state.sel = bits[2] || null;
    state.nav = ["syllabus", "themes", "atlas"].includes(bits[0]) ? bits[0] : "views";
    state.fold = false;
    closeTopMenus(true);
    closeSheet();
    document.getElementById("sidebar").classList.remove("open");
    render();
    // a keyboard choice lands on the page it opened, not back at the top of the tab order
    if (e.detail === 0) document.getElementById("main").focus({ preventScroll:true });
    return;
  }

  const gl = e.target.closest(".gloss");
  if (gl) {
    if (glossPinned === gl) glossHide(true);
    else { glossPinned = gl; glossShow(gl, true); }
    return;
  }
  if (!e.target.closest("#glossbox")) glossHide(true);

  const g4 = e.target.closest("[data-g4]");
  if (g4) {
    const list = document.getElementById("g4-" + g4.dataset.g4);
    const show = list.hidden;
    list.hidden = !show;
    g4.setAttribute("aria-expanded", show ? "true" : "false");
    g4.classList.toggle("on", show);
    return;
  }

  const oo = e.target.closest("[data-oo]");
  if (oo) {
    const panel = document.getElementById(oo.dataset.oo);
    const show = panel.hidden;
    panel.hidden = !show;
    oo.setAttribute("aria-expanded", show ? "true" : "false");
    oo.classList.toggle("on", show);
    return;
  }

  const con = e.target.closest("[data-concept]");
  if (con) {
    const site = conceptSite(con.dataset.concept);
    if (site) {
      glossHide(true);
      state.view = "syllabus"; state.nav = "syllabus";
      state.page = site.h + 1; state.sel = "c:" + site.c; state.fold = false;
      render();
    }
    return;
  }

  const open = e.target.closest("[data-open]");
  if (open) { glossHide(true); openSheet(open.dataset.open); return; }

  const wk = e.target.closest("[data-work]");
  if (wk) {
    const i = wk.dataset.work.indexOf(":");
    const id = wk.dataset.work.slice(0, i), title = wk.dataset.work.slice(i + 1);
    closeSheet();
    state.view = "work:" + id + (title ? ":" + title : "");
    render();
    return;
  }

  const tab = e.target.closest(".pyqtab");
  if (tab) {
    const box = tab.closest(".pyq");
    box.querySelectorAll(".pyqtab").forEach(b => b.classList.toggle("on", b === tab));
    box.querySelector(".pyq-theme").hidden = tab.dataset.pyq !== "theme";
    box.querySelector(".pyq-year").hidden  = tab.dataset.pyq !== "year";
    return;
  }

  const para = e.target.closest("[data-para]");
  if (para) {
    const [ti, pi] = para.dataset.para.split(":").map(Number);
    state.view = "themes"; state.nav = "themes";
    state.page = ti + 1; state.sel = "p:" + pi; state.fold = false;
    render();
    return;
  }

  const jump = e.target.closest("[data-jump]");
  if (jump) {
    const box = jump.closest(".pyq");
    box.querySelector('.pyqtab[data-pyq="theme"]').click();
    const d = box.querySelectorAll("details.pyqt")[+jump.dataset.jump];
    if (d) { d.open = true; d.scrollIntoView({ behavior:"smooth", block:"start" }); }
    return;
  }

  const mb = e.target.closest(".modebtn");
  if (mb) { state.mode = mb.dataset.mode; state.view = "essay:" + mb.dataset.topic; render(); return; }

  const es = e.target.closest("[data-essay]");
  if (es) { state.view = "essay:" + es.dataset.essay; render(); return; }

  const oa = e.target.closest("[data-open-at]");
  if (oa) {
    const bits = oa.dataset.openAt.split("|");
    state.page = +bits[0];
    state.sel = bits[1] || null;
    state.fold = false;
    render();
    return;
  }

  const go = e.target.closest("[data-go]");
  if (go) {
    const x = mapWalk()[+go.dataset.go];
    if (x) { state.page = x.p; state.sel = x.id; state.fold = false; render(); }
    return;
  }

  // on a narrow screen the contents live in the drawer; this opens it
  if (e.target.closest("[data-toc]")) {
    document.getElementById("sidebar").classList.add("open");
    return;
  }

  const am = e.target.closest("[data-amode]");
  if (am) {
    state.amode = am.dataset.amode;
    document.querySelectorAll(".atl-mode").forEach(b => {
      b.classList.toggle("on", b === am);
      b.setAttribute("aria-pressed", String(b === am));
    });
    atlasRefreshList(true);
    if (document.querySelector(".atl-ix")) render();   // the overview is arranged the same way
    return;
  }

  // jump to a part of an entry, or to a group on the overview
  const jp = e.target.closest("[data-apart], [data-jumpto]");
  if (jp) {
    const el = document.getElementById(jp.dataset.apart || jp.dataset.jumpto);
    if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
    if (jp.dataset.apart) jp.parentNode.querySelectorAll("[data-apart]").forEach(b => b.classList.toggle("on", b === jp));
    return;
  }

  const sel = e.target.closest("[data-sel]");
  if (sel) {
    state.sel = sel.dataset.sel || null;
    document.getElementById("sidebar").classList.remove("open");
    render();
    return;
  }

  const nb = e.target.closest("[data-nav]");
  if (nb) { state.nav = nb.dataset.nav; renderNav(); return; }

  const pg = e.target.closest("[data-page]");
  if (pg) {
    const to = +pg.dataset.page;
    const inMap = state.view === "syllabus" || state.view === "themes";
    const inPanel = !!pg.closest("#viewNav");
    // the heading you are on opens and closes its own contents
    if (inMap && to > 0 && to === state.page && inPanel) {
      state.fold = !state.fold;
      renderNav();
      return;
    }
    if (state.view !== "syllabus") state.view = "themes";   // both maps page the same way
    state.page = to;
    state.sel = null;          // a new heading opens at its first item
    state.fold = false;        // and shows what is in it
    // in the drawer, a heading opens to show its contents rather than closing it
    if (!(inPanel && to > 0)) document.getElementById("sidebar").classList.remove("open");
    render();
    return;
  }

  const nav = e.target.closest("[data-view]");
  if (nav) {
    state.view = nav.dataset.view;
    const maps = { syllabus:1, themes:1, atlas:1 };
    state.page = 0;                       // both maps open on their index
    state.nav = maps[state.view] ? state.view : "views";
    state.sel = null; state.fold = false;
    document.getElementById("sidebar").classList.remove("open");
    render();
    return;
  }

  const opt = e.target.closest(".opt");
  if (opt) {
    const q = opt.closest(".q");
    if (!q.classList.contains("done")) {          // first answer stands
      const correct = +q.dataset.a;
      q.classList.add("done");
      q.querySelectorAll(".opt").forEach(b => {
        const i = +b.dataset.i;
        if (i === correct) b.classList.add("right");
        else if (b === opt) b.classList.add("wrong");
        else b.classList.add("muted");
      });
      q.querySelector(".why").hidden = false;
    }
    e.preventDefault();
    return;
  }

  const lang = e.target.closest(".langbtn");
  if (lang) {
    const box = lang.closest(".profile");
    box.querySelectorAll(".langbtn").forEach(b => b.classList.toggle("on", b === lang));
    box.querySelectorAll(".profile-body").forEach(b =>
      b.hidden = (b.dataset.lang !== lang.dataset.lang));
    e.preventDefault();
    return;
  }

  const chip = e.target.closest("[data-tag]");
  if (chip) {
    if (state.view === "essay" || state.view === "ethics") state.view = "all";
    state.tag = chip.dataset.tag;
    render();
    return;
  }

  if (e.target.id === "closeBtn" || e.target.id === "overlay") closeSheet();
});

document.getElementById("search").addEventListener("input", e => {
  state.q = e.target.value;
  state.more = {};
  if (state.view !== "quotes") {
    if (state.q.trim()) { state.view = "search"; state.nav = "views"; }
    else if (state.view === "search") state.view = "home";
  }
  render();
});
/* the search boxes on the front page and the results page */
document.addEventListener("submit", e => {
  if (e.target.closest("[data-tfilter], [data-afilter]")) { e.preventDefault(); return; }
  const f = e.target.closest("[data-search]");
  if (!f) return;
  e.preventDefault();
  runSearch(f.elements.q.value);
});

/* The panel collapses to a rail. The control lives in the panel, where a reader
   looks for it; the hamburger does the same thing, and opens the drawer on a
   narrow screen where there is no panel to collapse. */
function setRail(off){
  if (off) document.documentElement.dataset.side = "off";
  else delete document.documentElement.dataset.side;
  const b = document.getElementById("railBtn");
  if (b) {
    b.setAttribute("aria-expanded", off ? "false" : "true");
    b.title = off ? "Expand the panel" : "Collapse the panel";
    b.querySelector("i").innerHTML = off ? "&raquo;" : "&laquo;";
  }
  document.getElementById("menuBtn").setAttribute("aria-expanded", off ? "false" : "true");
  try { localStorage.setItem("upsc_thinkers_side", off ? "off" : "on"); } catch (e) {}
}
document.getElementById("railBtn").addEventListener("click", () =>
  setRail(document.documentElement.dataset.side !== "off"));
document.getElementById("menuBtn").addEventListener("click", () => {
  if (window.matchMedia("(max-width:880px)").matches) {
    document.getElementById("sidebar").classList.toggle("open");
    return;
  }
  setRail(document.documentElement.dataset.side !== "off");
});
try {
  if (localStorage.getItem("upsc_thinkers_side") === "off") setRail(true);
} catch (e) {}

document.getElementById("searchBtn").addEventListener("click", () => {
  if (document.getElementById("searchBar").classList.contains("open")) closeSearch(true);
  else openSearch();
});
(function(){
  const nav = document.getElementById("topNav");
  // a choice made inside the band keeps its menu shut until the pointer leaves;
  // arriving at the band from outside is always a fresh start
  nav.addEventListener("mouseleave", () => nav.classList.remove("shut"));
  nav.addEventListener("mouseenter", () => nav.classList.remove("shut"));
  nav.addEventListener("focusin", () => nav.classList.remove("shut"));
})();

document.getElementById("themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  document.getElementById("themeBtn").innerHTML = next === "dark" ? "&#9788;" : "&#9789;";
  try{ localStorage.setItem("upsc_thinkers_theme", next); }catch(e){}
});

/* Hover opens the card, a short grace period lets the pointer reach it, and a
   click pins it so the "Full page" button can be used. */
let glossTimer = null;
function glossHideSoon(){
  clearTimeout(glossTimer);
  glossTimer = setTimeout(() => glossHide(), 180);
}
document.addEventListener("mouseover", e => {
  if (e.target.closest("#glossbox")) { clearTimeout(glossTimer); return; }
  const gl = e.target.closest(".gloss");
  if (!gl) return;
  clearTimeout(glossTimer);
  if (!glossPinned) glossShow(gl, false);
});
document.addEventListener("mouseout", e => {
  if (glossPinned) return;
  if (e.target.closest(".gloss") || e.target.closest("#glossbox")) glossHideSoon();
});
document.addEventListener("focusin", e => {
  const gl = e.target.closest(".gloss");
  if (gl) { clearTimeout(glossTimer); glossShow(gl, false); }
});
document.addEventListener("focusout", e => {
  if (e.target.closest(".gloss") && !glossPinned) glossHideSoon();
});
window.addEventListener("resize", () => glossHide(true));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { glossHide(true); closeSheet(); closeTopMenus(false); closeSearch(true); }
  const inMap = state.view === "themes" || state.view === "syllabus";
  if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && inMap
      && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)
      && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const walk = mapWalk(), n = state.page | 0, back = e.key === "ArrowLeft";
    let x = null;
    if (!n) x = back ? null : walk[0];
    else {
      const spec = mapSpec(state.view);
      x = walk[mapWhere(walk, n, mapSel(spec.items(spec.list[n - 1]))) + (back ? -1 : 1)];
    }
    if (x) { state.page = x.p; state.sel = x.id; state.fold = false; render(); }
  }
  if ((e.ctrlKey || e.metaKey) && !e.altKey && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openSearch();
  }
  if (e.key === "/" && document.activeElement.id !== "search"
      && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
    e.preventDefault();
    openSearch();
  }
});

/* the syllabus chart's tooltip */
document.addEventListener("pointermove", e => {
  const row = e.target.closest && e.target.closest(".schart-row");
  vizTip(row, e.clientX, e.clientY);
});
document.addEventListener("focusin", e => {
  const row = e.target.closest && e.target.closest(".schart-row");
  if (!row) return;
  const r = row.getBoundingClientRect();
  vizTip(row, r.left + r.width / 2, r.top);
});
document.addEventListener("focusout", e => {
  if (e.target.closest && e.target.closest(".schart-row")) vizTip(null);
});

/* the thinkers page filters its cards in place, so the box keeps focus */
document.addEventListener("input", e => {
  if (e.target.id !== "thinkerQ") return;
  state.tq = e.target.value;
  applyThinkerFilter();
});

/* the atlas search filters its contents in place, so the box keeps focus */
document.addEventListener("input", e => {
  if (e.target.id !== "atlasQ" && e.target.id !== "atlasIdxQ") return;
  state.aq = e.target.value;
  const other = document.getElementById(e.target.id === "atlasQ" ? "atlasIdxQ" : "atlasQ");
  if (other) other.value = state.aq;
  atlasRefreshList(e.target.id === "atlasQ");
  atlasApplyFilter();
});

/* ================= BOOT ================= */
(function init(){
  try{
    const saved = localStorage.getItem("upsc_thinkers_theme");
    if (saved) {
      document.documentElement.dataset.theme = saved;
      document.getElementById("themeBtn").innerHTML = saved === "dark" ? "&#9788;" : "&#9789;";
    }
  }catch(e){}

  loadCache();
  renderTopNav();
  render();
  fetchPortraits();

  const hash = location.hash.slice(1);
  if (hash && byId[hash]) openSheet(hash);
})();
