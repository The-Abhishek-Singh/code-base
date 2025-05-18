"use client";
import React, { useState } from "react";
import Head from "next/head";
import ScrollReveal from "@/components/ScrollReveal";
export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  number: '',
  subject: '',
  message: ''
});

const [submitStatus, setSubmitStatus] = useState(null);
const [submitting, setSubmitting] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const validateForm = () => {
  return (
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim()
  );
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c821188b-ce06-4d31-b732-818ea907ac99", // Ma'am's access key 
        // access_key: "6cfa41c1-dc52-4fa2-aa2e-3e853d8a68a6", // My access key
        name: formData.name,
        email: formData.email,
        number: formData.number,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          number: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };


  return (
    <>
      <Head>
        <title>Contact Us | Careertronic Global Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Careertronic Global Services for exceptional services in software development, IT training, and more."
        />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-black z-0"></div>

        {/* Floating elements */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Large glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-red-600/10"></div>
          <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full bg-red-400/5"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-red-500/8"></div>

          {/* Floating elements */}
          <div className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-white/5"></div>
          <div className="absolute bottom-1/2 right-10 w-32 h-32 rounded-full bg-red-700/10"></div>

          {/* Geometric shapes */}
          <div className="absolute top-20 right-40 w-16 h-16 border border-red-700/30 transform rotate-45 opacity-30"></div>
          <div className="absolute bottom-40 left-60 w-20 h-20 border-2 border-red-500/20 rounded-md transform opacity-20"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white/10 rounded-full opacity-30"></div>

          {/* Additional geometric elements */}
          <div className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-red-600/30 transform rotate-12 opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/5 w-28 h-28 border border-gray-600/20 rounded-lg transform rotate-12 opacity-20"></div>
          <div className="absolute top-2/3 left-10 w-20 h-20 border border-white/5 transform rotate-45 opacity-30"></div>

          {/* Digital circuit-like lines */}
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent opacity-30"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent opacity-25"></div>
        </div>

        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-28 md:py-24 max-w-7xl">
          {/* Header */}
          <header className="mb-12 md:mb-16 text-center">
           
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white">
                Contact Us
              </h1>
            <ScrollReveal
              animation="slideUp"
              duration={800}
              easing="ease-in-out"
              delay={200}
            >
              <h2 className="text-xl md:text-2xl text-red-500 mb-6">
                We'd Love to Hear From You!
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeIn" duration={1200} delay={300}>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-300 leading-relaxed">
                  At{" "}
                  <span className="text-red-500 font-semibold">
                    Careertronic Global Services Pvt. Ltd.
                  </span>
                  , we're committed to providing exceptional services and
                  solutions to help individuals, businesses, and educational
                  institutions thrive in today's fast-paced, technology-driven
                  world.
                </p>
              </div>
            </ScrollReveal>
          </header>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left column - Contact Form */}
            <div>
              <ScrollReveal
                animation="slideLeft"
                duration={1000}
                easing="spring"
                delay={100}
              >
                <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden">
                  {/* Subtle background glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-600/10 filter blur-xl"></div>

                  <h3 className="text-2xl font-semibold mb-6 relative">
                    Get In Touch
                  </h3>
                  <p className="text-gray-300 mb-6 relative">
                    If you have any questions or need assistance, please fill
                    out the form below, and a member of our team will get back
                    to you as soon as possible.
                  </p>

                 <form className="space-y-5 relative" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="number" className="block text-gray-300 mb-2 text-sm">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white font-medium px-8 py-3 rounded-lg relative overflow-hidden"
                    >
                      {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>

                </div>
              </ScrollReveal>
            </div>

            {/* Right column - Contact Information */}
            <div className="space-y-6 md:space-y-8">
              {/* Contact Information */}
              <ScrollReveal
                animation="slideRight"
                duration={1000}
                easing="spring"
                delay={150}
              >
                <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden">
                  {/* Subtle background glow */}
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-red-600/10 filter blur-xl"></div>

                  <h3 className="text-2xl font-semibold mb-4 relative">
                    Our Office
                  </h3>
                  <div className="space-y-6">
                    {/* Hyderabad Headquarters */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
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
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          Headquarters (Hyderabad):
                        </p>
                        <p className="text-gray-300">
                          3rd Floor, KNR SQUARE, opp. The Platina, Gachibowli 
                          <br />
                          Hyderabad, Telangana 500032
                        </p>
                      </div>
                    </div>

                    {/* Raipur Office */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-white">Raipur Office:</p>
                        <p className="text-gray-300">
                          E-108, Near CITY CENTRE MALL
                          <br />
                          Sector 1, Jagriti Nagar, Devendra Nagar
                          <br />
                          Raipur, Chhattisgarh 492001
                        </p>
                      </div>
                    </div>

                    {/* Bhilai Office */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-white">Bhilai Office:</p>
                        <p className="text-gray-300">
                          BIZOFFICE, Office No 2, Agrasen Square
                          <br />
                          Near Indian Overseas Bank, Nehru Nagar
                          <br />
                          Bhilai, Chhattisgarh 490020
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mt-8 mb-4 relative">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
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
                      </div>
                      <div>
                        <p className="font-medium text-white">Phone:</p>
                        <p className="text-white"></p>
                        <p className="text-white">+91 9343202785</p>
                        <p>+91 8602755547</p>
                      </div>
                    </div>

                    <div className="flex items-start ">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
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
                      </div>
                      <div>
                        <p className="font-medium text-white mb-3">Email:</p>
                        <p className="text-gray-300 mb-1">
                          For general inquiries:
                          <br />
                          <a
                            href="mailto:info@careertonicglobal.com"
                            className="text-red-400 hover:text-red-300"
                          >
                            contact@careertronics.in
                          </a>
                        </p>
                        <p className="text-gray-300 mb-6">
                          Unlock Your Potential with Our Expert Career
                          Solutions. Let's transform your professional journey
                          together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Why Choose Us - Full width section */}
          <ScrollReveal
            animation="slideUp"
            duration={1000}
            easing="ease-in-out"
            delay={100}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden mt-8">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-red-600/10 filter blur-xl"></div>

              <h3 className="text-2xl font-semibold mb-6 relative">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mr-3">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-medium text-white">
                        Global Presence
                      </span>
                      <p className="text-gray-300 text-sm mt-1">
                        Support across multiple regions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mr-3">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-medium text-white">
                        Fast Performance
                      </span>
                      <p className="text-gray-300 text-sm mt-1">
                        Optimized for speed and efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mr-3">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-medium text-white">
                        24/7 Support
                      </span>
                      <p className="text-gray-300 text-sm mt-1">
                        Always available to help you
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mr-3">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-medium text-white">
                        Secure Infrastructure
                      </span>
                      <p className="text-gray-300 text-sm mt-1">
                        Enterprise-grade security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* Social Media */}
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="ease-out"
              delay={100}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Follow Us
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Stay connected for the latest updates!
                </p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a
                    href="https://www.linkedin.com/company/careertronic/posts/?feedView=all"
                    className="h-12 w-full rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white transition-all duration-300 hover:bg-red-600/20 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/20"
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    LinkedIn
                  </a>

                  <div className="relative inline-block text-left group">
                    <button className="bg-gray-800/50 h-12 mb-2 w-full text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600/20 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/20 border border-gray-700 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 mr-2 text-red-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                      Instagram
                    </button>

                    <div className="absolute bg-gray-900/80 h-32 rounded-lg overflow-y-scroll overflow-x-hidden shadow-lg transition-all duration-300 ease-in-out
                                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                                pointer-events-none group-hover:pointer-events-auto z-10 w-auto"
                                style={{scrollbarWidth: "thin",
                                  scrollbarColor: "#111827 #444",
                                }}>
                      <a href="https://www.instagram.com/careertronic_edu/" className="block px-4 py-2 hover:bg-zinc-600 rounded-lg">Careertronic Education</a>
                      <a href="https://www.instagram.com/careertronic_studyabroad/" className="block px-4 py-2 hover:bg-zinc-600 rounded-lg">Careertronic Study Abroad</a>
                      <a href="https://www.instagram.com/careertronic_startups/" className="block px-4 py-2 hover:bg-zinc-600 rounded-lg">Careertronic <br/> Startups & Business</a>
                      <a href="https://www.instagram.com/careertronic_software/" className="block px-4 py-2 hover:bg-zinc-600 rounded-lg">Careertronis Software</a>
                      <a href="https://www.instagram.com/careertronic_jobs/" className="block px-4 py-2 hover:bg-zinc-600 rounded-lg">Careertronic Jobs</a>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="h-12 w-full rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white transition-all duration-300 hover:bg-red-600/20 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/20"
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="h-12 w-full rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white transition-all duration-300 hover:bg-red-600/20 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/20"
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Business Hours */}
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="ease-out"
              delay={150}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Business Hours
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  We're available to serve you during these hours:
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Saturday</span>
                    <span className="text-red-400 font-medium">
                      9:00 AM - 9:00 PM
                    </span>
                  </div>
                  {/* <div className="h-px bg-gray-700/50" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-red-400 font-medium">
                      10:00 AM - 4:00 PM
                    </span>
                  </div> */}
                  <div className="h-px bg-gray-700/50" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center text-red-500">
                      <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm font-medium">
                        Currently Open
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
