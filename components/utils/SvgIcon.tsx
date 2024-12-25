"use client";

import React, { PropsWithChildren } from "react";

interface SvgIconProps extends PropsWithChildren {
  width?: string;
  height?: string;
}

export default function SvgIcon({ width, height, children }: SvgIconProps) {
  // If you want to do something special with width/height, do it here
  return (
    <div
      className="button"
      style={{
        width,
        height,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
