"use client";

import React from "react";
import SearchBox from "@/components/utils/SearchBox";
import Button from "@/components/utils/Button";

interface SaveModalProps {
  show?: boolean;
}

// Sample list of boards
const DUMMY_BOARDS = Array(10).fill("BuzzFeed");

export default function SaveModal({ show = false }: SaveModalProps) {
  if (!show) return null;

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        zIndex: 9,
        width: 300,
        height: 375,
        background: "white",
        left: "-50px",
        top: "55px",
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Search + boards */}
      <div style={{ padding: "15px 16px" }}>
        <SearchBox placeholder="All boards" />
        <div style={{ marginTop: 10, fontSize: 14, fontWeight: 400 }}>
          All boards
        </div>
      </div>

      <div style={{ overflow: "auto", flex: 1, position: "relative" }}>
        {DUMMY_BOARDS.map((board, i) => (
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
                width: 36,
                height: 36,
                marginLeft: 10,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&fit=crop&h=48&w=48"
                alt=""
              />
            </div>
            <div
              style={{ marginLeft: 8, flex: 1, fontSize: 16, fontWeight: 700 }}
            >
              {board}
            </div>
            <div
              style={{ marginRight: 8, display: "flex", alignItems: "center" }}
            >
              <Button bgColor="#e60023" color="white">
                Save
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "12px 16px",
          fontSize: 16,
          boxShadow: "0 -8px 20px #0000001f",
        }}
      >
        <div
          style={{
            borderRadius: 8,
            padding: "8px",
            fontWeight: 700,
          }}
          onClick={() => console.log("Create board clicked")}
        >
          Create board
        </div>
      </div>
    </div>
  );
}
