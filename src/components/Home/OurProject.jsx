import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OurProject = () => {
  return (
    <>
    {/* Section #1 */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">OUR </span>
                <span className="text-gray-400">PROJECTS</span>
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-2">
                Explore the innovative solutions we’ve crafted — from career advancement platforms to smart digital services, our projects are built to empower users and businesses alike.
              </p>
            </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-1 gap-12">

            {/* Resume Builder */}
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/2 bg-[#111111] h-auto md:h-full p-3 md:p-8 rounded-br-lg rounded-bl-lg md:rounded-br-none md:rounded-tl-lg flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-5xl font-bold text-transparent mb-4 bg-gradient-to-b from-[#FFF] to-[#999] bg-clip-text">1</h3>
                  <h4 className="text-xl font-semibold uppercase mb-3">Resume Builder</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We developed a powerful and user-friendly Resume Builder platform designed to help job seekers create ATS-optimized resumes effortlessly. With professionally crafted templates, AI-powered content suggestions, and seamless PDF export features, users can showcase their skills and experience in the most impactful way possible. This tool helps candidates stand out and secure their dream job with ease.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Link href={'https://resume-builder-three-rho.vercel.app/Resumehero'} legacyBehavior>
                    <a target='_blank' rel="noopener noreferrer" className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center gap-1">
                      Try It Now
                      <span className="text-xl">↗</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-t-lg md:rounded-r-lg md:rounded-t-none overflow-hidden relative min-h-[200px] md:h-full">
                <Image 
                    src={'/mainHome/resumes.png'} 
                    height={600} 
                    width={600} 
                    alt="Resume Builder" 
                    className="w-full h-full object-fill" 
                />
                </div>
            </div>              
            {/* Job Portal */}
            <div className="flex flex-col-reverse md:flex-row-reverse">
              <div className="w-full md:w-1/2 bg-[#111111] h-auto md:h-full p-3 md:p-8 rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-5xl font-bold text-transparent mb-4 bg-gradient-to-b from-[#FFF] to-[#999] bg-clip-text">2</h3>
                  <h4 className="text-xl font-semibold uppercase mb-3">Job Portal</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our Job Portal connects talented professionals with top companies through an intelligent matching algorithm and clean user interface. The platform allows users to search and apply for jobs, build resumes, and network with recruiters—all in one place. Employers benefit from AI-driven candidate filtering, making the hiring process faster and more efficient.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Link href={'https://resume-builder-three-rho.vercel.app/'} legacyBehavior>
                    <a target='_blank' rel="noopener noreferrer" className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center gap-1">
                      Try It Now
                      <span className="text-xl">↗</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden relative min-h-[200px] md:h-full">
                <Image 
                    src={'/mainHome/jobs.png'} 
                    height={600} 
                    width={600} 
                    alt="Job Portal" 
                    className="w-full h-full object-fill" 
                />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section #2 */}
      <section className="bg-black text-white py-16 px-4 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">OUR </span>
                <span className="text-gray-400">PROJECTS</span>
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-2">
                From AI-powered platforms to advanced ecommerce systems, we deliver modern solutions that push innovation and growth across industries.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-12">
              {/* Project 1 */}
              <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/2 bg-[#111111] h-auto md:h-full p-3 md:p-8 rounded-br-lg rounded-bl-lg md:rounded-br-none md:rounded-tl-lg flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-5xl font-bold text-transparent mb-4 bg-gradient-to-b from-[#FFF] to-[#999] bg-clip-text">1</h3>
                  <h4 className="text-xl font-semibold uppercase mb-3">IGPT</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    IGPT is a cutting-edge digital transformation platform where AI meets creativity. We crafted this solution to help businesses unlock scalable innovation through intelligent automation, enhanced user experiences, and data-driven strategies. With a strong focus on merging design with advanced technology, Innovetix empowers companies to stay ahead in today’s rapidly evolving digital world
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Link href={'https://innovetix.vercel.app/'} legacyBehavior>
                    <a target='_blank' rel="noopener noreferrer" className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center gap-1">
                      Try It Now
                      <span className="text-xl">↗</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-t-lg md:rounded-r-lg md:rounded-t-none overflow-hidden relative min-h-[200px] md:h-full">
                <Image 
                    src={'/mainHome/inno.png'} 
                    height={600} 
                    width={600} 
                    alt="Innovetix" 
                    className="w-full h-full object-fill" 
                />
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col-reverse md:flex-row-reverse">
              <div className="w-full md:w-1/2 bg-[#111111] h-auto md:h-full p-3 md:p-8  rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-5xl font-bold text-transparent mb-4 bg-gradient-to-b from-[#FFF] to-[#999] bg-clip-text">2</h3>
                  <h4 className="text-xl font-semibold uppercase mb-3">Ecommerce</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We specialize in software development and export services, delivering cutting-edge
                    technology solutions tailored to your business needs. Our expertise spans custom
                    software, web and mobile applications, AI-driven solutions, and cloud integrations,
                    ensuring seamless digital transformation.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Link href={'https://office-ecom.vercel.app/'} legacyBehavior>
                    <a target='_blank' rel="noopener noreferrer" className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center gap-1">
                      Try It Now
                      <span className="text-xl">↗</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden relative min-h-[200px] md:h-full">
                <Image 
                    src={'/mainHome/e-com.png'} 
                    height={600} 
                    width={600} 
                    alt="Ecommerce" 
                    className="w-full h-full object-fill" 
                />
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default OurProject
