import { cn } from '@/lib/cn';

export type TextInputProps = React.ComponentProps<'input'> & {
  /** Short unit shown inside the field, for example "cm" */
  unit?: string;
  size?: never;
  scale?: 'md' | 'lg';
};

/** Design system text input (40px, or 48px with scale="lg") */
export function TextInput({ className, unit, scale = 'lg', ...rest }: TextInputProps) {
  const input = (
    <input className={cn('ds-input', scale === 'lg' && 'ds-input-lg', className)} {...rest} />
  );
  if (!unit) return input;
  return (
    <div className="ds-addon">
      {input}
      <span className="ds-post" aria-hidden="true">
        {unit}
      </span>
    </div>
  );
}
