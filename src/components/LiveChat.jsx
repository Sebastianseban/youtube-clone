import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";

export const DUMMY_MESSAGES = [
  {
    id: 1,
    name: "CodeWizard",
    message: "Finally fixed that async bug. Took me 3 hours 😅",
  },
  {
    id: 2,
    name: "TechSavvy",
    message: "Dark mode supremacy 💻🌙",
  },
  // ... rest unchanged
];

const LiveChat = () => {
  const dispatch = useDispatch();
  const [chatMsg, setChatMsg] = useState("");
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * DUMMY_MESSAGES.length);
      const message = DUMMY_MESSAGES[randomIndex];

      dispatch(
        addMessage({
          ...message,
          id: Date.now() + Math.random(), // unique id
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[400px] h-[600px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col">
      <div className="border-b border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-sm font-semibold text-gray-800 dark:text-white">
          Top Chat
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex space-y-2 flex-col-reverse space-y-reverse">
        {chatMessage.map((msg) => (
          <ChatMessage key={msg.id} name={msg.name} message={msg.message} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (chatMsg.trim() === "") return;
          dispatch(
            addMessage({
              id: Date.now(), // unique id for user message
              name: "seban",
              message: chatMsg.trim(),
            })
          );
          setChatMsg("");
        }}
        className="border-t border-gray-300 dark:border-gray-700 p-3"
      >
        <input
          onChange={(e) => setChatMsg(e.target.value)}
          value={chatMsg}
          type="text"
          placeholder="Chat..."
          className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
        />
      </form>
    </div>
  );
};

export default LiveChat;
