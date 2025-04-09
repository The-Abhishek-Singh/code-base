import React, { useEffect } from 'react';
import Link from 'next/link';
import ShineButton from './Button';

const Robocourse = () => {
  useEffect(() => {
    // This ensures the Spline viewer is initialized after component mount
    const loadSplineViewer = async () => {
      // Check if the script is already loaded
      if (!window.splineViewer) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
        script.async = true;
        script.onload = () => {
          // Force a rerender of the spline viewer if needed
          const viewer = document.querySelector('spline-viewer');
          if (viewer) {
            viewer.setAttribute('url', viewer.getAttribute('url'));
          }
        };
        document.body.appendChild(script);
      }
    };

    loadSplineViewer();
    
    // Cleanup function
    return () => {
      // Optional: Remove the script when component unmounts if needed
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className='mb-0 px-10 lg:mb-11 xl:mb-44 lg:p-0'>
      <div className='h-[50vh] lg:h-screen w-full bg-black flex relative md:mt-0 lg:mt-[-4%] flex-col justify-center min-h-[90vh-6rem]'>
        {/* CONTENT DIV */}
        <div className='md:min-w-[40rem] sm:mt-[-10vh] md:ml-[4%] xl:ml-[10%] md:mt-[5%] lg:mt-[6%] z-50'>
          <h1 className='lg:text-[1.5rem] text-3xl font-extrabold tracking-wide my-[2rem] text-red-500 '>
            Elevate Your Career, Elevate Your Business <br />
          </h1>
          <p className='font-semibold lg:max-w-[35rem] text-gray-400'>
            Careertronic Global Services offers tailored solutions for individuals, businesses, and institutions, helping you advance your career, optimize processes, and implement innovative software for growth and success in the digital world.
          </p>
          {/* TOGGLE BUTTON */}
          <a href='#services'>
          <ShineButton />
          </a>
        </div>

        {/* 3D MODEL VIEWER */}
        <div className='absolute top-0 right-0 w-[100%] lg:mt-0 lg:w-[99%] lg:scale-[0.7] lg:right-[-20%] xl:w-[80%] xl:scale-100 xl:right-[-9%] xl:mt-[5vh] 2xl:w-[70%] h-full flex items-center justify-center z-50 opacity-100'>
          <div className='w-40 lg:h-24 xl:h-16 bg-black right-0 bottom-0 absolute opacity-100 z-50'></div>
          <spline-viewer 
            className='hidden md:hidden lg:block' 
            url="https://prod.spline.design/tUNHjlhKl9czPnkJ/scene.splinecode"
          ></spline-viewer>
        </div>
      </div>
    </div>
  );
};

export default Robocourse;