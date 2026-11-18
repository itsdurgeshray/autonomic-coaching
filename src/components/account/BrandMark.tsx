import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export type BrandMarkProps = { name: string; className?: string };

export function BrandMark({ name, className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        'ds-t-16 ds-w-500 text-ink inline-flex items-center gap-2.5 tracking-[-0.02em] whitespace-nowrap',
        className,
      )}
    >
      <Image
        src="/images/autonomic-coaching-mark.png"
        alt=""
        width={104}
        height={97}
        className="h-9 w-auto"
      />
      {name}
    </Link>
  );
}
