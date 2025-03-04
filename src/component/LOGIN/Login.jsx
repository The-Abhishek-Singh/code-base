// Final responsive code for Login Page
"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black">
      <Welcome />
      <Form />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="dark"
        toastStyle={{
          background: "#111",
          color: "#fff",
          border: "1px solid rgba(230, 0, 0, 0.3)",
          borderRadius: "8px",
        }}
        progressStyle={{
          background: "linear-gradient(to right, #e60000, #ff4d4d)",
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
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => setFormData({ ...formData, [name]: value });

  const notify = (type, message) => toast[type](message);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.role) {
      return notify("error", "All fields are required");
    }
    setIsSubmitting(true);
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/user/login", formData);
      notify("success", data.message || "Login successful");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (err) {
      notify("error", err.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-2/5 flex items-center justify-center p-6 bg-black">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-4 text-white">
      <p className="text-4xl font-semibold tracking-tight relative flex items-center pl-8 text-[#E60000] before:absolute before:content-[''] before:h-4 before:w-4 before:rounded-full before:left-0 before:bg-red-600 after:absolute after:content-[''] after:h-4 after:w-4 after:rounded-full after:left-0 after:bg-red-600 after:animate-ping">
          Login
        </p>

        {/* Responsive divider with parallel lines */}
        <div className="flex items-center w-full my-2">
          <div className="h-px w-full bg-red-400"></div>
          <div className="h-px w-full bg-red-600 ml-1"></div>
        </div>
        <p className="text-sm text-white mb-2">
          Please enter your credentials to login
        </p>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 bg-black border border-red-600 rounded-lg"
          required
        />

        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 bg-black border border-red-600 rounded-lg"
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute right-3 top-3 text-red-500"
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-red-600 rounded-lg"
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="Candidate">Candidate</option>
          <option value="Admin">Admin</option>
          <option value="Partner">Partner</option>
        </select>

        <Link href="/forgot-password" className="block text-sm text-red-500 text-right">
          Forgot Password?
        </Link>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-red-600 rounded-lg hover:bg-red-700"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-red-500">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
