/* Guided tour of the health assessment screen, as on the Autonomic Wellness questionnaire. Each step points at one control. */
export type TourStep = {
  /** CSS selector of the element to highlight; the first match that is visible is used */
  target: string;
  title: string;
  body: string;
  tip?: string;
};

export const assessmentTour = {
  storageKey: 'ac-assessment-tour:v1',
  open: 'Take a tour of the questionnaire',
  step: (n: number, total: number) => `Step ${n} of ${total}`,
  skip: 'Skip tour',
  back: 'Back',
  next: 'Next',
  done: 'Done',
  close: 'Close the tour',
  steps: [
    {
      target: '.segs',
      title: 'Your journey, section by section',
      body: 'Each bar is a section, and your creature rides along the one you’re in. The faded creatures show the stage each section unlocks. Tap a section you’ve already reached to go straight back to it.',
    },
    {
      target: '#xpPill',
      title: 'A leaf for every answer',
      body: 'Every answer is a leaf that feeds your creature. Finish a section and it grows a stage, from egg all the way to butterfly. Open the menu to see your life stages and the health discoveries you’ve collected.',
    },
    {
      target: '#quick, .qz .opts',
      title: 'Pick what fits you',
      body: 'There are no right or wrong answers, just yours. Some screens are a quick round of short questions: answer every row for two bonus leaves. Hover an answer to see what it means.',
      tip: 'Keyboard tip: press 1 to 9 to pick an option, then Enter to continue.',
    },
    {
      target: '#cue',
      title: 'Why we ask',
      body: 'This card explains why a question matters, or what the short answers in a quick round mean.',
    },
    {
      target: '.qrow',
      title: 'Move back and forth',
      body: 'Use the arrows to go back and change an earlier answer, or to move on from a question you’ve already answered.',
    },
    {
      target: '#jumpBtn',
      title: 'Jump to any question',
      body: 'Open the question map to go straight to any question you’ve reached. Answered ones are green, and the arrows switch sections.',
    },
    {
      target: '.bar .tools',
      title: 'Make it comfortable',
      body: 'Turn on larger text, or switch the sound effects on and off. We’ll remember your choice.',
    },
    {
      target: '#nextBtn',
      title: 'Continue when you’re ready',
      body: 'Continue lights up once you’ve answered. Finishing a section unlocks your creature’s next stage and a health discovery. On the final question, Finish sends your answers to your coach.',
    },
    {
      target: '.bar .save',
      title: 'Take a break anytime',
      body: 'Save your answers and come back later. Your leaves and stages are kept, and you’ll pick up right where you left off.',
    },
    {
      target: '#tourBtn',
      title: 'Replay this tour',
      body: 'Tap the help icon whenever you’d like a refresher.',
    },
  ] satisfies TourStep[],
};
