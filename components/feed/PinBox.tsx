"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import PinContent from "./PinContent";

type TagType = {
  title: string;
};

type PinContentType = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
  tags?: TagType[];
  user?: {
    name: string;
    profile_image: {
      small: string;
    };
    total_likes: number;
  };
  // add more fields as needed
};

interface PinBoxProps {
  pinId: string;
  // In Vue, we had @getByTag="someMethod"
  // in React, we'll use a callback prop:
  onGetByTag?: (tag: string) => void;
}

export default function PinBox({ pinId, onGetByTag }: PinBoxProps) {
  const [content, setContent] = useState<PinContentType | null>(null);

  const getContent = async (pId: string) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${pId}`,
        {
          headers: {
            Authorization:
              "Client-ID cq6La0BAF3iV8t4LisXY1n8XORHw2nIo6Oe1CjLZiqM",
            "Accept-Version": "v1",
          },
        }
      );
      setContent(response.data);

      // If there's a third tag, just like the Vue code
      if (response.data.tags && response.data.tags[2]) {
        onGetByTag?.(response.data.tags[2].title);
      }
    } catch (error) {
      console.error("Failed to fetch pin content:", error);
      setContent(null);
    }
  };

  // Fetch content on mount & whenever pinId changes
  useEffect(() => {
    window.scrollTo(0, 0);
    getContent(pinId);
  }, [pinId]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="pin-box"
      style={{
        display: "flex",
        maxWidth: "1016px",
        margin: "25px auto 50px auto",
        background: "white",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 20px 0px",
        borderRadius: "32px",
        position: "relative",
      }}
    >
      <div
        className="img-holder"
        style={{
          flex: 1,
          borderTopLeftRadius: "32px",
          borderBottomLeftRadius: "32px",
        }}
      >
        <img
          src={content.urls.small}
          alt={content.alt_description}
          style={{
            width: "100%",
            borderTopLeftRadius: "32px",
            borderBottomLeftRadius: "32px",
          }}
        />
      </div>
      {/* PinContent will handle the right panel */}
      <PinContent content={content} />
    </div>
  );
}
