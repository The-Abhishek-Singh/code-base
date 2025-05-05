import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Form from '@/components/course/Forms';
import Button from '@/components/course/Button';
import DevOpsSkills from '@/components/course/DevOpsSkills';
import CourseSection from '@/components/course/CourseSection';
import CourseRoadmap from '@/components/course/CourseRoadmap';
import FAQSection from '@/components/course/FAQSection';
import FeeStructure from '@/components/course/FeeStructure';
import { FaIndustry, FaProjectDiagram, FaWatchmanMonitoring } from "react-icons/fa";
import ScrollReveal from '@/components/ScrollReveal';


function page(){
  const reviews = [
    {
      initials: "A",
      name: "Aman Sharma",
      review: "This course is a must for anyone preparing for system design interviews! The real-world case studies on Uber, Netflix, and WhatsApp helped me understand how large-scale applications work. The explanations on microservices and database scaling were crystal clear. Highly recommended!.",
      rating: 5,
    },
    {
      initials: "P",
      name: "Priya Desai",
      review: "Great content with detailed coverage of caching, message queues, and load balancing. The instructor explained concepts in a structured way, making them easy to grasp. I just wish there were more coding exercises to practice system design problems.",
      rating: 4,
    },
    {
      initials: "R",
      name: "Rahul Verma",
      review: "As a backend developer, this course helped me improve my architectural thinking. Learning about CAP theorem, database sharding, and security best practices gave me a deeper understanding of system scalability. Definitely worth it!.",
      rating: 5,
    },
  ]
  const projects = [
    {
      title: "Design & Simulation of Control Systems",
      description:
      "Master the fundamentals of designing, modeling and testing automated control systems using industry-standard simulation software. Create functional prototypes that demonstrate your ability to optimize industrial processes.",
      icon: <FaProjectDiagram className="text-white text-3xl" />,
    },
    {
      title: "Design & Implementation of Control Scheme Remote Monitoring",
      description:
      "Develop skills to implement robust remote monitoring solutions that allow real-time supervision of industrial processes from anywhere. Learn to configure secure data transmission and intuitive visualization dashboards.",
      icon: <FaWatchmanMonitoring className="text-white text-3xl" />,
    },
    {
      title: "Industrial Live Project",
      description:
      "Apply all your learnings in a capstone project addressing real industrial challenges. Work with actual automation equipment to design, implement and troubleshoot a complete control system solution.",
      icon: <FaIndustry className="text-white text-3xl" />,
    },
    ];
  const courseDesc = [
    {
      title: 'Versatile Industry Applications',
      description: 'Become qualified for roles like Automation Engineer, Control Systems Specialist, and Manufacturing Technologist with this comprehensive industrial automation certification course.'
    },
    {
      title: 'Expert-Level Certification',
      description: 'Enhance your professional profile by preparing for industry-recognized certifications and significantly improve your marketability to leading manufacturing employers.'
    },
    {
      title: 'Practical Automation Mastery',
      description: 'Experience our state-of-the-art simulation laboratory featuring 40+ industry-standard scenarios. Develop your industrial automation expertise through hands-on troubleshooting and real equipment configuration.'
    }
  ];
    const courses1 = [
      {
        title: "Introduction to Industrial Automation",
        duration: "1 Week",
        description: "This module provides an overview of industrial automation, covering the fundamental concepts, key components, and various control systems used in automated industries. It lays the foundation for understanding how automation improves efficiency, consistency, and safety in industrial processes.",
        topics: {
          "What is Automation?": "Understanding the concept and significance of automation in industrial settings",
          "Components Used in Automation": "Exploring essential components such as sensors, actuators, controllers, and interfaces",
          "Control Systems in Automation": "Introduction to different types of control systems including PLCs, SCADA, and DCS"
        }
      },
      {
        title: "Instrumentation & Sensor Basics",
        duration: "1 Week",
        description: "This module introduces the foundational concepts of instrumentation and sensors used in industrial automation. Students will explore measurement principles, commonly used sensors in factory and process automation, and key control elements for managing industrial processes.",
        topics: {
          "Measurement Basics": "Understanding the fundamental principles of industrial measurements",
          "Widely Used Sensors in FA & PA": "Overview of commonly used sensors in Factory Automation (FA) and Process Automation (PA)",
          "Process Instrumentation Fundamentals": "Basics of measuring Temperature, Pressure, Flow, and Level in industrial systems",
          "Machine Monitoring Sensors": "Introduction to Load Cells, Speed Transducers, and Proximity Sensors used for machine condition monitoring",
          "Control Elements": "Working with control devices like Solenoid Valves and Control Valves for process regulation"
        }
      },
      {
        title: "Programmable Logic Controller (PLC)",
        duration: "1 Week",
        description: "This module provides a comprehensive introduction to Programmable Logic Controllers (PLCs), covering their evolution, architecture, types, and configurations. It also explores PLC programming interfaces, safety considerations, and limitations, equipping learners with the knowledge to understand and work with PLC systems in industrial environments.",
        topics: {
          "Introduction and Evolution of PLC": "Overview of the development and significance of PLCs in industrial automation",
          "Architecture of a PLC": "Understanding the internal structure and working of a PLC system",
          "Elements of PLC": "Exploring the core components that make up a PLC",
          "PLC Family – Nano, Micro, Small & Large": "Classification of PLCs based on size and functionality",
          "Evaluation of PLC Power": "Assessing the performance and power requirements of various PLCs",
          "PLC Configuration – Simplex & Redundant": "Understanding different PLC configurations for reliability and fault tolerance",
          "Programming Console": "Introduction to PLC programming interfaces and tools",
          "Earthing and Protection Circuits": "Safety and grounding practices in PLC systems",
          "Limitations of PLC": "Identifying the challenges and constraints of using PLCs in industrial applications"
        }
      }      
    ];
    const courses2 = [
      {
        title: "Motors & Variable Speed Drives",
        duration: "1 Week",
        description: "This module focuses on the fundamentals of electric motors and variable speed drives, essential for controlling industrial machinery. Learners will gain an understanding of motor control principles, starting methods, types of drives, and electrical panel design used in automation systems.",
        topics: {
          "Understanding of Motor and Terminology": "Basics of electric motors and key terms used in motor control",
          "Primary Purpose of Motor Control": "Exploring why motor control is essential in industrial operations",
          "Motor Starting Solutions": "Different techniques for starting motors efficiently and safely",
          "Introduction to AC Drive": "Understanding AC drives and their role in controlling motor speed",
          "Types of AC Drive": "Various types of AC drives and their applications",
          "Introduction to DC Drives": "Overview of DC drives and their use in specific industrial scenarios",
          "Electrical Switchgears & Panel Design": "Introduction to switchgear components and fundamentals of electrical panel design"
        }
      },
      {
        title: "HMI & SCADA",
        duration: "1 Week",
        description: "This module introduces Human Machine Interface (HMI) and Supervisory Control and Data Acquisition (SCADA) systems, which are crucial for monitoring and controlling industrial processes. Students will explore the concepts, hardware types, configuration techniques, and communication protocols that enable real-time visualization and control.",
        topics: {
          "Concept of HMI & SCADA": "Introduction to the roles and functions of HMI and SCADA systems in industrial automation",
          "Hardware HMI Types & Selection": "Overview of different HMI hardware and how to select the appropriate type for an application",
          "PC Based HMI": "Understanding how PC-based HMI systems are designed and implemented",
          "Industrial Data Communication": "Exploring communication protocols and networking in industrial systems",
          "Features of SCADA": "Key features and benefits of SCADA systems for remote monitoring and control",
          "Configuring Graphics, Alarms, Trends & Reports": "Hands-on configuration of SCADA elements like graphics, alarm management, trend analysis, and report generation"
        }
      },
      {
        title: "PLC & HMI Programming",
        duration: "1 Week",
        description: "This module focuses on programming techniques for PLCs and HMIs based on the IEC 61131-3 standard. Learners will understand the various programming languages used in industrial automation, develop skills in creating logic using Ladder, FBD, ST, and SFC, and explore how to program HMIs and SCADA systems for effective user interaction and control.",
        topics: {
          "Concept of IEC 61131-3 & PLC Programming": "Overview of the international standard for PLC programming and its importance",
          "Programming Devices": "Understanding devices used to program and configure PLCs",
          "Understanding and Using Ladder, Function Block, Structured Text, Sequence Flow Chart": "Hands-on with key PLC programming languages and methodologies",
          "Diagnostics & Troubleshooting": "Techniques to identify and resolve issues in PLC programs and hardware",
          "HMI Programming": "Developing interactive HMI screens for industrial applications",
          "SCADA Programming": "Building SCADA configurations for monitoring, control, and visualization"
        }
      }      
    ];
    const courses3 = [
      {
        title: "Factory Automation Applications",
        duration: "1 Week",
        description: "This module provides real-world insights into the application of automation technologies across various industrial domains. Learners will explore how factory automation is implemented in different machinery, enhancing efficiency, precision, and production capabilities.",
        topics: {
          "Plastic Injection Moulding & Extrusion Machine": "Understanding automation systems used in plastic processing machines for molding and extrusion",
          "Pharmaceutical Machine": "Exploring automated systems in pharmaceutical manufacturing and packaging processes",
          "Textile Machine": "Automation technologies in textile machinery for improved speed and quality",
          "Packaging Machine": "Implementation of automation in modern packaging lines to ensure consistency and productivity"
        }
      },
      {
        title: "Process Automation Applications",
        duration: "1 Week",
        description: "This module explores the implementation of automation systems in various process industries. Students will gain an understanding of how automation enhances efficiency, safety, and scalability in complex industrial environments such as steel, chemical, power, oil & gas, and more.",
        topics: {
          "Steel Plant Applications": "Automation in steel manufacturing processes including material handling and furnace control",
          "Chemical Plant Applications": "Use of automation in chemical processing for precision, safety, and batch control",
          "Power Plant Applications": "Automation strategies in power generation and distribution systems",
          "O&G Applications": "Process automation in oil and gas industries for drilling, refining, and distribution",
          "Sugar Plant Applications": "Controlling and monitoring of sugar production processes through automation",
          "Pulp & Paper Applications": "Automation in paper production for continuous process control and quality assurance"
        }
      },
      {
        title: "Process Controllers – Single & Multi-loop PID Controllers",
        duration: "1 Week",
        description: "This module dives deep into process control systems with a focus on PID controllers. Students will explore control strategies, tuning methods, and control algorithms. The module also introduces advanced control configurations and the capabilities of multi-loop controllers used in industrial automation.",
        topics: {
          "Understanding PID – Mother of all Controls": "Introduction to Proportional-Integral-Derivative (PID) control and its industrial relevance",
          "Overview of Various Control Strategies": "Examination of On-Off, Manual Tuning, Fuzzy Logic, Auto-Tune, and Self-Tune techniques",
          "Overview of Control Algorithm": "Exploring control algorithms including Feedback, Feed-forward, Cascade, and Ratio control",
          "Capabilities of Multi-Loop Controllers": "Advanced features, applications, and programming techniques of multi-loop controllers"
        }
      }      
      ];
const courses4 = [
  {
    title: "DCS Systems",
    duration: "1 Week",
    description: "This module introduces Distributed Control Systems (DCS), covering their architecture, components, and applications in industrial automation. Students will learn how DCS systems are configured, programmed, and integrated with field devices and communication protocols for comprehensive process control.",
    topics: {
      "Introduction and Evolution of DCS": "Understanding the history and development of Distributed Control Systems",
      "DCS System Hardware and Firmware": "Overview of controllers, I/O modules, and their embedded firmware",
      "DCS System Software and Protocols": "Exploring DCS software architecture, communication protocols, and system operations",
      "Basic DCS Controller Configuration": "Configuring controllers for process control and system monitoring",
      "Communication for DCS & OIS": "Introduction to communication channels between DCS and Operator Interface Systems",
      "Local Area Network Systems": "Understanding the role of LANs in DCS communication and integration",
      "Integration of Fieldbus Systems": "Connecting field devices using fieldbus protocols for seamless automation",
      "Programming of DCS Systems": "Developing and managing control logic and strategies within DCS platforms",
      "Alarm System Management": "Setting up and managing alarms for efficient plant operation and safety",
      "DCS System Reporting": "Generating reports for operational analysis and regulatory compliance"
    }
  },
  {
    title: "Industrial Data Communication & Networking",
    duration: "1 Week",
    description: "This module introduces industrial data communication systems and networking concepts essential for automation. Students will explore network types, topologies, and protocols used in industrial settings, alongside the importance of interoperability, media, and devices for effective communication.",
    topics: {
      "What is Industrial Data Communication?": "Understanding the role of data communication in industrial automation and control",
      "What is a Network?": "Exploring the fundamentals of computer networks in industrial contexts",
      "Examples & Types of Network": "Different network types used in industrial automation, including LAN, WAN, and field networks",
      "Network Topologies": "Understanding different network architectures and how they impact communication efficiency",
      "Selection Criteria of Suitable Network for Given Application": "Evaluating and selecting the appropriate network for specific industrial applications",
      "Interoperability Between Different Networks": "Ensuring seamless communication between various industrial network types and systems",
      "Media, Switch, and Protocol Converter Usage": "Using media, switches, and protocol converters to facilitate reliable communication in industrial networks",
      "Key Applications of Popular Network Types": "Exploring real-world applications of common industrial networks like Profibus, Ethernet/IP, and Modbus"
    }
  },
  {
    title: "Industrial IoT & Infrastructure Automation Applications",
    duration: "1 Week",
    description: "This module introduces Industrial Internet of Things (IIoT) concepts, its infrastructure, and applications in automation. Students will learn about IIoT hardware, how IoT works in an industrial context, and real-world case studies showcasing its applications in industry.",
    topics: {
      "What is Industrial IoT?": "Exploring the fundamentals of Industrial IoT (IIoT) and its impact on modern automation",
      "How IoT Works & Its Enterprise View": "Understanding IoT systems from both a technical and enterprise perspective",
      "Industrial IoT Framework": "Overview of the architectural framework for deploying IIoT solutions",
      "IIoT Hardware – Gateways, IO Modules, Remote Access, Cloud-Box": "Exploring key IIoT hardware components like gateways, input-output modules, and cloud-box systems",
      "3C – Connect, Collect, Consume": "Understanding the three core stages of IoT data lifecycle: connecting devices, collecting data, and consuming information",
      "Application Notes": "Exploring common use cases and application scenarios of IIoT in industrial environments",
      "Case Studies of Installed Applications": "Real-world examples and case studies of successful IIoT implementations in various industries"
    }
  }    
];
const courses5 = [
  {
    title: "Projects 1 & 2",
    duration: "2 Weeks",
    description: "This module focuses on the design, simulation, and implementation of control systems. Students will work on real-world projects, including remote monitoring and control scheme development, along with project execution planning, documentation, and safety protocols. Professional grooming and interview skill training will also be covered to prepare students for industry roles.",
    topics: {
      "Design & Simulation of Control Systems": "Designing and simulating control systems for automation applications",
      "Design & Implementation of Control Scheme Remote Monitoring": "Developing and implementing control schemes for remote monitoring in industrial environments",
      "Project Execution Planning - Theory": "Understanding the theoretical concepts behind effective project planning and execution",
      "Projects Documentation": "Documenting project plans, processes, and results for professional presentation",
      "Basic Safety in Sites": "Learning safety protocols and procedures for working in industrial environments",
      "Professional Grooming Sessions": "Developing professional skills required for industry roles, including communication and teamwork",
      "Basic Lab": "Hands-on experience with control systems and automation technologies in a lab setting",
      "Interview Skill Training": "Training on how to effectively present yourself in interviews and market your skills",
      "Industrial Live Project": "Working on an industrial live project, simulating real-world challenges and solutions"
    }
  }  
];
const jobRoles = [
  {
    logo: '/coursePage/ABB.png',
    logoAlt: 'ABB Logo',
    title: 'ABB Group',
    company: 'ABB Ltd'
  },
  {
    logo: '/coursePage/adani-power.png',
    logoAlt: 'Adani Logo',
    title: 'Adani Group',
    company: 'Adani Enterprises Ltd'
  },
  {
    logo: '/coursePage/airbnb.svg',
    logoAlt: 'Airbnb Logo',
    title: 'Airbnb',
    company: 'Airbnb Inc.'
  },
  {
    logo: '/coursePage/emerson.png',
    logoAlt: 'Emerson Logo',
    title: 'Emerson Electric',
    company: 'Emerson Electric Co.'
  },
  {
    logo: '/coursePage/fuji.png',
    logoAlt: 'Fuji Logo',
    title: 'Fuji Electric',
    company: 'Fuji Electric Co., Ltd.'
  },
  {
    logo: '/coursePage/Honeywell.png',
    logoAlt: 'Honeywell Logo',
    title: 'Honeywell',
    company: 'Honeywell International Inc.'
  },
  {
    logo: '/coursePage/mitsubishi.png',
    logoAlt: 'Mitsubishi Logo',
    title: 'Mitsubishi Electric',
    company: 'Mitsubishi Electric Corporation'
  },
  {
    logo: '/coursePage/quantum.png',
    logoAlt: 'Quantum Logo',
    title: 'Quantum',
    company: 'Quantum Corporation'
  },
  {
    logo: '/coursePage/Rockwell.png',
    logoAlt: 'Rockwell Logo',
    title: 'Rockwell Automation',
    company: 'Rockwell International'
  },
  {
    logo: '/coursePage/Schneider.png',
    logoAlt: 'Schneider Logo',
    title: 'Schneider Electric',
    company: 'Schneider Electric SE'
  },
  {
    logo: '/coursePage/siemens.png',
    logoAlt: 'Siemens Logo',
    title: 'Siemens',
    company: 'Siemens AG'
  },
  {
    logo: '/coursePage/TECH-MAHINDRA.png',
    logoAlt: 'Tech Mahindra Logo',
    title: 'Tech Mahindra',
    company: 'Tech Mahindra Ltd'
  }
];


const skills = [
  'PLC Programming', 'SCADA', 'HMI', 'Ladder Logic', 'Industrial IoT',
  'Automation Studio', 'Sensors & Actuators', 'PID Control', 'Siemens TIA Portal', 'Allen-Bradley',
  'Control Systems', 'Modbus', 'Ethernet/IP', 'Robotics', 'Industrial Safety'
];

  return (
    <div className='h-auto w-full'>
        <Navbar />

        {/* Hero Section */}
        <div className='min-h-[75vh] 2xl:min-h-[50vh] w-full bg-zinc-950 relative'>
            <div className='absolute h-[200px] w-[200px] top-32 left-48 rounded-full bg-[#1DD9FF] blur-[180px]'/>
            <Image src='/coursePage/100.png' alt='#' width={600} height={600} className='absolute bottom-0 h-auto w-full'/>
            <div className='relative top-0 left-0 w-full h-full flex xl:flex-row flex-col items-center jsutify-center'>
                <div className='left h-fit xl:w-1/2 w-full xl:px-24 xl:py-20 p-4 flex flex-col gap-10 items-start'>
                <ScrollReveal animation='slightRight' delay={100} easing='gentle'>
                <div className='rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase'>
                ONLINE Industrial Automation COURSE
                </div>
                </ScrollReveal>
                <ScrollReveal animation='fadeIn' delay={300} easing='spring'>
                  <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>
                      Your Ultimate Handbook for Mastering <span className='text-red-600 capitalize'>Industrial Automation</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal animation='slideUp' delay={500} easing='smooth'>
                  <p className='lg:text-xl sm:text-lg tracking-wide'>
                  Industrial Automation is a course that focuses on the technologies, systems, and processes used to automate industrial operations. It covers the integration of control systems such as PLCs, SCADA, sensors, and robotics to improve efficiency, safety, and precision in manufacturing environments. The course also explores the principles of automation, industrial communication protocols, and real-time monitoring, preparing learners to design and implement smart automated systems in modern industries.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation='scaleUp' delay={700} easing='bouncy' className='flex gap-4 items-start'>
                <Button text='Enquire Now' link={'/contact'} />
                <Button text='Enroll Now' link={'https://courses.careertronic.com/courses'}/>
                </ScrollReveal>   
                </div>
                  <div className='right h-fit xl:w-1/2 w-full xl:p-20 md:px-48 p-4'>
                  <ScrollReveal animation='slideLeft' delay={400} easing='smooth'>
                      <div className='h-full w-full'>
                      <Form text='Free Career Counselling is just a call away!'/>
                      </div>
                  </ScrollReveal>
                  </div>

            </div>
            <ScrollReveal animation='scaleUp' delay={200} easing='smooth' className='relative bottom-0 -translate-x-1/2 w-full z-20'>
            <div className='h-auto sm:w-[85%] w-[75%] rounded-lg px-5 py-3 bg-[#fff] relative bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between'>
            <ScrollReveal animation='slideUp' delay={800} easing='spring' className='relative flex flex-col sm:flex-row w-full text-black gap-5'>
                <div className='flex flex-col sm:flex-row w-full text-black gap-5'>
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                    <div className='h-auto'><p className='text-base md:text-lg'>Propgram Duration</p></div>
                    <div className='sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'><span className='text-3xl'>6</span> Months</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Time Commitment</p></div>
                   <div className='h-3/4 sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'>10-12 Hrs/Week</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Placement Support</p></div>
                   <div className='h-3/4 sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'>900+ Companies</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Enrollment</p></div>
                    <div className='h-3/4 flex items-center'><p className='font-bold text-lg md:text-2xl'>Highly Selective</p></div>
                   </div> 
                </div>
            </ScrollReveal>
            </div>
            </ScrollReveal>
        </div>

        {/* Steps Secction */}
        <div className='h-auto w-full bg-[#212121] relative flex lg:flex-row justify-around lg:pt-28 md:pt-20 sm:pt-40 pt-40 z-10'>
    {/* Image Section - Hidden on small screens, visible on medium and up */}
    <div className='w-full lg:w-[40%] relative hidden lg:block'>
        <div className="relative h-full">
            <Image src='/coursePage/103.png' alt='Image1' width={450} height={450} className='absolute -bottom-1 left-0 w-auto h-auto max-w-full max-h-[60vh]'/>
            <ScrollReveal animation='fadeIn' delay={700} easing='spring' className='relative h-full'> 
                {/* <Image src='/coursePage/105.png' alt='Image2' width={400} height={400} className='absolute bottom-40 left-72 w-auto h-auto max-w-[80%] hidden lg:block'/> */}
            </ScrollReveal>
                <Image src='/coursePage/101.png' alt='Image3' width={1000} height={1000} className='absolute -bottom-1 left-0 h-auto xl:max-w-full 2xl:w-[630px] w-full'/>
        </div>
    </div>
    
    {/* Content Section */}
    <div className='w-full lg:w-[60%] flex p-4 sm:p-6 md:p-10 lg:p-16 flex-col justify-around relative'>
        <ScrollReveal animation='fadeIn' delay={200} easing='smooth'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left mb-6 sm:mb-10 lg:mb-0 text-white leading-tight capitalize'>
                How Can We Turn You Into an Expert in industrial automation?
            </h1>
        </ScrollReveal>
        
        {/* Steps Section - Reorganizes on smaller screens */}
        <div className="flex flex-col justify-evenly md:flex-row w-full p-2 md:p-4 gap-6 md:gap-2 lg:gap-4 xl:gap-8 mt-8 lg:mt-0">
            {/* Step 1 */}
            <ScrollReveal animation='scaleUp' delay={600} easing='spring'>
                <div className="flex flex-col items-center mb-2 sm:mb-4 md:mb-0 flex-1">
                    <div className="bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">1</span>
                    </div>
                    <div className="text-white text-center">
                        <p className="font-bold text-sm sm:text-base md:text-lg">In-depth</p>
                        <p className="font-bold text-sm sm:text-base md:text-lg">Knowledge</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Arrow 1 - Changes direction on mobile */}
            <ScrollReveal animation='fadeIn' delay={900} easing='gentle' className="hidden md:flex items-center justify-center mx-0 sm:mx-1 lg:mx-2 xl:mx-4 relative self-center flex-shrink-0">
                <Image src='/coursePage/Vector.png' alt="Arrow" width={60} height={60} className="relative bottom-7 w-6 h-auto md:w-8 lg:w-10 xl:w-auto"/>
            </ScrollReveal>
            {/* Mobile down arrow instead of right arrow */}
            <ScrollReveal animation='fadeIn' delay={900} easing='gentle' className="flex md:hidden items-center justify-center mb-2 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </ScrollReveal>


            {/* Step 2 */}
            <ScrollReveal animation='scaleUp' delay={800} easing='spring'>
                <div className="flex flex-col items-center mb-2 sm:mb-4 md:mb-0 flex-1">
                    <div className="bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">2</span>
                    </div>
                    <div className="text-white text-center">
                        <p className="font-bold text-sm sm:text-base md:text-lg">Real World</p>
                        <p className="font-bold text-sm sm:text-base md:text-lg">Simulations</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Arrow 2 - Changes direction on mobile */}
            <ScrollReveal animation='fadeIn' delay={1100} easing='gentle' className="hidden md:flex items-center justify-center mx-0 sm:mx-1 lg:mx-2 xl:mx-4 relative self-center flex-shrink-0">
                <Image src='/coursePage/Vector.png' alt="Arrow" width={60} height={60} className="relative bottom-7 w-6 h-auto md:w-8 lg:w-10 xl:w-auto"/>
            </ScrollReveal>
            {/* Mobile down arrow instead of right arrow */}
            <ScrollReveal animation='fadeIn' delay={1100} easing='gentle' className="flex md:hidden items-center justify-center mb-2 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal animation='scaleUp' delay={1000} easing='spring'>
                <div className="flex flex-col items-center flex-1">
                    <div className="bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">3</span>
                    </div>
                    <div className="text-white text-center">
                        <p className="font-bold text-sm sm:text-base md:text-lg">Placement</p>
                        <p className="font-bold text-sm sm:text-base md:text-lg">Assistance</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </div>
