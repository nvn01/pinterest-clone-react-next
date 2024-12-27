"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/utils/Button";

export default function Linker() {
  const pathname = usePathname();

  return (
    <div className="linker flex items-center gap-1.5">
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          width: 48,
          height: 48,
          borderRadius: "100%",
          boxSizing: "border-box",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <img src="/images/logo.png" alt="Logo" width={24} height={24} />
      </Link>

      <Link href="/">
        <Button bgColor="white" active={pathname === "/"}>
          Home
        </Button>
      </Link>

      <Link href="/following">
        <Button bgColor="white" active={pathname === "/following"}>
          Following
        </Button>
      </Link>
    </div>
  );
}
