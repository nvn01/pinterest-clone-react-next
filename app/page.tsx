"use client";

import Feed from "@/components/feed/Feed";

export default function HomePage() {
  return (
    <div className="home" style={{ paddingTop: "10px" }}>
      {/* The Feed component is where you'll replicate your image grid logic */}
      <Feed page="people" />
    </div>
  );
}
