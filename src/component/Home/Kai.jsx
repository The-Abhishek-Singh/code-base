"use client";
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
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
      title: "Software development & export services",
      description:
        "We specialize in software development and export services, delivering cutting-edge technology solutions tailored to your business needs. Our expertise spans custom software, web and mobile applications, AI-driven solutions, and cloud integrations, ensuring seamless digital transformation.",
        icon:"/ourteam/first1.png"
    },
    {
      number: "2",
      title: "IT & industrial automation     training",
      description:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development.",
        icon:"/ourteam/first2.png"
    },
    {
      number: "3",
      title: "Corporate & industrial training",
      description:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development.",
        icon:"/ourteam/first3.png"
    },
    {
      number: "4",
      title: "Global education & study abroad programs",
      description:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development.",
        icon:"/ourteam/first4.png"
    },
  ];

  const [scrollHeight, setScrollHeight] = useState(0);
  const firstNodeRef = useRef(null);
  const lastDescriptionRef = useRef(null);
  const sectionRef = useRef(null);
  const lineContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (firstNodeRef.current && lastDescriptionRef.current && lineContainerRef.current) {
        const firstNodeRect = firstNodeRef.current.getBoundingClientRect();
        const lastDescriptionRect = lastDescriptionRef.current.getBoundingClientRect();
        const lineContainerRect = lineContainerRef.current.getBoundingClientRect();

        // Calculate total scroll distance from first title's top
        const totalDistance = lastDescriptionRect.bottom - firstNodeRect.top;

        // Calculate scroll progress relative to first title
        const firstTitleRect = firstNodeRef.current.getBoundingClientRect();

        const scrollProgress = Math.max(
          0, 
          Math.min(
            window.scrollY - firstTitleRect.top, 
            totalDistance
          )
        );

        // Only set scroll height if scrolled past the first title
        if (window.scrollY > firstTitleRect.top) {
          setScrollHeight(scrollProgress);
        } else {
          setScrollHeight(0); // Reset height if not scrolled past
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen bg-black flex flex-col items-center p-8 space-y-12 relative"
    >
      {/* Vertical Line Container */}
      <div 
        ref={lineContainerRef}
        className="fixed left-1/2 transform -translate-x-1/2 w-1 sm:ml-[0px] ml-[16px]"
        style={{
          top: firstNodeRef.current 
            ? `${firstNodeRef.current.getBoundingClientRect().top}px` 
            : '0'
        }}
      >
        {/* Red Line Starting from First Node */}
        <div
          className="absolute left-0 top-0 w-1 bg-red-500 transition-all duration-1000  "
          style={{ 
            height: `${scrollHeight}px`
          }}
        ></div>
      </div>

      {services.map((service, index) => (
        <div
          key={index}
          ref={index === 0 ? firstNodeRef : null}
          className="flex w-full max-w-[81rem] justify-between items-center relative py-8  "
        >
          <div className="w-1/2 text-right pr-16 flex items-center relative">
            <span className="text-gray-400 text-5xl font-extrabold mr-2">
              {service.number}
            </span>
            <span className="text-white font-medium leading-tight relative inline-block pb-2 text-[1.75rem] max-[425px]:text-[1.25rem]">


     





              {service.title}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-l from-gray-500 to-transparent"></span>
            </span>

            <div className="w-1/6 flex justify-center">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
              </div>

          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-6 h-6 bg-black border-2 border-white rounded-full hidden sm:block"></div>
          <div 
            ref={index === services.length - 1 ? lastDescriptionRef : null}
            className="w-1/2 text-left sm:pl-[3rem] pl-8 flex items-center  "
          >
            
            <p className="text-gray-400 lg:text-[24px]">{service.description}</p>
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


 <div className="px-4 sm:px-8 lg:px-16 space-y-10  w-full">
 <div className="text-center py-8 sm:py-10 relative">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins inline-block relative">
        Our <span className="text-red-500">Gallery</span>
        {/* Underline Effect */}
        <span className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-gray-500 to-transparent w-full transform translate-y-1"></span>
      </h1>

    </div>
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden ">
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[29rem] mx-auto bg-gray-100 rounded-xl shadow-lg mb-8 sm:mb-16 md:mb-20 lg:mb-[10rem] lg:w-[56rem] max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-3xl xl:max-w-4xl">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100"
              onClick={prevSlide}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100"
              onClick={nextSlide}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
        
        
        
      </div>
      

      
      {/* Stats Section */}
      
      <div className="bg-white text-black py-10 px-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 lg:space-x-24 w-full max-w-6xl mx-auto">
  <div className="text-center">
    <h3 className="text-red-500 text-3xl font-bold pb-2">127K</h3>
    <p className="text-sm md:text-base">small to medium startups<br/>already using our product</p>
  </div>
  <div className="text-center">
    <h3 className="text-red-500 text-3xl font-bold pb-2">428M</h3>
    <p className="text-sm md:text-base">data endpoints integrated<br/>into custom reports</p>
  </div>
  <div className="text-center">
    <h3 className="text-red-500 text-3xl font-bold pb-2">Top 3</h3>
    <p className="text-sm md:text-base">in SaaS, fintech and more <br /> subcategories</p>
  </div>
</div>
      </div>


      {/* Our Team section start here */}

      <div className="bg-black text-white py-10 px-4 text-center">
      {/* Title Section */}
      <h2 className="text-2xl font-bold inline-block relative pb-2">
        The Minds Behind <span className="text-red-500">CAREERTRONIC</span> TEAM
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></div>
        </h2>
      {/* Description */}
      <p className="mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
        At Careertronic Global Services, our strength lies in our skilled and passionate team, 
        dedicated to delivering innovative solutions for your success. From software developers and 
        IT trainers to business consultants and education advisors, we bring expertise across all 
        our services. We collaborate, innovate, and grow, ensuring cutting-edge solutions tailored 
        to your needs. With a commitment to continuous learning, we stay ahead of industry trends 
        to drive your success.
      </p>
      
      {/* Image Section */}
      <div className="mt-6 flex justify-center w-[85vw]  h-[35vw] mx-auto mb-20">
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
        <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
          Show All
        </button>
      </div>
    </div>


    </div>
  );
};

export default ServicesList;
