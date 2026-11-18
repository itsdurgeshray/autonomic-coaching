import { cn } from '@/lib/cn';

export type SelectInputProps = React.ComponentProps<'select'> & {
  options: readonly { value: string; label: string }[];
  placeholder?: string;
  scale?: 'md' | 'lg';
  /** Shows the saved value with the quiet read-only look and blocks changes */
  isReadOnly?: boolean;
};

/** Design system select */
export function SelectInput({
  className,
  options,
  placeholder,
  scale = 'lg',
  isReadOnly,
  disabled,
  ...rest
}: SelectInputProps) {
  return (
    <select
      className={cn(
        'ds-select',
        scale === 'lg' && 'ds-input-lg',
        isReadOnly && 'ds-is-readonly',
        className,
      )}
      disabled={disabled || isReadOnly}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
