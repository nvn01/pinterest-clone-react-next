import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function DownIcon({ size = 24 }: IconProps) {
  return (
    <svg
      className="gUZ B9u U9O kVc"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
      fill="#767676" // Add this line
    >
      <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" />
    </svg>
  );
}
