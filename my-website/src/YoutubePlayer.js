import React from 'react';
import YouTube from 'react-youtube';

import './youtubePlayer.css';

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    width: '100%',
    playerVars: {
      // Set the 'autoplay' option to 1 if you want the video to play automatically
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
