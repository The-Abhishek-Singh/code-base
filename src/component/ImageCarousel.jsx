"use client";
import { useState, useEffect } from "react";

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

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-500/70 text-white p-3 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-700 focus:outline-none"
      >
        ◀
      </button>

      <button
        onClick={goToNext}
        className="absolute right-10 top-1/2 -translate-y-1/2 bg-gray-500/70 text-white p-3 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-700 focus:outline-none"
      >
        ▶
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 border border-white
                     ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
