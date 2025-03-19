import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="text-white py-10 px-6 md:px-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Footerbggg.png"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-0"
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-col md:justify-between border-b border-gray-700 pb-8">
          <div className="flex flex-row mb-6 md:mb-0">
            <div>
              <Image
                src="/FooterLogo.png"
                alt="Careertronic Logo"
                width={120}
                height={80}
              />
            </div>
            <div className="mt-5 ml-5">
              <h2 className="text-2xl font-bold text-red-500 mt-2">
                CAREERTRONIC
              </h2>
              <p className="mt-2 w-90 text-gray-400">
                Explore our services today and discover how we can empower your
                business or career. 
              </p>
            </div>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div>
              <h3 className="font-semibold mb-2">Reach us</h3>
              <p className="text-gray-400 hover:text-red-500">📞 Contact: +91 9343202785</p>
              <p className="text-gray-400 hover:text-red-500">📧 mail: contact@careertronics.in</p>
              <p className="text-gray-400 hover:text-red-500">
              📍E-108, Sector 1, Devendra Nagar, <span className="ml-5">Raipur 492004</span> 
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="text-gray-400 space-y-1 ">
                <li className="hover:text-red-500">About</li>
                <li className="hover:text-red-500">Contact</li>
                <li className="hover:text-red-500">Services</li>
                <li className="hover:text-red-500">Business consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="text-gray-400 space-y-1">
                <li className="hover:text-red-500">Privacy Policy</li>
                <li className="hover:text-red-500">Terms & Services</li>
                <li className="hover:text-red-500">Terms of Use</li>
                <li className="hover:text-red-500">Refund Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-400 space-y-1">
                <li className="hover:text-red-500">Software training</li>
                <li className="hover:text-red-500">Industrial training</li>
                <li className="hover:text-red-500">Custom Software development</li>
                <li className="hover:text-red-500">Become a Franchise partner</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
       
        <div className="text-center text-gray-500 text-sm mt-6">
          Copyright © 2024{" "}
          <span className="text-red-500">
            Careertronic Global Services Pvt. Ltd
          </span>{" "}
          | All rights reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;