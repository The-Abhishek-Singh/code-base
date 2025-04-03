
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function TermsAndConditions() {  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = null;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Head>
        <title>Terms and Conditions | Careertronic Global Services</title>
        <meta
          name="description"
          content="Terms and Conditions for Careertronic Global Services"
        />
      </Head>

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 pr-8 mb-8 md:mb-0 sticky top-20 self-start">
          <nav className="bg-gray-950 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl w-60 mr-40 font-semibold mb-4 text-red-500 border-b border-gray-700 pb-2">
              Table of Contents
            </h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-red-600 text-white"
                        : "hover:bg-gray-700 hover:text-red-400"
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className=''>
          <div className="md:w-3/4">
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-500">
                Introduction
              </h2>
              <p className="mb-4">
                These Terms and Conditions ("Agreement") govern the use of
                services provided by Careertronic Global Services ("we", "us",
                "our"), a software development company. By accessing or using
                our website or services, you ("Client", "you", "your") agree to
                comply with and be bound by this Agreement.
              </p>
              <p className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-600">
                If you do not agree to these Terms and Conditions, please do not
                use our services.
              </p>
            </section>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-500">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-500">
                Contact Information
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Careertronic Global Services
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:contact@careertronics.in"
                        className="text-red-400 hover:underline"
                      >
                        contact@careertronics.in
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>
                      Phone:{" "}
                      <a
                        href="tel:+918602755547"
                        className="text-red-400 hover:underline"
                      >
                        +91 8602755547
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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
                    <span>
                      Address: E-108, Sec 1, Devendra Nagar, Raipur, CG
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-red-600 mt-8 animate-pulse">
              <p className="text-center font-medium">
                By using Careertronic Global Services' website or services, you
                acknowledge that you have read, understood, and agree to these
                Terms and Conditions.
              </p>
            </div> 
          </div>
        </div>
      </main>
    </div>
  );
}

const sections = [
  {
    id: "services",
    title: "1. Services Provided",
    content: (
      <>
        <p className="mb-4">Careertronic Global Services offers software development services, including but not limited to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Custom software development</li>
          <li>Web and mobile app development</li>
          <li>Software consulting</li>
          <li>System integrations</li>
          <li>IT support and maintenance</li>
          <li>Other related services as described on our website</li>
        </ul>
        <p>The scope of services will be defined in individual agreements between Careertronic Global Services and the Client.</p>
      </>
    )
  },
  {
    id: "agreement",
    title: "2. Service Agreement",
    content: (
      <p>The terms of any specific service project will be defined in a formal agreement or contract between the Client and Careertronic Global Services, which may include a Statement of Work (SOW), project timelines, deliverables, pricing, and other project-specific terms.</p>
    )
  },
  {
    id: "obligations",
    title: "3. Client Obligations",
    content: (
      <>
        <p className="mb-4">The Client agrees to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate, complete, and timely information necessary for the completion of the services.</li>
          <li>Cooperate with Careertronic Global Services and provide feedback, approvals, and resources required.</li>
          <li>Pay all fees for the services as outlined in the Agreement.</li>
          <li>Ensure that the use of any materials or content provided does not infringe on third-party rights or violate any laws.</li>
        </ul>
      </>
    )
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content: (
      <>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg hover:translate-x-1 transition-transform duration-200">
          <h3 className="font-semibold text-red-400 mb-2">Fees</h3>
          <p>The Client agrees to pay the non-refundable fees for services rendered as outlined in the individual service contract.</p>
        </div>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg hover:translate-x-1 transition-transform duration-200">
          <h3 className="font-semibold text-red-400 mb-2">Late Payments</h3>
          <p>If the Client fails to make payments within the agreed time frame, Careertronic Global Services may suspend work or terminate the service agreement.</p>
        </div>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg hover:translate-x-1 transition-transform duration-200">
          <h3 className="font-semibold text-red-400 mb-2">Taxes</h3>
          <p>The Client is responsible for paying any applicable taxes related to the provision of services.</p>
        </div>
      </>
    )
  },
  {
    id: "ip",
    title: "5. Intellectual Property Rights",
    content: (
      <>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200">
          <h3 className="font-semibold text-red-400 mb-2">Ownership of Work Product</h3>
          <p>All intellectual property rights to work products created during a project will remain with Careertronic Global Services until payment is made in full by the Client.</p>
        </div>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200">
          <h3 className="font-semibold text-red-400 mb-2">Third-Party Materials</h3>
          <p>The Client acknowledges that some services may incorporate third-party software or materials, which may be subject to separate licensing terms.</p>
        </div>
      </>
    )
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    content: (
      <>
        <p className="mb-4">Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of the relationship.</p>
        <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-red-600">
          <p>The Client agrees not to disclose any confidential information to third parties without prior written consent of Careertronic Global Services, unless required by law.</p>
        </div>
      </>
    )
  },
  {
    id: "warranty",
    title: "7. Warranty and Disclaimer",
    content: (
      <>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Services Warranty</h3>
          <p>Careertronic Global Services warrants that the services will be performed in a professional and workmanlike manner in accordance with industry standards.</p>
        </div>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">No Guarantee of Results</h3>
          <p>Careertronic Global Services does not guarantee specific outcomes resulting from the services provided.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-red-600">
          <h3 className="font-semibold text-red-400 mb-2">Limitations of Liability</h3>
          <p>Careertronic Global Services shall not be liable for any direct or indirect damages arising from the use of the services or the software developed.</p>
        </div>
      </>
    )
  },
  {
    id: "termination",
    title: "8. Termination",
    content: (
      <>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Termination by the Client</h3>
          <p>The Client may terminate the Agreement at any time by providing written notice. The Client is responsible for paying for all work completed up to the date of termination.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Termination by Careertronic</h3>
          <p>We reserve the right to terminate the Agreement if the Client fails to meet payment obligations or otherwise breaches the terms of this Agreement.</p>
        </div>
      </>
    )
  },
  {
    id: "law",
    title: "9. Governing Law and Dispute Resolution",
    content: (
      <>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Governing Law</h3>
          <p>This Agreement shall be governed by and construed in accordance with the laws of Raipur, Chhattisgarh, India.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Dispute Resolution</h3>
          <p>Any disputes will be resolved through mediation or arbitration in Raipur, Chhattisgarh, India.</p>
        </div>
      </>
    )
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    content: (
      <p className="p-4 bg-gray-800 rounded-lg hover:scale-[1.01] transition-transform duration-200">
        The Client agrees to indemnify and hold Careertronic Global Services harmless from any claims, liabilities, damages, or costs arising from the use of our services.
      </p>
    )
  },
  {
    id: "force-majeure",
    title: "11. Force Majeure",
    content: (
      <p className="p-4 bg-gray-800 rounded-lg">
        Careertronic Global Services shall not be held liable for any delay or failure in performance due to circumstances beyond our reasonable control.
      </p>
    )
  },
  {
    id: "modifications",
    title: "12. Modifications to the Terms",
    content: (
      <p className="p-4 bg-gray-800 rounded-lg">
        Careertronic Global Services reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on our website.
      </p>
    )
  },
  {
    id: "miscellaneous",
    title: "13. Miscellaneous",
    content: (
      <>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Entire Agreement</h3>
          <p>This Agreement constitutes the entire understanding between Careertronic Global Services and the Client.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-red-400 mb-2">Severability</h3>
          <p>If any provision is found invalid, the remainder of the Agreement will remain in full force.</p>
        </div>
      </>
    )
  }
];