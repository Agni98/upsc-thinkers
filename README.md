# Thinkers for UPSC Mains — Essay & GS-IV Ethics

A single-page reference site covering **91 philosophers and thinkers** across 10 traditions,
with core ideas, exact quotations, portraits, and a direct mapping to where each one belongs
in the Essay paper and in GS Paper IV.

## Opening it

Just double-click **`index.html`**. No build step, no install, no server needed.

The 85 portrait URLs are pre-resolved and baked into `portraits.js`, so the site makes
**no API calls at all** — photos load straight from Wikimedia. Fully offline, the page and
all its text work exactly the same and show lettered monograms in place of photos.

## What's inside

| View | What it gives you |
|---|---|
| **All Thinkers** | Every entry, grouped by tradition |
| **Essay Paper** | Thinkers who supply an opening quote, a spine, or a counter-argument |
| **GS-IV Ethics** | Thinkers named in or directly serving the Ethics syllabus |
| **Quote Bank** | All 316 quotations in one scannable column, searchable |
| **GS-IV Syllabus Map** | Each syllabus heading → the thinkers who answer it |
| **Essay Theme Map** | The nine themes the paper keeps asking → thinkers, five sub-theme paragraphs, full essays |
| **Past Questions** | 72 questions from nine Mains papers, grouped by what each one asks of you |

Each thinker page has: a collapsed **Read full introduction** toggle → **Core Ideas** →
**Key Quotations** → **Major Works** → **Where to Use It** (split into Essay themes and
GS-IV syllabus hooks).

### Hindi

Inside the introduction panel, thinkers with a translation show an **English / हिंदी**
switch. Translations live in `hindi.js`, keyed by thinker id with the same `p` and
`essence` fields as `profiles.js`. A thinker with no entry there simply shows no switch,
so translations can be added a few at a time without breaking anything.

### Practice questions

Below **Where to Use It** sits a **Practice questions** toggle with two multiple-statement
questions per thinker, in the UPSC format. The answer appears the instant you pick an
option — there is no submit step. A wrong pick marks your choice, highlights the correct
option and reveals the explanation; the first answer stands, so you cannot click around
until something turns green.

They are written to teach rather than trap. Incorrect statements are plainly incorrect to
anyone who has read the page above, never subtly misleading, and the explanation says why
each statement stands or falls. Questions live in `mcqs.js` (`q`, `s`, `o`, `a`, `why`).

### One theme list, three depths

The Essay Theme Map, the model paragraphs and Past Questions all run on the **same nine
themes**, derived from what the 2018-2026 papers actually asked rather than from a
prep-guide taxonomy. Ordered most-asked first:

| # | Theme | PYQs | Papers |
|---|---|---|---|
| 1 | Ends, Means and the Ethics of Decision | 12 | 8 of 9 |
| 2 | Knowledge, Education and the Doubting Mind | 11 | 7 of 9 |
| 3 | Character, Adversity and the Test of Power | 9 | 7 of 9 |
| 4 | The Good Life: Contentment, Simplicity and Being Humane | 9 | 6 of 9 |
| 5 | Culture, Memory and the Making of Meaning | 9 | 6 of 9 |
| 6 | Justice, Equality and the Excluded | 9 | 6 of 9 |
| 7 | Democracy, the State and India in the World | 5 | 3 of 9 |
| 8 | Nature, Development and Civilisation | 4 | 4 of 9 |
| 9 | Technology and the Modern Self | 4 | 4 of 9 |

Each theme opens into **five model paragraphs, and they are not five restatements of the
theme** — they are the five different *kinds* of question the theme keeps throwing up. So
"Mathematics is the music of reason" reaches *Reason has a music*, while "The empires of the
future will be the empires of the mind" reaches *The empire of the mind*, though both are
knowledge questions. 45 paragraphs, 300-360 words each, built from the thinkers only.

Every paragraph carries the past questions it answers; every past question carries a link to
the paragraph written for it. All 72 questions reach one.

### Model essays

**Two essays per theme** (three for Justice), **nineteen in all**, and the pair on each theme
is built to divide the work between them. The first takes the theme's central argument; the
second takes the questions the first leaves open. So *The certificate and the question* asks
whether Indian education produces minds or credentials, while its companion *The romantic man
was never the enemy* asks what turns information into understanding — both knowledge
questions, different demands, different essays.

Each essay carries a **`serves`** list naming the past questions it is the home for. Across a
theme those lists **partition** the theme's questions: every past question has exactly one
essay, none is shared, and none is missed. The site checks this, and all **72 of 72** are
covered.

| Theme | Essays | PYQs |
|---|---|---|
| Ends, Means and the Ethics of Decision | The file that nobody moved · A standard nobody meets is still a standard | 12 |
| Knowledge, Education and the Doubting Mind | The certificate and the question · The romantic man was never the enemy | 11 |
| Character, Adversity and the Test of Power | We examine for endurance and promote for compliance · The straight line is the least likely path | 9 |
| The Good Life | The country is richer. Ask it whether it is better · The inner life is not a private matter | 9 |
| Culture, Memory and the Making of Meaning | The argument a country has with itself · The most confident account is rarely the true one | 9 |
| Justice, Equality and the Excluded | A country should not need this much kindness · Educated, and still not counted · Somebody always pays for the public good | 9 |
| Democracy, the State and India in the World | Between two elections · Autonomy is a capability, not a posture | 5 |
| Nature, Development and Civilisation | The bill arrives in a different currency · We stopped being taught by anything we did not make | 4 |
| Technology and the Modern Self | We built the rails without asking where they go · The jobs question is the wrong question | 4 |