</div>
        {/* Industries Section */}
        <div className='h-auto w-full bg-white md:py-24 md:px-20 p-4'>
            <div>
            <ScrollReveal animation='slightRight' delay={200} easing='gentle'>
                <h1 className='text-2xl md:text-4xl font-bold text-red-600 mb-6 uppercase'>Industry Requirements</h1>
            </ScrollReveal>
            <ScrollReveal animation='fadeIn' delay={500} easing='smooth'>
                <h1 className='text-3xl md:text-6xl font-bold text-black mb-10'>What Tech Companies search for?</h1>
            </ScrollReveal>
            <ScrollReveal animation='scaleUp' delay={800} easing='spring'>
                <div className='w-full border-4 border-red-600 rounded-lg'>
                    <DevOpsSkills skills={skills} jobRoles={jobRoles} />
                </div>
            </ScrollReveal>
            </div>
        </div>

        {/* DevOps Section */}
        <div className='h-auto w-full overflow-hidden'>
            <CourseSection courseName={'Industrial Automation'} courseDescription={courseDesc}/>
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40'>
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6'>Our Curriculum</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10'>Expert-Design Course Structure</h1>
        
        <CourseRoadmap courses={courses1} show={false}/>
        <CourseRoadmap courses={courses2} show={true} texts={{ 
          heading:'READY FOR INDUSTRIAL AUTOMATION ROLES', 
          subHeading:'Covering all modules above makes you ready to apply for industrial automation roles' 
        }} />
        <CourseRoadmap courses={courses3} show={false} />
        <CourseRoadmap courses={courses4} show={false}/>
        <CourseRoadmap courses={courses5} show={true} texts={{ 
          heading:'YOU\'RE NOW READY FOR INDUSTRIAL AUTOMATION ROLES',
          subHeading:'Covering all modules above makes you ready to apply for industrial automation roles' 
        }} />
        
        {/* Download Brochure Section */}
        <div className='w-full bg-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-start gap-3 sm:gap-4 md:gap-7'>
            <ScrollReveal
            animation="scaleUp"
            duration={1300}
            delay={300}
            easing="spring">
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-semibold'>
              Your Guide to Everything
            </h1>
          </ScrollReveal>
          <ScrollReveal
          animation="fadeIn"
          duration={1200}
          delay={600}
          easing="gentle">
          <h1 className='text-lg sm:text-xl md:text-2xl text-black'>
            Download Our Brochure for a Complete Overview!
          </h1>
          </ScrollReveal>
          <ScrollReveal
          animation="slideUp"
          duration={1400}
          delay={900}
          easing="bouncy">
        <Button link='/coursePage/files/CGSPL Industrial automation (1).pdf' text='Download Brochure' download={'true'}/>
        </ScrollReveal>
        </div>
    </div>
