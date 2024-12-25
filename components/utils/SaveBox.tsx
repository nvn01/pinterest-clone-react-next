"use client";

import React, { useState } from "react";
import SaveModal from "@/components/modals/SaveModal"; // The React version of Save.vue

export default function SaveBox() {
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <div
      className="save-box"
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        width: "calc(100% - 20px)",
        height: 44,
        borderRadius: 12,
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      {/* LEFT BUTTON (Focus to show modal) */}
      <div
        tabIndex={0}
        className="select-button"
        onFocus={() => setShowSaveModal(true)}
        onBlur={() => setShowSaveModal(false)}
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          fontSize: 12,
          padding: "0 12px",
          borderRadius: "12px 0 0 12px",
          backgroundColor: "#efefef",
          fontWeight: 700,
        }}
      >
        <span>Wallpapers</span>
        <span style={{ marginLeft: "auto" }}>
          <svg
            width={12}
            height={12}
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label=""
            role="img"
            style={{ color: "black" }}
          >
            <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" />
          </svg>
        </span>
        <SaveModal show={showSaveModal} />
      </div>

      {/* RIGHT BUTTON (Save) */}
      <div
        className="save-button"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          fontSize: 12,
          fontWeight: 700,
          color: "white",
          backgroundColor: "rgba(230, 0, 35, 0.9)",
          borderRadius: "0 12px 12px 0",
          marginLeft: "auto",
        }}
      >
        <span>Save</span>
      </div>
    </div>
  );
}
