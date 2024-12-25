"use client";

import { useState } from "react";
import Header from "@/components/profile/Header";
import ActionBar from "@/components/profile/ActionBar";
import Feed from "@/components/feed/Feed";

export default function ProfilePage() {
  // Replicates the "feedResc" state from Vue
  const [feedResc, setFeedResc] = useState("boards");

  const handleSwitchTab = (val: string) => {
    setFeedResc(val);
  };

  return (
    <div
      className="profile"
      style={{ marginTop: "90px", color: "black", fontWeight: 600 }}
    >
      <Header />
      {/* ActionBar might emit an event, so we pass a prop to handle it */}
      <ActionBar switchTab={handleSwitchTab} />

      {/* Only show Feed when feedResc === 'pins' */}
      {feedResc === "pins" && <Feed page="javascript" />}
    </div>
  );
}
