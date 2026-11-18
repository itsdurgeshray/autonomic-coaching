import { Icon } from '@/components/ui/Icon';

export function IsThisAboutMeSection() {
  return (
    <section className="sec pt0" aria-labelledby="contact-isthisaboutme-title">
      {' '}
      <div className="wrap begin">
        {' '}
        <h2 id="contact-isthisaboutme-title">You don’t need all the answers to begin</h2>{' '}
        <div>
          {' '}
          <p className="body">
            If your health, energy, or ability to manage pressure has changed, we’d like to
            understand what’s been going on. You may have had tests, tried different approaches, or
            received results that don’t explain how you feel.
          </p>{' '}
          <p className="discreet">
            <Icon name="i-lock-simple" className="pi" />
            Every request is treated with discretion.
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
