import { QualificationTimeline } from '@/components/patterns/QualificationTimeline';
import { qualifications } from '@/content/about';

export function QualificationsAndTrainingSection() {
  return (
    <section className="sec pt0" aria-labelledby="about-qualificationsandtraining-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head shead-row">
          {' '}
          <h2 id="about-qualificationsandtraining-title">My Qualifications & Training</h2>{' '}
          <p className="lede">
            This approach rests on formal training, and I’m still studying. I check research
            critically so I can explain it clearly and apply it to the person in front of me.
          </p>{' '}
        </div>{' '}
        <QualificationTimeline items={qualifications} />{' '}
        <p className="bridge">
          Qualifications show what I’ve studied. <span>These people have seen how I apply it.</span>
        </p>{' '}
      </div>{' '}
    </section>
  );
}
