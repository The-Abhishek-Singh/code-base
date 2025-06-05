'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Sample carousel data
  const slides = [
    {
      id: 1,
      title: "Welcome to Our Platform",
      subtitle: "Discover the future of digital experiences",
      imageUrl: "/Dholu.png", // Replace with your image path
      ctaText: "Get Started",
      redirectUrl: "/about"
    },
    {
      id: 2,
      title: "Innovative Solutions",
      subtitle: "Designed for modern businesses",
      imageUrl: "/paglu.png", // Placeholder image
      ctaText: "Learn More",
      redirectUrl: "/services"
    },
    {
      id: 3,
      title: "Join Our Community",
      subtitle: "Connect with industry experts",
      imageUrl: "/Bholu.png", // Placeholder image
      ctaText: "Sign Up Now",
      redirectUrl: "/Login"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (isAnimating) return;
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black -mt-16">
      
      {/* Carousel container */}
      <div className="relative h-full w-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image or color */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundPosition: 'center',
              }}
            ></div>
            
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            
            {/* Center overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            
            {/* Content container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-6 lg:px-8">
              <div className={`transform transition-all duration-700 delay-200 ${
                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center">
                  <Link href={slide.redirectUrl}>
                  <div className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg">
                    {slide.ctaText}
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-red-600 w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}