'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const CourseCard = ({ title, duration, description, topics }) => {
  const [expandedTopic, setExpandedTopic] = useState(0);

  const handleTopicHover = (index) => {
    setExpandedTopic(index);
  };

  return (
    <div className="bg-zinc-950 text-white rounded-lg overflow-hidden shadow-lg w-full">
      <div className="px-6 py-4 flex justify-between items-center bg-gradient-to-r from-[#960000] via-[#AF0000] to-[#960000] rounded p-10 mb-2">
        <div className='h-full flex flex-col items-start gap-5'>
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="bg-white bg-opacity-20 px-2 py-1 rounded">
            {duration}
          </div>
        </div>
        <Image src='/hexImg.png' alt='...' height={100} width={100}/>
      </div>
      <div className="px-6 pb-4">
        <div> 
          <h3 className="font-semibold mb-2">Why learn this</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="mt-4 space-y-2">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              onMouseEnter={() => handleTopicHover(index)}
              className={`
                relative transition-all duration-300 ease-in-out
                ${expandedTopic === index 
                  ? 'bg-zinc-950 border-2 py-4 px-4 rounded text-sm' 
                  : 'bg-zinc-950 border-2 py-2 px-3 rounded text-sm'}
              `}
            >
              <div className={`
                transition-all duration-300 ease-in-out
                ${expandedTopic === index 
                  ? 'opacity-100 max-h-screen' 
                  : 'opacity-0 max-h-0 overflow-hidden'}
              `}>
                <p className="text-xs mb-2">Detailed overview of {topic}</p>
                <div className="flex justify-between text-xs">
                  <span>Recommended Duration: 1-2 weeks</span>
                  <span>Difficulty: Beginner</span>
                </div>
              </div>
              <div className={`
                transition-all duration-300 ease-in-out
                ${expandedTopic === index 
                  ? 'font-bold' : ''}
              `}>
                {topic}
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
    <div className="flex flex-col justify-center items-center h-auto border-dashed border-r-2 border-l-2 rounded-lg mb-10">
      <div className="flex space-x-4">
        {props.courses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            duration={course.duration}
            description={course.description}
            topics={course.topics}
          />
        ))}
      </div>
      <div className={`bg-[#A87600] w-full flex justify-between px-3 py-2 rounded-lg ${props.show ? '' : 'hidden'} mt-16`}>
        <Image src='/infImg.png' alt='...' height={150} width={180} />
        <div className='w-full text-center flex flex-col justify-center gap-4'>
          <h1 className='text-4xl font-bold'>{ props.texts?.heading || "Default Heading" }</h1>
          <h1 className='text-lg font-semibold'>{ props.texts?.subHeading || "Default Sub-Heading" }</h1>
        </div>
        <Image src='/infImg.png' alt='...' height={150} width={180} />
      </div>
    </div>
  );
};

export default CoursesRoadmap;