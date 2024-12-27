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
    <div className="buttons flex gap-1.5 items-center shrink-0">
      {/* 1. UPDATES BUTTON */}
      <div
        className="icon hover:bg-gray-100 rounded-full"
        tabIndex={0}
        onFocus={() => setUpdatesModal(true)}
        onBlur={() => setUpdatesModal(false)}
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <UpdateIcon size={24} />
        <UpdatesModal show={updatesModal} />
      </div>

      {/* 2. INBOX BUTTON */}
      <div
        className="icon hover:bg-gray-100 rounded-full"
        tabIndex={0}
        onFocus={() => setInboxModal(true)}
        onBlur={() => setInboxModal(false)}
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <MessageIcon size={24} />
        <InboxModal show={inboxModal} />
      </div>

      {/* 3. PROFILE LINK */}
      <Link
        href="/profile"
        className="hover:bg-gray-100 rounded-full"
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#efefef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#111",
              lineHeight: "1",
            }}
          >
            R
          </span>
        </div>
      </Link>

      {/* 4. OPTIONS BUTTON */}
      <div
        className="icon hover:bg-gray-100 rounded-full"
        tabIndex={0}
        onFocus={() => setOptionsModal(true)}
        onBlur={() => setOptionsModal(false)}
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
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
