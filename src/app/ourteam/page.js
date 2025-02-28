'use client'
import React from 'react'
const TeamMember = ({ name, role, imageUrl }) => (
    <div className="relative group overflow-hidden rounded-3xl">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <div className="absolute bottom-0 p-6 space-y-2">
          <h3 className="text-3xl font-bold text-white">{name}</h3>
          <p className="text-gray-200 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
const teamMembers = [
    {
    name: 'Kritika',
    role: 'Expert UI/UX Designer & Front-end Developer',
    imageUrl: '/Frame 326.jpg'
    },
    {
    name: 'Leelam',
    role: 'Expert UI/UX Designer & Front-end Developer',
    imageUrl: '/Frame 319.jpg'
    },
    {
    name: 'Kunal',
    role: 'Expert UI/UX Designer & App Developer',
    imageUrl: '/Frame 320.png'
    },
    {
    name: 'Abhishek',
    role: 'Expert UI/UX Designer & Front-end Developer',
    imageUrl: '/Frame 327.jpg'
    },
    {
    name: 'Rounak',
    role: 'Expert Front-end Developer',
    imageUrl: '/Frame 322.jpg'
    },
    {
    name: 'Vatsalya',
    role: 'Expert Full Stack Developer',
    imageUrl: '/Frame 323.jpg'
    },
    {
    name: 'Divyanshu',
    role: 'Expert Front-end Developer',
    imageUrl: '/Frame 324.jpg'
    },
    {
    name: 'Mithun',
    role: 'Expert Full Stack Developer',
    imageUrl: '/Frame 325.jpg'
    }
];
const page = () => {
  return (
    <div className="main-container h-auto w-full bg-black">
        <div className="relative h-20 z-1 bg-black"></div>
        <div className="relative hero-bg h-auto bg-black text-white">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
            {/* Main content container */}
            <div className="relative z-10 container mx-auto lg:pl-28 py-5 pl-8 flex flex-col lg:pr-0 pr-8  md:flex-row items-center justify-between gap-12 mb-14">
                {/* Text content section */}
                <div className="w-full md:w-1/2 space-y-32">
                <div className="space-y-2">
                    <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-bold">
                    ABOUT
                    </h2>
                    <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-bold">
                    OUR
                    </h2>
                    <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-bold text-red-600">
                    TEAM
                    </h2>
                </div>
                <div className="space-y-5 flex relative z-10 justify-between w-[60vw] lg:gap-0 gap-5">
                {/* Decorative line */}
                <div className="absolute top-0 left-0">
                    <div className="container mx-auto w-full">
                    <div className="w-[75vw] h-1 bg-yellow-600" />
                    </div>
                </div>
                    <p className="sm:text-lg lg:w-[30%] text-sm text-gray-300">
                    Careertronic Globle Pvt Ltd
                    </p>
                    <p className="sm:text-xl lg:w-[40%] text-md text-gray-200">
                    Meet the talented individuals who drive the company's remarkable achievements!
                    </p>
                </div>
                </div>
                {/* Image section */}
                <div className="w-full md:w-1/2 mb-14">
                <div className="relative">
                    {/* Decorative lighting effect */}
                    {/* <div className="absolute -top-8 right-0 w-full">
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="w-16 h-16 rounded-full bg-amber-500/20 blur-xl"
                            style={{
                            transform: `translateY(${i % 2 * 10}px)`,
                            opacity: 0.5 + (i / 16)
                            }}
                        />
                        ))}
                    </div>
                    </div> */}
                    {/* Team image */}
                    <img
                    src='/Frame 339.png'
                    alt="Team meeting with creative lighting"
                    className="w-full rounded-lg shadow-2xl relative -top-5"
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="h-auto bg-[#161616] text-white p-8 mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Image Container */}
                    <div className="w-full md:w-1/2">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-900 p-1">
                        <img
                        src="/Frame 340.png"
                        alt="Portrait of company founder"
                        className="w-full rounded-2xl"
                        />
                    </div>
                    </div>
                    {/* Content Container */}
                    <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-5xl font-bold text-white">
                        Founder & CEO
                    </h2>
                    <h3 className="text-3xl font-medium text-white">
                        Mr. Akshay Agrawal
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        The driving force behind the vision, the Founder leads
                        with innovation and a passion for technology. With a
                        strong focus on digital transformation and problem-solving,
                        they established the company to bridge the gap between
                        business needs and modern IT solutions. Their leadership
                        ensures continuous growth in IT services, training, and
                        global career opportunities.
                    </p>
                    <div className="pt-4">
                        <p className="text-lg text-gray-300">
                        Experience: <span className="font-semibold">5yr+</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="h-auto bg-[#161616] text-white p-8 mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Content Container */}
                    <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-5xl font-bold text-white">
                        Founder & CEO
                    </h2>
                    <h3 className="text-3xl font-medium text-white">
                        Miss.  Himanshi Bhagwani
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        The driving force behind the vision, the Founder leads
                        with innovation and a passion for technology. With a
                        strong focus on digital transformation and problem-solving,
                        they established the company to bridge the gap between
                        business needs and modern IT solutions. Their leadership
                        ensures continuous growth in IT services, training, and
                        global career opportunities.
                    </p>
                    <div className="pt-4">
                        <p className="text-lg text-gray-300">
                        Experience: <span className="font-semibold">5yr+</span>
                        </p>
                    </div>
                    </div>
                    {/* Image Container */}
                    <div className="w-full md:w-1/2">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-900 p-1">
                        <img
                        src="/Frame 341.png"
                        alt="Portrait of company founder"
                        className="w-full rounded-2xl"
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-[#161616] py-20 px-4 mt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-5xl font-bold text-white text-center mb-16">
                    MEET OUR TEAM
                    </h2>
                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        imageUrl={member.imageUrl}
                        />
                    ))}
                    </div>
                </div>
            </div>
    </div>
  )
}
export default page