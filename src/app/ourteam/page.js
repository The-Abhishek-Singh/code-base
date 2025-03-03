"use client";
import React from "react";
import ScrollReveal from "@/component/About/ScrollReveal";
const TeamMember = ({ name, role, imageUrl }) => (
  <div className="relative group overflow-hidden h-full rounded-3xl">
    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
      <div className="absolute bottom-0 p-6 space-y-2">
        <h3 className="text-3xl font-bold text-white">{name}</h3>
        <p className="text-gray-200 text-sm">{role}</p>
      </div>
    </div>
  </div>
);
const teamMembers = [
  {
    name: "Kritika",
    role: "Expert UI/UX Designer & Front-end Developer",
    imageUrl: "/ourteam/Frame 326.jpg",
  },
  {
    name: "Leelam",
    role: "Expert UI/UX Designer & Front-end Developer",
    imageUrl: "/ourteam/Frame 319.jpg",
  },
  {
    name: "Kunal",
    role: "Expert UI/UX Designer & App Developer",
    imageUrl: "/ourteam/Frame.png",
  },
  {
    name: "Abhishek",
    role: "Expert UI/UX Designer & Front-end Developer",
    imageUrl: "/ourteam/Frame 327.jpg",
  },
  {
    name: "Rounak",
    role: "Expert Front-end Developer",
    imageUrl: "/ourteam/Frame 322.jpg",
  },
  {
    name: "Vatsalya",
    role: "Expert Full Stack Developer",
    imageUrl: "/ourteam/Frame 323.jpg",
  },
  {
    name: "Divyanshu",
    role: "Expert Front-end Developer",
    imageUrl: "/ourteam/Frame 324.jpg",
  },
  {
    name: "Mithun",
    role: "Expert Full Stack Developer",
    imageUrl: "/ourteam/Frame 325.jpg",
  },
];
const page = () => {
  return (
    <div className="main-container h-auto w-full bg-black">
      <div className="relative h-10 z-1 bg-black"></div>
      <div className="relative hero-bg h-auto bg-black text-white">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        {/* Main content container */}
        <div className="relative z-10 container mx-auto lg:pl-28 py-5 pl-8 flex flex-col lg:pr-0 pr-8  md:flex-row items-center justify-between gap-12 mb-14">
          {/* Text content section */}
          <div className="w-full md:w-1/2 space-y-32">
            <div className="space-y-2">
              <ScrollReveal
                animation="slideUp"
                duration={700}
                delay={0}
                index={0}
                stagger={150}
              >
                <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-bold">
                  ABOUT
                </h2>
              </ScrollReveal>
              <ScrollReveal
                animation="slideUp"
                duration={700}
                delay={90}
                index={0}
                stagger={150}
              >
                <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-bold">
                  OUR
                </h2>
              </ScrollReveal>
              <ScrollReveal
                animation="slideUp"
                duration={700}
                delay={180}
                index={0}
                stagger={150}
              >
                <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-bold text-red-600">
                  TEAM
                </h2>
              </ScrollReveal>
            </div>
            <div className="space-y-5 flex relative z-10 justify-between w-[60vw] lg:gap-0 gap-5">
              {/* Decorative line */}
              <div className="absolute top-0 left-0">
                <div className="container mx-auto w-full">
                  <div className="w-[75vw] h-1 bg-yellow-600" />
                </div>
              </div>
              <p className="sm:text-lg lg:w-[30%] text-sm text-gray-300">
                Careertronic Globle Pvt Ltd
              </p>
              <p className="sm:text-xl lg:w-[40%] text-md text-gray-200">
                Meet the talented individuals who drive the company's remarkable
                achievements!
              </p>
            </div>
          </div>
          {/* Image section */}
          <div className="w-full md:w-1/2 mb-14">
            <div className="relative">
              <ScrollReveal
                animation="slideUp"
                duration={800}
                easing="spring"
                delay={50}
              >
                <img
                  src="/ourteam/Frame 339.png"
                  alt="Team meeting with creative lighting"
                  className="w-full rounded-lg shadow-2xl relative -top-5"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#161616] text-white p-8 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Container */}
          <div className="w-full md:w-1/2">
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={50}
            >
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-900 p-1">
                <img
                  src="/ourteam/Frame 340.png"
                  alt="Portrait of company founder"
                  className="w-full rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
          {/* Content Container */}
          <div className="w-full md:w-1/2 space-y-6">
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={50}
              stagger={150}
            >
              <h2 className="text-5xl font-bold text-white">Founder & CEO</h2>
            </ScrollReveal>
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={0}
              stagger={150}
            >
              <h3 className="text-3xl font-medium text-white">
                Mr. Akshay Agrawal
              </h3>
            </ScrollReveal>
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={100}
              stagger={150}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                The driving force behind the vision, the Founder leads with
                innovation and a passion for technology. With a strong focus on
                digital transformation and problem-solving, they established the
                company to bridge the gap between business needs and modern IT
                solutions. Their leadership ensures continuous growth in IT
                services, training, and global career opportunities.
              </p>
            </ScrollReveal>
            <div className="pt-4">
              <ScrollReveal
                animation="fadeSlideLeft"
                duration={800}
                easing="spring"
                delay={200}
                stagger={150}
              >
                <p className="text-lg text-gray-300">
                  Experience: <span className="font-semibold">5yr+</span>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#161616] text-white p-8 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Content Container */}
          <div className="w-full md:w-1/2 space-y-6">
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={50}
              stagger={150}
            >
              <h2 className="text-5xl font-bold text-white">Founder & CEO</h2>
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={0}
              stagger={150}
            >
              <h3 className="text-3xl font-medium text-white">
                Miss. Hi manshi Bhagwani
              </h3>
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={100}
              stagger={150}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                The driving force behind the vision, the Founder leads with
                innovation and a passion for technology. With a strong focus on
                digital transformation and problem-solving, they established the
                company to bridge the gap between business needs and modern IT
                solutions. Their leadership ensures continuous growth in IT
                services, training, and global career opportunities.
              </p>
            </ScrollReveal>
            <div className="pt-4">
              <ScrollReveal
                animation="slideLeft"
                duration={800}
                easing="spring"
                delay={200}
                stagger={150}
              >
                <p className="text-lg text-gray-300">
                  Experience: <span className="font-semibold">5yr+</span>
                </p>
              </ScrollReveal>
            </div>
          </div>
          {/* Image Container */}
          <div className="w-full md:w-1/2">
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="spring"
              delay={50}
            >
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-900 p-1">
                <img
                  src="/ourteam/Frame 341.png"
                  alt="Portrait of company founder"
                  className="w-full rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#161616] py-20 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
          >
            <h2 className="text-5xl font-bold text-white text-center mb-16">
              MEET OUR TEAM
            </h2>
          </ScrollReveal>
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {teamMembers.map((member, index) => (
              <ScrollReveal
                animation="slideUp"
                duration={800}
                easing="spring"
                delay={50 * index*2}
                stagger={150}
              >
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;