import { STAGES } from '@/content/assessment';
import {
  STORAGE_KEY,
  TOTAL,
  doneUnits,
  level,
  percent,
  type AssessmentState,
  blankState,
} from '@/lib/assessment/model';

export type AssessmentSummary = {
  answered: number;
  total: number;
  percent: number;
  stage: number;
  stageName: string;
  isComplete: boolean;
};

/** Progress for the account page, read from the saved assessment */
export function readAssessmentSummary(): AssessmentSummary | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s: AssessmentState = { ...blankState(), ...(JSON.parse(raw) as AssessmentState) };
    const stage = Math.min(level(s), STAGES.length - 1);
    return {
      answered: doneUnits(s),
      total: TOTAL,
      percent: percent(s),
      stage,
      stageName: STAGES[stage].name,
      isComplete: s.earned.length === 9,
    };
  } catch {
    return null;
  }
}
