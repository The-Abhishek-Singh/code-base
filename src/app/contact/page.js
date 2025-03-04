"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollReveal from "@/component/ScrollReveal";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // Make the API call directly to your backend
      // Adjust the URL based on your backend configuration
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      if (response.data.success) {
        // Show success popup with custom styling
        toast.success(response.data.message || "Message sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
        {
          position: "top-center",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Toast Container - This is essential for showing the toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] bg-gray-800">
        <div className="absolute inset-0">
          <div className="w-full h-400 ">
            <Image
              src="/contact/contactusbg.png"
              alt="Contact Us Hero"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Get In Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
          >
            <div className="text-white text-base md:text-xl mt-2">
              <Link href="/">
                <span className="hover:underline cursor-pointer">Home</span>
              </Link>
              <span className="mx-2">|</span>
              <span>Contact Us</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
            stagger={150}
          >
            {/* Location Card */}
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-xl text-center shadow-lg flex flex-col items-center border border-gray-600 w-full max-w-xs mx-auto h-auto md:h-64">
              <div className="bg-gray-800 p-3 rounded-xl mb-3">
                <FaMapMarkerAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1">Location</h3>
              <p className="text-gray-300 text-sm text-center px-2">
                132 Dartmouth Street, Boston, Massachusetts 02156, United States
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={100}
            stagger={150}
          >
            {/* Email Card */}
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-xl text-center shadow-lg flex flex-col items-center border border-gray-600 w-full max-w-xs mx-auto h-auto md:h-64">
              <div className="bg-gray-800 p-3 rounded-xl mb-3">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1">Email</h3>
              <p className="text-gray-300 text-sm">info@alia.com</p>
              <p className="text-gray-300 text-sm">support@alia.com</p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={150}
            stagger={150}
          >
            {/* Phone Card */}
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-xl text-center shadow-lg flex flex-col items-center border border-gray-600 w-full max-w-xs mx-auto h-auto md:h-64 sm:col-span-2 lg:col-span-1">
              <div className="bg-gray-800 p-3 rounded-xl mb-3">
                <FaPhone className="text-white text-3xl" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1">Phone</h3>
              <p className="text-gray-300 text-sm">+1 012 3456 789</p>
              <p className="text-gray-300 text-sm">+91 012 3456 789</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container bg-white mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={150}
            stagger={150}
          > 
            <h2 className="text-3xl md:text-4xl font-bold bg-light-50 text-red-600">
              Contact Us
            </h2>
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={150}
            stagger={150}
          >
            <p className="mt-4 text-gray-600">
              Any question or remarks? Just write us a message!
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 bg-white lg:grid-cols-5 gap-8 mt-4">
          {/* 3D Character Image - 2 columns */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 flex items-center justify-center">
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={800}
              easing="spring"
              delay={150}
              stagger={150}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
                  src="/contact/3-d.png"
                  alt="Contact Character"
                  height={900}
                  width={350}
                  objectFit="contain"
                  className="transform -translate-y-5 md:-translate-y-10"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Form - 3 columns */}
          <div className="lg:col-span-3 pt-4 w-full bg-white">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <ScrollReveal
                  animation="slideUp"
                  duration={800}
                  easing="spring"
                  delay={150}
                  stagger={150}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="w-full p-2 md:p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  animation="slideUp"
                  duration={800}
                  easing="spring"
                  delay={150}
                  stagger={150}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <ScrollReveal
                  animation="slideUp"
                  duration={800}
                  easing="spring"
                  delay={150}
                  stagger={150}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  animation="slideUp"
                  duration={800}
                  easing="spring"
                  delay={150}
                  stagger={150}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-XXXXXXXXXX"
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal
                animation="slideUp"
                duration={800}
                easing="spring"
                delay={150}
                stagger={150}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Subject?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "General Inquiry",
                      "Technical Support",
                      "Billing Question",
                      "Partnership Inquiry",
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="subject"
                          id={`subject-${index}`}
                          value={subject}
                          checked={formData.subject === subject}
                          onChange={handleChange}
                          className="h-4 w-4 text-red-600 focus:ring-red-500"
                        />
                        <label
                          htmlFor={`subject-${index}`}
                          className="text-sm text-gray-700"
                        >
                          {subject}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal
                animation="slideUp"
                duration={800}
                easing="spring"
                delay={150}
                stagger={150}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
                  ></textarea>
                </div>
              </ScrollReveal>
              <ScrollReveal
                animation="slideUp"
                duration={800}
                easing="spring"
                delay={150}
                stagger={150}
              >
                <div className="flex justify-center md:justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition duration-300 w-full md:w-auto disabled:bg-red-400"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </ScrollReveal>
            </form>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="container mb-24 bg-white mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Head Office */}
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={150}
            stagger={150}
          >
            <div className="border border-gray-400 rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">
                HEAD OFFICE
              </h3>
              <p className="text-gray-700 mb-3 md:mb-4">
                Gachibowli, Hyderabad, Telangana 500032
              </p>
              <div className="flex items-center mb-2">
                <div className="mr-2 text-red-600">
                  <FaPhone />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  +91 8602755547
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-red-600">
                  <FaEnvelope />
                </div>
                <Link
                  href="mailto:contact@chanakyans.in"
                  className="text-gray-700 hover:text-red-600 text-sm md:text-base"
                >
                  contact@chanakyans.in
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Branch Office 1 */}
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={150}
            stagger={150}
          >
            <div className="border border-gray-400 rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">
                BRANCH OFFICE
              </h3>
              <p className="text-gray-700 mb-3 md:mb-4">
                Off No-4, Agrasen Chowk, Nehru Nagar, Bhilai 490020
              </p>
              <div className="flex items-center mb-2">
                <div className="mr-2 text-red-600">
                  <FaPhone />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  +91 8602755547
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-red-600">
                  <FaEnvelope />
                </div>
                <Link
                  href="mailto:contact@chanakyans.in"
                  className="text-gray-700 hover:text-red-600 text-sm md:text-base"
                >
                  contact@chanakyans.in
                </Link>
              </div>
            </div>
          </ScrollReveal>
          {/* Branch Office 2 */}
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={150}
            stagger={150}
          >
            <div className="border border-gray-400 rounded-lg p-4 md:p-6 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">
                BRANCH OFFICE
              </h3>
              <p className="text-gray-700 mb-3 md:mb-4">
                E-108, Sector 1, Devendra Nagar, Raipur 492004
              </p>
              <div className="flex items-center mb-2">
                <div className="mr-2 text-red-600">
                  <FaPhone />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  +91 8602755547
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-red-600">
                  <FaEnvelope />
                </div>
                <Link
                  href="mailto:contact@chanakyans.in"
                  className="text-gray-700 hover:text-red-600 text-sm md:text-base"
                >
                  contact@chanakyans.in
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
