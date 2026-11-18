/*
 * Fit check: a few questions after sign-up that decide whether coaching suits someone before the full assessment.
 * The statements reuse the client document's "Who coaching is for, and who it isn't" table and the Home "Is this for you?" list.
 */

export type FitOutcome = 'fit' | 'not-fit' | 'urgent';

export type FitOption = {
  id: string;
  label: string;
  hint?: string;
  /** How this answer affects suitability. Answers without an outcome are context for the coach only. */
  outcome?: FitOutcome;
};

export type FitQuestion = {
  id: string;
  kicker: string;
  title: string;
  help?: string;
  kind: 'single' | 'multi';
  /** Multi-select limit */
  max?: number;
  options: FitOption[];
};

export const fitCheck = {
  eyebrow: 'Fit check',
  intro: {
    title: 'Is coaching right for you?',
    body: 'Six short questions help us see whether one-to-one coaching fits what you need right now. It takes about two minutes, and you can skip it and come back later.',
    points: [
      { icon: 'i-list-checks', label: '6 questions' },
      { icon: 'i-clock', label: 'About 2 minutes' },
      { icon: 'i-check-circle', label: 'Saved as you go' },
    ],
    start: 'Start the fit check',
    skip: 'Skip for now',
  },
  panel: {
    title: 'What we’ll ask',
    saved: 'Your answers are saved as you go. Skip now and pick up later from your account.',
  },
  questions: [
    {
      id: 'concern',
      kicker: 'Your health',
      title: 'What would you most like help with?',
      help: 'Choose up to three.',
      kind: 'multi',
      max: 3,
      options: [
        { id: 'energy', label: 'Energy and fatigue' },
        { id: 'sleep', label: 'Sleep' },
        { id: 'focus', label: 'Focus and brain fog' },
        { id: 'gut', label: 'Gut and digestion' },
        { id: 'hormones', label: 'Hormones' },
        { id: 'body', label: 'Weight and body composition' },
        { id: 'stress', label: 'Stress and resilience' },
        { id: 'other', label: 'Something else' },
      ],
    },
    {
      id: 'urgent',
      kicker: 'Your situation',
      title: 'Do you need urgent medical attention right now?',
      help: 'Coaching does not replace your doctor. Anything urgent should go to your own doctor or emergency services.',
      kind: 'single',
      options: [
        {
          id: 'no',
          label: 'No',
          hint: 'I’m feeling unwell and want my sleep, stress, food and lab results looked at together.',
          outcome: 'fit',
        },
        { id: 'yes', label: 'Yes', hint: 'I need urgent medical attention.', outcome: 'urgent' },
      ],
    },
    {
      id: 'tried',
      kicker: 'What you’ve tried',
      title: 'What have you already tried?',
      help: 'Choose all that apply.',
      kind: 'multi',
      options: [
        { id: 'doctors', label: 'Doctors or specialists' },
        { id: 'programs', label: 'Programs or protocols' },
        { id: 'supplements', label: 'Supplements' },
        { id: 'tests', label: 'Lab tests that came back “normal”' },
        { id: 'tracking', label: 'Tracking my own data' },
        { id: 'nothing', label: 'Nothing yet' },
      ],
    },
    {
      id: 'support',
      kicker: 'How you want support',
      title: 'What kind of support are you looking for?',
      kind: 'single',
      options: [
        { id: 'weekly', label: 'Weekly sessions over months', outcome: 'fit' },
        {
          id: 'quick',
          label: 'A quick fix or a single review at one point in time',
          outcome: 'not-fit',
        },
      ],
    },
    {
      id: 'decides',
      kicker: 'Who decides',
      title: 'How do you want to make decisions about your health?',
      kind: 'single',
      options: [
        {
          id: 'me',
          label: 'I want to make the decisions, using guidance based on my own data',
          outcome: 'fit',
        },
        {
          id: 'told',
          label: 'I’d rather be handed a fixed set of instructions',
          outcome: 'not-fit',
        },
      ],
    },
    {
      id: 'commit',
      kicker: 'What coaching asks of you',
      title:
        'Coaching asks for time, money and emotional energy over months. Are you ready to give all three?',
      help: 'Most clients work with us for at least 3 to 6 months.',
      kind: 'single',
      options: [
        { id: 'ready', label: 'Yes, I’m ready to commit to real change', outcome: 'fit' },
        {
          id: 'unsure',
          label: 'I’m not sure yet',
          hint: 'The suitability consultation is a chance to ask your own questions.',
          outcome: 'fit',
        },
        { id: 'later', label: 'Not right now', outcome: 'not-fit' },
      ],
    },
  ] satisfies FitQuestion[],
  nav: {
    back: 'Back',
    next: 'Continue',
    finish: 'See my result',
    skip: 'Skip for now',
    saved: 'Progress saved',
    question: (n: number, total: number) => `Question ${n} of ${total}`,
  },
  results: {
    fit: {
      eyebrow: 'You look like a good fit',
      title: 'Coaching looks right for you',
      body: 'Your next step is the health assessment. It builds the full picture your coach works from: nine short sections on energy, sleep, diet, stress, hormones and more.',
      nextTitle: 'What happens next',
      points: [
        'Nine sections, one at a time',
        'Pause any time, your answers are saved',
        'Reviewed before your first call',
      ],
      primary: 'Start my health assessment',
      secondary: 'Go to my account',
    },
    'not-fit': {
      eyebrow: 'Thank you for your answers',
      title: 'Coaching may not be the right fit right now',
      body: 'Coaching works best for people who want weekly sessions over months and want to make the decisions themselves. Based on your answers, it may not suit what you need at the moment.',
      reasons: {
        quick: 'You’re looking for a quick fix or a single review.',
        told: 'You’d rather be handed a fixed set of instructions.',
        later: 'Now isn’t the right time to commit.',
      } as Record<string, string>,
      alternativesTitle: 'Other ways to start',
      alternatives: [
        {
          label: 'Read the first chapter of Responsive Living free',
          href: '/responsive-living#chapter',
        },
        { label: 'Write to the team with a question', href: '/contact' },
      ],
      primary: 'Change my answers',
      secondary: 'Go to my account',
    },
    urgent: {
      eyebrow: 'Your health comes first',
      title: 'Please get medical help first',
      body: 'Coaching is not a substitute for medical diagnosis or treatment. Anything urgent should go to your own doctor or emergency services. When you’re ready, you can come back and retake the fit check.',
      primary: 'Change my answers',
      secondary: 'Go to my account',
    },
  },
};

/** Works out the fit check result from the answers */
export function fitOutcome(answers: Record<string, string[]>): {
  outcome: FitOutcome;
  reasons: string[];
} {
  const reasons: string[] = [];
  let outcome: FitOutcome = 'fit';
  const questions: FitQuestion[] = fitCheck.questions;
  for (const q of questions) {
    for (const id of answers[q.id] ?? []) {
      const o = q.options.find((x) => x.id === id)?.outcome;
      if (o === 'urgent') return { outcome: 'urgent', reasons: [] };
      if (o === 'not-fit') {
        outcome = 'not-fit';
        reasons.push(id);
      }
    }
  }
  return { outcome, reasons };
}
