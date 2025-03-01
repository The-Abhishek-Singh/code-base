import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
const ContactUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/contact/contactusbg.png"
            alt="Contact Us Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Get In Touch</h1>
          <div className="text-white text-base md:text-xl mt-2">
            <Link href="/">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span className="mx-2">|</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
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
          {/* Email Card */}
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-xl text-center shadow-lg flex flex-col items-center border border-gray-600 w-full max-w-xs mx-auto h-auto md:h-64">
            <div className="bg-gray-800 p-3 rounded-xl mb-3">
              <FaEnvelope className="text-white text-3xl" />
            </div>
            <h3 className="text-white text-lg font-bold mb-1">Email</h3>
            <p className="text-gray-300 text-sm">info@alia.com</p>
            <p className="text-gray-300 text-sm">support@alia.com</p>
          </div>
          {/* Phone Card */}
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-5 rounded-xl text-center shadow-lg flex flex-col items-center border border-gray-600 w-full max-w-xs mx-auto h-auto md:h-64 sm:col-span-2 lg:col-span-1">
            <div className="bg-gray-800 p-3 rounded-xl mb-3">
              <FaPhone className="text-white text-3xl" />
            </div>
            <h3 className="text-white text-lg font-bold mb-1">Phone</h3>
            <p className="text-gray-300 text-sm">+1 012 3456 789</p>
            <p className="text-gray-300 text-sm">+91 012 3456 789</p>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="container  bg-white mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-light-50 text-red-600">Contact Us</h2>
          <p className="mt-4 text-gray-600">Any question or remarks? Just write us a message!</p>
        </div>
        <div className="grid grid-cols-1 bg-white lg:grid-cols-5 gap-8 mt-4">
          {/* 3D Character Image - 2 columns */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[430px]">
              <Image
                src="/contact/3-d.png"
                alt="Contact Character"
                layout="fill"
                objectFit="contain"
                className="transform -translate-y-5 md:-translate-y-10"
              />
            </div>
          </div>
          {/* Form - 3 columns */}
          <div className="lg:col-span-3 pt-4 w-full bg-white">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full p-2 md:p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Subject?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((subject, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="subject"
                        id={`subject-${index}`}
                        className="h-4 w-4 text-red-600 focus:ring-red-500"
                        defaultChecked={index === 0}
                      />
                      <label htmlFor={`subject-${index}`} className="text-sm text-gray-700">{subject}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition duration-300 w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Office Locations */}
      <div className="container mb-24 bg-white mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Head Office */}
          <div className="border border-gray-400 rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">HEAD OFFICE</h3>
            <p className="text-gray-700 mb-3 md:mb-4">Gachibowli, Hyderabad, Telangana 500032</p>
            <div className="flex items-center mb-2">
              <div className="mr-2 text-red-600">
                <FaPhone />
              </div>
              <span className="text-gray-700 text-sm md:text-base">+91 8602755547</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-red-600">
                <FaEnvelope />
              </div>
              <Link href="mailto:contact@chanakyans.in" className="text-gray-700 hover:text-red-600 text-sm md:text-base">
                contact@chanakyans.in
              </Link>
            </div>
          </div>
          {/* Branch Office 1 */}
          <div className="border border-gray-400 rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">BRANCH OFFICE</h3>
            <p className="text-gray-700 mb-3 md:mb-4">Off No-4, Agrasen Chowk, Nehru Nagar, Bhilai 490020</p>
            <div className="flex items-center mb-2">
              <div className="mr-2 text-red-600">
                <FaPhone />
              </div>
              <span className="text-gray-700 text-sm md:text-base">+91 8602755547</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-red-600">
                <FaEnvelope />
              </div>
              <Link href="mailto:contact@chanakyans.in" className="text-gray-700 hover:text-red-600 text-sm md:text-base">
                contact@chanakyans.in
              </Link>
            </div>
          </div>
          {/* Branch Office 2 */}
          <div className="border border-gray-400 rounded-lg p-4 md:p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">BRANCH OFFICE</h3>
            <p className="text-gray-700 mb-3 md:mb-4">E-108, Sector 1, Devendra Nagar, Raipur 492004</p>
            <div className="flex items-center mb-2">
              <div className="mr-2 text-red-600">
                <FaPhone />
              </div>
              <span className="text-gray-700 text-sm md:text-base">+91 8602755547</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-red-600">
                <FaEnvelope />
              </div>
              <Link href="mailto:contact@chanakyans.in" className="text-gray-700 hover:text-red-600 text-sm md:text-base">
                contact@chanakyans.in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;