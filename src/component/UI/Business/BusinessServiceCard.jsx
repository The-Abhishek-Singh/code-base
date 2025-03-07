import React from "react";
import Image from "next/image";
import ScrollReveal from "@/component/ScrollReveal";
const BusinessServiceCard = ({
  title,
  description,
  iconSrc,
  backgroundColor = "bg-black",
  borderColor = "border-white",
  textColor = "t  ext-white",
}) => {
  return (
    <div
      className={`relative rounded-lg ${backgroundColor} border ${borderColor} p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center h-auto w-full transition-all duration-100 shadow-lg text-center hover:scale-105 hover:border-red-500`}
    >
      {/* Icon - Made fully responsive */}
      <div className="flex items-center justify-center mb-3 sm:mb-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 flex items-center justify-center rounded-md overflow-hidden bg-black">
          {iconSrc ? (
            <div className="relative w-full h-full">
              <Image
                src={iconSrc}
                alt={`${title} icon`}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 192px, 256px"
                className="object-contain p-2"
              />
            </div>
          ) : (
            <span className="text-gray-400">Icon</span>
          )}
        </div>
      </div>
      {/* Title - Responsive text sizes */}
      <ScrollReveal animation="slideUp" duration={500} delay={0}>
      <h3
        className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold ${textColor} mb-1 sm:mb-2`}
      >
        {title}
      </h3>
      </ScrollReveal>
      {/* Description - Responsive text sizes */}
      <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-snug">
        {description}
      </p>
    </div>
  );
};
export default BusinessServiceCard;
