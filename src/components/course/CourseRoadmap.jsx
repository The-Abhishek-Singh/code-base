'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const CourseCard = ({ title, duration, description, topics }) => {
  const [expandedTopic, setExpandedTopic] = useState(0);

  const handleTopicHover = (index) => {
    setExpandedTopic(index);
  };

  return (
  <div className="bg-zinc-950 text-white rounded-lg overflow-hidden shadow-lg w-full grid grid-rows-auto">
  <div className="px-6 py-4 flex justify-between items-center bg-gradient-to-r from-[#960000] via-[#AF0000] to-[#960000] rounded p-10 mb-2 min-h-[5%]">
    <div className="h-full flex flex-col items-start gap-5">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="bg-white bg-opacity-20 px-2 py-1 rounded">
        {duration}
      </div>
    </div>
    <Image className='flex-shrink-0 hidden sm:block' src="/coursePage/hexImg.png" alt="..." height={100} width={100} />
  </div>
  <div className='p-4 flex flex-col justify-center'>
    <h3 className="font-semibold mb-2">Why learn this</h3>
    <p className="text-sm">{description}</p>
  </div>
  <div className="px-6 pb-4">
    
    {/* Scrollable Section */}
    <div className={`mt-4 space-y-2 ${Object.keys(topics).length > 4 ? "max-h-72 overflow-y-auto" : ""}`}
      style={{ scrollbarWidth: "thin", scrollbarColor: "#4B5563 #1F2937" }}>
      {Object.entries(topics).map(([key, value], index) => (
        <div
          key={index}
          onMouseEnter={() => handleTopicHover(index)}
          className={`
            relative transition-all duration-300 ease-in-out
            ${expandedTopic === index
              ? "bg-zinc-900 border-2 py-4 px-4 rounded text-sm"
              : "bg-zinc-950 border-2 py-2 px-3 rounded text-sm"}
          `}
        >
          <div
            className={`
              transition-all duration-300 ease-in-out
              ${expandedTopic === index
                ? "opacity-100 max-h-screen"
                : "opacity-0 max-h-0 overflow-hidden"}
            `}
          >
            <p className="text-xs mb-2">
              <strong>{index + 1}.{value}</strong> <br />
            </p>
            <div className="flex justify-between text-xs">
              <span>Recommended Duration: 1-2 weeks</span>
              <span>Difficulty: Beginner</span>
            </div>
          </div>
          <div
            className={`
              transition-all duration-300 ease-in-out
              ${expandedTopic === index ? "font-bold" : ""}
            `}
          >
            {key}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

const CoursesRoadmap = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-auto border-dashed border-r-2 border-l-2 rounded-lg mb-6 sm:mb-8 md:mb-10 px-2 py-4 sm:px-4 md:px-6">
    {/* Course Cards - Horizontal on large screens, vertical on small screens */}
    <div className="flex flex-col lg:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
        {props.courses.map((course, index) => (
            <ScrollReveal
            key={index}
            animation={index % 2 === 0 ? "slightLeft" : "slightRight"}
            duration={1500}
            delay={300}
            easing="spring"
            index={index}
            stagger={150}
            className='flex flex-col lg:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full'
          >
            <CourseCard
              title={course.title}
              duration={course.duration}
              description={course.description}
              topics={course.topics}
              tdescription={course.tdescription}
              className="w-full md:w-1/3"
            />
          </ScrollReveal>
        ))}
    </div>
    
    {/* Bottom Banner */}
    {props.show && (
        <ScrollReveal
          animation="slideUp"
          duration={1300}
          delay={600}
          easing="bouncy"
          className="w-full mt-8 md:mt-16"
        >
          <div className="bg-[#A87600] w-full flex flex-col md:flex-row justify-between px-3 py-4 rounded-lg">
            {/* Left Image - Hidden on small screens */}
            <ScrollReveal
              animation="fadeSlideRight"
              duration={1200}
              delay={900}
              easing="spring"
              className="hidden md:block"
            >
              <Image src='/coursePage/infImg.png' alt='...' height={150} width={180} />
            </ScrollReveal>
            
            {/* Center Text */}
            <div className='w-full text-center flex flex-col justify-center gap-2 md:gap-4 px-2'>
              <ScrollReveal
                animation="fadeIn"
                duration={1200}
                delay={1100}
                easing="gentle"
              >
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  {props.texts?.heading || "Default Heading"}
                </h1>
              </ScrollReveal>
              
              <ScrollReveal
                animation="fadeIn"
                duration={1200}
                delay={1300}
                easing="gentle"
              >
                <h1 className='text-sm sm:text-base md:text-lg font-semibold'>
                  {props.texts?.subHeading || "Default Sub-Heading"}
                </h1>
              </ScrollReveal>
            </div>
            
            {/* Right Image - Hidden on small screens */}
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={1800}
              delay={900}
              easing="spring"
              className="hidden md:block"
            >
              <Image src='/coursePage/infImg.png' alt='...' height={150} width={180} />
            </ScrollReveal>
          </div>
        </ScrollReveal>
      )}
</div>
  );
};

export default CoursesRoadmap;