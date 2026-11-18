/* Optional sound effects, synthesised with Web Audio so there are no audio files to load */
let ctx: AudioContext | null = null;
let isOn = true;
let combo = 0;
let comboTimer = 0;

export function setSoundOn(v: boolean) {
  isOn = v;
}

function audio(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const C =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!C) return null;
    ctx = new C();
  }
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function tone(
  a: AudioContext,
  type: OscillatorType,
  f0: number,
  f1: number,
  t0: number,
  dur: number,
  vol: number,
) {
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t0);
  if (f1) o.frequency.exponentialRampToValueAtTime(f1, t0 + dur * 0.6);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(a.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

const play = (f: (a: AudioContext, t: number) => void) => {
  if (!isOn) return;
  const a = audio();
  if (a) f(a, a.currentTime);
};

export const sfx = {
  tap: () =>
    play((a, t) => {
      window.clearTimeout(comboTimer);
      combo = Math.min(combo + 1, 6);
      comboTimer = window.setTimeout(() => (combo = 0), 1400);
      const k = 1 + combo * 0.06 + Math.random() * 0.04;
      tone(a, 'triangle', 420 * k, 1100 * k, t, 0.15, 0.13);
      tone(a, 'sine', 1650 * k, 0, t + 0.06, 0.12, 0.04);
    }),
  munch: () =>
    play((a, t) => {
      tone(a, 'triangle', 300, 190, t, 0.07, 0.07);
      tone(a, 'triangle', 340, 210, t + 0.1, 0.07, 0.06);
    }),
  complete: () =>
    play((a, t) => {
      [392, 523.25, 659.25].forEach((f, j) => tone(a, 'triangle', f, 0, t + j * 0.08, 0.3, 0.1));
      tone(a, 'triangle', 783.99, 0, t + 0.26, 0.6, 0.12);
      tone(a, 'sine', 1567.98, 0, t + 0.26, 0.5, 0.03);
    }),
  flip: () =>
    play((a, t) => {
      tone(a, 'sine', 330, 660, t, 0.35, 0.05);
      tone(a, 'triangle', 880, 0, t + 0.3, 0.25, 0.03);
    }),
  badge: () =>
    play((a, t) => {
      [1046.5, 1174.66, 1318.51, 1567.98, 1760, 2093].forEach((f, j) =>
        tone(a, 'sine', f, 0, t + j * 0.05, 0.4, 0.05),
      );
      tone(a, 'sine', 523.25, 0, t + 0.32, 1.1, 0.1);
      tone(a, 'sine', 523.25 * 2.76, 0, t + 0.32, 0.6, 0.025);
    }),
};