</div>



        <div>
      <div>
       {/* Career-Boosting Projects Section */}
       <div className="bg-white py-16 px-4">
         <div className="max-w-6xl mx-auto text-center">
         <ScrollReveal
          animation="slightRight"
          duration={1200}
          delay={200}
          easing="gentle">
          <h3 className="text-lg font-semibold text-gray-500 uppercase">
            Gain Real-World INDUSTRIAL AUTOMATION Experience!
          </h3>
          </ScrollReveal>
          <ScrollReveal
          animation="fadeIn"
          duration={1300}
          delay={500}
          easing="smooth">
          <h2 className="text-4xl font-bold text-black mt-2">
            Career-Boosting Projects
          </h2>
          </ScrollReveal>
           <div className="mt-10 grid md:grid-cols-3 gap-6">
             {projects.map((project, index) => (
              <ScrollReveal
              key={project.title}
              animation="scaleUp"
              duration={1200}
              delay={200}
              easing="spring"
              index={index}
              stagger={150}
              className="h-full" // Ensure the animation wrapper takes full height
            >

               <div
                 key={index}
                 className="p-6 rounded-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg text-white flex flex-col items-start h-full"
                 >
                 <div className="mb-4">{project.icon}</div>
                 <h3 className="text-xl font-bold">{project.title}</h3>
                 <p className="text-sm text-gray-300 mt-2">
                   {project.description}
                 </p>
               </div>
             </ScrollReveal>
             ))}
           </div>
         </div>
         </div>
         
         {/* DevOps & Cloud Computing Curriculum Section */}
         <div className="min-h-screen bg-black text-white p-6 md:p-12">
         <div className="container mx-auto max-w-7xl">
          <ScrollReveal
            animation="slideUp"
            duration={1200}
            delay={200}
            easing="smooth">
           <h2 className="text-lg font-semibold text-gray-400 uppercase">
            industrial automation Curriculum
           </h2>
          </ScrollReveal>
          <ScrollReveal
          animation="slideUp"
          duration={1200}
          delay={200}
          easing="smooth">
           <h1 className="text-4xl font-bold mb-8">
             Your Journey With Careertronic
           </h1>
          </ScrollReveal>

           <div className="bg-black text-white p-6 md:p-12">
           <ScrollReveal
            animation="slideRight"
            duration={800}
            delay={300}
            easing="spring">
             <div className="flex items-center mb-4">
             <ScrollReveal
                animation="scaleUp"
                duration={600}
                delay={500}
                easing="bouncy">
                <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                  1
                </div>
              </ScrollReveal>
               <h2 className="text-2xl font-bold text-white">
                 Onboarding Session
               </h2>
             </div>
            </ScrollReveal>

             <div className="grid md:grid-cols-3 gap-4">
               {/* Intro Session Card */}
               <ScrollReveal
                animation="slideRight"
                duration={800}
                delay={200}
                easing="smooth">
               <div className="bg-slate-950 p-6 rounded-xl text-white h-52">
                 <h3 className="text-lg font-bold">Intro Session</h3>
                 <p className="text-sm text-gray-400 mt-2">
                   Start in a customized cohort and forge meaningful connections
                   who will be your allies on this journey.
                 </p>
               </div>
              </ScrollReveal>

               {/* Pick Your Mentor Card - Increased Width */}
               <ScrollReveal
                animation="fadeIn"
                duration={800}
                delay={350}
                easing="smooth"
              > 
               <div className="bg-red-900 p-6 rounded-xl text-white flex flex-col justify-center items-center h-52">
                 <button className="bg-white text-black px-4 py-2 rounded font-bold">
                   Pick Your Mentor
                 </button>
                 <p className="text-sm text-gray-200 mt-2 text-center">
                   Select the right mentor for guidance and gain invaluable
                   insights to boost your career.
                 </p>
               </div>
              </ScrollReveal>

               {/* Learning Coordinator Card */}
               <ScrollReveal
              animation="slideLeft"
              duration={800}
              delay={500}
              easing="smooth"> 
               <div className="relative bg-gray-900 rounded-xl overflow-hidden h-52">
                 <div
                   className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: "url('/coursePage/co2.png')" }}
                   ></div>
                 <div className="relative p-6 flex flex-col justify-end h-full bg-black bg-opacity-50">
                   <h3 className="text-lg font-bold text-white">
                     Connect with a{" "}
                     <span className="text-blue-400">Learning Coordinator</span>
                   </h3>
                 </div>
               </div>
             </ScrollReveal>
             </div>
           </div>

           {/* Live Learning Experience */}
           <div className="bg-black text-white p-6 md:p-8 lg:p-12">
           <ScrollReveal
            animation="slideRight"
            duration={800}
            delay={300}
            easing="spring">
            <div className="flex items-center mb-6">
            <ScrollReveal
                animation="scaleUp"
                duration={600}
                delay={500}
                easing="bouncy">
              <div className="w-8 h-8 bg-gray-300 text-black font-bold flex items-center justify-center rounded mr-2">
                2
              </div>
              </ScrollReveal>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Live Learning Experience
              </h2>
            </div>
            </ScrollReveal>

  {/* Mobile layout - single column for extra small screens */}
  <div className="grid grid-cols-1 gap-4 sm:hidden">
    {/* Live Classroom - Featured item first on mobile */}
    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-48">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cou9.png"
          alt="Live Classroom"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h2 className="text-xl font-bold text-white">
          Live Classroom
        </h2>
        <p className="text-sm text-white">
          Engage with instructors and connect with your peers in real-time
        </p>
      </div>
    </div>
