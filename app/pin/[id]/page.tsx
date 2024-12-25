"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import PinBox from "@/components/feed/PinBox";
import Feed from "@/components/feed/Feed";

// If you have icons for "Back", "Add", "Question", import them:
import BackIcon from "@/components/icons/BackIcon";
import AddIcon from "@/components/icons/AddIcon";
import QuestionIcon from "@/components/icons/QuestionIcon";

export default function PinDetailPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  // For "More Like This" feed
  const [tag, setTag] = useState("");
  const [visitCount, setVisitCount] = useState(0);

  // Equivalent to the Vue "getByTag" method
  const handleGetByTag = (newTag: string) => {
    setTag(newTag);
    setVisitCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="pin" style={{ paddingTop: "90px", position: "relative" }}>
      <div
        className="floting-buttons"
        style={{
          position: "fixed",
          zIndex: 4,
          width: "97%",
          height: "80%",
          margin: "20px 24px",
        }}
      >
        {/* Back button */}
        <div
          className="icon"
          style={{
            width: 48,
            height: 48,
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
        >
          <BackIcon size="24" />
        </div>

        {/* Corner buttons */}
        <div
          className="corner-buttons"
          style={{ position: "absolute", right: 0, bottom: 0 }}
        >
          <div
            className="icon"
            style={{
              width: 32,
              height: 32,
              marginTop: 10,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <AddIcon size="16" />
          </div>
          <div
            className="icon"
            style={{
              width: 32,
              height: 32,
              marginTop: 10,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <QuestionIcon size="16" />
          </div>
        </div>
      </div>

      {/* PinBox will fetch and display the single pin */}
      <PinBox pinId={id} onGetByTag={handleGetByTag} />

      <h2>More Like This</h2>
      {/* Re-render Feed with new tag each time handleGetByTag is called */}
      <Feed key={visitCount} page={tag} />
    </div>
  );
}
