import Link from 'next/link';
import { cn } from '@/lib/cn';

/* Marketing buttons (design-system.html, Buttons: primary, light, ghost on dark, pill). Same classes as the original site. */
const VARIANT = {
  primary: 'btn-primary',
  light: 'btn-light',
  ghost: 'btn-ghost',
  pill: 'btn-pill',
  blue: 'btn-blue',
} as const;

export type SiteButtonProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  href: string;
  variant?: keyof typeof VARIANT;
  size?: 'md' | 'sm';
};

/** Opens #request or another anchor as a plain link, and site pages through next/link */
export function SiteButton({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: SiteButtonProps) {
  const cls = cn('btn', VARIANT[variant], size === 'sm' && 'btn-sm', className);
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:'))
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
