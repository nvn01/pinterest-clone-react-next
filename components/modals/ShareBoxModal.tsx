"use client";

import React from "react";
import Button from "@/components/utils/Button";
import SearchBox from "@/components/utils/SearchBox";

interface ShareBoxModalProps {
  show?: boolean;
  type?: string;
}

const DUMMY_NOTS = Array(10).fill("BuzzFeed");

export default function ShareBoxModal({
  show = false,
  type = "right",
}: ShareBoxModalProps) {
  if (!show) return null;

  let positionStyle: React.CSSProperties = {};
  if (type === "left") {
    positionStyle = { left: "-340px" };
  } else {
    positionStyle = { left: "60px" };
  }

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        zIndex: "var(--z-modal)",
        width: 325,
        height: 350,
        background: "white",
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
        display: "flex",
        flexDirection: "column",
        ...positionStyle,
      }}
    >
      {/* Header */}
      <div className="flex-none p-4">
        <div className="text-center text-base font-bold py-4">
          Send this profile
        </div>
      </div>

      {/* Search Box */}
      <div className="flex-none px-4 pb-2">
        <SearchBox placeholder="Search by name or email" />
      </div>

      {/* Scrollable List Container */}
      <div
        className="flex-1 overflow-y-auto"
        style={{
          maxHeight: "calc(100% - 140px)", // Adjust based on header + search height
          overscrollBehavior: "contain",
        }}
      >
        {DUMMY_NOTS.map((not, i) => (
          <div key={i} className="flex items-center px-4 py-2 hover:bg-gray-50">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&fit=crop&h=48&w=48"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <div className="text-base font-bold truncate">{not}</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
            <div className="ml-2 flex-shrink-0">
              <Button bgColor="#e60023" color="white">
                Send
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
