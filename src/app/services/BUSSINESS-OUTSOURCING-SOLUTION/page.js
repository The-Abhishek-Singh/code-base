"use client"
import React from 'react';
import ScrollCards from "@/component/UI/servicespage/StackwithFixedHeading"
import { Code, Cloud, FileChartColumn, Bitcoin, Construction, Link, FileUp as FileUser, AppWindow, BrainCircuit } from 'lucide-react';
import ServicesContent from "@/component/UI/servicespage/ServicesUI"
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
      title: "What is Outsourcing and Why Should You Consider It?",
      heading: "What is Outsourcing and Why Should You Consider It?",
      image: "/ServiceImg/BPO/bpo1.png",
      content: "Outsourcing allows businesses to reduce costs, improve efficiency, and focus on core functions by delegating non-core tasks to specialized third-party providers. Careertronic Global Services offers end-to-end solutions across BPO, KPO, RPO, and more, enabling companies to scale operations and access expert knowledge.",
      iconType: "brainCircuit"
    },
    {
      title: "Our Outsourcing Services",
      heading: "Our Outsourcing Services",
      image: "/ServiceImg/BPO/bpo4.jpeg",
      content: "Careertronic Global Services offers tailored outsourcing solutions across BPO, KPO, RPO, and custom business services, including IT support, HR, and supply chain management. Our expertise helps businesses streamline operations, reduce costs, and access specialized skills to enhance efficiency and growth.",
      iconType: "cloud"
    },
    {
      title: "Why Choose Careertronic for Outsourcing?",
      heading: "Why Choose Careertronic for Outsourcing?",
      image: "/ServiceImg/BPO/bpo3.webp",
      content: "Careertronic Global Services offers tailored outsourcing solutions designed to meet your unique business needs, with expertise across industries like IT, finance, healthcare, and legal. Our cost-effective, scalable, and technology-driven approach helps businesses reduce costs, improve efficiency, and expand globally with multilingual support.",
      iconType: "appWindow"
    },
    {
      title: "How We Work",
      heading: "How We Work",
      image: "/ServiceImg/BPO/bpo2.jpeg",
      content: "We begin by understanding your business needs and designing customized outsourcing solutions. Our team seamlessly implements the solution, provides ongoing support, and regularly reviews and optimizes processes to ensure continued efficiency and value.",
      iconType: "construction"
    },
  
  ];

  return (
  <div className="relative w-full bg-black">
      {/* Background Video */}

      <video
        className=" absolute top-0 left-0 w-full object-fit "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ServiceImg/vedio1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content Section */}

      <div className="relative z-10">
        <ServicesContent
          title="BPO, KPO, RPO, and Business Outsourcing Solutions"
          description=" Unlock Business Efficiency with Careertronic's Outsourcing Solutions

In today’s fast-paced business landscape, efficiency is the key to success. Careertronic’s Outsourcing Solutions empower businesses to streamline operations, reduce costs, and boost productivity through our specialized BPO (Business Process Outsourcing), KPO (Knowledge Process Outsourcing), RPO (Recruitment Process Outsourcing), and Business Outsourcing services. Whether you need expert assistance in customer support, data management, recruitment, finance, or other critical functions, we provide scalable, high-quality solutions tailored to your business needs. By outsourcing to our skilled professionals, you can focus on your core business strategies while we handle the rest with efficiency and precision.

Discover our outsourcing solutions today! Schedule a free consultation and take the first step toward optimizing your business operations"
          sectionTitle="Our Web Solutions"
        />

        <ScrollCards
          cardsData={softwareServicesData}
          customIcons={softwareIcons}
        />
      </div>
    </div>
  );
};

export default SoftwareServices;
