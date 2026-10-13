import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

/**
 * Authentic WhatsApp Brand Icon (Vector SVG)
 */
export function WhatsAppIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24m-3.52 3.66c-.19 0-.42.07-.64.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.7 2.6 4.13 3.65 2.02.87 2.43.7 2.87.66.45-.04 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.28-.25-.12-1.45-.72-1.68-.8-.22-.09-.38-.13-.55.12-.17.25-.62.79-.76.95-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.24 0-.38.12-.5.11-.11.25-.29.38-.43.13-.15.17-.25.26-.42.08-.16.04-.3-.02-.43-.06-.12-.55-1.32-.76-1.8-.2-.48-.4-.41-.55-.42z" />
    </svg>
  );
}

/**
 * Strong, Solid & Elegant Telephone Handset Icon
 * Perfectly balances the visual weight of WhatsAppIcon
 */
export function StrongPhoneIcon({ size = 15, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1A11.36 11.36 0 0 1 8.57 3.9c0-.5-.4-.9-.9-.9H4.15c-.5 0-.9.4-.9.9 0 9.28 7.55 16.83 16.83 16.83.5 0 .9-.4.9-.9v-3.52c-.01-.5-.41-.9-.97-.93z" />
    </svg>
  );
}

/**
 * Strong Phone Call with Waves (Dual option when dynamic calling is indicated)
 */
export function StrongPhoneCallIcon({ size = 15, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}
