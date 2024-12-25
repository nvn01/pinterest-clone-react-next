"use client";

import React from "react";
import Button from "@/components/utils/Button";
import SearchBox from "@/components/utils/SearchBox";

interface ShareBoxModalProps {
  show?: boolean;
  type?: string; // "left" or default
}

// Sample suggestions
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
        zIndex: 9,
        width: 325,
        height: 350,
        background: "white",
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
        ...positionStyle,
      }}
    >
      <div style={{ padding: "8px" }}>
        <div
          style={{
            padding: "23px 0",
            fontSize: 16,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Send this profile
        </div>
      </div>
      <div style={{ padding: "15px 16px" }}>
        <SearchBox placeholder="Search by name or email" />
      </div>
      <div style={{ overflow: "auto", flex: 1, position: "relative" }}>
        {DUMMY_NOTS.map((not, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              padding: "8px 0",
              marginLeft: 8,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                marginLeft: 10,
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&fit=crop&h=48&w=48"
                alt=""
              />
            </div>
            <div style={{ marginLeft: 16, flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{not}</div>
              <div style={{ fontSize: 12, color: "#767676" }}>Following</div>
            </div>
            <div
              style={{ marginRight: 8, display: "flex", alignItems: "center" }}
            >
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
