import React from "react";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/UI/button";
import StatsAndCommitments from "@/components/About/StatsAndCommitments";
import BlueNWhite from "@/components/About/BlueNWhite";
import WhyChooseInnovetix from "@/components/About/WhyChoosecareertronic";
// import ScrollReveal from "@/components/ScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
// import { Card } from "@/components/ui/card";
function page() {
  const missionTitle = "Our Mission";
  const missionPoints = [
    "At Careertronic Global Services Pvt. Ltd. (CGSPL), our mission is to empower individuals and businesses through technology, training, and global opportunities—offering advanced software, world-class programs, and innovative education services.",
    "We deliver value by improving business processes, upskilling people, and enabling access to education. Our client-focused approach ensures customized solutions that drive measurable impact and long-term growth.",
    "We go beyond services to build lasting partnerships. By helping clients navigate digital complexities, we unlock new possibilities, foster innovation, and drive lasting success in the digital age."
  ];

  const missionImage = "/about/mission.svg";

  const visionTitle = "Our Vision";
  const visionPoints = [
    "At Careertronic Global Services Pvt. Ltd. (CGSPL), our vision is to be a global leader in IT solutions, training, and education, renowned for our ability to deliver innovative, transformational, and high-quality services. We aspire to be the partner of choice for businesses and individuals worldwide, driving digital transformation, career advancement, and organizational growth in an increasingly dynamic and interconnected world.",
    "We are committed to empowering both individuals and organizations to realize their full potential, equipping them with the tools, knowledge, and skills necessary to thrive in a constantly evolving landscape. By fostering a culture of innovation, adaptability, and continuous learning, we enable our clients and students to not only succeed but lead in the face of change and uncertainty.",
    "Our goal is to create lasting impact through our cutting-edge solutions, expert-led training, and global education opportunities, shaping the future of work and learning for generations to come."
  ];

  const visionImage = "/about/vision.svg";
  const valuesTitle = "Our Values";
  const valuesPoints = [
    "Innovation: We stay ahead of industry trends by embracing emerging technologies and delivering forward-thinking solutions that meet both current and future needs.",
    "Excellence: We strive for excellence in everything we do, offering reliable software and training solutions that ensure the best outcomes for our clients.",
    "Integrity: We act with honesty, transparency, and fairness, building strong relationships through trust and ethical practices.",
    "Customer-Centric: Our clients are our priority. We listen, understand, and create tailored solutions to meet their specific goals and drive long-term success.",
    "Collaboration: We believe in the power of teamwork, working closely with clients and partners to build inclusive, enduring partnerships based on shared vision.",
  ];

  const valuesImage = "/about/values.svg"; // Update this with the actual image path

  const whoWeAreTitle = "Who We Are";
  const whoWeArePoints = [
    "Careertronics is a global leader in providing advisory, technology, and implementation solutions. We partner with clients to drive transformation across industries, helping them navigate challenges, optimize operations, and accelerate growth.",
    "Our team of experts brings unmatched industry knowledge, combined with cutting-edge technology, to deliver actionable insights and impactful results.",
  ];
  const OurHistoryTitle = "Our History";
  const OurHistoryPoints = [
    "Founded with a vision to drive positive change in the business world, Careertronics into a trusted partner for organizations worldwide. Over the years, we have built a legacy of success, helping clients across industries embrace innovation, transform operations, and achieve lasting value. Our rich history reflects our commitment to excellence and our passion for shaping a brighter future.",
  ];

  return (
    <>
      {/* sec 1 */}
      <div className="bg-gradient-to-b from-[#040404] to-[#201F37] overflow-hidden">
        <div className="px-10 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pb-12 sm:pb-20 pt-32">
          <div className="flex gap-10 items-center">
            <div
              className="space-y-6 w-full text-center sm:text-left sm:w-1/2 md:w-7/12
          
          lg:min-w-[32rem]"
            >
              <ScrollReveal animation="fadeIn" duration={1200} delay={200}>
                <h2
                  className="text-7xl md:text-8xl lg:text-8xl font-bold tracking-wide text-black"
                  style={{
                    textShadow:
                      "-1px 0 #7e7e7e, 0 1px #7e7e7e, 1px 0 #7e7e7e, 0 -1px #7e7e7e",
                  }}   

                >
                  ABOUT US
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="slightRight" duration={800} delay={400}>
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  We're Your Digital Technological Partners
                </h3>
              </ScrollReveal>

              <ScrollReveal
                animation="fadeIn"
                duration={800}
                delay={600}
                easing="gentle"
              >
                <p className="text-gray-300 text-lg">
                  At Careertronic Global Services Pvt. Ltd. (CGSPL), we are driven by a singular purpose: to empower businesses and individuals to thrive in a fast-changing, interconnected world. Founded with a vision to provide innovative, high-quality services, we have grown into a trusted global leader in Software Development, IT Training, Industrial Automation Training, Corporate & Industrial Training, Global Education, and Business Consulting.

                </p>
              </ScrollReveal>

              {/* <ScrollReveal
                animation="slightUp"
                duration={800}
                delay={800}
                easing="bouncy"
              >
                <div className="pt-4">
                <Link href={'/contact'}>
                  <Button
                    className="
                    bg-red-600 text-white hover:bg-red-700
                    px-6 py-4 text-base
                    sm:px-8 sm:py-5 sm:text-lg
                    md:px-10 md:py-6 md:text-xl
                    lg:px-12 lg:py-7 lg:text-2xl
                    rounded-md font-medium transition-all
                    " variant="default" size="lg"
                    >
                    Get Started
                  </Button>
                </Link>
                </div>
              </ScrollReveal> */}
            </div>

            <div
              className="hidden sm:block relative  w-1/2 md:w-5/12  
          h-[23rem]
          md:h-[27rem]
          lg:h-[30rem]"
            >
              <div
                className="absolute justify-start -translate-y-1/2 top-1/3 
            w-48
            sm:translate-x-[35%] sm:right-1/2 sm:bottom-8
            md:w-56
            lg:w-72 lg:translate-x-0 lg:right-auto"
              >
                <ScrollReveal
                  animation="fadeSlideLeft"
                  duration={1000}
                  delay={300}
                  easing="spring"
                >
                  <img src="/about/hero1.svg" alt="About Hero 1" />
                </ScrollReveal>
              </div>

              <div
                className="absolute justify-start bottom-0 
            w-48
            sm:right-1/2 sm:translate-x-[65%] sm:bottom-8
            md:w-56 
            lg:translate-x-0 lg:w-72 lg:left-24 lg:bottom-0
            xl:left-40 
            "
              >
                <ScrollReveal
                  animation="fadeSlideUp"
                  duration={1000}
                  delay={600}
                  easing="bouncy"
                >
                  <img src="/about/hero2.svg" alt="About Hero 2" />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sec 1 end */}
      <div className="p-6 md:p-16 max-w-2xl md:max-w-4xl mx-auto lg:max-w-full ">
        <StatsAndCommitments />
      </div>
      <BlueNWhite
        missionTitle={missionTitle}
        missionPoints={missionPoints}
        missionImage={missionImage}
        visionTitle={visionTitle}
        visionPoints={visionPoints}
        visionImage={visionImage}
      />
      <BlueNWhite
        missionTitle={valuesTitle}
        missionPoints={valuesPoints}
        missionImage={valuesImage}
        missionNumber={3}
        visionTitle={whoWeAreTitle}
        visionPoints={whoWeArePoints}
        visionImage={visionImage}
        visionNumber={4}
      />
      <BlueNWhite
        missionTitle={OurHistoryTitle}
        missionPoints={OurHistoryPoints}
        missionNumber={5}
        missionImage={valuesImage}
        visionHidden={1}
        visionTitle={whoWeAreTitle}
        visionPoints={whoWeArePoints}
        visionNumber={4}
        noPoints={1}
      />

      <div className="bg-black text-white py-10 px-4 text-center">
          <h2 className="text-3xl font-bold inline-block relative pb-2">
            The Minds Behind <span className="text-red-500">CAREERTRONIC</span>{" "}
            TEAM
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></div>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-xl leading-relaxed my-16">
            At Careertronic Global Services, our strength lies in our skilled
            and passionate team, dedicated to delivering innovative solutions
            for your success. From software developers and IT trainers to
            business consultants and education advisors, we bring expertise
            across all our services. We collaborate, innovate, and grow,
            ensuring cutting-edge solutions tailored to your needs. With a
            commitment to continuous learning, we stay ahead of industry trends
            to drive your success.
          </p>

          <div className="mt-6 flex justify-center w-[70vw]  h-[30vw] mx-auto mb-20">
            <Image
              src="/ourteam/leader.jpeg"
              alt="Gallery"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="mt-6">
            <Link href={"/ourteam"}>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Show All
              </button>
            </Link>
          </div>
        </div>

      <WhyChooseInnovetix />
    </>
  );
}

export default page;
