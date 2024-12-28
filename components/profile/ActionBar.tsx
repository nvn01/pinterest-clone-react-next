"use client";

import React, { useState, useEffect } from "react";
import PenIcon from "@/components/icons/PenIcon";
import AddIcon from "@/components/icons/AddIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";

import Button from "@/components/utils/Button";
import ShareBoxModal from "@/components/modals/ShareBoxModal";
import OptionsModal from "@/components/modals/OptionsModal";

interface ActionBarProps {
  // In Vue, we had @switchTab="(val) => ...".
  // So we define a callback prop to handle tab switching in the parent:
  switchTab?: (val: string) => void;
}

export default function ActionBar({ switchTab }: ActionBarProps) {
  // Replicates "switchButton", "shareboxModal", "settingsModal", and "addModal"
  const [switchButton, setSwitchButton] = useState(false);
  const [shareboxModal, setShareboxModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  // The Vue logic: created() { this.switchTabs("pins"); }
  // We can replicate with useEffect:
  useEffect(() => {
    // On mount, default to "pins"
    handleSwitchTabs("pins");
  }, []);

  const handleSwitchTabs = (val: string) => {
    // Toggle local switchButton
    setSwitchButton((prev) => !prev);
    // Trigger parent callback if provided
    switchTab?.(val);
  };

  return (
    <div
      className="action-bar"
      style={{
        padding: "16px 16px 16px 0",
        position: "sticky",
        top: 70,
        background: "white",
        zIndex: 100,
      }}
    >
      <div
        className="flexing"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left section (Pen, Share) */}
        <div
          className="section settings"
          style={{ display: "flex", flexGrow: 1, gap: 5 }}
        >
          <div className="icon" style={iconStyle}>
            <PenIcon size={20} />
          </div>
          {/* Share icon w/ focus approach */}
          <div
            className="icon"
            tabIndex={0}
            onFocus={() => setShareboxModal(true)}
            onBlur={() => setShareboxModal(false)}
            style={iconStyle}
          >
            <ShareIcon size={20} />
            <ShareBoxModal show={shareboxModal} />
          </div>
        </div>

        {/* Middle section (tabs) */}
        <div
          className="section tabs"
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            gap: 5,
          }}
        >
          <div onClick={() => handleSwitchTabs("boards")}>
            <Button bgColor="white" active={!switchButton}>
              Boards
            </Button>
          </div>
          <div onClick={() => handleSwitchTabs("pins")}>
            <Button bgColor="white" active={switchButton}>
              Pins
            </Button>
          </div>
        </div>

        {/* Right section (filters: settings, add) */}
        <div
          className="section filters"
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
            gap: 5,
          }}
        >
          {/* Settings icon */}
          <div
            className="icon"
            tabIndex={0}
            onFocus={() => setSettingsModal(true)}
            onBlur={() => setSettingsModal(false)}
            style={iconStyle}
          >
            <SettingsIcon size={20} />
            <OptionsModal type="down-up" show={settingsModal}>
              <div className="sub-title option-sec">Sort By</div>
              <div className="normal-title option-sec gray-hover">A to Z</div>
              <div className="normal-title option-sec gray-hover">
                Drag and Drop
              </div>
              <div className="normal-title option-sec gray-hover">
                Last saved to
              </div>
              <div className="sub-title option-sec">View options</div>
              <div className="normal-title option-sec gray-hover">Default</div>
              <div className="normal-title option-sec gray-hover">Compact</div>
            </OptionsModal>
          </div>

          {/* Add icon */}
          <div
            className="icon"
            tabIndex={0}
            onFocus={() => setAddModal(true)}
            onBlur={() => setAddModal(false)}
            style={iconStyle}
          >
            <AddIcon size={20} />
            <OptionsModal type="down-up" show={addModal}>
              <div className="sub-title option-sec">Create</div>
              <div className="normal-title option-sec gray-hover">Pin</div>
              <div className="normal-title option-sec gray-hover">Board</div>
            </OptionsModal>
          </div>
        </div>
      </div>
    </div>
  );
}

const iconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
};
