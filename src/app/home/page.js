"use client";

import Mrq from "@/components/Home/Mrq";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Kai from "@/components/Home/Kai";
import StickyCard from "@/components/StickyCard";
import ResumeBuilderLanding from "@/components/Resume";
import JobPortalLanding from "@/components/job";
import Hero from "@/components/Hero";
import OurProject from "@/components/Home/OurProject";

const OnboardingSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lineHeight, setLineHeight] = useState("0%");
  const [heroVisible, setHeroVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      // Hide hero when we've scrolled past the viewport height
      if (newScrollY > window.innerHeight) {
        setHeroVisible(false);
      } else {
        setHeroVisible(true);
      }
      
      const maxHeight = 
        document.documentElement.scrollHeight - window.innerHeight;
      setLineHeight(`${(newScrollY / maxHeight) * 100}%`);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      {/* Hero fixed at the top but only visible initially */}
      {heroVisible && (
        <div className="fixed top-0 left-0 w-full h-screen z-10">
          <Hero />
        </div>
      )}
      
      {/* Empty spacer to create scrollable area equal to hero height */}
      <div className="h-screen w-full"></div>
      
      {/* StickyCard section - will come up and overlay the Hero */}
      <div className="relative z-20">
        <StickyCard />
      </div>

      <div>
        <OurProject />
      </div>

      
      {/* Rest of your content */}
      <div className="w-full h-auto min-h-screen bg-gradient-to-r from-black">
        {/* Partner Logos Section */}
        <div className="w-full text-white mt-4 sm:mt-[8rem] mb-16">
          <h2 className="lg:text-3xl font-semibold mb-4 text-center">
            We partner with the best
          </h2>
        </div>
        
        {/* White color area gradient */}
        <div className="relative w-full h-[300px] bg-black overflow-hidden">
          <div
            className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-[#000000] to-[#2C2C2C]"
            style={{ clipPath: "polygon(-15% 0%, 37% 100%, 119% 0%)" }}
          ></div>
        <Mrq />
        </div>
        
        {/* Card Area */}
        <div className="flex items-center justify-center min-h-auto bg-black p-4">
          <h2 className="text-white text-5xl text-center font-light mt-24 gap-2">
            Discover the{" "}
            <span className="text-red-500 font-bold relative inline-block">
              unique features
              <span className="absolute left-[5%] right-[-5%] bottom-0 h-1 bg-gradient-to-r from-gray-500 to-transparent transform translate-y-1 w-[110%] ml-[-5%]"></span>
            </span>{" "}
            <br />
            <span className="mt-2">that will make your business grow</span>
          </h2>
        </div>
        
        <Kai />
      </div>
    </>
  );
};

export default OnboardingSection;