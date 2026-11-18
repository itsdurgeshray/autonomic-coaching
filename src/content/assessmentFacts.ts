/* "Did you know?" health discoveries shown after each section, chosen from the answers. Ported unchanged. */
import type { AnswerValue } from '@/lib/assessment/model';
import type { AssessmentQuestion } from '@/content/assessment';

export type FactHelpers = {
  answers: Record<number, AnswerValue>;
  questions: (AssessmentQuestion & { index: number })[];
  findQ: (t: string) => (AssessmentQuestion & { index: number }) | undefined;
  /** Answer index for a single-answer question, NaN when unanswered */
  A: (t: string) => number;
  /** Answer index for a row inside a quick round, NaN when unanswered */
  AQ: (t: string) => number;
  optIs: (t: string, ...labels: string[]) => boolean;
};

export type Fact = { id: string; t: string; b: string; when?: (h: FactHelpers) => boolean };

export const FACTS: Record<string, Fact[]> = {
  about: [
    {
      id: 'about-normal',
      when: (h) => h.optIs('recent blood tests', 'Yes'),
      t: 'Feeling unwell with normal results is common',
      b: 'Standard blood test ranges are based on population averages. Many people feel unwell while their results sit inside those ranges, which is why your symptoms and history are read alongside the numbers.',
    },
    {
      id: 'about-40s',
      when: (h) => h.optIs('age range', '40 to 44', '45 to 49'),
      t: 'Hormones start shifting in your 40s',
      b: 'Gradual changes in hormones such as oestrogen, progesterone and testosterone often begin in the early to mid 40s, sometimes years before any obvious milestone.',
    },
    {
      id: 'about-60s',
      when: (h) => h.optIs('age range', '60 to 64', '65 to 69', '70 or over'),
      t: 'It is never too late to benefit',
      b: 'Research on healthy ageing shows that better sleep, strength training, good nutrition and staying connected still make a real difference in your 60s, 70s and beyond.',
    },
    {
      id: 'about-hours',
      when: (h) => h.optIs('hours a week do you work', 'Over 55 hours'),
      t: 'Long weeks leave less room to recover',
      b: 'Long working or caring weeks often squeeze sleep and downtime, which can show up as tiredness or poor focus. Seeing how your week is shaped helps your doctor give advice that fits real life.',
    },
    {
      id: 'about-base',
      t: 'Context makes every answer clearer',
      b: 'Your doctor reads each answer against your age, life stage and how you feel today. That context can turn a handful of separate symptoms into one clear picture.',
    },
  ],
  energy: [
    {
      id: 'energy-fog',
      when: (h) => h.A('brain fog') >= 3,
      t: 'Brain fog is common in midlife',
      b: 'Slower thinking or trouble finding words often appears with hormonal change, poor sleep or stress. It is a sign to look deeper, and it often improves once the cause is found.',
    },
    {
      id: 'energy-dip',
      when: (h) => h.A('energy crash') >= 3,
      t: 'The afternoon dip is partly natural',
      b: 'Your body clock creates a natural dip in alertness in the early afternoon. A large or sugary lunch can make that dip feel deeper.',
    },
    {
      id: 'energy-caff',
      when: (h) => h.A('rely on caffeine') >= 3,
      t: 'Caffeine stays with you for hours',
      b: 'It takes around five hours for your body to clear half the caffeine in a drink, so an afternoon coffee can still be working at bedtime.',
    },
    {
      id: 'energy-nap',
      when: (h) => h.AQ('need to nap') >= 3,
      t: 'Short naps work best',
      b: 'A nap of around 20 minutes tends to refresh you without grogginess. Long naps late in the day can make it harder to fall asleep at night.',
    },
    {
      id: 'energy-team',
      t: 'Energy is a team effort',
      b: 'Your thyroid, adrenal glands, blood sugar and sleep all shape how energetic you feel. Looking at them together often explains tiredness better than looking at any one alone.',
    },
  ],
  sleep: [
    {
      id: 'sleep-short',
      when: (h) => h.optIs('hours do you sleep', 'Less than 5 hours', '5 to 6 hours'),
      t: 'Every extra half hour counts',
      b: 'Sleep supports memory, learning and emotional balance. Consistently short sleep can affect many parts of everyday life, and even small, steady gains can help.',
    },
    {
      id: 'sleep-early',
      when: (h) => h.A('between 1am and 4am') >= 3,
      t: 'Waking in the early hours is a useful clue',
      b: 'Regular waking between 1am and 4am can be linked to stress hormones, blood sugar, alcohol or a warm bedroom. It is a helpful pattern for your doctor to know about.',
    },
    {
      id: 'sleep-sweats',
      when: (h) => h.A('night sweats') >= 3,
      t: 'Night sweats can be eased',
      b: 'Night sweats are often linked to hormonal change in midlife, and there are several effective ways to ease them. Your doctor will look at the full picture with you.',
    },
    {
      id: 'sleep-screens',
      when: (h) => h.A('phone, tablet or TV') >= 3,
      t: 'Evening light tells your brain it is daytime',
      b: 'Bright light from screens can delay melatonin, the hormone that helps you feel sleepy. Dimming screens for the last hour before bed can make falling asleep easier.',
    },
    {
      id: 'sleep-clock',
      when: (h) => h.optIs('sleep schedule', 'Irregular', 'Very irregular'),
      t: 'Your body clock loves routine',
      b: 'Going to bed and waking at similar times, even at weekends, keeps your circadian rhythm steady, and many hormones follow that rhythm.',
    },
    {
      id: 'sleep-memory',
      t: 'Sleep files away your day',
      b: 'During deep sleep your brain replays and stores what you learned during the day. Sleep is also when your body repairs and rebalances many hormones.',
    },
  ],
  diet: [
    {
      id: 'diet-veg',
      when: (h) => h.optIs('portions of vegetables', '0 to 1', '2 to 3'),
      t: 'Fibre feeds your friendly gut bacteria',
      b: 'Fibre supports healthy digestion and helps nourish beneficial gut bacteria. Beans, lentils, fruit, vegetables and whole grains are all useful sources.',
    },
    {
      id: 'diet-water',
      when: (h) => h.optIs('glasses of water', '0 to 2 glasses', '3 to 4 glasses'),
      t: 'Thirst can feel like tiredness',
      b: 'Even mild dehydration can affect concentration and energy, and our sense of thirst tends to weaken a little with age. A glass of water with each meal is an easy habit.',
    },
    {
      id: 'diet-drinks',
      when: (h) => h.AQ('sugary or fizzy') >= 2,
      t: 'Sugar in drinks acts fast',
      b: 'Sugar in drinks reaches your bloodstream faster than sugar in whole foods, because there is no fibre to slow it down.',
    },
    {
      id: 'diet-alcohol',
      when: (h) => h.AQ('drink alcohol') >= 2,
      t: 'Alcohol changes the second half of the night',
      b: 'Alcohol can help you drift off, but it often makes sleep lighter and more broken in the early hours.',
    },
    {
      id: 'diet-late',
      when: (h) => h.A('within two hours of going to bed') >= 3,
      t: 'Your gut keeps a body clock too',
      b: 'Digestion slows down in the evening. Leaving a little time between your last meal and bed can make sleep more comfortable, especially if you get reflux.',
    },
    {
      id: 'diet-fibre',
      t: 'Your gut is home to trillions of helpers',
      b: 'Dietary fibre helps nourish the beneficial microorganisms in your gut, which play a part in digestion and immunity.',
    },
  ],
  stress: [
    {
      id: 'stress-connect',
      when: (h) => {
        const v = h.A('feel low, flat');
        return v >= 3 && v <= 4;
      },
      t: 'Connection is good medicine',
      b: 'Time with people you feel at ease with can lower stress and lift wellbeing. If things feel heavy right now, talking to your GP or someone you trust is a strong first step.',
    },
    {
      id: 'stress-breath',
      when: (h) => h.A('hard to switch off') >= 3,
      t: 'A longer out-breath calms your body',
      b: 'Breathing out slowly, for longer than you breathe in, activates the part of your nervous system that helps you rest and digest.',
    },
    {
      id: 'stress-life',
      when: (h) => {
        const q = h.findQ('in the past two years');
        const v = q ? h.answers[q.index] : undefined;
        return (
          !!q &&
          Array.isArray(v) &&
          v.length > 0 &&
          !v.includes((q.options ?? []).indexOf('None of these'))
        );
      },
      t: 'Big changes count, even good ones',
      b: 'Major life events such as retirement, moving home or caring for someone can affect sleep, appetite and energy for months. Recognising them is a helpful first step.',
    },
    {
      id: 'stress-stand',
      when: (h) => h.A('light-headed when you stand') >= 3,
      t: 'Take your time standing up',
      b: 'Feeling light-headed when you stand can relate to blood pressure, fluids or how your adrenal system responds. Rising slowly can help while your doctor looks into it.',
    },
    {
      id: 'stress-body',
      t: 'Stress is felt in the whole body',
      b: 'Your adrenal glands release cortisol to help you rise to a challenge, which is useful in short bursts. Over long periods, stress can influence sleep, concentration and physical wellbeing.',
    },
  ],
  hormone: [
    {
      id: 'horm-flush',
      when: (h) => h.A('hot flushes') >= 3,
      t: 'Hot flushes are very common',
      b: 'Most women have hot flushes at some point during the menopause transition, and some men experience them too. There are safe and effective ways to manage them.',
    },
    {
      id: 'horm-cold',
      when: (h) => h.A('unusually cold') >= 3,
      t: 'Your thyroid sets your thermostat',
      b: 'Your thyroid helps control how much heat your body makes. Feeling cold when others are comfortable is one of the clues doctors look at.',
    },
    {
      id: 'horm-joints',
      when: (h) => h.AQ('joint aches') >= 3,
      t: 'Hormones help look after your joints',
      b: 'Oestrogen and testosterone both help maintain joints, muscles and connective tissue, which is one reason aches can appear during hormonal change.',
    },
    {
      id: 'horm-hair',
      when: (h) => h.AQ('thinning hair') >= 3,
      t: 'Hair grows in cycles',
      b: 'Each hair grows for years, rests, then falls out. Hormone and thyroid changes can shift that cycle, and hair often recovers once the cause is addressed.',
    },
    {
      id: 'horm-gradual',
      t: 'Hormones change gradually',
      b: 'Many midlife hormone shifts happen over several years rather than overnight, which is why symptoms can come and go.',
    },
  ],
  metab: [
    {
      id: 'met-family',
      when: (h) => h.AQ('family have diabetes') === 0,
      t: 'Family history gives you a head start',
      b: 'Knowing diabetes runs in your family means you and your doctor can check earlier. Healthy lifestyle changes can greatly lower the risk of type 2 diabetes, even with a family history.',
    },
    {
      id: 'met-walk',
      when: (h) => h.A('sleepy after meals') >= 3,
      t: 'A short walk after meals helps',
      b: 'Even 10 to 15 minutes of gentle walking after eating can help soften the rise in blood sugar that follows a meal.',
    },
    {
      id: 'met-waist',
      when: (h) => h.optIs('waist measurement', 'Yes, a lot', 'A little'),
      t: 'Where the body stores fat matters',
      b: 'Fat stored around the waist is more closely linked to metabolic health than overall weight, and it tends to respond well to changes in activity, sleep and diet.',
    },
    {
      id: 'met-weight',
      when: (h) => h.A('hard to lose weight') >= 3,
      t: 'Weight is about more than willpower',
      b: 'Hormones, sleep, stress and some medicines all influence appetite and how the body stores energy. That is why a personal plan often works better than a general one.',
    },
    {
      id: 'met-muscle',
      t: 'Your muscles manage blood sugar',
      b: 'Muscles take up a large share of the sugar from each meal. Staying active and keeping muscle strong helps your body handle blood sugar well.',
    },
  ],
  life: [
    {
      id: 'life-move',
      when: (h) => h.optIs('active for 30 minutes', '0 days', '1 to 2 days'),
      t: 'Every bit of movement counts',
      b: 'Even moderate activity can support heart health. Walking, gardening, cycling and other everyday activities all count towards your weekly movement.',
    },
    {
      id: 'life-strength',
      when: (h) => h.optIs('resistance training', 'Never', 'Occasionally'),
      t: 'Strength keeps you independent',
      b: 'Muscle-strengthening activity supports bone and muscle health as you age. Two sessions a week is a common goal, and body-weight moves count.',
    },
    {
      id: 'life-sit',
      when: (h) => h.optIs('spend sitting', '6 to 9', 'More than 9'),
      t: 'Break up long spells of sitting',
      b: 'Standing or moving for a few minutes every half hour can help your circulation and blood sugar, even if you are active at other times.',
    },
    {
      id: 'life-light',
      when: (h) => h.A('outdoors in daylight') <= 1,
      t: 'Morning light sets your body clock',
      b: 'Daylight, especially in the morning, helps set your internal clock, which supports better sleep at night.',
    },
    {
      id: 'life-friends',
      when: (h) => h.A('connected to friends') <= 1,
      t: 'Connection is good for health',
      b: 'Strong social connections are linked with better health and longer lives. Small, regular contact counts.',
    },
    {
      id: 'life-heart',
      t: 'Movement is medicine for the heart',
      b: 'Regular physical activity supports heart and metabolic health, and it helps sleep, mood and balance too.',
    },
  ],
  history: [
    {
      id: 'hist-supp',
      when: (h) => {
        const q = h.questions.find(
          (x) => x.kind === 'quick' && (x.rows ?? []).some((r) => r.includes('vitamin D')),
        );
        const v = q ? h.answers[q.index] : undefined;
        return (
          !!v && typeof v === 'object' && !Array.isArray(v) && Object.values(v).some((n) => n > 0)
        );
      },
      t: 'Supplements can interact with medicines',
      b: 'Some supplements can change how medicines work. Sharing everything you take, even vitamins, helps your doctor plan safely.',
    },
    {
      id: 'hist-family',
      when: (h) => h.AQ('endocrine') === 0,
      t: 'Family history is useful information',
      b: 'Family history can help identify certain inherited health risks, so the right checks can happen sooner.',
    },
    {
      id: 'hist-check',
      when: (h) => h.optIs('full health check', 'More than 3 years ago', 'Never'),
      t: 'Many conditions start quietly',
      b: 'Raised blood sugar or blood pressure often cause no symptoms at first. Regular checks help spot them early, when they are easiest to manage.',
    },
    {
      id: 'hist-list',
      t: 'Your medicine list is a safety tool',
      b: 'Keeping an accurate list of your medicines and supplements helps reduce the risk of medication-related errors. Bring it to every appointment.',
    },
  ],
};
