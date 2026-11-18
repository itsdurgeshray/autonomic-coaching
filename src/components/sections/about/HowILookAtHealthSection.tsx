import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';

export function HowILookAtHealthSection() {
  return (
    <section className="sec" aria-labelledby="about-howilookathealth-title">
      {' '}
      <div className="wrap look">
        {' '}
        <div className="venn-wrap">
          {' '}
          <div
            className="venn"
            aria-label="The nervous system, the immune system and the hormonal system"
          >
            {' '}
            <svg viewBox="0 0 520 480" aria-hidden="true">
              {' '}
              <defs>
                {' '}
                <linearGradient id="vn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0e7a52" stopOpacity=".16" />
                  <stop offset="1" stopColor="#0e7a52" stopOpacity=".03" />
                </linearGradient>{' '}
                <linearGradient id="vi" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8098d1" stopOpacity=".04" />
                  <stop offset="1" stopColor="#8098d1" stopOpacity=".2" />
                </linearGradient>{' '}
                <linearGradient id="vh" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#4fd1a0" stopOpacity=".05" />
                  <stop offset="1" stopColor="#4fd1a0" stopOpacity=".24" />
                </linearGradient>{' '}
              </defs>{' '}
              <circle className="orbit" cx="260" cy="245" r="232" />{' '}
              <circle
                cx="260"
                cy="165"
                r="140"
                fill="url(#vn)"
                stroke="#0e7a52"
                strokeOpacity=".75"
                strokeWidth="1.5"
              />{' '}
              <circle
                cx="190"
                cy="285"
                r="140"
                fill="url(#vi)"
                stroke="#8098d1"
                strokeOpacity=".6"
                strokeWidth="1.5"
              />{' '}
              <circle
                cx="330"
                cy="285"
                r="140"
                fill="url(#vh)"
                stroke="#169d69"
                strokeOpacity=".7"
                strokeWidth="1.5"
              />{' '}
            </svg>{' '}
            <span className="sys n">
              <i>
                <Icon name="i-brain" className="pi" />
              </i>
              nervous system
            </span>{' '}
            <span className="sys i">
              <i>
                <Icon name="i-shield-plus" className="pi" />
              </i>
              immune system
            </span>{' '}
            <span className="sys h">
              <i>
                <Icon name="i-drop-half" className="pi" />
              </i>
              hormonal system
            </span>{' '}
            <span className="core">
              <Image
                src="/images/autonomic-coaching-mark.png"
                alt=""
                width={104}
                height={97}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </span>{' '}
          </div>{' '}
          <p className="venn-cap">psychoneuroimmunoendocrinology</p>{' '}
        </div>{' '}
        <div>
          {' '}
          <h2 id="about-howilookathealth-title">How I Look at Health</h2>{' '}
          <p className="lead">
            I work from the premise that wellbeing is more than a single lab value or a diagnosis
            label. What matters to me is how three systems interact within a person’s life:{' '}
            <span className="nw">
              <span className="chip n">
                <span className="ci">
                  <Icon name="i-brain" className="pi" />
                </span>
                the nervous system
              </span>
              ,
            </span>{' '}
            <span className="chip i">
              <span className="ci">
                <Icon name="i-shield-plus" className="pi" />
              </span>
              the immune system
            </span>{' '}
            and{' '}
            <span className="nw">
              <span className="chip h">
                <span className="ci">
                  <Icon name="i-drop-half" className="pi" />
                </span>
                the hormonal system
              </span>
              .
            </span>
          </p>{' '}
          <p className="body">
            The field I draw on is called psychoneuroimmunoendocrinology, the study of how the mind,
            nervous system, immune system and hormones communicate with each other. I combine it
            with biochemistry, nutritional science, functional blood chemistry and neuroscience, so
            that your fatigue or brain fog is read against how those systems interact, not against a
            single result.
          </p>{' '}
          <p className="next">
            In practice, I work through four questions with each client. <Icon name="arrow" />
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
