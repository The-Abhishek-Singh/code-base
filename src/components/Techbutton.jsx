"use client";
import React from 'react';

// This component includes all required styles and animations directly
const PlayButton = (props) => {
  return (
    /* From Uiverse.io by yuuzuk */
    <button
      className="relative text-red-600 shadow-red-600 text-xl tracking-[0.3rem] font-bold hover:text-white backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(180,180,180,0.3)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-white duration-700 min-w-28 h-11 overflow-hidden"
    >
      <div className='text-sm max-[344px]:text-xs'>{props.text}</div>
      
      {/* Shine effect element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full animate-shine">
          <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </button>
  );
};

export default PlayButton;