export const requestCoaching = {
  eyebrow: 'Request Coaching',
  title: 'Request one‑to‑one coaching',
  intro:
    'Coaching is private and by application. Each application is reviewed before a call is booked.',
  steps: [
    'You fill in a short form: your name, email, main health concern, what you’ve tried and your goals.',
    'Your request is reviewed before any call is booked.',
    'If coaching looks right for you, we invite you to a call.',
  ],
  fields: [
    {
      name: 'name',
      label: 'Full name',
      type: 'text',
      autoComplete: 'name',
      placeholder: 'Your name',
      error: 'Please add your name.',
      isWide: false,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      autoComplete: 'email',
      placeholder: 'you@example.com',
      error: 'Please add a valid email address.',
      isWide: false,
    },
    {
      name: 'concern',
      label: 'Main health concern',
      type: 'textarea',
      error: 'Please tell us your main health concern.',
      isWide: true,
    },
    {
      name: 'tried',
      label: 'What you’ve tried',
      type: 'textarea',
      error: 'Please tell us what you’ve tried.',
      isWide: true,
    },
    {
      name: 'goals',
      label: 'Your goals',
      type: 'textarea',
      error: 'Please tell us your goals.',
      isWide: true,
    },
  ],
  submit: 'Request Coaching',
  done: {
    title: 'Thank you. Your request has been received.',
    body: 'Your request is reviewed before any call is booked. If coaching looks right for you, we invite you to a call.',
    close: 'Close',
  },
} as const;
