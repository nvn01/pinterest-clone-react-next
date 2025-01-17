"use client";

import React from "react";

interface SearchBoxProps {
  placeholder?: string;
}

export default function SearchBox({
  placeholder = "Search by name or email",
}: SearchBoxProps) {
  return (
    <div
      className="search container"
      style={{ alignItems: "center", height: 48, width: "100%" }}
    >
      <div
        className="search-box"
        style={{
          background: "#ffffff",
          borderRadius: 24,
          padding: "0 15px",
          display: "flex",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          border: "2px solid rgb(221, 221, 221)",
        }}
      >
        <div
          className="search-logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            aria-label="Arama simgesi"
            role="img"
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
        <div className="close-logo" />
      </div>
    </div>
  );
}
