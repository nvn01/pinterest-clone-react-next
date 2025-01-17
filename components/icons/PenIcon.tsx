import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function PenIcon({ size = 24 }: IconProps) {
  return (
    <svg
      className="gUZ pBj U9O kVc"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
    >
      <path d="M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z" />
    </svg>
  );
}
