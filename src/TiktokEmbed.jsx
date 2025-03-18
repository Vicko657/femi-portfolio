import React from "react";

export default function TiktokEmbed({ videoId }) {
  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@user/video/${videoId}`}
      data-video-id={videoId}
      style={{
        maxWidth: "100%",
        minWidth: "250px",
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    >
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.tiktok.com/@user/video/${videoId}?refer=embed`}
        >
          Watch on TikTok
        </a>
      </section>
    </blockquote>
  );
}
