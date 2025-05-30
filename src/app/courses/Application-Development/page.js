'use client'
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
import { FaPencilAlt, FaDatabase, FaCloudUploadAlt } from "react-icons/fa";
import ScrollReveal from '@/components/ScrollReveal';


function page(){
    const faqData = {
      General: [
        {id: 1, question: ' Who can take up this course?', answer: "This course is open to anyone interested in building mobile or desktop applications—from beginners to intermediate developers. Whether you’re a student, tech enthusiast, or working professional aiming to enter app development, this course is structured for you."},
        {id: 2, question: 'What is included in your course?', answer: "The course covers full-cycle application development including UI/UX design, front-end logic, back-end integration, and deployment. We cover platforms like Android (using Java/Kotlin), iOS (using Swift), and cross-platform tools like Flutter and React Native. You’ll also learn about REST APIs, databases, and state management."},
        {id: 3, question: 'What will the student gain from your course?', answer: "Students will gain hands-on experience in building real-world applications from scratch. You’ll learn to design intuitive UIs, integrate databases, connect APIs, handle authentication, and publish apps to platforms like Google Play Store and Apple App Store."},
        {id: 4, question: 'How is this course going to help a student get a job?', answer: "This course equips students with industry-relevant skills through project-based learning. You'll build a portfolio with apps such as chat apps, e-commerce platforms, and productivity tools. Combined with resume and interview prep, you'll be ready for roles like App Developer, Mobile Engineer, or Full-Stack App Developer."},
        {id: 5, question: 'What are the job opportunities in this field?', answer: "App development is one of the fastest-growing domains in tech. Companies building consumer apps, enterprise tools, or startups focusing on digital products constantly hire app developers skilled in Flutter, React Native, Android, iOS, and Firebase. Freelancing and indie app publishing are also major opportunities in this field."}
      ],
      Pricing: [
        {id: 4, question: 'How much does it cost?', answer: "The course pricing starts at ₹35,000."},
        {id: 5, question: 'Do you offer discounts?', answer: "Yes, we offer discounts for early enrollments, referrals, students, and during special promotions. Contact support for current deals."},
        {id: 6, question: 'What payment methods do you accept?', answer: "We accept UPI, credit/debit cards, net banking, and major digital wallets. EMI options are available based on your preferred gateway."}
      ],
      Features: [
        {id: 7, question: 'What software skills are you teaching and how well are these tools used in the industry?', answer: "You’ll learn tools like Android Studio, Xcode, Flutter, Firebase, Git, Figma, and Postman. These are the same tools used by professionals in companies like Google, Meta, Swiggy, and Flipkart to build scalable applications."},
        {id: 8, question: ' How will I access the softwares required for programming?', answer: "All necessary tools are either open-source or have free versions. We guide you through installation and setup for Android, iOS (Mac users), and cross-platform development environments."}, 
        {id: 9, question: 'What is the real world application for the tools and techniques will you teach in this course?', answer: "Students will build production-ready apps that involve real-time data handling, user authentication, push notifications, in-app navigation, and deployment. These are standard components in apps used daily in domains like social networking, health, education, and e-commerce."},
        {id: 10, question: "How is your course going to help a student's path to MS or PhD?", answer: "The course provides a strong practical and conceptual foundation in mobile computing and software architecture—ideal for MS/PhD in Computer Science or Human-Computer Interaction. It also prepares you for publishing research-oriented applications or building prototypes for academic submissions."}
      ],
      Support: [
        {id: 11, question: 'How can I contact support?', answer: "Support is available via email, website chat, and WhatsApp. Contact details are listed on our course page for immediate assistance."},
        {id: 12, question: 'What are your support hours?', answer: "Support is active from 10:00 AM to 6:00 PM IST, Monday through Saturday."},
        {id: 13, question: 'Do you have documentation?', answer: "Yes, we provide complete documentation, source code templates, project guides, cheat sheets, and access to recorded sessions to ensure a smooth learning experience."}
      ],
      Security: [
        {id: 14, question: 'Is my data secure?', answer: "Absolutely. We prioritize your data privacy with industry-standard security protocols and storage policies."},
        {id: 15, question: 'Do you support 2FA?', answer: "Yes, we support two-factor authentication (2FA) for secure logins to your student portal and code"},
        {id: 16, question: 'What encryption do you use?', answer: "We use AES-256 encryption and HTTPS across our platform to secure all communications and personal data."}
      ]
    };
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
    ];
  const projects = [
      {
        title: "Master UI/UX Implementation",
        description:
        "Learn to craft intuitive and responsive user interfaces using frameworks like React or Vue. Apply real-world design patterns and build seamless user experiences across devices.",
        icon: <FaPencilAlt className="text-white text-3xl" />
      },
      {
        title: "Seamless Backend Integration",
        description:
          "Build powerful backends with Node.js or Django. Learn to create and integrate RESTful APIs, handle authentication, and manage scalable databases using real-world architectures.",
        icon: <FaDatabase className="text-white text-3xl" />
      },
      {
        title: "Automated App Deployment",
        description:
          "Master the deployment lifecycle using platforms like Heroku, Vercel, or AWS. Implement CI/CD pipelines and ensure smooth version control and rollout of full-stack applications.",
        icon: <FaCloudUploadAlt className="text-white text-3xl" />
      }
    ];
  const courses1 = [
      {
        title: "Introduction to Android Development",
        duration: "1 Week",
        description: "This module introduces the fundamentals of Android development, covering the Android ecosystem, development environment setup, and creating your first Android application. You'll learn to use Android Studio, work with the Android SDK, understand project structure, and run apps on emulators and physical devices.",
        topics: {
        "Introduction to Android": "What is Android? Android architecture and ecosystem",
        "Android Studio": "Setup and installation, IDE features, Project structure",
        "Android SDK and Tools": "Introduction to the Android SDK, AVD (Android Virtual Device)",
        "Project Structure": "Android Project structure (XML, Java/Kotlin, Resources)",
        "Understanding Structure": "Understanding the project files and structure",
        "Hands-on Practice": "Creating and running a simple 'Hello World' app",
        "Android Emulator": "Introduction to Android Emulator and testing on a physical device"
        }
      },
      {
        title: "Kotlin Basics for Android Development",
        duration: "1 Week",
        description: "This module covers the fundamentals of Kotlin programming language specifically for Android development. You'll learn Kotlin syntax, object-oriented programming concepts, and how to implement Android UI elements using Kotlin. This foundation will prepare you for building more complex Android applications.",
        topics: {
          "Introduction to Kotlin Syntax": "Variables, Data Types, Functions, and Control Flow",
          "Null Safety": "Nullable types and null safety in Kotlin",
          "Kotlin Collections": "Collections and Iterators in Kotlin (List, Set, Map)",
          "OOP Concepts in Kotlin": "Classes, Inheritance, Interfaces, and Abstract Classes",
          "Advanced Kotlin Features": "Extension functions and higher-order functions",
          "Functional Programming": "Working with lambdas and anonymous functions",
          "Android UI with Kotlin": "Views and ViewGroups: TextView, Button, ImageView, etc.",
          "Layout Structures": "Basic layout structures: LinearLayout, RelativeLayout, and ConstraintLayout"
        }
      },
      {
        title: "Java for Android Development",
        duration: "1 Week",
        description: "This module focuses on Java programming fundamentals for Android development and explores the interoperability between Java and Kotlin. You'll learn Java syntax, object-oriented programming principles in Java, and how to effectively use both Java and Kotlin together in Android projects.",
        topics: {
          "Java Programming Fundamentals": "Java syntax: Variables, Data Types, Operators, Loops, and Conditionals",
          "Object-Oriented Programming in Java": "OOP in Java: Classes, Objects, Inheritance, and Polymorphism",
          "Java Collections Framework": "Collections in Java: List, Set, Map",
          "Error Management": "Exception Handling in Java",
          "Kotlin-Java Interoperability": "Understanding Kotlin-Java interoperability",
          "Cross-Language Integration": "How to call Java code from Kotlin and vice versa",
          "Java to Kotlin Migration": "Converting Java classes to Kotlin"
        }
      }
    ];
  const courses2 = [
    {
      title: "Android UI Components and Layouts",
      duration: "1 Week",
      description: "This module provides an in-depth exploration of Android UI components and layout systems. You'll learn how to work with various UI widgets, implement different layout structures, handle user interactions, and create responsive designs that adapt to various screen sizes and orientations.",
      topics: {
        "UI Components Deep Dive": "Understanding UI components: Button, TextView, EditText, CheckBox, RadioButton, etc.",
        "Layout Types and Usage": "LinearLayout, RelativeLayout, FrameLayout, and ConstraintLayout",
        "User Interaction": "Handling user input and displaying data on the screen",
        "Layout Optimization": "Layout optimization and best practices for responsive design",
        "Advanced ConstraintLayout": "Introduction to ConstraintLayout for flexible UI design",
        "Adaptive UI": "Creating adaptive layouts for different screen sizes (phones, tablets)"
      }
    },
    {
      title: "Advanced Android UI and Interactivity",
      duration: "1 Week",
      description: "This module covers advanced Android UI components and interactive elements. You'll learn how to implement dynamic lists with RecyclerView, create custom adapters, handle user interactions, and work with various dialog types and menu systems to enhance your app's user experience.",
      topics: {
        "RecyclerView Fundamentals": "Introduction to RecyclerView and ViewHolder",
        "Custom Adapters": "Implementing a simple RecyclerView with a custom Adapter",
        "User Interaction in Lists": "Handling item clicks and implementing item touch events",
        "Dialog Implementation": "Using AlertDialog, Custom Dialogs",
        "Menu Systems": "Handling OptionMenus and ContextMenus"
      }
    },
    {
      title: "Activities, Intents, and Navigation",
      duration: "1 Week",
      description: "This module explores the fundamental components of Android navigation and screen management. You'll learn about the Activity lifecycle, Intent-based navigation, data passing between screens, and Fragment implementation for modular UI development and advanced navigation patterns.",
      topics: {
        "Activity Lifecycle": "Activity lifecycle: onCreate, onStart, onResume, onPause, onStop, onDestroy",
        "State Management": "Managing state with onSaveInstanceState",
        "Intent Types": "Explicit vs. Implicit Intents",
        "Data Communication": "Passing data with Intents",
        "Screen Navigation": "Navigating between activities and fragments",
        "Fragment Fundamentals": "Fragment lifecycle and fragment transactions",
        "Modular UI Design": "Using Fragments for modular UI development",
        "Advanced Navigation Patterns": "Implementing TabLayout and ViewPager for swipeable content"
      }
    }
    ];
  const courses3 = [
    {
      title: "Advanced Kotlin and Android Programming",
      duration: "1 Week",
      description: "This module explores advanced Android development concepts with Kotlin. You'll learn asynchronous programming using Coroutines, network communication with RESTful APIs, and modern dependency injection techniques with Hilt. These skills are essential for building robust, maintainable Android applications that follow best practices.",
      topics: {
        "Kotlin Coroutines Basics": "Introduction to Kotlin Coroutines and async/await patterns",
        "Coroutine Dispatchers": "Working with Dispatchers (Main, IO, Default)",
        "Background Processing": "Using coroutines for background tasks and UI updates",
        "Networking with Retrofit": "Making network requests using Retrofit",
        "JSON Processing": "Parsing JSON with Gson or Moshi",
        "Error Handling": "Handling network errors gracefully",
        "Dependency Injection Concepts": "Introduction to Dependency Injection",
        "Hilt Implementation": "Using Hilt for DI in Android apps"
      }
    },
    {
      title: "Introduction to React Native",
      duration: "1 Week",
      description: "This module transitions from native Android development to cross-platform development with React Native. You'll learn React Native fundamentals, set up your development environment, understand core components and styling approaches, and implement navigation between screens in React Native applications.",
      topics: {
        "React Native Fundamentals": "Overview of React Native and its architecture",
        "Development Environment": "Setting up the development environment (Node.js, npm, React Native CLI)",
        "First React Native App": "Creating a simple \"Hello World\" app in React Native",
        "Core Components": "Core components: View, Text, Image, Button, ScrollView, etc.",
        "Styling System": "Styling in React Native using StyleSheet",
        "Layout Techniques": "Layout with Flexbox in React Native",
        "Navigation Setup": "Setting up React Navigation",
        "Navigation Types": "StackNavigator and TabNavigator for navigation between screens"
      }
    },
    {
      title: "React Native Advanced Concepts",
      duration: "1 Week",
      description: "This module builds on your React Native foundation by exploring advanced user interaction and animation techniques. You'll learn how to handle user input through various form components, manage component state effectively, implement form validation, and create fluid animations that enhance the user experience.",
      topics: {
        "User Input Components": "Using TextInput, TouchableOpacity, and handling form data",
        "State Management": "Managing state with useState and useReducer",
        "Form Handling": "Form validation and submission",
        "Animation Fundamentals": "Introduction to Animated API",
        "Basic Animation Types": "Creating basic animations (fades, moves, scaling)",
        "Layout Animations": "Working with LayoutAnimation and transitions"
      }
    }
    ];
  const courses4 = [
    {
      title: "Working with Databases and Persistence in Android",
      duration: "1 Week",
      description: "This module focuses on local data storage and persistence in Android applications. You'll learn how to work with SQLite databases, implement the Room persistence library, perform CRUD operations, and create reactive UIs that automatically update when data changes. These skills are essential for developing apps that can store and manage data efficiently.",
      topics: {
        "SQLite Fundamentals": "Introduction to SQLite in Android",
        "Database Operations": "CRUD operations with SQLite",
        "Room Database Setup": "Setting up Room Database for local storage",
        "Room Architecture": "Entities, DAOs, and Database classes",
        "Reactive UI with LiveData": "Using LiveData and ViewModels for reactive UI",
        "Data Observation": "Observing data changes and updating UI",
        "Database Migration": "Data migration strategies in Room"
      }
    },
    {
      title: "Backend and Cloud Integration",
      duration: "1 Week",
      description: "This module introduces Firebase as a comprehensive backend solution for Android applications. You'll learn how to integrate Firebase services, work with cloud databases like Firestore, implement user authentication, and manage real-time data synchronization. These skills enable you to build apps with robust backend functionality without managing server infrastructure.",
      topics: {
        "Firebase Introduction": "Introduction to Firebase (Firebase Realtime Database, Firestore)",
        "Firebase Setup": "Setting up Firebase in Android (Authentication, Firestore)",
        "Cloud Data Management": "Writing and reading data to/from Firebase Firestore",
        "User Authentication": "Setting up Firebase Authentication",
        "Authentication Flows": "Signing up and signing in users with Firebase Auth",
        "Session Management": "Handling user authentication states (Login/Logout)"
      }
    },
    {
      "title": "Advanced Networking and API Integration",
      "duration": "1 Week",
      "description": "This module focuses on advanced networking techniques for Android development using Retrofit and OkHttp. You'll learn how to make secure API calls, handle authentication methods like OAuth and JWT, upload files, and optimize network communication. Emphasis is also placed on improving performance through caching, interceptors, and offline support.",
      "topics": {
        "API Integration": "Making API calls with Retrofit and OkHttp",
        "Authentication Handling": "Implementing OAuth and JWT token-based authentication",
        "File Uploads": "Uploading files to servers using Retrofit",
        "Request Optimization": "Using request interceptors and response caching",
        "Rate Limiting and Retry": "Handling API rate limiting and implementing retry strategies",
        "Offline Support": "Building a network-aware UI and supporting offline functionality"
      }
    }
    ];
  const courses5 = [
    {
      "title": "Advanced Features in Android Development",
      "duration": "1 Week",
      "description": "This module explores advanced Android features including background task management, push notifications, and security. You'll learn how to use Services, IntentServices, and WorkManager for handling background operations efficiently. The module also covers implementing push notifications with Firebase Cloud Messaging and securing your app through proper permission handling and secure data storage.",
      "topics": {
        "Background Services": "Understanding Services and IntentServices",
        "WorkManager": "Using WorkManager for scheduling background tasks",
        "Push Notifications": "Implementing push notifications using Firebase Cloud Messaging (FCM)",
        "Runtime Permissions": "Requesting and handling runtime permissions",
        "Secure Data Storage": "Storing sensitive data securely using Android Keystore",
        "App Security": "Best practices for enhancing app security and data protection"
      }
    },
    {
      "title": "Testing and Debugging Android Apps",
      "duration": "1 Week",
      "description": "This module covers essential testing and debugging practices for Android development. You'll learn how to write unit tests using JUnit and Mockito to ensure the correctness of your code. UI testing is introduced through Espresso to validate user interactions. Additionally, you'll explore debugging techniques using Android Studio tools to identify and resolve issues related to performance and logic.",
      "topics": {
        "Unit Testing": "Writing unit tests with JUnit and Mockito",
        "Component Testing": "Testing ViewModels, Repositories, and Services",
        "UI Testing": "Setting up and writing UI tests with Espresso",
        "Interaction Testing": "Testing user interactions and UI components with Espresso",
        "Debugging Tools": "Using Android Studio Debugger and Logcat",
        "Performance Analysis": "Analyzing memory and CPU usage using Profiler tools"
      }
    },
    {
      "title": "Preparing for App Release",
      "duration": "1 Week",
      "description": "This module guides you through the final stages of Android app development, focusing on optimizing, signing, and publishing your app. You'll learn techniques to reduce APK size and enhance performance. It also covers creating signed builds, managing versioning, and publishing to the Google Play Console. Additionally, you'll integrate analytics and crash reporting tools to monitor app performance post-release.",
      "topics": {
        "App Optimization": "Reducing APK size using Proguard and R8",
        "Performance Tuning": "Optimizing app performance for memory, CPU, and battery",
        "Build Signing": "Creating a signed APK or Android App Bundle (AAB)",
        "Release Management": "Versioning and managing release builds",
        "Play Store Publishing": "Publishing to Google Play Console with listings, screenshots, and descriptions",
        "Analytics & Crash Reporting": "Integrating Firebase Analytics and Crashlytics for app usage tracking and error reporting"
      }
    }    
    ];
