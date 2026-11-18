/*
 * Health assessment content, ported from the questionnaire build (itsdurgeshray/aw-questionnaire).
 * Questions, cue cards and facts are unchanged. Text in {label|key} braces is a tappable term that opens its cue card.
 */

export type QuestionKind = 'single' | 'multi' | 'freq' | 'quick' | 'text';

export type AssessmentQuestion = {
  section: string;
  title: string;
  kind: QuestionKind;
  options?: string[];
  help?: string;
  isOptional?: boolean;
  /** Quick rounds: several short questions answered on one screen */
  rows?: string[];
  legend?: [string, string][];
  allIndex?: number;
  allLabel?: string;
};

export type AssessmentSection = {
  id: string;
  name: string;
  icon: string;
  insight: string;
  why: string;
};

export const ASSESSMENT_TITLE = 'Adrenal, Pituitary, Thyroid & Endocrine Assessment';
export const ASSESSMENT_SHORT_TITLE = 'Endocrine Health Assessment';

export const SECTIONS: AssessmentSection[] = [
  {
    id: 'about',
    name: 'About You',
    icon: 'user',
    insight: 'Personal baseline',
    why: 'A little background helps your doctor read every other answer in the right context.',
  },
  {
    id: 'energy',
    name: 'Energy & Fatigue',
    icon: 'zap',
    insight: 'Energy pattern',
    why: 'Energy levels often reflect how your thyroid, adrenal glands and blood sugar are working together.',
  },
  {
    id: 'sleep',
    name: 'Sleep & Recovery',
    icon: 'moon',
    insight: 'Sleep & recovery profile',
    why: 'Sleep is when your body repairs and rebalances hormones. Disrupted sleep is often an early signal.',
  },
  {
    id: 'diet',
    name: 'Diet & Digestion',
    icon: 'utensils',
    insight: 'Nutrition & gut snapshot',
    why: 'What and when you eat affects blood sugar, energy, mood and hormone production.',
  },
  {
    id: 'stress',
    name: 'Stress & Mood',
    icon: 'smile',
    insight: 'Stress response map',
    why: 'Long-term stress changes how your adrenal glands release cortisol, which affects almost every system.',
  },
  {
    id: 'hormone',
    name: 'Hormonal Health',
    icon: 'activity',
    insight: 'Hormone balance view',
    why: 'Hormones shift naturally with age. Your symptoms help us see which changes may need attention.',
  },
  {
    id: 'metab',
    name: 'Metabolic Health',
    icon: 'droplet',
    insight: 'Metabolic marker',
    why: 'Metabolic health shapes your long-term risk of diabetes and heart disease, and is very responsive to care.',
  },
  {
    id: 'life',
    name: 'Movement & Lifestyle',
    icon: 'heart',
    insight: 'Lifestyle rhythm',
    why: 'Daily habits are often the most powerful and practical place to start making changes.',
  },
  {
    id: 'history',
    name: 'Medical History',
    icon: 'clipboard',
    insight: 'Clinical history',
    why: 'Your history helps your doctor recommend options that are safe and appropriate for you.',
  },
];

export const SHORT_NAMES: Record<string, string> = {
  about: 'About You',
  energy: 'Energy',
  sleep: 'Sleep',
  diet: 'Diet',
  stress: 'Stress & Mood',
  hormone: 'Hormones',
  metab: 'Metabolic',
  life: 'Lifestyle',
  history: 'History',
};

export const FREQ: [string, string][] = [
  ['Never', 'Not at all'],
  ['Rarely', 'Once a month or less'],
  ['Sometimes', 'A few times a month'],
  ['Often', 'Most weeks'],
  ['Always', 'Every day or nearly every day'],
];

