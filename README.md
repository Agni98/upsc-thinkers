# Thinkers for UPSC Mains — Essay & GS-IV Ethics

A single-page reference site covering **91 philosophers and thinkers** across 10 traditions, with
core ideas, exact quotations, portraits, and a direct mapping to where each one belongs in the
Essay paper and in GS Paper IV.

**<https://thinkers.okayupsc.com>** — Cloudflare Pages publishes this repo on every push to
`main`.

## What's inside

| View | What it gives you |
|---|---|
| **All Thinkers** | Every entry, grouped by school; narrow by region, school or paper, or filter by any word |
| **Essay Paper** | Thinkers who supply an opening quote, a spine, or a counter-argument |
| **GS-IV Ethics** | Thinkers named in or directly serving the Ethics syllabus |
| **Quote Bank** | All 317 quotations, one card per thinker, arranged by tradition, essay theme or GS-IV heading |
| **GS-IV Syllabus Map** | Each syllabus heading, its recurring concepts, the thinkers who answer it and its past questions. All 81 case studies live here, each with a model answer |
| **Essay Theme Map** | The nine themes the paper keeps asking, each with five model paragraphs, the essays and the stories to use |
| **Stories and Models** | The Human Thought Atlas: 111 stories, thought experiments and models, arrangeable by essay theme |
| **Past Questions** | 72 essay questions from nine papers and 257 GS-IV questions from 2013 to 2026, each grouped by what it asks of you |

Every page has its own address, so any page can be bookmarked or shared: a thinker is
`#socrates`, and the rest are `#/work/katha/nachiketa-at-the-house-of-death`, `#/atlas/nachiketa`,
`#/essay/<title>` and `#/themes?page=2`.

The portrait URLs are pre-resolved and baked into `portraits.js`, so the site makes **no API
calls**. It runs from the file system with no build step, and offline it shows lettered monograms
in place of the photographs.

## The nine essay themes

The Essay Theme Map, the model paragraphs and Past Questions all run on the same nine themes,
derived from what the 2018–2026 papers actually asked rather than from a prep-guide taxonomy.
Most-asked first:

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

## Files

```
index.html    page shell
okay-ui.css   the look shared with okayupsc.com and the Constitution site: colours, type,
              corners and the navy OkayUPSC bar. Copied in from the okayupsc repo by
              tools/sync-ui.js there; edit it in that repo, not here
styles.css    all styling (light + dark themes, print rules), mapped onto okay-ui.css
fonts/        Roboto Slab (copied in with okay-ui.css) and Noto Serif Devanagari for the
              Sanskrit (this repo's own), each with its licence
data.js       ← ALL THINKER CONTENT LIVES HERE
profiles.js   the ~200-word introduction behind each thinker's toggle
works.js      3-4 major works per thinker
covers.js     cover and title-page images for those works
worklab.js    17 works explored in depth, across seven thinkers and texts
mcqs.js       two practice questions per thinker
answers.js    five model paragraphs per essay theme (45 in all)
guides.js     each model paragraph as a six-part revision guide
essays.js     19 model essays, two per theme, partitioned across the past questions
pyq.js        nine years of past essay questions, classified by theme
portraits.js  pre-resolved portrait URLs (verified to load)
atlas.js      the Human Thought Atlas: stories, thought experiments and models
gs4pyq.js     257 GS-IV questions, 2013 to 2026, 81 of them case studies
gs4concepts.js the GS-IV concept notes, and the 17 case-study themes
cases.js      the case-study method and a model answer for every case
app.js        rendering, search, syllabus maps
favicon.svg   the tab icon: the app's logo without its hills, cropped close so it holds at 16px
```

**Images are freely licensed or they are not used.** The photographs are public-domain and CC0
images from Wikimedia Commons. `covers.js` supplies a cover only where the work has a freely
licensed image there, such as a first-edition title page or a manuscript folio. Copyrighted
modern jackets are excluded, and a work without an accurate image is drawn as a small printed
title card instead, so nothing on the page is misleading.

## House style

Write for an intelligent reader with no specialist background, in the register of a good magazine
essay. No sentence over 35 words, in normal word order. No semicolons or dashes, and no sentence
opening with a bare This, That or It. Explain abstract ideas in concrete terms, with an example
where it helps. Say why one point leads to the next, signpost a contrast with "But", and end each
section on its central point. Keep every qualification: restructure a sentence rather than
swapping in synonyms.

**No commentary about the site itself.** Pages carry content only. There are no "how every page
is built" strips, no notes on how to read a chart or a card, and no lines such as "the examples
below show". The numbers in a header band carry plain labels.

## Adding or editing a thinker

Open `data.js` and copy any existing block:

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

Save and refresh — counts, categories, search and both maps update themselves. To add a thinker
to a syllabus or theme grouping, add their `id` to the relevant `SYLLABUS` or `ESSAY_THEMES`
entry at the top of `app.js`. A thinker with no entry in `portraits.js` has their portrait looked
up from Wikipedia once and cached, so adding people still just works.

