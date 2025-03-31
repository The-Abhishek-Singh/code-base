"use client";

import Mrq from "@/component/Home/Mrq";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Kai from "@/component/Home/Kai";
import RightImage from "@/component/UI/Home/RightImage";
import ComponentPage from "@/component/StickyCard";
import StickyCard from "@/component/StickyCard";

const OnboardingSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lineHeight, setLineHeight] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setLineHeight(`${(scrollY / maxHeight) * 100}%`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      <StickyCard />
      <div className="w-full h-auto min-h-screen bg-gradient-to-r from-black  sm:mt-[0rem] mt-[15rem]">
        {/* Partner Logos Section */}
        <div className="w-full   text-white mt-20  sm:mt-[21rem]  ">
          <h2 className="lg:text-3xl font-semibold mb-4  text-center">
            We partner with the best
          </h2>
        </div>
        <Mrq />
        {/* white color area gradient */}
        <div className="relative w-full h-[300px] bg-black overflow-hidden">
          <div
            className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-[#000000] to-[#2C2C2C]"
            style={{ clipPath: "polygon(-15% 0%, 37% 100%, 119% 0%)" }}
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
    </>
  );
};

export default OnboardingSection;
