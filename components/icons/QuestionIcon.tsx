import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function QuestionIcon({ size = 24 }: IconProps) {
  return (
    <svg
      className="gUZ pBj U9O kVc"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <path d="M14.34 21.2c0 1.57-1.19 2.8-2.78 2.8-1.58 0-2.77-1.23-2.77-2.8 0-1.57 1.19-2.8 2.77-2.8 1.59 0 2.78 1.23 2.78 2.8m-2.53-10.88c1.41-1.23 3.3-2.05 3.3-3.87 0-1.45-1.24-2.36-2.95-2.36-2.12 0-3.52 1.48-3.55 3.43H3.75C3.88 3.3 6.96 0 12.34 0c4.86 0 7.91 2.52 7.91 6.32 0 2.36-1.09 3.81-2.3 4.78-1.68 1.33-2.84 1.89-3.49 2.61-.5.57-.62 1.04-.65 1.95H9.45c0-2.64.65-3.9 2.36-5.34" />
    </svg>
  );
}
