"use client";
import React, { useState } from 'react';

const Forgot = () => {
  return (
    <div className="flex w-full h-screen flex-col md:flex-row overflow-hidden bg-black">
      <Welcome />
      <PasswordRecovery />
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="w-[88%] h-2/5 md:h-[90%] md:w-3/5 flex flex-col justify-center items-center bg-[#000000] pt-20 pr-20 pl-20">
      <div className="bg-[url('/login/ima.png')] bg-cover bg-center bg-no-repeat w-full h-full flex flex-col justify-center items-center text-black/70">
        <div className="w-full h-full bg-black/65 text-center align-text-center flex items-center justify-center">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed">
            Welcome To <br />{" "}
            <span className="font-semibold pt-6 text-red-700">
              Careertronic
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
  

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset error state
    setError('');
    
    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call for password reset
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full h-3/5 md:h-full md:w-3/5 lg:w-[40%] flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:pl-8 pr-0 bg-[#000000]">
      <div className="w-full max-w-md mx-auto">
      <p className="text-4xl font-semibold tracking-tight relative flex items-center pl-8 text-[#e60000] before:absolute before:content-[''] before:h-4 before:w-4 before:rounded-full before:left-0 before:bg-red-600 after:absolute after:content-[''] after:h-4 after:w-4 after:rounded-full after:left-0 after:bg-red-600 after:animate-ping">
          Forgot Password
        </p>
        <hr className="w-full h-[1px] md:h-[2px] my-1 md:my-2 bg-[#e60000]/30 border-0 rounded" />
        <h1 className="text-sm md:text-base lg:text-lg text-[#f8f0f0]">Please enter your details</h1>
      </div>

      <div className="mt-4 sm:mt-8 w-full max-w-md mx-auto">
        <div className="bg-black/40 py-6 sm:py-8 px-4 sm:px-10 shadow sm:rounded-lg">
          {!isSubmitted ? (
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-black/50 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600">
                    {error}
                  </p>
                )}
              </div>    

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-600 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Reset Password'}
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                <div className="text-sm">
                  <a href="/Login" className="font-medium text-red-600 hover:text-red-500">
                    Back to Login
                  </a>
                </div>
                <div className="text-sm">
                  <a href="/register" className="font-medium text-red-600 hover:text-red-500">
                    Register
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Recovery email sent</h3>
              <p className="mt-2 text-sm text-gray-500">
                Password reset instructions have been sent to your email address.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                  onClick={() => setIsSubmitted(false)}
                >
                  Back to form
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgot;