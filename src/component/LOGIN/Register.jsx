

"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  return (
    <div className="flex w-full h-screen flex-col md:flex-row overflow-hidden bg-black">
      <Welcome />
      <Form />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "#111",
          color: "#fff",
          border: "1px solid rgba(230, 0, 0, 0.3)",
          borderRadius: "8px"
        }}
        progressStyle={{
          background: "linear-gradient(to right, #e60000, #ff4d4d)"
        }}
      />
    </div>
  );
};

const Welcome = () => (
  
  <div className="w-full md:w-3/5 h-64 md:h-screen flex items-center justify-center  bg-cover bg-center bg-[url('/login/ima.png')] my-[10vh]">
    <div className="w-full h-full bg-black/70 flex items-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-semibold text-center">
        Welcome To <br /> <span className="text-red-700">Careertronic</span>
      </h1>
    </div>
  </div>
);

const Form = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  // Default empty form state
  const candidateRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: ""
  };
  
  // Single state for form data
  const [formData, setFormData] = useState(candidateRegister);

  // Handler for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle phone input - only allow numbers
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Only allow numbers and limit to reasonable phone length
    const newValue = value.replace(/\D/g, '').slice(0, 15);
    
    setFormData(prev => ({
      ...prev,
      phone: newValue
    }));
  };

  // Custom toast configurations
  const notifySuccess = (message) => {
    toast.success(message, {
      icon: () => (
        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
      )
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      icon: () => (
        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-red-500/20 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      )
    });
  };

  const notifyInfo = (message) => {
    toast.info(message, {
      icon: () => (
        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
      )
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.password || !formData.confirmPassword || !formData.role) {
      notifyError("All fields are required");
      return;
    }

    // Password validation
    if (formData.password.length < 6) {
      notifyError("Password must be at least 6 characters long");
      return;
    }

    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      notifyError("Passwords do not match");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      notifyError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/candidate/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role
      });

      // Show success message
      notifySuccess(response.data.message || "Registration successful!");
      
      // Additional success info
      setTimeout(() => {
        notifyInfo(`Welcome to Careertronic, ${formData.firstName}!`);
      }, 1000);
      
      // Reset form data to default empty state
      setFormData(candidateRegister);
      
      // Navigate after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    } catch (error) {
      if (error.response?.status === 409) {
        notifyError("Email already registered. Please use a different email address.");
      } else if (error.response?.status === 400) {
        notifyError(error.response.data.message || "Invalid information provided. Please check your details.");
      } else {
        notifyError(error.response?.data?.message || "Registration failed. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-3/5 md:h-full md:w-2/5 flex flex-col justify-center items-center px-4 md:px-2 overflow-y-auto bg-black-40">
      <div
        className="flex flex-col gap-2 w-full max-w-sm[30rem] p-5 rounded-2xl relative bg-black text-white my-4"
        style={{ height: "62%" }}
      >
        <p className="text-4xl font-semibold tracking-tight relative flex items-center pl-8 text-[#e60000] before:absolute before:content-[''] before:h-4 before:w-4 before:rounded-full before:left-0 before:bg-red-600 after:absolute after:content-[''] after:h-4 after:w-4 after:rounded-full after:left-0 after:bg-red-600 after:animate-ping">
          Register
        </p>

        {/* Responsive divider with parallel lines */}
        <div className="flex items-center w-full my-2">
          <div className="h-px w-full bg-red-400"></div>
          <div className="h-px w-full bg-red-600 ml-1"></div>
        </div>

        <p className="text-sm text-white mb-2">
          Please enter your details to register
        </p>

        <form onSubmit={handleRegister} className="flex flex-col h-full">

          <div className="flex w-full gap-2 mb-2 py-4">
            <div className="relative w-1/2 group">
              <input
                className="bg-black text-white w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base peer"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <span className={`text-white/70 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 ${formData.firstName ? "opacity-0" : "group-hover:opacity-0"}`}>
                firstName
              </span>
            </div>

            <div className="relative w-1/2 group">
              <input
                className="bg-black text-white/70 w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base peer"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <span className={`text-white/50 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 ${formData.lastName ? "opacity-0" : "group-hover:opacity-0"}`}>
                lastName
              </span>
            </div>
          </div>

          <div className="relative mb-4 group">
            <input
              className="bg-black text-white w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base peer"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <span className={`text-white/50 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 ${formData.email ? "opacity-0" : "group-hover:opacity-0"}`}>
              email
            </span>
          </div>

          {/* Single Phone Input */}
          <div className="relative mb-4 group">
            <input
              className="bg-black text-white w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base peer"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder=" "
              required
            />
            <span className={`text-white/50 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 ${formData.phone ? "opacity-0" : "group-hover:opacity-0"}`}>
              Phone
            </span>
          </div>

          <div className="relative mb-4 group">
            <select
              className="bg-black text-white w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base appearance-none peer"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled></option>
              <option value="Candidate">Candidate</option>
              <option value="Admin">Admin</option>
              <option value="Partner">Partner</option>
            </select>
            <span
              className={`text-white/50 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 ${
                formData.role ? "opacity-0" : "group-hover:opacity-0"
              }`}
            >
              role
            </span>
            {/* Custom dropdown arrow */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="h-4 w-4 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative mb-4 group">
            <input
              className="bg-black text-white w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base peer"
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <span className={`text-white/50 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 truncate max-w-xs ${formData.password ? "opacity-0" : "group-hover:opacity-0"}`}>
              password
            </span>
            <button
              type="button"
              className="absolute right-3 top-4 text-white/50 hover:text-red-400 text-xs"
              onClick={() => setPasswordVisible(!passwordVisible)}
              onMouseEnter={() => setPasswordVisible(true)}
              onMouseLeave={() => setPasswordVisible(false)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative mb-4 group">
            <input
              className="bg-black text-white w-full pt-5 pb-1 px-3 outline-none border border-red-600/40 rounded-lg focus:border-red-400 text-base peer"
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <span className={`text-white/50 absolute left-3 top-3 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-red-400 truncate max-w-xs ${formData.confirmPassword ? "opacity-0" : "group-hover:opacity-0"}`}>
              confirmPassword
            </span>
            <button
              type="button"
              className="absolute right-3 top-3 text-white/50 hover:text-red-400 text-xs"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              onMouseEnter={() => setConfirmPasswordVisible(true)}
              onMouseLeave={() => setConfirmPasswordVisible(false)}
            >
              {confirmPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="border-none outline-none py-2 px-3 rounded-lg text-white/70 text-base transition-all duration-300 bg-red-600 hover:bg-red-600/60 w-full mt-auto flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : "Submit"}
          </button>
        </form>

        {/* <p className="text-sm text-white text-center mt-2">
          Already have an account?{" "}
          <Link href="/Login" className="text-red-800 hover:underline">
            LOGIN
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Register;
