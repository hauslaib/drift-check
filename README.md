# The Drift Check

[![CI](https://github.com/hauslaib/drift-check/actions/workflows/ci.yml/badge.svg)](https://github.com/hauslaib/drift-check/actions/workflows/ci.yml)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20786354.svg)](https://doi.org/10.5281/zenodo.20786354)

A small, client-side interactive version of the five-question Drift Check from
*Leading Agile When No One Agrees*. Rate five statements about how your
organisation really works and get a reading of the distance between what it
says it does (the Stated System) and what it does in practice (the Lived System).

Everything runs in your browser. Nothing is stored, and nothing is sent.

**Live:** <https://kylehauslaib.com/demos/drift-check.html>

## The check

Five dimensions, scored 1 (rarely true) to 5 (consistently true): Information,
Decisions, Commitments, Improvement, Knowledge. The total runs 5 to 25:

- **21 to 25** Low Drift
- **14 to 20** Moderate Drift
- **13 or below** Significant Drift

The questions, scoring and bands match the printable worksheet and drift-cli
exactly. The conversation about the gap matters more than the score.

## The same check, three ways

- **In the browser:** this tool, and the live page above.
- **In the terminal:** [drift-cli](https://github.com/hauslaib/drift-cli).
- **On paper:** the [printable worksheet](https://kylehauslaib.com/companion/).

## Run it locally

```sh
npm install
npm run dev      # start the dev server
npm run build    # build a single self-contained dist/index.html
npm run preview  # preview the production build
npm run lint
```

## Project structure

```text
src/
  data.js     The five questions, bands and copy (verbatim from the worksheet)
  App.jsx     The interactive check and its reading
  main.jsx    Entry point that mounts the app
  styles.css  Theme and layout
```

## Privacy

It runs entirely in the browser. No cookies, no analytics, no network calls;
your answers are held in memory only and never leave the page.

## Licence

[AGPL-3.0-or-later](LICENSE).

Built by Kyle Hauslaib as a companion to *Leading Agile When No One Agrees*.
[kylehauslaib.com](https://kylehauslaib.com) · [the Drift framework](https://kylehauslaib.com/the-drift/)


## Citation

If you use the Drift Check, please cite the archived release:

> Hauslaib, K. (2026). *Drift Check* (Version 1.0.0) [Software]. Zenodo. https://doi.org/10.5281/zenodo.20786354

The DOI above is the concept DOI and always resolves to the latest version. A machine-readable citation is in [`CITATION.cff`](CITATION.cff).
