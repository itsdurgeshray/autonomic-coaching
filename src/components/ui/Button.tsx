import Link from 'next/link';
import { cn } from '@/lib/cn';

/* Design system buttons (design-system.html, Actions). Classes come from styles/ds.css. */
const VARIANT = {
  primary: 'ds-btn-primary',
  secondary: 'ds-btn-secondary',
  tertiary: 'ds-btn-tertiary',
  ghost: 'ds-btn-ghost',
  danger: 'ds-btn-danger',
  dangerSoft: 'ds-btn-danger-soft',
  onDark: 'ds-btn-on-dark',
} as const;
const SIZE = { sm: 'ds-btn-sm', md: '', lg: 'ds-btn-lg', xl: 'ds-btn-xl' } as const;

type Look = {
  variant?: keyof typeof VARIANT;
  size?: keyof typeof SIZE;
  isIconOnly?: boolean;
  isBlock?: boolean;
  isPill?: boolean;
};

export const buttonClass = ({
  variant = 'primary',
  size = 'lg',
  isIconOnly,
  isBlock,
  isPill,
}: Look = {}) =>
  cn(
    'ds-btn',
    VARIANT[variant],
    SIZE[size],
    isIconOnly && 'ds-btn-icon',
    isBlock && 'ds-btn-block',
    isPill && 'ds-btn-pill',
  );

export type ButtonProps = React.ComponentProps<'button'> & Look & { isLoading?: boolean };

export function Button({
  className,
  variant,
  size,
  isIconOnly,
  isBlock,
  isPill,
  isLoading,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        buttonClass({ variant, size, isIconOnly, isBlock, isPill }),
        isLoading && 'ds-is-loading',
        className,
      )}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading && <span className="ds-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

export type ButtonLinkProps = React.ComponentProps<typeof Link> & Look;

export function ButtonLink({
  className,
  variant,
  size,
  isIconOnly,
  isBlock,
  isPill,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonClass({ variant, size, isIconOnly, isBlock, isPill }), className)}
      {...rest}
    />
  );
}

export type TextLinkProps = React.ComponentProps<typeof Link> & { tone?: 'green' | 'ink' };

/** Design system link: underlined at 35%, solid on hover */
export function TextLink({ className, tone = 'green', ...rest }: TextLinkProps) {
  return <Link className={cn('ds-link', tone === 'ink' && 'ds-ink', className)} {...rest} />;
}
