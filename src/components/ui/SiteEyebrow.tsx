import { cn } from '@/lib/cn';

export type SiteEyebrowProps = React.ComponentProps<'p'>;

/** Design system H3 (eyebrow) on the marketing pages */
export function SiteEyebrow({ className, ...rest }: SiteEyebrowProps) {
  return <p className={cn('eyebrow', className)} {...rest} />;
}
