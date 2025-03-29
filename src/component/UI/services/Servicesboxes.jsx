"use client";
import React from "react";
import Link from "next/link";

const Servicesboxes = ({ title, bgUrl, shifturl }) => {
  const handleMouseEnter = (e) => {
    const container = e.currentTarget;
    const bgImage = container.querySelector(".bg-image");
    const shine = container.querySelector(".shine-effect");

    container.style.borderColor = "#ef4444";
    if (bgImage) {
      bgImage.style.transform = "scale(1.05)";
      bgImage.style.transition = "transform 0.5s ease-in-out";
    }
    if (shine) {
      shine.style.left = "-100%";
      shine.style.transition = "none";
      setTimeout(() => {
        shine.style.transition = "left 1s ease-in-out";
        shine.style.left = "200%";
      }, 50);
    }
  };

  const handleMouseLeave = (e) => {
    const container = e.currentTarget;
    const bgImage = container.querySelector(".bg-image");

    container.style.borderColor = "white";
    if (bgImage) {
      bgImage.style.transform = "scale(1)";
    }
  };

  return (
    <div className="w-full px-2 sm:px-4 mb-4 sm:mb-6">
      <div
        className="
          w-full 
          max-w-full 
          min-h-[180px] 
          xs:min-h-[220px]
          sm:min-h-[250px] 
          md:min-h-[180px]
          flex flex-col justify-center 
          border-2 border-white 
          rounded-xl 
          sm:rounded-2xl 
          p-3 
          sm:p-6 
          shadow-md 
          sm:shadow-lg 
          transition duration-300 
          relative 
          overflow-hidden
        "
        style={{
          aspectRatio: "16 / 9",
          minWidth: "100%",
          maxWidth: "100%",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-image"
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease-in-out",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Shiny effect */}
        <div
          className="shine-effect absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
            transform: "skewX(-20deg)",
            top: "-10%",
            left: "-100%",
            width: "50%",
            height: "120%",
            zIndex: 5,
          }}
        ></div>
        {/* Title */}
        <h1
          className="
          absolute 
          top-2 
          sm:top-4 
          left-2 
          sm:left-4 
          font-bold 
          text-sm 
          sm:text-lg 
          md:text-xl 
          text-white
        "
        >
          {title}
        </h1>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="flex justify-start">
            <Link href={shifturl} className="">
              <div
                className="
                  bg-red-600 
                  w-auto 
                  rounded-lg 
                  sm:rounded-xl 
                  border-2 
                  border-red-500
                  flex 
                  justify-center 
                  items-center
                  text-xs 
                  sm:text-sm 
                  md:text-base 
                  px-2 
                  py-1 
                  sm:px-3 
                  sm:py-1 
                  md:px-4 
                  md:py-2
                  hover:bg-white

                  hover:text-red-600
                  transition 
                  duration-300
                "
              >
                Explore Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesboxes;