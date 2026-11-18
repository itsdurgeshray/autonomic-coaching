import Link from 'next/link';
import { BrandMark } from '@/components/account/BrandMark';
import { JourneySteps } from '@/components/account/JourneySteps';

export type FlowShellProps = {
  brand: string;
  steps: readonly { id: string; label: string }[];
  currentId: string;
  exit: { label: string; href: string };
  children: React.ReactNode;
};

/** Focused full-width layout for the fit check: brand, progress through sign-up and a way out */
export function FlowShell({ brand, steps, currentId, exit, children }: FlowShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-[radial-gradient(70%_50%_at_50%_0%,var(--mist)_0%,var(--page)_70%)]">
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
        <BrandMark name={brand} />
        <JourneySteps steps={steps} currentId={currentId} className="hidden md:flex" />
        <Link href={exit.href} className="ds-link ds-ink ds-t-14">
          {exit.label}
        </Link>
      </header>
      <div className="px-4 md:hidden">
        <JourneySteps steps={steps} currentId={currentId} />
      </div>
      <main id="main" className="flex flex-1 flex-col px-4 pt-8 pb-6 md:justify-center md:py-16">
        {children}
      </main>
    </div>
  );
}
