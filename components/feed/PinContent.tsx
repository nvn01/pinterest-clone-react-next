"use client";

import React from "react";
import ShareIcon from "../icons/ShareIcon";
import ThreedotIcon from "../icons/ThreedotIcon";
import SaveBox from "../utils/SaveBox";
import Button from "../utils/Button";

type UserType = {
  name: string;
  total_likes: number;
  profile_image: {
    small: string;
  };
};

type PinContentType = {
  id: string;
  description?: string;
  alt_description?: string;
  links?: {
    download: string;
  };
  user?: UserType;
};

interface PinContentProps {
  content: PinContentType;
}

export default function PinContent({ content }: PinContentProps) {
  const userName = content?.user?.name || "Unknown User";
  const userLikes = content?.user?.total_likes || 0;
  const userProfileImg = content?.user?.profile_image?.small || "";
  const description = content?.description || "";
  const altDescription = content?.alt_description || "";
  const downloadLink = content?.links?.download || "#";

  return (
    <div
      className="panel-holder"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      {/* Top: Icons row */}
      <div
        className="flex-section"
        style={{
          display: "flex",
          padding: "15px",
          justifyContent: "space-between",
        }}
      >
        {/* Left icons */}
        <div style={{ display: "flex" }}>
          <div
            className="icon"
            style={{
              width: 48,
              height: 48,
              borderRadius: "100%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThreedotIcon size="20" />
          </div>
          <div
            className="icon"
            style={{
              width: 48,
              height: 48,
              borderRadius: "100%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShareIcon size="20" />
          </div>
        </div>

        {/* Right: SaveBox or Button */}
        <div
          className="util-box"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            maxWidth: "250px",
            position: "relative",
          }}
        >
          <SaveBox />
        </div>
      </div>

      {/* Middle: Description */}
      <div style={{ textAlign: "left", padding: "15px 30px" }}>
        <a
          href={downloadLink}
          className="resc-link"
          style={{ fontSize: 16, color: "#111" }}
        >
          unsplash.net
        </a>
        <h1 style={{ fontWeight: "bold", fontSize: 36, marginBottom: 0 }}>
          {description}
        </h1>
        <p style={{ marginTop: 5 }}>{altDescription}</p>
      </div>

      {/* Bottom: User Info + Follow */}
      <div
        className="flex-section"
        style={{
          display: "flex",
          padding: "15px 30px",
          justifyContent: "space-between",
        }}
      >
        <div
          className="user-info-box"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="profile-img"
            style={{
              width: 32,
              height: 32,
              borderRadius: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={userProfileImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div
            className="profile-infos"
            style={{ marginLeft: 10, textAlign: "left" }}
          >
            <div className="name" style={{ fontWeight: 700, fontSize: 14 }}>
              {userName}
            </div>
            <div
              className="followers"
              style={{ fontWeight: 400, fontSize: 14 }}
            >
              {userLikes} followers
            </div>
          </div>
        </div>
        <div className="follow-box">
          <Button bgColor="#efefef">Follow</Button>
        </div>
      </div>
    </div>
  );
}
