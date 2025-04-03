import { Sarpanch } from 'next/font/google';
import React from 'react';

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
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '5rem 10rem',
      position: 'relative'
    }}>
            <div className='absolute h-[250px] w-[250px] top-0 right-1/2 rounded-full bg-[#1DD9FF] blur-[130px]'/>
            <div className='absolute h-[270px] w-[270px] top-[520px] -left-16 rounded-full bg-[#1DD9FF] blur-[150px]'/>
            <div className='absolute h-[230px] w-[230px] top-48 right-0 rounded-full bg-[#1DD9FF] blur-[130px]'/>
      <h1 style={{ 
        fontSize: '4.5rem', 
        marginBottom: '3rem',
        lineHeight: '1.3',
        position: 'relative'
      }}>
        <span style={{ color: "red", fontSize: '1.875rem' }}>THE ONLY DEVOPS AND CLOUD COMPUTING COURSE THAT</span>
        <br />
        <span style={{ color: '#fff' }}>Makes You Industry-Ready & Future-Proof</span>
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '4.5rem',
        maxWidth: '100%',
        position: 'relative',
        justifyContent: 'space-between'
      }}>
        {/* Card 1: Diverse Career Opportunities */}
        <div style={cardStyle}>
          <div style={numberStyle}>1</div>
          <div style={titleStyle}>Diverse Career Opportunities</div>
          <p style={{ color: '#d1d5db', marginBottom: '15px', fontWeight: '600', fontSize: '1.25rem' }}>
            Be job-ready for roles like SRE, Platform Engineer, and Infrastructure Engineer with this DevOps certification course.
          </p>
          {/* <div>
            {renderCheckItem('Site Reliability Engineering')}
            {renderCheckItem('Platform Engineering')}
            {renderCheckItem('Infrastructure Engineering')}
          </div> */}
        </div>

        {/* Card 2: Architect-Level Certification */}
        <div style={cardStyle}>
          <div style={numberStyle}>2</div>
          <div style={titleStyle}>Architect-Level Certification</div>
          <p style={{ color: '#d1d5db', marginBottom: '15px', fontWeight: '600', fontSize: '1.25rem' }}>
            Boost your resume by preparing up to Architect-level certifications and increase your chances of getting shortlisted.
          </p>
          {/* <div>
            {renderCheckItem('Resume Enhancement')}
            {renderCheckItem('Professional Credentials')}
            {renderCheckItem('Career Advancement')}
          </div> */}
        </div>

        {/* Card 3: Real-World DevOps and Cloud Computing Mastery */}
        <div style={cardStyle}>
          <div style={numberStyle}>3</div>
          <div style={titleStyle}>Real-World DevOps and Cloud Computing Mastery</div>
          <p style={{ color: '#d1d5db', marginBottom: '15px', fontWeight: '600', fontSize: '1.25rem' }}>
          Dive into our exclusive sandbox environment assignments featuring 50+ real-life case studies. Strengthen your DevOps and Cloud Computing skills through hands-on debugging and practical experience. 
          </p>
          {/* <div>
            {renderCheckItem('Hands-on Debugging')}
            {renderCheckItem('Practical Experience')}
            {renderCheckItem('Cloud Computing Skills')}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DevOpsCourseSection;