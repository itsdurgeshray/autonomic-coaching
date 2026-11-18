import Link from 'next/link';
import { cn } from '@/lib/cn';

export type SiteTextLinkProps = React.ComponentProps<typeof Link>;

/** Design system text link on the marketing pages: underlined, with a trailing arrow passed as a child */
export function SiteTextLink({ className, ...rest }: SiteTextLinkProps) {
  return <Link className={cn('u-link', className)} {...rest} />;
}