export const CUES: Record<string, [string, string]> = {
  'energy crash': [
    'A sudden drop in energy, often a few hours after eating, that can leave you sleepy, foggy or craving sugar.',
    'It can point to how well your body is managing blood sugar through the day.',
  ],
  'brain fog': [
    'Feeling mentally slow or cloudy, forgetting words, losing your train of thought or struggling to concentrate.',
    'It is common with thyroid changes, poor sleep and hormonal shifts in midlife.',
  ],
  'tired but wired': [
    'Feeling exhausted, yet your mind feels alert or restless when you try to rest or sleep.',
    'This pattern can suggest your stress hormones are active at the wrong time of day.',
  ],
  'circadian rhythm': [
    'Your body’s internal 24-hour clock. It tells you when to feel alert and when to feel sleepy.',
    'Regular timing of light, meals and sleep keeps this clock, and many hormones, on track.',
  ],
  'sleep apnoea': [
    'A condition where breathing repeatedly stops and starts during sleep, often with loud snoring.',
    'It is under-diagnosed, affects energy and blood pressure, and is very treatable.',
  ],
  'night sweats': [
    'Episodes of heavy sweating during sleep that can soak your nightclothes or bedding.',
    'They are often linked to hormonal changes, but can have other causes worth reviewing.',
  ],
  'processed foods': [
    'Foods made in a factory with added sugar, salt, fat or preservatives, such as ready meals, crisps, sweets and many breakfast cereals.',
    'These can affect blood sugar and inflammation more than whole foods.',
  ],
  'blood sugar dip': [
    'When the level of sugar (glucose) in your blood falls lower than your body likes, often between meals.',
    'Shakiness or irritability when hungry can be an early sign of blood sugar imbalance.',
  ],
  bloating: [
    'A feeling of fullness, tightness or swelling in your stomach, sometimes with visible swelling.',
    'Frequent bloating can signal digestive or hormonal factors worth exploring.',
  ],
  reflux: [
    'When stomach acid flows back up into your food pipe, causing a burning feeling in the chest or a sour taste.',
    'It can affect sleep, nutrient absorption and comfort after meals.',
  ],
  palpitations: [
    'Being suddenly aware of your heartbeat, it may feel fast, pounding, fluttering or irregular.',
    'They can be linked to stress, caffeine or thyroid activity. Seek urgent care if you also feel faint or have chest pain.',
  ],
  cortisol: [
    'Your main stress hormone, made by your adrenal glands. It helps you wake up, respond to pressure and control inflammation.',
    'Too much or too little at the wrong times can affect sleep, weight, mood and energy.',
  ],
  'adrenal glands': [
    'Two small glands that sit on top of your kidneys. They make hormones such as cortisol and adrenaline.',
    'They help regulate blood pressure, salt balance and your response to stress.',
  ],
  libido: [
    'Your sex drive, or interest in sexual activity.',
    'Changes are common with age and hormonal shifts. Your answer is confidential and helps your doctor.',
  ],
  'hot flushes': [
    'A sudden feeling of heat in your face, neck or chest, often with redness and sweating.',
    'They are most often linked to changing hormone levels during midlife.',
  ],
  'cold intolerance': [
    'Feeling cold when others are comfortable, especially in your hands and feet.',
    'It can be a sign that your thyroid is working more slowly.',
  ],
  thyroid: [
    'A butterfly-shaped gland at the front of your neck. It controls how quickly your body uses energy, your metabolism.',
    'An underactive or overactive thyroid can affect weight, mood, energy and temperature.',
  ],
  perimenopause: [
    'The years leading up to menopause, when hormone levels begin to fluctuate. It often starts in your 40s.',
    'Symptoms can include irregular periods, hot flushes, poor sleep and mood changes.',
  ],
  andropause: [
    'A gradual fall in testosterone levels in men, usually from around the age of 40.',
    'It can affect energy, strength, mood and sexual health.',
  ],
  'hormone therapy': [
    'Treatment that replaces or balances hormones, such as HRT, testosterone or thyroid medication.',
    'Knowing what you already take helps your doctor plan safely.',
  ],
  HbA1c: [
    'A blood test that shows your average blood sugar level over the past two to three months.',
    'It is commonly used to check for prediabetes and diabetes.',
  ],
  'waist measurement': [
    'The distance around your middle, measured at the level of your belly button.',
    'Fat stored around the waist is more closely linked to metabolic risk than overall weight.',
  ],
  'insulin resistance': [
    'When your body’s cells respond less well to insulin, the hormone that moves sugar from your blood into your cells.',
    'It can develop for years before blood tests look abnormal, and often improves with the right support.',
  ],
  'resistance training': [
    'Exercise that makes your muscles work against a weight or force, such as weights, bands, or body-weight moves like squats.',
    'It protects muscle, bone and blood sugar control as you age.',
  ],
  'autoimmune condition': [
    'A condition where the immune system mistakenly attacks the body’s own tissues, for example Hashimoto’s, rheumatoid arthritis or coeliac disease.',
    'Several autoimmune conditions affect hormone glands directly.',
  ],
  endocrine: [
    'The system of glands that make hormones, including your thyroid, adrenal and pituitary glands, pancreas and ovaries or testes.',
    'Endocrine conditions often run in families.',
  ],
};

