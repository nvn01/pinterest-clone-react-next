"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/utils/Button"; // If you already converted Button.vue

export default function Linker() {
  return (
    <div className="linker container" style={{ display: "flex", gap: 5 }}>
      {/* Logo link to Home */}
      <Link href="/" style={logoStyle}>
        <img src="/images/logo.png" alt="Logo" width={24} height={24} />
      </Link>

      {/* Nav links */}
      <Link href="/">
        <Button bgColor="white">Home</Button>
      </Link>
      <Link href="/following">
        <Button bgColor="white">Following</Button>
      </Link>
    </div>
  );
}

const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: 48,
  height: 48,
  borderRadius: "100%",
  boxSizing: "border-box",
  justifyContent: "center",
  cursor: "pointer",
};
