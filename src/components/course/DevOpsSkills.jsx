'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const DevOpsSkills = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const jobRoles = [
    { 
      logo: '/coursePage/fuji.png', 
      logoAlt: 'Fuji Electric', 
      title: 'Fuji Electric',
      company: 'Innovation Energy Technology',
    },
    { 
      logo: '/coursePage/adani-power.png', 
      logoAlt: 'Adani Power', 
      title: 'Adani Power',
      company: 'Limited'
    },
    { 
      logo: '/coursePage/Tata-Projects.png', 
      logoAlt: 'Tata Logo', 
      title: '  TATA PROJECTS',
      company: 'Simplify.Create'
    },
    { 
      logo: '/coursePage/mitsubishi.png', 
      logoAlt: 'Mitsubishi Logo', 
      title: 'Mitsubishi Electric',
      company: 'Automation'
    },
    { 
      logo: '/coursePage/siemens.png', 
      logoAlt: 'simenns Logo', 
      title: 'Siemens Multinational',
      company: 'Technology'
    },
    { 
      logo: '/coursePage/SSM.png', 
      logoAlt: 'ssm Logo', 
      title: 'E-info',
      company: 'Suruhanjaya Syarikat Malaysia'
    },
    { 
      logo: '/coursePage/Rockwell.png', 
      logoAlt: 'Rockbell Logo', 
      title: 'Rockbell International',
      company: 'Software'
    },
    { 
      logo: '/coursePage/msp.png', 
      logoAlt: 'msp Logo', 
      title: 'Managed Service Provider',
      company: 'MSP'
    },
    { 
      logo: '/coursePage/ABB.png', 
      logoAlt: 'Abb Logo', 
      title: 'ABB Group',
      company: 'Automation'
    },
    { 
      logo: '/coursePage/Schneider.png',
      logoAlt: 'Scheider Logo',  
      title: 'Schneider Electric',
      company: 'Electric'
    },
    { 
      logo: '/coursePage/philips.jpeg', 
      logoAlt: 'Philips Logo', 
      title: 'Philips Engineering',
      company: 'Solutions'
    },
    { 
      logo: '/coursePage/Honeywell.png',
      logoAlt: 'Honeywell Logo',    
      title: 'American multinational conglomerate ',
      company: 'Corporation'
    }
  ];

  const skills = [
    'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 
    'Ansible', 'Github', 'Chef', 'Puppet', 'GitOps', 
    'Prometheus', 'Grafana', 'ArgoCD', 'Lambda', 'Fargate', 
    'SubNets', 'CloudFront', 'CI/CD', 'Redshift', 'Linux', 
    'SQL', 'Azure', 'GCP', 'Splunk', 'DataDog', 
    'ELK Stack', 'Nagios', 'Selenium', 'Kafka', 'Redis'
  ];

  // Filter job roles based on search
  const filteredRoles = props.jobRoles.filter(role => 
    role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter skills based on search
  const filteredSkills = props.skills.filter(skill => 
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle skill selection
  const handleSkillClick = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  // Clear all selected skills
  const clearSelectedSkills = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="bg-white border rounded-lg p-3 sm:p-4 md:p-6 w-full mx-auto text-black">
  <div className="mb-4">
    {/* Search Bar - Simplified for mobile */}
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-full bg-gray-100 rounded-md p-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-1 sm:mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search Job Roles or Companies" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent w-full text-sm sm:text-base focus:outline-none"
        />
      </div>
    </div>
    
    {/* Job Roles Grid - Responsive columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
      {filteredRoles.map((role, index) => (
        <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-md hover:bg-gray-300 transition-colors">
          <Image
            src={role.logo} 
            alt={role.logoAlt}
            height={50}
            width={50}
            className="w-28 h-28 sm:w-16 sm:h-10 object-contain flex-shrink-0"
          />
          <div className="min-w-0"> {/* Prevents text overflow */}
            <span className="text-sm sm:text-base font-medium block truncate">{role.title}</span>
            <p className="text-xs sm:text-sm text-gray-500 truncate">{role.company}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Required Skills Section */}
  <div className="mt-4">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-base sm:text-lg font-semibold">Required Skills</h3>
      {selectedSkills.length > 0 && (
        <button 
          onClick={clearSelectedSkills}
          className="text-xs sm:text-sm text-red-500 hover:text-red-700"
        >
          Clear Selection
        </button>
      )}
    </div>
    
    {/* Skills Grid - More responsive column structure */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
      {filteredSkills.map((skill, index) => (
        <div 
          key={index} 
          onClick={() => handleSkillClick(skill)}
          className={`
            bg-gray-200 rounded-md p-2 text-center flex flex-col items-center justify-center cursor-pointer h-full
            ${selectedSkills.includes(skill) ? 'border-2 border-blue-500' : ''}
            hover:bg-gray-200 transition-all duration-200
          `}
        >
          <div className="mb-1 flex items-center justify-center">
            <span className="text-xs sm:text-sm">{skill}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Selected Skills Section */}
  {selectedSkills.length > 0 && (
    <div className="mt-4">
      <h4 className="text-sm sm:text-base font-semibold mb-2">Selected Skills:</h4>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {selectedSkills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full flex items-center"
          >
            {skill}
            <button 
              onClick={() => handleSkillClick(skill)}
              className="ml-1 sm:ml-2 text-blue-500 hover:text-blue-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  )}
</div>
  );
};

export default DevOpsSkills;