"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Overlay from "./Overlay";

interface ImageType {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
  width: number;
  height: number;
}

interface FeedProps {
  page?: string;
}

export default function Feed({ page = "people" }: FeedProps) {
  const [images, setImages] = useState<ImageType[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [columnWidth, setColumnWidth] = useState(230);
  const [breakpointCols, setBreakpointCols] = useState({
    default: 4,
    1100: 4,
    700: 3,
    500: 2,
  });

  const getImages = async (topic: string, nextPage: number) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${topic}&per_page=30&page=${nextPage}`,
        {
          headers: {
            Authorization:
              "Client-ID cq6La0BAF3iV8t4LisXY1n8XORHw2nIo6Oe1CjLZiqM",
            "Accept-Version": "v1",
          },
        }
      );
      setImages((prev) => [...prev, ...response.data.results]);
      setIsLoaded(true);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  // Calculate breakpoints on mount and window resize
  useEffect(() => {
    const calculateBreakpoints = () => {
      const width = window.innerWidth;
      const padding = 48; // 24px padding on each side
      const gutter = 16;
      const defaultCols = Math.floor((width - padding) / (230 + gutter));

      setBreakpointCols({
        default: defaultCols,
        1100: 4,
        700: 3,
        500: 2,
      });

      const minColumns = Math.floor((width - padding) / (columnWidth + gutter));
      const actualWidth = Math.floor(
        (width - padding - gutter * (minColumns - 1)) / minColumns
      );
      setColumnWidth(actualWidth);
    };

    // Only run on client side
    if (typeof window !== "undefined") {
      calculateBreakpoints();
      window.addEventListener("resize", calculateBreakpoints);

      return () => window.removeEventListener("resize", calculateBreakpoints);
    }
  }, [columnWidth]);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const bottomOfWindow =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;

      if (bottomOfWindow && isLoaded) {
        const newPage = pageCount + 1;
        setPageCount(newPage);
        setIsLoaded(false);
        getImages(page, newPage);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pageCount, isLoaded, page]);

  // Reset and fetch images when page changes
  useEffect(() => {
    setImages([]);
    setPageCount(1);
    getImages(page, 1);
  }, [page]);

  return (
    <div className="feed px-6">
      <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={image.id || `${image.alt_description}-${index}`}
            className="stack-item"
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <Overlay image={image} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
