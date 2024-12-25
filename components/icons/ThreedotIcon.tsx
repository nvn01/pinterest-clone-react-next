import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function ThreedotIcon({ size = 24 }: IconProps) {
  return (
    <svg
      className="gUZ pBj"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label="More options"
      role="img"
    >
      <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
    </svg>
  );
}
