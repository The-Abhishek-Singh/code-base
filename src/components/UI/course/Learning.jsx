import React from "react";
import Image from "next/image";
import Link from "next/link";

const LearningPlatform = () => {
  // Sample data for courses - fixed by removing extra array brackets
  const courses = [
    {
      id: 1,
      title: "DATA STRUCTURES AND ALGORITHMS",
      description:
        "Master problem-solving with our DSA and Algorithm class, covering essential concepts and efficient coding techniques.",
      backgroundImage: "/newco/popular/dsa.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Create beautiful user interfaces and seamless experiences. Learn industry-standard tools and methodologies. Includes real-world projects.",
      backgroundImage: "/newco/popular/ui.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Build responsive websites from scratch. Master HTML, CSS, JavaScript and modern frameworks. Deploy your projects to the web.",
      backgroundImage: "/newco/popular/web.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Data Science and AI",
      description:
        "Analyze data and build machine learning models. Learn Python, pandas, scikit-learn, and TensorFlow. Solve real-world problems with AI.",
      backgroundImage: "/newco/popular/data.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Cloud Computing",
      description:
        "Master cloud services and deployment. Learn AWS, Azure, or Google Cloud. Implement scalable and secure cloud solutions.",
      backgroundImage: "/newco/popular/cc.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Create native and cross-platform mobile apps. Learn React Native, Flutter, or native development. Publish to app stores.",
      backgroundImage: "/newco/popular/app.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Programming Languages",
      description:
        "Master in-demand programming languages. Learn Python, JavaScript, Java, or C++. Build practical applications and algorithms.",
      backgroundImage: "/newco/popular/pl.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Database Management",
      description:
        "Design and optimize database systems. Learn SQL, MongoDB, PostgreSQL. Master data modeling, querying, and administration.",
      backgroundImage: "/newco/popular/db.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.5-6-2v-1.68c1.33.89 3.3 1.68 6 1.68s4.67-.79 6-1.68V17c0 .5-2.13 2-6 2zm0-4c-3.87 0-6-1.5-6-2v-1.68c1.33.89 3.3 1.68 6 1.68s4.67-.79 6-1.68V13c0 .5-2.13 2-6 2zm0-4c-3.87 0-6-1.5-6-2V9.68c1.33.89 3.3 1.68 6 1.68s4.67-.79 6-1.68V11c0 .5-2.13 2-6 2z" />
        </svg>
      ),
    },
    {
      id: 9,
      title: "Blockchain and Cryptocurrencies",
      description:
        "Understand blockchain technology and applications. Learn about smart contracts, DApps, and cryptocurrency. Explore web3 development.",
      backgroundImage: "/newco/popular/block.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
  ];

  // Sample data for trusted brands
  const trustedBrands = [
    { id: 1, name: "Accenture", logo: "/Marq/Barclays.png" },
    { id: 2, name: "CGI", logo: "/Marq1/cgi.png" },
    { id: 3, name: "Cisco", logo: "/Marq/ceat.png" },
    { id: 4, name: "Cognizant", logo: "/Marq/Gati.png" },
    { id: 5, name: "Intuit", logo: "/Marq/IBM.png" },
    { id: 6, name: "Microsoft", logo: "/Marq1/intuit.jpg" },
    { id: 7, name: "Oracle", logo: "/Marq/INFOSYS.png" },
    { id: 8, name: "Wipro", logo: "/Marq/tcs.png" },
  ];

  // Support options for the help section
  const supportOptions = [
    {
      id: 1,
      title: "Live Chat",
      description: "Get real-time assistance from our support team.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Email Support",
      description: "Get a response within 24 hours to your queries.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "FAQ",
      description: "Browse our comprehensive knowledge base.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Background gradient pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-black opacity-80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header with glowing effect */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text pb-4">
            Ignite Your Learning Journey
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full shadow-lg shadow-red-600/30"></div>
        </div>
        {/**trusted by  */}
        <div className="relative bg-linear-to-b from-red-900-to-black rounded-2xl p-8 mb-12 text-center border border-gray-800 shadow-xl shadow-red-900/10 backdrop-blur-md overflow-hidden">
          {/* Central Glowing Red Ball Effect */}
          {/* <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-red-900 rounded-full blur-[90px] opacity-40" /> */}

          {/* Side Blurred Gradients */}
          <div className="absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-black via-black/60 to-transparent blur-lg" />
          <div className="absolute top-0 right-0 w-[150px] h-full bg-gradient-to-l from-black via-black/60 to-transparent blur-lg" />

          <h2 className="text-2xl font-bold mb-4 relative z-10">
            Trusted by 25,000+ world-class
            <br />
            <span className="text-red-500">brands and organizations</span> of
            all sizes
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto relative z-10">
            Learn from industry experts and gain the skills that are in high
            demand in today's market.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
            {trustedBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center h-10 transition-all duration-300 hover:scale-110"
              >
                <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-md shadow-black/30">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={100}
                    height={30}
                    className="object-contain max-h-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section with animated gradient overlay and video background */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-96 shadow-2xl inset-shadow-red-900/20 group">
          {/* Video background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              className="absolute w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/students.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10"></div>

            {/* Red accent gradients */}
            <div className="absolute z-20"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
              Start your <span className="text-red-500">learning journey</span>{" "}
              today!
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Enroll now in our online courses. Learn at your own pace and
              unlock new career opportunities with industry-recognized
              certificates.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3  text-white font-bold rounded-full hover:from-red-600 hover:to-red-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Popular Classes Section with card hover effects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-800 flex items-center">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
              Our Popular Classes
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 ml-4 rounded-full"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group relative shadow-lg hover:shadow-red-900/20 border border-white/10"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url(${course.backgroundImage})`,
                  backgroundSize: "fill",
                  backgroundPosition: "center",
                }}
              >
                {/* Red accent border effect on hover
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

                <div className="p-6 relative z-10">
                  <div className="text-red-500 mb-4 group-hover:text-red-400 transition-colors duration-300 transform group-hover:scale-110 origin-left">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{course.description}</p>

                  {/* Hover reveal button */}
                  <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
                    <Link
                      href="#"
                      className="inline-flex items-center text-red-500 hover:text-red-400"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Need Help Section with glowing effects */}
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-xl shadow-red-900/10 border border-gray-800 relative overflow-hidden">
          {/* Accent gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            Need Any Help?
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Our dedicated support team is here to assist you at every step of
            your learning journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportOptions.map((option) => (
              <Link
                href={'/contact'}
                >
              <div
                key={option.id}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-lg hover:shadow-red-900/20"
              >
                {/* Red glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="text-red-500 mb-3 flex justify-center group-hover:text-red-400 transition-colors duration-300 transform group-hover:scale-110">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-400 text-sm">{option.description}</p>
                  <p className="inline-block mt-4 text-red-500 hover:text-red-400 text-sm font-medium group-hover:underline">
                  Contact Us
                  </p>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
