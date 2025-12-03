"use client";

import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

interface TwitchEmbedProps {
  channel: string;
}

const TwitchPlayer: React.FC<TwitchEmbedProps> = ({ channel }) => {
  return (
    <TwitchEmbed
      channel={channel}
      id={channel}
      width="100%"
      height="480px"
      withChat={false}
      muted={false}
      onVideoPause={() => console.log('Video paused')}
      onVideoPlay={() => console.log('Video played')}
    />
  );
};

export default TwitchPlayer;