'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AssessmentDrawer, type DrawerKind } from '@/components/assessment/AssessmentDrawer';
import { AssessmentHeader } from '@/components/assessment/AssessmentHeader';
import { BottomBar } from '@/components/assessment/BottomBar';
import { CompletePanel, IntroPanel, SavedPanel } from '@/components/assessment/InfoPanels';
import { JumpPanel } from '@/components/assessment/JumpPanel';
import { QuestionScreen } from '@/components/assessment/QuestionScreen';
import { RewardOverlay } from '@/components/assessment/RewardOverlay';
import { Worlds } from '@/components/assessment/Worlds';
import { FINAL_THEME, STAGES, THEMES } from '@/content/assessment';
import { LEAF_SVG, flyFrom, retrigger } from '@/lib/assessment/fx';
import {
  LEAF_PER_ANSWER,
  QUICK_ROUND_BONUS,
  Qs,
  SEC,
  blankState,
  canContinue,
  isComplete,
  isSectionDone,
  level,
  loadState,
  optionsFor,
  pickFact,
  saveState,
  unitsDone,
  type AnswerValue,
  type AssessmentState,
} from '@/lib/assessment/model';
import { setSoundOn, sfx } from '@/lib/assessment/sound';

const PREFS = { text: 'ac-assessment-large-text', sound: 'ac-assessment-sound' };
const readPref = (k: string, fallback: boolean) => {
  try {
    const v = window.localStorage.getItem(k);
    return v === null ? fallback : v === '1';
  } catch {
    return fallback;
  }
};
const writePref = (k: string, v: boolean) => {
  try {
    window.localStorage.setItem(k, v ? '1' : '0');
  } catch {
    /* preference only lasts this visit */
  }
};

