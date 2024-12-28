import React, { useState, useRef, useEffect } from "react";
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
  };
};

export default function Overlay({ image }: OverlayProps) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const [shareboxModal, setShareboxModal] = useState(false);
  const [angle, setAngle] = useState<"left" | "right">("right");
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const optionButtonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (imageRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const aspectRatio = image.width / image.height;
        const calculatedHeight = containerWidth / aspectRatio;
        containerRef.current.style.height = `${calculatedHeight}px`;
      }
    };

    if (imageLoaded) {
      updateContainerHeight();
    }

    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, [image.width, image.height, imageLoaded]);

  const toggleModal = (type: "share" | "options", e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === "share") {
      setShareboxModal(!shareboxModal);
      setOptionsModal(false);
    } else {
      setOptionsModal(!optionsModal);
      setShareboxModal(false);
    }

    if (optionButtonRef.current) {
      const rect = optionButtonRef.current.getBoundingClientRect();
      setAngle(rect.x > window.innerWidth / 2 ? "left" : "right");
    }
  };

  const goPin = () => {
    router.push(`/pin/${image.id}`);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl cursor-zoom-in group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setOptionsModal(false);
        setShareboxModal(false);
      }}
      onClick={goPin}
    >
      {hover && <SaveBox />}

      <img
        ref={imageRef}
        className="w-full h-auto object-cover rounded-2xl"
        src={image.urls.small}
        alt={image.alt_description}
        onLoad={() => setImageLoaded(true)}
      />

      {hover && (
        <div
          className="absolute bottom-4 right-4 flex gap-2.5"
          style={{ zIndex: "var(--z-buttons)" }}
        >
          <div className="relative">
            <button
              onClick={(e) => toggleModal("share", e)}
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-90 rounded-full hover:bg-opacity-80 transition-colors"
            >
              <ShareIcon size="16" />
            </button>
            {shareboxModal && (
              <div className="fixed" style={{ zIndex: "var(--z-modal)" }}>
                <ShareBoxModal type={angle} show={shareboxModal} />
              </div>
            )}
          </div>

          <div className="relative">
            <button
              ref={optionButtonRef}
              onClick={(e) => toggleModal("options", e)}
              className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-90 rounded-full hover:bg-opacity-80 transition-colors"
            >
              <ThreedotIcon size="16" />
            </button>
            {optionsModal && (
              <div className="fixed" style={{ zIndex: "var(--z-modal)" }}>
                <OptionsModal type={angle} show={optionsModal}>
                  <div className="p-2">
                    <div className="sub-title option-sec">
                      This Pin was inspired by your recent activity
                    </div>
                    <div className="normal-title option-sec gray-hover">
                      Hide Pin
                    </div>
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
          </div>
        </div>
      )}
    </div>
  );
}
