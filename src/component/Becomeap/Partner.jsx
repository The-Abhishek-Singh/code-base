import React from "react";
import Image from "next/image";
import Card from "@/component/UI/Becomeap/Card";
import Part from "@/component/UI/Becomeap/Part";
import ScrollReveal from "../About/ScrollReveal";
const PartnerPage = () => {
  const steps = [
    {
      number: "01",
      title: "Inquiry & Consultation",
      description:
        "Get in touch with us by filling out the form or contacting our partnership team directly.We'll schedule an initial consultation to discuss your interests, goals, and the partnership opportunities available.",
      image: "/becomeap/2.png",
    },
    {
      number: "02",
      title: "Due Diligence & Evaluation",
      description:
        "We evaluate the potential partnership to ensure a good fit.\nWe review market dynamics, your experience, and the specific needs of your region or business.",
      image: "/becomeap/3.png",
    },
    {
      number: "03",
      title: "Partnership Agreement",
      description:
        "Once everything is aligned, we'll finalize the partnership agreement,which includes all the terms, responsibilities, and expectations from both sides.",
      image: "/becomeap/4.png",
    },
    {
      number: "04",
      title: "Training & Onboarding",
      description:
        "As our partner, you'll undergo an extensive onboarding process where you'll receive training on operations, marketing, and service delivery.\nThis ensures you're equipped to run your franchise or partnership smoothly from day one.",
      image: "/becomeap/5.png",
    },
    {
      number: "05",
      title: "Ongoing Support & Growth",
      description:
        "As a partner, you'll receive continuous operational support,marketing assistance, and access to our technology infrastructure.\nOur team will work closely with you to help your business grow,\nachieve profitability, and succeed.",
      image: "/becomeap/6.png",
    },
  ];
  const benefits = [
    {
      images: ["/becomeap/why1.png"],
      title: "Proven Business Model",
      description:
        "Our tested franchise model offers a scalable framework with years of experience in IT, education, and outsourcing, ensuring your success through clear processes, strategic guidance, and ongoing support.",
    },
    {
      images: ["/becomeap/why2.png"],
      title: "Comprehensive Support",
      description:
        "Receive extensive support including training, marketing assistance, operational guidance, and access to our CRM system to ensure smooth business operations.",
    },
    {
      images: ["/becomeap/why6.png"],
      title: "Strong Brand Recognition",
      description:
        "Leverage CGSPL's established reputation in IT training, education consulting, and outsourcing to quickly build credibility and attract clients in your local market.",
    },
    {
      images: ["/becomeap/why3.png"],
      title: "Diverse Revenue Streams",
      description:
        "Tap into multiple revenue channels: IT training, outsourcing services, industrial automation, education consulting, and corporate training & consulting.",
    },
    {
      images: ["/becomeap/why4.png"],
      title: "Scalable Growth Opportunities",
      description:
        "Start small and scale quickly with our flexible model, equipped with the tools and resources to help you expand locally or globally.",
    },
    {
      images: ["/becomeap/whyl.png"],
      title: "Access to Cutting-Edge Technologies",
      description:
        "Stay ahead with access to the latest technologies in AI, cloud computing, blockchain, and cybersecurity, positioning you in high-demand markets.",
    },
  ];
  return (
    <div className="w-full">
      {/* Partner Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:h-[88vh] flex items-center bg-black">
        <div className="relative w-full h-full">
          {/* Image with opacity - fixed to use position instead of layout for better responsive behavior */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Partnerbg.png"
              alt="Become a Partner"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
              priority
            />
          </div>
          {/* Dark vintage overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        {/* Content container - improved tablet layout */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 text-left text-white px-4 sm:px-8 lg:px-12 py-6 md:py-8 lg:py-12 flex flex-col justify-center">
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={0}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Become a Partner with
                <br />
                Careertronic Global Services(P)Ltd
              </h1>
            </ScrollReveal>
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={60}
            >
              <p className="text-xs sm:text-sm leading-relaxed">
                At Careertronic Global Services Pvt. Ltd. (CGSPL), we believe in
                the power of collaboration and mutual growth. By partnering with
                us, you gain access to a proven business model, cutting-edge
                services, and a globally recognized brand that is
                revolutionizing the world of IT training, education,
                outsourcing, and automation. Whether you're an entrepreneur
                looking to expand your business, an institution interested in
                offering world-class training programs, or a corporate entity
                seeking tailored outsourcing solutions, CGSPL offers a range of
                partnership opportunities that deliver long-term success.
              </p>
            </ScrollReveal>
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={150}
            >
              <button className="mt-6 lg:mt-8 px-6 py-3 lg:px-8 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md text-lg lg:text-xl self-start hover:bg-white hover:text-black transition">
                Become a Partner
              </button>
            </ScrollReveal>
          </div>
          {/* Partner image container - hidden on tablet screens (md breakpoint) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center py-4 sm:py-6 lg:py-0 sm:flex md:hidden lg:flex">
            <div className="relative w-[70%] sm:w-[60%] lg:w-[80%] aspect-[4/3]">
              <ScrollReveal
                animation="slideLeft"
                duration={800}
                easing="spring"
                delay={0}
              >
                <Image
                  src="/partnerpg.png"
                  height={800}
                  width={800}
                  alt="Partner Image"
                  objectFit="contain"
                  priority
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      {/* Success Section */}
      <div className="bg-black p-4 sm:p-6 lg:p-10">
        <div
          className="w-full flex flex-col md:flex-row items-center p-4 sm:p-6 lg:p-8 rounded-lg"
          style={{
            background:
              "linear-gradient(180deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 9%, 1) 45%, hsla(0, 0%, 0%, 1) 100%)",
          }}
        >
          <div className="w-full md:w-1/2 text-red-800 md:pr-6 lg:pr-12">
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="spring"
              delay={0}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-4">
                Our Commitment to{" "}
                <span className="text-red-500"> Your Success</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="spring"
              delay={80}
            >
              <p className="text-sm sm:text-base lg:text-xl text-white leading-relaxed">
                At CGSPL, we don't just offer a partnership; we offer a
                long-term relationship that fosters growth, innovation, and
                mutual success. We're committed to providing the tools,
                resources, and expertise you need to build a thriving business.
                By partnering with us, you're joining a global network of
                professionals dedicated to bridging skill gaps, driving digital
                transformation, and empowering individuals through education and
                technology.
              </p>
            </ScrollReveal>
          </div>
          {/* Success image container - fixed for tablet */}
          <div className="w-full md:w-1/2 flex justify-between items-center mt-6 md:mt-0">
            <div className="relative w-[80%] sm:w-[60%] md:w-[90%] h-48 sm:h-56 md:h-64 lg:h-72">
              <ScrollReveal
                animation="slideLeft"
                duration={800}
                easing="spring"
                delay={0}
              >
                <Image
                  src="/becomeap/success.png"
                  alt="Success Image"
                  height={300}
                  width={300}
                  // layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                  priority
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      {/* Why Partner Section - UPDATED with black background for title only */}
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-10">
        {" "}
        {/* Keeping the original gray background */}
        {/* Black background for title only */}
        <div className=" w-full mb-4 lg:mb-6">
          <ScrollReveal
            animation="slideDown"
            duration={800}
            easing="spring"
            delay={0}
          >
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-black text-center p-3 sm:p-4 lg:p-5">
              Why <span className="text-red-500">Partner</span> with Us?
            </h2>
          </ScrollReveal>
        </div>
        {/* Cards grid - improved spacing and alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="spring"
              delay={50 * index}
            >
              <Card key={index} {...benefit} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      {/* Partnering with Careertronic Section - UPDATED with black background for title only */}
      <div className="bg-white p-2 sm:p-4">
        {" "}
        {/* Keeping the original white background */}
        {/* Black background for title only */}
        <div className=" w-full mb-6 sm:mb-8 lg:mb-12 ">
          <ScrollReveal
            animation="slideDown"
            duration={800}
            easing="spring"
            delay={0}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center  p-3 sm:p-4 lg:p-5">
              Partnering with <span className="text-red-500">Careertronic</span>
            </h1>
          </ScrollReveal>
        </div>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col items-center">
          {steps.map((step, index) => (
            <ScrollReveal
            animation="slideLeft"
            duration={800}
            easing="spring"
            delay={50*index}
          >
            <Part key={index} {...step} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PartnerPage;
