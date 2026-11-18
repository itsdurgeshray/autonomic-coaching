import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function ApplyingForCoachingSection() {
  return (
    <section className="sec pt0" aria-labelledby="how-it-works-applyingforcoaching-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="panel apply">
          {' '}
          <div>
            {' '}
            <h2 id="how-it-works-applyingforcoaching-title">Applying for coaching</h2>{' '}
            <p className="lede">
              The form asks for your name, email, main health concern, what you’ve tried and your
              goals. It takes about <mark className="tbc">[X]</mark> minutes.
            </p>{' '}
            <p className="note">
              Coaching is by application so we can confirm it’s right for you before you commit
              money or time.
            </p>{' '}
            <SiteButton href="#request" variant="primary">
              Request Coaching <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
          <div className="formcard" aria-hidden="true">
            {' '}
            <div className="row">
              Name
              <span className="ck">
                <Icon name="check" />
              </span>
            </div>{' '}
            <div className="row">
              Email
              <span className="ck">
                <Icon name="check" />
              </span>
            </div>{' '}
            <div className="row">
              Main health concern
              <span className="ck">
                <Icon name="check" />
              </span>
            </div>{' '}
            <div className="row">
              What you’ve tried
              <span className="ck">
                <Icon name="check" />
              </span>
            </div>{' '}
            <div className="row">
              Your goals
              <span className="ck">
                <Icon name="check" />
              </span>
            </div>{' '}
            <div className="time">
              <Icon name="i-clock" className="pi" />
              About <mark className="tbc">[X]</mark> minutes
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
