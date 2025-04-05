import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const DevOpsCourseSection = () => {
  const cardStyle = {
    // backgroundColor: '#1f293780',
    backgroundColor: '#1DD9FF20',
    borderRadius: '8px',
    border: '2px solid #1DD9FF',
    padding: '20px',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const numberStyle = {
    fontSize: '7rem',
    fontWeight: 'bold',
    color: 'transparent',
    background: 'linear-gradient(to bottom, white,whitesmoke,gray,transparent,transparent)',
    backgroundClip: 'text',
    marginBottom: '10px'
  };

  const titleStyle = {
    fontSize: '2.3rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

//   const checkmarkStyle = {
//     color: '#10b981',
//     marginRight: '10px',
//     display: 'inline-block'
//   };

//   const renderCheckItem = (text) => (
//     <div style={{ display: 'flex', marginBottom: '5px' }}>
//       <span style={checkmarkStyle}>✓</span>
//       <span>{text}</span>
//     </div>
//   );

  return (
    <div className="bg-black relative text-white px-4 py-12 md:px-12 md:py-20 lg:px-20 lg:py-40">
  {/* Background glows - responsive positioning */}
  <ScrollReveal animation="fadeIn" duration={2000} delay={200} easing="gentle">
        <div className="absolute h-36 w-36 md:h-64 md:w-64 top-0 right-1/3 md:right-1/2 rounded-full bg-[#1DD9FF] blur-xl md:blur-2xl opacity-50"/>
  </ScrollReveal>
  <ScrollReveal animation="fadeIn" duration={2000} delay={400} easing="gentle">
        <div className="absolute h-40 w-40 md:h-64 md:w-64 top-80 md:top-96 -left-8 md:-left-16 rounded-full bg-[#1DD9FF] blur-xl md:blur-2xl opacity-50"/>
  </ScrollReveal>
  <ScrollReveal animation="fadeIn" duration={2000} delay={600} easing="gentle">
        <div className="absolute h-32 w-32 md:h-60 md:w-60 top-24 md:top-48 right-0 rounded-full bg-[#1DD9FF] blur-xl md:blur-2xl opacity-50"/>
  </ScrollReveal>
  
  {/* Responsive heading */}
  <ScrollReveal animation="slightRight" duration={1200} delay={300} easing="spring" className=''>
        <h1 className="relative text-3xl md:text-5xl lg:text-7xl mb-6 md:mb-12 leading-tight">
          <span className="block text-red-500 text-lg md:text-2xl mb-2">THE ONLY DEVOPS AND CLOUD COMPUTING COURSE THAT</span>
          <span className="block text-white">Makes You Industry-Ready & Future-Proof</span>
        </h1>
  </ScrollReveal>
  
  {/* Responsive grid layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 relative max-w-full">
    {/* Card 1 */}
    <ScrollReveal animation="slideUp" duration={1200} delay={400} easing="spring" className='grid' >
          <div className="bg-black bg-opacity-50 border border-[#1DD9FF] p-6 md:p-8 rounded-lg relative">
            <div className="bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent font-bold text-4xl md:text-8xl h-10 w-10 md:h-20 md:w-20 flex items-center justify-center mb-4">1</div>
            <div className="text-xl md:text-2xl font-bold text-white mb-3">Diverse Career Opportunities</div>
            <p className="text-gray-300 mb-4 text-base md:text-lg font-semibold">
              Be job-ready for roles like SRE, Platform Engineer, and Infrastructure Engineer with this DevOps certification course.
            </p>
          </div>
    </ScrollReveal>

    {/* Card 2 */}
    <ScrollReveal animation="slideUp" duration={1200} delay={600} easing="spring" className='grid'>
          <div className="bg-black bg-opacity-50 border border-[#1DD9FF] p-6 md:p-8 rounded-lg relative">
            <div className="bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent font-bold text-4xl md:text-8xl h-10 w-10 md:h-20 md:w-20 flex items-center justify-center mb-4">2</div>
            <div className="text-xl md:text-2xl font-bold text-white mb-3">Architect-Level Certification</div>
            <p className="text-gray-300 mb-4 text-base md:text-lg font-semibold">
              Boost your resume by preparing up to Architect-level certifications and increase your chances of getting shortlisted.
            </p>
          </div>
    </ScrollReveal>

    {/* Card 3 */}
    <ScrollReveal animation="slideUp" duration={1200} delay={800} easing="spring" className='grid'>
          <div className="bg-black bg-opacity-50 border border-[#1DD9FF] p-6 md:p-8 rounded-lg relative md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent font-bold text-4xl md:text-8xl h-10 w-10 md:h-20 md:w-20 flex items-center justify-center mb-4">3</div>
            <div className="text-xl md:text-2xl font-bold text-white mb-3">Real-World DevOps and Cloud Computing Mastery</div>
            <p className="text-gray-300 mb-4 text-base md:text-lg font-semibold">
              Dive into our exclusive sandbox environment assignments featuring 50+ real-life case studies. Strengthen your DevOps and Cloud Computing skills through hands-on debugging and practical experience.
            </p>
          </div>
    </ScrollReveal>
  </div>
</div>
  );
};

export default DevOpsCourseSection;