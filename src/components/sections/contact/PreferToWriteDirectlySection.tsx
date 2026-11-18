import { Icon } from '@/components/ui/Icon';

export function PreferToWriteDirectlySection() {
  return (
    <section className="sec pt0" aria-labelledby="contact-prefertowritedirectly-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="direct">
          {' '}
          <span className="ic soft">
            <Icon name="i-envelope-simple" className="pi" />
          </span>{' '}
          <div>
            {' '}
            <h2 id="contact-prefertowritedirectly-title">Prefer to write directly?</h2>{' '}
            <p className="body">
              Email <a href="mailto:justin@autonomiccoaching.com">justin@autonomiccoaching.com</a>{' '}
              with a general question, or for press, speaking, partnerships, or to refer a client.
            </p>{' '}
            <p className="body">
              You can also message the team on WhatsApp. Support for current clients runs Monday to
              Friday, 08:00 to 17:00 CAT.
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
