// components/YouTubePlayer.tsx
"use client";

import React from "react";
import ReactPlayer from "react-player";

interface YouTubePlayerProps {
  url: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
  return (
    <div className="w-full aspect-video">
      <ReactPlayer src={url} controls width="100%" height="100%" loop />
    </div>
  );
};

export default YouTubePlayer;
