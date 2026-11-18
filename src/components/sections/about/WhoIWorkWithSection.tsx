import { Icon } from '@/components/ui/Icon';

export function WhoIWorkWithSection() {
  return (
    <section className="sec pt0" aria-labelledby="about-whoiworkwith-title">
      {' '}
      <div className="wrap">
        <div className="panel who">
          {' '}
          <h2 id="about-whoiworkwith-title">Who I work with</h2>{' '}
          <div>
            {' '}
            <p className="lead">
              I work one-to-one with high-performing people:{' '}
              <span className="nw">
                <span className="chip dot">executives</span>,
              </span>{' '}
              <span className="chip dot">founders</span> and{' '}
              <span className="chip dot">senior professionals</span> whose energy, focus or
              resilience under pressure has dropped, and whose standard tests don’t explain why. I
              also work with people whose health concerns are complex and haven’t had a clear
              answer.
            </p>{' '}
            <p className="body">
              Coaching runs week by week and asks for time, money and emotional energy, so it suits
              people who are ready to give all three.
            </p>{' '}
            <p className="priv">
              <Icon name="i-lock-simple" className="pi" />
              Everything you share stays private.
            </p>{' '}
          </div>{' '}
        </div>
      </div>{' '}
    </section>
  );
}