</ScrollReveal>

    {/* Other items */}
    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/practice.webp"
          alt="Practice"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Practice with</h3>
        <p className="text-sm text-white">Assignments & Home Works</p>
      </div>
    </div>
    </ScrollReveal>

    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/mentors.png"
          alt="Mentorship"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">1:1</h3>
        <p className="text-sm text-white">Guidance from Pro Mentors</p>
      </div>
    </div>
    </ScrollReveal>
  
    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cloud.jpg"
          alt="cloud"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Cloud Sandbox</h3>
        <p className="text-sm text-white">Hands-on practice in real-world cloud environment</p>
      </div>
    </div>
    </ScrollReveal>

    <ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/ai.avif"
          alt="AI Assistance"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">AI-Assisted</h3>
        <p className="text-sm text-white">Problem-solving support</p>
      </div>
    </div>
  </ScrollReveal>
<ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/soln.avif"
          alt="Situational Problems"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Situational</h3>
        <p className="text-sm text-white">Problem & Solution</p>
      </div>
    </div>
</ScrollReveal>
<ScrollReveal
          animation="slideUp"
          duration={600}
          delay={100}
          easing="spring">

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/course3.png"
          alt="teaching"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Teaching-Assistance</h3>
        <p className="text-sm text-white">1:1 Teaching Assistant over chat & video call</p>
      </div>
    </div>
