"use client"
import React from 'react';
import ScrollCards from "@/components/UI/servicespage/StackwithFixedHeading"
import { Code, Cloud, FileChartColumn, Bitcoin, Construction, Link, FileUp as FileUser, AppWindow, BrainCircuit } from 'lucide-react';
import ServicesContent from "@/components/UI/servicespage/ServicesUI"
import VantaBackground from '@/components/VantaBackground';
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
      title: "Why Choose to Study Abroad?",
      heading: "Why Choose to Study Abroad?",
      image: "/ServiceImg/Abroad/study1.jpg",
      content: "Studying abroad offers world-class education at top universities, providing a global curriculum and cutting-edge courses. Immersing yourself in new cultures broadens your perspectives and personal growth while building a global network of valuable connections. This experience sharpens key skills like problem-solving, adaptability, and communication, preparing you for success in a competitive job market.",
      iconType: "brainCircuit"
    },
    {
      title: "Our Study Abroad Services",
      heading: "Our Study Abroad Services",
      image: "/ServiceImg/Abroad/study2.jpg",
      content: "At Careertronic Global Services, we offer comprehensive support for your study abroad journey, from selecting the right course and university to assisting with applications and securing a student visa. We provide financial planning guidance, help with accommodation and travel arrangements, and offer pre-departure and post-arrival support.",
      iconType: "cloud"
    },
    {
      title: "Popular Study Abroad Destinations",
      heading: "Popular Study Abroad Destinations",
      image: "/ServiceImg/Abroad/study3.jpg",
      content: "We assist students in applying to top universities across the United States, United Kingdom, Australia, Canada, Germany, and Singapore. These countries offer world-class education, diverse cultural experiences, and opportunities for global networking.",
      iconType: "appWindow"
    },
    {
      title: "Why Careertronic Global Services?",
      heading: "Why Careertronic Global Services?",
      image: "/ServiceImg/Abroad/study4.jpg",
      content: "At Careertronic Global Services, our experienced consultants offer expert guidance and personalized counseling to help you make informed decisions about your study abroad journey. With a proven track record of successful student placements, we provide end-to-end support, from university selection to visa approval and settling abroad.",
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
          title="STUDY-ABROAD"
          description="At Careertronic Global Services, we believe that education is the gateway to a brighter future. We are here to help turn your dream of studying abroad into a reality, providing expert guidance, personalized support, and comprehensive services every step of the way.
Whether you're looking to pursue undergraduate, postgraduate, or professional courses, we partner with over 1,000+ top institutions across 32+ countries worldwide. Our extensive network of prestigious universities ensures that you have access to the best academic programs suited to your career goals. "
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
