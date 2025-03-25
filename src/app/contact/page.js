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
  FaAddressCard
} from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

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
    message: ""
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ loading: true, success: false, error: false });

    try {
      const response = await axios.post("/api/contact", formData);
      
      setSubmissionStatus({ 
        loading: false, 
        success: true, 
        error: false 
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      setSubmissionStatus({ 
        loading: false, 
        success: false, 
        error: true 
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
          <h1 className="text-5xl font-bold text-red-900 mb-4">
            Connect with CareerTronics
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Unlock Your Potential with Our Expert Career Solutions. 
            Let's transform your professional journey together.
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
              <a href="#" className="text-gray-600 hover:text-red-700 transition">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-700 transition">
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
            <form 
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-2xl p-8 border border-red-100 space-y-6"
            >
              <h3 className="text-2xl font-bold text-center text-red-900 mb-6">
                Send Us a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
                >
                  <option value="">Select Service</option>
                  <option value="career-consulting">Career Consulting</option>
                  <option value="tech-recruitment">Tech Recruitment</option>
                  <option value="training">Training & Development</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>

              <button
                type="submit"
                disabled={submissionStatus.loading}
                className="w-full bg-red-700 text-white p-3 rounded-lg hover:bg-red-800 transition duration-300 flex items-center justify-center space-x-2"
              >
                {submissionStatus.loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaRocket />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submissionStatus.success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Message sent successfully!
                </div>
              )}

              {submissionStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
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
                { step: 3, name: "Strategic Placement" }
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
    </div>
  );
};

export default ContactPage;