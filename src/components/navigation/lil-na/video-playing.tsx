"use client";

import { useVideoPlaying } from "@/store/useVideoPlaying";
import { useEffect, useRef } from "react";

export default function VideoPlaying() {
  const isItPlaying = useVideoPlaying((state) => state.isItPlaying);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isItPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isItPlaying]);

  return (
    <video
      className="w-16 object-cover my-6 h-10 hover:scale-95 duration-100"
      muted
      loop
      ref={videoRef}
    >
      <source src="/gifs/vid3.MP4" type="video/mp4" />
      format error.
    </video>
  );
}
