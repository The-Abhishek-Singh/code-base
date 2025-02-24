"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";
import SearchModal from "./UI/NavSearch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const item = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Become a Partner", link: "/partner" },
    { title: "Contact Us", link: "/contact" },
    { title: "Business Consulting", link: "/consulting" },
  ];

  return (
    <nav className="w-full bg-black border-b border-gray-200 fixed z-50 ">
      <div className="w-full px-2 md:px-4">
        <div className="flex h-20 items-center justify-between lg:justify-around">
          {/* Left section */}
          <div className="flex items-center h-full w-[200px] xl:w-[250px]">
          <Link href="/" className="flex items-center gap-2 h-full xl:p-3">
  <Image
    src="/Logo.png"
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
            {item.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="relative py-1 text-xs xl:text-sm font-medium text-gray-100 transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search button */}
            <SearchModal />

            {/* Login button */}
            <button className="flex items-center justify-center bg-transparent border border-red-700 text-white p-2 rounded-lg hover:bg-red-700 md:w-[90px] md:h-[40px]">
              <LogIn className="w-4 xl:w-4.5 h-4 xl:h-4.5" />
              <span className="ml-2 hidden sm:inline text-xs xl:text-sm">
                Login
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 md:p-2 rounded-lg text-gray-100 lg:hidden bg-transparent border border-red-700 hover:bg-red-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed z-10 inset-x-0 top-16 bg-black border-b border-gray-200 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ maxHeight: isMenuOpen ? "100vh" : "0" }}
        >
          <div className="px-4 py-2 space-y-1 mt-5">
            {item.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-100 hover:text-red-400 transition-colors"
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
