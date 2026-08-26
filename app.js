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
  { t:"Case Studies", s:"Frameworks most useful when structuring a case-study answer",
    ids:["kant","bentham","mill","rawls","gilligan","kohlberg","weber","simon","gandhi","arendt"] }
];

/* ---- Recurring essay themes -> thinker ids ---- */
/* The nine themes the Essay paper actually keeps asking, derived from the
   2018-2026 papers in pyq.js. Each carries five model paragraphs (answers.js)
   that split it into its five recurring sub-themes, and the full model essays
   (essays.js) written for it. */
const ESSAY_THEMES = [
  { t:"Ends, Means and the Ethics of Decision",
    s:"How to decide, when to act, whether the means matter, and the gap between ideal and real",
    ids:["gandhi","machiavelli","kautilya","kant","bentham","mill","simon","barnard","goleman","weber","arendt","drucker","aristotle","socrates","ambedkar","periyar","thoreau","rawls","nehru","hegel","aurobindo"],
    essays:["The file that nobody moved","A standard nobody meets is still a standard"] },
  { t:"Knowledge, Education and the Doubting Mind",
    s:"What knowing is for, and why the educated mind ends with more questions",
    ids:["socrates","plato","aristotle","tagore","freire","nussbaum","vivekananda","kalam","mill","einstein","habermas","ambedkar","gandhi"],
    essays:["The certificate and the question","The romantic man was never the enemy"] },
  { t:"Character, Adversity and the Test of Power",
    s:"What pressure reveals — failure, risk, time and authority as examinations",
    ids:["marcus-aurelius","epictetus","nietzsche","camus","mandela","malala","aristotle","kalam","gandhi","arendt","thoreau","laozi","buddha","machiavelli","bose","vivekananda","ambedkar","hegel","tagore","weber"],
    essays:["We examine for endurance and promote for compliance","The straight line is the least likely path"] },
  { t:"The Good Life: Contentment, Simplicity and Being Humane",
    s:"What a life should aim at, argued against the economy of accumulation",
    ids:["epicurus","buddha","mahavira","laozi","gandhi","thiruvalluvar","gibran","marcus-aurelius","epictetus","aristotle","camus","schumacher","amartya-sen","kabir","guru-nanak","vivekananda","mother-teresa","gilligan","deendayal","kohlberg"],
    essays:["The country is richer. Ask it whether it is better","The inner life is not a private matter"] },
  { t:"Culture, Memory and the Making of Meaning",
    s:"How a society carries its past and makes sense — art, history, language, perception",
    ids:["tagore","gibran","tolstoy","plato","aurobindo","gandhi","nehru","burke","azad","marx","hegel","orwell","socrates","camus","nietzsche","laozi","kabir","kant","shankara","sartre"],
    essays:["The argument a country has with itself","The most confident account is rarely the true one"] },
  { t:"Justice, Equality and the Excluded",
    s:"What a society owes its weakest members, and why patriarchy is a structure not a sentiment",
    ids:["rawls","ambedkar","amartya-sen","nozick","deendayal","gandhi","mother-teresa","lohia","nussbaum","jyotirao-phule","savitribai-phule","beauvoir","wollstonecraft","pandita-ramabai","periyar","gilligan","mill","bentham","tocqueville"],
    essays:["A country should not need this much kindness","Educated, and still not counted","Somebody always pays for the public good"] },
  { t:"Democracy, the State and India in the World",
    s:"Leadership, media, plural identity, borders and the ethics of asymmetric power",
    ids:["ambedkar","tocqueville","habermas","montesquieu","nehru","kautilya","patel","orwell","gandhi","mandela","tagore","azad","aurobindo","mill","rousseau","jp-narayan","machiavelli","barnard"],
    essays:["Between two elections","Autonomy is a capability, not a posture"] },
  { t:"Nature, Development and Civilisation",
    s:"Whether nature is a resource, a teacher or a moral limit — and what growth is for",
    ids:["schumacher","ostrom","gandhi","thoreau","mahavira","burke","deendayal","amartya-sen","tagore","aurobindo","gibran","nussbaum","kalam","einstein"],
    essays:["The bill arrives in a different currency","We stopped being taught by anything we did not make"] },
  { t:"Technology and the Modern Self",
    s:"What a tool does to the person, the worker and the state that uses it",
    ids:["foucault","orwell","einstein","schumacher","habermas","drucker","bentham","maslow","allport","festinger","marx","amartya-sen","mcgregor","buddha","marcus-aurelius","kautilya","nehru","ambedkar"],
    essays:["We built the rails without asking where they go","The jobs question is the wrong question"] }
];

