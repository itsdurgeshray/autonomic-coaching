import type { ImageAsset } from '@/types/content';

const lakeImage: ImageAsset = {
  src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&h=1500&fit=crop&q=80&auto=format',
  alt: 'A person sitting at the end of a wooden pier on a still mountain lake',
  width: 1200,
  height: 1500,
};

export const authCopy = {
  media: lakeImage,
  caption: 'Scientist-led, one-to-one health coaching begins with understanding your situation.',
  title: 'Start your coaching journey',
  intro:
    'Sign in to apply for coaching, check whether it fits you, and pick up your health assessment where you left off.',
  provider: 'Continue with Zoho',
  connecting: 'Connecting to Zoho…',
  consentBefore: 'I agree to the',
  privacy: { label: 'Privacy Policy', href: '/privacy' },
  consentJoin: 'and',
  terms: { label: 'Terms and Conditions', href: '/terms' },
  consentError: 'Please agree to the Privacy Policy and Terms and Conditions to continue.',
  signedInAs: 'You’re signed in as',
  continue: 'Continue',
  signOut: 'Sign out',
};

export const journeySteps = [
  { id: 'profile', label: 'Your profile' },
  { id: 'fit-check', label: 'Fit check' },
  { id: 'assessment', label: 'Health assessment' },
] as const;

export const profileCopy = {
  media: lakeImage,
  caption: 'You don’t need all the answers to begin.',
  title: 'Set up your profile',
  step: 'Step 1 of 3',
  signedInAs: 'You’re signed in as',
  enterDetails: 'Enter a few details for this account or',
  changeAccount: 'use a different account',
  fields: {
    fullName: {
      label: 'Full name',
      placeholder: 'Your full name',
      error: 'Please add your full name.',
    },
    dateOfBirth: { label: 'Date of birth', error: 'Please add your date of birth.' },
    sex: {
      label: 'Sex',
      placeholder: 'Select',
      error: 'Please choose an option.',
      options: [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'other', label: 'Another option' },
        { value: 'prefer-not', label: 'Prefer not to say' },
      ],
    },
    phone: {
      label: 'Phone number',
      placeholder: '82 000 0000',
      codeLabel: 'Country code',
      defaultCode: '+27',
      codes: [
        { code: '+27', label: 'ZA +27' },
        { code: '+44', label: 'UK +44' },
        { code: '+1', label: 'US +1' },
        { code: '+353', label: 'IE +353' },
        { code: '+61', label: 'AU +61' },
        { code: '+64', label: 'NZ +64' },
        { code: '+971', label: 'AE +971' },
        { code: '+91', label: 'IN +91' },
        { code: '+49', label: 'DE +49' },
        { code: '+31', label: 'NL +31' },
      ],
    },
    heightCm: { label: 'Height', unit: 'cm', placeholder: '170' },
    weightKg: { label: 'Weight', unit: 'kg', placeholder: '70' },
    conditions: {
      label: 'Health conditions',
      hint: 'Optional. Type a condition and press Enter or comma.',
      placeholder: 'For example, hypothyroidism',
      remove: 'Remove',
    },
  },
  optional: '(optional)',
  privacyNote: 'Everything you share stays private.',
  errorSummary: 'Please check the highlighted fields.',
  submit: 'Save and continue',
  signOut: 'Sign out',
};

export const accountCopy = {
  greeting: 'Welcome back',
  help: { label: 'Help', href: '/faq' },
  menu: { profile: 'Your profile', signOut: 'Sign out', openLabel: 'Open account menu' },
  loading: 'Loading your account',
  tiles: [
    { id: 'assessments', icon: 'acc-assessments', title: 'Assessments', href: '/assessment' },
    { id: 'consultations', icon: 'acc-consultations', title: 'Consultations' },
    { id: 'prescription', icon: 'acc-prescription', title: 'Prescriptions' },
    { id: 'orders', icon: 'acc-orders', title: 'Orders' },
  ] as { id: string; icon: string; title: string; href?: string }[],
  /** Areas that open once coaching starts */
  later: 'After your first call',
  upcoming: (n: number) => `(${n} upcoming)`,
  assessmentStatus: {
    notStarted: 'Not started',
    done: (percent: number) => `${percent}% done`,
    complete: 'Complete',
  },
  editTitle: 'Edit profile',
  editIntro: 'Update your personal and health details',
  edit: 'Edit profile',
  save: 'Save profile',
  cancel: 'Cancel',
  saved: 'Your profile has been saved.',
  signOut: 'Sign out',
  email: 'Email',
  none: 'None added',
  notAdded: 'Not added',
};