export const QUESTIONS: AssessmentQuestion[] = [
  {
    section: 'about',
    title: 'What is your age range?',
    kind: 'single',
    options: ['40 to 44', '45 to 49', '50 to 54', '55 to 59', '60 to 64', '65 to 69', '70 or over'],
  },
  {
    section: 'about',
    title: 'What sex were you assigned at birth?',
    kind: 'single',
    options: ['Female', 'Male', 'Prefer not to say'],
    help: 'This helps us show you the right hormone questions later.',
  },
  {
    section: 'about',
    title: 'How would you describe your overall health right now?',
    kind: 'single',
    options: ['Excellent', 'Good', 'Fair', 'Poor'],
  },
  {
    section: 'about',
    title: 'How has your weight changed in the last 12 months?',
    kind: 'single',
    options: [
      'Gained more than 5 kg',
      'Gained a little',
      'Stayed about the same',
      'Lost a little',
      'Lost more than 5 kg',
    ],
  },
  {
    section: 'about',
    title: 'What would you most like to improve?',
    kind: 'multi',
    options: [
      'More energy',
      'Better sleep',
      'Weight management',
      'Mood and focus',
      'Hormonal balance',
      'Healthy ageing',
      'Something else',
    ],
    help: 'Choose all that apply.',
  },
  {
    section: 'about',
    title: 'How long have you been feeling not quite yourself?',
    kind: 'single',
    options: [
      'Less than 3 months',
      '3 to 12 months',
      '1 to 3 years',
      'More than 3 years',
      'I feel well, I’m just checking',
    ],
  },
  {
    section: 'about',
    title: 'Have recent blood tests come back “normal” even though you don’t feel well?',
    kind: 'single',
    options: ['Yes', 'No', 'I haven’t had recent tests', 'Not sure'],
  },
  {
    section: 'about',
    title: 'How many hours a week do you work, including caring for others?',
    kind: 'single',
    options: [
      'Under 20 hours',
      '20 to 40 hours',
      '40 to 55 hours',
      'Over 55 hours',
      'Retired or not working',
    ],
  },
  {
    section: 'energy',
    title: 'How would you rate your energy on a typical day?',
    kind: 'single',
    options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
  },
  {
    section: 'energy',
    title: 'Do you feel tired even after a full night’s sleep?',
    kind: 'freq',
  },
  {
    section: 'energy',
    title: 'Do you have an {energy crash|energy crash} in the mid-afternoon?',
    kind: 'freq',
  },
  {
    section: 'energy',
    title: 'Do you rely on caffeine or sugar to get through the day?',
    kind: 'freq',
  },
  {
    section: 'energy',
    title: 'Do you experience {brain fog|brain fog}?',
    kind: 'freq',
  },
  {
    section: 'energy',
    title: 'A few quick ones',
    kind: 'quick',
    rows: [
      'Do you feel exhausted after light physical activity?',
      'Do you feel the need to nap during the day?',
      'Do your muscles feel weak or heavy?',
    ],
    legend: [
      ['Never', 'Not at all'],
      ['Rarely', 'Once a month or less'],
      ['Sometimes', 'A few times a month'],
      ['Often', 'Most weeks'],
      ['Always', 'Every day or nearly every day'],
    ],
    allIndex: 0,
    allLabel: 'Never, for all of these',
  },
  {
    section: 'energy',
    title: 'Do you find it hard to get going in the morning?',
    kind: 'freq',
  },
  {
    section: 'energy',
    title: 'Do you feel {tired but wired|tired but wired} in the evening?',
    kind: 'freq',
  },
  {
    section: 'energy',
    title: 'Has your stamina changed compared with five years ago?',
    kind: 'single',
    options: ['Much lower', 'A little lower', 'About the same', 'It has improved'],
  },
  {
    section: 'sleep',
    title: 'On average, how many hours do you sleep per night?',
    kind: 'single',
    options: [
      'Less than 5 hours',
      '5 to 6 hours',
      '6 to 7 hours',
      '7 to 8 hours',
      'More than 8 hours',
    ],
  },
  {
    section: 'sleep',
    title: 'How long does it usually take you to fall asleep?',
    kind: 'single',
    options: ['Less than 15 minutes', '15 to 30 minutes', '30 to 60 minutes', 'More than an hour'],
  },
  {
    section: 'sleep',
    title: 'Do you wake during the night and struggle to fall back asleep?',
    kind: 'freq',
  },
  {
    section: 'sleep',
    title: 'Do you regularly wake between 1am and 4am?',
    kind: 'freq',
  },
  {
    section: 'sleep',
    title: 'Do you wake up feeling refreshed?',
    kind: 'freq',
  },
  {
    section: 'sleep',
    title:
      'Has anyone said you snore loudly or stop breathing during sleep? This can be a sign of {sleep apnoea|sleep apnoea}.',
    kind: 'single',
    options: ['Yes', 'No', 'Not sure', 'I sleep alone'],
  },
  {
    section: 'sleep',
    title: 'Do you experience {night sweats|night sweats}?',
    kind: 'freq',
  },
  {
    section: 'sleep',
    title: 'Do you use a phone, tablet or TV in the hour before bed?',
    kind: 'freq',
  },
  {
    section: 'sleep',
    title:
      'How regular is your sleep schedule, including weekends? This shapes your {circadian rhythm|circadian rhythm}.',
    kind: 'single',
    options: ['Very regular', 'Mostly regular', 'Irregular', 'Very irregular'],
  },
  {
    section: 'sleep',
    title: 'Do you get restless or uncomfortable legs in the evening?',
    kind: 'freq',
  },
  {
    section: 'sleep',
    title: 'How would you rate your overall sleep quality?',
    kind: 'single',
    options: ['Very poor', 'Poor', 'Fair', 'Good', 'Excellent'],
  },
  {
    section: 'diet',
    title: 'How many meals do you eat on a typical day?',
    kind: 'single',
    options: ['1', '2', '3', 'More than 3', 'It varies a lot'],
  },
  {
    section: 'diet',
    title: 'How many portions of vegetables and fruit do you eat each day?',
    kind: 'single',
    options: ['0 to 1', '2 to 3', '4 to 5', '6 or more'],
    help: 'One portion is about a handful.',
  },
  {
    section: 'diet',
    title: 'A few quick ones',
    kind: 'quick',
    rows: [
      'How often do you drink alcohol?',
      'How often do you smoke, vape or use tobacco?',
      'How often do you eat sweets or candy?',
      'How often do you have sugary or fizzy drinks?',
      'How often do you have coffee or energy drinks?',
      'How often do you eat fast food or takeaways?',
      'How often do you eat crisps or other {processed snacks|processed foods}?',
    ],
    legend: [
      ['None', 'Do not consume or use'],
      ['2 to 3 times monthly', 'Consume or use 2 to 3 times monthly'],
      ['Weekly', 'Consume or use weekly'],
      ['Daily', 'Consume or use daily'],
    ],
    allIndex: 0,
    allLabel: 'None of these',
  },
  {
    section: 'diet',
    title: 'Do you crave sugar or starchy foods like bread and pasta?',
    kind: 'freq',
  },
  {
    section: 'diet',
    title:
      'Do you feel shaky, irritable or light-headed if you miss a meal? This may be a {blood sugar dip|blood sugar dip}.',
    kind: 'freq',
  },
  {
    section: 'diet',
    title: 'Do you experience {bloating|bloating} after meals?',
    kind: 'freq',
  },
  {
    section: 'diet',
    title: 'Do you experience heartburn or {reflux|reflux}?',
    kind: 'freq',
  },
  {
    section: 'diet',
    title: 'How often do you open your bowels?',
    kind: 'single',
    options: [
      'More than twice a day',
      'Once or twice a day',
      'Every 2 to 3 days',
      'Less often than every 3 days',
    ],
  },
  {
    section: 'diet',
    title: 'Do you notice certain foods make you feel unwell?',
    kind: 'single',
    options: ['Yes, often', 'Sometimes', 'Rarely', 'Never'],
  },
  {
    section: 'diet',
    title: 'How many glasses of water do you drink per day?',
    kind: 'single',
    options: [
      '0 to 2 glasses',
      '3 to 4 glasses',
      '5 to 6 glasses',
      '7 to 8 glasses',
      'More than 8 glasses',
    ],
  },
  {
    section: 'diet',
    title: 'Do you follow any particular way of eating?',
    kind: 'multi',
    options: [
      'Vegetarian',
      'Vegan',
      'Low carb or keto',
      'Gluten-free',
      'Intermittent fasting',
      'Mediterranean',
      'No particular diet',
    ],
    help: 'Choose all that apply.',
  },
  {
    section: 'diet',
    title: 'Do you feel full quickly or lose your appetite?',
    kind: 'freq',
  },
  {
    section: 'diet',
    title: 'Do you eat within two hours of going to bed?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'How would you rate your stress over the past month?',
    kind: 'single',
    options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
  },
  {
    section: 'stress',
    title: 'Do you feel overwhelmed by everyday tasks?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Do you feel anxious or on edge?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Do you feel low, flat or lose interest in things you used to enjoy?',
    kind: 'single',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always', 'Prefer not to say'],
    help: 'If you are struggling right now, please speak to your GP or a local support line, you don’t have to wait for your results.',
  },
  {
    section: 'stress',
    title: 'Do you feel irritable or short-tempered?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Do you find it hard to switch off and relax?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Do you notice {palpitations|palpitations} when you are stressed?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Have you been through any of these in the past two years?',
    kind: 'multi',
    options: [
      'Bereavement',
      'Divorce or separation',
      'Job change or retirement',
      'Caring for a family member',
      'Serious illness',
      'Moving home',
      'None of these',
    ],
    help: 'Choose all that apply.',
  },
  {
    section: 'stress',
    title:
      'Does your stress response feel “stuck on”, as if your {cortisol|cortisol} never settles?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Do you crave salty foods? This can relate to your {adrenal glands|adrenal glands}.',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'Do you feel light-headed when you stand up quickly?',
    kind: 'freq',
  },
  {
    section: 'stress',
    title: 'How well do you cope with pressure compared with the past?',
    kind: 'single',
    options: ['Better than before', 'About the same', 'A little worse', 'Much worse'],
  },
  {
    section: 'hormone',
    title: 'Have you noticed a change in your {libido|libido}?',
    kind: 'single',
    options: [
      'Significant decrease',
      'Slight decrease',
      'No change',
      'Increase',
      'Prefer not to say',
    ],
  },
  {
    section: 'hormone',
    title: 'Do you experience {hot flushes|hot flushes}?',
    kind: 'freq',
  },
  {
    section: 'hormone',
    title:
      'Do you feel unusually cold, especially in your hands and feet? This is called {cold intolerance|cold intolerance}.',
    kind: 'freq',
  },
  {
    section: 'hormone',
    title: 'A few quick ones',
    kind: 'quick',
    rows: [
      'Have you noticed thinning hair or hair loss?',
      'Is your skin drier than it used to be?',
      'Have you noticed puffiness in your face or around your eyes?',
      'Do you have joint aches or stiffness?',
    ],
    legend: [
      ['Never', 'Not at all'],
      ['Rarely', 'Once a month or less'],
      ['Sometimes', 'A few times a month'],
      ['Often', 'Most weeks'],
      ['Always', 'Every day or nearly every day'],
    ],
    allIndex: 0,
    allLabel: 'Never, for all of these',
  },
  {
    section: 'hormone',
    title: 'Have you gained weight around your middle without changing how you eat?',
    kind: 'single',
    options: ['Yes, a lot', 'Yes, a little', 'No', 'Not sure'],
  },
  {
    section: 'hormone',
    title: 'Do you notice mood changes linked to your monthly cycle or life stage?',
    kind: 'freq',
  },
  {
    section: 'hormone',
    title:
      'For women: which best describes your periods? You may be in {perimenopause|perimenopause}.',
    kind: 'single',
    options: [
      'Regular cycles',
      'Irregular cycles',
      'Perimenopause',
      'After menopause',
      'Not applicable',
      'Prefer not to say',
    ],
  },
  {
    section: 'hormone',
    title:
      'For men: have you noticed reduced strength or morning erections? This can relate to {andropause|andropause}.',
    kind: 'single',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always',
      'Not applicable',
      'Prefer not to say',
    ],
  },
  {
    section: 'hormone',
    title: 'Are you currently using any {hormone therapy|hormone therapy}?',
    kind: 'single',
    options: ['Yes', 'No', 'In the past', 'Not sure'],
  },
  {
    section: 'hormone',
    title: 'Do you feel your heart racing, or feel hot and jittery for no clear reason?',
    kind: 'freq',
  },
  {
    section: 'hormone',
    title: 'Has a doctor ever mentioned your {thyroid|thyroid}?',
    kind: 'single',
    options: ['Yes, underactive', 'Yes, overactive', 'Yes, something else', 'No', 'Not sure'],
  },
  {
    section: 'metab',
    title: 'A few quick ones',
    kind: 'quick',
    rows: [
      'Does anyone in your close family have diabetes?',
      'Has a doctor mentioned high blood pressure?',
      'Has a doctor mentioned high cholesterol?',
    ],
    legend: [
      ['Yes', ''],
      ['No', ''],
      ['Not sure', ''],
    ],
    allIndex: 1,
    allLabel: 'No to all of these',
  },
  {
    section: 'metab',
    title: 'Has a doctor told you your blood sugar or {HbA1c|HbA1c} is raised?',
    kind: 'single',
    options: ['Yes', 'No', 'Not sure', 'Never been tested'],
  },
  {
    section: 'metab',
    title: 'Do you feel very thirsty or need to pass urine often?',
    kind: 'freq',
  },
  {
    section: 'metab',
    title: 'Do you feel sleepy after meals?',
    kind: 'freq',
  },
  {
    section: 'metab',
    title: 'Has your {waist measurement|waist measurement} increased in the past few years?',
    kind: 'single',
    options: ['Yes, a lot', 'A little', 'No', 'I don’t know'],
  },
  {
    section: 'metab',
    title: 'Do cuts or bruises take longer to heal than they used to?',
    kind: 'freq',
  },
  {
    section: 'metab',
    title:
      'Have you noticed darker, velvety patches of skin on your neck or underarms? This can be a sign of {insulin resistance|insulin resistance}.',
    kind: 'single',
    options: ['Yes', 'No', 'Not sure'],
  },
  {
    section: 'metab',
    title: 'Do you find it hard to lose weight, even when you try?',
    kind: 'freq',
  },
  {
    section: 'life',
    title: 'How many days a week are you active for 30 minutes or more?',
    kind: 'single',
    options: ['0 days', '1 to 2 days', '3 to 4 days', '5 to 6 days', 'Every day'],
  },
  {
    section: 'life',
    title: 'Do you do any {resistance training|resistance training}?',
    kind: 'single',
    options: ['Never', 'Occasionally', '1 to 2 times a week', '3 or more times a week'],
  },
  {
    section: 'life',
    title: 'How many hours a day do you spend sitting?',
    kind: 'single',
    options: ['Less than 4', '4 to 6', '6 to 9', 'More than 9'],
  },
  {
    section: 'life',
    title: 'About how many steps do you walk on a typical day?',
    kind: 'single',
    options: ['Under 3,000', '3,000 to 6,000', '6,000 to 10,000', 'Over 10,000', 'I don’t know'],
  },
  {
    section: 'life',
    title: 'Do you spend time outdoors in daylight?',
    kind: 'freq',
  },
  {
    section: 'life',
    title: 'Do you feel connected to friends, family or community?',
    kind: 'freq',
  },
  {
    section: 'life',
    title: 'Do you have time for hobbies or activities you enjoy?',
    kind: 'freq',
  },
  {
    section: 'life',
    title: 'Do you practise anything to relax, such as breathing exercises, meditation or prayer?',
    kind: 'freq',
  },
  {
    section: 'life',
    title: 'Do you have pain that limits what you can do?',
    kind: 'freq',
  },
  {
    section: 'life',
    title: 'How would you rate your balance and mobility?',
    kind: 'single',
    options: ['Very poor', 'Poor', 'Fair', 'Good', 'Excellent'],
  },
  {
    section: 'life',
    title: 'How ready do you feel to make changes to your health?',
    kind: 'single',
    options: ['Not ready', 'A little ready', 'Fairly ready', 'Ready', 'Very ready'],
  },
  {
    section: 'history',
    title: 'Have you been diagnosed with any of these?',
    kind: 'multi',
    options: [
      'Diabetes',
      'Thyroid condition',
      'High blood pressure',
      'Heart condition',
      'Autoimmune condition',
      'Depression or anxiety',
      'Osteoporosis',
      'None of these',
    ],
    help: 'Choose all that apply. Not sure what an {autoimmune condition|autoimmune condition} is?',
  },
  {
    section: 'history',
    title: 'A few quick ones',
    kind: 'quick',
    rows: [
      'Are you currently taking any prescription medicines?',
      'Have you had surgery in the past five years?',
      'Are you allergic to any medicines?',
      'Does a close family member have a hormone or {endocrine|endocrine} condition?',
    ],
    legend: [
      ['Yes', ''],
      ['No', ''],
      ['Not sure', ''],
    ],
    allIndex: 1,
    allLabel: 'No to all of these',
  },
  {
    section: 'history',
    title: 'A few quick ones',
    kind: 'quick',
    help: 'Include anything bought without a prescription.',
    rows: [
      'How often do you take vitamin D?',
      'How often do you take magnesium?',
      'How often do you take omega-3 or fish oil?',
      'How often do you take a multivitamin?',
      'How often do you use sleep aids or melatonin?',
      'How often do you take pain relief medicine?',
    ],
    legend: [
      ['None', 'Do not consume or use'],
      ['2 to 3 times monthly', 'Consume or use 2 to 3 times monthly'],
      ['Weekly', 'Consume or use weekly'],
      ['Daily', 'Consume or use daily'],
    ],
    allIndex: 0,
    allLabel: 'None of these',
  },
  {
    section: 'history',
    title: 'When did you last have a full health check with blood tests?',
    kind: 'single',
    options: [
      'Within 6 months',
      '6 to 12 months ago',
      '1 to 3 years ago',
      'More than 3 years ago',
      'Never',
    ],
  },
  {
    section: 'history',
    title: 'Is there anything else you would like your doctor to know?',
    kind: 'text',
    help: 'Optional. You can skip this question.',
    isOptional: true,
  },
];

