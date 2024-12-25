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
        padding: "8px 20px",
        position: "fixed",
        top: 0,
        height: 80,
        alignItems: "center",
        zIndex: 6,
        boxSizing: "border-box",
      }}
    >
      <Linker />
      <SearchBox />
      <ButtonsBox />
    </div>
  );
}
