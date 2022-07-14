import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;

//inspect->network->(search something in bar) -> preview -> snippet property -> title
