"use client";

import React from "react";

interface UpdatesModalProps {
  show?: boolean;
}

// Sample data
const DUMMY_NOTS = Array(15).fill(
  "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>"
);

export default function UpdatesModal({ show = false }: UpdatesModalProps) {
  if (!show) return null;

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        top: 80,
        right: 10,
        width: 360,
        height: 600,
        background: "white",
        zIndex: 7,
        borderRadius: 16,
        boxShadow: "rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "23px 0",
          fontSize: 16,
          textAlign: "center",
          fontWeight: 700,
          boxShadow: "0 6px 8px -4px rgba(0,0,0,0.1)",
        }}
      >
        Updates
      </div>
      <div
        style={{
          overflow: "auto",
          position: "relative",
          flex: 1,
        }}
      >
        {DUMMY_NOTS.map((notHTML, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              padding: "8px 0",
              marginBottom: 16,
              marginLeft: 8,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <div
              style={{
                flex: 1,
                marginLeft: 16,
                fontSize: 16,
                color: "#111",
              }}
              // dangerouslySetInnerHTML to replicate v-html from Vue
              dangerouslySetInnerHTML={{ __html: notHTML }}
            />
            <div
              style={{
                width: 48,
                height: 48,
                marginRight: 4,
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <img
                width={48}
                height={48}
                src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&fit=crop&h=48&w=48"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