</ScrollReveal>
  </div>

  {/* Tablet and small screens layout - simplified grid */}
  <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
    {/* Live Classroom - Featured item with larger size */}
    <div className="col-span-2 md:col-span-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-48">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cou9.png"
          alt="Live Classroom"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h2 className="text-xl font-bold text-white">
          Live Classroom
        </h2>
        <p className="text-sm text-white">
          Engage with instructors and connect with your peers in real-time
        </p>
      </div>
    </div>

    {/* Other items */}
    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/practice.webp"
          alt="Practice"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Practice with</h3>
        <p className="text-sm text-white">Assignments & Home Works</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/mentors.png"
          alt="Mentorship"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">1:1</h3>
        <p className="text-sm text-white">Guidance from Pro Mentors</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cloud.jpg"
          alt="cloud"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Cloud Sandbox</h3>
        <p className="text-sm text-white">Hands-on practice in real-world cloud environment</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/ai.avif"
          alt="AI Assistance"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">AI-Assisted</h3>
        <p className="text-sm text-white">Problem-solving support</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/soln.avif"
          alt="Situational Problems"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Situational</h3>
        <p className="text-sm text-white">Problem & Solution</p>
      </div>
    </div>

    <div className="bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/course3.png"
          alt="teaching"
          className="w-full h-full object-cover rounded opacity-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Teaching-Assistance</h3>
        <p className="text-sm text-white">1:1 Teaching Assistant over chat & video call</p>
      </div>
    </div>
  </div>

  {/* Desktop layout - complex grid similar to original */}
  <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-6 lg:gap-4 lg:h-[550px]">
    {/* Practice with Assignments */}
    <ScrollReveal
          animation="slightLeft"
          duration={700}
          delay={100}
          easing="gentle"
          className='row-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden'
        >

    {/* <div className="row-span-2 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"> */}
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/practice.webp"
          alt="Practice"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">
          Practice with
        </h3>
        <p className="text-sm text-white">Assignments & Home Works</p>
      </div>
    {/* </div> */}
  </ScrollReveal>

    {/* 1:1 Guidance */}
    <ScrollReveal
          animation="fadeIn"
          duration={900}
          delay={300}
          easing="spring"
          className='row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden'>
    {/* <div className="row-span-2 col-start-1 row-start-3 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden"> */}
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/mentors.png"
          alt="Mentorship"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">1:1</h3>
        <p className="text-sm text-white">
          Guidance from Pro Mentors
        </p>
      </div>
    {/* </div> */}
