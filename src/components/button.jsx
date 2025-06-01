import React from 'react';

const Button = ({name}) => {
  return (
    <button className="px-4 py-1 bg-gray-100 text-sm rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all">
  {name}
    </button>
  );
};

export default Button;
