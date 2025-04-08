import React, { useEffect } from 'react';
import PlayButton from './Techbutton';


const Hero = () => {



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
    <div className='mb-36 px-6 md:px-10  lg:p-0 '>
      <div className=' h-screen md:h-[80vh] lg:h-screen w-full bg-black flex relative mt-[-13vh] lg:mt-[0%] xl:mt-[0%] flex-col justify-center min-h-[90vh-6rem]'>
        {/* CONTENT DIV */}
        <div className=' sm:mt-[-25vh] md:mt-[15vh]    md:min-w-[20rem] md:ml-[4%] xl:ml-[5%]  lg:mt-[-35vh] xl:mt-[-25vh] 2xl:mt-[-9vh] z-40'>
          <h1 className=' sm:max-w-full md:max-w-[50rem] lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[60rem] text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl  font-bold tracking-wide my-[2rem] z-40 '>
            Elevate Your {" "} <span className='text-red-600'> Career </span> Elevate Your  {""} <span className='text-red-600'>Business </span> <br />
          </h1>
          <p className='font-semibold lg:max-w-[35rem] text-gray-400'>
            Careertronic Global Services offers tailored solutions for individuals, businesses, and institutions, helping you advance your career, optimize processes, and implement innovative software for growth and success in the digital world.
          </p>

<div className='flex  gap-16 mt-16 '>
          {/* TOGGLE BUTTON */}
          
          < PlayButton />
           {/* TOGGLE BUTTON */}

           < PlayButton />
           
           </div>
        
        </div>


        

        {/* 3D MODEL VIEWER */}
        <div className='absolute -top-16 right-0 w-[100%] lg:-mt-16 lg:w-[99%] lg:scale-[0.5]   md:scale-[0.4] md:right-[-30%] lg:right-[-24%] xl:w-[80%] xl:scale-[0.6] xl:right-[-15%] xl:mt-[-4vh] 2xl:w-[70%] 2xl:scale-[0.7]  2xl:right-[-8%] 2xl:top-[-5%] h-full flex items-center justify-center  opacity-100'>
          <div className='w-40 lg:h-24 xl:h-16 bg-black right-0 bottom-0 absolute opacity-100 z-50'></div>
          <spline-viewer 
            className='hidden md:hidden lg:block' 
            url="https://prod.spline.design/Z8Cmw5A1cIF6izEF/scene.splinecode"
          ></spline-viewer>







        </div>



      </div>
    </div>
  )
}

export default Hero