</ScrollReveal>

    {/* Situational Problem & Solution */}
    <ScrollReveal
    animation="fadeIn"
    duration={900}
    delay={300}
    easing="spring"
    className="row-span-2 col-start-1 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/soln.avif"
          alt="Situational Problems"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">Situational</h3>
        <p className="text-sm text-white">Problem & Solution</p>
      </div>
    </ScrollReveal>

    {/* Live Classroom */}
    <ScrollReveal
          animation="slideUp"
          duration={900} 
          delay={300}
          easing="spring"
          className="col-span-2 row-span-4 col-start-2 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cou9.png"
          alt="Live Classroom"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Live Classroom
        </h2>
        <p className="text-sm text-white">
          Engage with instructors and connect with your peers in real-time
        </p>
      </div>
  </ScrollReveal>

    {/* Cloud Sandbox */}
    <ScrollReveal
          animation="fadeIn"
          duration={900}
          delay={300}
          easing="spring"
          className="col-span-2 row-span-2 col-start-2 row-start-5 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/cloud.jpg"
          alt="cloud"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white">
          Cloud Sandbox
        </h3>
        <p className="text-sm text-white">
          Hands-on practice in real-world cloud environment
        </p>
      </div>
</ScrollReveal>

    {/* AI-Assisted Problem Solving */}
    <ScrollReveal
          animation="slideLeft"
          duration={900}
          delay={300}
          easing="spring"
          className="row-span-3 col-start-4 row-start-1 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">        
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/ai.avif"
          alt="AI Assistance"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h3 className="text-lg font-bold text-white">AI-Assisted</h3>
        <p className="text-sm text-white">Problem-solving support</p>
      </div>
    </ScrollReveal>

    {/* Teaching Assistance */}
    <ScrollReveal
          animation="slideLeft"
          duration={900}
          delay={300}
          easing="spring"
          className="row-span-3 col-start-4 row-start-4 bg-black text-white rounded-lg border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 relative h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/coursePage/course3.png"
          alt="teaching"
          className="w-full h-full object-cover rounded opacity-40"
          />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
        <h3 className="text-lg font-bold text-white">
          Teaching-Assistance
        </h3>
        <p className="text-sm text-white">
          1:1 Teaching Assistant over chat & video call
        </p>
      </div>
    </ScrollReveal>
  </div>
