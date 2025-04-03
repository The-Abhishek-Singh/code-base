'use client'
import React, { useState } from 'react';

// Custom SVG Icons to replace Lucide icons
const ChevronRightIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className={className}
  >
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className={className}
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const ChevronUpIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className={className}
  >
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);

const FAQItem = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b pb-4 last:border-b-0">
      <div 
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-blue-600 font-bold">Q</span>
        </div> */}
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-lg text-gray-800">
              {question}
            </h4>
            {isExpanded ? (
              <ChevronUpIcon className="text-gray-500 transition-transform duration-300" />
            ) : (
              <ChevronDownIcon className="text-gray-500 transition-transform duration-300" />
            )}
          </div>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              {/* <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mb-2 flex-shrink-0">
                <span className="text-blue-700 font-bold">A</span>
              </div> */}
              <p className="text-gray-600">
                Detailed answer for the question: {question}. This is a placeholder 
                answer that provides more context and information about the specific 
                topic the user is inquiring about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [activeSection, setActiveSection] = useState('Program');

  const faqData = {
    Program: [
      'Who can benefit from this DevOps and Cloud Computing course?',
      'Are there any prerequisites for enrolling in the course?'
    ],
    Eligibility: [
      'What are the minimum qualifications?',
      'Are there any technical background requirements?'
    ],
    'DevOps And Cloud Computing': [
      'Why should I learn DevOps and Cloud Computing from Scalar?',
      'What is the total duration of the DevOps and Cloud Computing Course?'
    ],
    'Job And Career': [
      'What career opportunities does this course offer?'
    ],
    Certification: [
      'What certification will I receive?'
    ],
    Lectures: [
      'When are the live DevOps and Cloud Computing classes held?',
      'Can I attend this DevOps and Cloud Computing course part-time?'
    ],
    Community: [
      'What kind of community support is provided?'
    ]
  };

  const sections = Object.keys(faqData);

  return (
    <div className="flex flex-col">
      <h2 className="text-6xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
      <div className='flex'>
      <div className="w-1/4 bg-gray-50 border-r">
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              className={`w-full text-left p-3 rounded flex items-center justify-between transition-colors duration-300 ${
                activeSection === section 
                  ? 'bg-blue-100 text-blue-700 font-semibold' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveSection(section)}
            >
              <span>{section}</span>
              <ChevronRightIcon 
                className={`h-5 w-5 transition-colors duration-300 ${
                  activeSection === section ? 'text-blue-700' : 'text-gray-400'
                }`} 
              />
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4 p-8">
        <h3 className="text-3xl font-semibold mb-6 text-black">{activeSection}</h3>
        <div className="space-y-4">
          {faqData[activeSection].map((question, index) => (
            <FAQItem key={index} question={question} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQSection;