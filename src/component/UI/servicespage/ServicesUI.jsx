"use client";
import React from "react";

const ServicesContent = ({
  title,
  description,
  backgroundImage,
  sectionTitle,
}) => {
  return (
    <>
      <div
        className="relative text-white py-16 min-h-[35rem] 2xl:min-h-[45rem] flex justify-start bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 overflow-hidden bg-black opacity-60"></div>

        <div className="relative z-10 max-w-6xl mx-auto lg:mx-20 px-4 sm:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            {title}
          </h1>
          <p className="text-lg max-w-4xl leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="bg-black h-50 p-11 z-20">
        <div className="relative h-24 my-6 mx-2 sm:m-6 md:mx-20 bg-red-600 rounded-bl-full rounded-tr-full flex items-center justify-center pt-2 pb-2">
          <h2 className="text-white text-base sm:text-xl lg:text-2xl font-bold p-6">
            {sectionTitle}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ServicesContent;
