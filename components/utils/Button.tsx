"use client";

import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  active?: boolean;
  bgColor?: string;
  color?: string;
  className?: string;
}

export default function Button({
  children,
  active = false,
  bgColor = "#fff",
  color = "black",
  className,
}: ButtonProps) {
  return (
    <div
      className={clsx(
        "button-link",
        {
          "!bg-black !text-white hover:!bg-black": active,
          "red hover:!bg-[#ca102c]": bgColor === "#e60023",
        },
        className
      )}
      style={{
        backgroundColor: bgColor,
        color,
        fontSize: "16px",
        fontWeight: 700,
        borderRadius: "24px",
        display: "flex",
        height: "48px",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <span>{children}</span>
      </div>
    </div>
  );
}