/* ---- State ---- */
const state = { view:"all", q:"", tag:"", mode:"thinker" };
const byId = Object.fromEntries(THINKERS.map(t => [t.id, t]));
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

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
const tagsHTML = t => (t.tag || []).map(x =>
  `<span class="tag ${x.toLowerCase()}">${x}</span>`).join("");

/* ================= NAVIGATION ================= */
function renderNav(){
  const views = [
    { id:"all",      ico:"\u{1F4DA}", name:"All Thinkers",       n:THINKERS.length },
    { id:"essay",    ico:"\u{270D}",  name:"Essay Paper",        n:THINKERS.filter(t => t.tag.includes("Essay")).length },
    { id:"ethics",   ico:"\u{2696}",  name:"GS-IV Ethics",       n:THINKERS.filter(t => t.tag.includes("Ethics")).length },
    { id:"quotes",   ico:"\u{1F4AC}", name:"Quote Bank",         n:THINKERS.reduce((a, t) => a + t.quotes.length, 0) },
    { id:"syllabus", ico:"\u{1F5FA}", name:"GS-IV Syllabus Map",  n:SYLLABUS.length },
    { id:"themes",   ico:"\u{1F3AF}", name:"Essay Theme Map",     n:ESSAY_THEMES.length },
    { id:"essays",   ico:"📝", name:"Model Essays",
      n:(typeof ESSAYS !== "undefined") ? Object.keys(ESSAYS).length : 0 },
    { id:"worklab",  ico:"\u{1F4D6}", name:"Works in Depth",
      n:(typeof WORKLAB !== "undefined") ? Object.keys(WORKLAB).length : 0 },
    { id:"pyq",      ico:"\u{1F5C3}", name:"Past Questions",
      n:(typeof PYQ_PAPERS !== "undefined")
          ? PYQ_PAPERS.reduce((a, p) => a + p.a.length + p.b.length, 0) : 0 }
  ];
  document.getElementById("viewNav").innerHTML = views.map(v => `
    <button class="nav-item ${(state.view === v.id ||
        (v.id === "worklab" && state.view.startsWith("work:"))) ? "active" : ""}" data-view="${v.id}">
      <span class="nav-ico">${v.ico}</span><span class="nav-name">${v.name}</span>
      <span class="nav-count">${v.n}</span>
    </button>`).join("");

  document.getElementById("catNav").innerHTML = CATEGORIES.map(c => `
    <button class="nav-item ${state.view === c.id ? "active" : ""}" data-view="${c.id}">
      <span class="nav-ico">${c.icon}</span><span class="nav-name">${c.name}</span>
      <span class="nav-count">${THINKERS.filter(t => t.cat === c.id).length}</span>
    </button>`).join("");
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

  if (state.tag) list = list.filter(t => t.tag.includes(state.tag));

  const q = state.q.trim().toLowerCase();
  if (q) list = list.filter(t => haystack(t).includes(q));
  return list;
}

/* ================= VIEWS ================= */
function cardHTML(t){
  return `
  <button class="card" data-open="${t.id}">
    <div class="card-top">
      ${portraitHTML(t)}
      <div class="card-id">
        <h4>${esc(t.name)}</h4>
        <div class="yrs">${esc(t.years)} &middot; ${esc(t.place)}</div>
        <div class="sch">${esc(t.school)}</div>
      </div>
    </div>
    <p class="card-gist">${esc(t.gist)}</p>
    <div class="card-foot">${tagsHTML(t)}</div>
  </button>`;
}

