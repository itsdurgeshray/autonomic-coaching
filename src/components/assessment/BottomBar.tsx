'use client';

import { LucideIcon } from '@/components/assessment/LucideIcon';

export type BottomBarProps = {
  isFirst: boolean;
  isLast: boolean;
  canNext: boolean;
  isLargeText: boolean;
  isSoundOn: boolean;
  isJumpOpen: boolean;
  onExit: () => void;
  onText: () => void;
  onSound: () => void;
  onJump: () => void;
  onBack: () => void;
  onNext: () => void;
};

export function BottomBar(p: BottomBarProps) {
  return (
    <footer className="bar">
      <div className="bin">
        <div className="bl">
          <button type="button" className="save" onClick={p.onExit}>
            Save Draft &amp; Exit
          </button>
          <span className="tools">
            <button
              type="button"
              className="ib"
              aria-pressed={p.isLargeText}
              onClick={p.onText}
              title="Larger text"
            >
              <LucideIcon name="type" />
              <span className="sr">Larger text</span>
            </button>
            <button
              type="button"
              className="ib"
              aria-pressed={p.isSoundOn}
              onClick={p.onSound}
              title="Sound effects"
            >
              <LucideIcon name={p.isSoundOn ? 'vol' : 'mute'} />
              <span className="sr">Sound effects</span>
            </button>
          </span>
        </div>
        <div className="bc">
          <button
            type="button"
            className="tl"
            id="jumpBtn"
            aria-expanded={p.isJumpOpen}
            aria-controls="jpop"
            onClick={p.onJump}
          >
            <LucideIcon name="list" />
            <span>Jump to Question</span>
          </button>
        </div>
        <div className="br">
          <button
            type="button"
            className="back-m"
            disabled={p.isFirst}
            onClick={p.onBack}
            aria-label="Previous question"
          >
            <LucideIcon name="chevL" />
            <span>Back</span>
          </button>
          <button
            type="button"
            className="cta"
            id="nextBtn"
            disabled={!p.canNext}
            onClick={p.onNext}
          >
            {p.isLast ? 'Finish' : 'Continue'}
          </button>
        </div>
      </div>
    </footer>
  );
}
