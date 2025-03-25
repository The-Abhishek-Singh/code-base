import React from "react";
import { Button } from "../UI/button";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const WhyChooseCareerTronics = ({ bottomSection = true, paddBot = true }) => {
  const stats = [
    {
      title: "EXPERTS",
      count: "300+",
      description: "Career Advisors",
      profiles: [
        "/about/dev.svg",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
      ],
    },
    {
      title: "PARTNERS",
      count: "150+",
      description: "Corporate Partners",
      profiles: [
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
      ],
    },
    {
      title: "PLACEMENTS",
      count: "5000+",
      description: "Successful Placements",
      profiles: [
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
      ],
    },
    {
      title: "TRAINING",
      count: "25+",
      description: "Training Programs",
      profiles: [
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
        "/api/placeholder/40/40",
      ],
    },
  ];

  const features = [
    {
      icon: "/about/dev.svg",
      title: "Expert",
      subtitle: "Career Advisors",
    },
    {
      icon: "/about/hiring.svg",
      title: "Personalized",
      subtitle: "Career Paths",
    },
    {
      icon: "/about/scaling.svg",
      title: "Industry",
      subtitle: "Connections",
    },
    {
      icon: "/about/agile.svg",
      title: "Advanced",
      subtitle: "Training",
    },
    {
      icon: "/about/reliable.svg",
      title: "Proven",
      subtitle: "Results",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Why Choose CareerTronics Section */}
      <div className={`${paddBot ? "py-16" : "pt-16"} px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}>
        <ScrollReveal animation="fadeSlideDown" duration={1100} easing="spring">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-red-600">Why Choose CareerTronics?</h2>
            <p className="max-w-sm sm:max-w-2xl mx-auto text-gray-700">
              With a deep passion for transforming careers and a strong track record in
              delivering cutting-edge career solutions, we have successfully worked
              with individuals and businesses across diverse industries.
            </p>
          </div>
        </ScrollReveal>

        {/* Features with wavy line */}
        <div className="relative mt-4 -mb-12 sm:mt-20 sm:mb-32 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          {/* Wavy dotted line - only visible on sm and above */}
          <div className="hidden sm:block absolute w-full top-0 pointer-events-none">
            <ScrollReveal animation="fadeIn" duration={2000} delay={500}>
              <img src="/about/wave.svg" alt="Wavy line" className="opacity-70" />
            </ScrollReveal>
          </div>

          {/* Container for features */}
          <div className="flex flex-col sm:flex-wrap sm:justify-between sm:items-center sm:gap-y-24 sm:relative sm:z-10 sm:h-48">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center mb-8 sm:mb-0 sm:absolute sm:w-1/5 sm:px-4
                  ${index === 0 ? "sm:left-0 sm:-top-[30px] md:-top-8 xl:-top-8" : ""}
                  ${index === 1 ? "sm:left-[20%] sm:top-[15px] md:top-[20px] lg:top-10 xl:top-20" : ""}
                  ${index === 2 ? "sm:left-[40%] sm:top-0 md:top-[5px] lg:top-[20px] xl:top-8" : ""}
                  ${index === 3 ? "sm:left-[60%] sm:top-[47px] md:top-[58px] lg:top-24 xl:top-[8.6rem]" : ""}
                  ${index === 4 ? "sm:left-[80%] sm:top-[43px] md:top-[60px] lg:top-[5.4rem] xl:top-32" : ""}
                `}
              >
                <ScrollReveal
                  animation="fadeSlideUp"
                  duration={1200}
                  delay={800 + index * 200}
                  easing="bouncy"
                >
                  <div className="bg-red-700 border-8 border-red-900/20 w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white text-2xl relative shadow-lg">
                    <ScrollReveal
                      animation="spinIn"
                      duration={1500}
                      delay={1400 + index * 200}
                      easing="spring"
                    >
                      <Image
                        src={feature.icon}
                        width={40}
                        height={40}
                        alt={`${feature.title} ${feature.subtitle} icon`}
                        className="filter invert"
                      />
                    </ScrollReveal>
                    {index === 4 && (
                      <ScrollReveal animation="fadeIn" duration={800} delay={2400}>
                        <Image
                          src="/about/toggle.svg"
                          width={20}
                          height={22.3}
                          alt="toggle"
                          className="absolute filter invert"
                        />
                      </ScrollReveal>
                    )}
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fadeIn" duration={800} delay={1600 + index * 200}>
                  <h3 className="text-red-500 font-semibold text-xl text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-950 font-medium text-lg text-center -mt-1">
                    {feature.subtitle}
                  </p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal line */}
        <ScrollReveal animation="fadeIn" duration={1000} delay={300}>
          <div className="border-t border-gray-200 w-full my-12"></div>
        </ScrollReveal>

        {/* Stats Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ${bottomSection ? 'block' : 'hidden'}`}>
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              animation="slightBottomLeft"
              duration={1000}
              delay={800 + index * 200}
              easing="spring"
            >
              <div className="bg-black text-white p-8 rounded-md shadow-md border border-red-800/20">
                <ScrollReveal
                  animation="slightDown"
                  duration={800}
                  delay={1000 + index * 200}
                >
                  <h3 className="text-red-500 text-xl font-bold mb-2">
                    {stat.title}
                  </h3>
                </ScrollReveal>
                <ScrollReveal
                  animation="fadeIn"
                  duration={1200}
                  delay={1200 + index * 200}
                  easing="spring"
                >
                  <p className="text-4xl font-bold text-white mb-1">
                    {stat.count}
                  </p>
                </ScrollReveal>
                <ScrollReveal
                  animation="fadeIn"
                  duration={800}
                  delay={1400 + index * 200}
                >
                  <p className="text-sm text-gray-300">{stat.description}</p>
                </ScrollReveal>
                {/* Profile images row with plus button */}
                <div className="flex items-center mt-6">
                  {stat.profiles.map((profile, i) => (
                    <ScrollReveal
                      key={i}
                      animation="fadeIn"
                      duration={800}
                      delay={1600 + index * 200 + i * 100}
                    >
                      <div
                        className={`w-8 h-8 rounded-full border-2 border-black -ml-2 first:ml-0 overflow-hidden`}
                      >
                        <img
                          src={profile}
                          alt={`Team member ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </ScrollReveal>
                  ))}
                  <ScrollReveal
                    animation="fadeIn"
                    duration={800}
                    delay={2000 + index * 200}
                  >
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center -ml-2">
                      <span className="text-xs">+</span>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`bg-black text-white py-16 px-4 text-center ${bottomSection ? 'block' : 'hidden'}`}>
        <ScrollReveal animation="slightDown" duration={900} delay={500}>
          <h2 className="text-3xl mb-2 font-light text-gray-200">
            Building Career Success Together
          </h2>
        </ScrollReveal>
        <ScrollReveal
          animation="fadeIn"
          duration={1100}
          delay={700}
          easing="spring"
        >
          <p className="text-4xl font-semibold mb-8 text-red-500">
            Ready To Transform Your Career Path?
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="scaleUp"
          duration={1000}
          delay={900}
          easing="bouncy"
        >
          <Button className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-md shadow-lg font-semibold">
            Get Started
          </Button>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default WhyChooseCareerTronics;