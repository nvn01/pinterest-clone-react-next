import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function MessageIcon({ size = 24 }: IconProps) {
  return (
    <svg
      className="Hn_ gUZ B9u U9O kVc"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
      fill="#767676" // Add this line
    >
      <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" />
    </svg>
  );
}
