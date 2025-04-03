"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function ShippingDeliveryPolicy() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Shipping & Delivery Policy | Careertronic Global Services</title>
        <meta
          name="description"
          content="Our shipping and delivery policy for digital products and services"
        />
      </Head>

      <header className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 h-[400px] flex items-center justify-center">
        {/* Single image only - replaces all text elements */}
        <div
          ref={addToRefs}
          className="relative z-10 w-full h-full opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <img
            src="/Ship.png"
            alt="Shipping & Delivery Policy"
            className="w-full  object-contain"
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <p className="text-lg leading-relaxed mb-8">
            At Careertronic Global Services, we provide custom software
            development services designed to meet the unique needs of our
            clients. As our services are primarily digital in nature, our
            Shipping and Delivery Policy outlines how we deliver the final
            products, including software applications, code, documentation, and
            other related deliverables, to our clients. By engaging our
            services, you agree to the terms and conditions set forth in this
            policy.
          </p>
        </section>

        {/* Delivery of Digital Products */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">
                1. Delivery of Digital Products
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <p className="mb-6">
            Since the services we provide are digital (software applications,
            websites, mobile apps, code, etc.), there is no physical shipping
            involved. Instead, the delivery of the final products will be done
            through secure, digital means.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600 hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                a. Delivery Methods
              </h3>
              <p className="mb-4">
                Deliverables will be provided to the Client using one of the
                following methods:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <strong>Secure File Transfer:</strong> We may provide access
                    to a secure file-sharing platform (such as Dropbox, Google
                    Drive, or a similar service) where the final deliverables
                    can be downloaded.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <strong>Project Management Platforms:</strong> If the
                    project is being tracked via a project management tool (such
                    as Jira, Trello, or Asana), we will upload final files or
                    deliverables directly to the tool for download.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <strong>Direct Email or FTP:</strong> If applicable, we may
                    send the final deliverables via email or FTP (File Transfer
                    Protocol) directly to the Client.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <strong>Code Repository Access:</strong> For software
                    projects, we may grant the Client access to the project's
                    source code repository (e.g., GitHub, Bitbucket) to download
                    the code.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600 hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                b. Delivery Timeline
              </h3>
              <p className="mb-4">
                The estimated delivery timeline for each project will be
                specified in the Statement of Work (SOW) or Project Contract
                between Careertronic Global Services and the Client.
              </p>
              <p className="mb-4">
                Delivery timelines depend on the complexity and scope of the
                project. We strive to meet agreed-upon delivery dates; however,
                delivery may be subject to delays due to unforeseen
                circumstances (such as client delays, technical challenges, or
                external dependencies).
              </p>
              <p>
                Upon completion of each project phase, we will notify the Client
                and provide them with the deliverables within the agreed
                timeframe, or as otherwise specified in the contract.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">2. Deliverables</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <p className="mb-6">
            Deliverables may include, but are not limited to:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Software Products: Web applications, mobile applications, desktop software, APIs, or any other custom-developed software.",
              "Source Code: The underlying code that powers the application or software.",
              "Design Assets: UI/UX designs, wireframes, mockups, and other design materials.",
              "Documentation: Technical documentation, user manuals, API documentation, and other relevant documents that accompany the software.",
              "Licenses and Keys: Software licenses, access credentials, or activation keys for third-party tools, APIs, or services used during development.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 rounded-lg hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300 border border-gray-800 hover:border-red-500/50"
              >
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6">
            All deliverables will be provided in the format agreed upon in the
            Statement of Work (SOW) or contract, unless otherwise discussed.
          </p>
        </section>

        {/* Client Responsibilities */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">
                3. Client Responsibilities Upon Delivery
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <p className="mb-6">
            Upon receipt of deliverables, the Client is responsible for the
            following:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Review of Deliverables",
                content:
                  "The Client should review the final deliverables to ensure they meet the agreed-upon requirements, features, and quality standards.",
              },
              {
                title: "Feedback and Approval",
                content:
                  "If the Client requires any modifications or revisions, they must provide feedback within the agreed-upon review period. The Client's approval is required for the formal completion of the project.",
              },
              {
                title: "Testing and Quality Assurance",
                content:
                  "While Careertronic Global Services conducts extensive testing during development, the Client should conduct their own testing and quality assurance checks. Any bugs or issues identified during testing should be communicated to Careertronic Global Services promptly for resolution.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Late Deliveries */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">
                4. Late Deliveries and Delays
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <p className="mb-6">
            While we make every effort to deliver your project on time, delays
            may occur due to various reasons, including:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Client Delays",
                content:
                  "Delays in receiving feedback, approval, or resources from the Client (e.g., access to third-party accounts, content, etc.) can impact project timelines.",
              },
              {
                title: "Technical Challenges",
                content:
                  "Unforeseen technical challenges or issues that arise during development may cause delays.",
              },
              {
                title: "External Dependencies",
                content:
                  "If the project relies on third-party services, tools, or resources (e.g., API integrations, licensing approvals, etc.), any delays from external providers can affect our delivery timeline.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20"
              >
                <h3 className="text-lg font-semibold mb-3 text-red-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-black p-6 rounded-lg border border-red-900/50">
            <p>
              If a delay occurs, Careertronic Global Services will notify the
              Client immediately and provide an updated estimated delivery date.
              We will make every effort to minimize delays and communicate
              effectively throughout the process.
            </p>
          </div>
        </section>

        {/* Final Acceptance */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">
                5. Final Acceptance and Ownership of Deliverables
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Final Acceptance",
                content:
                  "The Client must formally accept the final project deliverables as outlined in the project agreement. The acceptance period typically ranges from 7 to 14 days from the delivery date.",
              },
              {
                title: "Ownership",
                content:
                  "Upon final acceptance and receipt of full payment, ownership of the deliverables (including software, code, and intellectual property rights) will be transferred to the Client as specified in the Terms and Conditions or Service Agreement.",
              },
              {
                title: "License to Use",
                content:
                  "If applicable, the Client will be granted a license to use third-party tools, libraries, or software integrated into the project, subject to the terms and conditions set by those third-party providers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support and Maintenance */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">6. Support and Maintenance</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <p className="mb-6">
            After the project is delivered and accepted, Careertronic Global
            Services may offer ongoing support and maintenance services as part
            of the contract or through a separate agreement. This can include:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Bug Fixes: Correcting any defects or issues discovered after delivery.",
              "Updates and Enhancements: Updating the software for new features, security patches, or other improvements as agreed upon.",
              "Training and Documentation: Providing further training or updates to documentation if needed.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 rounded-lg hover:bg-gradient-to-br hover:from-gray-900 hover:to-red-900/20 transition-all duration-300 border border-gray-800 hover:border-red-500"
              >
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6">
            Support and maintenance terms, including pricing and scope, will be
            outlined in a separate Service Level Agreement (SLA) if applicable.
          </p>
        </section>

        {/* Delivery of Updates */}
        <section
          ref={addToRefs}
          className="mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">
                7. Delivery of Updates and Enhancements
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Post-Launch Updates
              </h3>
              <p>
                Careertronic Global Services may provide updates or enhancements
                to the software following delivery. These updates can include
                performance improvements, new features, security patches, or bug
                fixes, and will be delivered in the same way as the initial
                deliverables.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Version Control
              </h3>
              <p>
                For ongoing projects, Careertronic Global Services may use
                version control systems (e.g., Git) to manage changes and
                updates. The Client will be notified when a new version or
                update is available for download.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section
          ref={addToRefs}
          className="opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">8. Contact Information</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h2>
          </div>

          <p className="mb-8">
            If you have any questions regarding the delivery of your project or
            need assistance with the process, please feel free to contact us at:
          </p>

          <div className="bg-gradient-to-r from-red-900/30 to-black p-8 rounded-lg border border-red-900/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  Careertronic Global Services
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 mt-1 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>Email: contact@careertronics.in</span>
                  </p>
                  <p className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 mt-1 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span>Phone: +918602755547</span>
                  </p>
                  <p className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 mt-1 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>
                      Address: E-108, Sec 1, Devendra Nagar, Raipur, CG
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="mb-4 text-lg">
                    By engaging Careertronic Global Services for your software
                    development needs, you acknowledge and agree to the terms
                    outlined in this Shipping and Delivery Policy.
                  </p>
                  <p className="text-red-400">
                    If you have any questions or concerns, please contact us
                    prior to agreeing to the terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
