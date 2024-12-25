"use client";

import React, { PropsWithChildren } from "react";
import clsx from "clsx"; // Optional: For conditional classNames

interface ButtonProps extends PropsWithChildren {
  active?: boolean;
  bgColor?: string;
  color?: string;
}

export default function Button({
  children,
  active = false,
  bgColor = "#fff",
  color = "black",
}: ButtonProps) {
  // Example inline style + class combos
  const style = {
    backgroundColor: bgColor,
    color,
  };

  // If you prefer Tailwind or CSS modules, replace with your approach
  return (
    <a className="button" style={{ textDecoration: "none" }}>
      <div
        className={clsx("button-link", {
          active,
          red: bgColor === "#e60023",
        })}
        style={style}
      >
        <div style={innerDivStyle}>
          <span>{children}</span>
        </div>
      </div>
    </a>
  );
}

// Quick inline style for demonstration
const innerDivStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 16px",
};
