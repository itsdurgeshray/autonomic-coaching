import { Icon } from '@/components/ui/Icon';

export function FranklSection() {
  return (
    <figure className="frankl">
      {' '}
      <div className="wrap">
        {' '}
        <Icon name="if-quotes" className="qm" />{' '}
        <blockquote>
          “Between stimulus and response, there is a space. In that space is our power to choose our
          response. In our response lies our growth and our freedom.”
        </blockquote>{' '}
        <cite>Viktor E. Frankl</cite>{' '}
        <p className="after">
          The book shows how this plays out in a real body, through one man’s story.
        </p>{' '}
      </div>{' '}
    </figure>
  );
}
