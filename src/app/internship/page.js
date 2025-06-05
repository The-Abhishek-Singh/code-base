"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ChevronRight,
  Users,
  Target,
  TrendingUp,
  Network,
  Briefcase,
  Mail,
  Award,
  Code,
  Megaphone,
  BarChart3,
  Globe,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
  MapPin,
  Clock,
  Calendar,
  Building2,
  Search,
  Filter,
  BookmarkPlus,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function CareertroniccInternshipPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance steps animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      number: 1,
      title: "Browse Opportunities",
      description: "Explore diverse internships across industries",
      icon: <Search className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      title: "Apply & Get Matched",
      description: "Get matched with top companies",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: 3,
      title: "Gain Experience",
      description: "Work on real projects with mentorship",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 4,
      title: "Convert to Full-Time",
      description: "Turn internship into career opportunities",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const internshipListings = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Remote",
      duration: "3 months",
      stipend: "$2,000/month",
      industry: "Technology",
      skills: ["React", "Node.js", "Python", "Git"],
      posted: "2 days ago",
      applicants: 45,
      rating: 4.8,
      logo: "🚀",
      featured: true,
      description:
        "Join our dynamic development team and work on cutting-edge web applications.",
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "Growth Marketing Agency",
      location: "New York, NY",
      type: "Hybrid",
      duration: "4 months",
      stipend: "$1,800/month",
      industry: "Marketing",
      skills: ["SEO", "Social Media", "Analytics", "Content Creation"],
      posted: "1 week ago",
      applicants: 32,
      rating: 4.6,
      logo: "📊",
      featured: false,
      description:
        "Drive growth through innovative marketing strategies and data-driven campaigns.",
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataInsights Inc",
      location: "Austin, TX",
      type: "On-site",
      duration: "6 months",
      stipend: "$2,500/month",
      industry: "Data Science",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      posted: "3 days ago",
      applicants: 28,
      rating: 4.9,
      logo: "📈",
      featured: true,
      description:
        "Analyze complex datasets and build predictive models for business insights.",
    },
    {
      id: 4,
      title: "UX/UI Design Intern",
      company: "Creative Studio Pro",
      location: "Los Angeles, CA",
      type: "Remote",
      duration: "3 months",
      stipend: "$1,500/month",
      industry: "Design",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      posted: "5 days ago",
      applicants: 67,
      rating: 4.7,
      logo: "🎨",
      featured: false,
      description:
        "Design intuitive user experiences for web and mobile applications.",
    },
    {
      id: 5,
      title: "Financial Analyst Intern",
      company: "Global Finance Partners",
      location: "Chicago, IL",
      type: "On-site",
      duration: "4 months",
      stipend: "$2,200/month",
      industry: "Finance",
      skills: ["Excel", "Financial Modeling", "Bloomberg", "PowerBI"],
      posted: "1 day ago",
      applicants: 23,
      rating: 4.5,
      logo: "💼",
      featured: false,
      description:
        "Support investment decisions through comprehensive financial analysis.",
    },
    {
      id: 6,
      title: "Content Writing Intern",
      company: "MediaFlow Communications",
      location: "Remote",
      type: "Remote",
      duration: "3 months",
      stipend: "$1,200/month",
      industry: "Media",
      skills: ["Content Writing", "SEO", "WordPress", "Social Media"],
      posted: "4 days ago",
      applicants: 89,
      rating: 4.4,
      logo: "✍️",
      featured: false,
      description:
        "Create engaging content across multiple platforms and channels.",
    },
  ];

  const industries = [
    "All",
    "Technology",
    "Marketing",
    "Data Science",
    "Design",
    "Finance",
    "Media",
  ];
  const locations = [
    "All",
    "Remote",
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Los Angeles, CA",
    "Chicago, IL",
  ];

  const filteredListings = internshipListings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesIndustry =
      selectedIndustry === "All" || listing.industry === selectedIndustry;
    const matchesLocation =
      selectedLocation === "All" ||
      listing.location === selectedLocation ||
      listing.type === selectedLocation;

    return matchesSearch && matchesIndustry && matchesLocation;
  });

  const steps = [
    {
      number: 1,
      title: "Browse Listings",
      description:
        "Explore diverse internships across industries including marketing, healthcare, data science, and engineering.",
    },
    {
      number: 2,
      title: "Apply Easily",
      description:
        "Apply for internships that match your career goals and interests and skills through our simplified application process.",
    },
    {
      number: 3,
      title: "Get Noticed",
      description:
        "Our AI-powered system matches you with the most relevant internships, increasing your chances of standing out.",
    },
    {
      number: 4,
      title: "Gain Experience",
      description:
        "Dive into hands-on work on real projects. Learn from industry professionals passionate about your growth.",
    },
    {
      number: 5,
      title: "Convert to Full-Time",
      description:
        "Impress your employers during your internship and get job offer after your successful internship completion.",
    },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Real-World Experience",
      description:
        "Apply your academic knowledge to live projects and get a taste of what the competitive job market. Our internships offer you a chance to showcase your skills on-the-job training that will set you apart.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Leading Companies",
      description:
        "Work with some of the most respected companies across various industries. Get an insider's view into top employers and understand what it really like to work in your chosen field.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Skill Development",
      description:
        "Hone both your technical and soft skills. Whether it's mastering industry-specific tools, learning business strategies, or improving communication and leadership skills.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Mentorship Opportunities",
      description:
        "Receive guidance from experienced professionals dedicated to helping you grow. Learn from their expertise and gain insights that will guide your career for years to come.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking",
      description:
        "Build meaningful connections with professionals, mentors, and potential future employers. Your internship can be the foundation of a valuable network that opens doors throughout your career.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Conversion",
      description:
        "Many companies use internships as a talent pipeline. Performing well could open the door to future career opportunities and full-time job offers.",
    },
  ];

  const industriesSection = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "IT & Software Development",
      description:
        "Work with cutting-edge technologies and open-source frameworks and gain practical coding, programming, and system design experience.",
      tags: ["Python", "JavaScript", "React", "Node.js"],
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Marketing & Digital Media",
      description:
        "Contribute to impactful marketing campaigns, content creation, and social media strategies. Learn about SEO, digital marketing, and consumer behavior insights.",
      tags: ["SEO", "Social Media", "Content Strategy", "Analytics"],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Science & Analytics",
      description:
        "Dive into data analysis, machine learning, and predictive modeling. Gain hands-on experience with decision-making and business intelligence.",
      tags: ["Python", "Machine Learning", "SQL", "Tableau"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content Section */}
            <div className="lg:w-1/2">
              <ScrollReveal
                animation="fadeSlideRight"
                duration={600}
                delay={100}
              >
                <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  🚀 INTERNSHIP PROGRAM
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="fadeSlideRight"
                duration={800}
                delay={200}
              >
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Make Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    Dream Career
                  </span>
                  <br />a Reality
                </h1>
              </ScrollReveal>

              <ScrollReveal
                animation="fadeSlideRight"
                duration={700}
                delay={400}
              >
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  At Careertronic, we believe that internships are powerful
                  stepping stones to building a successful career. Our
                  Internship Program connects students and fresh graduates with
                  top-tier companies offering valuable hands-on experience in
                  dynamic real-world environments.
                </p>
              </ScrollReveal>

              <ScrollReveal
                animation="fadeSlideUp"
                duration={600}
                delay={600}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center gap-2">
                    Explore Internships
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-gray-600 hover:border-red-500 hover:bg-red-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                    Learn More
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Enhanced Interactive Right Section */}
            <div className="lg:w-1/2 lg:pl-12">
              <ScrollReveal
                animation="fadeSlideLeft"
                duration={800}
                delay={300}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    
                    <ScrollReveal
                      animation="fadeIn"
                      duration={600}
                      delay={700}
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                          Your Journey to Success
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Step-by-step process
                        </p>
                      </div>
                    </ScrollReveal>

                    <div className="space-y-4">
                      {processSteps.map((step, index) => (
                        <ScrollReveal
                          key={index}
                          animation="slightLeft"
                          duration={500}
                          delay={800 + index * 100}
                          stagger={100}
                          index={index}
                        >
                          <div
                            className={`relative flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                              activeStep === index
                                ? "bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 shadow-lg transform scale-105"
                                : "bg-gray-800/50 hover:bg-gray-700/50 border border-transparent"
                            }`}
                            onClick={() => setActiveStep(index)}
                          >
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
                                activeStep === index
                                  ? `bg-gradient-to-r ${step.color} shadow-lg`
                                  : "bg-gray-700"
                              }`}
                            >
                              {activeStep === index ? step.icon : step.number}
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`font-semibold transition-colors duration-300 ${
                                  activeStep === index
                                    ? "text-white"
                                    : "text-gray-300"
                                }`}
                              >
                                {step.title}
                              </h4>
                              <p
                                className={`text-sm transition-all duration-300 ${
                                  activeStep === index
                                    ? "text-gray-200 opacity-100"
                                    : "text-gray-500 opacity-70"
                                }`}
                              >
                                {step.description}
                              </p>
                            </div>
                            {activeStep === index && (
                              <CheckCircle className="w-6 h-6 text-green-400 animate-pulse" />
                            )}
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>

                    {/* Progress indicator */}
                    <ScrollReveal
                      animation="fadeIn"
                      duration={600}
                      delay={1200}
                    >
                      <div className="mt-6 flex justify-center space-x-2">
                        {processSteps.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === activeStep
                                ? "bg-red-500 w-8"
                                : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Listings Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeSlideUp" duration={600} delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-red-500">Featured</span> Internship
                Opportunities
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeSlideUp" duration={600} delay={200}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover exciting internship opportunities from top companies.
                Filter by industry, location, or search for specific roles.
              </p>
            </ScrollReveal>
          </div>

          {/* Search and Filter Bar */}
          <ScrollReveal animation="fadeSlideDown" duration={700} delay={300}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search internships, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 w-1/2 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-3 w-1/2 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Results Count */}
          <ScrollReveal animation="slightRight" duration={500} delay={300}>
            <div className="mb-6">
              <p className="text-gray-400">
                Showing{" "}
                <span className="text-white font-semibold">
                  {filteredListings.length}
                </span>{" "}
                internship opportunities
              </p>
            </div>
          </ScrollReveal>

          {/* Internship Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing, index) => (
              <ScrollReveal
                key={listing.id}
                animation="fadeSlideUp"
                duration={600}
                delay={500 + index * 100}
                stagger={100}
                index={index}
              >
                <div
                  className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 group ${
                    listing.featured
                      ? "border-red-500/50 shadow-lg shadow-red-500/10"
                      : "border-gray-700/50 hover:border-red-500/30"
                  }`}
                >
                  {listing.featured && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ FEATURED
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-2xl">
                        {listing.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                          {listing.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {listing.company}
                        </p>
                      </div>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-red-500/20 rounded-full">
                      <BookmarkPlus className="w-5 h-5 text-gray-400 hover:text-red-400" />
                    </button>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {listing.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{listing.location}</span>
                      <span className="text-red-400">•</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          listing.type === "Remote"
                            ? "bg-green-500/20 text-green-400"
                            : listing.type === "Hybrid"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {listing.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{listing.duration}</span>
                      <span className="text-red-400">•</span>
                      <span className="text-green-400 font-semibold">
                        {listing.stipend}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Posted {listing.posted}</span>
                      <span className="text-red-400">•</span>
                      <span>{listing.applicants} applicants</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="bg-red-600/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {listing.skills.length > 3 && (
                      <span className="bg-gray-600/20 text-gray-400 px-2 py-1 rounded-full text-xs">
                        +{listing.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-300">
                        {listing.rating}
                      </span>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More Button */}
          <ScrollReveal animation="fadeSlideUp" duration={600} delay={500}>
            <div className="text-center mt-12">
              <button className="bg-gray-800/50 hover:bg-red-600 border border-gray-600 hover:border-red-500 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                Load More Opportunities
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title Animation */}
          <ScrollReveal animation="slideUp" duration={700} easing="spring">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Why Choose <span className="text-red-500">Careertronic's</span>{" "}
                Internship Program?
              </h2>
            </div>
          </ScrollReveal>

          {/* Feature Cards Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal
                key={index}
                animation="fadeSlideUp"
                duration={800}
                easing="bouncy"
                delay={100}
                index={index}
                stagger={100}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group border border-gray-700/50 hover:border-red-500/30">
                  <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          {/* Heading Animation */}
          <ScrollReveal animation="slideUp" duration={700} easing="spring">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                How <span className="text-red-500">Careertronic</span> Internship
                Program Works
              </h2>
              <p className="text-xl text-gray-300">
                A simple, streamlined process designed to connect you with the
                perfect internship opportunity.
              </p>
            </div>
          </ScrollReveal>

          {/* Steps Animation */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
            {steps.map((step, index) => (
              <ScrollReveal
                key={index}
                animation="fadeSlideUp"
                duration={800}
                easing="bouncy"
                delay={100}
                index={index}
                stagger={100}
              >
                <div className="flex flex-col items-center text-center max-w-xs group relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-red-500 mt-8 hidden lg:block absolute right-[-2rem] opacity-50" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-red-500">Internship Opportunities</span>{" "}
              Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              Discover exciting internship opportunities across diverse
              industries and find the perfect match for your career aspirations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesSection.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group border border-gray-700/50 hover:border-red-500/30"
              >
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="testimonials" className="py-16 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          {/* Animated Heading */}
          <ScrollReveal animation="fadeSlideUp" duration={700} easing="spring">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Success Stories
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, index) => (
              <ScrollReveal
                key={index}
                animation="slideUp"
                duration={800}
                easing="bouncy"
                index={index}
                stagger={150}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border-l-4 border-red-500 rounded-r-xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105">
                  <blockquote className="text-lg italic mb-4 text-gray-300">
                    {index === 0
                      ? `"The internship I secured through Careertronic was the perfect start to my career in digital marketing. The hands-on experience, combined with the mentorship I received, helped me land a full-time position with the same company."`
                      : `"Careertronic helped me find an engineering internship with a leading firm. The process was simple, and I got the chance to work on real projects that I can now proudly add to my portfolio."`}
                  </blockquote>
                  <cite className="text-red-400 font-semibold">
                    {index === 0
                      ? "— Neha P., Digital Marketing Intern"
                      : "— Ravi K., Engineering Intern"}
                  </cite>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 bg-gradient-to-r from-black via-red-900/20 to-black"
      >
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal animation="fadeSlideUp" duration={700}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeSlideUp" duration={700} delay={100}>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join Careertronic's Internship Program today and take the first step
              toward a successful and fulfilling future!
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Mail className="w-8 h-8 text-red-500 mx-auto mb-4" />,
                title: "Email Us",
                text: "support@careertronic.com",
              },
              {
                icon: <Phone className="w-8 h-8 text-red-500 mx-auto mb-4" />,
                title: "Call Us",
                text: "+1 (800) 123-4567",
              },
              {
                icon: <Globe className="w-8 h-8 text-red-500 mx-auto mb-4" />,
                title: "Global Reach",
                text: "Worldwide Opportunities",
              },
            ].map((card, index) => (
              <ScrollReveal
                key={index}
                animation="slideUp"
                duration={600}
                easing="bouncy"
                index={index}
                stagger={100}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700/50">
                  {card.icon}
                  <h3 className="text-lg font-semibold mb-2 text-red-400">{card.title}</h3>
                  <p className="text-gray-300">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeSlideUp" duration={600} delay={300}>
            <div className="flex justify-center space-x-6 mb-8">
              {[Linkedin, Facebook, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-gray-900/50 p-4 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 border border-gray-700/50"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="zoomIn" duration={500} delay={500}>
            <button className="bg-gradient-to-r from-red-600 to-red-700 px-12 py-4 rounded-full text-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
              Get Started Now
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-red-900/30 text-center text-gray-400">
        <p>
          &copy; 2025 Careertronic. All rights reserved. Building careers, one
          internship at a time.
        </p>
      </footer>
    </div>
  );
}
