"use client";

export function TwitchPlayer({
  channel,
  parent,
  width = "100%",
  height = 480,
}) {
  const src = `https://player.twitch.tv/?channel=${channel}&parent=${parent}`;

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      allowFullScreen
    />
  );
}