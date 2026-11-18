import Image from 'next/image';
import { cn } from '@/lib/cn';

export type StageImageProps = {
  stage: number;
  kind?: 'sprite' | 'badge';
  mode?: '' | 'glow' | 'lock';
  className?: string;
};

/** Life-stage art, egg to butterfly: sprites for the progress bar and badges for the rewards */
export function StageImage({ stage, kind = 'sprite', mode = '', className }: StageImageProps) {
  const isBadge = kind === 'badge';
  return (
    <Image
      src={`/assessment/stages/${isBadge ? 'b' : 's'}${stage}.png`}
      alt=""
      width={isBadge ? 336 : 160}
      height={isBadge ? 336 : 160}
      draggable={false}
      className={cn(isBadge ? 'sbadge' : 'stg', mode, className)}
    />
  );
}
