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
      title: "Why Work Abroad?",
      heading: "Why Work Abroad?",
      image: "/ServiceImg/Work/work1.jpg",
      content: "Working abroad boosts your career with international experience, higher earning potential, and unique opportunities for skill development. It offers cultural immersion and helps build a global professional network, enhancing your overall personal and professional growth.",
      iconType: "brainCircuit"
    },
    {
      title: "Our Services",
      heading: "Our Services",
      image: "/ServiceImg/Work/work2.jpg",
      content: "Careertronic Global Services provides end-to-end support for securing employment abroad, including job search assistance, resume and interview preparation, visa and work permit guidance, and relocation help. We also offer post-arrival support and personalized career counseling to ensure a smooth transition and successful career abroad.",
      iconType: "cloud"
    },
    {
      title: "Global Job Markets & Career Opportunities",
      heading: "Global Job Markets & Career Opportunities",
      image: "/ServiceImg/Work/work3.png",
      content: "Working abroad offers opportunities in high-demand industries like Technology, Healthcare, Engineering, Finance, Education, Hospitality, and Marketing. We help connect you with employers worldwide to secure the ideal job in your field.",
      iconType: "appWindow"
    },
    
    {
      title: "Why Choose Us?",
      heading: "Why Choose Us?",
      image: "/ServiceImg/Work/work4.jpg",
      content: "We offer expert guidance and tailored support to help you secure a job abroad, from job search to visa processing and post-arrival assistance. With our global network of top employers, we connect you to the best opportunities and ensure your success in building a career overseas.",
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
          title="WORK-ABROAD"
          description="In today’s competitive world, expanding your career beyond borders can open doors to incredible opportunities. At Careertronic Global Services, we help professionals like you explore international job prospects, gain valuable global experience, and secure positions with top employers worldwide. Whether you seek better career growth, a higher salary, or the chance to work in a dynamic multicultural environment, our expert guidance ensures a smooth journey. From personalized career planning and job placement assistance to visa support and skill enhancement, we provide end-to-end support to help you succeed globally.

Start your global career today! Book a free consultation and take the first step toward a brighter future. "
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
