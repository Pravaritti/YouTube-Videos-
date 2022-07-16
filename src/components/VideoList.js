import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
    //map returns a brand new array which will contain a list of different video item components
  });

  //destructure props
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
