import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function ShareIcon({ size = 24 }: IconProps) {
  return (
    <svg
      className="gUZ pBj U9O kVc"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z" />
    </svg>
  );
}
