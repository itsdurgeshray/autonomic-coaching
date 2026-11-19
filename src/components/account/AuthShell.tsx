import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { ImageAsset } from '@/types/content';

export type AuthShellProps = {
  media: ImageAsset;
  caption: string;
  header: React.ReactNode;
  /** Drops the photo band on phones and tablets so a question flow starts at the top */
  isBandHidden?: boolean;
  children: React.ReactNode;
};

/**
 * Split layout shared by sign-in, profile set-up and the fit check: a photo panel and a centred column.
 * Phones and tablets get a short photo band on top; from 1024px the photo stays in view beside the column.
 */
export function AuthShell({ media, caption, header, isBandHidden, children }: AuthShellProps) {
  return (
    <div className="mx-auto grid min-h-svh max-w-[1920px] grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-1 lg:gap-6 lg:p-6">
      <aside
        className={cn(
          'bg-g-900 relative h-[200px] overflow-hidden sm:h-[280px] lg:sticky lg:top-6 lg:block lg:h-[calc(100svh-48px)] lg:rounded-[24px]',
          isBandHidden && 'hidden',
        )}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,19,15,.08)_0%,rgba(1,19,15,0)_36%,rgba(1,19,15,.8)_100%)]"
        />
        <p className="ds-t-16 absolute right-4 bottom-4 left-4 max-w-[34ch] text-white sm:right-8 sm:bottom-6 sm:left-8 sm:text-[20px] sm:leading-[28px] lg:right-12 lg:bottom-12 lg:left-12 lg:max-w-[20ch] lg:text-[32px] lg:leading-[40px] lg:tracking-[-0.02em]">
          {caption}
        </p>
      </aside>
      <div className="flex min-w-0 flex-col items-center px-4 sm:px-8">
        <header className="flex w-full max-w-[560px] justify-center pt-6 lg:pt-4">{header}</header>
        <main id="main" className="flex w-full max-w-[560px] flex-1 flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
