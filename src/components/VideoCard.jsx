import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="w-full h-[310px] max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 truncate">{channelTitle}</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {Number(statistics.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