/** The gamified health assessment: one question at a time, leaves for answers, a new life stage for every section */
export function AssessmentApp() {
  /* Mounted only on the client (behind RequireSession), so saved progress can be read on first render */
  const [s, setS] = useState<AssessmentState>(loadState);
  const sRef = useRef(s);
  const [shownLeaves, setShownLeaves] = useState(s.leaves);
  const [term, setTerm] = useState<{ index: number; key: string } | null>(null);
  const [drawer, setDrawer] = useState<DrawerKind>(null);
  const [tab, setTab] = useState<'stages' | 'facts'>('stages');
  const [openSection, setOpenSection] = useState(0);
  const [jump, setJump] = useState<{ isOpen: boolean; section: number }>({
    isOpen: false,
    section: 0,
  });
  const [isLargeText, setIsLargeText] = useState(() => readPref(PREFS.text, false));
  const [isSound, setIsSound] = useState(() => readPref(PREFS.sound, true));
  const [isSoft, setIsSoft] = useState(false);
  const [reward, setReward] = useState<{ section: number; stage: number; factId: string } | null>(
    null,
  );
  const [toast, setToast] = useState<{ text: string; bonus?: string; key: number } | null>(null);
  const [announce, setAnnounce] = useState('');
  const isBusy = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const focusQ = useRef(false);

  const update = useCallback((fn: (prev: AssessmentState) => AssessmentState) => {
    const next = fn(sRef.current);
    sRef.current = next;
    saveState(next);
    setS(next);
  }, []);

  useEffect(() => setSoundOn(isSound), [isSound]);

  const q = Qs[s.idx];
  /* A tapped term opens its cue card for the current question only */
  const openTerm = term && term.index === q.index ? term.key : null;
  useEffect(() => {
    if (focusQ.current && s.screen === 'q') {
      focusQ.current = false;
      requestAnimationFrame(() => titleRef.current?.focus({ preventScroll: true }));
    }
  });

  /* Clicking anywhere outside the jump panel closes it */
  useEffect(() => {
    if (!jump.isOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('#jpop, #jumpBtn'))
        setJump((j) => ({ ...j, isOpen: false }));
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [jump.isOpen]);

  /* Header height feeds the layout, like the original --hdr-h */
  useLayoutEffect(() => {
    const top = rootRef.current?.querySelector<HTMLElement>('#top');
    if (!top) return;
    const set = () => rootRef.current?.style.setProperty('--hdr-h', `${top.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(top);
    return () => ro.disconnect();
  }, [s.screen]);

  const say = useCallback((m: string) => {
    setAnnounce('');
    window.setTimeout(() => setAnnounce(m), 60);
  }, []);

  function showToast(text: string, bonus?: string, ms = 2400) {
    const key = Date.now();
    setToast({ text, bonus, key });
    window.setTimeout(() => setToast((t) => (t && t.key === key ? null : t)), ms);
  }

  const arrive = (share: number, k: number) => {
    setShownLeaves((n) => n + share);
    retrigger('xpPill', 'hit');
    retrigger('rider', 'eat', ['hop']);
    if (k < 3) sfx.munch();
  };

  function grant(prev: AssessmentState, key: string, amount: number): [AssessmentState, number] {
    if (prev.got[key]) return [prev, 0];
    return [{ ...prev, got: { ...prev.got, [key]: 1 }, leaves: prev.leaves + amount }, amount];
  }

  function coach() {
    if (sRef.current.coached) return;
    update((p) => ({ ...p, coached: true }));
    window.setTimeout(
      () =>
        showToast(
          `Every answer is a leaf that helps your ${STAGES[level(sRef.current)].name.toLowerCase()} grow`,
          undefined,
          4200,
        ),
      700,
    );
  }

  function setAnswer(v: number, el: HTMLElement) {
    const cur = sRef.current;
    let value: AnswerValue = v;
    if (q.kind === 'multi') {
      let a = Array.isArray(cur.answers[q.index]) ? [...(cur.answers[q.index] as number[])] : [];
      const none = optionsFor(q).findIndex((o) => /^(None|Nothing|No particular)/.test(o));
      if (a.includes(v)) a = a.filter((x) => x !== v);
      else if (v === none) a = [v];
      else a = [...a.filter((x) => x !== none), v];
      value = a;
    }
    let next: AssessmentState = { ...cur, answers: { ...cur.answers, [q.index]: value } };
    let g = 0;
    if (unitsDone(next, q)) [next, g] = grant(next, String(q.index), LEAF_PER_ANSWER);
    sfx.tap();
    update(() => next);
    if (g) {
      flyFrom(el, g, arrive);
      coach();
    }
  }

  function mission(next: AssessmentState) {
    if (Object.keys((next.answers[q.index] ?? {}) as object).length < q.units) return next;
    const [after, g] = grant(next, `m${q.index}`, QUICK_ROUND_BONUS);
    if (!g) return next;
    say(`Quick round complete, ${g} bonus leaves.`);
    window.setTimeout(() => {
      showToast('Quick round complete', `+${g} bonus leaves`);
      flyFrom(document.getElementById('quick'), g, arrive, g, 'center');
    }, 650);
    return after;
  }

  function setRow(r: number, j: number, el: HTMLElement) {
    const cur = sRef.current;
    let next: AssessmentState = {
      ...cur,
      answers: {
        ...cur.answers,
        [q.index]: { ...((cur.answers[q.index] ?? {}) as Record<number, number>), [r]: j },
      },
    };
    let g = 0;
    [next, g] = grant(next, `${q.index}:${r}`, LEAF_PER_ANSWER);
    sfx.tap();
    next = mission(next);
    update(() => next);
    if (g) {
      flyFrom(el, g, arrive);
      coach();
    }
    const a = next.answers[q.index] as Record<number, number>;
    const nx = (q.rows ?? []).findIndex((_, k) => k > r && a[k] === undefined);
    if (nx >= 0) {
      const row = document.querySelector(`.qk-q[data-row="${nx}"]`);
      if (row && row.getBoundingClientRect().bottom > window.innerHeight - 120)
        row.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function setAll(el: HTMLElement) {
    const cur = sRef.current;
    const a: Record<number, number> = {
      ...((cur.answers[q.index] ?? {}) as Record<number, number>),
    };
    let next: AssessmentState = cur;
    let total = 0;
    (q.rows ?? []).forEach((_, r) => {
      a[r] = q.allIndex ?? 0;
      let g = 0;
      [next, g] = grant(next, `${q.index}:${r}`, LEAF_PER_ANSWER);
      total += g;
    });
    next = mission({ ...next, answers: { ...next.answers, [q.index]: a } });
    sfx.tap();
    update(() => next);
    if (total) {
      flyFrom(el, total, arrive);
      coach();
    }
  }

  function finishSection(si: number) {
    isBusy.current = true;
    const cur = sRef.current;
    const fact = cur.facts.some((f) => f.si === si) ? null : pickFact(cur, si);
    const next: AssessmentState = {
      ...cur,
      earned: [...cur.earned, si],
      pending: si,
      furthest: Math.max(cur.furthest, Math.min(Qs.length - 1, SEC[si].end + 1)),
      facts: fact ? [...cur.facts, fact] : cur.facts,
    };
    update(() => next);
    setIsSoft(true);
    sfx.complete();
    window.setTimeout(() => {
      const rec = next.facts.find((f) => f.si === si);
      setReward({ section: si, stage: level(next), factId: rec?.id ?? '' });
      window.setTimeout(() => (isBusy.current = false), 1600);
    }, 450);
  }

  const cont = useCallback(() => {
    const cur = sRef.current;
    const si = cur.pending;
    if (si == null) return;
    setReward(null);
    setIsSoft(false);
    if (si === SEC.length - 1) {
      update((p) => ({ ...p, pending: null, screen: 'complete' }));
      sfx.badge();
    } else {
      focusQ.current = true;
      update((p) => ({
        ...p,
        pending: null,
        idx: SEC[si].end + 1,
        furthest: Math.max(p.furthest, SEC[si].end + 1),
        screen: 'q',
      }));
    }
    window.scrollTo(0, 0);
  }, [update]);

  function next() {
    if (isBusy.current) return;
    let cur = sRef.current;
    if (q.kind === 'text') {
      const t = textRef.current?.value ?? '';
      let nextS: AssessmentState = { ...cur, answers: { ...cur.answers, [q.index]: t } };
      let g = 0;
      if (t.trim()) [nextS, g] = grant(nextS, String(q.index), LEAF_PER_ANSWER);
      update(() => nextS);
      cur = nextS;
      if (g) flyFrom(textRef.current, g, arrive, 1, 'center');
    }
    if (!canContinue(cur, q)) return;
    const sec = SEC[q.sectionIndex];
    if (
      q.index === sec.end &&
      !isSectionDone(cur, q.sectionIndex) &&
      Qs.filter((x) => x.sectionIndex === q.sectionIndex).every(
        (x) => x.isOptional || isComplete(cur, x),
      )
    ) {
      finishSection(q.sectionIndex);
      return;
    }
    if (q.index === Qs.length - 1) {
      if (cur.earned.length === SEC.length) update((p) => ({ ...p, screen: 'complete' }));
      else openDrawer('jump');
      return;
    }
    focusQ.current = true;
    update((p) => ({ ...p, idx: q.index + 1, furthest: Math.max(p.furthest, q.index + 1) }));
    window.scrollTo(0, 0);
  }

  function back() {
    if (isBusy.current || s.idx === 0) return;
    focusQ.current = true;
    update((p) => ({ ...p, idx: p.idx - 1 }));
    window.scrollTo(0, 0);
  }

  function jumpTo(i: number) {
    focusQ.current = true;
    setDrawer(null);
    setJump((j) => ({ ...j, isOpen: false }));
    update((p) => ({ ...p, idx: i, screen: 'q' }));
    window.scrollTo(0, 0);
  }

  function openDrawer(kind: DrawerKind) {
    if (kind === 'jump')
      setOpenSection(sRef.current.screen === 'q' ? Qs[sRef.current.idx].sectionIndex : 0);
    setJump((j) => ({ ...j, isOpen: false }));
    setDrawer(kind);
  }

  function exitNow() {
    if (isBusy.current) return;
    const cur = sRef.current;
    if (cur.pending != null) {
      const si = cur.pending;
      setReward(null);
      setIsSoft(false);
      if (si >= SEC.length - 1) {
        update((p) => ({ ...p, pending: null, screen: 'complete' }));
        return;
      }
      update((p) => ({
        ...p,
        pending: null,
        idx: SEC[si].end + 1,
        furthest: Math.max(p.furthest, SEC[si].end + 1),
      }));
    }
    if (sRef.current.screen === 'q' && q.kind === 'text') {
      const t = textRef.current?.value ?? '';
      update((p) => ({ ...p, answers: { ...p.answers, [q.index]: t } }));
    }
    setDrawer(null);
    update((p) => ({ ...p, screen: 'saved' }));
    window.scrollTo(0, 0);
  }

  function toggleText() {
    setIsLargeText((v) => {
      writePref(PREFS.text, !v);
      return !v;
    });
  }

  function toggleSound() {
    setIsSound((v) => {
      writePref(PREFS.sound, !v);
      if (!v) sfx.tap();
      return !v;
    });
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && jump.isOpen) return setJump((j) => ({ ...j, isOpen: false }));
      if (e.key === 'Escape' && drawer) return setDrawer(null);
      const t = e.target as HTMLElement;
      if (
        s.screen !== 'q' ||
        drawer ||
        jump.isOpen ||
        isBusy.current ||
        reward ||
        t.tagName === 'TEXTAREA' ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      )
        return;
      if (/^[1-9]$/.test(e.key) && q.kind !== 'quick') {
        const n = Number(e.key);
        if (
          (q.kind === 'freq' && n <= 5) ||
          ((q.kind === 'single' || q.kind === 'multi') && n <= optionsFor(q).length)
        ) {
          const el = document.querySelector<HTMLElement>(`.qz [data-v="${n - 1}"]`);
          if (el) setAnswer(n - 1, el);
        }
      }
      if (e.key === 'Enter' && !t.closest('button')) {
        e.preventDefault();
        next();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const si = s.screen === 'complete' ? SEC.length - 1 : q.sectionIndex;
  const th = s.screen === 'complete' ? FINAL_THEME : THEMES[si];

  return (
    <div
      ref={rootRef}
      className={`aq ${isSoft ? 'soft' : ''} ${isLargeText ? 'lg-text' : ''}`}
      style={{ '--acc': th.accent, '--acc-l': th.light, '--acc-d': th.deep } as React.CSSProperties}
    >
      <Worlds worldId={th.id} seed={s.screen === 'complete' ? 10 : si + 1} />
      <AssessmentHeader s={s} shownLeaves={shownLeaves} onMenu={() => openDrawer('menu')} />
      {s.screen === 'intro' && (
        <IntroPanel
          s={s}
          onStart={() => {
            update((p) => ({ ...p, screen: 'q' }));
            window.scrollTo(0, 0);
          }}
          onResume={() => {
            update((p) => ({ ...p, screen: 'q' }));
            window.scrollTo(0, 0);
          }}
          onRestart={() => {
            setShownLeaves(0);
            update(() => ({ ...blankState(), screen: 'q' }));
          }}
          onResults={() => update((p) => ({ ...p, screen: 'complete' }))}
        />
      )}
      {s.screen === 'saved' && (
        <SavedPanel
          s={s}
          onResume={() => update((p) => ({ ...p, screen: 'q' }))}
          onHome={() => update((p) => ({ ...p, screen: 'intro' }))}
        />
      )}
      {s.screen === 'complete' && (
        <CompletePanel
          s={s}
          onFacts={() => {
            setTab('facts');
            setDrawer('collection');
          }}
          onReview={() => {
            update((p) => ({ ...p, idx: 0, screen: 'q' }));
            openDrawer('jump');
          }}
        />
      )}
      {s.screen === 'q' && (
        <>
          <QuestionScreen
            key={q.index}
            s={s}
            q={q}
            isNew
            openTerm={openTerm}
            titleRef={titleRef}
            textRef={textRef}
            onTerm={(k) =>
              setTerm((t) =>
                t && t.index === q.index && t.key === k ? null : { index: q.index, key: k },
              )
            }
            onAnswer={setAnswer}
            onRow={setRow}
            onAll={setAll}
            onBack={back}
            onNext={next}
          />
          <BottomBar
            isFirst={q.index === 0}
            isLast={q.index === Qs.length - 1}
            canNext={canContinue(s, q)}
            isLargeText={isLargeText}
            isSoundOn={isSound}
            isJumpOpen={jump.isOpen}
            onExit={exitNow}
            onText={toggleText}
            onSound={toggleSound}
            onJump={() => setJump((j) => ({ isOpen: !j.isOpen, section: q.sectionIndex }))}
            onBack={back}
            onNext={next}
          />
        </>
      )}
      <JumpPanel
        s={s}
        isOpen={jump.isOpen && s.screen === 'q'}
        section={jump.section}
        onSection={(n) =>
          setJump({ isOpen: true, section: Math.max(0, Math.min(SEC.length - 1, n)) })
        }
        onJump={jumpTo}
        onClose={() => {
          setJump((j) => ({ ...j, isOpen: false }));
          document.getElementById('jumpBtn')?.focus({ preventScroll: true });
        }}
      />
      <RewardOverlay
        key={reward ? `r${reward.section}` : 'none'}
        section={reward?.section ?? null}
        stage={reward?.stage ?? 0}
        factId={reward?.factId ?? null}
        onContinue={cont}
        onExit={exitNow}
        onAnnounce={say}
      />
      <AssessmentDrawer
        s={s}
        kind={drawer}
        tab={tab}
        openSection={openSection}
        isLargeText={isLargeText}
        isSoundOn={isSound}
        onClose={() => setDrawer(null)}
        onTab={setTab}
        onOpenSection={setOpenSection}
        onJump={jumpTo}
        onJumpPanel={() => {
          setDrawer(null);
          setJump({ isOpen: true, section: q.sectionIndex });
        }}
        onText={toggleText}
        onSound={toggleSound}
        onExit={exitNow}
      />
      <div className={toast ? 'toast show' : 'toast'} role="status" aria-live="polite">
        {toast && (
          <>
            <span className="lf-i" dangerouslySetInnerHTML={{ __html: LEAF_SVG }} />
            {toast.text} {toast.bonus && <b>{toast.bonus}</b>}
          </>
        )}
      </div>
      <div className="sr" aria-live="polite">
        {announce}
      </div>
    </div>
  );
}
