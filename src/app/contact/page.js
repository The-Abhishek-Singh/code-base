"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
  FaRocket,
  FaTeamspeak,
  FaComments,
  FaAddressCard,
} from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

import Form from "@/component/contact/Form";


import { Phone, Mail } from "lucide-react";

// Custom Section Component
const ContactSection = ({ icon: Icon, title, description, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white shadow-xl rounded-2xl p-6 border border-red-100 hover:shadow-2xl transition-all duration-300 space-y-4"
  >
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-red-600 text-3xl" />
      <h3 className="text-xl font-bold text-red-900">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    {children}
  </motion.div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contacts = [
    {
      title: "HEAD OFFICE",
      description: "Gachibowli, Hyderabad, Telangana 500032",
      phone: "+91 8602755547",
      email: "contact@careertronics.in",
    },
    {
      title: "BRANCH OFFICE",
      description: "E-108, Sector 1, Devendra Nagar,Raipur 492004",
      phone: "+91 8602755547",
      email: "contact@careertronics.in",
    },
    {
      title: "BRANCH OFFICE",
      description: "Off No-4, Agrasen Chowk, Nehru Nagar, Bhilai 490020",
      phone: "+91 8602755547",
      email: "contact@careertronics.in",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ loading: true, success: false, error: false });

    try {
      const response = await axios.post("/api/contact", formData);

      setSubmissionStatus({
        loading: false,
        success: true,
        error: false,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmissionStatus({
        loading: false,
        success: false,
        error: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-red-500 mb-4">
            Connect with Careertronic
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Unlock Your Potential with Our Expert Career Solutions. Let's
            transform your professional journey together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <ContactSection
            icon={FaAddressCard}
            title="Contact Details"
            description="Reach out and let's start your career transformation."
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600" />
                <p className="text-gray-800">
                  3rd Floor, KNR SQUARE, Gachibowli, Hyderabad, Telangana 500032
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-red-600" />
                <a
                  href="mailto:contact@careertronics.in"
                  className="text-gray-800 hover:text-red-700 transition"
                >
                  contact@careertronics.in
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-red-600" />
                <p className="text-gray-800">+91 9343202785 | +91 8602755547</p>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-red-700 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-700 transition"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </ContactSection>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Form />
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <ContactSection
            icon={FaTeamspeak}
            title="Why Choose Us"
            description="Your Career, Our Passion: Tailored Solutions for Tech Professionals"
          >
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Personalized Career Guidance
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Extensive Tech Industry Network
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Data-Driven Placement Strategies
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                Continuous Professional Development
              </li>
            </ul>
          </ContactSection>

          <ContactSection
            icon={FaComments}
            title="Consultation Process"
            description="Your Journey to Success, Simplified and Strategic"
          >
            <div className="space-y-3">
              {[
                { step: 1, name: "Initial Consultation" },
                { step: 2, name: "Profile Assessment" },
                { step: 3, name: "Strategic Placement" },
              ].map(({ step, name }) => (
                <div key={step} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold">
                    {step}
                  </div>
                  <span className="text-gray-800">{name}</span>
                </div>
              ))}
            </div>
          </ContactSection>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] p-[1rem]">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="p-4 shadow-md rounded-2xl bg-white border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{
              amount: 0.5,
            }}
          >
            <div className="flex flex-col items-center gap-4 hover:*:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-red-800">
                {contact.title}
              </h2>
              <p className="text-black text-sm text-center font-bold-200">
                {contact.description}
              </p>
              <div className="flex flex-col items-start gap-2 text-gray-600">
                <div className="flex items-center gap-2 w-full">
                  <Phone className="w-5 h-5" />
                  <span className="flex-1">{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Mail className="w-5 h-5" />
                  <span className="flex-1">{contact.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <Iframe /> */}


    </div>
  );
};

export default ContactPage;
