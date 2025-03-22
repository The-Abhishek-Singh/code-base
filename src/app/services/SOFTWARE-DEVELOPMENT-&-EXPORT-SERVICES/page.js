"use client"
import React from 'react';
import ScrollCards from "@/component/UI/servicespage/StackwithFixedHeading"
import { Code, Cloud, FileChartColumn, Bitcoin, Construction, Link, FileUp as FileUser, AppWindow, BrainCircuit } from 'lucide-react';
import ServicesContent from "@/component/UI/servicespage/ServicesUI"
import VantaBackground from "@/component/VantaBackground";

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
      image: "/servicepages/Image11.jpg",
      content: "Embrace the transformative power of blockchain and IoT technologies to enhance security, transparency, and efficiency in your business processes. Our blockchain development services, including smart contracts, cryptocurrency solutions, and decentralized applications (DApps), help streamline operations and build trust.",
      iconType: "bitcoin"
    },
  ];

  return (
    <div className="relative w-full ">
      <div className="relative z-10">
        <VantaBackground
          className="z-50"
          color={"#AB0003"} //RED color
          backgroundColor={"#000000"} // Dark background
          points={10} // More connection points
          maxDistance={25} // Slightly increased connection distance
          spacing={22}
          showDots={true}
        >
          <div className="opacity-90">
            <ServicesContent
              title="SOFTWARE DEVELOPMENT & EXPORT SERVICES"
              description=" At Careertronic Global Services, we offer a comprehensive suite of services that
      cater to the diverse needs of individuals, businesses, and institutions. Whether
      you're looking to advance your career, optimize your business processes, or
      implement cutting-edge software solutions, we have the expertise and tools to
      help you succeed in today's fast-paced digital landscape. Explore our range of
      services below and discover how Careertronic can drive growth, efficiency, and
      innovation for your business or career."
              sectionTitle="Our Web Solutions"
            />
          </div>
        </VantaBackground>
        <ScrollCards
          cardsData={softwareServicesData}
          customIcons={softwareIcons}
        />
      </div>
    </div>
  );
};

export default SoftwareServices;
