"use client";

import React, { useState, useRef, useEffect } from "react";
import SaveModal from "@/components/modals/SaveModal";

export default function SaveBox() {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside to close the modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        modalRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowSaveModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSaveModal(!showSaveModal);
  };

  return (
    <>
      {/* Left Board Selector Button */}
      <div
        className="board-selector"
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 20,
        }}
      >
        <div ref={buttonRef} className="relative">
          <button
            onClick={handleButtonClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              backgroundColor: "white",
              border: "none",
              borderRadius: "24px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: 21,
            }}
            className="hover:brightness-95 transition-all"
          >
            <span>Wallpapers</span>
            <span
              style={{
                transform: showSaveModal ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
              >
                <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" />
              </svg>
            </span>
          </button>

          {/* Modal positioned relative to button */}
          {showSaveModal && (
            <div
              ref={modalRef}
              className="save-modal-container"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: "8px",
                zIndex: 999,
              }}
            >
              <SaveModal show={showSaveModal} />
            </div>
          )}
        </div>
      </div>

      {/* Right Save Button */}
      <div
        className="save-button"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 20,
        }}
      >
        <button
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e60023",
            color: "white",
            border: "none",
            borderRadius: "50%",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          }}
          className="hover:brightness-90 transition-all"
        >
          Save
        </button>
      </div>
    </>
  );
}
