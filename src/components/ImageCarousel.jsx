"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/About/ScrollReveal";
const ImageCarousel = () => {
  const images = ["main1.jpg", "main2.jpg", "main3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Faster slide timing (3 sec)
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);
  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  const goToPrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  const goToSlide = (index) => setCurrentIndex(index);
  return (
    <ScrollReveal
    animation="slideUp"
    duration={1000}
    easing="spring"
    delay={100}
    index={0}
    stagger={150}
    >
      <div
        className="relative w-full h-screen mx-auto overflow-hidden group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Image container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-10 top-1/2 -translate-y-1/2 bg-black text-red-600 p-3 rounded-full
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-400 focus:outline-none
           shadow-lg flex items-center justify-center   font-extrabold w-12 h-12"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 bg-black text-red-600 p-3 rounded-full
           opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-400 focus:outline-none
           shadow-lg flex items-center justify-center w-12 h-12"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </ScrollReveal>
  );
};
export default ImageCarousel;