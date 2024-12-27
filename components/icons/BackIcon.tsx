import * as React from "react";

interface IconProps {
  size?: number | string;
}

export default function BackIcon({ size = 24 }: IconProps) {
  return (
    <div
      className="rounded-full bg-white flex items-center justify-center"
      style={{
        width: "40px", // Adjust this value to match Vue version
        height: "40px", // Adjust this value to match Vue version
        padding: "8px", // Adjust this padding to match Vue version
      }}
    >
      <svg
        className="Hn_ gUZ pBj"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-label="Back button"
        role="img"
        fill="black" // Or whatever color the original uses
      >
        <path d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z" />
      </svg>
    </div>
  );
}
