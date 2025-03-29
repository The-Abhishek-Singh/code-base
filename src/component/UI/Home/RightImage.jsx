
"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const RightImage = () => {
  const [hoverTopLeft, setHoverTopLeft] = useState(false);
  const [hoverTopRight, setHoverTopRight] = useState(false);
  const [hoverBottomLeft, setHoverBottomLeft] = useState(false);
  const [hoverBottomRight, setHoverBottomRight] = useState(false);

  return (
    <>
      <div className="relative w-96 h-[32rem] rounded-xl overflow-visible sm:mt-[0rem]  sm:mb-[0rem]]  mb-[10rem] mx-auto">
        <Image
          src="/Vector.png"
          alt="Fast onboarding"
          className="object-cover opacity-80 rounded-xl"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 opacity-20 rounded-xl"></div>
        
        {/* Top-Left Icon */}
        <div 
          className="absolute top-4 left-4 bg-red-600 p-3 rounded-full shadow-lg z-10 cursor-pointer transition-transform hover:scale-110  "
          onMouseEnter={() => setHoverTopLeft(true)}
          onMouseLeave={() => setHoverTopLeft(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          
          {hoverTopLeft && (
            <div className="absolute -top-[6rem] left-0 bg-white p-2 rounded-lg shadow-xl z-20 w-40  hidden max-[425px]:block">
              <Image 
                src="/main1.jpg" 
                alt="Feature 1"
                width={150}
                height={100}
                className="rounded"
              />
      
            </div>
          )}
        </div>
        
        {/* Top-Right Icon */}
        <div 
          className="absolute top-4 right-4 bg-blue-600 p-3 rounded-full shadow-lg z-10 cursor-pointer transition-transform hover:scale-110"
          onMouseEnter={() => setHoverTopRight(true)}
          onMouseLeave={() => setHoverTopRight(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          
          {hoverTopRight && (
            <div className="absolute -top-[6rem] right-0 bg-white p-2 rounded-lg shadow-xl z-20 w-40">
              <Image 
                src="/main2.jpg" 
                alt="Feature 2"
                width={150}
                height={100}
                className="rounded"
              />

            </div>
          )}
        </div>
        
        {/* Bottom-Left Icon */}
        <div 
          className="absolute bottom-4 left-4 bg-green-600 p-3 rounded-full shadow-lg z-10 cursor-pointer transition-transform hover:scale-110"
          onMouseEnter={() => setHoverBottomLeft(true)}
          onMouseLeave={() => setHoverBottomLeft(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          
          {hoverBottomLeft && (
            <div className="absolute -bottom-32 left-0 bg-white p-2 rounded-lg shadow-xl z-20 w-40">
              <Image 
                src="/main3.jpg" 
                alt="Feature 3"
                width={150}
                height={100}
                className="rounded"
              />
       
            </div>
          )}
        </div>
        
        {/* Bottom-Right Icon */}
        <div 
          className="absolute bottom-4 right-4 bg-yellow-600 p-3 rounded-full shadow-lg z-10 cursor-pointer transition-transform hover:scale-110"
          onMouseEnter={() => setHoverBottomRight(true)}
          onMouseLeave={() => setHoverBottomRight(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          
          {hoverBottomRight && (
            <div className="absolute -bottom-32 right-0 bg-white p-2 rounded-lg shadow-xl z-20 w-40">
              <Image 
                src="/icon1.png" 
                alt="Feature 4"
                width={150}
                height={100}
                className="rounded"
              />

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightImage;