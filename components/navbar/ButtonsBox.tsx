"use client";

import React, { useState } from "react";
import Link from "next/link";

// Icons
import UpdateIcon from "@/components/icons/UpdateIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import DownIcon from "@/components/icons/DownIcon";

// Modals
import UpdatesModal from "@/components/modals/UpdatesModal";
import InboxModal from "@/components/modals/InboxModal";
import OptionsModal from "@/components/modals/OptionsModal";

export default function ButtonsBox() {
  const [updatesModal, setUpdatesModal] = useState(false);
  const [inboxModal, setInboxModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);

  return (
    <div
      className="buttons container"
      style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}
    >
      {/* 1. UPDATES BUTTON */}
      <div
        className="icon"
        tabIndex={0}
        onFocus={() => setUpdatesModal(true)}
        onBlur={() => setUpdatesModal(false)}
        style={iconStyle}
      >
        <UpdateIcon size={24} />
        <UpdatesModal show={updatesModal} />
      </div>

      {/* 2. INBOX BUTTON */}
      <div
        className="icon"
        tabIndex={0}
        onFocus={() => setInboxModal(true)}
        onBlur={() => setInboxModal(false)}
        style={iconStyle}
      >
        <MessageIcon size={24} />
        <InboxModal show={inboxModal} />
      </div>

      {/* 3. PROFILE LINK (Equivalent to router-link to="/profile") */}
      <Link href="/profile" className="button">
        {/* This circle with “R” was in the Vue code: */}
        <div className="logo" style={logoStyle}>
          <span>R</span>
        </div>
      </Link>

      {/* 4. OPTIONS BUTTON */}
      <div
        className="icon"
        tabIndex={0}
        onFocus={() => setOptionsModal(true)}
        onBlur={() => setOptionsModal(false)}
        style={iconStyle}
      >
        <DownIcon size={12} />
        <OptionsModal type="down" show={optionsModal}>
          <div className="sub-title option-sec">Accounts</div>
          <div className="normal-title option-sec gray-hover">
            Add another account
          </div>
          <div className="normal-title option-sec gray-hover">
            Add a free business account
          </div>
          <div className="sub-title option-sec">More Settings</div>
          <div className="normal-title option-sec gray-hover">Settings</div>
          <div className="normal-title option-sec gray-hover">
            Tune your home feed
          </div>
          <div className="normal-title option-sec gray-hover">Log out</div>
        </OptionsModal>
      </div>
    </div>
  );
}

// You can swap these inline styles for Tailwind or a CSS Module
const iconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  cursor: "pointer",
};

const logoStyle: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.06)",
  width: 24,
  height: 24,
  borderRadius: "100%",
  fontSize: 10,
  fontWeight: 700,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};
