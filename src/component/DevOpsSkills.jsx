'use client'
import React, { useState } from 'react';

const DevOpsSkills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const jobRoles = [
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Meta Logo', 
      title: 'DevOps Engineer',
      company: 'Meta'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Amazon Logo', 
      title: 'Site Reliability Engineer (SRE)',
      company: 'Amazon'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Netflix Logo', 
      title: 'DevOps Architect',
      company: 'Netflix'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Google Logo', 
      title: 'Cloud Engineer',
      company: 'Google'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Microsoft Logo', 
      title: 'Platform Engineer',
      company: 'Microsoft'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Spotify Logo', 
      title: 'Infrastructure Specialist',
      company: 'Spotify'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Uber Logo', 
      title: 'Cloud Infrastructure Engineer',
      company: 'Uber'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Airbnb Logo', 
      title: 'Continuous Delivery Engineer',
      company: 'Airbnb'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Stripe Logo', 
      title: 'DevOps Automation Engineer',
      company: 'Stripe'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'LinkedIn Logo', 
      title: 'Cloud Operations Specialist',
      company: 'LinkedIn'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Twitter Logo', 
      title: 'Kubernetes Architect',
      company: 'Twitter'
    },
    { 
      logo: '/api/placeholder/50/50', 
      logoAlt: 'Salesforce Logo', 
      title: 'Cloud Security Engineer',
      company: 'Salesforce'
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
  const filteredRoles = jobRoles.filter(role => 
    role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter skills based on search
  const filteredSkills = skills.filter(skill => 
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
    <div className="bg-white border rounded-lg p-4 sm:p-6 w-full mx-auto text-black">
      <div className="mb-4">
        <div className="flex items-center space-x-2 sm:space-x-4 mb-4">
          <div className="w-full bg-gray-100 rounded-md p-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search Job Roles or Companies" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent w-full text-lg sm:text-base focus:outline-none"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredRoles.map((role, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img 
                src={role.logo} 
                alt={role.logoAlt}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="text-lg sm:text-base font-medium">{role.title}</span>
                <p className="text-lg text-gray-500">{role.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg sm:text-base font-semibold">Required Skills</h3>
          {selectedSkills.length > 0 && (
            <button 
              onClick={clearSelectedSkills}
              className="text-lg text-red-500 hover:text-red-700"
            >
              Clear Selection
            </button>
          )}
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              onClick={() => handleSkillClick(skill)}
              className={`
                bg-gray-100 rounded-md py-2 px-3 text-center flex flex-col items-center justify-center cursor-pointer
                ${selectedSkills.includes(skill) ? 'border-2 border-blue-500' : ''}
                hover:bg-gray-200 transition-all duration-200
              `}
            >
              <div className="rounded-md mb-1 flex items-center justify-center text-lg">
                {skill}
              </div>
              <span className="text-base text-gray-600">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedSkills.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg sm:text-base font-semibold mb-2">Selected Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-lg px-3 py-1 rounded-full flex items-center"
              >
                {skill}
                <button 
                  onClick={() => handleSkillClick(skill)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
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