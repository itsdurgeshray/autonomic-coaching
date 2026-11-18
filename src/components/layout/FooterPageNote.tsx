'use client';

import { usePathname } from 'next/navigation';

export type FooterPageNoteProps = { notes: Record<string, string> };

export function FooterPageNote({ notes }: FooterPageNoteProps) {
  const note = notes[usePathname()];
  return note ? <span>{note}</span> : null;
}
