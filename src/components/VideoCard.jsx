import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{channelTitle}</p>
        <p className="text-sm text-gray-500">{Number(statistics.viewCount).toLocaleString()} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
