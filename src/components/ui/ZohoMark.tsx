export type ZohoMarkProps = { className?: string };

/** Zoho's four-square mark in its own colours, for the sign-in button. Decorative: the button text names the provider. */
export function ZohoMark({ className }: ZohoMarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <rect
        x="1.5"
        y="1.5"
        width="9.5"
        height="9.5"
        rx="2"
        fill="#E42527"
        transform="rotate(-8 6.25 6.25)"
      />
      <rect
        x="13"
        y="1.5"
        width="9.5"
        height="9.5"
        rx="2"
        fill="#089949"
        transform="rotate(8 17.75 6.25)"
      />
      <rect
        x="1.5"
        y="13"
        width="9.5"
        height="9.5"
        rx="2"
        fill="#226DB4"
        transform="rotate(8 6.25 17.75)"
      />
      <rect
        x="13"
        y="13"
        width="9.5"
        height="9.5"
        rx="2"
        fill="#F9B21D"
        transform="rotate(-8 17.75 17.75)"
      />
    </svg>
  );
}
