import { cn } from '@/lib/cn';

export type CheckboxProps = Omit<React.ComponentProps<'input'>, 'type'> & {
  label: React.ReactNode;
  labelClassName?: string;
};

/** Design system checkbox: 18px control with its label */
export function Checkbox({ label, className, labelClassName, ...rest }: CheckboxProps) {
  return (
    <label className={cn('ds-check', labelClassName)}>
      <input type="checkbox" className={className} {...rest} />
      <span>{label}</span>
    </label>
  );
}
