import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';

export type FieldProps = {
  /** Must match the id of the control passed as children */
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optionalLabel?: string;
  isRequired?: boolean;
  /** 12px label above a 40px control, for app forms */
  isCompact?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** ids for aria-describedby so hints and errors are read with the control */
export const describedBy = (id: string, hint?: string, error?: string) =>
  [hint && !error && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;

/** Design system field: label above, control, then helper or error text */
export function Field({
  id,
  label,
  hint,
  error,
  optionalLabel,
  isRequired,
  isCompact,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn('ds-field', isCompact && 'ds-compact', className)}>
      <label htmlFor={id}>
        {label}
        {optionalLabel && <span className="ds-opt"> {optionalLabel}</span>}
        {isRequired && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="ds-f-help">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="ds-f-error">
          <Icon name="i-warning-circle" className="ds-ico" />
          {error}
        </p>
      )}
    </div>
  );
}
