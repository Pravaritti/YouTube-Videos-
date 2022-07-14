import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
    //map returns a brand new array which will contain a list of different video item components
  });

  //destructure props
  return <div>{renderedList}</div>;
};

export default VideoList;
