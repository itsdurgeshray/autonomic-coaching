/* Health assessment model: question index, progress maths and the saved state. Ported from the questionnaire build. */
import { FREQ, QUESTIONS, SECTIONS, type AssessmentQuestion } from '@/content/assessment';
import { FACTS, type FactHelpers } from '@/content/assessmentFacts';

/** single and freq: option index · multi: option indexes · quick: row index to option index · text: free text */
export type AnswerValue = number | number[] | Record<number, number> | string;

export type Q = AssessmentQuestion & {
  index: number;
  sectionIndex: number;
  /** Units this question counts for: a quick round counts every row */
  units: number;
  /** Number shown for the first unit, starting at 1 */
  firstNumber: number;
};

export const Qs: Q[] = (() => {
  let acc = 0;
  return QUESTIONS.map((q, index) => {
    const units = q.kind === 'quick' ? (q.rows?.length ?? 0) : 1;
    const out = {
      ...q,
      index,
      sectionIndex: SECTIONS.findIndex((s) => s.id === q.section),
      units,
      firstNumber: acc + 1,
    };
    acc += units;
    return out;
  });
})();

export const TOTAL = Qs.reduce((a, q) => a + q.units, 0);

export const SEC = SECTIONS.map((s, si) => {
  const qs = Qs.filter((q) => q.sectionIndex === si);
  return {
    ...s,
    si,
    start: qs[0].index,
    end: qs[qs.length - 1].index,
    units: qs.reduce((a, q) => a + q.units, 0),
  };
});

export const LEAF_PER_ANSWER = 1;
export const QUICK_ROUND_BONUS = 2;
export const SECONDS_PER_QUESTION = 12;
export const SECONDS_PER_QUICK_ROW = 5;

export type FactRecord = { si: number; id: string; personal: boolean };

export type AssessmentState = {
  answers: Record<number, AnswerValue>;
  idx: number;
  furthest: number;
  earned: number[];
  leaves: number;
  got: Record<string, 1>;
  facts: FactRecord[];
  screen: 'intro' | 'q' | 'saved' | 'complete';
  pending: number | null;
  coached: boolean;
};

export const STORAGE_KEY = 'ac-assessment';

export const blankState = (): AssessmentState => ({
  answers: {},
  idx: 0,
  furthest: 0,
  earned: [],
  leaves: 0,
  got: {},
  facts: [],
  screen: 'intro',
  pending: null,
  coached: false,
});

/** Reads the saved assessment. A section reward that was open when the page closed counts as finished. */
export function loadState(): AssessmentState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return blankState();
    const s = {
      ...blankState(),
      ...(JSON.parse(raw) as AssessmentState),
      screen: 'intro' as const,
    };
    if (s.pending != null) {
      if (s.pending < SEC.length - 1) {
        s.idx = SEC[s.pending].end + 1;
        s.furthest = Math.max(s.furthest, s.idx);
      }
      s.pending = null;
    }
    return s;
  } catch {
    return blankState();
  }
}

export function saveState(s: AssessmentState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* storage can be unavailable; progress still works for this visit */
  }
}

export function unitsDone(s: AssessmentState, q: Q): number {
  const v = s.answers[q.index];
  if (v === undefined || v === null) return 0;
  if (q.kind === 'quick') return Object.keys(v as Record<number, number>).length;
  if (q.isOptional) return 1;
  if (v === '') return 0;
  return Array.isArray(v) ? (v.length ? 1 : 0) : 1;
}

export const isComplete = (s: AssessmentState, q: Q) => unitsDone(s, q) >= q.units;
export const canContinue = (s: AssessmentState, q: Q) => Boolean(q.isOptional) || isComplete(s, q);
export const doneUnits = (s: AssessmentState) => Qs.reduce((a, q) => a + unitsDone(s, q), 0);
export const sectionUnits = (s: AssessmentState, si: number) =>
  Qs.filter((q) => q.sectionIndex === si).reduce((a, q) => a + unitsDone(s, q), 0);
export const isSectionDone = (s: AssessmentState, si: number) => s.earned.includes(si);
export const percent = (s: AssessmentState) => Math.round((doneUnits(s) / TOTAL) * 100);
export const level = (s: AssessmentState) => s.earned.length;

export function minutesLeft(s: AssessmentState, si?: number): string {
  const secs = Qs.filter((q) => si === undefined || q.sectionIndex === si).reduce(
    (a, q) =>
      a +
      (q.units - unitsDone(s, q)) *
        (q.kind === 'quick' ? SECONDS_PER_QUICK_ROW : SECONDS_PER_QUESTION),
    0,
  );
  if (secs <= 0) return '0 min';
  if (secs < 60) return '1 min';
  return `${Math.ceil(secs / 60)} min`;
}

/** Answer options for any question kind, as [label, meaning] pairs */
export function optionsFor(q: Q): string[] {
  if (q.kind === 'freq') return FREQ.map((f) => f[0]);
  return q.options ?? [];
}

/** Plain-language meaning of each answer, shown as a tooltip: frequency scales and quick-round legends */
export function meaningsFor(q: Q): (string | undefined)[] {
  if (q.kind === 'freq') return FREQ.map((f) => f[1]);
  if (q.kind === 'quick') return (q.legend ?? []).map((l) => l[1]);
  return [];
}

/** Every row of a quick round set to its "none of these" answer */
export const isAllSet = (s: AssessmentState, q: Q) => {
  const a = (s.answers[q.index] ?? {}) as Record<number, number>;
  return (q.rows ?? []).every((_, r) => a[r] === q.allIndex);
};

/* Health discoveries */
function helpers(s: AssessmentState): FactHelpers {
  const findQ = (t: string) => Qs.find((q) => q.kind !== 'quick' && q.title.includes(t));
  const A = (t: string) => {
    const q = findQ(t);
    const v = q ? s.answers[q.index] : undefined;
    return typeof v === 'number' ? v : Number.NaN;
  };
  const AQ = (t: string) => {
    for (const q of Qs) {
      if (q.kind !== 'quick') continue;
      const r = (q.rows ?? []).findIndex((x) => x.includes(t));
      if (r >= 0) {
        const v = ((s.answers[q.index] ?? {}) as Record<number, number>)[r];
        return typeof v === 'number' ? v : Number.NaN;
      }
    }
    return Number.NaN;
  };
  const optIs = (t: string, ...labels: string[]) => {
    const q = findQ(t);
    const v = q ? s.answers[q.index] : undefined;
    return typeof v === 'number' && !!q && labels.includes(optionsFor(q)[v]);
  };
  return { answers: s.answers, questions: Qs, findQ, A, AQ, optIs };
}

export function pickFact(s: AssessmentState, si: number): FactRecord {
  const lib = FACTS[SEC[si].id];
  const seen = new Set(s.facts.map((f) => f.id));
  const h = helpers(s);
  const ok = (f: (typeof lib)[number]) => {
    try {
      return Boolean(f.when?.(h));
    } catch {
      return false;
    }
  };
  const personal = lib.find((f) => f.when && !seen.has(f.id) && ok(f));
  if (personal) return { si, id: personal.id, personal: true };
  return { si, id: (lib.find((f) => !f.when) ?? lib[0]).id, personal: false };
}

export const factById = (id: string) => {
  for (const [sid, list] of Object.entries(FACTS)) {
    const f = list.find((x) => x.id === id);
    if (f) return { ...f, sid };
  }
  return undefined;
};
