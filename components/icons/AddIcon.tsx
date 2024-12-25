import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function AddIcon({ size = 24 }: IconProps) {
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
      <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4" />
    </svg>
  );
}
