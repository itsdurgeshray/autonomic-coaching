/* Leaf flights: every answer sends leaves from the tapped card to the caterpillar on the progress bar */
export const LEAF_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20C4 9.5 10.5 4 20.5 3.5C20.5 14 14.5 20 4 20Z" fill="#7cc46a"/><path d="M4 20C4 9.5 10.5 4 20.5 3.5C16 8 11 12 4 20Z" fill="#9ad486"/><path d="M5.5 18.5 15.5 8.5" stroke="#3f8a3a" stroke-width="1.3" stroke-linecap="round" fill="none"/></svg>';

export const leafWord = (n: number) => (n === 1 ? 'leaf' : 'leaves');

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function target(): { x: number; y: number } {
  const r = document.getElementById('rider');
  const p = document.getElementById('xpPill');
  const el = r && r.getBoundingClientRect().width ? r : p;
  if (!el) return { x: window.innerWidth - 90, y: 24 };
  const b = el.getBoundingClientRect();
  return { x: b.left + b.width / 2, y: b.top + b.height * (el === r ? 0.55 : 0.5) };
}

/** Animates `amount` leaves from (x, y); onArrive is called with each share as it lands */
export function fly(
  amount: number,
  x: number,
  y: number,
  onArrive: (share: number, k: number) => void,
  pieces?: number,
) {
  if (!amount) return;
  const n = Math.min(8, pieces ?? amount);
  const lab = document.createElement('span');
  lab.className = 'xpf';
  lab.textContent = `+${amount} ${leafWord(amount)}`;
  lab.style.left = `${x}px`;
  lab.style.top = `${y}px`;
  document.body.appendChild(lab);
  window.setTimeout(() => lab.remove(), 1000);
  if (reduced() || !Element.prototype.animate) {
    window.setTimeout(() => onArrive(amount, 0), 300);
    return;
  }
  for (let k = 0; k < n; k++) {
    const share = Math.floor(amount / n) + (k < amount % n ? 1 : 0);
    window.setTimeout(
      () => {
        const { x: tx, y: ty } = target();
        const c = document.createElement('i');
        c.className = 'leafp';
        c.innerHTML = LEAF_SVG;
        document.body.appendChild(c);
        const ang = Math.random() * Math.PI * 2;
        const rad = 16 + Math.random() * 24;
        const bx = x + Math.cos(ang) * rad;
        const by = y + Math.sin(ang) * rad * 0.7 - 14;
        const cx = bx + (tx - bx) * 0.2 + (k % 2 ? 1 : -1) * (70 + Math.random() * 110);
        const cy = ty + (by - ty) * 0.4;
        const spin = (k % 2 ? 1 : -1) * (240 + Math.random() * 200);
        const frames: Keyframe[] = [
          { transform: `translate(${x}px,${y}px) rotate(0) scale(.3)`, opacity: 0, offset: 0 },
          {
            transform: `translate(${bx}px,${by}px) rotate(${spin * 0.1}deg) scale(1.1)`,
            opacity: 1,
            offset: 0.16,
          },
        ];
        for (let s = 1; s <= 10; s++) {
          const t = s / 10;
          const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          const u = 1 - e;
          frames.push({
            transform: `translate(${u * u * bx + 2 * u * e * cx + e * e * tx}px,${u * u * by + 2 * u * e * cy + e * e * ty}px) rotate(${spin * (0.1 + 0.9 * e)}deg) scale(${1.1 - 0.6 * e})`,
            opacity: s === 10 ? 0.2 : 1,
            offset: 0.16 + 0.84 * t,
          });
        }
        let isDone = false;
        const fin = () => {
          if (isDone) return;
          isDone = true;
          c.remove();
          onArrive(share, k);
        };
        c.animate(frames, {
          duration: 900 + Math.random() * 160,
          easing: 'linear',
          fill: 'forwards',
        }).onfinish = fin;
        window.setTimeout(fin, 1500);
      },
      160 + k * 70,
    );
  }
}

export function flyFrom(
  el: Element | null,
  amount: number,
  onArrive: (share: number, k: number) => void,
  pieces?: number,
  mode: 'right' | 'center' = 'right',
) {
  if (!el || !amount) return;
  const r = el.getBoundingClientRect();
  fly(
    amount,
    mode === 'right' ? r.right - 72 : r.left + r.width / 2,
    mode === 'right' ? r.top + r.height / 2 : r.top + 6,
    onArrive,
    pieces,
  );
}

/** Restarts a CSS animation class on an element */
export function retrigger(id: string, cls: string, remove: string[] = []) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove(cls, ...remove);
  void el.offsetWidth;
  el.classList.add(cls);
}
