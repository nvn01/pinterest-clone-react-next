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
  page?: string; // e.g. "people", "japan", etc.
}

export default function Feed({ page = "people" }: FeedProps) {
  const [images, setImages] = useState<ImageType[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // Just fetch data
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
      // Append to existing images
      setImages((prev) => [...prev, ...response.data.results]);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Initial fetch
  useEffect(() => {
    getImages(page, pageCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const bottomOfWindow =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;
      if (bottomOfWindow && isLoaded) {
        const newPage = pageCount + 1;
        setPageCount(newPage);
        setIsLoaded(false);
        getImages(page, newPage);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageCount, isLoaded, page]);

  // react-masonry-css configuration
  const breakpointColumnsObj = {
    default: 5, // 5 columns if the screen is wide
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <div style={{ padding: "0 24px" }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid" // default class
        columnClassName="my-masonry-grid_column" // default class
      >
        {images.map((image) => (
          <div key={image.id} className="stack-item">
            <Overlay image={image} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
