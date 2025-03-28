import React from 'react';
// import Navbar from '@/component/Navbar';
import Image from 'next/image'
import Form from '@/component/course/Forms';
import Button from '@/component/course/Button';
import DevOpsSkills from '@/component/course/DevOpsSkills';
import DevOpsCourseSection from '@/component/course/DevOpsCourseSection';
import CourseRoadmap from '@/component/course/CourseRoadmap';
import FAQSection from '@/component/course/FAQSection';
import FeeStructure from '@/component/course/FeeStructure';
// import MentorsSection from '@/component/course/MentorsSection';
import { FaTools, FaServer, FaLayerGroup } from "react-icons/fa";

function page(){
  const projects = [
      {
        title: "Master Production Issue Handling",
        description:
          "Learn how to detect, classify, communicate, and resolve production issues, along with providing a workaround and RCA.",
        icon: <FaTools className="text-white text-3xl" />,
      },
      {
        title: "Effortless Infrastructure Setup",
        description:
          "Learn how to detect, classify, communicate, and resolve production issues, along with providing a workaround and RCA.",
        icon: <FaServer className="text-white text-3xl" />,
      },
      {
        title: "Streamline CI/CD Process",
        description:
          "Learn how to detect, classify, communicate, and resolve production issues, along with providing a workaround and RCA.",
        icon: <FaLayerGroup className="text-white text-3xl" />,
      },
      ];
    const courses1 = [
        {
          title: 'LANGUAGE',
          duration: '1 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        },
        {
          title: 'DSA',
          duration: '2 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        },
        {
          title: 'LINUX',
          duration: '2.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        }
      ];
    const courses2 = [
        {
          title: 'PROGRAM TOOLS',
          duration: '2.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        },
        {
          title: 'AWS',
          duration: '2.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        },
        {
          title: 'IAC',
          duration: '0.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        }
      ];
    const courses3 = [
        {
          title: 'SYSTEM DESIGN',
          duration: '2.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        },
        {
          title: 'ADVANCE DSA',
          duration: '2.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        },
        {
          title: 'PROGRAM TOOLS',
          duration: '2.5 Month',
          description: 'Python is non-negotiable skill for DevOps Engineer. It allows you to build your foundation essential for automating and streamlining DevOps processes.',
          topics: [
            'Introductions, Data Types and Operators',
            'Control Statement',
            'Loops (While or For)'
          ]
        }
      ];
  return (
    <div className='h-auto w-full'>


        {/* Hero Section */}
        <div className='min-h-[75vh] 2xl:min-h-[50vh] w-full bg-zinc-950 relative'>
            <div className='absolute h-[200px] w-[200px] top-32 left-48 rounded-full bg-[#1DD9FF] blur-[180px]'/>
            <Image src='/100.png' alt='#' width={100} height={100} className='absolute bottom-0 h-auto w-full'/>
            <div className='relative top-0 left-0 w-full h-full flex xl:flex-row flex-col'>
                <div className='left h-fit xl:w-1/2 w-full mt-20 xl:px-24 xl:py-20 p-4 flex flex-col gap-10 items-start'>
                    <div className='rounded-3xl border-2 sm:text-base text-xs border-white bg-black sm:w-max w-max sm:px-10 sm:py-2 p-2 font-bold'>ONLINE DEVOPS & CLOUD COMPUTING COURSE</div>
                    <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>Your Ultimate Handbook for Mastering <span className='text-red-600'>DevOps & Cloud Computing</span></h1>
                    <p className='lg:text-2xl sm:text-xl tracking-wide'>Learn essential tools and best practices to streamline workflows and automate processes. Build scalable cloud solutions and enhance your expertise in DevOps and Cloud Computing.</p>
                    <Button text='Explore Now' />
                </div>
                <div className='right h-fit xl:w-1/2 w-full xl:mt-20 xl:p-28 p-4'>
                    <Form text='Free Career Counselling is just a call away!'/>
                </div>
            </div>
            <div className='min-h-auto w-[85%] rounded-lg px-5 py-3 bg-[#fff] relative bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between z-10'>
                <div className='flex w-full text-black gap-5'>
                   <div className='h-full w-1/4 px-3 flex flex-col shrink-0 justify-around'>
                    <div className='h-auto'><p className='text-lg'>Propgram Duration</p></div>
                    <div className='border-r-4 flex items-center'><p className='font-bold text-2xl'><span className='text-3xl'>12</span> Months</p></div>
                   </div> 
                   <div className='h-full w-1/4 px-3 flex flex-col shrink-0 justify-around'>
                   <div className='h-auto'><p className='text-lg'>Time Commitment</p></div>
                   <div className='h-3/4 border-r-4 flex items-center'><p className='font-bold text-2xl'>12-15 Hrs/Week</p></div>
                   </div> 
                   <div className='h-full w-1/4 px-3 flex flex-col shrink-0 justify-around'>
                   <div className='h-auto'><p className='text-lg'>Placement Support</p></div>
                   <div className='h-3/4 border-r-4 flex items-center'><p className='font-bold text-2xl'>900+ Companies</p></div>
                   </div> 
                   <div className='h-full w-1/4 px-3 flex flex-col shrink-0 justify-around'>
                   <div className='h-auto'><p className='text-lg'>Enrollment</p></div>
                    <div className='h-3/4 flex items-center'><p className='font-bold text-2xl'>Highly Selective</p></div>
                   </div> 
                </div>
            </div>
        </div>

        {/* Steps Secction */}
        <div className='min-h-[90vh] w-full bg-[#212121] relative flex pt-28'>
            <div className='w-[45%] relative'>
                <Image src='/103.png' alt='.' width={450} height={450} className='absolute bottom-5 left-0'/>
                <Image src='/102.png' alt='..' width={400} height={400} className='absolute bottom-80 left-72'/>
                <Image src='/101.png' alt='...' width={1000} height={1000} className='absolute bottom-2 left-0 h-auto'/>
            </div>
            <div className='w-[55%] flex p-20 flex-col justify-around relative'>
                <h1 className='text-6xl font-bold'>How Can We Turn You Into an Expert in DevOps & Cloud Computing?</h1>
                <div className="flex w-full p-4 gap-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-600 w-24 h-24 rounded-lg flex items-center justify-center mb-2">
                            <span className="text-white text-5xl font-bold">1</span>
                        </div>
                        <div className="text-white text-center max-w-xs">
                            <p className="font-bold text-lg">In-depth</p>
                            <p className="font-bold text-lg">Knowledge</p>
                        </div>
                    </div>

                    {/* Arrow 1 - Centered */}
                    <div className="flex items-center justify-center mx-4 relative self-center">
                        <Image src='/Vector.png' alt="Arrow" width={60} height={60} className="relative bottom-7"/>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-600 w-24 h-24 rounded-lg flex items-center justify-center mb-2">
                            <span className="text-white text-5xl font-bold">2</span>
                        </div>
                        <div className="text-white text-center max-w-xs">
                            <p className="font-bold text-lg">Real World</p>
                            <p className="font-bold text-lg">Simulations</p>
                        </div>
                    </div>

                    {/* Arrow 2 - Centered */}
                    <div className="flex items-center justify-center mx-4 relative self-center">
                        <Image src='/Vector.png' alt="Arrow" width={60} height={60} className="relative bottom-7"/>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-600 w-24 h-24 rounded-lg flex items-center justify-center mb-2">
                            <span className="text-white text-5xl font-bold">3</span>
                        </div>
                        <div className="text-white text-center max-w-xs">
                            <p className="font-bold text-lg">Placement</p>
                            <p className="font-bold text-lg">Assistance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Industries Section */}
        <div className='h-auto w-full bg-white py-24 px-20'>
            <div>
                <h1 className='text-4xl font-bold text-red-600 mb-6 uppercase'>Industry Requirements</h1>
                <h1 className='text-6xl font-bold text-black mb-10'>What Tech Companies search for?</h1>
                <div className='w-full border-4 border-red-600 rounded-lg'>
                <DevOpsSkills />
                </div>
            </div>
        </div>

        {/* DevOps Section */}
        <div className='h-auto w-full'>
            <DevOpsCourseSection />
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-20 px-40'>
            <div>
                <h1 className='text-5xl font-bold text-red-600 mb-6'>Our Curriculum</h1>
                <h1 className='text-7xl font-bold text-white mb-10'>Expert-Design Course Structure</h1>
                    <CourseRoadmap courses={courses1} show={false}/>
                    <CourseRoadmap courses={courses2} show={true} texts={{ heading:'READY FOR DEVOPS & CLOUD COMPUTING ROLES', subHeading:'Covering all modules above makes you ready to apply for DevOps roles' }} />
                    <CourseRoadmap courses={courses3} show={true} texts={{ heading:'YOU’RE NOW READY FOR SRE ROLES', subHeading:'Covering all modules above makes you ready to apply for DevOps roles' }} />
                    <div className='w-full bg-white p-8 rounded-lg flex flex-col items-start gap-7'>
                        <h1 className='text-6xl text-black font-semibold'>Your Guide to Everything</h1>
                        <h1 className='text-2xl text-black'>Download Out Brochure for a Complete Overview!</h1>
                        <Button text='Download Brochure'/>
                    </div>
            </div>
        </div>

        {/* Mentors Section */}
        {/* <div className='w-full h-auto  py-20 px-40'>
            <MentorsSection />
        </div> */}

        <div>
      {/* Career-Boosting Projects Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-500 uppercase">
            Gain Real-World DevOps & Cloud Experience!
          </h3>
          <h2 className="text-4xl font-bold text-black mt-2">
            Career-Boosting Projects
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg text-white flex flex-col items-start"
              >
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DevOps & Cloud Computing Curriculum Section */}
      <div className="min-h-screen bg-black text-white p-6 md:p-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-lg font-semibold text-gray-400 uppercase p-6">
            DevOps & Cloud Computing Curriculum
          </h2>
          <h1 className="text-4xl font-bold mb-8">
            Your Journey With Careertronic
          </h1>

          {/* Onboarding Session */}
          <div className="bg-black text-white p-6 md:p-12">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">
                Onboarding Session
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Intro Session Card */}
              <div className="bg-gray-900 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold">Intro Session</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Start in a customized cohort and forge meaningful connections
                  who will be your allies on this journey.
                </p>
              </div>

              {/* Pick Your Mentor Card */}
              <div className="bg-red-600 p-6 rounded-xl text-white flex flex-col justify-center items-center">
                <button className="bg-white text-black px-4 py-2 rounded font-bold">
                  Pick Your Mentor
                </button>
                <p className="text-sm text-gray-200 mt-2 text-center">
                  Select the right mentor for guidance and gain invaluable
                  insights to boost your career.
                </p>
              </div>

              {/* Learning Coordinator Card */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/public/newco\co2.png')" }}
                ></div>
                <div className="relative p-6 flex flex-col justify-end h-full bg-black bg-opacity-50">
                  <h3 className="text-lg font-bold text-white">
                    Connect with a{" "}
                    <span className="text-blue-400">Learning Coordinator</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Live Learning Experience */}
          <div className="bg-black text-white p-6 md:p-12">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">
                Live Learning Experience
              </h2>
            </div>
            <div className="grid grid-cols-4 grid-rows-6 gap-2">
              <div className="row-span-2 bg-black text-white p-4 flex flex-col justify-between rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-20 bg-gray-800 mb-2 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h3 className="text-lg font-bold">Practice with</h3>
                <p className="text-sm">Assignments & Home Works</p>
              </div>

              <div className="row-span-2 col-start-1 row-start-3 bg-black text-white p-4 flex flex-col justify-between rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-20 bg-gray-800 mb-2 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h3 className="text-lg font-bold">1:1</h3>
                <p className="text-sm">Guidance from Pro Mentors</p>
              </div>

              <div className="row-span-2 col-start-1 row-start-5 bg-black text-white p-4 flex flex-col justify-between rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-20 bg-gray-800 mb-2 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h3 className="text-lg font-bold">Situational</h3>
                <p className="text-sm">Problem & Solution</p>
              </div>

              <div className="col-span-2 row-span-4 col-start-2 row-start-1 bg-black text-white p-4 flex flex-col justify-center items-center rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-64 w-full bg-gray-800 mb-4 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h2 className="text-2xl font-bold">Live Classroom</h2>
                <p className="text-center">
                  Engage with instructors and connect with your peers in
                  real-time
                </p>
              </div>

              <div className="col-span-2 row-span-2 col-start-2 row-start-5 bg-black text-white p-4 flex flex-col justify-between rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-20 bg-gray-800 mb-2 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h3 className="text-lg font-bold">Live Doubt Solving</h3>
                <p className="text-sm">
                  Interactive Q&A to tackle situational queries one-on-one
                </p>
              </div>

              <div className="row-span-3 col-start-4 row-start-1 bg-black text-white p-4 flex flex-col justify-center rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-40 bg-gray-800 mb-2 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h3 className="text-lg font-bold">AI-Assisted</h3>
                <p className="text-sm">Problem-solving support</p>
              </div>

              <div className="row-span-3 col-start-4 row-start-4 bg-black text-white p-4 flex flex-col justify-center rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="h-40 bg-gray-800 mb-2 flex items-center justify-center">
                  <span className="text-gray-500">Image Goes Here</span>
                </div>
                <h3 className="text-lg font-bold">Cloud Sandbox</h3>
                <p className="text-sm">
                  Hands-on practice in real-world cloud environment
                </p>
              </div>
            </div>
          </div>

          {/* Training & Placement Support */}
          <div className="bg-black text-white p-6 md:p-12">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-700 text-white px-3 py-1 rounded-lg font-bold">
                3
              </div>
              <h2 className="text-xl md:text-2xl font-bold">
                Training & Placement Support
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-6 md:col-span-2 rounded-lg">
                <h3 className="font-bold text-lg">Module-Based Mocks</h3>
                <p className="text-gray-400 text-sm">
                  Practically apply your skills through interview simulations
                  post-module.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg">Resume Building</h3>
                <p className="text-gray-400 text-sm">
                  Build an impactful, professional resume with expert
                  mentorship.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 text-center p-4 mt-6 rounded-lg font-semibold text-sm md:text-base">
              GET INDUSTRY READY Get access to exclusive job openings within our
              network.
            </div>
            <div className="bg-gray-900 p-6 mt-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-lg">Placement Training</h3>
                <p className="text-gray-400 text-sm">
                  Focused training to excel in tech recruitment processes.
                </p>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <h3 className="font-bold text-lg">Placement Support</h3>
                <p className="text-gray-400 text-sm">
                  End-to-end assistance to secure your dream job.
                </p>
              </div>
            </div>
</div>
            </div>
            {/**MENTORS AND TRAINERS WITH REVIEW */}
            <div className="bg-white text-black py-16 px-4 w-full min-h-screen">
              <div className="container mx-auto max-w-7xl">
                <h2 className="text-lg font-semibold text-black uppercase text-center mb-4">
                  Meet Mentors & Instructors
                </h2>
                <h1 className="text-4xl font-bold text-center mb-12">
                  Tap into the wisdom of DevOps & Cloud Computing Experts
                </h1>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {/* Mentor Card Template */}
                  {[
                    { name: "Anshuman Singh", role: "Founder at Scalar, ex - Meta" },
                    { name: "Naman Balla", role: "Founder at Scalar, ex - Meta" },
                    { name: "Anshuman Singh", role: "Founder at Scalar, ex - Meta" },
                    { name: "Anshuman Singh", role: "Founder at Scalar, ex - Meta" },
                  ].map((mentor, index) => (
                    <div key={index} className="bg-black shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
                      <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">Mentor Image</span>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-white">{mentor.name}</h3>
                        <p className="text-gray-400 text-sm">{mentor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reviews Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Array(3).fill().map((_, index) => (
                    <div key={index} className="bg-black shadow-lg rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-gray-400">R</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Riya</h4>
                          <div className="text-yellow-400">★★★★★</div>
                        </div>
                      </div>
                      <p className="text-gray-400">
                        The training was awesome. The instructor has done a great job. He was very patient throughout the sessions and took additional time to explain the concepts further when we had queries.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

              </div>
            </div>
        {/* Fee Structure */}
        <div className='w-full py-20 px-40 bg-black'>
            <FeeStructure />
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto bg-white py-20 px-40'>
            <FAQSection />
        </div>

    </div>
  )
}

export default page;