const courses6 = [
  {
    "title": "Final Project and Course Wrap-up",
    "duration": "1 Week",
    "description": "In the final week, students will apply everything they've learned by developing a complete Android or React Native application. The project should incorporate core components like networking, UI, authentication, and backend integration. Students will present their projects, discussing the architecture and technologies used. The week also includes a comprehensive course review, introduction to emerging tools, and guidance on preparing for careers in Android development.",
    "topics": {
      "Capstone Project": "Developing a fully functional Android or React Native app using course concepts",
      "Backend Integration": "Incorporating Firebase or custom servers with features like authentication and real-time data",
      "Project Presentation": "Presenting the app with an explanation of architecture and technologies used",
      "Course Review": "Recap of key Android development principles and best practices",
      "Emerging Tools": "Exploring new Android features like Jetpack Compose and Android 14+",
      "Career Preparation": "Guidance for pursuing Android development careers and internships"
    }
  }  
    ];
  const courseDesc = [
    {
      title: 'Full-Stack Development Skills',
      description: 'Master both front-end and back-end technologies to become a versatile developer. Be job-ready for roles like Full-Stack Developer, Web Developer, and App Engineer with this hands-on application development course.'
    },
    {
      title: 'Industry-Recognized Certification',
      description: 'Boost your resume with certification that validates your skills in real-world application development. Increase your chances of landing interviews and getting shortlisted for top tech roles.'
    },
    {
      title: 'Real Projects & Code Labs',
      description: 'Build 10+ real-world applications and participate in live coding labs. Gain practical experience in debugging, deploying, and maintaining full-stack applications using modern frameworks and tools.'
    }
    ];       
