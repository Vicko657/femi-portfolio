import React from "react";

export default function YoutubeEmbed({ videoId }) {
  return (
    <iframe
      style={{
        maxWidth: "100%",
        minWidth: "500px",
        margin: "0px",
        transformOrigin: "20% 40%",
      }}
      width="570"
      height="355"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}
