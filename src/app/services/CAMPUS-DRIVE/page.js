"use client"
import React from 'react';
import ScrollCards from "@/component/UI/servicespage/StackwithFixedHeading"
import { Code, Cloud, FileChartColumn, Bitcoin, Construction, Link, FileUp as FileUser, AppWindow, BrainCircuit } from 'lucide-react';
import ServicesContent from "@/component/UI/servicespage/ServicesUI"
import VantaBackground from '@/component/VantaBackground';
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
      title: "Our Campus Drive Management Services",
      heading: "Our Campus Drive Management Services",
      image: "/ServiceImg/Campus/cam1.jpg",
      content: "We provide end-to-end campus recruitment solutions, including customizable drive scheduling, pre-drive training, and seamless coordination. Our platform offers employer and student portals, real-time analytics, and effective communication to ensure a smooth recruitment process from start to finish.",
      iconType: "brainCircuit"
    },
    {
      title: "Why Choose Careertronic for Campus Drives Management?",
      heading: "Why Choose Careertronic for Campus Drives Management?",
      image: "/ServiceImg/Campus/cam2.webp",
      content: "We offer efficient, customizable campus recruitment solutions, providing expert support and access to a wide network of top employers. With real-time analytics and data-driven insights, we ensure streamlined processes and successful recruitment events for colleges and students.",
      iconType: "cloud"
    },
    {
      title: "Benefits for Colleges & Universities",
      heading: "Benefits for Colleges & Universities",
      image: "/ServiceImg/Campus/cam3.jpeg",
      content: "Our campus recruitment platform boosts student placement rates, enhances your institution's brand value, and simplifies logistics for placement cells. With comprehensive reporting, you can track success and continuously improve strategies for future campus drives.",
      iconType: "appWindow"
    },
    {
      title: "Benefits for Employers",
      heading: "Benefits for Employers",
      image: "/ServiceImg/Campus/cam4.webp",
      content: "Our platform provides access to top talent from leading institutions, with customizable recruitment campaigns tailored to your company's needs. The streamlined interview process and data-driven insights help you make informed, efficient hiring decisions.",
      iconType: "construction"
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
                      title=" CAMPUS DRIVE MANAGEMENT"
                      description="At Careertronic, we specialize in organizing and managing campus drives that connect top-tier talent with leading employers. Our seamless and efficient campus recruitment solutions ensure that colleges and universities can easily facilitate hiring drives, helping students secure exciting job opportunities while offering companies access to a diverse pool of qualified candidates.
We understand that campus drives are a crucial part of the recruitment process, and we are here to streamline every step—from planning and coordination to execution and follow-up. Our platform empowers colleges to manage multiple campus drives with ease, ensuring smooth operations and successful placements for both students and employers.
"
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
