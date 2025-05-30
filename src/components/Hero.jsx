import React, { useEffect, useState, useRef } from 'react';
import PlayButton from './Techbutton';
import Link from 'next/link';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementsVisible, setElementsVisible] = useState(false);
  const loaderDelay = 500; // 500ms delay for loader
  const splineLoaded = useRef(false);
  const splineInitialized = useRef(false);
  const splineViewerRef = useRef(null);

  useEffect(() => {
    // Run the animation every time this effect runs
    setTimeout(() => {
        setElementsVisible(true);
    }, loaderDelay);

    // Load Spline viewer
    const loadSplineViewer = async () => {
      if (!window.splineViewer && !splineLoaded.current) {
        splineLoaded.current = true;
        try {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
          script.async = true;
          script.onload = () => {
            initializeSplineViewer();
          };
          script.onerror = (error) => {
            console.error('Error loading Spline viewer:', error);
            splineLoaded.current = false; // Reset to allow retry
          };
          document.body.appendChild(script);
        } catch (error) {
          console.error('Error in loadSplineViewer:', error);
          splineLoaded.current = false;
        }
      } else if (window.splineViewer && !splineInitialized.current) {
        initializeSplineViewer();
      }
    };

    // Initialize the Spline viewer with proper error handling
    const initializeSplineViewer = () => {
      try {
        const viewer = document.querySelector('spline-viewer');
        if (viewer) {
          // Keep a reference to the viewer
          splineViewerRef.current = viewer;
          
          // Clear any previous URL to avoid buffer conflicts
          viewer.removeAttribute('url');
          
          // Allow the DOM to update before setting the URL
          setTimeout(() => {
            viewer.setAttribute('url', 'https://prod.spline.design/Z8Cmw5A1cIF6izEF/scene.splinecode');
            splineInitialized.current = true;
          }, 100);
          
          // Add event listeners for Spline errors
          viewer.addEventListener('error', (e) => {
            console.error('Spline viewer error:', e);
            splineInitialized.current = false;
          });
          
          viewer.addEventListener('load', () => {
            console.log('Spline viewer loaded successfully');
          });
        }
      } catch (error) {
        console.error('Error initializing Spline viewer:', error);
        splineInitialized.current = false;
      }
    };
    
    // Handle scroll for fade effect only
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Check if spline viewer exists and needs reinitialization
      if (window.splineViewer && !splineInitialized.current) {
        initializeSplineViewer();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // When tab becomes visible again, check if we need to reload the viewer
        if (window.splineViewer && !splineInitialized.current) {
          initializeSplineViewer();
        }
      }
    };

    loadSplineViewer();
    window.addEventListener('scroll', handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Calculate opacity based on scroll position
  const scrollFade = Math.max(0, 1 - scrollPosition / 500);
  const heroTransform = `translateY(${scrollPosition * 0.2}px)`;

  return (
    <div className='mb-36 px-5 md:px-10 lg:p-0'>
      <div 
        className='h-screen md:h-[80vh] lg:h-screen w-full bg-black flex relative mt-[-13vh] lg:mt-[0%] xl:mt-[0%] flex-col justify-center min-h-[90vh-6rem]'
        style={{ 
          opacity: scrollFade,
          transform: heroTransform,
          transition: 'opacity 0.5s ease-out, transform 0.3s ease-out'
        }}
      >
        {/* CONTENT DIV */}
        <div
        className='sm:mt-[25vh] md:mt-[34vh] md:min-w-[20rem] max-[642px]:mt-[10rem] max-[490px]:mt-[10rem] max-[485px]:mt-[15rem] md:ml-[3%] xl:ml-[4%] lg:mt-[-20vh] xl:mt-[-25vh] 2xl:mt-[-9vh] z-40 max-[425px]:mt-[-5vh] text-[1rem] max-[484px]:mt-[15vh] max-[485px]:text-[0.8rem]' 
        >
          <h1 
          className='sm:max-w-full md:max-w-[50rem] lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[60rem] text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-wide my-[2rem] z-40 max-[425px]:text-3xl'
            style={{ 
              opacity: elementsVisible ? 1 : 0,
              transform: elementsVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            Elevate Your {" "} <span className='text-red-600'> Career </span> Elevate Your  {""} <span className='text-red-600'>Business </span> <br />
          </h1>
          <p 
            className='font-semibold lg:max-w-[35rem] text-gray-400'
            style={{ 
              opacity: elementsVisible ? 1 : 0,
              transform: elementsVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
            }}
          >
            Careertronic Global Services offers tailored solutions for individuals, businesses, and institutions, helping you advance your career, optimize processes, and implement innovative software for growth and success in the digital world.
          </p>
          <div 
            className='flex gap-4 sm:gap-16 mt-16'
            style={{ 
              opacity: elementsVisible ? 1 : 0,
              transform: elementsVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s'
            }}
          >
            {/* TOGGLE BUTTON */}
            <Link href={'/services'}>
            <PlayButton text={'EXPLORE'}/>
            </Link>
            {/* TOGGLE BUTTON */}
            <Link href={'/contact'}>
            <PlayButton text={'CONTACT'} />
            </Link>
          </div>
        </div>
        
        {/* 3D MODEL VIEWER */}
        <div 
          className='spline-container absolute -top-16 right-0 w-[100%] lg:-mt-16 lg:w-[99%] lg:scale-[0.5] md:scale-[0.4] md:right-[-30%] lg:right-[-24%] xl:w-[80%] xl:scale-[0.6] xl:right-[-15%] xl:mt-[-4vh] 2xl:w-[70%] 2xl:scale-[0.7] 2xl:right-[-8%] 2xl:top-[-5%] h-full flex items-center justify-center opacity-100'
        >
          <div className='w-40 lg:h-24 xl:h-16 bg-black right-0 bottom-0 absolute opacity-100 z-50'></div>
          <spline-viewer
            className='hidden md:hidden lg:block'
            loading="lazy"
            buffer-size="2048"
            events-target="document"
          ></spline-viewer>
        </div>
      </div>
    </div>
  )
}

export default Hero;