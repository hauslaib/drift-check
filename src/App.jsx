import React, { useState, useMemo } from 'react';
import { INTRO, QUESTIONS, AFTER, NOTE, bandFor } from './data.js';

function Scale({ value, onChange, name }) {
  return (
    <div className="scale" role="radiogroup" aria-label={name + ' score, 1 (rarely true) to 5 (consistently true)'}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          className={'scale-btn' + (value === n ? ' is-selected' : '')}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export function App() {
  const [scores, setScores] = useState(() => QUESTIONS.map(() => null));

  const answered = scores.filter((s) => s !== null).length;
  const complete = answered === QUESTIONS.length;
  const total = useMemo(() => scores.reduce((sum, s) => sum + (s || 0), 0), [scores]);
  const band = complete ? bandFor(total) : null;

  const lowest = useMemo(() => {
    if (!complete) return null;
    let idx = 0;
    for (let i = 1; i < scores.length; i += 1) {
      if (scores[i] < scores[idx]) idx = i;
    }
    return { name: QUESTIONS[idx].name, score: scores[idx] };
  }, [scores, complete]);

  const set = (i, n) => setScores((prev) => prev.map((v, j) => (j === i ? n : v)));
  const reset = () => {
    setScores(QUESTIONS.map(() => null));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="wrap">
      <header className="head">
        <div className="eyebrow">Foundational diagnostic · The Drift framework</div>
        <h1>{INTRO.title}</h1>
        <p className="tagline">{INTRO.tagline}</p>
        <p className="framing">{INTRO.framing}</p>
        <p className="instruction">{INTRO.instruction}</p>
      </header>

      <ol className="questions">
        {QUESTIONS.map((q, i) => (
          <li key={q.n} className={'question' + (scores[i] !== null ? ' is-answered' : '')}>
            <div className="q-kicker">{String(q.n).padStart(2, '0')} · {q.name}</div>
            <p className="q-statement">{q.statement}</p>
            <p className="q-hint">{q.hint}</p>
            <Scale value={scores[i]} onChange={(n) => set(i, n)} name={q.name} />
          </li>
        ))}
      </ol>

      {!complete && (
        <div className="progress">
          {answered} of {QUESTIONS.length} scored. 1 is rarely true, 3 sometimes, 5 consistently true.
        </div>
      )}

      {complete && band && (
        <section className="reading" aria-live="polite">
          <div className="reading-score">
            <span className="reading-total">{total}<span className="reading-out">/25</span></span>
            <div>
              <div className={'reading-band reading-band--' + band.key}>{band.label}</div>
              <div className="reading-range">Score {band.range}</div>
            </div>
          </div>
          <p className="reading-text">{band.text}</p>
          <p className="reading-lowest">
            Your lowest dimension is <strong>{lowest.name}</strong> (scored {lowest.score}). The chapter that maps to it is worth reading first.
          </p>
          <p className="reading-after">{AFTER}</p>
          <div className="actions">
            <a className="btn btn--primary" href="https://kylehauslaib.com/book/" target="_blank" rel="noopener">Inside the book &#8599;</a>
            <a className="btn" href="https://kylehauslaib.com/work-with-me/" target="_blank" rel="noopener">Work with me &#8599;</a>
            <button type="button" className="btn" onClick={() => window.print()}>Print this reading &darr;</button>
            <button type="button" className="btn" onClick={reset}>Score again</button>
          </div>
        </section>
      )}

      <footer className="foot">
        <p className="note">{NOTE}</p>
        <nav className="foot-links" aria-label="Related">
          <a href="https://kylehauslaib.com/the-drift/" target="_blank" rel="noopener">The Drift framework</a>
          <a href="https://kylehauslaib.com/companion/" target="_blank" rel="noopener">Printable worksheets</a>
          <a href="https://github.com/hauslaib/drift-cli" target="_blank" rel="noopener">drift-cli (terminal)</a>
          <a href="https://kylehauslaib.com/demos/" target="_blank" rel="noopener">Tools &amp; demos</a>
        </nav>
      </footer>
    </main>
  );
}
