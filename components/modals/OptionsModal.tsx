"use client";

import React, { ReactNode } from "react";

interface OptionsModalProps {
  show?: boolean;
  type?: string; // e.g. "down", "down-up", "left", "right", etc.
  children?: ReactNode;
}

export default function OptionsModal({
  show = false,
  type = "",
  children,
}: OptionsModalProps) {
  if (!show) return null;

  // We can do some condition-based style logic here
  let positionStyle: React.CSSProperties = {};
  switch (type) {
    case "down":
      positionStyle = { top: "80px", right: "10px" };
      break;
    case "down-up":
      positionStyle = { top: "55px", right: 0 };
      break;
    case "left":
      positionStyle = { top: "-50px", right: "40px" };
      break;
    case "right":
      positionStyle = { top: "-50px", right: "-210px" };
      break;
    // Add more as needed...
  }

  return (
    <div
      className={`modal ${type}`}
      style={{
        position: "absolute",
        background: "white",
        zIndex: 7,
        width: 200,
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
        ...positionStyle,
      }}
    >
      <div style={{ padding: "0 8px", marginBottom: 8 }}>{children}</div>
    </div>
  );
}
