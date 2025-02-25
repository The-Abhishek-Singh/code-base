"use client";
import React from "react";

const Part = ({ number, title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:space-x-4 lg:space-x-8 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8">
      {/* Image Section - Full width on mobile, proper width on larger screens */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <img
          src={image}
          alt={title}
          className="w-36 h-32 sm:w-44 sm:h-36 lg:w-52 lg:h-40 object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 md:space-x-2 lg:space-x-6 w-full">
        {/* Number - Centered on mobile, positioned properly on larger screens */}
        <h2 className="text-red-500 text-3xl sm:text-4xl font-bold underline decoration-4 underline-offset-4 mx-0 sm:mx-4 md:mx-6 lg:mr-40 lg:ml-40 mt-0 sm:mt-4 md:mt-10 lg:mt-16">
          {number}
        </h2>

        {/* Title & Description */}
        <div className="text-center sm:text-left w-full">
          <h3 className="text-xl sm:text-2xl text-black font-semibold mb-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xl">
            {description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part;