export const STAGES = [
  { name: 'Egg', line: 'Every transformation starts small.' },
  { name: 'Hatchling', line: 'You’ve broken through the shell.' },
  { name: 'Caterpillar', line: 'Steady progress, one answer at a time.' },
  { name: 'Growing Caterpillar', line: 'Your picture is filling out nicely.' },
  { name: 'Spinning', line: 'Almost halfway. Keep going.' },
  { name: 'Chrysalis', line: 'The quiet work happens here.' },
  { name: 'Transforming', line: 'Real change is underway.' },
  { name: 'Emerging', line: 'Nearly ready to break out.' },
  { name: 'Wings Unfolding', line: 'One final section to go.' },
  { name: 'Butterfly', line: 'Your full picture is complete.' },
];

/* Section accents for pills, halos and badges, kept inside the Autonomic palette (greens, blues, teals) */
export type SectionTheme = { id: string; accent: string; light: string; deep: string };
export const THEMES: SectionTheme[] = [
  { id: 'about', accent: '#8098d1', light: '#e9eefc', deep: '#47599c' },
  { id: 'energy', accent: '#0e9aa7', light: '#e3f6f8', deep: '#08707a' },
  { id: 'sleep', accent: '#5b7bd0', light: '#e7edfb', deep: '#2c4278' },
  { id: 'diet', accent: '#169d69', light: '#e3f8ee', deep: '#0d7a50' },
  { id: 'stress', accent: '#0abfa3', light: '#dcf8f3', deep: '#04705f' },
  { id: 'hormone', accent: '#3fb68b', light: '#e4f6ee', deep: '#0e7a52' },
  { id: 'metab', accent: '#1d55d6', light: '#eaf0fd', deep: '#163f9d' },
  { id: 'life', accent: '#3d9be0', light: '#e2f1fd', deep: '#1d64a0' },
  { id: 'history', accent: '#0e7a52', light: '#edfcf7', deep: '#06352c' },
];
export const FINAL_THEME: SectionTheme = {
  id: 'about',
  accent: '#169d69',
  light: '#e3f8ee',
  deep: '#0d7a50',
};
