"use client"

import React, { useEffect, useRef, useState } from 'react';

export default function ComponentPage() {
  const rightSectionRef = useRef(null);
  const leftSectionRef = useRef(null);
  const [hasScrolledPastCards, setHasScrolledPastCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!rightSectionRef.current) return;

      const rightSection = rightSectionRef.current;
      const scrollPosition = rightSection.scrollTop;
      const maxScroll = rightSection.scrollHeight - rightSection.clientHeight;
      
      // Check if we've scrolled past all cards
      // The last card is at the bottom of the container plus some extra space
      const allCardsHeight = rightSection.scrollHeight - 100; // Estimate where cards end
      
      if (scrollPosition >= allCardsHeight) {
        setHasScrolledPastCards(true);
      } else {
        setHasScrolledPastCards(false);
      }

      // If we're near the end of the right section scrolling
      if (scrollPosition > maxScroll - 100) {
        // Calculate how much "overflow" scroll to apply to the main document
        const overflowAmount = scrollPosition - (maxScroll - 100);
        // Apply a delayed scroll to the whole document
        setTimeout(() => {
          window.scrollTo({
            top: overflowAmount * 0.5, // Adjust the multiplier to control the scroll speed
            behavior: 'smooth'
          });
        }, 200); // 200ms delay
      }
    };

    const rightSection = rightSectionRef.current;
    if (rightSection) {
      rightSection.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (rightSection) {
        rightSection.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Main content area */}
      <div
        className="flex flex-row h-full p-70 "
        style={{
          backgroundImage: "url('/mainHome/CBG1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Left section - sticky */}
        <div
          ref={leftSectionRef}
          className="w-1/2 sticky h-screen flex flex-col justify-center px-16 z-0 bg-opacity-80"
        >
          <h1 className="text-5xl font-bold mb-4">
            Fast-Track Your Success with Effortless <span className='text-red-600'>Onboarding</span>
          </h1>
          <p className="mb-6">
            Careertronic ensures a smooth, hassle-free onboarding experience...
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 hover:border-s-8 hover:border-white text-white px-6 py-2 rounded">
              Get Started
            </button>
            <button className="border px-6 py-2 rounded hover:bg-white hover:text-black">Book a demo</button>
          </div>
        </div>

        {/* Right section - scrollable with perfectly aligned sticky cards */}
        <div
          ref={rightSectionRef}
          className="h-screen overflow-y-auto pr-16 absolute right-0 w-full" style={{scrollbarWidth: "none"}}
        >
          <div className="flex flex-col gap-64 p-68 items-end">
            {/* First card */}
            <div
              className="w-1/2 h-96 sticky top-1/2 transform -translate-y-1/2 p-4 rounded-lg mt-32 overflow-hidden"
              style={{
                backgroundImage: "url('/mainHome/CBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-opacity-70 p-4 h-full rounded-lg">
                <h2 className="text-xl font-bold">Feature 1</h2>
                <p>Content for feature 1</p>
              </div>
            </div>

            {/* Second card */}
            <div
              className="w-1/2 h-96 sticky top-1/2 transform -translate-y-1/2 p-4 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/mainHome/CBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-opacity-70 p-4 h-full rounded-lg">
                <h2 className="text-xl font-bold">Feature 2</h2>
                <p>Content for feature 2</p>
              </div>
            </div>

            {/* Third card */}
            <div
              className="w-1/2 h-96 sticky top-1/2 transform -translate-y-1/2 p-4 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/mainHome/CBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-opacity-70 p-4 h-full rounded-lg">
                <h2 className="text-xl font-bold">Feature 3</h2>
                <p>Content for feature 3</p>
              </div>
            </div>

            {/* Fourth card */}
            <div
              className="w-1/2 h-96 sticky top-1/2 transform -translate-y-1/2 p-4 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/mainHome/CBG.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-opacity-70 p-4 h-full rounded-lg">
                <h2 className="text-xl font-bold">Feature 4</h2>
                <p>Content for feature 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional content that appears after scrolling past cards */}
      {hasScrolledPastCards && (
        <div className="w-full bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Additional Content</h2>
            <p className="mb-4">This content appears after scrolling past all cards.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Feature Details</h3>
                <p>More information about our features and capabilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Testimonials</h3>
                <p>See what our customers are saying about us.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p>Get in touch with our team for more information.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
