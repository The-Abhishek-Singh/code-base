"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServicesList = () => {
  const slides = ["/Partnerbg.png", "/partnerpg.png", "/OurTeam.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const services = [
    {
      number: "1",
      title: "Software development &  export services",
      link: "https://www.google.com",
      description:
        "We specialize in software development and export services, delivering cutting-edge technology solutions tailored to your business needs. Our expertise spans custom software, web and mobile applications, AI-driven solutions, and cloud integrations, ensuring seamless digital transformation.",
      icon: "/ourteam/first1.png",
    },
    {
      number: "2",
      title: "IT & industrial automation training",
      link: "https://www.facebook.com",
      description:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development.",
      icon: "/ourteam/first2.png",
    },
    {
      number: "3",
      title: "Corporate & industrial training",
      description:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development.",
      icon: "/ourteam/first3.png",
    },
    {
      number: "4",
      title: "Global education & study abroad programs",
      description:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development.",
      icon: "/ourteam/first4.png",
    },
  ];

  const [scrollHeight, setScrollHeight] = useState(0);
  const firstNodeRef = useRef(null);
  const lastDescriptionRef = useRef(null);
  const sectionRef = useRef(null);
  const lineContainerRef = useRef(null);

  // In your component, add new state and refs
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef(null);
  const dotPositionsRef = useRef([]);
  // Update the useEffect for scroll handling
  useEffect(() => {
    // Function to collect all dot positions
    const collectDotPositions = () => {
      const dots = document.querySelectorAll(".timeline-dot");
      const positions = [];
      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        positions.push(rect.top + window.scrollY);
      });
      dotPositionsRef.current = positions;
    };
    // Initial collection
    collectDotPositions();
    // Re-collect on resize
    window.addEventListener("resize", collectDotPositions);
    const handleScroll = () => {
      if (
        firstNodeRef.current &&
        lastDescriptionRef.current &&
        lineContainerRef.current
      ) {
        // Clear any existing timer immediately
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }
        // Always set scrolling state when handling scroll
        setIsScrolling(true);
        const firstNodeRect = firstNodeRef.current.getBoundingClientRect();
        const lastDescriptionRect =
          lastDescriptionRef.current.getBoundingClientRect();
        const scrollPos = window.scrollY;
        // Calculate maximum height based on content
        const maxAllowedHeight =
          lastDescriptionRect.bottom - firstNodeRect.top - 50;
        // Make the line more responsive with a smaller offset
        const startPosition = firstNodeRect.top + window.scrollY;
        if (scrollPos >= startPosition - 500) {
          const scrollProgress = scrollPos - (startPosition - 500);
          // Ensure we don't exceed the maximum height
          setScrollHeight(
            Math.min(Math.max(0, scrollProgress), maxAllowedHeight)
          );
        } else {
          setScrollHeight(0);
        }
        scrollTimer.current = setTimeout(() => {
          setIsScrolling(false);
        }, 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", collectDotPositions);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
    };
  }, []);
  // Modify the IntersectionObserver configuration
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Start with initial height but make it ready for scrolling
          setIsScrolling(true);
          setScrollHeight(0);
          // Quick initial animation to show the line is active
          let startTime = null;
          const duration = 500;
          const initialHeight = 0;
          // Set a reasonable maximum height for initial animation
          const targetHeight = 100;
          const animateLine = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easing = (t) => t;
            // Ensure we don't exceed the maximum height
            const currentHeight = Math.min(
              initialHeight + (targetHeight - initialHeight) * easing(progress),
              targetHeight
            );
            setScrollHeight(currentHeight);
            if (progress < 1) {
              requestAnimationFrame(animateLine);
            } else {
              setIsScrolling(false);
              // Trigger scroll handler with controlled event
              const scrollEvent = new Event("scroll");
              window.dispatchEvent(scrollEvent);
            }
          };
          requestAnimationFrame(animateLine);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px",
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
 
    // Counter logic for stats section
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [topCount, setTopCount] = useState(0);
    const target1 = 1000;
    const target2 = 80000;
    const targetTop = 3;
    const statsRef = useRef(null);
    const [isStatsVisible, setIsStatsVisible] = useState(false);
  

  
  // Add Intersection Observer for the stats section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        } else {
          setIsStatsVisible(false);
          setCount1(0);
          setCount2(0);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Modified counter animation that only runs when stats section is visible
  useEffect(() => {
    if (!isStatsVisible) return;
    
    const animateCount = (setCount, target) => {
      let start = 0;
      const duration = 2000; // Duration in milliseconds
      const stepTime = Math.max(duration / target, 1);

      const counter = setInterval(() => {
        start += Math.ceil(target / (duration / stepTime));
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCount(start);
      }, stepTime);
      
      return counter;
    };

    const counter1 = animateCount(setCount1, target1);
    const counter2 = animateCount(setCount2, target2);
    const counterTop = animateCount(setTopCount, targetTop);

    return () => {
      clearInterval(counter1);
      clearInterval(counter2);
      clearInterval(counterTop);
    };
  }, [isStatsVisible]);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = (ref) => {
    if (ref.current) ref.current.play();
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) ref.current.pause();
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black flex flex-col items-center p-0 space-y-12 relative"
    >
      {/* Vertical Line Container */}
      <div
        ref={lineContainerRef}
        className="fixed left-1/2 transform -translate-x-1/2 w-1 sm:ml-[-36px] ml-[16px] top-[340px]"
        style={{
          top: firstNodeRef.current
            ? `${firstNodeRef.current.getBoundingClientRect().top + 2}px` // Adding offset to align with dot center
            : "0",
        }}
      >
        {/* Red Line Starting from First Node */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-12 w-1 bg-red-700"
          style={{
            height: `${scrollHeight}px`,
            minHeight: "0px",
            transition: isScrolling ? "none" : "height 0.1s ease-out",
            maxHeight:
              typeof window !== "undefined"
                ? window.innerWidth >= 1700
                  ? `calc(75vh - 5px)`
                  : window.innerWidth >= 1440
                  ? `calc(75vh - 6px)`
                  : window.innerWidth >= 1024
                  ? `calc(80vh - 6px)`
                  : window.innerWidth >= 768
                  ? `calc(100vh - 6px)`
                  : window.innerWidth >= 425
                  ? `calc(150vh - 6px)`
                  : `calc(250vh - 6px)`
                : `calc(250vh - 6px)`,
            zIndex: 5,
          }}
        ></div>
      </div>
      {services.map((service, index) => (
  <div
    key={index}
    ref={index === 0 ? firstNodeRef : null}
    className="flex w-full max-w-[67rem] justify-between items-center relative py-8"
  >
    <div className="w-[61%] text-right pr-52 flex items-center relative lg:pl-[53px] min-[1440px]:pl-[13px] md:pl-[28px]">
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-black text-5xl font-extrabold mr-[1.5rem] -mt-[20px]">
        {service.number}
      </span>
      <span className="text-white font-medium leading-tight relative inline-block pb-2 text-[1.25rem] max-[425px]:text-[1.25rem]">
        {/* Title with Line Break at "&" */}
        <div className="text-lg-custom text-start max-[375px]:text-[1rem] max-[320px]:text-[0.95rem] max-[425px]:text-[1.25rem] max-[425px]:leading-tight relative p-2">
          {service.title === "IT & industrial automation training" ? (
            <div className="group relative p-2">
              <Link className="capitalize font-semibold" href='/services/IT-TRAINING-&-CERTIFICATION'>
                IT & industrial
                <br />
                <span className="whitespace-nowrap">
                  automation training 
                </span>
                <span
                  className="absolute left-[-4rem] bottom-0 h-1 bg-gradient-to-l from-gray-500 to-transparent"
                  style={{ width: "140%" }}
                ></span>
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 hidden sm:block transition-opacity duration-300 bg-zinc-800 font-thin text-white text-sm py-1 px-2 rounded -top-8 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                Navigate to this page
              </div>
            </div>
          ) : service.title === "Corporate & industrial training" ? (
            <div className="group relative p-2">
              <Link className="capitalize font-semibold" href='/services/CORPORATE-&-INDUSTRIAL-TRAINING'>
                Corporate
                <br />
                <span className="whitespace-nowrap">
                  industrial training
                </span>
                <span
                  className="absolute left-[-4rem] bottom-0 h-1 bg-gradient-to-l from-gray-500 to-transparent"
                  style={{ width: "143%" }}
                ></span>
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 hidden sm:block transition-opacity duration-300 bg-zinc-800 font-thin text-white text-sm py-1 px-2 rounded -top-8 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                Navigate to this page
              </div>
            </div>
          ) : service.title === "Global education & study abroad programs" ? (
            <div className="group relative p-2">
              <Link className="capitalize font-semibold" href='/services/Study-Abroad'>
                {service.title}
                {/* Custom underline only for these specific titles */}
                <span
                  className="absolute left-[-4rem] bottom-0 h-1 bg-gradient-to-l from-gray-500 to-transparent"
                  style={{ width: "107%", right: "-2rem" }}
                ></span>
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 hidden sm:block transition-opacity duration-300 bg-zinc-800 font-thin text-white text-sm py-1 px-2 rounded -top-8 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                Navigate to this page
              </div>
            </div>
          ) : service.title === "Software development &  export services" ? (
            <div className="group relative p-2">
              <Link className="capitalize font-semibold" href='/services/SOFTWARE-DEVELOPMENT-&-EXPORT-SERVICES'>
                {service.title}
                {/* Custom underline only for these specific titles */}
                <span
                  className="absolute left-[-4rem] bottom-0 h-1 bg-gradient-to-l from-gray-500 to-transparent"
                  style={{ width: "107%", right: "-2rem" }}
                ></span>
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 hidden sm:block transition-opacity duration-300 bg-zinc-800 font-thin text-white text-sm py-1 px-2 rounded -top-8 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                Navigate to this page
              </div>
            </div>
          ) : (
            <>
              {service.title.split(" & ").map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < service.title.split(" & ").length - 1 && <br />}
                  {i < service.title.split(" & ").length - 1 && " &"}
                </React.Fragment>
              ))}
              <span
                className="absolute left-0 bottom-0 h-1 bg-gradient-to-l from-gray-500 to-transparent"
                style={{ width: "auto", right: 0 }}
              ></span>
            </>
          )}
        </div>
      </span>
      <div className="w-[57%] hidden min-[769px]:flex md:hidden">
        <img
          src={service.icon}
          alt={service.title}
          className="w-16 h-16 md:w-20 md:h-20 md:mx-auto"
        />
      </div>
    </div>
    <div
      className="absolute w-6 h-6 bg-black border-2 border-white rounded-full
      left-1/2
      max-[425px]:-translate-x-[-5%]
      sm:-translate-x-[200%]
      md:-translate-x-[200%]
      lg:-translate-x-[205%]
      xl:-translate-x-[200%]
      2xl:-translate-x-[200%]
      top-9
      sm:top-9
      flex items-center justify-center
      timeline-dot"
      style={{
        zIndex: 10,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
      }}
    >
      {/* Optional: Add a small red dot in the center to enhance line alignment */}
      <div className="w-2 h-2 bg-red-700 rounded-full"></div>
    </div>
    <div
      ref={index === services.length - 1 ? lastDescriptionRef : null}
      className="w-1/2 text-left pl-0 max-[425px]:pl-0 flex items-center lg:pl-0 md:w-[50%]"
    >
      <p className="text-white lg:text-[16px] md:pr-[25px]">
        {service.description}
      </p>
    </div>
  </div>
))}
      {/* Our Gallery section starts from here */}

      <div className="bg-black text-white py-10">
        {/* Title Section */}
        {/* <div className="text-center relative w-full">
        <h2 className="text-3xl font-bold inline-block relative pb-2">
          <span className="text-white relative z-10">OUR </span>
          <span className="text-red-500 relative z-10">GALLERY</span>
          <div className="absolute left-0 bottom-0 w-[130%] h-1 bg-gradient-to-r from-white to-transparent"></div>
        </h2>
      </div>
      {/* Image Section */}
        {/* <div className="flex justify-center w-[87vw] mx-auto mt-20 mb-40 h-[35vw] ">
  <img
    src="/ourteam/gallery.jpg"
    alt="Gallery"
    width={800}
    height={400}
    className="w-full rounded-lg shadow-lg object-cover"
  />
</div> */}

        <div className="px-4 sm:px-8 lg:px-16 space-y-10 w-full lg:w-[100%] p-20">
          <div className="text-center py-8 sm:py-10 relative">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins inline-block relative">
              Our <span className="text-red-500">Gallery</span>
              <span className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-gray-500 to-transparent w-full transform translate-y-1"></span>
            </h1>
          </div>

          <div className="bg-black text-white">
            {/* Mobile layout - single column for extra small screens with much larger size */}
            <div className="grid grid-cols-1 gap-8 sm:hidden mx-auto w-[18rem]">
              {/* Live Classroom - Featured item first on mobile with significantly increased height */}
              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-96">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      src="/coursePage/CodingBackground.mp4"
                      alt="Live Classroom"
                      className="w-full h-full object-fill rounded opacity-40"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-center"></div>
                </div>
              </ScrollReveal>

              {/* Other items with significantly increased height */}
              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src="/coursePage/practice.webp"
                      alt="Practice"
                      className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src="/coursePage/mentors.png"
                      alt="Mentorship"
                      className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                      src="/coursePage/TypingCode.mp4"
                      ref={videoRef2}
                      autoPlay
                      muted
                      alt="Live Classroom"
                      className="w-full h-full object-fill rounded opacity-40"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src="/coursePage/ai.avif"
                      alt="AI Assistance"
                      className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src="/coursePage/soln.avif"
                      alt="Situational Problems"
                      className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={600}
                delay={100}
                easing="spring"
              >
                <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src="/coursePage/course3.png"
                      alt="teaching"
                      className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
                </div>
              </ScrollReveal>
            </div>

            {/* Small tablet layout - modified for screens between sm and md breakpoints */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-8 md:hidden mx-auto w-[35rem] px-4">
              {/* Live Classroom - Featured item with larger size */}
              <div className="col-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-96">
                <div className="absolute inset-0 z-0">
                  <video
                    ref={videoRef1}
                    autoPlay
                    muted
                    loop
                    src="/coursePage/CodingBackground.mp4"
                    alt="Live Classroom"
                    className="w-full h-full object-fill rounded opacity-40"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-center"></div>
              </div>

              {/* Other items with increased height */}
              <div className="bg-black col-span-2 text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/coursePage/practice.webp"
                    alt="Practice"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
              </div>

              <div className="bg-black col-span-2 text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/coursePage/mentors.png"
                    alt="Mentorship"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
              </div>

              <div className="bg-black col-span-2 text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <video
                    src="/coursePage/TypingCode.mp4"
                    autoPlay
                    muted
                    alt="Live Classroom"
                    className="w-full h-full object-fill rounded opacity-40"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
              </div>

              <div className="bg-black col-span-2 text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/coursePage/ai.avif"
                    alt="AI Assistance"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
              </div>

              <div className="bg-black col-span-2 text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/coursePage/soln.avif"
                    alt="Situational Problems"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
              </div>

              <div className="bg-black col-span-2 text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-80">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/coursePage/course3.png"
                    alt="teaching"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10"></div>
              </div>
            </div>

            {/* Desktop layout - complex grid */}
            <div className="hidden md:grid md:grid-cols-4 md:grid-rows-6 md:gap-4 md:h-[700px] relative w-full">
              {/* Practice with Assignments */}
              <ScrollReveal
                animation="slightLeft"
                duration={700}
                delay={100}
                easing="gentle"
                className="row-span-2 bg-black  text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="/coursePage/practice.webp"
                    alt="Practice"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10"></div>
              </ScrollReveal>

              {/* 1:1 Guidance */}
              <ScrollReveal
                animation="fadeIn"
                duration={900}
                delay={300}
                easing="spring"
                className="row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0 ">
                  <img
                    src="/coursePage/mentors.png"
                    alt="Mentorship"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10"></div>
              </ScrollReveal>

              {/* Situational Problem & Solution */}
              <ScrollReveal
                animation="fadeIn"
                duration={900}
                delay={300}
                easing="spring"
                className="row-span-2 col-start-1 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0 ">
                  <img
                    src="/coursePage/soln.avif"
                    alt="Situational Problems"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10"></div>
              </ScrollReveal>

              {/* Live Classroom */}
              <ScrollReveal
                animation="slideUp"
                duration={900}
                delay={300}
                easing="spring"
                className="col-span-2 row-span-4 col-start-2 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <video
                    ref={videoRef1}
                    onMouseEnter={() => handleMouseEnter(videoRef1)}
                    onMouseLeave={() => handleMouseLeave(videoRef1)}
                    autoPlay
                    muted
                    loop
                    src="/coursePage/CodingBackground.mp4"
                    alt="Live Classroom"
                    className="w-full h-full object-fill rounded opacity-40"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center"></div>
              </ScrollReveal>

              {/* Cloud Sandbox */}
              <ScrollReveal
                animation="fadeIn"
                duration={900}
                delay={300}
                easing="spring"
                className="col-span-2 row-span-2 col-start-2 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <video
                    src="/coursePage/TypingCode.mp4"
                    ref={videoRef2}
                    onMouseEnter={() => handleMouseEnter(videoRef2)}
                    onMouseLeave={() => handleMouseLeave(videoRef2)}
                    autoPlay
                    muted
                    alt="Live Classroom"
                    className="w-full h-full object-fill rounded opacity-40"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10"></div>
              </ScrollReveal>

              {/* AI-Assisted Problem Solving */}
              <ScrollReveal
                animation="slideLeft"
                duration={900}
                delay={300}
                easing="spring"
                className="row-span-3 col-start-4 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0 ">
                  <img
                    src="/coursePage/ai.avif"
                    alt="AI Assistance"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center"></div>
              </ScrollReveal>

              {/* Teaching Assistance */}
              <ScrollReveal
                animation="slideLeft"
                duration={900}
                delay={300}
                easing="spring"
                className="row-span-3 col-start-4 row-start-4 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"
              >
                <div className="absolute inset-0 z-0 ">
                  <img
                    src="/coursePage/course3.png"
                    alt="teaching"
                    className="w-full h-full object-cover rounded opacity-40 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center"></div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Stats Section */}

        <div 
      ref={statsRef}
      className="bg-white text-black py-10 px-4 flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 md:space-x-16 lg:space-x-24 w-screen max-w-[110rem] mx-auto my-20"
    >
      <div>
        <h3 className="text-red-500 text-3xl font-bold pb-2 text-center">
          {count1.toLocaleString()}
        </h3>
        <p className="text-sm md:text-base">
          small to medium startups
          <br />
          already using our product
        </p>
      </div>
      <div>
        <h3 className="text-red-500 text-3xl font-bold pb-2 text-center">
          {count2.toLocaleString()}
        </h3>
        <p className="text-sm md:text-base">
          data endpoints integrated
          <br />
          into custom reports
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-red-500 text-3xl font-bold pb-2 text-center">Top {topCount}</h3>
        <p className="text-sm md:text-base">
          in SaaS, fintech and more <br /> subcategories
        </p>
      </div>
    </div>

        {/* Our Team section start here */}

        <div className="bg-black text-white py-10 px-4 text-center">
          {/* Title Section */}
          <h2 className="text-3xl font-bold inline-block relative pb-2">
            The Minds Behind <span className="text-red-500">CAREERTRONIC</span>{" "}
            TEAM
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></div>
          </h2>
          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl leading-relaxed my-16">
            At Careertronic Global Services, our strength lies in our skilled
            and passionate team, dedicated to delivering innovative solutions
            for your success. From software developers and IT trainers to
            business consultants and education advisors, we bring expertise
            across all our services. We collaborate, innovate, and grow,
            ensuring cutting-edge solutions tailored to your needs. With a
            commitment to continuous learning, we stay ahead of industry trends
            to drive your success.
          </p>

          {/* Image Section */}
          <div className="mt-6 flex justify-center w-[70vw]  h-[30vw] mx-auto mb-20">
            <Image
              src="/ourteam/leader.jpeg"
              alt="Gallery"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link href={"/ourteam"}>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Show All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
