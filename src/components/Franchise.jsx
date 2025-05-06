"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function BecomeAFranchise() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const faqs = [
    {
      question: "What makes Careertronic franchise opportunity different?",
      answer:
        "Careertronic offers a unique opportunity with multiple revenue streams across IT training, global education, BPO/KPO services, and industrial automation. Our proven business model and comprehensive support system sets us apart from other franchise opportunities.",
    },
    {
      question: "How much experience do I need?",
      answer:
        "While experience in the IT, education, or business sectors is beneficial, we provide comprehensive training and support. We look for motivated entrepreneurs with strong leadership skills and a passion for technology and education.",
    },
    {
      question: "What's the investment required?",
      answer:
        "Investment varies based on location and scale. Our model is designed to minimize upfront costs while maximizing profitability. During our consultation, we'll provide detailed information about the investment requirements.",
    },
    {
      question: "How long does it take to open after signing the agreement?",
      answer:
        "Most franchisees can launch their operations within 2-3 months after signing the agreement. This includes training, setup, and initial marketing preparations.",
    },
    {
      question: "What ongoing support can I expect?",
      answer:
        "We provide continuous operational and marketing support, including access to our CRM system, learning management platform, regular business reviews, marketing campaigns, and technical assistance.",
    },
  ];

  const benefits = [
    {
      title: "Low-Risk, High-Reward Opportunity",
      description:
        "With a proven business model and growing demand, franchisees can expect a strong ROI and a sustainable, profitable business.",
    },
    {
      title: "National and Global Reach",
      description:
        "The demand for IT skills, education consulting, and outsourcing solutions is expanding. Serve local, national, and international markets.",
    },
    {
      title: "Marketing & Advertising Support",
      description:
        "Leverage CGSPL's brand presence through digital campaigns, promotional materials, and corporate tie-ups to grow quickly.",
    },
    {
      title: "Comprehensive Operational Tools",
      description:
        "Access our CRM system, online learning platform, and e-commerce solutions to streamline operations and enhance customer experience.",
    },
  ];

  const steps = [
    {
      img: "/initial.jpg",
      title: "Initial Consultation",
      description:
        "Schedule a discussion to understand our franchise model and opportunities.",
    },
    {
      img: "/eval.jpg",
      title: "Application & Evaluation",
      description:
        "Submit your application and business plan for our team to review.",
    },
    {
      img: "/franch.jpg",
      title: "Franchise Agreement",
      description:
        "Once approved, review and sign the franchise agreement to begin your journey.",
    },
    {
      img: "/training.jpg",
      title: "Training & Setup",
      description:
        "Complete comprehensive training and prepare your location for launch.",
    },
    {
      img: "/go.jpg",
      title: "Grand Opening",
      description:
        "Launch your Careertronic franchise with our marketing and operational support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Become a Franchise Partner | Careertronic Global Services</title>
        <meta
          name="description"
          content="Join the Careertronic family and unlock your entrepreneurial potential with our proven franchise opportunity in IT training, global education, and business outsourcing services."
        />
      </Head>

      {/* Hero Section - Dark Background */}
      <section className="relative h-96 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/1920/500')" }}
        ></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-10">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Franchisee Opportunity with Careertronic
            </h1>
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="text-xl text-white max-w-2xl">
              Unlock Your Future with a Careertronic Franchise
            </p>
          </ScrollReveal>
          <ScrollReveal
            animation="slideLeft"
            duration={1000}
            easing="spring"
            delay={400}
            index={2}
            stagger={150}
          >
            <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg">
              Apply Now
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction Section - White Background */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center mb-12">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Are You Ready To Take The Next Step In Your Entrepreneurial
              Journey?
            </h2>
          </ScrollReveal>
          <ScrollReveal
            animation="slideLeft"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              At Careertronic Global Services Pvt. Ltd. (CGSPL), we offer a
              unique franchise opportunity that allows you to tap into the
              growing demand for high-quality IT training, industrial
              automation, global education, and business outsourcing services.
              Join us and become part of a global network that empowers
              businesses and individuals with innovative solutions and
              world-class services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section - Black Background */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal
              animation="slideRight"
              duration={1000}
              easing="spring"
              delay={100}
              index={0}
              stagger={150}
            >
              <h2 className="text-4xl font-bold text-red-500 mb-4">
                Why Choose Careertronic Global Services?
              </h2>
            </ScrollReveal>
            <ScrollReveal
              animation="slideRight"
              duration={1000}
              easing="spring"
              delay={250}
              index={1}
              stagger={150}
            >
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Partner with a proven business model that offers exceptional
                support and diverse revenue streams
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🏆",
                title: "Proven Business Model",
                description:
                  "CGSPL has developed a strong and scalable business model across IT training, global education, BPO/KPO outsourcing, and industrial automation, providing our franchise partners with the tools and resources to thrive.",
              },
              {
                emoji: "🎓",
                title: "Comprehensive Support",
                description:
                  "We provide extensive onboarding, ongoing operational reviews, marketing campaigns, and access to our advanced online learning platform, CRM system, and e-commerce tools.",
              },
              {
                emoji: "🌐",
                title: "Strong Brand Recognition",
                description:
                  "Leverage a globally recognized brand with a trusted name in IT services and global education sectors. Our reputation for excellence helps you build credibility and attract customers faster.",
              },
              {
                emoji: "💰",
                title: "Diverse Revenue Streams",
                description:
                  "Tap into multiple revenue sources including training fees, BPO/KPO services, global education services, and industrial automation training programs.",
              },
              {
                emoji: "📈",
                title: "Scalability & Growth",
                description:
                  "Our franchise model is designed for rapid scalability. Start small or expand quickly with the flexibility to grow at your own pace while minimizing upfront investment.",
              },
              {
                emoji: "📱",
                title: "Marketing Support",
                description:
                  "Leverage CGSPL's brand presence through digital marketing campaigns, promotional materials, and corporate tie-ups to attract customers and grow quickly.",
              },
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                animation="slideRight"
                duration={1000}
                easing="spring"
                delay={100 + index * 150}
                index={index}
                stagger={150}
              >
                <div className="bg-gray-900 p-8 rounded-xl shadow-lg h-full flex flex-col">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-red-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 flex-grow">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal
            animation="slideBottom"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-4xl font-bold text-red-600 mb-16 text-center">
              Multiple Revenue Opportunities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: "IT",
                title: "IT Training Services",
                description: "Offer cutting-edge courses in:",
                items: [
                  "Data Science & Artificial Intelligence",
                  "Cloud Computing & DevOps",
                  "Cybersecurity & Network Security",
                  "Web & Mobile Development",
                ],
              },
              {
                id: "EDU",
                title: "Global Education Services",
                description: "Generate revenue through:",
                items: [
                  "Career Counseling Services",
                  "Visa Processing & Documentation",
                  "Study Abroad Assistance",
                  "Job Placement Services",
                ],
              },
              {
                id: "BPO",
                title: "BPO/KPO Services",
                description: "Offer outsourced business solutions:",
                items: [
                  "Data Processing & Analytics",
                  "Customer Support Services",
                  "Recruitment & HR Outsourcing",
                  "Back-Office Operations",
                ],
              },
              {
                id: "IA",
                title: "Industrial Automation",
                description: "Specialized training programs in:",
                items: [
                  "Robotics & Automation",
                  "PLC & SCADA Systems",
                  "IoT & Industrial IoT",
                  "Industry 4.0 Technologies",
                ],
              },
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                animation="slideRight"
                duration={1000}
                easing="spring"
                delay={100 + index * 150}
                index={index}
                stagger={150}
              >
                <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                  <div className="h-16 w-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.id}
                  </div>
                  <h3 className="text-2xl font-bold text-red-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <ul className="space-y-2 text-gray-700">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply for Franchise Section */}
      <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-3xl font-bold mb-3 text-red-600">
              Apply for a Franchise
            </h2>
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="max-w-sm sm:max-w-2xl mx-auto text-gray-700">
              Interested in partnering with us? Here's how you can become a part
              of our franchise network.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:gap-6">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              animation="slideRight"
              duration={1000}
              easing="spring"
              delay={100 + index * 150}
              index={index}
              stagger={150}
            >
              <div className="flex flex-col items-center text-center max-w-xs">
                <Image src={step.img} width={80} height={80} alt={step.title} />
                <h3 className="text-xl font-semibold text-red-500 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
             {/* <Button>
              Apply Now
            </Button> */}
          </ScrollReveal>
        </div>
      </div>

      {/* Why Now Is the Right Time Section */}
      <section className="bg-black text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={100}
            index={0}
            stagger={150}
          >
            <h2 className="text-5xl font-bold text-red-500 uppercase">
              Why Now Is the Right Time to Invest
            </h2>
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={1000}
            easing="spring"
            delay={250}
            index={1}
            stagger={150}
          >
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              The global demand for skilled professionals in IT, industrial
              automation, and education services is rising sharply. As
              businesses seek digital-first solutions, CGSPL's services are more
              relevant than ever. Now is the perfect time to enter this
              high-growth industry and secure long-term profitability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-white text-black py-20 px-8 text-center">
        <ScrollReveal
          animation="slideleft"
          duration={1000}
          easing="spring"
          delay={100}
          index={0}
          stagger={150}
        >
          <h2 className="text-5xl font-bold text-red-500 uppercase">
            Join the CGSPL Family Today!
          </h2>
        </ScrollReveal>
        <ScrollReveal
          animation="slideRight"
          duration={1000}
          easing="spring"
          delay={250}
          index={1}
          stagger={150}
        >
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Start your entrepreneurial journey with CGSPL and be part of a
            global network reshaping the future of education, technology, and
            outsourcing.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slideRight"
          duration={1000}
          easing="spring"
          delay={400}
          index={2}
          stagger={150}
        >
          <div className="mt-8 flex justify-center gap-6">
            <button className="px-8 py-4 text-lg bg-red-500 text-white rounded-xl hover:bg-red-700">
              Inquire Now
            </button>
            <button className="px-8 py-4 text-lg border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white">
              Download Franchise Brochure
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
