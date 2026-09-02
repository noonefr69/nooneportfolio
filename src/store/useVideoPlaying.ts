import { create } from "zustand";

interface VideoPlayingProps {
  isItPlaying: boolean;
  startPlaying: () => void;
}

export const useVideoPlaying = create<VideoPlayingProps>((set) => ({
  isItPlaying: true,

  startPlaying: () => set((state) => ({ isItPlaying: !state.isItPlaying })),
}));
