import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const FeeStructure = (props) => {
  return (
    <div className="h-auto bg-zinc-950 p-4 sm:p-6 md:p-8 text-white">
    <div>
      <ScrollReveal
        animation='slideLeft'
        duration={800}
        delay={0}
        easing='smooth'>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
        Meet Mentors & Instructors
      </h2>
      <h3 className="text-lg sm:text-xl mb-6 sm:mb-8 capitalize">
        Tap into the wisdom of {props.courseName} Experts
      </h3>
      </ScrollReveal>
  
      {/* Cards container - responsive flex column on mobile, row on larger screens */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
        
        {/* Left Card - Program */}
        <div className="grid grid-cols-[2fr_1fr] grid-rows-[auto_1fr_auto] gap-4 bg-gradient-to-b from-black via-red-800 to-red-900 text-white rounded-lg shadow-xl w-full md:w-1/2 p-4 sm:p-6 border-2 sm:border-4 border-red-900">
  {/* Title - spans full width */}
  <h2 className="text-xl sm:text-2xl font-bold mb-2 col-span-2 capitalize">{props.courseName} Program</h2>
  
  {/* Features list - left column */}
  <div className="flex flex-col">
    <ul className="space-y-2 sm:space-y-3 mb-auto">
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className="flex items-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Skills</span>
        </ScrollReveal>
      </li>
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className="flex items-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Certification</span>
        </ScrollReveal>
      </li>
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className="flex items-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Placement Support</span>
        </ScrollReveal>
      </li>
    </ul>
  </div>
  
  {/* Certificate Image Preview - right column, spans 2 rows */}
  <div className="overflow-auto flex items-center justify-center invisible sm:visible">
    {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 group cursor-pointer">
      <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300">
        Preview Certificate
      </span>
    </div> */}
    <Image 
      src="/coursePage/Certificate(DataScience).jpg" 
      alt="DevOps Certification" 
      className="h-auto w-2/3 object-contain" 
      height={100}
      width={150}
    />
  </div>
  
  {/* Button - spans full width */}
  <ScrollReveal
    animation='slideLeft'
    duration={800}
    delay={0}
    easing='smooth'
    className="col-span-2">
  <button className="col-span-2 w-full bg-white text-red-800 font-bold py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition duration-300">
    Talk To Career Counsellor
  </button>
  </ScrollReveal>
</div>
        {/* Right Card - Program + Degree */}
        <div className="grid grid-cols-[2fr_1fr] grid-rows-[auto_1fr_auto] gap-4 bg-gradient-to-b from-black via-red-800 to-red-900 text-white rounded-lg shadow-xl w-full md:w-1/2 p-4 sm:p-6 border-2 sm:border-4 border-red-900">
  {/* Title - spans full width */}
  <h2 className="text-xl sm:text-2xl font-bold mb-2 col-span-2 capitalize">{props.courseName} Program + Degree</h2>
  
  {/* Features list - left column */}
  <div className="flex flex-col">
    <ul className="space-y-2 sm:space-y-3 mb-auto">
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className='flex items-center'>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Skills</span>
        </ScrollReveal>
      </li>
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className='flex items-center'>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Certification</span>
        </ScrollReveal>
      </li>
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className='flex items-center'>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Placement Support</span>
        </ScrollReveal>
      </li>
      <li className="flex items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className='flex items-center'>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Master Degree</span>
        </ScrollReveal>
      </li>
      <li className="flex items-start sm:items-center">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className='flex items-center'>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 sm:mt-0 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base">Another Modules Of Software Development</span>
        </ScrollReveal>
      </li>
    </ul>
  </div>
  
  {/* Certificate Image Preview - right column, spans 2 rows */}
  <div className="overflow-hidden flex items-center justify-center invisible sm:visible">
    {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 group cursor-pointer">
      <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300">
        Preview Certificate
      </span>
    </div> */}
    <Image 
      src="/coursePage/Certificate(FullStack).jpg" 
      alt="DevOps Degree Certification" 
      className="h-auto w-2/3 object-contain flex-shrink-0"
      height={90}
      width={70}
      />
  </div>
  
  {/* Button - spans full width */}
  <ScrollReveal
    animation='slideLeft'
    duration={800}
    delay={0}
    easing='smooth'
    className="col-span-2">
  <button className="col-span-2 w-full bg-white text-red-800 font-bold py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition duration-300">
    Talk To Career Counsellor
  </button>
  </ScrollReveal>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FeeStructure;