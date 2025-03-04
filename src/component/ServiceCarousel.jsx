"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ScrollReveal = dynamic(() => import("./ScrollReveal"), { ssr: false });
const ServiceCarousel = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "SOFTWARE DEVELOPMENT & EXPORT SERVICES",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 1,
      position: 2, // left
    },
    {
      id: 2,
      name: "IT TRAINING & CERTIFICATION",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 2,
      position: 1, // middle
    },
    {
      id: 3,
      name: "CLOUD SOLUTIONS & MIGRATION",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 3,
      position: 0, // right (highlighted)
    },
    {
      id: 4,
      name: "Study & Work Abroad",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 7,
      position: 3, // off-screen
    },
    {
      id: 5,
      name: "E-COMMERCE SOLUTIONS",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 6,
      position: 4,
    },
    {
      id: 6,
      name: "IT INFRASTRUCTURE MANAGEMENT",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 5,
      position: 5,
    },
    {
      id: 7,
      name: "CYBERSECURITY SERVICES",
      image: "/ServiceCarousel/DATA.svg",
      pageNum: 4,
      position: 6,
    },
  ]);
  // State to track screen size
  const [screenSize, setScreenSize] = useState("xl");
  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Move slides one position to the right
      setServices((prevServices) => {
        return prevServices.map((service) => {
          // Advance each slide one position
          const newPosition = (service.position + 1) % prevServices.length;
          return { ...service, position: newPosition };
        });
      });
    }, 3000);
    // Handle screen resize
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm");
      } else if (window.innerWidth < 768) {
        setScreenSize("md");
      } else if (window.innerWidth < 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth < 1280) {
        setScreenSize("xl");
      } else if (window.innerWidth < 1920) {
        setScreenSize("xxl");
      } else if (window.innerWidth > 1920) {
        setScreenSize("3xl");
      } else {
        setScreenSize("2xl");
      }
    };
    // handle left text size
    const textSize = () => `${
      window.innerWidth < 640
        ? "text-xl"
        : window.innerWidth < 768
        ? "text-2xl"
        : window.innerWidth < 1024
        ? "text-3xl"
        : window.innerWidth < 1280
        ? "text-4xl"
        : window.innerWidth < 1920
        ? "text-5xl"
        : "text-6xl"
    }`;
    // Set initial size
    handleResize();
    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Calculate exact position for each slide
  const getXPosition = (position) => {
    switch (position) {
      case 0:
        return "-110%"; // Far left
      case 1:
        return "-40%"; // Left
      case 2:
        return "30%"; // Center/active
      case 3:
        return "100%"; // Right
      case 4:
        return "170%"; // Far right
      case 5:
        return "240%"; // Off-screen
      case 6:
        return "310%"; // Off-screen
      default:
        return "0%";
    }
  };
  // Set visible slides based on screen size
  const getVisibleSlides = () => {
    if (screenSize === "sm") {
      // Show only 1 slide on small screens
      return services.filter((service) => service.position === 2);
    } else if (screenSize === "md") {
      return services.filter(
        (service) => service.position >= 1 && service.position <= 2
      );
    } else if (screenSize === "lg") {
      return services.filter(
        (service) => service.position >= 1 && service.position <= 2
      );
    } else if (screenSize === "xl") {
      return services.filter(
        (service) => service.position >= 1 && service.position <= 2
      );
    } else {
      // Show 3 slides on large screens (default behavior)
      return services.filter(
        (service) => service.position >= 0 && service.position < 3
      );
    }
  };
  const visibleSlides = getVisibleSlides();
  return (
    <div className="bg-black  mt-4  py-[20vh]">
      <div className="w-full px-5 md:max-w-5xl lg:max-w-[88rem]  sm:gap-8 mx-auto flex flex-col sm:flex-row pt-6 pb-4 h-80 sm:h-[26rem] md:h-full">
        {/* Left section - Carousel */}
        <div className="w-full sm:w-1/2 mb-0">
          <div className="w-full h-full max-w-2xl mx-auto bg-[rgb(23,23,23)]rounded-lg">
            <div className="relative overflow-hidden h-full pr-8">
              <div
                className="absolute inset-0 flex items-center justify-center
              sm:w-[35rem] sm:h-[23rem] sm:-ml-[9rem]
              md:w-[43rem] md:-ml-[11rem] md:h-[29rem]
              lg:w-[55rem] lg:-ml-48
              xl:w-[50rem] xl:h-[34rem] xl:ml-0
              2xl:w-[54rem] 2xl:h-full"
              >
                {visibleSlides.map((service) => (
                  <div
                    key={service.id}
                    className="absolute transition-all duration-700 ease-in-out rounded-2xl overflow-hidden h-full w-full"
                    style={{
                      opacity:
                        service.position === 2
                          ? 1
                          : service.position === 1
                          ? 0.6
                          : service.position === 3
                          ? 0.4
                          : 0.2, // Make position 3 (rightmost) more visible
                      transform: `translateX(${getXPosition(
                        service.position
                      )}) scale(${service.position === 2 ? 1.05 : 0.9})`,
                      width: service.position === 2 ? "40%" : "30%",
                      height: service.position === 2 ? "80%" : "70%",
                      zIndex: 30 - service.position * 10,
                    }}
                  >
                    <div className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg h-full relative">
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          alt={`${service.name} image`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right section - Content */}
        <div className="sm:text-left w-full flex flex-col justify-center text-center sm:block sm:w-1/2 mb-12 ">
          <h2 className="hidden sm:block text-3xl mb-4 mt-4 md:mt-12 font-bold  leading-tight md:leading-snug  md:tracking-wide text-white">
            Creating Strong <br />
            Solutions to Drive{" "}
            <span className="text-red-500">
              Your <br />
              Digital Transformation
            </span>
          </h2>
          <div className="flex justify-center items-center sm:hidden   text-3xl mb-4 mt-4  font-bold  leading-tight  text-white">
            <h2 className="max-w-80">
              Creating Strong Solutions to Drive{" "}
              <span className="text-red-500">Your Digital Transformation</span>
            </h2>
          </div>
          <div className="h-32 relative overflow-hidden mt-4 md:my-8">
  {services.map((service) => (
    <h1
      key={service.id}
      className={`
        ${screenSize === "sm"
          ? "text-md"
          : screenSize === "md"
          ? "text-md"
          : screenSize === "lg"
          ? "text-xl"
          : screenSize === "xl"
          ? "text-4xl"
          : screenSize === "xxl"
          ? "text-6xl"
          : "text-6xl"
        } font-bold bg-gradient-to-b from-neutral-50 from-40% to-[#171717] bg-clip-text text-transparent absolute transition-all duration-500 w-full ${
        service.position === 2
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-full"
      }`}
    >
      {service.name}
    </h1>
  ))}
</div>

          <div className=" flex items-center justify-center sm:block -mt-12 sm:mt-0">
            <button className="bg-red-500 hover:bg-red-600 text-white px-3  sm:px-4 sm:py-1 md:px-6 md:py-2 rounded-lg mb-5 flex items-center text-xl transition-all duration-300 transform hover:scale-105">
            Our Offerings <span className="ml-3 text-2xl">→</span>
            </button>
          </div>
          <div className=" hidden sm:flex items-center">
            <div className="relative h-24 w-32 overflow-hidden">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`absolute text-6xl font-bold transition-all duration-500 w-auto bg-gradient-to-b from-white to-black bg-clip-text text-transparent ${
                    service.position === 2
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform -translate-y-full"
                  }`}
                >
                  <span>{service.pageNum}</span>
                </div>
              ))}
              <span className="ml-6 md:ml-10 text-6xl font-bold bg-gradient-to-b from-white to-black  bg-clip-text text-transparent tracking-widest">
                /7
              </span>
              <div>
                <Image
                  src="/ServiceCarousel/rightArrow.svg"
                  width={72}
                  height={14.4}
                  alt="right arrow"
                  className="opacity-90 w-10 sm:w-12  md:w-[4.5rem] -mt-2 sm:-mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCarousel;