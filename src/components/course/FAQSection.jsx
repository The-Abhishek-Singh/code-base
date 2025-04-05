'use client'
import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
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
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-base sm:text-lg text-gray-800 pr-2">
              {question}
            </h4>
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gray-500 transition-transform duration-300" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-gray-500 transition-transform duration-300" />
            )}
          </div>
         
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <p className="text-sm sm:text-base text-gray-600">
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
  const [activeSection, setActiveSection] = useState('General');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample FAQ data
  const sections = ['General', 'Pricing', 'Features', 'Support', 'Security'];
  const faqData = {
    General: ['What is your product?', 'How do I get started?', 'Is there a free trial?'],
    Pricing: ['How much does it cost?', 'Do you offer discounts?', 'What payment methods do you accept?'],
    Features: ['What are the key features?', 'How does feature X work?', 'Can I integrate with other tools?'],
    Support: ['How can I contact support?', 'What are your support hours?', 'Do you have documentation?'],
    Security: ['Is my data secure?', 'Do you support 2FA?', 'What encryption do you use?']
  };

  // Close mobile menu when clicking outside
  const handleOutsideClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-6 py-8 sm:py-12 lg:py-16">
      <ScrollReveal
        animation='slideLeft'
        duration={800}
        delay={0}
        easing='smooth'
        className="mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black text-center md:text-left">
        Frequently Asked Questions
      </h2>
        </ScrollReveal>
      
      {/* Mobile Section Selector */}
      <div className="md:hidden mb-6 relative">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'
          className="mb-4">
        <button 
          className="w-full flex items-center justify-between bg-gray-100 text-black p-3 sm:p-4 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
          <span className="font-medium">{activeSection}</span>
          {mobileMenuOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
        </button>
        </ScrollReveal>
        
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-10 bg-transparent" 
              onClick={handleOutsideClick}
            />
            <div className="mt-2 bg-white border rounded-lg shadow-lg absolute z-20 w-full">
              {sections.map((section) => (
                <button
                  key={section}
                  className={`w-full text-left p-3 text-black ${
                    activeSection === section ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setActiveSection(section);
                    setMobileMenuOpen(false);
                  }}
                >
                  {section}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-50 rounded-lg self-start">
          <div className="sticky top-4 p-2 space-y-1">
            {sections.map((section) => (
              <ScrollReveal
                animation='slideLeft'
                duration={800}
                delay={0}
                easing='smooth'
                key={section}>
              <button
                key={section}
                className={`w-full text-left p-2 lg:p-3 rounded flex items-center justify-between transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === section
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveSection(section)}
                >
                <span>{section}</span>
                <ChevronRightIcon
                  className={`h-4 w-4 lg:h-5 lg:w-5 transition-colors duration-300 ${
                    activeSection === section ? 'text-blue-700' : 'text-gray-400'
                  }`}
                  />
              </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* Main content */}
        <div className="w-full md:w-3/4 lg:w-4/5">
        <ScrollReveal
          animation='slideLeft'
          duration={800}
          delay={0}
          easing='smooth'>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-black">
            {activeSection}
          </h3>
          <div className="space-y-4">
            {faqData[activeSection].map((question, index) => (
              <FAQItem key={index} question={question} />
            ))}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;