import { Icon } from '@/components/ui/Icon';

export type FaqItemProps = {
  question: React.ReactNode;
  id?: string;
  isOpen?: boolean;
  children: React.ReactNode;
};

/** Design system accordion item: native details and summary, no JavaScript needed */
export function FaqItem({ question, id, isOpen, children }: FaqItemProps) {
  return (
    <details id={id} open={isOpen}>
      <summary>
        {question}
        <span className="pm">
          <Icon name="plus" />
        </span>
      </summary>
      <div className="faq-a">{children}</div>
    </details>
  );
}
