import React from 'react';
import ScrollCards from "@/component/UI/servicespage/StackwithFixedHeading"
const SoftwareServices = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Hero Section with Dark Background */}
      <div className="relative text-white py-16 min-h-[35rem] 2xl:min-h-[45rem] flex  justify-start bg-no-repeat bg-cover bg-center"
      
      style={{ backgroundImage: "url('/servicepages/bgggg.png')" }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden bg-black opacity-50">

        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto lg:mx-20 px-4  sm:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            SOFTWARE DEVELOPMENT & EXPORT SERVICES
          </h1>
          
          <p className="text-lg max-w-4xl leading-relaxed">
            At Careertronic Global Services, we offer a comprehensive suite of services that
            cater to the diverse needs of individuals, businesses, and institutions. Whether
            you're looking to advance your career, optimize your business processes, or
            implement cutting-edge software solutions, we have the expertise and tools to
            help you succeed in today's fast-paced digital landscape. Explore our range of
            services below and discover how Careertronic can drive growth, efficiency, and
            innovation for your business or career.
          </p>
        </div>
      </div>

      {/* Curved Red Section Title */}
      <div className="relative h-24 my-6 mx-2 sm:m-6 md:mx-20 bg-red-600 rounded-bl-full rounded-tr-full flex items-center justify-center">
            {/* Curved Background */}
            
                <h2 className="text-white text-base sm:text-xl lg:text-2xl font-bold p-6">
                  SOFTWARE DEVELOPMENT & EXPORT SERVICES
                </h2>
              </div>



<ScrollCards/>

            </div>
    
  );
};

export default SoftwareServices;