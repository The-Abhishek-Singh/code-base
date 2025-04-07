import React from "react";
// import { Button } from "@/components/ui/button";
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
    "Our mission is to harness the power of cutting-edge technology and innovative strategies to provide sustainable solutions that drive growth, enhance productivity, and improve well-being.",
    "At Careertronic, we believe in blending traditional values with modern advancements to create a future that benefits everyone.",
  ];

  const missionImage = "/about/mission.svg";

  const visionTitle = "Our Vision";
  const visionPoints = [
    "To be a global leader in providing innovative and transformative solutions across industries, helping businesses grow, and empowering individuals to take charge of their health and success.",
    "We envision a world where technology seamlessly integrates with everyday life, creating opportunities, fostering meaningful relationships, and improving quality of life.",
  ];

  const visionImage = "/about/vision.svg";
  const valuesTitle = "Our Values";
  const valuesPoints = [
    "Innovation: Constantly evolving to incorporate the latest technology and advancements in our solutions.",
    "Excellence: Delivering the highest quality service and results for our clients.",
    "Integrity: Building trust through transparency, reliability, and ethical practices.",
    "Customer-Centric: Understanding our clients' needs and delivering solutions that are tailored to their specific goals and challenges.",
    "Collaboration: Working together with clients, partners, and stakeholders to achieve shared success.",
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
                  At Careertronics, we are a forward-thinking,
                  results-driven company that strives to create impactful
                  solutions for businesses and individuals.
                </p>
              </ScrollReveal>

              <ScrollReveal
                animation="slightUp"
                duration={800}
                delay={800}
                easing="bouncy"
              >
                <div className="pt-4">
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
                </div>
              </ScrollReveal>
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
      <WhyChooseInnovetix />
    </>
  );
}

export default page;
