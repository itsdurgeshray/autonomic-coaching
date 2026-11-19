import { cn } from '@/lib/cn';

/* Design system type roles: H1 64/72, H2 48/56 (with tablet and phone steps), H3 is the 12/20 eyebrow, title 20/28 medium, page 32/40 for app screens */
const ROLE = { h1: 'ds-t-h1', h2: 'ds-t-h2', title: 'ds-t-title', page: 'ds-t-page' } as const;

export type HeadingProps = React.ComponentProps<'h2'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Visual role from the design system, independent of the heading level */
  look?: keyof typeof ROLE;
};

export function Heading({ as: Tag = 'h2', look = 'h2', className, ...rest }: HeadingProps) {
  return <Tag className={cn(ROLE[look], className)} {...rest} />;
}
