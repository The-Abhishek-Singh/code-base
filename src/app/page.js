"use client";

import Mrq from "@/components/Home/Mrq";
import React, { useState, useEffect } from "react";
import Kai from "@/components/Home/Kai";

import StickyCard from "@/components/StickyCard";
import ResumeBuilderLanding from "@/components/Resume";
import JobPortalLanding from "@/components/job";
import Hero from "@/components/Hero";
import AdvancedPreloader from "@/components/preloader";


const OnboardingSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lineHeight, setLineHeight] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setLineHeight(`${(newScrollY / maxHeight) * 100}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Removed `scrollY` from dependencies

  return (
    <>

  <AdvancedPreloader/>


<Hero/>
    

<StickyCard />


    

  

      
      {/* <ResumeBuilderLanding /> */}
      {/* <JobPortalLanding /> */}

      {/* Removed duplicate wrapper div */}
      <div className="w-full h-auto min-h-screen bg-gradient-to-r from-black sm:mt-[0rem] mt-[15rem]">
        {/* Partner Logos Section */}
        <div className="w-full text-white mt-4 sm:mt-[2rem]">
          <h2 className="lg:text-3xl font-semibold mb-4 text-center">
            We partner with the best
          </h2>
        </div>
        <Mrq />

        {/* White color area gradient */}
        <div className="relative w-full h-[300px] bg-black overflow-hidden">
          <div
            className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-[#000000] to-[#2C2C2C]"
            style={{ clipPath: "polygon(-15% 0%, 37% 100%, 119% 0%)" }}
          ></div>
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
