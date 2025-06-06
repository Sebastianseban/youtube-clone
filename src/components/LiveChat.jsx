// import React from 'react'
// import ChatMessage from './ChatMessage'

// const LiveChat = () => {
//   return (
//     <div className='w-[400px] h-full border rounded-lg '>
//         <div className='border-b px-3 py-1'>
//             <h1>Top Chat</h1>
//         </div>
//         <div>
//             <ChatMessage/>
//         </div>
//     </div>
//   )
// }

// export default LiveChat

import React from 'react';
import ChatMessage from './ChatMessage';

export const DUMMY_MESSAGES = [
  {
    id: 1,
    name: "CodeMaster77",
    message: "Let's gooo! This stream is 🔥",
  },
  {
    id: 2,
    name: "PixelQueen",
    message: "Can someone share the GitHub repo?",
  },
  {
    id: 3,
    name: "DevDude",
    message: "Big fan from Kerala ❤️",
  },
  {
    id: 4,
    name: "AI_Bro",
    message: "React is love, React is life 😎",
  },
  {
    id: 5,
    name: "TechieSara",
    message: "This UI looks just like YouTube, great job!",
  },
  {
    id: 6,
    name: "Seban",
    message: "Seban and Alaska, forever.",
  },
  {
    id: 7,
    name: "BugHunter",
    message: "I broke the code and fixed it again 😂",
  },
  {
    id: 8,
    name: "ChillVibes",
    message: "Streaming + coding = perfect combo",
  },
];


const LiveChat = () => {
  return (
    <div className="w-[400px] h-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col">
      

      <div className="border-b border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-sm font-semibold text-gray-800 dark:text-white">Top Chat</h1>
      </div>
      

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {DUMMY_MESSAGES.map((msg)=><ChatMessage key={msg.id} name={msg.name} message={msg.message} />)}
       
      </div>


      <div className="border-t border-gray-300 dark:border-gray-700 p-3">
        <input
          type="text"
          placeholder="Chat..."
          className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
        />
      </div>
    </div>
  );
};

export default LiveChat;
