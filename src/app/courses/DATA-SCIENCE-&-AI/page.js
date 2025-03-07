"use client"
import React, { useState, useEffect, useRef} from "react";
import Button from '@/component/course/Button';
import CourseSection from "@/component/course/CourseSection";
import Forms from '@/component/course/Forms';
import Image from "next/image";
import Card from '@/component/course/Card';
import { CardHoverEffect } from "@/component/course/CardHoverEffect";
import Heading from "@/component/course/Heading";


const faqData = [
  { question: "Who provides the Course certificate and how long is it valid for?", answer: "The course certificate is provided by the respective platform or institution offering the course, such as Udemy, Coursera, CodeChef, or other recognized organizations. The validity of the certificate depends on the issuing platform; most certificates do not have an expiration date and remain valid for a lifetime. However, some industry-specific certifications may require periodic renewal." },
  { question: "How do I become a FULL STACK DEVELOPER?", answer: "Learn front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, Express, databases). Gain proficiency in version control (Git), APIs, and deployment. Work on projects, contribute to open source, and build a strong portfolio." },
  { question: "What do I need to do to unlock my certificate?", answer: "To unlock your certificate, you must complete all required coding exercises, pass assessments, and meet the platform’s completion criteria. Once done, your certificate will be available for download in your account." },
  { question: "Do you provide any practice tests as part of this FULL STACK course?", answer: "Yes, the course includes practice tests to help you assess your skills in front-end, back-end, databases, and deployment. These tests ensure hands-on learning and better preparation for real-world projects." }
];

