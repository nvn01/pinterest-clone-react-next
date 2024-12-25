"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ShareIcon from "../icons/ShareIcon";
import ThreedotIcon from "../icons/ThreedotIcon";
import SaveBox from "../utils/SaveBox";
import OptionsModal from "../modals/OptionsModal";
import ShareBoxModal from "../modals/ShareBoxModal";

type OverlayProps = {
  image: {
    id: string;
    width: number;
    height: number;
    alt_description: string;
    urls: {
      small: string;
    };
    // Add more fields if needed
  };
};

export default function Overlay({ image }: OverlayProps) {
  const router = useRouter();

  const [hover, setHover] = useState<boolean>(false);
  const [optionsModal, setOptionsModal] = useState<boolean>(false);
  const [shareboxModal, setShareboxModal] = useState<boolean>(false);
  const [angle, setAngle] = useState<"left" | "right">("right");

  const optionButtonRef = useRef<HTMLDivElement>(null);

  // Toggle share modal
  const toggleShareModal = () => {
    const newValue = !shareboxModal;
    setShareboxModal(newValue);
    // Decide angle based on position
    if (optionButtonRef.current) {
      const xPos = optionButtonRef.current.getBoundingClientRect().x;
      xPos > window.innerWidth / 2 ? setAngle("left") : setAngle("right");
    }
  };

  // Toggle options modal
  const toggleOptionsModal = () => {
    const newValue = !optionsModal;
    setOptionsModal(newValue);
    if (optionButtonRef.current) {
      const xPos = optionButtonRef.current.getBoundingClientRect().x;
      xPos > window.innerWidth / 2 ? setAngle("left") : setAngle("right");
    }
  };

  // Navigate to pin detail
  const goPin = (imageId: string) => {
    router.push(`/pin/${imageId}`);
  };

  // Calculate dynamic height (from the original Vue approach)
  const containerHeight = image.height / (image.width / 230);

  return (
    <div
      className="overlay"
      style={{ height: `${containerHeight}px`, position: "relative" }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* The "SaveBox" that appears on hover */}
      {hover && <SaveBox />}

      <img
        className="img"
        src={image.urls.small}
        alt={image.alt_description}
        style={{ width: "100%", borderRadius: "16px" }}
      />

      {/* The icons that appear on hover */}
      {hover && (
        <div
          className="util-box"
          style={{
            position: "absolute",
            bottom: 15,
            right: 15,
            display: "flex",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={toggleShareModal}
            tabIndex={0}
          >
            <ShareIcon size="16" />
          </div>
          <ShareBoxModal type={angle} show={shareboxModal} />

          <div
            ref={optionButtonRef}
            style={{
              width: 32,
              height: 32,
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={toggleOptionsModal}
            tabIndex={0}
          >
            <ThreedotIcon size="16" />
          </div>
          <OptionsModal type={angle} show={optionsModal}>
            <div style={{ padding: "8px" }}>
              <div className="sub-title option-sec">
                This Pin was inspired by your recent activity
              </div>
              <div className="normal-title option-sec gray-hover">Hide Pin</div>
              <div className="normal-title option-sec gray-hover">
                Download Pin
              </div>
              <div className="normal-title option-sec gray-hover">
                Report Pin
              </div>
            </div>
          </OptionsModal>
        </div>
      )}

      {/* Clickable area to go to the pin page */}
      <div
        className="opacity-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100% - 4px)",
          background: "#00000015",
          borderRadius: "16px",
          cursor: "zoom-in",
        }}
        onClick={() => goPin(image.id)}
      ></div>
    </div>
  );
}
