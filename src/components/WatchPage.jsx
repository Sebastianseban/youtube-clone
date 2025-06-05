
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

// Importing Icons
import {
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

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

      {/* Video Info */}
      <h2 className="text-xl font-bold mt-4">{snippet.title}</h2>
      
      <p className="text-gray-500 mb-2">
        {Number(statistics.viewCount).toLocaleString()} views
      </p>

      {/* Action Buttons Bar */}
      <div className="flex flex-wrap items-center justify-between py-2 border-b border-gray-300 mb-4">
        {/* Subscribe Button */}
        <div className="flex justify-center items-center gap-3">
          <p className="text-black text-lg font-bold">{snippet.channelTitle}</p>
        <button className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800">
          Subscribe
        </button>
        </div>

        {/* Icon Buttons */}
        <div className="flex gap-4 text-xl items-center">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <AiOutlineLike />
            <span className="text-sm">
              {Number(statistics.likeCount).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <AiOutlineDislike />
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <PiShareFatLight />
            <span className="text-sm">Share</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <HiDownload />
            <span className="text-sm">Download</span>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <BsThreeDots />
          </div>
        </div>
      </div>

      {/* Comments */}
      {/* <CommentsContainer /> */}
      <CommentsContainer/>  
    </div>
  );
};

export default WatchPage;
