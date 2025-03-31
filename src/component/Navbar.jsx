"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";
import SearchModal from "@/component/UI/search/SearchModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < lastScrollTop || scrollTop < 50);
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const items = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Courses", link: "/courses" },
    { title: "Become a Partner", link: "/partner" },
    { title: "Business Consulting", link: "/consulting" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="w-full px-4 lg:px-8 backdrop-blur-lg bg-black/50 shadow-md">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/">
            <Image
              src="/navbar/Logo.png"
              alt="Careertronics"
              width={150}
              height={50}
              className="w-[150px] xl:w-[200px]"
              priority
            />
          </Link>
          <div className="hidden lg:flex space-x-6">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="relative text-white hover:text-red-500 transition-all"
              >
                {item.title}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <SearchModal />
            <Link href="/Login">
              <button className="flex items-center px-4 py-2 border border-red-500 rounded-lg text-white hover:bg-red-500 transition-all">
                <LogIn size={18} />
                <span className="ml-2 hidden sm:inline">Login</span>
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg border border-red-500 text-white hover:bg-red-500 transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 w-full bg-black/70 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-center py-4 space-y-2">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="block w-full text-center py-2 text-white hover:text-red-400 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
