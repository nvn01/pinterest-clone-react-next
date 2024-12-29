"use client";

import React from "react";

export default function Header() {
  return (
    <div className="header" style={{ marginBottom: 25, textAlign: "center" }}>
      <div
        className="profile-img"
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          margin: "0 auto",
          background: "rgba(0, 0, 0, 0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 50,
          fontWeight: 600,
        }}
      >
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="name" style={{ marginTop: 10 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>
          Novandra Anugrah
        </h1>
      </div>
      <div className="follower-box" style={{ marginTop: 5 }}>
        3 followers · 3 following
      </div>
    </div>
  );
}
