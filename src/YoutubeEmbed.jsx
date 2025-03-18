import React from "react";

export default function YoutubeEmbed({ videoId }) {
  return (
    <iframe
      className="embed-responsive-item"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  );
}
