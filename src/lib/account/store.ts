'use client';

import { useSyncExternalStore } from 'react';
import type { AccountState, IntakeState, Profile, Session } from '@/lib/account/types';

/* Prototype persistence: one record per browser. Swap these two functions for API calls when the backend exists. */
const KEY = 'ac-account';

export const blankIntake = (): IntakeState => ({
  status: 'not-started',
  answers: {},
  step: 0,
  attempts: 0,
});
const blank = (): AccountState => ({ session: null, profile: null, intake: blankIntake() });

let state: AccountState = blank();
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...blank(), ...(JSON.parse(raw) as AccountState) };
  } catch {
    state = blank();
  }
}

function commit(next: AccountState) {
  state = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage can be unavailable in private windows; the session still works until reload */
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  load();
  listeners.add(l);
  return () => listeners.delete(l);
}

const SERVER: AccountState & { isReady: false } = { ...blank(), isReady: false };
let snapshot: AccountState & { isReady: boolean } = { ...state, isReady: false };
function getSnapshot() {
  load();
  if (
    snapshot.session !== state.session ||
    snapshot.profile !== state.profile ||
    snapshot.intake !== state.intake ||
    !snapshot.isReady
  ) {
    snapshot = { ...state, isReady: true };
  }
  return snapshot;
}

/** Account state for client components. isReady is false during server render and the first paint. */
export function useAccount() {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER);
}

export const accountActions = {
  signIn(session: Session) {
    commit({ ...state, session });
  },
  signOut() {
    commit({ ...state, session: null });
  },
  saveProfile(profile: Profile) {
    commit({ ...state, profile });
  },
  saveIntake(patch: Partial<IntakeState>) {
    commit({ ...state, intake: { ...state.intake, ...patch } });
  },
  restartIntake() {
    commit({ ...state, intake: { ...blankIntake(), attempts: state.intake.attempts } });
  },
};

/** Where a signed-in person should land next */
export function nextRoute(s: AccountState): string {
  if (!s.session) return '/login';
  if (!s.profile) return '/onboarding/profile';
  if (s.intake.status === 'not-started' || s.intake.status === 'in-progress')
    return '/onboarding/fit-check';
  return '/account';
}