const skills = [
  'Java', 'Kotlin', 'Swift', 'Dart', 'Flutter',
  'React Native', 'Xamarin', 'Android Studio', 'Xcode', 'Firebase',
  'SQLite', 'Room DB', 'Core Data', 'Realm', 'Jetpack Compose',
  'MVVM', 'MVC', 'MVP', 'REST API', 'GraphQL',
  'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL',
  'Git', 'GitHub', 'Figma', 'Adobe XD', 'Socket.IO',
  'Push Notifications', 'In-App Purchases', 'App Store', 'Play Store', 'CI/CD'
    ];

  return (
    <div className='h-auto w-full'>
        <Navbar />

        {/* Hero Section */}
        <div className='min-h-[75vh] 2xl:min-h-[50vh] w-full bg-zinc-950 relative'>
            <div className='absolute h-[200px] w-[200px] top-32 left-48 rounded-full bg-[#1DD9FF] blur-[180px]'/>
            <Image src='/coursePage/100.png' alt='#' width={600} height={600} className='absolute bottom-0 left-0 h-auto w-full'/>
            <div className='relative top-0 left-0 w-full h-full flex xl:flex-row flex-col items-center justify-center'>
                <div className='left h-fit xl:w-1/2 w-full xl:px-20 xl:py-16 p-4 flex flex-col gap-10 items-start'>
                <ScrollReveal animation='slightRight' delay={100} easing='gentle'>
                <div className='rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase'>
                ONLINE mobile application development COURSE
                </div>
                </ScrollReveal>
                <ScrollReveal animation='fadeIn' delay={300} easing='spring'>
                  <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>
                      Your Ultimate Handbook for Mastering <span className='text-red-600 capitalize'>mobile application development</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal animation='slideUp' delay={500} easing='smooth'>
                  <p className='lg:text-xl sm:text-lg tracking-wide'>
                  Mobile Application Development is a course that focuses on designing, building, and deploying applications for mobile platforms like Android and iOS. It covers the fundamentals of UI/UX design, programming languages such as Java, Kotlin, or Swift, and frameworks like Flutter or React Native. The course also explores backend integration, performance optimization, and app store deployment, equipping learners to create responsive, user-friendly, and functional mobile apps.
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
                    <div className='sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'><span className='text-3xl'>4</span> Months</p></div>
                   </div> 
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                   <div className='h-auto'><p className='text-base md:text-lg'>Time Commitment</p></div>
                   <div className='h-3/4 sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'>12-15 Hrs/Week</p></div>
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
        <div className='h-auto w-full bg-[#212121] relative flex lg:flex-row lg:pt-28 md:pt-20 sm:pt-40 pt-40 z-10'>
    {/* Image Section - Hidden on small screens, visible on medium and up */}
    <div className='w-full lg:w-[40%] relative hidden lg:block'>
        <div className="relative h-full">
            <Image src='/coursePage/103.png' alt='Image1' width={450} height={450} className='absolute -bottom-1 left-0 w-auto h-auto max-w-full max-h-[60vh]'/>
            <ScrollReveal animation='fadeIn' delay={700} easing='spring' className='relative h-full'> 
                {/* <Image src='/coursePage/105.png' alt='Image2' width={400} height={400} className='absolute bottom-40 left-72 w-auto h-auto max-w-[60%] hidden lg:block'/> */}
            </ScrollReveal>
                <Image src='/coursePage/101.png' alt='Image3' width={1000} height={1000} className='absolute -bottom-1 left-0 h-auto xl:max-w-full 2xl:w-[630px] w-full'/>
        </div>
    </div>
    
    {/* Content Section */}
    <div className='w-full lg:w-[60%] flex p-4 sm:p-6 md:p-10 lg:p-16 flex-col justify-around relative'>
        <ScrollReveal animation='fadeIn' delay={200} easing='smooth'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left mb-6 sm:mb-10 lg:mb-0 text-white leading-tight capitalize'>
                How Can We Turn You Into an Expert in Application Development?
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
                    <DevOpsSkills skills={skills}/>
                </div>
            </ScrollReveal>
            </div>
        </div>

        {/* DevOps Section */}
        <div className='h-auto w-full overflow-hidden'>
            <CourseSection courseName={'application development'} courseDescription={courseDesc}/>
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40'>
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6'>Our Curriculum</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10'>Expert-Design Course Structure</h1>
        
        <CourseRoadmap courses={courses1} show={false}/>
        <CourseRoadmap courses={courses2} show={true} texts={{ 
          heading:'READY FOR APP DEVELOPMENT ROLES', 
          subHeading:'Covering all modules above makes you ready to apply for app development roles' 
        }} />
        <CourseRoadmap courses={courses3} show={true} texts={{ 
          heading:'YOU\'RE NOW READY FOR SWE ROLES', 
          subHeading:'Covering all modules above makes you ready to apply for app development roles' 
        }} />
        <CourseRoadmap courses={courses4} show={false}/>
        <CourseRoadmap courses={courses5} show={false}/>
        <CourseRoadmap courses={courses6} show={false}/>
        
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
        <Button text='Download Brochure' />
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
            GAIN REAL-WORLD APPLICATION DEVELOPMENT EXPERIENCE!
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
             {projects.map((project,index) => (
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
                 className="p-6 rounded-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg text-white flex flex-col items-start h-64"
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
            Application Development Curriculum
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
             <h1 className="text-4xl font-bold text-center mb-12">
               Tap into the wisdom of Application Development Experts
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
                   <div key={index}
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
            <FeeStructure courseName={'Application Development'}/>
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto bg-white'>
            <FAQSection faqData={faqData} />
            <FAQSection faqData={faqData} />
        </div>

    </div>
  </div>
  )
}

export default page;
