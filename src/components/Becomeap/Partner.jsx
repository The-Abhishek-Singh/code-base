import React from "react";
import Image from "next/image";
import Card from "../UI/Becomeap/Card";
import Part from "../UI/Becomeap/Part";
import ScrollReveal from "@/components/ScrollReveal";
const PartnerPage = () => {
  const steps = [
    {
      number: "01",
      title: "Inquiry & Consultation",
      description:
        "Get in touch with us by filling out the form or contacting our partnership team directly. We'll schedule an initial consultation to discuss your interests, goals, and the partnership opportunities available.",
      image: "/becomeap/2.png",
    },
    {
      number: "02",
      title: "Due Diligence & Evaluation",
      description:
        "We evaluate the potential partnership to ensure a good fit. We review market dynamics, your experience, and the specific needs of your region or business.",
      image: "/becomeap/3.png",
    },
    {
      number: "03",
      title: "Partnership Agreement",
      description:
        "Once everything is aligned, we'll finalize the partnership agreement, which includes all the terms, responsibilities, and expectations from both sides.",
      image: "/becomeap/4.png",
    },
    {
      number: "04",
      title: "Training & Onboarding",
      description:
        "As our partner, you'll undergo an extensive onboarding process where you'll receive training on operations, marketing, and service delivery. This ensures you're equipped to run your franchise or partnership smoothly from day one.",
      image: "/becomeap/5.png",
    },
    {
      number: "05",
      title: "Ongoing Support & Growth",
      description:
        "As a partner, you'll receive continuous operational support, marketing assistance, and access to our technology infrastructure. Our team will work closely with you to help your business grow, achieve profitability, and succeed.",
      image: "/becomeap/6.png",
    },
  ];
  const benefits = [
    {
      images: ["/becomeap/why1.png"],
      title: "Proven Business Model",
      description:
        "With expertise in IT, education, and outsourcing, our  model ensures success through clear processes, strategic guidance, and ongoing support.",
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
      <div className="w-full">
        {/* Partner Section */}
        <div className="relative w-full min-h-screen flex items-center bg-black overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Partnerbg.png"
              alt="Become a Partner Background"
              fill
              className="opacity-70 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          {/* Content Container */}
          <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-16 2xl:px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1.2fr_1fr] gap-12 items-center">
              {/* Text Content */}
              <div className="text-white space-y-6 lg:space-y-10 xl:text-left min-w-[290px] ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                  Become a Partner with
                  <br />
                  Careertronic Global Services
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl opacity-90 leading-relaxed">
                  At Careertronic Global Services Pvt. Ltd. (CGSPL), we believe
                  in the power of collaboration and mutual growth. By partnering
                  with us, you gain access to a proven business model,
                  cutting-edge services, and a globally recognized brand that is
                  revolutionizing the world of IT training, education,
                  outsourcing, and automation.
                </p>
                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-lg lg:text-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                  Become a Partner
                </button>
              </div>
              {/* Partner Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] 2xl:w-[500px] aspect-square relative">
                  <Image
                    src="/partnerpg.png"
                    alt="Partner Image"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Success Section */}
        <div className="bg-black py-16">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-16 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1.2fr_1fr] gap-12 items-center bg-gradient-to-r from-black via-gray-800 to-black rounded-2xl p-8 lg:p-14">
              {/* Success Text */}
              <div className="text-white space-y-6 lg:space-y-10 min-w-[275px]">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                  Our Commitment to{" "}
                  <span className="text-red-500">Your Success</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl opacity-90 leading-relaxed">
                  At CGSPL, we don't just offer a partnership; we offer a
                  long-term relationship that fosters growth, innovation, and
                  mutual success. We're committed to providing the tools,
                  resources, and expertise you need to build a thriving
                  business.
                </p>
              </div>
              {/* Success Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] 2xl:w-[500px] aspect-square relative">
                  <Image
                    src="/becomeap/success.png"
                    alt="Success Image"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Partner Section - UPDATED with black background for title only */}
      <div className="bg-gray-100 p-4 sm:p-1 lg:p-10">
        {" "}
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
        <div
          className="grid grid-cols-1
         sm:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8"
        >
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
              delay={50 * index}
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