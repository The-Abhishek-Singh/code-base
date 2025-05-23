"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";
import SearchModal from "./UI/search/SearchModal";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Close menu when clicking a link on mobile
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  const items = [
    { title: "Home", link: "/home" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Courses", link: "/courses" },
    { title: "Become a Partner", link: "/partner" },
    { title: "Business Consulting", link: "/consulting" },
    { title: "Contact Us", link: "/contact" },
  ];
  return (
    <nav
      className={`w-full bg-black/45 mb-4 bg-opacity-90 fixed top-0 left-0 transition-all duration-300 backdrop-blur-lg ease-in-out z-50 ${
        isVisible
  ? "opacity-100 pointer-events-auto transition-opacity duration-500 ease-in-out"
  : "opacity-0 transition-opacity duration-500 ease-in-out delay-200 pointer-events-none"
      }`}
    >
      <div className="w-full px-2 md:px-4">
        <div className="flex h-20 items-center justify-between lg:justify-around">
          {/* Left section */}
          <div className="flex items-center h-full w-[200px] xl:w-[250px]">
            <Link href="/" className="flex items-center gap-2 h-full xl:p-3">
              <Image
                src="/navbar/Logo.png"
                alt="Careertronics"
                width={150}
                height={50}
                className="w-full p-0"
                priority
              />
            </Link>
          </div>
          {/* Center section - Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-6">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="relative py-1 text-xs xl:text-sm font-medium text-gray-100 hover:text-white group"
              >
                <span>{item.title}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          {/* Right section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search button */}
            <SearchModal />
            {/* Login button */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center bg-transparent border border-red-700 text-white p-2 rounded-lg hover:bg-red-700 transition-colors md:w-[120px] md:h-[40px]"
              >
                <LogIn className="w-4 xl:w-4.5 h-4 xl:h-4.5" />
                <span className="ml-2 hidden sm:inline text-xs xl:text-sm">
                  Login
                </span>
                <svg
                  className="w-3 h-3 ml-1 mt-0.5 fill-white"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 7l4.5 4 4.5-4H5.5z" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 sm:left-0 mt-2 w-28 sm:w-full bg-white text-black rounded-lg shadow-md z-20">
                  <Link
                    href="https://courses.careertronic.com/"
                    className="block px-4 py-2 text-sm hover:bg-red-100 hover:text-red-700 rounded-t-lg"
                  >
                    Course Login
                  </Link>
                  <Link
                    href={"/Login"}
                    className="block px-4 py-2 text-sm hover:bg-red-100 hover:text-red-700 rounded-b-lg"
                  >
                    Job Login
                  </Link>
                </div>
              )}
            </div>
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-1 md:p-2 rounded-lg text-gray-100 lg:hidden bg-transparent border border-red-700 hover:bg-red-700 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 top-20 bg-black border-b border-gray-200 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          style={{
            maxHeight: isMenuOpen ? "calc(100vh - 5rem)" : "0",
            overflow: "hidden"
          }}
        >
          <div className="px-4 py-2 space-y-1 mt-2 mb-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-100 hover:text-red-400 hover:bg-gray-900 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;