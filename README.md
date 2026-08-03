# MEPP 436 — Advanced Machine Design · Definitive Interactive Guide

A self-contained, offline study site built from your own course slides, lecture notes, past papers and reference texts. Everything below runs in a browser — no server, no installation.

## How to open

Double-click **`index.html`** (or `MEPP436 - Interactive Study Notes.html`) — it opens in any browser and works fully offline. Best viewed in Chrome, Safari or Edge. Keep the `assets/` folder next to the HTML files; the pages load their styling, question banks and figures from it.

> Equation rendering (MathJax) loads from a CDN, so `study-guide.html`, `last-minute-guide.html` and the Interactive Study Notes need internet the first time you open them — after that the browser caches it and they work offline too.

## What's inside

| File | What it is |
|---|---|
| `index.html` | Home hub — exam blueprint and where the marks concentrate. |
| `MEPP436 - Interactive Study Notes.html` | The full annotated course notes: all ten topics, collapsible sections, sticky sidebar, dark mode, worked examples, slide-vs-redraw figure toggles, an in-page objective quiz drill and a formula sheet. |
| `study-guide.html` | Complete study guide (Parts I–III) as collapsible sections — click a heading to expand/collapse, jump via the sticky sidebar, search topics, Expand/Collapse all, dark mode. Real slide/textbook figures throughout, properly typeset equations (MathJax), derivations and reference-book elaborations. |
| `last-minute-guide.html` | Night-before cram sheet, self-quiz style: every topic is a collapsed question — try to answer, then click to reveal the model answer, figures and a worked example. Formulas include a variable glossary and "how to use" notes. Master formula sheet, an interactive revision checklist (ticks saved in your browser), and the individual failure-theory yield-surface diagrams (Rankine, Tresca, St. Venant, Haigh, von Mises) side by side. |
| `objective-bank.html` | 101 interactive MCQs. Click an option for instant feedback on your choice, the correct answer and a one-line reason. Filter by topic, restrict to past-paper questions only, and **sort by Most likely to come / Most repeated topics / Shuffle / Original order**. Tracks your score. |
| `subjective-bank.html` | 46 Section-B questions by topic block, each with a full model answer or step-by-step numerical. Filter by source (Internal 2026 / Feb 2025 / July 2025 / numericals / derivations). |
| `model-exam.html` | Randomized paper generator in the real KU format: the 75-mark end-semester paper (20 MCQs + 4 Section-B questions) or the 10-mark internal. Generate once, then **Reveal answers** toggles visibility without reshuffling the paper. Print / PDF supported. |
| `assets/style.css` | Shared design system (colours, layout, equation styling) used by every page. |
| `assets/data.js` | All question-bank content: 101 objective questions, 46 subjective parts, paper-assembly metadata. |
| `assets/app.js` | Shared engine: MCQ interaction, subjective accordion, model-exam assembly, the figure resolver (`window.figInner`). |
| `assets/guide.js` | Sidebar/table-of-contents behaviour for `study-guide.html`. |
| `assets/slidefigs.js` | Curated figures extracted directly from your own slide photos/notes (23 keyed figures). |
| `assets/img/` | Additional figures cropped straight from the MEPP 436 slide decks and reference books — stress/failure diagrams, Mohr's circle (2-D and 3-D), the five failure-theory yield surfaces individually and combined, crack-tip and fracture-mechanics figures, fatigue curves, reliability charts, DFMA/ergonomics diagrams. A few "draw-it-yourself" sketches remain only where no slide figure exists. |

## Sources used

- MEPP 436 slide decks and lecture notes (the examinable core)
- Past papers: Feb 2025, July 2025, and the 25 May 2026 First Internal
- Reference texts: Norton; Shigley & Mitchell; Juvinall & Marshek; Shukla (*Practical Fracture Mechanics in Design*); Ulrich & Eppinger

## Where the 25 May 2026 internal comes from

The most recent internal is fracture- and fatigue-heavy. Verified against the reference PDFs:

- **Q1** — Plane stress vs plane strain, stress-analysis fundamentals.
- **Q2** — "Fracture stress of a similar sheet" (maraging steel, 40→100 mm crack). Source: **Juvinall & Marshek**, Ch. 6 (the "similar sheet" wording is Juvinall's Problem 6.1); the maraging-steel data matches **Shukla**'s fracture problems. Method: \( \sigma_{f1}\sqrt{a_1} = \sigma_{f2}\sqrt{a_2} \Rightarrow 303.6\text{ MPa} \).
- **Q3** — S-N relation with factors \(C_L, C_G, C_S, C_O\); \(0.9\,S_u\) at \(10^3\), \(0.5\,S_u\) at \(10^6\). Source: **Juvinall & Marshek**, Ch. 8 (Fatigue) — the symbol table defines \(C_L\) = load factor, \(C_G\) = gradient/size factor, \(C_S\) = surface factor.
- **Q4** — Paris-law crack-propagation life (same numbers as Feb 2025 Q3c). Source: **Shukla**, Ch. 5 (fatigue crack growth, \(da/dN\), Miner \(\sum n/N=1\)).

Primary source book: **Juvinall & Marshek — Fundamentals of Machine Component Design**, with fracture numericals shared by **Shukla**. These problem types are prioritised (tagged "Internal 2026", starred ★) across the study guide, subjective bank and model exam.

## Suggested study path

1. Skim the **exam blueprint** on `index.html` to see where marks concentrate.
2. Work through `study-guide.html` (or the Interactive Study Notes) topic by topic.
3. Drill `objective-bank.html`, sorted by **Most likely to come**, and `subjective-bank.html` filtered to past-paper sources.
4. The night before: run through `last-minute-guide.html` self-quiz style, then generate a full paper in `model-exam.html` under time.

---
Prepared for Sukalpa. Good luck in the exam.
