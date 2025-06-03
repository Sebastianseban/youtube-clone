import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS_API } from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails();
    }
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const res = await fetch(VIDEO_DETAILS_API(videoId));
      const data = await res.json();
      console.log(data.items[0], "Fetched Video Data");
      setVideoData(data.items[0]);
    } catch (error) {
      console.error("Failed to fetch video details:", error);
    }
  };

  if (!videoData) return <div className="p-4">Loading...</div>;

  const { snippet, statistics } = videoData;

  return (
    <div className="p-4">
    <div className="overflow-hidden rounded-xl">
        <iframe
        width="1000px"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

    </div>
      
      <h2 className="text-xl font-bold">{snippet.title}</h2>
      <p className="text-gray-600">{snippet.channelTitle}</p>
      <p className="text-gray-500">
        {Number(statistics.viewCount).toLocaleString()} views
      </p>
    </div>
  );
};

export default WatchPage;
