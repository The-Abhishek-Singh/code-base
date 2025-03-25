"use client";
import React from "react";
import Link from "next/link";

const Servicesboxes = ({ title, bgUrl, shifturl }) => {
  const handleMouseEnter = (e) => {
    const container = e.currentTarget;

    const bgImage = container.querySelector(".bg-image");
    const shine = container.querySelector(".shine-effect");

    if (container) {
      container.style.borderColor = "#ef4444";
    }

    if (bgImage) {
      bgImage.style.transform = "scale(1.1)";
      bgImage.style.transition = "transform 0.5s ease-in-out";
    }

    if (shine) {
      shine.style.left = "-100%";
      shine.style.transition = "none";

      setTimeout(() => {
        if (shine) {
          shine.style.transition = "left 1s ease-in-out";
          shine.style.left = "200%";
        }
      }, 50);
    }
  };

  const handleMouseLeave = (e) => {
    const container = e.currentTarget;
    const bgImage = container.querySelector(".bg-image");

    if (container) {
      container.style.borderColor = "white";
    }

    if (bgImage) {
      bgImage.style.transform = "scale(1)";
    }
  };

  return (
    <div className="flex justify-center text-white h-auto mx-6 xs:mx-6">
      <div
        className="
          w-[95%] 
          xs:w-[90%] 
          sm:w-[580px] 
          h-44 
          xs:h-52 
          sm:h-56 
          flex 
          flex-col 
          justify-center 
          border-2 
          border-white 
          rounded-2xl 
          p-3 
          xs:p-4 
          sm:p-6 
          shadow-bg 
          transition 
          duration-300 
          relative 
          overflow-hidden
        "
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

        {/* Overlay to darken the background for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Shiny effect on border */}
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

        {/* Title at the top-left */}
        <h1
          className="
          absolute 
          top-2 
          xs:top-3 
          sm:top-4 
          left-2 
          xs:left-3 
          sm:left-4 
          font-bold 
          text-base 
          xs:text-lg 
          sm:text-xl 
          text-white
        "
        >
          {title}
        </h1>

        {/* Content */}
        <div className="relative z-10 w-full h-auto flex flex-col mt-auto">
          <div className="mt-auto flex flex-col gap-2 xs:gap-4 w-auto"></div>
          <div className="flex justify-start">
            <div
              className="
              bg-white 
              w-auto 
              rounded-xl 
              border-2 
              border-red-500 
              flex 
              justify-center 
              items-center 
              text-black 
              text-xs 
              xs:text-sm 
              sm:text-base 
              px-2 
              xs:px-3 
              sm:px-4 
              py-1 
              xs:py-1 
              sm:py-2 
              hover:bg-red-500 
              hover:text-white 
              transition 
              duration-300
            "
            >
              <Link href={shifturl}>
                <h1>Explore Now</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesboxes;