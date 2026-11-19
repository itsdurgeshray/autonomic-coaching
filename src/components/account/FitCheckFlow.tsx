'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChoiceList } from '@/components/account/ChoiceList';
import { FitResult } from '@/components/account/FitResult';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Icon, type IconProps } from '@/components/ui/Icon';
import { fitCheck, fitOutcome } from '@/content/fitCheck';
import { accountActions, useAccount } from '@/lib/account/store';
import type { IntakeStatus } from '@/lib/account/types';

const Q = fitCheck.questions;
const OUTCOME_STATUS = {
  fit: 'qualified',
  'not-fit': 'not-fit',
  urgent: 'urgent',
} as const satisfies Record<string, IntakeStatus>;

export function FitCheckFlow() {
  const router = useRouter();
  const { intake } = useAccount();
  const isDone = ['qualified', 'not-fit', 'urgent'].includes(intake.status);
  const [view, setView] = useState<'intro' | 'q' | 'result'>(() =>
    isDone ? 'result' : intake.status === 'in-progress' ? 'q' : 'intro',
  );
  const [step, setStep] = useState(() => Math.min(intake.step, Q.length - 1));
  const [answers, setAnswers] = useState<Record<string, string[]>>(intake.answers);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimer = useRef<number>(0);

  const q = Q[step];
  const picked = answers[q.id] ?? [];
  const canContinue = picked.length > 0;
  const isLast = step === Q.length - 1;

  useEffect(() => {
    if (view === 'q') headingRef.current?.focus({ preventScroll: true });
  }, [step, view]);

  useEffect(() => () => window.clearTimeout(advanceTimer.current), []);

  function persist(nextAnswers: Record<string, string[]>, nextStep: number) {
    accountActions.saveIntake({ status: 'in-progress', answers: nextAnswers, step: nextStep });
  }

  function start() {
    setView('q');
    persist(answers, step);
    window.scrollTo(0, 0);
  }

  function choose(id: string, isPointer: boolean) {
    const cur = answers[q.id] ?? [];
    let next: string[];
    if (q.kind === 'single') next = [id];
    else if (cur.includes(id)) next = cur.filter((x) => x !== id);
    else if (id === 'nothing') next = [id];
    else next = [...cur.filter((x) => x !== 'nothing'), id].slice(-(q.max ?? 99));
    const all = { ...answers, [q.id]: next };
    setAnswers(all);
    persist(all, step);
    /* A tapped single answer moves on by itself, except on the last question, which waits for See my result */
    if (q.kind === 'single' && isPointer && !isLast) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = window.setTimeout(() => goNext(all), 360);
    }
  }

  function goNext(all = answers) {
    if (!(all[q.id] ?? []).length) return;
    window.scrollTo(0, 0);
    if (!isLast) {
      setStep(step + 1);
      persist(all, step + 1);
      return;
    }
    const { outcome } = fitOutcome(all);
    accountActions.saveIntake({
      status: OUTCOME_STATUS[outcome],
      answers: all,
      step: Q.length - 1,
      attempts: intake.attempts + 1,
      completedAt: new Date().toISOString(),
    });
    setView('result');
  }

  function goBack() {
    window.clearTimeout(advanceTimer.current);
    if (step === 0) return setView('intro');
    setStep(step - 1);
    persist(answers, step - 1);
  }

  function skip() {
    accountActions.saveIntake({ status: 'skipped', answers, step });
    router.push('/account');
  }

  function retake() {
    accountActions.restartIntake();
    setAnswers({});
    setStep(0);
    setView('q');
    window.scrollTo(0, 0);
  }

  if (view === 'result') return <FitResult answers={answers} onRetake={retake} />;

  if (view === 'intro') {
    return (
      <section
        aria-labelledby="fit-intro-title"
        className="my-auto flex w-full animate-[rise_.5s_var(--ease)_both] flex-col items-center py-10 text-center lg:py-12"
      >
        <p className="ds-t-12 ds-c-3 ds-num">{fitCheck.step}</p>
        <Heading as="h1" look="page" id="fit-intro-title" className="mt-1">
          {fitCheck.intro.title}
        </Heading>
        <p className="ds-t-14 ds-c-2 mt-2 max-w-[46ch]">{fitCheck.intro.body}</p>
        <ul
          role="list"
          className="ds-t-12 ds-c-2 mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {fitCheck.intro.points.map((p) => (
            <li key={p.label} className="flex items-center gap-1.5">
              <Icon name={p.icon as IconProps['name']} className="ds-ico text-g-700 text-[16px]" />
              {p.label}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto">
          <Button size="xl" isBlock onClick={start} className="sm:min-w-[240px]">
            {fitCheck.intro.start}
          </Button>
          <button type="button" className="ds-link ds-ink ds-t-14" onClick={skip}>
            {fitCheck.intro.skip}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="fit-q-title" className="flex w-full flex-1 flex-col pt-8 lg:pt-10">
      <div className="flex items-center justify-between gap-4">
        <p className="ds-t-12 ds-c-3 ds-num">{fitCheck.nav.question(step + 1, Q.length)}</p>
        <button type="button" className="ds-link ds-ink ds-t-12" onClick={skip}>
          {fitCheck.nav.skip}
        </button>
      </div>
      <span
        className="ds-bar ds-sm mt-2"
        role="progressbar"
        aria-label={fitCheck.nav.progress}
        aria-valuemin={0}
        aria-valuemax={Q.length}
        aria-valuenow={step + (canContinue ? 1 : 0)}
      >
        <i
          style={{
            width: `${((step + (canContinue ? 1 : 0)) / Q.length) * 100}%`,
            transition: 'width .5s var(--ease)',
          }}
        />
      </span>

      <div key={q.id} className="my-auto animate-[rise_.4s_var(--ease)_both] py-8 lg:py-10">
        <Eyebrow>{q.kicker}</Eyebrow>
        <Heading
          as="h1"
          look="page"
          id="fit-q-title"
          ref={headingRef}
          tabIndex={-1}
          className="mt-2 outline-none"
        >
          {q.title}
        </Heading>
        {q.help && <p className="ds-t-14 ds-c-2 mt-2">{q.help}</p>}
        <ChoiceList question={q} selected={picked} onChoose={choose} labelledBy="fit-q-title" />
      </div>

      <div className="bg-page/90 border-line-2 sticky bottom-0 -mx-4 flex items-center justify-between gap-3 border-t px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur-md sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-6 lg:backdrop-blur-none">
        <Button variant="ghost" size="lg" onClick={goBack}>
          <Icon name="i-caret-left" className="ds-ico" />
          {fitCheck.nav.back}
        </Button>
        <Button
          size="lg"
          onClick={() => goNext()}
          disabled={!canContinue}
          className="min-w-[160px]"
        >
          {isLast ? fitCheck.nav.finish : fitCheck.nav.next}
        </Button>
      </div>
    </section>
  );
}
