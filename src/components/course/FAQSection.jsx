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

const FAQItem = ({ question, answer }) => {
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
                {answer? answer: `Detailed Answer For ${question}`}
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
    General: [
      {id: 1, question: ' Who can take up this course?', answer: 'The course is specifically designed for Engineering students doing bachelor and master degree who wish to expand their knowledge in Automation Industrial persons and faculty members who would like to develop capabilities in Automation Individuals seeking career in domains in Industrial automation applications Graduates who seek job in electrical, instrumentation, automation domain.'},
      {id: 2, question: 'What is included in your course?', answer: 'This course is designed to include all requirements for a power electronic / Automation engineer or those required for research level jobs.'},
      {id: 3, question: 'What will the student gain from your course?', answer: 'With the evolution of automation technologies, the importance of Instrumentation, Control and Automation usage is increased significantly. Therefore, it is essential for an electrical / instrumentation engineer to understand this field thoroughly. In this course, students will get detailed theoretical knowledge and design insights with their control schemes. With this knowledge, students will be able to design, simulate and analyze the machine or process better.'},
      {id: 4, question: 'How is this course going to help a student get a job?', answer: 'As mentioned earlier as well, this course is designed to not only cover the basic concepts but also applications in the industrial systems. Further, from basic switching mode converter to details on the modulation scheme principle, all basics are covered in detail. Additionally, the techniques to control the industry scale products are also discussed. The challenges and projects given in this course, which students will be solving are indegineously designed to train them in handling any industrial problem. Therefore, the skill sets obtained by the student as a part of this course will help him to not only crack the entrance or technical interview for such jobs but also to lead any industrial challenge as a part of his job profile related to this field.'},
      {id: 5, question: 'What are the job opportunities in this field?', answer: ' Today, Automation components are prominently used in majorly all industrial system since the industrial revolution in Industry 4.0 has taken by storm. The major players in this area are ABB, Siemens, Fuji, Rockwell, Emerson, Mitsubishi, Alstom, Hitachi etc. These companies supply and use various products like PLC, HMI, DCS, SCADA, HMI, IIoT, Field Instrumentation, Analyzers etc. The techniques taught in this course will be directly applied to design and analyse these systems and thus in above mentioned industries.'}
    ],
    Pricing: [
      {id: 4, question: 'How much does it cost?'},
      {id: 5, question: 'Do you offer discounts?'},
      {id: 6, question: 'What payment methods do you accept?'}
    ],
    Features: [
      {id: 7, question: 'What software skills are you teaching and how well are these tools used in the industry?', answer: 'This course cover relevant software tools viz MATLAB / Ltspice, relevant programming software of PLC/HMI & SCADA. MATLAB is predominantly used in the industry for analysis of power electronic circuits. While, Ltspice is an open source software tool, which is exactly similar to Pspice/Simetrix used in most of the industries. '},
      {id: 8, question: ' How will I access the softwares required for programming?', answer: ' We provide free use version softwares for practice to the students, which they can download in their laptops & practice at their own convenience.'}, 
      {id: 9, question: 'What is the real world application for the tools and techniques will you teach in this course?', answer: 'The course content is designed to cover real world applications of PLCs in simple  machine application to complex process automation. In this course, students will be learning various applications used every day in real life. The analytical methods and software tools taught in this course can be directly applied to the architecture in these applications.'},
      {id: 10, question: "How is your course going to help a student's path to MS or PhD?", answer: 'This course is designed to not only cover the applications of the PLC, SCADA and DCS System but it also emphasize on the basic concepts in the field of instrumentation and inverter systems. Further, the techniques to explore new configurations are also discussed, which will directly help for reseach field. Typically for MS and PhD these skill sets are required and thus, this course will definately help student to gain tremendous focus on the reseach path. As well as it will help to crack any entrance exam questions related to these field.'}
    ],
    Support: [
      {id: 11, question: 'How can I contact support?'},
      {id: 12, question: 'What are your support hours?'},
      {id: 13, question: 'Do you have documentation?'}
    ],
    Security: [
      {id: 14, question: 'Is my data secure?'},
      {id: 15, question: 'Do you support 2FA?'},
      {id: 16, question: 'What encryption do you use?'}
    ]
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
            {faqData[activeSection].map((item) => (
              <FAQItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;