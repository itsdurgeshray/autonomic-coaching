import { ICONS, type IconName } from '@/components/ui/icons';

export type IconProps = React.ComponentPropsWithoutRef<'svg'> & { name: IconName };

/** Decorative by default; pass aria-label and role="img" when the icon carries meaning on its own */
export function Icon({ name, className, ...rest }: IconProps) {
  const [viewBox, inner] = ICONS[name];
  return (
    <svg
      viewBox={viewBox}
      aria-hidden={rest['aria-label'] ? undefined : true}
      focusable="false"
      className={className}
      dangerouslySetInnerHTML={{ __html: inner }}
      {...rest}
    />
  );
}
