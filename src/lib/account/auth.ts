import type { Session } from '@/lib/account/types';

/**
 * Prototype sign-in. The real build replaces this with the Zoho OAuth redirect and a server session;
 * the rest of the app only depends on receiving a Session.
 */
export async function signInWithZoho(): Promise<Session> {
  await new Promise((r) => setTimeout(r, 1100));
  return { email: 'you@example.com', provider: 'zoho', signedInAt: new Date().toISOString() };
}
