import React from "react";

const VideoDetail = ({ video }) => {
  //to avoid error
  if (!video) {
    return <div>Loading...</div>;
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
