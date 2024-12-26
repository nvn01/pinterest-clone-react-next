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
  page?: string; // e.g., "people", "japan", etc.
}

export default function Feed({ page = "people" }: FeedProps) {
  const [images, setImages] = useState<ImageType[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch images from the Unsplash API
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
      // Append new images to the existing array
      setImages((prev) => [...prev, ...response.data.results]);
      setIsLoaded(true);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  // Initial fetch when the component loads or page changes
  useEffect(() => {
    setImages([]); // Clear previous images
    setPageCount(1); // Reset page count
    getImages(page, 1); // Fetch first page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const bottomOfWindow =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;
      if (bottomOfWindow && isLoaded) {
        const newPage = pageCount + 1;
        setPageCount(newPage);
        setIsLoaded(false); // Prevent multiple triggers
        getImages(page, newPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageCount, isLoaded, page]);

  // Masonry grid configuration
  const breakpointColumnsObj = {
    default: 5, // Default to 5 columns
    1100: 4, // 4 columns at 1100px width
    700: 3, // 3 columns at 700px width
    500: 2, // 2 columns at 500px width
  };

  return (
    <div style={{ padding: "0 24px" }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={image.id || `${image.alt_description}-${index}`}
            className="stack-item"
          >
            <Overlay image={image} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