function renderGrid(){
  const list = currentList();
  const cat = catById[state.view];
  let head;
  if (state.q) head = { h:`Results for “${esc(state.q)}”`, p:`${list.length} thinker${list.length === 1 ? "" : "s"} matched.` };
  else if (cat) head = { h:cat.name, p:cat.blurb };
  else if (state.view === "essay") head = { h:"Essay Paper", p:"Thinkers who give an essay its opening quotation, its philosophical spine or its counter-argument." };
  else if (state.view === "ethics") head = { h:"GS Paper IV — Ethics, Integrity & Aptitude", p:"Thinkers named in or directly serving the GS-IV syllabus." };
  else head = { h:"All Thinkers", p:"Sorted by tradition. Use the sidebar to narrow by school, or search across every idea and quotation." };

  return `
    <div class="sec-head"><h3>${head.h}</h3><p>${head.p}</p></div>
    <div class="chips">
      <button class="chip ${state.tag === "" ? "on" : ""}" data-tag="">All papers</button>
      <button class="chip ${state.tag === "Essay" ? "on" : ""}" data-tag="Essay">Essay</button>
      <button class="chip ${state.tag === "Ethics" ? "on" : ""}" data-tag="Ethics">Ethics</button>
    </div>
    ${ list.length
        ? `<div class="grid">${list.map(cardHTML).join("")}</div>`
        : `<div class="empty"><b>Nothing found</b>Try a different word — search covers names, ideas, quotations and themes.</div>` }`;
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

/* An essay's first available register, since a theme editorial has only
   the editorial one. Used for word counts and card labels. */
function essayBody(e){
  return (e.p && e.p.length) ? e.p : (e.ep && e.ep.length) ? e.ep : (e.cp || []);
}
/* How many past questions this essay is the home for. */
function essayServes(e){
  return (e.serves && e.serves.length) ? e.serves.length : 0;
}

/* The launchers that sit under the last "Open it out with" block. A theme may
   carry more than one full essay. */
function essayLinkHTML(theme){
  const keys = (theme && theme.essays) ? theme.essays : (typeof theme === "string" ? [theme] : []);
  const rows = keys.filter(k => (typeof ESSAYS !== "undefined") && ESSAYS[k]);
  if (!rows.length) return "";
  return rows.map(k => {
    const e = ESSAYS[k];
    const n = essayBody(e).reduce((a, x) => a + x.split(/\s+/).length, 0);
    const q = essayServes(e);
    return `
    <button class="essay-launch" data-essay="${esc(k)}">
      <span class="radio" aria-hidden="true"></span>
      <span class="el-txt">
        <b>Read the full model essay</b>
        <span>${esc(e.t || e.et)} &middot; ${n} words${q ? " &middot; answers " + q + " past question" + (q > 1 ? "s" : "") : ""}</span>
      </span>
      <span class="el-go" aria-hidden="true">&rarr;</span>
    </button>`;
  }).join("");
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
    <button class="backlink" data-view="essays">&larr; All model essays</button>
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
    </article>`;
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

/* Model paragraphs for an essay theme, if any have been written for it. */
function answersHTML(theme){
  const topic = theme.t;
  const list = (typeof ANSWERS !== "undefined") ? ANSWERS[topic] : null;
  if (!list || !list.length) return "";
  const words = list.reduce((a, x) => a + x.p.join(" ").split(/\s+/).length, 0);
  const Q = pyqText();
  const slug = esc(topic).replace(/[^A-Za-z]/g, "");
  return `
    <div class="ans-head">
      <b>Model paragraphs</b>
      <span>${list.length} sub-themes &middot; ~${Math.round(words / list.length)} words each &middot;
        one for each kind of question this theme throws up &mdash; pick one to read it</span>
    </div>
    <div class="tiles">
      ${list.map((a, i) => `
        <button class="tile" data-tile="${i}" aria-expanded="false">
          <span class="tile-no">${i + 1}</span>
          <b>${esc(a.h)}</b>
          ${a.s ? `<span class="tile-for">${esc(a.s)}</span>` : ""}
          <span class="tile-go">Read <i>&rarr;</i></span>
        </button>`).join("")}
    </div>
    <div class="tile-panels">
      ${list.map((a, i) => `
        <article class="ans" data-panel="${i}" id="ans-${slug}-${i}" hidden>
          <h5><span class="ans-no">${i + 1}</span>${esc(a.h)}</h5>
          ${a.s ? `<p class="ans-for">${esc(a.s)}</p>` : ""}
          ${(a.qs && a.qs.length) ? `<div class="ans-serves"><b>Answers</b>${a.qs.map(k => Q[k]
              ? `<span class="ans-q"><i>${Q[k].y} ${Q[k].s}${Q[k].n}</i>${esc(Q[k].q)}</span>` : "").join("")}</div>` : ""}
          ${a.p.map(x => `<p>${esc(x)}</p>`).join("")}
          <div class="ans-open">
            <b>Open it out with</b>
            <ul>${a.open.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <button class="tile-close" data-tile="${i}">Close</button>
        </article>`).join("")}
    </div>
    ${essayLinkHTML(theme)}`;
}

function renderMap(rows, title, sub, opts){
  const pills = !(opts && opts.pills === false);
  return `
    <div class="sec-head"><h3>${title}</h3><p>${sub}</p></div>
    ${rows.map(r => `
      <div class="map-card">
        <h4>${esc(r.t)}</h4>
        <div class="sub">${esc(r.s)}</div>
        ${ pills ? `<div class="pills">
          ${r.ids.map(id => byId[id]
              ? `<button class="pill" data-open="${id}">${esc(byId[id].name)}</button>` : "").join("")}
        </div>` : "" }
        ${answersHTML(r)}
      </div>`).join("")}`;
}

function render(){
  const main = document.getElementById("main");
  if (state.view.startsWith("essay:")) main.innerHTML = renderEssay(state.view.slice(6), state.mode);
  else if (state.view === "essays")   main.innerHTML = renderEssayList();
  else if (state.view === "pyq")      main.innerHTML = renderPYQ();
  else if (state.view.startsWith("work:")) {
    const rest = state.view.slice(5), c = rest.indexOf(":");
    const id = c < 0 ? rest : rest.slice(0, c), w = c < 0 ? "" : rest.slice(c + 1);
    main.innerHTML = (typeof WORKLAB !== "undefined" && WORKLAB[id])
      ? (w ? renderWork(id, w) : renderWorkThinker(id))
      : `<div class="empty"><b>Not found</b>No deep dive for this thinker yet.</div>`;
  }
  else if (state.view === "worklab")  main.innerHTML = renderWorkLabList();
  else if (state.view === "quotes")   main.innerHTML = renderQuotes();
  else if (state.view === "syllabus") main.innerHTML = renderMap(SYLLABUS, "GS Paper IV — Syllabus Map",
                                        "Each syllabus heading with the thinkers who answer it. Click a name for the full page.");
  else if (state.view === "themes")   main.innerHTML = renderMap(ESSAY_THEMES, "Essay Theme Map",
                                        "The nine themes the paper keeps asking. Each opens into five model paragraphs \u2014 one per kind of question.",
                                        { pills:false });
  else                                main.innerHTML = renderGrid();
  renderNav();
  applyPortraits(main);
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

/* ================= EVENTS ================= */
document.addEventListener("click", e => {
  const open = e.target.closest("[data-open]");
  if (open) { openSheet(open.dataset.open); return; }

  const wk = e.target.closest("[data-work]");
  if (wk) {
    const i = wk.dataset.work.indexOf(":");
    const id = wk.dataset.work.slice(0, i), title = wk.dataset.work.slice(i + 1);
    closeSheet();
    state.view = "work:" + id + (title ? ":" + title : "");
    render();
    return;
  }

  const tile = e.target.closest("[data-tile]");
  if (tile) {
    const card = tile.closest(".map-card"), i = tile.dataset.tile;
    const panel = card.querySelector(`.ans[data-panel="${i}"]`);
    const wasOpen = !panel.hidden;
    card.querySelectorAll(".ans[data-panel]").forEach(x => { x.hidden = true; });
    card.querySelectorAll(".tile").forEach(x => {
      x.classList.remove("on"); x.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      panel.hidden = false;
      const t = card.querySelector(`.tile[data-tile="${i}"]`);
      t.classList.add("on"); t.setAttribute("aria-expanded", "true");
      if (tile.classList.contains("tile-close")) t.scrollIntoView({ behavior:"instant", block:"center" });
    } else if (tile.classList.contains("tile-close")) {
      card.querySelector(`.tile[data-tile="${i}"]`).scrollIntoView({ behavior:"instant", block:"center" });
    }
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
    state.view = "themes"; render();
    const card = document.querySelectorAll(".map-card")[ti];
    if (card) {
      const tile = card.querySelector(`.tile[data-tile="${pi}"]`);
      if (tile) tile.click();                       // opens the panel and marks the tile
      const art = card.querySelector(`.ans[data-panel="${pi}"]`);
      (art || card).scrollIntoView({ behavior:"instant", block:"start" });
    }
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

  const nav = e.target.closest("[data-view]");
  if (nav) {
    state.view = nav.dataset.view;
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
  if (chip) { state.tag = chip.dataset.tag; render(); return; }

  if (e.target.id === "closeBtn" || e.target.id === "overlay") closeSheet();
});

document.getElementById("search").addEventListener("input", e => {
  state.q = e.target.value;
  if (state.q && state.view !== "quotes") state.view = "all";
  render();
});

document.getElementById("menuBtn").addEventListener("click", () =>
  document.getElementById("sidebar").classList.toggle("open"));

document.getElementById("themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  document.getElementById("themeBtn").innerHTML = next === "dark" ? "&#9788;" : "&#9789;";
  try{ localStorage.setItem("upsc_thinkers_theme", next); }catch(e){}
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSheet();
  if (e.key === "/" && document.activeElement.id !== "search") {
    e.preventDefault();
    document.getElementById("search").focus();
  }
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
  render();
  fetchPortraits();

  const hash = location.hash.slice(1);
  if (hash && byId[hash]) openSheet(hash);
})();
