import { RequireSession } from '@/components/account/RequireSession';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <RequireSession>{children}</RequireSession>;
}
