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
      title: "Why Corporate & Industrial Training?",
      heading: "Why Corporate & Industrial Training?",
      image: "/ServiceImg/Corporate/why.jpeg",
      content: "In today’s rapidly changing business environment, investing in continuous learning is crucial to staying ahead of the competition. Careertronic Global Services offers tailored corporate and industrial training programs designed to enhance the skills of your workforce, boost employee engagement, and improve organizational performance.",
      iconType: "brainCircuit"
    },
    {
      title: "Our Corporate & Industrial Training Services",
      heading: "Our Corporate & Industrial Training Services",
      image:"/ServiceImg/Corporate/copor.jpg" ,
      content: "At Careertronic, we offer a wide range of training programs designed to meet the needs of modern businesses across various industries. Whether you want to improve specific technical skills, enhance team performance, or build leadership capabilities, we have the right training solutions for your company.",
      iconType: "cloud"
    },
    {
      title: "Why Choose Careertronic for Your Corporate & Industrial Training?",
      heading: "Why Choose Careertronic for Your Corporate & Industrial Training?",
      image: "/ServiceImg/Corporate/career.png",
      content: "Our expert trainers bring real-world experience to every session, ensuring practical, applicable learning. We offer tailored training solutions to address your company's specific needs, skill gaps, and culture. Our programs include post-training assessments to measure results, and our strong industry partnerships ensure alignment with current trends and best practices.",
      iconType: "appWindow"
    },
   
    {
      title: " How We Work?",
      heading: " How We Work?",
      image: "/ServiceImg/Corporate/how.jpg",
      content: "We start by assessing your organization's needs, goals, and skill requirements to ensure the right training program is developed. Based on this, we create a customized training plan that targets specific areas for improvement and aligns with your business objectives. After the training, we offer continuous support through post-training resources, assessments, and additional training to reinforce the learning.",
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
          title="CORPORATE-&-INDUSTRIAL-TRAINING"
          description=" Elevate Your Workforce with Careertronic’s Corporate & Industrial Training Solutions
      Empower your employees with cutting-edge skills and knowledge that drive innovation, boost productivity, and keep your organization competitive in an ever-evolving market.
       Call to Action (CTA):
       Transform Your Workforce Today
        Get in Touch for Customized Training Solutions"
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
