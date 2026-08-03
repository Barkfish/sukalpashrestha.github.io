MEPP 436 — ADVANCED MACHINE DESIGN · DEFINITIVE INTERACTIVE STUDY GUIDE
========================================================================

HOW TO OPEN
-----------
Double-click  index.html  — it opens in any web browser. Everything works
offline; no internet needed. Best viewed in Chrome/Safari/Edge.

WHAT'S INSIDE
-------------
index.html          Home hub · exam blueprint · where the marks concentrate
study-guide.html    Complete study guide, all topics (Parts I–III), as
                    COLLAPSIBLE sections: click a heading to expand/collapse,
                    jump via the sticky sidebar, search topics, Expand/Collapse
                    all, and a Dark-mode toggle. Figures are the real ones from
                    your course slides. Includes derivations, worked examples
                    and reference-book elaborations.
objective-bank.html 101 interactive MCQs. Click an option → instant feedback
                    on YOUR choice + the correct answer + a one-line reason.
                    Filter by topic; shuffle; track your score.
subjective-bank.html 46 Section-B questions by block, each with a full model
                    answer / step-by-step numerical. Filter by source
                    (Internal 2026 / Feb 2025 / July 2025 / numericals /
                    derivations).
model-exam.html     Randomized paper generator in the real KU format:
                    75-mark end-sem (20 MCQs + 4 Section-B questions) or the
                    10-mark internal. "Reveal answers" + Print/PDF.
assets/             style.css, data.js (all question banks), app.js (engine).
assets/img/         Figures cropped from YOUR course slide decks (Mohr's
                    circle, Tresca yield surface, 3D stress cube, crack modes,
                    elliptical crack, Ashby chart, S-N curve, fatigue loading,
                    da/dN curve, bathtub curve). A few "draw-it-yourself"
                    sketches (ceramic stress-strain, concept boxes) remain as
                    simple diagrams where no slide figure exists.
                    Keep the assets/ folder next to the HTML files.

SOURCES USED
------------
- MEPP 436 slide decks + lecture notes (the examinable core)
- Past papers: Feb 2025, July 2025, and the 25 May 2026 First Internal
- Reference texts: Norton; Shigley & Mitchell; Juvinall & Marshek;
  Shukla (Practical Fracture Mechanics in Design); Ulrich & Eppinger.

WHERE THE 25 MAY 2026 INTERNAL COMES FROM  (you asked me to identify this)
--------------------------------------------------------------------------
The most-recent internal is fracture- and fatigue-heavy. Verified against the
reference PDFs:
  Q1  Plane stress vs plane strain — stress-analysis fundamentals.
  Q2  "Fracture stress of a similar sheet" (maraging steel, 40→100 mm crack).
      -> JUVINALL & MARSHEK, Ch. 6 (the "similar sheet" wording is Juvinall's
         Problem 6.1); maraging-steel data matches SHUKLA's fracture problems.
         Method: sigma_f1*sqrt(a1) = sigma_f2*sqrt(a2)  =>  303.6 MPa.
  Q3  S-N relation with factors C_L, C_D(=C_G size), C_S, C_O; 0.9*Su at 10^3,
      0.5*Su at 10^6.
      -> JUVINALL & MARSHEK, Ch. 8 (Fatigue). Juvinall's symbol table literally
         defines C_L = load factor, C_G = gradient(size) factor, C_S = surface.
  Q4  Paris-law crack-propagation life (same numbers as Feb-2025 Q3c).
      -> SHUKLA, Ch. 5 (fatigue crack growth; da/dN; Miner Sum N0/N = 1).

  => Primary source book: JUVINALL & MARSHEK — Fundamentals of Machine
     Component Design, with fracture numericals shared by SHUKLA. These
     problem TYPES are prioritised (tagged "Internal 2026", starred) across
     the study guide, subjective bank and model exam.

Prepared for Sukalpa. Good luck in the exam.
