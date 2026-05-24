// The five-question Drift Check, verbatim from the companion worksheet and
// drift-cli (from the front matter and Chapter 9 of *Leading Agile When No One
// Agrees*). Higher scores mean the Stated and Lived systems are more aligned;
// the total runs 5 to 25 and the bands match drift-cli exactly.

export const INTRO = {
  title: 'The Drift Check',
  tagline:
    'A five-question diagnostic for the distance between what your organisation says it does and what it does in practice. Score it alone first. Compare with one trusted colleague before acting. The conversation you have about the gap between your scores matters more than the scores.',
  framing:
    'The Stated System is the org chart, the written process, the formal ceremonies. The Lived System is the corridor decisions, the unspoken rules, the workarounds that keep delivery moving. The Drift is the distance between them, measured by how often the lived side is more true than the stated side.',
  instruction:
    'Score each statement 1 to 5. 1 means rarely true; 3 means sometimes true; 5 means consistently true. Use one team or one programme as your unit of analysis. Resist the urge to score the whole organisation in one pass.',
};

export const QUESTIONS = [
  {
    n: 1,
    name: 'Information',
    statement:
      'The information reaching strategic decision-makers matches what teams privately discuss about the same work.',
    hint: 'Score for the gap between what gets escalated and what teams say to each other on the way out of the room.',
  },
  {
    n: 2,
    name: 'Decisions',
    statement:
      "The decisions that shape your team's work originate in scheduled meetings; corridor conversations confirm or refine them.",
    hint: 'When most decisions are made before the meeting and the meeting ratifies them, score low.',
  },
  {
    n: 3,
    name: 'Commitments',
    statement:
      'Planning produces commitments that reflect honest team estimates, with leaders accepting the result.',
    hint: 'If estimates change during planning to fit capacity that was decided elsewhere, score low.',
  },
  {
    n: 4,
    name: 'Improvement',
    statement:
      'Retrospective action items from three sprints ago can be located and shown to have changed something.',
    hint: 'Try to find them. The act of looking is the diagnostic.',
  },
  {
    n: 5,
    name: 'Knowledge',
    statement:
      'Two or more people on the team can perform the work that depends on its most experienced specialist.',
    hint: 'Score for the underlying skill, not the documentation. A wiki is not a backup.',
  },
];

// Reading bands: total >= 21 Low, >= 14 Moderate, otherwise Significant.
export const BANDS = [
  {
    min: 21,
    key: 'low',
    label: 'Low Drift',
    range: '21 to 25',
    text: 'The organisation operates close to what it says about itself. Recheck in three months.',
  },
  {
    min: 14,
    key: 'moderate',
    label: 'Moderate Drift',
    range: '14 to 20',
    text: 'The two systems diverge in some areas. The chapter that maps to your lowest score is worth reading first.',
  },
  {
    min: 5,
    key: 'significant',
    label: 'Significant Drift',
    range: '13 or below',
    text: 'The Lived System is doing most of the work. Part I and Part II of the book walk through the patterns; Part III is about leading inside them.',
  },
];

export const AFTER =
  'Where is your lowest score, and which behaviour in particular pulled it down? Who else, with no stake in the answer, would score this dimension the same way you did? Three questions structure Reading the Drift: what the Stated System says, what the Lived System does, and who pays for the gap. Which one do you have the weakest answer for?';

export const NOTE =
  'From the front matter and Chapter 9 of Leading Agile When No One Agrees. Re-run quarterly, not when there is a crisis. The trend is more useful than any single score. Your answers stay in your browser: nothing is stored or sent.';

export function bandFor(total) {
  return BANDS.find((b) => total >= b.min) || BANDS[BANDS.length - 1];
}
