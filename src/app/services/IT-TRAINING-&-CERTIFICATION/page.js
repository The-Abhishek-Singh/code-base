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
      title: "Data Science, Artificial Intelligence, and Machine Learning Program",
      heading: "Data Science, Artificial Intelligence, and Machine Learning Program",
      image: "/ServiceImg/ITservice/Data.jpg", 
      content: "Welcome to our Data Science, AI, and ML Program – a comprehensive training designed to equip you with essential skills in data analysis, machine learning, and artificial intelligence. Whether you're a beginner or a professional, this course offers hands-on experience with cutting-edge tools and techniques. ",
      iconType: "brainCircuit"
    },
    {
      title: "Cybersecurity & Ethical Hacking Training Program",
      heading: "Cybersecurity & Ethical Hacking Training Program ",
      image: "/ServiceImg/ITservice/cybersecurity.jpg",
      content: "Welcome to our Cybersecurity & Ethical Hacking Training Program, designed to equip you with the skills needed to protect digital infrastructures and combat cyber threats. This comprehensive program offers hands-on training, expert guidance, and industry-recognized certifications, preparing you for a successful career in cybersecurity and ethical hacking.",
      iconType: "cloud"
    },
    {
      title: "Cloud Computing & DevOps",
      heading: "Cloud Computing & DevOps",
      image: "/ServiceImg/ITservice/devops.webp",
      content: "In today’s rapidly evolving IT landscape, Cloud Computing and DevOps have emerged as critical drivers of efficiency, scalability, and automation. This course offers a comprehensive journey through the core concepts, tools, and practices that power cloud computing platforms and DevOps methodologies.",
      iconType: "appWindow"
    },
    {
      title: "Full Stack Website and App Development Course",
      heading: "Full Stack Website and App Development Course",
      image: "/ServiceImg/ITservice/fullstack.jpg",
      content: "In today’s digital world, businesses need full-stack developers to create both front-end and back-end solutions. This course covers essential technologies, from HTML, CSS, and JavaScript for front-end development to Node.js, Express.js, mobile app development, and database management for back-end tasks. ",
      iconType: "construction"
    },
    {
      title: "Accounting & Taxation Course",
      heading: "Accounting & Taxation Course",
      image: "/ServiceImg/ITservice/tax.jpg",
      content: "At Careertronic, we revolutionize learning in Accounting, Taxation, Audit, and HR domains by offering practical guidance through advanced simulation software and gamification techniques. Whether you’re learning online or offline, our programs equip you with real-world skills, helping you understand and implement concepts that will level-up your career.",
      iconType: "fileChartColumn"
    },
    {
      title: "Robotics",
      heading: "Robotics",
      image: "/ServiceImg/ITservice/robo.png",
      content: "Welcome to the world of Robotics—a field that blends engineering, artificial intelligence, and automation to create intelligent machines that can revolutionize industries. At Careertronic, we offer a comprehensive Robotics Training Program designed to equip you with the skills to build, program, and operate robots across various applications, from industrial automation to medical robotics.",
      iconType: "fileChartColumn"
    },
    {
      title: "Coding for kids",
      heading: "Coding for kids",
      image: "/ServiceImg/ITservice/kids.jpg",
      content: "In today’s digital world, coding is more than just a skill—it’s a superpower! At Careertronic, we believe in empowering the next generation of innovators by introducing them to coding in a fun, engaging, and hands-on way. Our Coding for Kids program is designed to make learning programming exciting and accessible for children aged 6 to 16, setting them up for a future of creativity, problem-solving, and tech-driven success.",
      iconType: "fileChartColumn"
    },
    {
      title: "UI & UX Designer",
      heading: "UI & UX Designer",
      image: "/ServiceImg/ITservice/uiux.webp",
      content: "In the digital-first world, a strong user experience (UX) and user interface (UI) design are crucial to the success of websites, apps, and digital products. As businesses compete to provide superior user experiences, the demand for skilled UI/UX designers is skyrocketing.",
      iconType: "fileChartColumn"
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
          title="IT-TRAINING-&-CERTIFICATION "
          description="At Careertronic Global Services, we offer industry-leading IT training programs designed to equip individuals with the skills and expertise needed to thrive in today's competitive digital landscape. Our training courses cover a wide range of cutting-edge technologies, each designed to provide you with a comprehensive understanding of the subject, along with real-world applications and career opportunities.
Our certified trainers are industry experts with years of experience, ensuring that you receive top-tier education and guidance. Whether you're looking to start a new career, enhance your current skills, or make a career transition, our training programs are tailored to help you achieve your professional goals.
"
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

