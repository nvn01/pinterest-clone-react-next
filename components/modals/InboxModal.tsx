"use client";

import React from "react";
import SearchBox from "@/components/utils/SearchBox"; // Or wherever your SearchBox is

interface InboxModalProps {
  show?: boolean;
}

// Sample data array for "nots"
const DUMMY_NOTS = Array(10).fill("BuzzFeed");

export default function InboxModal({ show = false }: InboxModalProps) {
  if (!show) return null;

  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: "80px",
        right: 0,
        width: "360px",
        height: "100%",
        background: "white",
        zIndex: 7,
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
        overscrollBehavior: "none",
      }}
    >
      <div style={{ padding: "0 8px" }}>
        <div
          style={{
            padding: "23px 0",
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Inbox
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            textAlign: "left",
            padding: "0 8px",
          }}
        >
          Share ideas with your friends
        </div>
      </div>
      <div style={{ padding: "15px 16px" }}>
        <div style={{ marginBottom: 10 }}>
          <SearchBox />
        </div>
        <div style={{ fontSize: 14, fontWeight: 400, paddingTop: 10 }}>
          Suggested
        </div>
      </div>
      <div style={{ position: "relative", overflow: "auto" }}>
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
                marginLeft: 20,
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <img
                width={48}
                height={48}
                style={{ borderRadius: "100%" }}
                src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&fit=crop&h=48&w=48"
                alt=""
              />
            </div>
            <div
              style={{
                marginLeft: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700 }}>{not}</div>
              <div style={{ fontSize: 12, color: "#767676" }}>Following</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
