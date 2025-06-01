import React from 'react'
import Button from './button'
const Lists = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Sports",
  "News",
  "Movies",
  "Learning",
  "Fashion",
];

const ButtonList = () => {
  
  return (
    <div className='flex gap-3 overflow-x-auto px-4 py-2'>
    {Lists.map((list)=>(<Button key={list} name={list}/>))}
    </div>
  )
}

export default ButtonList