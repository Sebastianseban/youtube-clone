import React from 'react';



const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-start gap-3">

      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full" />


      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-white">{name}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
