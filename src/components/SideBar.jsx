import React from "react";
import { MdOutlineVideoLibrary, MdOutlineSubscriptions } from "react-icons/md";
import { FaMusic, FaRunning, FaGamepad, FaFilm } from "react-icons/fa";
import { BiVideo, BiTimeFive } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { useSelector } from "react-redux";

const SideBar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
  if (!isMenuOpen) return null;


 return (
    <div className="p-5 w-56 h-screen shadow-lg overflow-y-auto text-sm space-y-6">
      <ul className="space-y-3">
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
          <SiYoutubeshorts /> <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
          <BiVideo /> <span>Videos</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
          <MdLiveTv /> <span>Live</span>
        </li>
      </ul>

      <hr />

      <div>
        <h1 className="font-semibold mb-2 text-gray-600">Subscriptions</h1>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaMusic /> <span>Music</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaRunning /> <span>Sports</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaGamepad /> <span>Gaming</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaFilm /> <span>Movies</span>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h1 className="font-semibold mb-2 text-gray-600">Watch Later</h1>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaMusic /> <span>Music</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaRunning /> <span>Sports</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaGamepad /> <span>Gaming</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <FaFilm /> <span>Movies</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
