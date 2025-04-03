"use client";
import React from "react";
import ScrollCards from "@/components/UI/servicespage/StackwithFixedHeading";
import {
  Cloud,
  FileChartColumn,
  Bitcoin,
  Construction,
  AppWindow,
  BrainCircuit,
} from "lucide-react";
import ServicesContent from "@/components/UI/servicespage/ServicesUI";
import VantaBackground from "@/components/VantaBackground";

const SoftwareServices = () => {
  const softwareIcons = {
    brainCircuit: BrainCircuit,
    cloud: Cloud,
    appWindow: AppWindow,
    construction: Construction,
    fileChartColumn: FileChartColumn,
    bitcoin: Bitcoin,
  };

  const softwareServicesData = [
    {
      title: "What is Outsourcing and Why Should You Consider It?",
      heading: "What is Outsourcing and Why Should You Consider It?",
      image: "/ServiceImg/BPO/bpo1.png",
      content:
        "Outsourcing enables businesses to delegate non-core tasks to specialized third-party providers, helping them reduce operational costs, improve efficiency, and focus on strategic goals. Careertronic Global Services delivers end-to-end solutions across BPO, KPO, and RPO, offering expert support to streamline operations and drive growth.",
      iconType: "brainCircuit",
    },
    {
      title: "Our Outsourcing Services",
      heading: "Our Outsourcing Services",
      image: "/ServiceImg/BPO/bpo4.jpeg",
      content:
        "Careertronic Global Services offers customized outsourcing solutions across business process outsourcing (BPO), knowledge process outsourcing (KPO), recruitment process outsourcing (RPO), IT support, human resources, and supply chain management. Our goal is to help businesses optimize workflows, minimize overhead costs, and leverage specialized expertise for increased productivity.",
      iconType: "cloud",
    },
    {
      title: "Why Choose Careertronic for Outsourcing?",
      heading: "Why Choose Careertronic for Outsourcing?",
      image: "/ServiceImg/BPO/bpo3.webp",
      content:
        "Careertronic Global Services stands out by providing industry-specific outsourcing solutions tailored to unique business challenges. With expertise spanning IT, finance, healthcare, and legal sectors, we ensure cost-effective, scalable, and technology-driven solutions to enhance efficiency, expand global reach, and provide multilingual support.",
      iconType: "appWindow",
    },
    {
      title: "How We Work",
      heading: "How We Work",
      image: "/ServiceImg/BPO/bpo2.jpeg",
      content:
        "Our approach begins with an in-depth understanding of your business needs. We then design tailored outsourcing solutions that align with your goals. Implementation is seamless, backed by ongoing support and periodic process optimizations to ensure sustained efficiency and maximum value.",
      iconType: "construction",
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
               title="BPO, KPO, RPO, and Business Outsourcing Solutions"
               description="Careertronic Global Services is dedicated to empowering businesses and individuals with innovative, technology-driven solutions designed to streamline operations, enhance efficiency, and foster sustainable growth.

For businesses, we offer end-to-end services, including business process outsourcing (BPO), IT consulting, and workflow automation, helping organizations reduce costs, improve productivity, and scale effectively. Our expertise spans multiple industries, ensuring tailored solutions that align with your unique challenges and goals.

For individuals, we provide career development support, skill enhancement programs, and professional training to equip you with the tools needed to thrive in today’s competitive job market.

At Careertronic, we don’t just provide services—we create transformative experiences that drive success. Whether you're looking to expand your business, optimize processes, or advance your career, our solutions are designed to help you navigate the digital age with confidence and efficiency. Explore how Careertronic can accelerate your progress and take you to the next level."
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
