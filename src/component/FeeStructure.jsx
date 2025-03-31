import React from 'react';

const FeeStructure = () => {
  return (
    <div className="h-auto bg-zinc-950 p-4">
        <div className=''>
            <h2 className="text-3xl font-bold mb-8 ">
                Meet Mentors & Instructors
            </h2>
            <h3 className="text-xl mb-8 ">
                Tap into the wisdom of DevOps & Cloud Computing Experts
            </h3>
      <div className="flex space-x-4 w-full">
        {/* Left Card - Program */}
        <div className="grid grid-rows-4 bg-gradient-to-b from-black via-red-800 to-red-900 text-white rounded-lg shadow-xl w-1/2 p-6 border-4 border-red-900">
          <h2 className="text-2xl font-bold row-span-1">DevOps & Cloud Computing Program</h2>
          <ul className="space-y-3 mb-6 row-span-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Skills
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Certification
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Placement Support
            </li>
          </ul>
          <button className="w-full bg-white text-red-800 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300 row-span-1">
            Talk To Career Counsellor
          </button>
        </div>

        {/* Right Card - Program + Degree */}
        <div className="grid grid-rows-4 bg-gradient-to-b from-black via-blue-800 to-blue-900 text-white rounded-lg shadow-xl w-1/2 p-6 border-4 border-blue-900">
          <h2 className="text-2xl font-bold mb-4 row-span-1">DevOps & Cloud Computing Program + Degree</h2>
          <ul className="space-y-3 mb-6 row-span-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Skills
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Certification
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Placement Support
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Master Degree
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Another Modules Of Software Development
            </li>
          </ul>
          <button className="row-span-1 w-full bg-white text-blue-800 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Talk To Career Counsellor
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeeStructure;