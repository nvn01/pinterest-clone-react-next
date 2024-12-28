// components/navbar/Navbar.tsx
"use client";

import React from "react";
import Linker from "./Linker";
import SearchBox from "./SearchBox";
import ButtonsBox from "./ButtonsBox";

export default function Navbar() {
  return (
    <div
      id="navbar"
      style={{
        display: "flex",
        width: "100%",
        background: "white",
        padding: "4px 16px",
        position: "fixed",
        top: 0,
        height: 72,
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        zIndex: "var(--z-navbar)",
        boxSizing: "border-box",
      }}
    >
      <Linker />
      <SearchBox />
      <ButtonsBox />
    </div>
  );
}