All nineteen are written in **one register**. The argument is carried by policy, data and
institutions; a thinker appears where the idea does real work and nowhere for the sake of
appearing; and **no paragraph opens by announcing a philosopher** — a rule the build checks,
because opening that way is the tell that an essay has stopped being editorial. Each is
1,400–1,730 words and is built from its theme's five model paragraphs plus the "Open it out
with" prompts those paragraphs leave for the writer.

Essays live in `essays.js`, keyed by their own title: `et` the title, `ep` the paragraphs,
`serves` the questions it answers, `note` how it relates to its pair. `**double asterisks**`
render as bold and nothing else is treated as markup. Open one from the radio buttons under
the model paragraphs, or from **Model Essays** in the sidebar.

### Past questions, classified

Its own view, listed under Model Essays in the sidebar: every essay set in the last nine
Mains papers — **2018 to 2026, 72 questions** — grouped by what the question asks you to do
rather than by subject.

Grouped by the same nine themes as the Essay Theme Map, ordered **most-repeated first**. Each
carries a 20–50 word note on what holds it together, the questions with year and section, the
thinkers who help, and a link to the matching model essay. Every question also links to the
model paragraph written to answer it.

**Every question sits in exactly one group**, so the ordering is a count and not an
impression. Where a question genuinely reads two ways, the second reading is printed under
it as a note rather than counted twice. A **By year** tab shows the nine papers as they were
set, each question labelled with the group it belongs to.


Papers, groups and the trend notes live in `pyq.js`. Question ids are `<year><section><n>` —
`2023B1` is the first question of Section B, 2023 — so a question is reclassified by moving
one short string from one group's `qs` list to another's.

### Major Works and covers

`works.js` lists 3–4 key texts per thinker with a year and a one-line note. Where the work
has a **freely-licensed** image on Wikimedia Commons — a first-edition title page, a
manuscript folio — `covers.js` supplies it. Copyrighted modern jackets are deliberately
excluded, and any work without an accurate image is drawn as a small printed title card
instead, so nothing on the page is misleading.

### The introductions

Every thinker has a ~200-word prose profile behind the toggle under their photo — who they
were, the background their thought grew out of, how their core concepts hang together, and
an "In essence" conclusion. It stays collapsed so the page still opens clean and scannable;
click to expand. Printing a thinker page includes the introduction whether or not it is open.

These live in `profiles.js`, keyed by thinker id:

```js
"socrates":{
  p:["First paragraph…", "Second paragraph…"],
  essence:"The one-line synthesis, printed after 'In essence:'"
}
```

A thinker with no entry there simply shows no toggle, so you can add or rewrite them freely.

### Shortcuts
- `/` — jump to search (searches names, ideas, quotations and themes)
- `Esc` — close a thinker page
- Sun/moon button — light / dark mode, remembered between visits
- `Ctrl+P` on an open thinker page — prints just that page, clean, for revision notes
- The URL carries a `#thinker-id`, so you can bookmark or share a specific entry

## Files

```
index.html    page shell
styles.css    all styling (light + dark themes, print rules)
data.js       ← ALL CONTENT LIVES HERE
profiles.js   the ~200-word introductions behind each toggle
hindi.js      Hindi translations of those introductions
works.js      3–4 major works per thinker
covers.js     cover / title-page images for those works
mcqs.js       two practice questions per thinker
answers.js    five sub-theme model paragraphs per essay theme (45 in all)
essays.js     19 model essays, two per theme, partitioned across the past questions
pyq.js        nine years of past essay questions, classified by theme
portraits.js  pre-resolved portrait URLs (verified to load)
app.js        rendering, search, syllabus maps
```

## Adding or editing a thinker

Open `data.js` and copy any existing block. The fields:

```js
{
  id:"unique-slug", name:"Display Name", years:"1900–1980", place:"Country",
  cat:"contemporary",              // must match a CATEGORIES id at the top of the file
  wiki:"Exact Wikipedia Page Title", // used to auto-fetch the portrait
  img:"https://...",               // optional: overrides the Wikipedia portrait
  school:"School of thought",
  tag:["Essay","Ethics"],          // which paper(s) it serves
  gist:"One-line essence.",
  ideas:["Heading — explanation.", ...],   // the " — " separator is required
  quotes:["Quotation.", ...],
  essay:["Essay theme", ...],
  ethics:["GS-IV syllabus hook", ...]
}
```

Save and refresh — counts, categories, search and both maps update themselves.

To add a thinker to a syllabus or theme grouping, add their `id` to the relevant
`SYLLABUS` or `ESSAY_THEMES` entry at the top of `app.js`.

If a new thinker has no entry in `portraits.js`, the app falls back to looking their
portrait up from Wikipedia once and caching it — so adding people still just works.

## A note on the 6 monograms

Wikipedia has no freely-licensed photograph of Kohlberg, Festinger, Barnard,
McGregor or Schumacher, and Paul Appleby's only image is an unlabelled group photo —
so those six show lettered monograms rather than something misleading.

To give any of them a picture, add an `img:"<url>"` field to that entry in `data.js`;
it overrides everything else.
