"use client";

import Mrq from "@/component/Home/Mrq";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Kai from "@/component/Home/Kai";
import RightImage from "@/component/UI/Home/RightImage";

const OnboardingSection = () => {

  const [scrollY, setScrollY] = useState(0);
  const [lineHeight, setLineHeight] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      setLineHeight(`${(scrollY / maxHeight) * 100}%`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);



  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-r from-black  sm:mt-[0rem] mt-[15rem]">
      
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#2C2C2C] to-[#000000] p-6 mb-10">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center text-white flex-grow justify-evenly sm-mt[29rem] mt-[29rem] mb-[10rem]">
            {/* Left Side: Text Content */}

            
            <div className="md:w-1/2 text-center md:text-left p-6">
              <h1 className="text-5xl font-bold mb-4 ">
                Fast-Track Your Success <br />
                <span className="text-gray-300">with Effortless Onboarding</span>
              </h1>
              <p className="text-gray-400 mb-6 text-lg">
                Careertronic ensures a smooth, hassle-free onboarding experience so you can start quickly and focus on growth. 
                Our intuitive platform streamlines the process saving you time and effort. Get started today!
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium text-lg">
                  Get Started
                </button>
                <button className="border border-gray-400 px-8 py-4 rounded-lg font-medium hover:bg-gray-800 text-lg">
                  Book a demo
                </button>
              </div>
            </div>

            {/* Right Side: Image with Hexagonal Mask */}
            <RightImage />

          </div>
        </div>
        
        {/* Partner Logos Section */}
        <div className="w-full   text-white mt-20  sm:mt-[21rem]  ">
          <h2 className="lg:text-3xl font-semibold mb-4  text-center">We partner with the best</h2>
        </div>
        <Mrq />
        {/* white color area gradient */}
        <div className="relative w-full h-[300px] bg-black overflow-hidden">
      <div
        className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-[#000000] to-[#2C2C2C]"
        style={{ clipPath: 'polygon(-15% 0%, 37% 100%, 119% 0%)' }}
      ></div>
    </div>
   
    {/* card area start */}
   
    <div className="flex items-center justify-center min-h-auto bg-black p-4 ">
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
  );
};

export default OnboardingSection;
