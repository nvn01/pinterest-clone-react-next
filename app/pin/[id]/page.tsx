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
            width: "48px",
            height: "48px",
            backgroundColor: "white",
            cursor: "pointer",
            borderRadius: "50%", // Add this to make it circular
            display: "flex", // Add this
            alignItems: "center", // Add this
            justifyContent: "center", // Add this
            boxShadow: "0 0 0 1px rgb(0 0 0 / 0.1)", // Optional: adds a subtle border
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

      {/* Re-render Feed with new tag each time handleGetByTag is called */}
      <Feed key={visitCount} page={tag} />
    </div>
  );
}
