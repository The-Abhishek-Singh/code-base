"use client";
import React from "react";
import ScrollReveal from "@/components/About/ScrollReveal";

const TeamMember = ({ name, role, imageUrl }) => (
  <div className="relative group overflow-hidden rounded-3xl h-full">
    <div className="aspect-ratio-box pb-[150%] relative">
      <img
        src={imageUrl}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <div className="absolute bottom-0 p-6 space-y-2">
          <h3 className="text-3xl font-bold text-white">{name}</h3>
          <p className="text-gray-200 text-sm">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const teamMembers = [
  {
    name: "Kritika",
    role: "Expert UI/UX Designer & Front-end Developer",
    imageUrl: "/ourteam/kritika.jpg",
  },
  {
    name: "Leelam",
    role: "Expert UI/UX Designer & Front-end Developer",
    imageUrl: "/ourteam/leelam.png",
  },
  {
    name: "Kunal",
    role: "Expert UI/UX Designer & App Developer",
    imageUrl: "/ourteam/kunal.jpg",
  },
  {
    name: "Abhishek",
    role: "Expert Full-Stack Developer",
    imageUrl: "/ourteam/abhi.jpg",
  },
  {
    name: "Rounak",
    role: " Expert Full-Stack Developer",
    imageUrl: "/ourteam/rounak.jpg",
  },
  {
    name: "Vatsalya",
    role: "Expert Full Stack Developer",
    imageUrl: "/ourteam/vatsalya.jpg",
  },
  {
    name: "Divyanshu",
    role: "Expert Front-end Developer",
    imageUrl: "/ourteam/divyanshu.jpg",
  },
  {
    name: "Mithun",
    role: "Expert Full Stack Developer",
    imageUrl: "/ourteam/mithun.jpg",
  },
];

const page = () => {
  return (
    <div className="main-container h-auto w-full bg-black overflow-hidden ">
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

      <section className="bg-black text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <ScrollReveal animation="fadeIn" duration={1200} delay={200}>
            <div className="absolute top-20 left-10 w-32 h-32 border border-gray-600 rounded-full"></div>
          </ScrollReveal>
          <ScrollReveal animation="scaleUp" duration={1000} delay={400}>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-600 rounded-full"></div>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" duration={800} delay={600}>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-red-500 rounded-full"></div>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" duration={800} delay={800}>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-500 rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Section Title */}
              <ScrollReveal animation="slideRight" duration={1000} delay={100}>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white">OUR</span>{' '}
                    <br className="hidden md:block" />
                    <span className="text-red-500">TEAM</span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <ScrollReveal animation="slightRight" duration={800} delay={300}>
                  <p className="text-base md:text-lg">
                    At <span className="text-white font-semibold">Careertronic Global Services</span>, our greatest asset is our <span className="text-white font-semibold">exceptional team</span> of passionate, skilled, and experienced professionals, each dedicated to delivering <span className="text-white font-semibold">innovative solutions</span> that drive your success.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="slightRight" duration={800} delay={500}>
                  <p className="text-base md:text-lg">
                    From <span className="text-white font-semibold">software developers</span> and <span className="text-white font-semibold">IT trainers</span> to <span className="text-white font-semibold">business consultants</span> and <span className="text-white font-semibold">global education advisors</span>, we have a diverse group of experts across every area of our service offerings, ensuring that you receive the highest level of <span className="text-white font-semibold">expertise</span>, <span className="text-white font-semibold">care</span>, and <span className="text-white font-semibold">support</span>.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="slightRight" duration={800} delay={700}>
                  <p className="text-base md:text-lg">
                    Our team thrives on <span className="text-white font-semibold">collaboration</span>, constantly sharing insights, ideas, and best practices to create solutions that are <span className="text-white font-semibold">customized</span> to your unique needs. We are committed to fostering a <span className="text-white font-semibold">culture of continuous learning</span> and <span className="text-white font-semibold">growth</span>, staying ahead of industry trends to deliver the most <span className="text-white font-semibold">relevant</span>, <span className="text-white font-semibold">cutting-edge services</span> to our clients.
                  </p>
                </ScrollReveal>
              </div>

              {/* Bottom accent line */}
              <ScrollReveal animation="slideRight" duration={1200} delay={900}>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-yellow-500"></div>
                  <div className="h-px flex-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              {/* Main visual container */}
              <ScrollReveal animation="slideLeft" duration={1000} delay={200}>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
                  {/* Team representation visual */}
                  <div className="space-y-6">
                    {/* Header */}
                    <ScrollReveal animation="fadeSlideDown" duration={800} delay={600}>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Our Diverse Expertise</h3>
                        <p className="text-gray-400">Professionals across multiple domains</p>
                      </div>
                    </ScrollReveal>
                    
                    {/* Team roles grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ScrollReveal animation="slightBottomLeft" duration={600} delay={800}>
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-red-500 transition-colors">
                          <div className="w-8 h-8 bg-red-500 rounded-full mb-3 flex items-center justify-center">
                            <span className="text-xs font-bold">💻</span>
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1">Software Developers</h4>
                          <p className="text-gray-400 text-xs">Building innovative solutions</p>
                        </div>
                      </ScrollReveal>
                      
                      <ScrollReveal animation="slightBottomRight" duration={600} delay={900}>
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-red-500 transition-colors">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mb-3 flex items-center justify-center">
                            <span className="text-xs font-bold">🎓</span>
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1">IT Trainers</h4>
                          <p className="text-gray-400 text-xs">Empowering through education</p>
                        </div>
                      </ScrollReveal>
                      
                      <ScrollReveal animation="slightBottomLeft" duration={600} delay={1000}>
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-red-500 transition-colors">
                          <div className="w-8 h-8 bg-green-500 rounded-full mb-3 flex items-center justify-center">
                            <span className="text-xs font-bold">📊</span>
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1">Business Consultants</h4>
                          <p className="text-gray-400 text-xs">Strategic guidance</p>
                        </div>
                      </ScrollReveal>
                      
                      <ScrollReveal animation="slightBottomRight" duration={600} delay={1100}>
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-red-500 transition-colors">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mb-3 flex items-center justify-center">
                            <span className="text-xs font-bold">🌍</span>
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1">Education Advisors</h4>
                          <p className="text-gray-400 text-xs">Global opportunities</p>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <ScrollReveal animation="spinIn" duration={1000} delay={1200}>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20"></div>
                  </ScrollReveal>
                  <ScrollReveal animation="spinIn" duration={1000} delay={1300}>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full opacity-20"></div>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
              
              {/* Background accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-yellow-500/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* First founder section */}
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

      {/* Second founder section */}
      <div className="h-auto bg-[#161616] text-white p-8 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
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
                Miss. Himanshi Bhagwani
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

      {/* Third executive section - AI Expert */}
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
                  src="/ourteam/Frame 341.png"
                  alt="Portrait of AI Expert"
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
              <h2 className="text-5xl font-bold text-white">AI-Expert</h2>
            </ScrollReveal>
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={0}
              stagger={150}
            >
              <h3 className="text-3xl font-medium text-white">
                Miss. Namrata Choubey
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
                A technical visionary with extensive experience in building
                scalable systems, our CTO leads the company's technological
                innovation. With expertise in emerging technologies and software
                architecture, they ensure that our solutions remain cutting-edge
                while addressing complex business challenges for our clients.
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
                  Experience: <span className="font-semibold">7yr+</span>
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
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={50}
              stagger={150}
            >
              <h2 className="text-3xl font-bold text-white">Founder & CEO</h2>
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={0}
              stagger={150}
            >
              <h3 className="text-2xl font-medium text-white">
                Miss. Himanshi Bhagwani
              </h3>
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={100}
              stagger={150}
            >
              <p className="text-base text-gray-300 leading-relaxed">
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
          <div className="w-full md:w-1/2 space-y-6">
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
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={50}
              stagger={150}
            >
              <h2 className="text-3xl font-bold text-white">Founder & CEO</h2>
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={0}
              stagger={150}
            >
              <h3 className="text-2xl font-medium text-white">
                Miss. Himanshi Bhagwani
              </h3>
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="spring"
              delay={100}
              stagger={150}
              >
              <p className="text-base text-gray-300 leading-relaxed">
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
        </div>
      </div>

      {/* Team members grid */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal
                key={index}
                animation="slideUp"
                duration={800}
                easing="spring"
                delay={50 * index * 2}
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