</div>

           {/* Training & Placement Support */}
           <div className="bg-black text-white p-6 md:p-12">
           <ScrollReveal
            animation="slideRight"
            duration={800}
            delay={300}
            easing="spring">
             <div className="flex items-center space-x-3">
             <ScrollReveal
                animation="scaleUp"
                duration={600}
                delay={500}
                easing="bouncy">
               <div className="bg-gray-700 text-white px-3 py-1 rounded-lg font-bold">
                 3
               </div>
               </ScrollReveal>
               <h2 className="text-xl md:text-2xl font-bold">
                 Training & Placement Support
               </h2>
             </div>
             </ScrollReveal>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
             <ScrollReveal animation="fadeSlideLeft" duration={800} delay={100} easing="spring" className='md:col-span-2'>
              <div className="bg-cover bg-center relative p-6 md:col-span-2 rounded-lg flex flex-col justify-center" style={{ backgroundImage: "url('/coursePage/test.webp')" }} >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> 
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-white">Module-Based Mocks</h3>
                <p className="text-gray-200 text-sm">
                  Practically apply your skills through interview simulations post-module.
                </p>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeSlideRight" duration={800} delay={100} easing="spring" className='md:col-span-1'>
               <div className="bg-slate-950 p-4 rounded-lg text-center">
                 <h3 className="font-bold text-lg text-white">Resume Building</h3>
                 <p className="text-gray-400 text-sm">
                   Build an impactful, professional resume with expert
                   mentorship.
                 </p>
               </div>
            </ScrollReveal>
             </div>
             <ScrollReveal animation="fadeSlideLeft" duration={800} delay={100} easing="spring" className='md:col-span-2'>
             <div className="bg-red-600 text-center p-4 mt-6 rounded-lg font-semibold text-sm md:text-base">
               GET INDUSTRY READY Get access to exclusive job openings within our
               network.
             </div>
             <div className="bg-gray-900 p-6 mt-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
               <div className="w-full md:w-1/2">
                 <h3 className="font-bold text-lg">Placement Training</h3>
                 <p className="text-gray-400 text-sm">
                   Focused training to excel in tech recruitment processes.
                 </p>
               </div>
               <div className="w-full md:w-1/2 text-right">
                 <h3 className="font-bold text-lg">Placement Support</h3>
                 <p className="text-gray-400 text-sm">
                   End-to-end assistance to secure your dream job.
                 </p>
               </div>
             </div>
             </ScrollReveal>
           </div>
         </div>
         {/**MENTORS AND TRAINERS WITH REVIEW */}
         <div className="bg-white text-black py-16 px-4 rounded-s-2xl rounded-e-2xl w-full h-auto">
           <div className="container mx-auto max-w-7xl">
            <ScrollReveal
            animation="slideUp"
            duration={1200}
            delay={200}
            easing="smooth">
             <h2 className="text-lg font-semibold text-black uppercase text-center mb-4">
               Meet Mentors & Instructors
             </h2>
             <h1 className="text-4xl font-bold text-center mb-12 capitalize">
               Tap into the wisdom of industrial automation Experts
             </h1>
            </ScrollReveal>

             {/* Mentors Grid */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
               {/* Mentor Card Template */}
               {[
                 {
                   name: "Anshuman Singh",
                   role: "Teacher1",
                   img: "/coursePage/teacher1.jpg"
                 },
                 { name: "Naman Balla", 
                   role: "Teacher3",
                   img: "/coursePage/teacher3.jpg" 
                 },
                 {
                   name: "Anshuman Singh",
                   role: "Teacher2",
                   img: "/coursePage/teacher2.jpg"
                 },
                 {
                   name: "Anshuman Singh",
                   role: "Teacher4",
                   img: "/coursePage/teacher4.jpg"
                 },
               ].map((mentor, index) => (

                 <div
                   key={index}
                   className="bg-black shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
                  <ScrollReveal
                    animation="fadeIn" 
                    duration={1200}
                    delay={200}
                    easing="smooth">
                   <div className="w-full h-64 flex items-center justify-center bg-cover"
                   style={{ backgroundImage: `url(${mentor.img})` }}>
                     {/* <span className="text-gray-400">Mentor Image</span> */}
                   </div>
                   <div className="p-4 text-center">
                     <h3 className="font-semibold text-white">{mentor.name}</h3>
                     {/* <p className="text-gray-400 text-sm">{mentor.role}</p> */}
                   </div>
                  </ScrollReveal>
                 </div>
               ))}
             </div>

             {/* Reviews Section */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {reviews.map((review, index) => (
                   <div
                     key={index}
                     className="bg-black shadow-lg rounded-lg p-6"
                   >
                    <ScrollReveal
                    animation="fadeIn"
                    duration={1200}
                    delay={200}
                    easing="smooth">
                     <div className="flex items-center mb-4">
                       <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                         <span className="text-gray-400">{review.initials}</span>
                       </div>
                       <div>
                         <h4 className="font-semibold text-white">{review.name}</h4>
                         <div className="text-yellow-400">
                           {[...Array(review.rating)].map((_, i) => (
                             <span key={i} className="text-yellow-400">★</span>
                           ))}
                         </div>
                       </div>
                     </div>
                     <p className="text-gray-400">
                       {review.review}
                     </p>
                    </ScrollReveal>
                   </div>
                 ))}
             </div>
           </div>
         </div>
       </div>
     </div>
        {/* Fee Structure */}
        <div className='w-full bg-black'>
            <FeeStructure courseName={'Industrial Automation'} />
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto bg-white'>
            <FAQSection />
        </div>

    </div>
  </div>
  )
}

export default page;
