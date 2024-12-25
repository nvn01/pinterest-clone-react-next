"use client";

import Feed from "@/components/feed/Feed";

export default function FollowingPage() {
  return (
    <div className="following" style={{ paddingTop: "90px" }}>
      <h1>Following</h1>
      <Feed page="japan" />
    </div>
  );
}
