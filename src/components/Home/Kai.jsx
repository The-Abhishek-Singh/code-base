"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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


    // Main carousel images
  const mainImages = [
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      alt: "Featured gallery image 1"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop", 
      alt: "Featured gallery image 2"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      alt: "Featured gallery image 3"
    }
  ];

  // Gallery grid images
  const gridImages = [
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=150&fit=crop", alt: "Gallery image 1" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop", alt: "Gallery image 2" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop", alt: "Gallery image 3" },
    { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=200&h=150&fit=crop", alt: "Gallery image 4" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=150&fit=crop", alt: "Gallery image 5" },
    { src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=150&fit=crop", alt: "Gallery image 6" }
  ];

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, mainImages.length]);

  const nextSlide1 = () => {
    setCurrentSlide((prev) => (prev + 1) % mainImages.length);
  };

  const prevSlide1 = () => {
    setCurrentSlide((prev) => (prev - 1 + mainImages.length) % mainImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
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
      {/* <div className="bg-black text-white py-10">
        <div className="px-4 sm:px-8 lg:px-16 space-y-10 w-full lg:w-[100%] p-20">
          <div className="text-center py-8 sm:py-10 relative">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins inline-block relative">
              Our <span className="text-red-500">Gallery</span>
              <span className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-gray-500 to-transparent w-full transform translate-y-1"></span>
            </h1>
          </div>

          <div className="bg-black text-white">
            <div className="grid grid-cols-1 gap-8 sm:hidden mx-auto w-[18rem]">
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

            <div className="hidden sm:grid sm:grid-cols-2 gap-8 md:hidden mx-auto w-[35rem] px-4">
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

            <div className="hidden md:grid md:grid-cols-4 md:grid-rows-6 md:gap-4 md:h-[700px] relative w-full">
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

              <ScrollReveal
                animation="scaleUp"
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

              <ScrollReveal
                animation="scaleUp"
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
      </div> */}

      {/* New Gallery Section  */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-700 px-6 py-16 lg:px-12">
        {/* <!-- Background decorative shapes --> */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gray-800 rounded-2xl opacity-40 transform rotate-12"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gray-500 rounded-xl opacity-30 transform -rotate-6"></div>
            <div className="absolute bottom-32 left-20 w-40 h-20 bg-gray-700 rounded-full opacity-35"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
            {/* <!-- Title Section --> */}
            <div className="flex justify-end mb-12">
                <div className="text-right">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">Our Gallery</h2>
                    <div className="w-24 h-0.5 bg-white ml-auto"></div>
                </div>
            </div>

            {/* <!-- Main Content Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* <!-- Left Side - Main Image --> */}
                <div className="relative">
                  {/* Background shape for depth */}
                  <div className="absolute -inset-4 bg-gray-800 rounded-3xl opacity-50 transform rotate-1"></div>
                  <div className="absolute -inset-2 bg-gray-600 rounded-3xl opacity-40 transform -rotate-1"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-gray-800 rounded-2xl p-2 shadow-2xl border border-gray-600 group">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={mainImages[currentSlide].src}
                        alt={mainImages[currentSlide].alt}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover transition-all duration-500 ease-in-out"
                      />
                      
                      {/* Navigation arrows */}
                      <button
                        onClick={prevSlide1}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextSlide1}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Auto-play toggle */}
                      <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {mainImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                          index === currentSlide 
                            ? 'bg-white shadow-lg' 
                            : 'bg-gray-500 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Progress indicator */}
                  {isAutoPlaying && (
                    <div className="mt-4 bg-gray-700 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-white transition-all duration-100 ease-linear"
                        style={{
                          width: '100%',
                          animation: 'progress 4s linear infinite'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* <!-- Right Side - Description and Grid --> */}
                <div className="space-y-8">
                    {/* <!-- Description --> */}
                    <p className="text-gray-300 text-lg font-sans leading-relaxed">
                        This is our gallery. Check it out.
                    </p>

                    {/* <!-- Image Grid --> */}
                    <div className="relative">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-600 hover:border-gray-500 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=150&fit=crop" 
                                    alt="Gallery image 1" 
                                    className="w-full h-20 md:h-24 object-cover rounded"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-600 hover:border-gray-500 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop" 
                                    alt="Gallery image 2" 
                                    className="w-full h-20 md:h-24 object-cover rounded"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-600 hover:border-gray-500 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop" 
                                    alt="Gallery image 3" 
                                    className="w-full h-20 md:h-24 object-cover rounded"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-600 hover:border-gray-500 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=200&h=150&fit=crop" 
                                    alt="Gallery image 4" 
                                    className="w-full h-20 md:h-24 object-cover rounded"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-600 hover:border-gray-500 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=150&fit=crop" 
                                    alt="Gallery image 5" 
                                    className="w-full h-20 md:h-24 object-cover rounded"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-600 hover:border-gray-500 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=150&fit=crop" 
                                    alt="Gallery image 6" 
                                    className="w-full h-20 md:h-24 object-cover rounded"
                                />
                            </div>
                        </div>

                        {/* <!-- View All Button --> */}
                        <div className="flex justify-end mt-6">
                            <button className="px-6 py-3 bg-transparent border-2 border-gray-400 text-white font-sans font-medium rounded-full hover:border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 ease-in-out transform hover:scale-105">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50"></div>
      </section>

        {/* Good Life Begins With a Good Company */}
       <section className="relative bg-black px-4 lg:px-16 py-10">
        {/* Main Hero Content  */}
        <div className="max-w-7xl mx-auto">
            {/* Hero Layout - Flex container  */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-10">
                
                 {/* Left Column - Image  */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="relative max-w-md w-full">
                        <Image 
                            src={'/mainHome/jobs.png'} 
                            height={600}
                            width={600}
                            alt="Glowing microchip technology" 
                            className="w-full md:h-auto object-contain rounded-2xl shadow-2xl border border-gray-800"
                        />
                         {/* Subtle glow effect  */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl"></div>
                    </div>
                </div>

                {/* Right Column - Text Content  */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    {/* Main Title  */}
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Good Life Begins With
                        <br/>
                        <span className="text-white">A Good Company</span>
                    </h1>

                    {/* Subtitle Paragraph  */}
                    <p className="text-gray-300 text-base lg:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                        Ultricies purus vitae sem tincidunt ut cursus purus. Ultricies proin magna molestie 
                        amet eros at elementum. Sed vel nunc ut bibendum eros ornare sodales commodo.
                        augue semper porta bibendum semper lorem euismod feugiat euismod volutpat.
                    </p>

                    {/* Buttons  */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Search Job
                        </button>
                        <a href="#" className="text-sm text-gray-300 hover:text-white underline transition-colors duration-300">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Section  */}
            <div className="border-t border-dashed border-gray-700 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Stat 1 */}
                    <div className="text-center lg:text-left space-y-2">
                        <div className="text-red-600 text-3xl lg:text-4xl font-bold">12K+</div>
                        <h3 className="text-white font-semibold text-lg">Clients worldwide</h3>
                        <p className="text-sm text-gray-400 max-w-xs mx-auto lg:mx-0">
                            Sit et tempor pharetra aliquet magna lacus ut cursus placiti. Blandit ut massa 
                            elementum.
                        </p>
                    </div>

                    {/* Stat 2  */}
                    <div className="text-center lg:text-left space-y-2">
                        <div className="text-red-600 text-3xl lg:text-4xl font-bold">20K+</div>
                        <h3 className="text-white font-semibold text-lg">Active resume</h3>
                        <p className="text-sm text-gray-400 max-w-xs mx-auto lg:mx-0">
                            Sit et tempor pharetra aliquet magna lacus ut cursus placiti. Blandit ut massa 
                            elementum.
                        </p>
                    </div>

                    {/* Stat 3  */}
                    <div className="text-center lg:text-left space-y-2">
                        <div className="text-red-600 text-3xl lg:text-4xl font-bold">18K+</div>
                        <h3 className="text-white font-semibold text-lg">Companies</h3>
                        <p className="text-sm text-gray-400 max-w-xs mx-auto lg:mx-0">
                            Sit et tempor pharetra aliquet magna lacus ut cursus placiti. Blandit ut massa 
                            elementum.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

       {/* Image Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image  */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/mainHome/7468d10cfa116929f0f6e9849b0e2cb9b9989823.png" 
                alt="Video conference meeting on monitor" 
                className="w-full h-full object-cover"
            />
             {/* Dark overlay for better text readability  */}
            <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Container  */}
        <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-12 lg:px-16">
             {/* Glassmorphism CTA Box  */}
            <div className="bg-black/40 backdrop-blur border border-white/20 rounded-2xl p-6 md:p-8 max-w-md shadow-2xl">
                {/* Title  */}
                <div className="mb-6">
                    <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                        Innovate with Purpose
                    </h1>
                    <h2 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                        Transforming Learning for the Next Generation
                    </h2>
                </div>

                {/* Description  */}
                <p className="text-sm text-gray-200 leading-relaxed mb-6 max-w-sm">
                    At our learning premium broadcast meet ligula at eleifend aliquet. Blandit et massa elementum id 
                    facilisis adipiscing platea tellus. Imerdiet ullamcorper urna egestas sagittis donec. Consequat 
                    posuere ridiculus tortor cursus ut pulvinar gravida. Sapien sodales mauris nam lacinia velit vel lorem.
                </p>

                {/* CTA Button  */}
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Start Growing
                </button>
            </div>
        </div>

        {/* Additional decorative elements for depth */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse hidden md:block"></div>
        <div className="absolute bottom-32 right-32 w-2 h-2 bg-white/15 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
      </section>

      {/* Testimonial  */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Blue border container */}
          <div className="lg:p-8 md:p-12 bg-black">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Testimonials from <span className="text-red-700">Our</span> Customers
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-zinc-950 border border-gray-700 rounded-lg p-6 relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-700 text-lg">★</span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">Amazing services</h3>
                
                {/* Review Text */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                  Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. 
                  Mus etiam et vestibulum venenatis
                </p>
                
                {/* Quote Icon */}
                <div className="absolute bottom-6 right-6">
                  <span className="text-red-700 text-4xl font-bold">"</span>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">MK</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Marco Kihn</p>
                    <p className="text-gray-400 text-sm">Happy Client</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-zinc-950 border border-gray-700 rounded-lg p-6 relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-700 text-lg">★</span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">Everything simple</h3>
                
                {/* Review Text */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                  Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper 
                  augue faucibus
                </p>
                
                {/* Quote Icon */}
                <div className="absolute bottom-6 right-6">
                  <span className="text-red-700 text-4xl font-bold">"</span>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">KH</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Kristin Hester</p>
                    <p className="text-gray-400 text-sm">Happy Client</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-zinc-950 border border-gray-700 rounded-lg p-6 relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-700 text-lg">★</span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">Awesome, thank you!</h3>
                
                {/* Review Text */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                  Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi 
                  bibendum ullamcorper augue faucibus. Nulla et tempor montes
                </p>
                
                {/* Quote Icon */}
                <div className="absolute bottom-6 right-6">
                  <span className="text-red-700 text-4xl font-bold">"</span>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">ZC</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Zion Cisneros</p>
                    <p className="text-gray-400 text-sm">Happy Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesList;
