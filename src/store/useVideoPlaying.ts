import { create } from "zustand";

interface VideoPlayingState {
  isPlaying: boolean;
  togglePlaying: () => void;
}

export const useVideoPlaying = create<VideoPlayingState>((set) => ({
  isPlaying: true,

  togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
