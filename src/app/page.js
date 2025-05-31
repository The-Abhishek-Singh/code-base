"use client";

import Image from "next/image";
import Mrq from "@/components/Home/Mrq";
import React, { useState, useEffect, useRef } from "react";
import Kai from "@/components/Home/Kai";
import StickyCard from "@/components/StickyCard";
import ResumeBuilderLanding from "@/components/Resume";
import JobPortalLanding from "@/components/job";
import Hero from "@/components/Hero";
import AdvancedPreloader from "@/components/preloader";
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
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
      <AdvancedPreloader />
      
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


      {/* <section className="bg-black text-white px-6 py-16">
        FEATURES WE SERVE 
        <div className="mb-24">
          <h2 className="text-4xl font-extrabold mb-4">
            FEATURES <span className="text-red-600">WE SERVE</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
            The quick brown fox jumps over the lazy. The quick brown fox jumps over the lazy. 
            The quick brown fox jumps over the lazy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
          </div>
        </div>

        OUR PROJECTS 
        <div>
          <h2 className="text-4xl font-extrabold mb-4">OUR PROJECTS</h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
            The quick brown fox jumps over the lazy. The quick brown fox jumps over the lazy. 
            The quick brown fox jumps over the lazy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section> */}





      {/* New Gallery Section  */}
      {/* <section className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          Left: Large Image
          <div className="relative w-full aspect-square rounded overflow-hidden shadow-lg">
            <Image
              src="/images/gallery/main.jpg" // Replace with your real image path
              alt="Main Gallery"
              fill
              className="object-cover"
            />
          </div>

          Right: Text & Grid
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
            <p className="text-gray-400 mb-6">This is our gallery. Check it out.</p>

            Image grid
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                "/images/gallery/1.jpg",
                "/images/gallery/2.jpg",
                "/images/gallery/3.jpg",
                "/images/gallery/4.jpg",
                "/images/gallery/5.jpg",
                "/images/gallery/6.jpg",
              ].map((src, i) => (
                <div key={i} className="relative w-full aspect-square overflow-hidden rounded">
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            View All button
            <button className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              View All
            </button>
          </div>
        </div>
      </section> */}
  


 






      
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
          <h2 className="text-white text-3xl sm:text-5xl text-center font-light mt-24 gap-2">
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