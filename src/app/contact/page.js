import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* Get in Touch Section */}
      <div className="w-full bg-[#D9D9D9] border-b border-blue-200 ">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-center text-red-600 text-2xl font-bold mb-2">GET IN TOUCH</h2>
          <p className="text-center mb-1">Phone: +1(91) 8602755547</p>
          <p className="text-center text-sm">1st Floor, E-108, Sector 1, Near axis juice center, Devendra Nagar, Raipur, Chhattisgarh Pin(492001)</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className='p-10'
       style={{
        backgroundImage: `url("/contact/careertronic.jpeg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        opacity: '',
        padding: '20px',
      }} >

      <div className="max-w-6xl mx-auto px-4  py-8 h-[35rem] flex justify-center items-center">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-black rounded shadow-sm bg-white/90 opacity-50 placeholder:text-gray-700 focus:opacity-100 focus:bg-white/50 focus:backdrop-blur-md transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-black rounded shadow-sm bg-white/90 opacity-50 border-solid placeholder:text-gray-700 focus:opacity-100 focus:bg-white/50 focus:backdrop-blur-md transition-all duration-300"
              />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full p-2 border border-black rounded shadow-sm bg-white/90 opacity-50 border-solid placeholder:text-gray-700 focus:opacity-100 focus:bg-white/50 focus:backdrop-blur-md transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Send Message"
                className="w-full h-[12rem] md:h-full p-2 border border-black rounded shadow-sm bg-white/90 opacity-50 border-solid placeholder:text-gray-700 focus:opacity-100 focus:bg-white/50 focus:backdrop-blur-md transition-all duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Office Locations */}
      <div className="bg-[#D9D9D9] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Head Office */}
            <div className="bg-white p-6 rounded shadow border-l-4 border-red-600">
              <h3 className="text-red-600 font-bold mb-4">HEAD OFFICE</h3>
              <p className="mb-4">
                Gachibowli, Hyderabad,<br />
                Telangana 500032
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">📞</span>
                  +91 8602755547
                </p>
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">✉️</span>
                  <a href="mailto:contact@chanakyans.in" className="underline">
                    contact@chanakyans.in
                  </a>
                </p>
              </div>
            </div>

            {/* Branch Office 1 */}
            <div className="bg-white p-6 rounded shadow border-l-4 border-red-600">
              <h3 className="text-red-600 font-bold mb-4">BRANCH OFFICE</h3>
              <p className="mb-4">
                Off No-4, Agrasen Chowk, Nehru<br />
                Nagar, Bhilai 490020
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">📞</span>
                  +91 8602755547
                </p>
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">✉️</span>
                  <a href="mailto:contact@chanakyans.in" className="underline">
                    contact@chanakyans.in
                  </a>
                </p>
              </div>
            </div>

            {/* Branch Office 2 */}
            <div className="bg-white p-6 rounded shadow border-l-4 border-red-600">
              <h3 className="text-red-600 font-bold mb-4">BRANCH OFFICE</h3>
              <p className="mb-4">
                E-108, Sector 1, Devendra Nagar,<br />
                Raipur 492004
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">📞</span>
                  +91 8602755547
                </p>
                <p className="flex items-center">
                  <span className="text-red-600 mr-2">✉️</span>
                  <a href="mailto:contact@chanakyans.in" className="underline">
                    contact@chanakyans.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
