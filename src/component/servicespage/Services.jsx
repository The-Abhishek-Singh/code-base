"use client"
import React from 'react';
import ScrollCards from "@/component/UI/servicespage/StackwithFixedHeading"
import { Code, Cloud, FileChartColumn, Bitcoin, Construction, Link, FileUp as FileUser, AppWindow, BrainCircuit } from 'lucide-react';


 



const SoftwareServices = () => {


  const softwareIcons = {
    "brainCircuit": BrainCircuit,
    "cloud": Cloud,
    "appWindow": AppWindow,
    "construction": Construction,
    "fileChartColumn": FileChartColumn,
    "bitcoin": Bitcoin

   
  };


 

  const softwareServicesData = [
    {
      title: "Artificial Intelligence & Machine Learning",
      heading: "Artificial Intelligence & Machine Learning",
      image: "/servicepages/1stservice.png",
      content: "Our AI and ML solutions automate processes, enhance decision-making, and build intelligent systems that evolve over time. Using advanced technologies like natural language processing (NLP), chatbots, and predictive analytics, we help businesses improve customer interactions, increase operational efficiency, and stay competitive",
      iconType: "brainCircuit"
    },
    {
      title: "Cloud Computing & DevOps Solutions",
      heading: "Cloud Computing & DevOps Solutions",
      image: "/servicepages/2ndservice.png",
      content: "We help you leverage the power of cloud technologies to create flexible, scalable, and cost-efficient infrastructure. Our DevOps practices ensure smooth collaboration between development and operations teams, streamlining workflows and accelerating delivery times, so your business can scale efficiently and stay agile.",
      iconType: "cloud"
    },
    {
      title: "App Development & Integration",
      heading: "App Development & Integration",
      image: "/servicepages/3rdservice.png",
      content: "Our team develops high-performance mobile and web applications designed to provide superior user experiences. We also offer seamless system integration to ensure your applications work harmoniously with existing platforms, maximizing efficiency and business outcomes.",
      iconType: "appWindow"
    },
    {
      title: "Software Maintenance & Support",
      heading: "Software Maintenance & Support",
      image: "/servicepages/4thservice.png",
      content: "We provide ongoing maintenance and support to ensure that your software remains up-to-date, secure, and optimized for peak performance. Our support services include bug fixes, updates, performance enhancements, and troubleshooting to ensure the long-term success of your software solutions.",
      iconType: "construction"
    },
    {
      title: "Data Science & Analytics",
      heading: "Data Science & Analytics",
      image: "/servicepages/5thservice.png",
      content: "Data Science and Analytics involve extracting valuable insights from large datasets to drive informed decision-making and optimize business operations. Data analytics helps turn raw data into actionable information, while data science enables deeper insights, improving efficiency and competitive advantage.",
      iconType: "fileChartColumn"
    },
    {
      title: "Blockchain & IoT",
      heading: "Blockchain & IoT",
      image: "/servicepages/9thservice.png",
      content: "Embrace the transformative power of blockchain and IoT technologies to enhance security, transparency, and efficiency in your business processes. Our blockchain development services, including smart contracts, cryptocurrency solutions, and decentralized applications (DApps), help streamline operations and build trust.",
      iconType: "bitcoin"
    },
  ];

  return (
    <div className="relative w-full bg-black">
      {/* Hero Section with Dark Background */}
      <div className="relative text-white py-16 min-h-[35rem] 2xl:min-h-[45rem] flex  justify-start bg-no-repeat bg-cover bg-center"
      
      style={{ backgroundImage: "url('/servicepages/bgggg.png')" }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden bg-black opacity-50">

        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto lg:mx-20 px-4  sm:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            SOFTWARE DEVELOPMENT & EXPORT SERVICES
          </h1>
          +
          <p className="text-lg max-w-4xl leading-relaxed">
            At Careertronic Global Services, we offer a comprehensive suite of services that
            cater to the diverse needs of individuals, businesses, and institutions. Whether
            you're looking to advance your career, optimize your business processes, or
            implement cutting-edge software solutions, we have the expertise and tools to
            help you succeed in today's fast-paced digital landscape. Explore our range of
            services below and discover how Careertronic can drive growth, efficiency, and
            innovation for your business or career.
          </p>
        </div>
      </div>

      {/* Curved Red Section Title */}
      <div className="relative h-24 my-6 mx-2 sm:m-6 md:mx-20 bg-red-600 rounded-bl-full rounded-tr-full flex items-center justify-center">
            {/* Curved Background */}
            
                <h2 className="text-white text-base sm:text-xl lg:text-2xl font-bold p-6">
                  SOFTWARE DEVELOPMENT & EXPORT SERVICES
                </h2>
              </div>



              <ScrollCards cardsData={softwareServicesData} customIcons={softwareIcons}/>

            </div>
    
  );
};

export default SoftwareServices;