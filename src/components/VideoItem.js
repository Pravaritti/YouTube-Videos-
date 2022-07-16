import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      /*so that the callback function is called only for the video being clicked on*/ className="video-item item"
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />{" "}
      {/*alt shows up when the img fails to show up*/}
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

//inspect->network->(search something in bar) -> preview -> snippet property -> title
