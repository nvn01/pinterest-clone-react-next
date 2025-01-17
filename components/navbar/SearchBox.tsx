"use client";

import React from "react";

interface Props {
  placeholder?: string;
}

export default function SearchBox({ placeholder = "Search" }: Props) {
  return (
    <div
      className="search"
      style={{
        flexGrow: 1,
        margin: "0 8px",
        height: 48,
        minWidth: 0,
        flex: "1 1 auto",
        display: "flex",
      }}
    >
      <div
        className="search-box"
        style={{
          background: "#efefef",
          borderRadius: 24,
          padding: "0 15px",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: 10 }}>
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            aria-label="Search icon"
            role="img"
            fill="#767676"
          >
            <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" />
          </svg>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}
