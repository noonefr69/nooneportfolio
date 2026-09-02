"use client";

import { useVideoPlaying } from "@/store/useVideoPlaying";
import { useEffect, useRef } from "react";

export default function VideoPlaying() {
  const isPlaying = useVideoPlaying((state) => state.isPlaying);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <video
      className="w-16 object-cover my-6 h-10 hover:scale-95 duration-100"
      muted
      loop
      playsInline
      ref={videoRef}
    >
      <source src="/gifs/vid3.MP4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
