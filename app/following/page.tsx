"use client";

import Feed from "@/components/feed/Feed";

export default function FollowingPage() {
  return (
    <div className="following" style={{ paddingTop: "90px" }}>
      <Feed page="japan" />
    </div>
  );
}
