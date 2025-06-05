import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg mb-2 shadow-sm">
      <FaUserCircle className="text-3xl text-gray-600 mt-1" />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
