import React from "react";
import { Card } from "../UI/card";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const StatsAndCommitments = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      {/* Section Header */}
      <ScrollReveal animation="fadeIn" duration={800}>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-red-600">Our</span> Impact & Commitments
        </h2>
      </ScrollReveal>

      {/* Top Section with Stats */}
      <div className="flex flex-col sm:flex-row gap-12 mb-16">
        {/* Left side - World Map with Stats */}
        <ScrollReveal
          animation="fadeSlideLeft"
          duration={1000}
          className="sm:w-3/5"
        >
          <div className="bg-black rounded-xl pt-8 text-white relative overflow-hidden h-[28rem] shadow-xl border border-red-800">
            <ScrollReveal animation="slightDown" delay={300} duration={800}>
              <h2 className="text-3xl md:text-4xl px-8 font-bold mb-6">
                Global <span className="text-red-500">Impact</span>
              </h2>
            </ScrollReveal>

            <div className="flex flex-col md:flex-row justify-start relative z-10 px-8">
              <ScrollReveal animation="fadeIn" delay={500} duration={800}>
                <div className="mb-6 md:mb-0 md:pr-6">
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    <span className="text-red-500">12,000+</span>
                  </div>
                  <div className="text-xl text-gray-300">Professionals Placed</div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeIn" delay={700} duration={800}>
                <div className="md:border-l md:border-red-800 md:pl-6">
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    <span className="text-red-500">175+</span>
                  </div>
                  <div className="text-xl text-gray-300">Global Partners</div>
                </div>
              </ScrollReveal>
            </div>

            {/* World map visualization */}
            <ScrollReveal
              animation="fadeIn"
              delay={900}
              duration={1200}
              className="w-full absolute -bottom-4 overflow-y-clip"
            >
              <div className="relative">
                <Image
                  src="/about/connectionGlobe.svg"
                  width={500}
                  height={300}
                  className="w-full object-contain opacity-80"
                  alt="global-career-network"
                />
                {/* Add pulsing dots for key locations */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: "1s"}}></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: "0.5s"}}></div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Right side - Stats with Icons */}
        <ScrollReveal
          animation="fadeSlideRight"
          duration={1000}
          delay={300}
          className="sm:w-2/5 flex flex-col justify-between gap-6"
        >
          {/* Career Placements */}
          <ScrollReveal animation="slightLeft" delay={500} duration={800}>
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <ScrollReveal animation="spinIn" delay={700} duration={900}>
                  <div className="bg-red-700 p-3 rounded-lg shadow-lg">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
                <div>
                  <ScrollReveal
                    animation="fadeIn"
                    delay={800}
                    duration={700}
                    easing="spring"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-red-600">3,500+</div>
                  </ScrollReveal>
                  <ScrollReveal
                    animation="slightRight"
                    delay={900}
                    duration={700}
                  >
                    <div className="leading-snug md:leading-normal text-lg font-medium">
                      Tech Career Placements
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Industry Partners */}
          <ScrollReveal animation="slightLeft" delay={700} duration={800}>
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <ScrollReveal animation="spinIn" delay={900} duration={900}>
                  <div className="bg-red-700 p-3 rounded-lg shadow-lg">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
                <div>
                  <ScrollReveal
                    animation="fadeIn"
                    delay={1000}
                    duration={700}
                    easing="spring"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-red-600">500+</div>
                  </ScrollReveal>
                  <ScrollReveal
                    animation="slightRight"
                    delay={1100}
                    duration={700}
                  >
                    <div className="leading-snug md:leading-normal text-lg font-medium">
                      Industry Partners
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Candidate Success Rate */}
          <ScrollReveal animation="slightLeft" delay={900} duration={800}>
            <div className="pb-6">
              <div className="flex items-center gap-4">
                <ScrollReveal animation="spinIn" delay={1100} duration={900}>
                  <div className="bg-red-700 p-3 rounded-lg shadow-lg">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
                <div>
                  <ScrollReveal
                    animation="fadeIn"
                    delay={1200}
                    duration={700}
                    easing="spring"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-red-600">95%</div>
                  </ScrollReveal>
                  <ScrollReveal
                    animation="slightRight"
                    delay={1300}
                    duration={700}
                  >
                    <div className="leading-snug md:leading-normal text-lg font-medium">
                      Candidate Success Rate
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>

      {/* Bottom Section - Commitments */}
      <div className="mt-20">
        <ScrollReveal animation="slightBottom" delay={200} duration={800}>
          <h3 className="text-2xl font-bold text-red-600 border-b border-gray-300 pb-2 mb-8 inline-block">
            Careertronics Commitments
          </h3>
        </ScrollReveal>

        <ScrollReveal animation="fadeSlideUp" delay={400} duration={900}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner with <span className="text-red-600">Careertronic</span> to Accelerate Your Career Growth
            </h2>
            <p className="text-lg text-white">
              We're committed to connecting talented professionals with innovative organizations across the tech landscape. 
              Our approach emphasizes diversity, professional development, and creating lasting career opportunities that benefit both individuals and organizations.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars */}
        <div className="flex flex-col md:flex-row gap-8 relative mt-12 items-stretch">
          {/* Connection line between pillars */}
          <div className="absolute hidden md:block top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>

          <ScrollReveal
            animation="slightBottomLeft"
            delay={700}
            duration={900}
            easing="bouncy"
            className="flex-1"
          >
            <Card className="p-8 border border-gray-200 rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:border-red-500 hover:-translate-y-2 cursor-pointer group h-full bg-gradient-to-b from-white to-gray-50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                <div className="text-xl font-bold text-white">01</div>
              </div>
              <div className="text-center pt-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300 text-black">
                  Career Development & Mentorship
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Providing resources and guidance to help professionals advance their careers strategically.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal
            animation="fadeSlideUp"
            delay={900}
            duration={900}
            easing="spring"
            className="flex-1"
          >
            <Card className="p-8 border border-gray-200 rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:border-red-500 hover:-translate-y-2 cursor-pointer group h-full bg-gradient-to-b from-white to-gray-50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                <div className="text-xl font-bold text-white">02</div>
              </div>
              <div className="text-center pt-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300 text-black">
                  Diversity & Inclusion
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Championing diverse talent and creating inclusive workplaces across the tech industry.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal
            animation="slightBottomRight"
            delay={1100}
            duration={900}
            easing="bouncy"
            className="flex-1"
          >
            <Card className="p-8 border border-gray-200 rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:border-red-500 hover:-translate-y-2 cursor-pointer group h-full bg-gradient-to-b from-white to-gray-50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                <div className="text-xl font-bold text-white">03</div>
              </div>
              <div className="text-center pt-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300 text-black">
                  Innovative Talent Solutions
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Leveraging technology to create better matches between professionals and opportunities.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default StatsAndCommitments;