export default function Home(){

  // FAQ Section 
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // Card Data Last Section 
  const cardData = [
    {
      cardTitle : 'FULL STACK DEVELOPMENT',
      cardContent : 'Our Mobile Application Development course equips you with the skills to design, develop, and deploy mobile applications for both iOS and Android platforms. Learn to create user-friendly, high-performance apps!',
      cardImg : '/2.png' 
    },
    {
      cardTitle : 'MOBILE APPLICATION DEVELOPMENT',
      cardContent : 'Our Mobile Application Development course equips you with the skills to design, develop, and deploy mobile applications for both iOS and Android platforms. Learn to create user-friendly, high-performance apps',
      cardImg : '/1.png' 
    },
    {
      cardTitle : 'INDUSTRIAL AUTOMATION',
      cardContent : 'Our Mobile Application Development course equips you with the skills to design, develop, and deploy mobile applications for both iOS and Android platforms. Learn to create user-friendly, high-performance apps!',
      cardImg : '/96.png' 
    },
    {
      cardTitle : 'AWS DEVOPS',
      cardContent : 'Our Mobile Application Development course equips you with the skills to design, develop, and deploy mobile applications for both iOS and Android platforms. Learn to create user-friendly, high-performance apps!',
      cardImg : '/92.png' 
    },
    {
      cardTitle : 'CLOUD COMPUTING',
      cardContent : 'Our Mobile Application Development course equips you with the skills to design, develop, and deploy mobile applications for both iOS and Android platforms. Learn to create user-friendly, high-performance apps!',
      cardImg : '/93.png' 
    },
    {
      cardTitle : 'CYBER SECURITY, ETHICAL HACKING & INFORMATION SECURITY',
      cardContent : 'Our Mobile Application Development course equips you with the skills to design, develop, and deploy mobile applications for both iOS and Android platforms.',
      cardImg : '/94.png' 
    }
  ]


  // Course Data Section (Pale Background Section)
  const courseData = [
    {
      title: "Peparatory Session",
      modules: [
        "Python",
        "Linux"
      ],
    },
    {
      title: "Data analysis with MS-Excel",
      modules: [
        "Excel fundamentals",
        "Data visualization with excel",
        "Regression problems using Excel",
      ],
    },
    {
      title: "Data Wrangling with SQL",
      modules: [
        "SQL basics",
        "Advanced SQL",
        "Deep dive into user defined functions",
        "SQL optimization and performance",
      ]
    },
    {
      title: "Python With Data Science",
      modules: [
        "Extract Transform Load ",
        "Data Handling with NumPy",
        "Data Manipulation Using Pandas",
        "Data Preprocessing & visualization"
      ],
    },
    {
      title: "Linear Algebra and Advanced Statistics",
      modules: [
        "Descriptive Statistic",
        "Probability",
        "Inferential Statistics"
      ],
    },
    {
      title: "Machine Learning",
      modules: [
        "Introduction to Machine learning",
        "Regression Classification Clustering",
        "types of learning"
      ],
    },
    {
      title: "Deep Learning Using TensorFlow",
      modules: [
        " Artificial Intelligence Basics Neural Networks Deep Learning",
        "Module 8 PowerBI PowerBi Basics",
        "DAX Data Visualization with Analytics"
      ],
    },
    {
      title: "Deploying Machine Learning Models With Cloud",
      modules: [
        "Introduction to MLops",
        "Deploying Machine Learning Models",
      ],
    },
    {
      title: "GIT",
      modules: [
        "Version Control",
        "GIT Basics",
      ],
    },
    {
        title: "Data Science Capstone Project",
        modules: [
            // "Introduction to Data Science Capstone Project",
            // "Python for Data Science",
            // "Data Collection & Cleaning",
            // "Data Visualization",
            // "Statistics & Probability for Data Science",
            // "Machine Learning Basics",
            // "Advanced Machine Learning",
        // "Working with Databases & Big Data",
        // "Model Deployment & Capstone Project"
      ],
    },
    {
      title: "Business Case Studies",
      modules: [
        "Recommendation engine",
        "rating prredictions",
        "Census",
        "Housing, Object Detection",
        "Stock Market Analysis, Banking Problem",
        "AI Chatbot",
      ],
    },
  ];

  return (
  <>
      <div className="h-auto">
    
      {/* <Loader /> */}
      <div className="relative h-20 z-1 bg-black"></div>
      
      {/* Frame 1 */}
      <div className="frame1 h-auto w-full flex flex-col lg:flex-row bg-black">
        <div className="left w-full lg:w-[60%] h-auto bg-black py-4 lg:py-7 px-4 lg:px-6">

        <div className="p-3 flex justify-center lg:justify-start">

        <Heading text="DATA SCIENCE & AI" color='white' bgColor='black'/>
      </div>
        <p className="text-lg pl-[1rem] md:text-md text-white">This comprehensive course in Data Science and Artificial Intelligence (AI) aims to equip students with the essential skills required to process, analyze, and interpret complex datasets, and build intelligent AI systems. The course covers a wide range of topics including statistical analysis, machine learning, deep learning, data visualization, natural language processing (NLP), and AI applications.</p>
          <ul className="p-3 lg:p-5 list-disc">


            {/* List items with responsive text */}
            <li className="ls-img text-white text-xl md:text-base ">
              <p>Access to a global community of Data Science & AI professionals.</p>
            </li>
            <li className="ls-img text-white text-xl md:text-base">
              <p>Learn from 40+ hrs of Learning from beginner to advance</p>
            </li>
            <li className="ls-img text-white text-xl md:text-base">
              <p>Industry-relevant curriculum designed by experts</p>
            </li>
            <li className="ls-img text-white text-xl md:text-base">
              <p>Hands-on projects that simulate real-world data problems.</p>
            </li>


            {/* Other list items remain same structure */}
          </ul>
          <div className="w-full h-auto flex flex-col md:flex-row gap-2 justify-evenly">
            <Button text={'View Training Options'} />
            <Button text={'Enroll for Course'} />
          </div>
        </div>
        <div className="right w-full lg:w-[40%] xl:w-[560px] h-full bg-black py-9 px-12 lg:px-7">
          <Forms />
        </div>
      </div>
      </div>


      {/* Skills Section */}
      <div className="w-full h-auto text-black p-4 md:p-6 lg:p-8">
      <div className="p-6 flex justify-center">
        <Heading text="Skills" color='black' bgColor='white'/>
      </div>
        <ul className="w-full text-black grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-[2rem] md:gap-x-20 p-4 md:p-[5%] mb-5 list-disc">
          {/* Skills list items */}
          <li>
            <p className="text-xl xl:text-2xl">Python & Linux</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Python with Data Science</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Data Analysis With MS-Excel</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Linear Algebra and Advanced Statistics</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Data Wrangling with SQL</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Machine Learning</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Deep Learning Using TensorFlow</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Data Science Capstone Project</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Deploying Machine Learning Models With Cloud</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Business Case Studies</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">GIT</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Natural Language Processing</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Computer Vision</p>
          </li>
          <li>
            <p className="text-xl xl:text-2xl">Data Science At Scale with Pyspark</p>
          </li>
        </ul>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="h-auto w-auto m-auto border-2 border-red-500 flex items-center justify-center flex-col gap-3 px-6 md:px-10 py-3 shadow-2xl">
            <h3 className="font-semibold text-sm md:text-base">Watch Demo Lectures!!</h3>
            <Button text="Watch" />
          </div>
        </div>
      </div>

      {/* Advisor Section */}
      <div className="bg w-full h-auto bg-zinc-800/80 text-white p-4 md:p-10 mb-[5rem]">

      <div className="mb-2">
        <Heading text="Advisors" color='white' bgColor='black'/>
      </div>
        {/* Rest of advisor section */}
        <p className="mb-3">And Get</p>
        <ul className='list-inside list-disc mb-3'>
          <li className="mb-2">
            Personalized - Career Roadmap
          </li>
          <li className="mb-2">
            Free - Career Counselling
          </li>
          <li className="mb-2">
            Free Access to - Scaler Events
          </li>
        </ul>
        <Button text="Request a Call" />
      </div>
      {/* Curriculum Section */}
      <div className="h-auto w-full p-4 md:p-5">

      <div className="mb-9">
        <Heading text="DATA SCIENCE & AI COURSE CURRICULUM" color='black' bgColor='white'/>
      </div>
        <div className="bg-[#EEE4E4] container-course-section h-auto w-full backdrop-blur-2xl mb-[5rem]">
          <div className="w-10 h-10"></div>
          <div className="max-w-3xl mx-auto p-4 md:p-6">
            {courseData.map((section, index) => (
              <CourseSection key={index} idx={index + 1} title={section.title} modules={section.modules} />
            ))}
          </div>
        </div>
      </div>
        {/* FAQ Section */}
      <div className="h-auto w-full bg-white mb-[5rem]">

      <div className="mb-2 p-4">
        <Heading text="DATA SCIENCE & AI CERTIFICATE FAQs" color='black' bgColor='white'/>
      </div>
        <div className="bg-[#222] h-full w-full flex flex-col lg:flex-row lg:justify-around">
          <div className="right w-full lg:w-[60%] p-4">
            {/* FAQ content */}
            <div className="space-y-4 h-full flex flex-col justify-around">
                    {faqData.map((item, index) => (
                      <div key={index} className="border rounded overflow-hidden">
                        <button
                          className="w-full text-left p-4 flex justify-between items-center font-medium text-lg bg-gray-700 hover:bg-gray-900 transition-all duration-200 ease-linear"
                          onClick={() => toggleFAQ(index)}
                        >
                          {item.question}
                          <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                          <div className="p-4 bg-gray-900 border-t">{item.answer}</div>
                        )}
                      </div>
                    ))}
                  </div>
          </div>
          <div className="left w-[60%] mx-auto lg:my-auto lg:w-[20%] h-full bg-red-500 p-4 md:p-8 flex items-center justify-center">
            <Image src="/Certificate.png" alt="Example Image" width={500} height={300} priority className="w-full h-auto" />
          </div>
        </div>
      </div>
        <div className="h-auto w-full mb-[5rem]">
          <div className="ReviewCardContainer h-auto w-full p-5 flex flex-wrap flex-col gap-5 items-center">
            <CardHoverEffect />
          </div>
        </div>
        <div className="h-auto w-full p-5 mb-[5rem] bg-black">
        <div className="mb-2 p-4">
        <Heading text='WHY JOIN THIS PROGRAM?' color="white" bgColor="black"/>
      </div>
          <div className="h-full w-full flex lg:flex-row flex-col">
          <div className="relative lg:w-[45%] p-5 w-full lg:h-auto h-[43vh]">
          <iframe className="rounded-lg border-2" width="100%" height="100%" src="https://www.youtube.com/embed/E8lXC2mR6-k" title="Master React JS in easy way"></iframe>
          </div>
            <div className="right1 h-auto lg:w-[55%] p-5 w-full flex flex-wrap gap-5 text-white justify-evenly">
                    <div className="contaIner rounded-lg md:w-[45%] w-full md:h-auto h-[25%] border-2 border-zinc-500 p-3 backdrop-blur-lg bg-white/30">
                      <h3 className="font-semibold">Develop skills for real career growth</h3>
                      <p>Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills</p>
                    </div>
                    <div className="contaIner rounded-lg md:w-[45%] w-full md:h-auto h-[25%] border-2 border-zinc-500 p-3 backdrop-blur-lg bg-white/30">
                      <h3 className="font-semibold">Learn from experts active in their field, not out-of-touch trainers</h3>
                      <p>Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.</p>
                    </div>
                    <div className="contaIner rounded-lg md:w-[45%] w-full md:h-auto h-[25%] border-2 border-zinc-500 p-3 backdrop-blur-lg bg-white/30">
                      <h3 className="font-semibold">Learn by working on real-world problems</h3>
                      <p>Capstone projects involving real world data sets with virtual labs for hands-on learning</p>
                    </div>
                    <div className="contaIner rounded-lg md:w-[45%] w-full md:h-auto h-[25%] border-2 border-zinc-500 p-3 backdrop-blur-lg bg-white/30">
                      <h3 className="font-semibold">Structured guidance ensuring learning never stops</h3>
                      <p>24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts</p>
                    </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-full p-3 sm:p-4 md:p-5">
        <div className="mb-2 p-4">
        <Heading text='OTHER COURSES' color="black" bgColor="white"/>
      </div>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5">
            {cardData.map((item,index) => (
              <Card 
                key={index} 
                title={item.cardTitle} 
                content={item.cardContent} 
                img={item.cardImg}
                className="w-full"
              />
            ))}
          </div>
        </div>
      
    </>
  );
};