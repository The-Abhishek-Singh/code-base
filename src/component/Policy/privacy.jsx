
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      // Update active section
      const sections = document.querySelectorAll('.policy-section');
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
      
      // Show/hide scroll button
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'information-collected', title: '1. Information We Collect' },
    { id: 'information-usage', title: '2. How We Use Your Information' },
    { id: 'data-sharing', title: '3. Data Sharing and Disclosure' },
    { id: 'data-security', title: '4. Data Security' },
    { id: 'data-retention', title: '5. Data Retention' },
    { id: 'your-rights', title: '6. Your Rights and Choices' },
    { id: 'third-party', title: '7. Third-Party Links' },
    { id: 'international', title: '8. International Data Transfers' },
    { id: 'children', title: '9. Children\'s Privacy' },
    { id: 'changes', title: '10. Changes to This Privacy Policy' },
    { id: 'contact', title: '11. Contact Us' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Head>
        <title>Privacy Policy | Careertronic Global Services</title>
        <meta
          name="description"
          content="Careertronic Global Services Privacy Policy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`pt-24 md:pt-32 container mx-auto px-4 flex flex-col md:flex-row gap-8 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Sidebar Navigation */}
        <nav className="md:w-1/4 lg:w-1/5 md:sticky top-32 self-start hidden md:block">
          <div className="bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-80 transform transition-all duration-500 hover:shadow-red-900/20 hover:border-red-900/30">
            <h2 className="text-xl font-bold mb-12 text-red-600 relative overflow-hidden">
              Table of Contents
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
            </h2>

            <div className="space-y-1 relative">
              {/* Vertical Pipeline/Stepper */}
              <div className="absolute left-4 top-2 bottom-2 w-1 bg-gradient-to-b from-red-900/30 via-red-600/20 to-red-900/30 rounded-full"></div>

              {sections.map((section, index) => (
                <div key={section.id} className="relative">
                  {/* Point slider on pipeline */}
                  <div
                    className={`absolute left-4 top-5 w-4 h-4 rounded-full transform -translate-x-1.5 transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-red-600 shadow-md shadow-red-500/50 scale-125"
                        : "bg-gray-700 hover:bg-red-800"
                    }`}
                  ></div>

                  <a
                    href={`#${section.id}`}
                    className={`flex items-center pl-10 py-3 my-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-red-900/50 to-transparent text-white font-medium shadow-md"
                        : "text-gray-300 hover:bg-gray-800/50 hover:translate-x-1"
                    }`}
                  >
                    <span className="relative z-10">{section.title}</span>
                    {activeSection !== section.id && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-900/30 group-hover:w-full transition-all duration-300"></span>
                    )}
                  </a>

                  {/* Gap between items (except the last one) */}
                  {index < sections.length - 1 && <div className="h-64"></div>}
                </div>
              ))}
            </div>
          </div>
        </nav>
        {/* Main Content */}
        <main className="md:w-3/4 lg:w-4/5">
          <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 shadow-xl border border-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-95 transform transition-all duration-500 hover:shadow-red-900/10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-600 relative inline-block">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-red-600 rounded-full"></span>
            </h1>
            <p className="text-gray-400 mb-6">
              Effective Date: 10th December 2024
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="mb-8 text-lg leading-relaxed">
                At Careertronic Global Services, we are committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                website and software services. By using our services, you agree
                to the collection and use of your information in accordance with
                this policy.
              </p>

              {/* Section 1 */}
              <section
                id="information-collected"
                className="policy-section mb-4 transform transition-all duration-500 hover:translate-x-1"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    1
                  </span>
                  Information We Collect
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p className="mb-4">
                  We collect the following types of information when you
                  interact with our services:
                </p>
                <div className="ml-4 space-y-4">
                  <div className="p-4 bg-black bg-opacity-50 rounded-lg border-l-4 border-red-600 shadow-md transform transition-all duration-300 hover:translate-x-2 hover:bg-opacity-60 hover:shadow-red-900/20">
                    <h3 className="font-bold mb-2 text-red-500">
                      Personal Information
                    </h3>
                    <p>
                      This includes any data that identifies you or could
                      reasonably be used to identify you. Examples include, but
                      are not limited to, your name, email address, phone
                      number, and payment details.
                    </p>
                  </div>
                  <div className="p-4 bg-black bg-opacity-50 rounded-lg border-l-4 border-red-600 shadow-md transform transition-all duration-300 hover:translate-x-2 hover:bg-opacity-60 hover:shadow-red-900/20">
                    <h3 className="font-bold mb-2 text-red-500">Usage Data</h3>
                    <p>
                      We collect information about how our services are accessed
                      and used, including your IP address, browser type, pages
                      visited, time spent on our website, and other diagnostic
                      data. This helps us improve the functionality of our
                      services.
                    </p>
                  </div>
                  <div className="p-4 bg-black bg-opacity-50 rounded-lg border-l-4 border-red-600 shadow-md transform transition-all duration-300 hover:translate-x-2 hover:bg-opacity-60 hover:shadow-red-900/20">
                    <h3 className="font-bold mb-2 text-red-500">
                      Cookies and Tracking Technologies
                    </h3>
                    <p>
                      We use cookies and similar tracking technologies to track
                      activity on our website and store certain information.
                      Cookies are small data files stored on your device that
                      help us recognize you when you return to our site. You can
                      set your browser to refuse cookies, but this may limit
                      your ability to use some features of our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section
                id="information-usage"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    2
                  </span>
                  How We Use Your Information
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p className="mb-4">
                  We use the information we collect in the following ways:
                </p>
                <ul className="ml-6 list-none space-y-3">
                  {[
                    "To provide and improve our services: This includes maintaining and enhancing our software applications, troubleshooting issues, and developing new features.",
                    "To communicate with you: We may use your contact information to respond to inquiries, send important updates, or notify you about changes to our services.",
                    "To personalize your experience: We may use your data to customize our offerings and content to suit your preferences.",
                    "For billing and payment processing: If you make purchases or subscribe to our services, we will use your payment information to process transactions securely.",
                    "For legal compliance and security purposes: We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.",
                  ].map((item, index) => (
                    <li key={index} className="pl-6 relative group">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-red-600 transform transition-all duration-300 group-hover:scale-125 group-hover:bg-red-500"></div>
                      <div className="transition-all duration-300 group-hover:translate-x-1">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 3 */}
              <section
                id="data-sharing"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    3
                  </span>
                  Data Sharing and Disclosure
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <div className="ml-4 space-y-4">
                  <div className="p-4 bg-black bg-opacity-40 rounded-lg shadow-md transition-all duration-300 hover:bg-opacity-50 hover:shadow-red-900/10 border border-transparent hover:border-gray-800">
                    <h3 className="font-bold mb-2 text-red-500">
                      Service Providers
                    </h3>
                    <p>
                      We may share your information with third-party vendors and
                      service providers who assist us in operating our business,
                      such as hosting services, payment processors, and
                      marketing partners. These service providers are only
                      permitted to use your information as necessary to perform
                      their functions and must protect your information as we
                      do.
                    </p>
                  </div>
                  <div className="p-4 bg-black bg-opacity-40 rounded-lg shadow-md transition-all duration-300 hover:bg-opacity-50 hover:shadow-red-900/10 border border-transparent hover:border-gray-800">
                    <h3 className="font-bold mb-2 text-red-500">
                      Business Transfers
                    </h3>
                    <p>
                      If Careertronic Global Services is involved in a merger,
                      acquisition, or asset sale, your personal information may
                      be transferred as part of that transaction. We will notify
                      you if such a transfer occurs and you will have the option
                      to delete your data from our systems.
                    </p>
                  </div>
                  <div className="p-4 bg-black bg-opacity-40 rounded-lg shadow-md transition-all duration-300 hover:bg-opacity-50 hover:shadow-red-900/10 border border-transparent hover:border-gray-800">
                    <h3 className="font-bold mb-2 text-red-500">
                      Legal Compliance
                    </h3>
                    <p>
                      We may disclose your information if required to do so by
                      law or in response to valid legal requests from public
                      authorities (e.g., a court or government agency).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section
                id="data-security"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1 p-5 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    4
                  </span>
                  Data Security
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p>
                  We take the security of your information seriously and
                  implement industry-standard measures to protect it from
                  unauthorized access, alteration, or disclosure. These measures
                  include encryption, firewalls, secure server infrastructure,
                  and regular security audits. However, no method of
                  transmission over the Internet or method of electronic storage
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 5 */}
              <section
                id="data-retention"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1 p-5 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    5
                  </span>
                  Data Retention
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p>
                  We will retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law. Once your data is no longer needed, we will
                  take reasonable steps to delete or anonymize it.
                </p>
              </section>

              {/* Section 6 */}
              <section
                id="your-rights"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    6
                  </span>
                  Your Rights and Choices
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Access and Correction",
                      content:
                        "You can request access to the personal information we hold about you and request corrections if the information is inaccurate or incomplete.",
                    },
                    {
                      title: "Deletion",
                      content:
                        "You can request that we delete your personal information, subject to certain exceptions (e.g., if we are required to retain it for legal reasons).",
                    },
                    {
                      title: "Opt-out of Marketing",
                      content:
                        "If you no longer wish to receive marketing emails or other communications from us, you can unsubscribe by following the instructions in the email or by contacting us directly.",
                    },
                    {
                      title: "Withdraw Consent",
                      content:
                        "If we are processing your information based on your consent, you have the right to withdraw that consent at any time.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-black bg-opacity-30 rounded-lg border border-gray-800 group hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10 hover:translate-y-px"
                    >
                      <h3 className="font-bold mb-2 text-red-500 group-hover:text-red-400">
                        {item.title}
                      </h3>
                      <p>{item.content}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at the
                  details provided below.
                </p>
              </section>

              {/* Section 7 */}
              <section
                id="third-party"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1 p-5 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    7
                  </span>
                  Third-Party Links
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p>
                  Our website and software may contain links to third-party
                  sites or services that are not operated by us. We are not
                  responsible for the privacy practices of these third parties.
                  We encourage you to review the privacy policies of any
                  third-party websites you visit.
                </p>
              </section>

              {/* Section 8 */}
              <section
                id="international"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1 p-5 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    8
                  </span>
                  International Data Transfers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p>
                  As Careertronic Global Services operates globally, your
                  personal data may be transferred to and processed in countries
                  outside your own, including countries that may not have data
                  protection laws as comprehensive as those in your country. By
                  using our services, you consent to such transfers.
                </p>
              </section>

              {/* Section 9 */}
              <section
                id="children"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1 p-5 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    9
                  </span>
                  Children's Privacy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p>
                  Our services are not intended for individuals under the age of
                  16, and we do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe that we
                  have collected personal information about a child under 16,
                  please contact us so that we can take appropriate action.
                </p>
              </section>

              {/* Section 10 */}
              <section
                id="changes"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1 p-5 rounded-lg bg-black bg-opacity-20 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    10
                  </span>
                  Changes to This Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated effective
                  date. We encourage you to review this Privacy Policy
                  periodically for any changes.
                </p>
              </section>

              {/* Section 11 */}
              <section
                id="contact"
                className="policy-section mb-10 transform transition-all duration-500 hover:translate-x-1"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center group relative overflow-hidden">
                  <span className="inline-block w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-all duration-300 group-hover:scale-110">
                    11
                  </span>
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-700 group-hover:w-full"></span>
                </h2>
                <p className="mb-6">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at:
                </p>
                <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-gray-800 shadow-lg transition-all duration-500 hover:shadow-red-900/20 hover:border-red-900/30">
                  <h3 className="text-xl font-bold mb-4 text-red-600">
                    Careertronic Global Services
                  </h3>
                  <div className="space-y-5">
                    {[
                      {
                        icon: (
                          <svg
                            className="w-5 h-5 text-red-600 mt-1 mr-3 transition-transform duration-300 group-hover:rotate-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        ),
                        label: "Email:",
                        value: "contact@careertronics.in",
                        href: "mailto:contact@careertronics.in",
                      },
                      {
                        icon: (
                          <svg
                            className="w-5 h-5 text-red-600 mt-1 mr-3 transition-transform duration-300 group-hover:rotate-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        ),
                        label: "Phone:",
                        value: "+91 8602 755 547",
                        href: "tel:+918602755547",
                      },
                      {
                        icon: (
                          <svg
                            className="w-5 h-5 text-red-600 mt-1 mr-3 transition-transform duration-300 group-hover:rotate-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ),
                        label: "Address:",
                        value: "E-108, Sec 1, Devendra Nagar, Raipur, CG",
                        href: null,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start group p-2 rounded-md transition-all duration-300 hover:bg-gray-900"
                      >
                        {item.icon}
                        <div className="transition-all duration-300 group-hover:translate-x-1">
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-red-600 transition-colors relative group-hover:font-medium"
                            >
                              {item.value}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          ) : (
                            <p className="text-white group-hover:font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="mt-10 text-center">
                <p className="text-gray-400">
                  Thank you for trusting Careertronic Global Services with your
                  information.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer
        className={`mt-8 bg-gray-900 py-8 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Careertronic Global Services. All
            rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`relative overflow-hidden group ${
                    index === 1 ? "text-white" : "text-gray-400"
                  } hover:text-red-600 transition-colors duration-300`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 focus:outline-none transform ${
          showScrollButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } hover:scale-110`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}