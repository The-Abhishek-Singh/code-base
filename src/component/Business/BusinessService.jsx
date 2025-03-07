"use client";

import React from "react";
import BusinessServiceCard from "../UI/Business/BusinessServiceCard";
import ScrollReveal from "../ScrollReveal";

const BusinessService = () => {
  // Section 1: Strategic Business Planning & Growth Consulting
  const strategicServices = [
    {
      title: "Market Research & Competitive Analysis",
      description:
        "Detailed market analysis, competitor benchmarking, and opportunity identification to position your business strategically in the market.",
      iconSrc: "/Business/MarketResearch.png",
      borderColor: "border-white-100",
    },
    {
      title: "Growth Strategy Development",
      description:
        "Customized growth roadmaps, revenue expansion strategies, market penetration plans, and customer acquisition frameworks.",
      iconSrc: "/Business/growth.png",
      borderColor: "border-white-100",
    },
    {
      title: "Operational Excellence",
      description:
        "Productivity optimization, workflow refinements, team structure development, and performance measurement frameworks.",
      iconSrc: "/Business/Operation.png",
      borderColor: "border-white-100",
    },
  ];

  // Section 2: Funding Support & Financial Consulting
  const financialServices = [
    {
      title: "Detailed Project Reports (DPR)",
      description:
        "Comprehensive business plans, financial projections, market analysis, and implementation roadmaps for funding applications.",
      iconSrc: "/Business/DPR.png",
      borderColor: "border-white-100",
    },
    {
      title: "Investor Presentation & Pitch Deck",
      description:
        "Compelling pitch decks, investor memorandums, value proposition statements, and funding requirement documentation.",
      iconSrc: "/Business/Pitch.png",
      borderColor: "border-white-100",
    },
    {
      title: "Venture Capital & Angel Investment Proposals",
      description:
        "Strategic investment documentation, valuation frameworks, equity structuring, and investment terms guidance.",
      iconSrc: "/Business/Invest.png",
      borderColor: "border-white-100",
    },
    {
      title: "Financial Modeling & Risk Management",
      description:
        "Robust financial models, sensitivity analysis, scenario planning, risk assessment, and mitigation strategies.",
      iconSrc: "/Business/Finance.png",
      borderColor: "border-white-100",
    },
  ];

  // Section 3: Business Process Optimization
  const processServices = [
    {
      title: "Work Flow Streaming",
      description:
        "Waste elimination, process streamlining, continuous improvement frameworks, and efficiency enhancement methodologies.",
      iconSrc: "/Business/workflow.png",
      borderColor: "border-white-100",
    },
    {
      title: "Resource Management",
      description:
        "Capacity planning, resource allocation frameworks, utilization optimization, and performance tracking systems.",
      iconSrc: "/Business/Resource.png",
      borderColor: "border-white-100",
    },
    {
      title: "Technology Integration",
      description:
        "Digital transformation roadmaps, tool selection guidance, implementation strategies, and technology adoption frameworks.",
      iconSrc: "/Business/integration.png",
      borderColor: "border-white-100",
    },
  ];
  // Section 4: Franchising & Expansion Strategies
  const franchisingServices = [
    {
      title: "Franchisee Model Development",
      description:
        "Designing a flexible and scalable franchise model that includes pricing, support systems, and brand guidelines.",
      iconSrc: "/Business/126.png",
      borderColor: "border-white-100",
    },
    {
      title: "Franchisee Recruitment & Onboarding",
      description:
        "Helping you find, recruit, and onboard the right franchisees to ensure business success across regions.",
      iconSrc: "/Business/127.png",
      borderColor: "border-white-100",
    },
    {
      title: "Franchise Operations & Support",
      description:
        "Creating a comprehensive support system for franchisees to maintain operational consistency and brand standards.",
      iconSrc: "/Business/128.png",
      borderColor: "border-white-100",
    },
  ];

  const ipoServices = [
    {
      title: "SME IPO Process & Preparation",
      description:
        "Assisting businesses in navigating the SME IPO process, financial strategy, compliance, and market readiness.",
      iconSrc: "/Business/129.png",
      borderColor: "border-white-100",
    },
    {
      title: "BSE SME Listing",
      description:
        "Guiding your company through the BSE SME listing process, helping with documentation, compliance, and investor engagement.",
      iconSrc: "/Business/130.png",
      borderColor: "border-white-100",
    },
    {
      title: "Investor Roadshows",
      description:
        "Organizing and executing investor roadshows to raise awareness and attract investors to your IPO.",
      iconSrc: "/Business/131.png",
      borderColor: "border-white-100",
    },
  ];
  // Section 6: B2B Collaborations & Strategic Partnerships
  const b2bServices = [
    {
      title: "Partnership Identification & Strategy",
      description:
        "Identifying and selecting the right strategic partners to support your business goals.",
      iconSrc: "/Business/132.png",
      borderColor: "border-white-100",
    },
    {
      title: "Business Expansion & Market Entry",
      description:
        "Developing go-to-market strategies for entering new regions and market segments.",
      iconSrc: "/Business/133.png",
      borderColor: "border-white-100",
    },
    {
      title: "Standard Operating Procedures (SOPs)",
      description:
        "Creating SOPs to streamline operations and ensure seamless collaboration between business partners.",
      iconSrc: "/Business/134.png",
      borderColor: "border-white-100",
    },
  ];

  // Section 7: HR Strategy & Talent Management
  const hrServices = [
    {
      title: "Organizational Design & Restructuring",
      description:
        "Building scalable organizational structures that support company-wide agility and innovation.",
      iconSrc: "/Business/135.png",
      borderColor: "border-white-100",
    },
    {
      title: "Talent Acquisition & Retention",
      description:
        "Executing strategies to hire, train, and retain top talent to boost workforce efficiency.",
      iconSrc: "/Business/136.png",
      borderColor: "border-white-100",
    },
    {
      title: "Employee Engagement & Development",
      description:
        "Developing initiatives that foster employee development, engagement, and productivity.",
      iconSrc: "/Business/137.png",
      borderColor: "border-white-100",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-black text-white">
      {/* Page Heading */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white font-[Poppins]">
          Our Business Consulting Services
        </h1>
      </div>

      {/* Section 1 */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">1</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Strategic Business Planning & Growth Consulting
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    A Well-Defined Strategy Is The Key To Navigating Today’s
                    Competitive Marketplace. We Help Businesses Formulate
                    Actionable Plans That Align With Their Vision And Goals. Our
                    Services Include:
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {strategicServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">2</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Funding Support & Financial Consulting
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    Access To Capital Is Crucial For Growth. We Structure
                    Funding Solutions For Challenging Ideas, Including Non-Fund
                    Options.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {financialServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">3</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Business Process Optimization
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    Leaner, more efficient, and growth-ready systems that reduce
                    recurring bottlenecks, eliminate wastage, and enhance
                    efficiency.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {processServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Section 4 - Franchising & Expansion Strategies */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">4</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Franchising & Expansion Strategies
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    For Businesses Looking To Scale Quickly, Franchising Can Be
                    An Effective Model. We Assist With Designing Franchise
                    Systems That Allow You To Expand Rapidly And Sustainably:
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {franchisingServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section 5 - IPO & Market Listing Support */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">5</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    IPO & Market Listing Support
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    Taking Your Business Public Is A Significant Milestone, And
                    We Provide Support Throughout The IPO Process:
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {ipoServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Section 6 - B2B Collaborations & Strategic Partnerships */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">6</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    B2B Collaborations & Strategic Partnerships
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    We Help You Forge Valuable Business Partnerships That Drive
                    Mutual Growth. Whether It’s Through Joint Ventures,
                    Strategic Alliances, Or Collaborations, We Provide:
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {b2bServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section 7 - HR Strategy & Talent Management */}
      <div className="mb-8 px-5">
        <div className="bg-gradient-to-b from-[#001F29] via-[#003D40] to-[#012B2D] pb-6 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-black p-6 rounded-t-lg w-full flex flex-col justify-center">
            <ScrollReveal animation="slideUp" duration={800} delay={200}>
              <div className="flex items-start">
                <span className="text-5xl font-bold text-red-600 mr-4">7</span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    HR Strategy & Talent Management
                  </h2>
                  <p className="mt-2 text-gray-400 text-base leading-snug max-w-3xl">
                    A Strong Organizational Structure And Effective Talent
                    Management Are Essential For Sustainable Growth. We Offer HR
                    Consulting Services That Cover:
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto w-full max-w-[1200px] px-6">
            {hrServices.map((service, index) => (
              <BusinessServiceCard
                key={index}
                {...service}
                backgroundColor="bg-black"
                className="p-6 md:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessService;