The introduction in `profiles.js` runs to three paragraphs and a one-line essence: who they were
and the question they faced, the ideas made concrete, then the use, a limit and the central
point.

## GS-IV concept notes

Each concept in `gs4concepts.js` has a definition (`d`), the questions that asked it (`qs`) and a
source line (`src`). Notes under headings 1 to 15 are structured reading notes: `d` holds the
definition, `secs` the numbered sections as `[heading, paragraphs]`, and `take` the key takeaway.
A paragraph that is itself a list of strings becomes bullets. The nine case-study patterns under
heading 16 use the same shape, with the opening box labelled *The situation* (`dlab`).

A note links out through `tk` (`[thinker id, idea heading]` pairs), `es` (`[theme number,
paragraph index]` pairs for model paragraphs) and `at` (Thought Atlas ids). The links go both
ways: each idea on a thinker's page lists the GS-IV notes that point to it.

**What the notes must cover.** The notes were first built only from past GS-IV questions, and
that let obvious ideas slip. Trusteeship, civil disobedience and duty against charity had never
been asked, so they had no note until the 2026 paper asked them. The notes now cover the standard
canon whether or not it has been asked: the Western theories (utilitarianism, Kant, virtue
ethics, Rawls, Mill's harm principle, the social contract, the ethics of care), Indian thought
(Gandhi's method, the seven social sins, sarvodaya and antyodaya, Kautilya, nishkama karma,
Mahavira), administration (Arendt, dirty hands, Simon, Weber), the syllabus's own phrases, and
moral development, end-of-life ethics and free speech.

Every question in `gs4pyq.js` is linked to at least one note. When a paper is added, link every
question to a note, and write a note for any idea the paper raises that the site lacks.

## GS-IV case studies

All 81 Section B cases, from 2013 to 2026, each with a model answer.

**The five boxes.** The method comes from the supplied answer framework, and every answer uses
the same five boxes: the ethical conflict, the stakeholders, the options with the merit and
problem of each, the decision criteria (legality, public interest, harm, fairness, integrity,
feasibility), and the action sequence.

**Seventeen themes.** The first ten are the answer engines in the framework. Seven more cover the
cases those ten do not, such as threats and inducements, crises that will not wait, and good
intentions against the right to decide. **A case goes under the theme whose engine gives the
right advice for it, not the theme its surface suggests.** Lata's case (2026) looked urgent but
was not an emergency, so it sits under the right to decide rather than under the crisis theme.

Each answer opens with the case in brief and the question as set, then the five boxes, then any
part of the question the boxes do not answer, and a model conclusion. Five answers are the
supplied model answers, and the other seventy-six follow them.

`cases.js` holds the method (`CASE_METHOD`) and the answers (`CASE_ANSWERS`, keyed by question
id). The themes are the Case Studies entries in `gs4concepts.js`, with their `core`, `engine`,
`arch` and `links`.

The 2026 paper as supplied carries no syllabus headings, so its questions' headings and themes
were assigned from what each question asks. That mapping is editorial, as it is for any paper
that arrives without headings.

## Model paragraphs, guides and essays

Each theme opens into **five model paragraphs, which are not five restatements of the theme**.
They are the five different kinds of question the theme keeps throwing up. So "Mathematics is the
music of reason" reaches *Reason has a music*, while "The empires of the future will be the
empires of the mind" reaches *The empire of the mind*, though both are knowledge questions. There
are 45 paragraphs of 300 to 360 words, built from the thinkers only, and every past question
reaches one.

Open a paragraph and it reads as a revision and answer-building guide in six parts: the moral
problem, the thinkers as tests of judgment, applying the framework through five worked examples,
the past topics developed, five model paragraphs for answer writing, and a seven-step method for
building a defensible answer. Guides live in `guides.js`, keyed by theme title with one entry per
paragraph, and all 45 are written. A paragraph without a guide falls back to the plain view.

**Two essays per theme** (three for Justice), **nineteen in all**. The pair on each theme divides
the work: the first takes the theme's central argument, and the second takes the questions the
first leaves open.

## The six monograms

Wikipedia has no freely-licensed photograph of Kohlberg, Festinger, Barnard, McGregor or
Schumacher, and Paul Appleby's only image is an unlabelled group photo. Those six show lettered
monograms rather than something misleading. To give any of them a picture, add an `img:"<url>"`
field to that entry in `data.js`, which overrides everything else.

## Shortcuts

- `/` or `Ctrl+K` — open the site search. Every word must match, and results come grouped as
  thinkers, GS-IV concepts, stories and models, model essays, past questions and quotations
- `Esc` — close a thinker page
- Sun/moon button — light or dark mode, remembered between visits
- `Ctrl+P` on an open thinker page — prints just that page, clean, for revision notes
