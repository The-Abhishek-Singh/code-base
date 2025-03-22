import React from "react";
import IconHover from "@/component/About/IconHover";
import { ScanEye, Goal, HandHeart } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/component/About/ScrollReveal";
function page() {
  return (
    <>
      {/* <div className='bg-black h-15'></div> */}
      <div className="bg-black min-h-screen py-12 font-poppins overflow-x-hidden">
        <div className="px-6 md:max-w-5xl lg:max-w-[88rem] mx-auto">
          <div className="flex flex-col gap-24">
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={50}
            >
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-10 shadow-2xl">
                {/* Content */}
                <div className="space-y-1 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-8 bg-red-500"></div>
                    <h2 className="!text-white text-xl font-semibold">About</h2>
                  </div>
                  <h1 className="!text-red-500 text-4xl md:text-5xl font-semibold tracking-tight pl-3">
                    Careertronics
                  </h1>
                </div>
                <div className="space-y-8 text-gray-100">
                  <p className="text-sm sm:text-lg ">
                    At Careertronic Global Services Pvt. Ltd. (CGSPL), we are
                    driven by a singular purpose: to empower businesses and
                    individuals to thrive in a fast-changing, interconnected
                    world. Founded with a vision to provide innovative,
                    high-quality services, we have grown into a trusted global
                    leader in Software Development, IT Training, Industrial
                    Automation Training, Corporate & Industrial Training, Global
                    Education, and Business Consulting. Our mission is simple
                    yet powerful: to enable sustainable growth and long-term
                    success for our clients by offering customized solutions
                    that are tailored to meet their specific goals. Whether
                    you're a business looking to drive digital transformation, a
                    professional seeking to enhance your skillset, or an
                    individual exploring global education opportunities, we are
                    here to guide you every step of the way. Through our
                    expertise and commitment to excellence, we are dedicated to
                    not only advancing career opportunities for individuals
                    across the globe but also helping organizations optimize
                    their operations, improve performance, and stay ahead of the
                    competition in an increasingly complex market.
                  </p>
                  <p className="text-lg hidden sm:block ">
                    Our mission is to enable sustainable growth and long-term
                    success for clients through tailored solutions. Whether
                    it&apos;s driving digital transformation, enhancing
                    professional skills, or exploring global education, we are
                    committed to guiding you every step of the way.
                  </p>
                  <p className="text-lg hidden md:block ">
                    With a focus on excellence, we help individuals advance
                    their careers and organizations optimize performance,
                    ensuring they stay competitive in an increasingly complex
                    market.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12">
              <ScrollReveal
                animation="slideUp"
                duration={700}
                easing="spring"
                delay={0}
                index={0}
                stagger={150}
              >
                <div className="text-center p-2">
                  <div className="flex justify-center items-center w-full h-auto mb-8">
                    <IconHover icon={ScanEye} />
                  </div>
                  <h1 className="font-poppins text-3xl text-red-500 font-bold mb-7">
                    OUR MISSION
                  </h1>
                  <div className="flex justify-center items-center w-full">
                    <p className="text-sm lg:text-base !leading-relaxed max-w-lg text-center md:text-start">
                      At Careertronic Global Services Pvt. Ltd. (CGSPL), we
                      empower businesses and individuals through technology,
                      training, and global opportunities. Our mission is to
                      provide cutting-edge software solutions, advanced
                      training, and world-class education services that drive
                      innovation and competitiveness. With a customer-centric
                      approach, we deliver tailored solutions that create
                      measurable impact, foster growth, and ensure long-term
                      success in an evolving digital landscape.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={700}
                easing="spring"
                delay={0}
                index={1}
                stagger={150}
              >
                <div className="text-center p-2">
                  <div className="flex justify-center items-center w-full h-auto mb-8">
                    <IconHover icon={Goal} />
                  </div>
                  <h1 className="font-poppins text-3xl text-red-500 font-bold mb-7">
                    OUR VISION&nbsp;
                  </h1>
                  <div className="flex justify-center items-center w-full">
                    <p className="text-sm lg:text-base !leading-relaxed max-w-lg text-center md:text-start">
                      At Careertronic Global Services Pvt. Ltd. (CGSPL), we
                      strive to be a global leader in IT solutions, training,
                      and education. Our vision is to drive digital
                      transformation, career development, and business success
                      by equipping individuals and organizations with the tools
                      and knowledge needed to thrive. Through continuous
                      innovation and excellence, we aim to create a future where
                      technology and education empower growth, opportunity, and
                      progress worldwide.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="slideUp"
                duration={700}
                easing="spring"
                delay={0}
                index={2}
                stagger={150}
              >
                <div className="text-center p-2">
                  <div className="flex justify-center items-center w-full h-auto mb-8">
                    <IconHover icon={HandHeart} />
                  </div>
                  <h1 className="font-poppins text-3xl text-red-500 font-bold mb-7 ">
                    OUR VALUES
                  </h1>
                  <div className="flex flex-col justify-center items-center w-full">
                    <p className="mb-2 text-sm lg:text-base !leading-relaxed max-w-md  text-center md:text-start">
                      At Careertronic Global Services Pvt. Ltd. (CGSPL), our
                      core values define our dedication to excellence,
                      innovation, and client success. We believe in fostering a
                      culture of Integrity, Customer-Centricity, Collaboration,
                      and Continuous Improvement. By upholding these values, we
                      ensure high-quality solutions, strong partnerships, and
                      sustainable impact, helping businesses and individuals
                      navigate the challenges of a dynamic, technology-driven
                      world.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 rounded-[32px] p-8 lg:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    <ScrollReveal
                      animation="slideDown"
                      duration={900}
                      easing="spring"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        What We <span className="text-red-500">Do</span>?
                      </h2>
                    </ScrollReveal>

                    <ScrollReveal
                      animation="slideLeft"
                      duration={800}
                      delay={200}
                      easing="smooth"
                    >
                      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        Our team holds a decade of experience in guiding your
                        overseas career. Careertronics stands as extraordinary
                        overseas portal, providing invaluable assistance to
                        professional navigating the complexities of
                        international employment.
                      </p>
                    </ScrollReveal>

                    <ScrollReveal
                      animation="slideLeft"
                      duration={800}
                      delay={400}
                      easing="bouncy"
                    >
                      <p className="text-gray-200 hidden md:block text-base md:text-lg leading-relaxed">
                        Careertronic Global Services provides a diverse range of
                        solutions for businesses, professionals, and students
                        worldwide. We specialize in software development and
                        export, delivering customized solutions to enhance
                        efficiency and growth. Our IT and industrial automation
                        training programs help professionals and businesses stay
                        ahead in technology and manufacturing. We also offer
                        corporate and industrial training to boost employee
                        performance and leadership skills. Through our global
                        education services, we connect students with top
                        institutions for international study and career
                        opportunities. Additionally, our business consulting
                        services provide expert guidance to navigate challenges,
                        optimize operations, and drive sustainable success.
                      </p>
                    </ScrollReveal>
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 hidden lg:flex justify-center items-center">
                    <ScrollReveal
                      animation="slideUp"
                      duration={1200}
                      delay={300}
                      easing="gentle"
                      className=" w-full"
                    >
                      <div className="relative w-full max-w-md h-[30rem]">
                        <Image
                          objectFit="contain"
                          layout="fill"
                          src="/about/what.jpg"
                          alt="learner"
                        />
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 rounded-[32px] p-8 lg:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  {/* Image Section */}
                  <div className="flex-1 hidden lg:flex justify-center items-center">
                    <ScrollReveal
                      animation="slideRight"
                      duration={1000}
                      easing="bouncy"
                      className=" w-full"
                    >
                      <div className="relative w-full max-w-md h-[30rem]">
                        <Image
                          objectFit="contain"
                          layout="fill"
                          src="/about/why.jpg"
                          alt="learner"
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    <ScrollReveal
                      animation="slideUp"
                      duration={800}
                      delay={200}
                      easing="spring"
                    >
                      <h2 className="text-3xl md:text-3xl font-bold text-white">
                        Why Should You{" "}
                        <span className="text-red-500">Choose Us</span>?
                      </h2>
                    </ScrollReveal>

                    <ScrollReveal
                      animation="fadeSlideLeft"
                      duration={700}
                      delay={350}
                      easing="gentle"
                    >
                      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        Our expert team delivers tailored solutions in software
                        development, industrial automation, IT training, and
                        business consulting. We focus on value-driven strategies
                        that address immediate needs while ensuring long-term
                        success. With a proven track record across industries,
                        we are committed to quality, innovation, and exceeding
                        client expectations.
                      </p>
                    </ScrollReveal>

                    <ScrollReveal
                      animation="fadeSlideLeft"
                      duration={700}
                      delay={500}
                      easing="smooth"
                    >
                      <p className="text-gray-200 hidden md:block text-base md:text-lg leading-relaxed">
                        Careertronic Global Services operates on a global scale,
                        offering innovative and high-quality solutions that meet
                        international standards. With a strong presence in
                        multiple countries, we cater to businesses,
                        professionals, and students worldwide, ensuring they
                        receive world-class services designed to help them stay
                        ahead in an interconnected world. Our extensive network
                        allows us to deliver cutting-edge solutions tailored to
                        the unique needs of various industries, enabling our
                        clients to thrive in competitive global markets.
                      </p>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 rounded-[32px] p-8 lg:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  {/* Content Section with staggered animations */}
                  <div className="flex-1 space-y-6">
                    <ScrollReveal
                      animation="fadeSlideLeft"
                      duration={600}
                      easing="spring"
                      index={0}
                      stagger={150}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our Exceptional{" "}
                        <span className="text-red-500">Team</span>!
                      </h2>
                    </ScrollReveal>

                    {/* First paragraph with staggered animation */}
                    <ScrollReveal
                      animation="fadeSlideLeft"
                      duration={600}
                      easing="spring"
                      index={1}
                      stagger={150}
                    >
                      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        At Careertronic Global Services, our greatest asset is
                        our exceptional team of passionate, skilled, and
                        experienced professionals, each dedicated to delivering
                        innovative solutions that drive your success. From
                        software developers and IT trainers to business
                        consultants and global education advisors, we have a
                        diverse group of experts across every area of our
                        service offerings, ensuring that you receive the highest
                        level of expertise, care, and support.
                      </p>
                    </ScrollReveal>

                    {/* Second paragraph with staggered animation */}
                    <ScrollReveal
                      animation="fadeSlideLeft"
                      duration={600}
                      easing="spring"
                      index={2}
                      stagger={150}
                    >
                      <p className="text-gray-200 text-base hidden md:block md:text-lg leading-relaxed">
                        Our team thrives on collaboration, constantly sharing
                        insights, ideas, and best practices to create solutions
                        that are customized to your unique needs. We are
                        committed to fostering a culture of continuous learning
                        and growth, staying ahead of industry trends to deliver
                        the most relevant, cutting-edge services to our clients.
                      </p>
                    </ScrollReveal>
                  </div>

                  {/* Image Section with unique animation */}
                  <div className="flex-1 hidden lg:flex justify-center items-center">
                    <ScrollReveal
                      animation="slideDown"
                      duration={1000}
                      delay={300}
                      easing="gentle"
                      className="w-full"
                    >
                      <div className="relative w-full max-w-md h-[30rem]">
                        <Image
                          objectFit="contain"
                          layout="fill"
                          src="/about/what.jpg"
                          alt="learner"
                        />
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
