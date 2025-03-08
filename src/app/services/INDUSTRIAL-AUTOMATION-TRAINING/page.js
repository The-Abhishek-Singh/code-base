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
      title: "INTRODUCTION TO INDUSTRIAL TRAINING",
      heading: "INTRODUCTION TO INDUSTRIAL TRAINING",
      image: "/ServiceImg/Automation/training.jpeg",
      content: "Overview of industrial automation systems and their applications.Key components and benefits of automation in modern industries.Types of sensors and their role in automation systems. Signal conditioning, processing, and integration with control systems.",
      iconType: "brainCircuit"
    },
    {
      title: "PLC, HMI & SCADA ",
      heading: "PLC, HMI & SCADA ",
      image: "/ServiceImg/Automation/plc.webp",
      content: "In-depth understanding of PLC hardware and software. PLC programming fundamentals using ladder logic. Human-Machine Interface (HMI) systems and their integration with PLCs. SCADA system architecture, components, and data communication.",
      iconType: "cloud"
    },
    {
      title: "Automation in Manufacturing",
      heading: "Automation in Manufacturing",
      image: "/ServiceImg/Automation/manufacturing.jpg",
      content: "Students will learn about the role of automation in manufacturing, including industrial robotics, conveyor systems, and automated material handling. The course explores the integration of robotics with PLCs for automated tasks, such as assembly and packaging.",
      iconType: "appWindow"
    },
    {
      title: "Maintenance and Troubleshooting",
      heading: "Maintenance and Troubleshooting",
      image: "/ServiceImg/Automation/trouble.webp",
      content: "This topic teaches preventive and predictive maintenance strategies to ensure automation systems run efficiently. Students will learn troubleshooting techniques for PLCs, sensors, actuators, and conveyors. The module also covers system upgrades, retrofitting older automation systems with modern technologies, and best practices for maintaining automated equipment.",
      iconType: "construction"
    },
    {
      title: "Industrial Automation Software Tools",
      heading: "Industrial Automation Software Tools",
      image: "/ServiceImg/Automation/auto.jpg",
      content: "Students will gain hands-on experience with popular automation software tools like Siemens TIA Portal, Allen-Bradley Studio 5000, and Ignition SCADA. The course covers PLC programming, HMI design, and SCADA system configuration.",
      iconType: "fileChartColumn"
    },
    {
      title: "Design and Implementation of Control Scheme & Remote Monitoring",
      heading: "Design and Implementation of Control Scheme & Remote Monitoring",
      image: "/ServiceImg/Automation/Remote.jpg",
      content: "Designing control schemes for real-time industrial applications.Implementing remote monitoring and control solutions.  Remote Monitoring and Control further enhance the flexibility and efficiency of automation systems, offering operators the ability to oversee operations from anywhere, improving decision-making, and minimizing downtime.",
      iconType: "bitcoin"
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
          title=" Industrial Automation Training Program: Master the Future of Industry"
          description="Welcome to Careertronic's Industrial Automation Training Program, where we empower you with the skills, knowledge, and hands-on experience to thrive in the rapidly growing field of automation. Our comprehensive curriculum covers the latest technologies in PLCs, SCADA, robotics, and IoT, preparing you for successful careers in industries ranging from manufacturing to energy management, process control, and more."
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

