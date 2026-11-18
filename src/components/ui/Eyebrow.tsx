import { cn } from '@/lib/cn';

export type EyebrowProps = React.ComponentProps<'p'>;

/** Design system H3: the 12/20 uppercase eyebrow above a heading */
export function Eyebrow({ className, ...rest }: EyebrowProps) {
  return <p className={cn('ds-t-h3', className)} {...rest} />;
}
