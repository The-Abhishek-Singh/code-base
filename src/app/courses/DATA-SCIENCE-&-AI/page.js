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
import { FaLock, FaUserSecret, FaUserShield, FaCamera, FaComments, FaUtensils, FaDatabase, FaBook, FaUser, FaHome, FaChartPie, FaLaugh, FaVideo } from "react-icons/fa";
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
      title: "Face Detection",
      description:
        "Use Python 3.5(64-bit) with OpenCV for face detection. As an important requirement, learners need to ensure that the system detect multiple faces in a single image while working with essential libraries like cv2 and glob.",
      icon: <FaCamera className="text-white text-3xl" />, // Camera icon for face detection
    },
    {
      title: "AI Chatbot",
      description:
        "In this interesting project, work with IBM Watson AI Chatbot. Create your own AI Chatbot and see how IBM Cloud platform helps you to create the chatbot on the backs of possibly the most advanced Machine Learning systems available.",
      icon: <FaComments className="text-white text-3xl" />, // Comments icon for chatbot
    },
    {
      title: "Restaurant Revenue Prediction",
      description:
        "Work with Ensemble Model for predicting annual restaurant sales using various features like opening date, type of city, type of restaurant. Work with packages like caret, Boruta, dplyr to analyze the dataset and predict the sales.",
      icon: <FaUtensils className="text-white text-3xl" />, // Utensils icon for restaurant revenue
    },
    {
      title: "Work with PySpark & RDD",
      description:
        "Work with PySpark which is a Python API for Spark and use the RDD using Py4j package. As an important part of this project, you will also work with SparkConf provides configurations for running a Spark Application.",
      icon: <FaDatabase className="text-white text-3xl" />, // Database icon for PySpark/RDD
    },
    {
      title: "Build the Book Recommender Application",
      description:
        "Work with packages like a recommended to lab, dplyr, tidy, stringr, corpus and many others to create your book recommender engine using the user-based collaborative filtering model that recommends the books based on past ratings.",
      icon: <FaBook className="text-white text-3xl" />, // Book icon for recommender system
    },
    {
      title: "Census Project",
      description:
        "Work with census income dataset from UCI Machine Learning repository that contains information of more than 48k individuals. Use data handling techniques to handle missing values and also predict the annual income of people.",
      icon: <FaUser className="text-white text-3xl" />, // Users icon for census data
    },
    {
      title: "Housing Price Prediction",
      description:
        "In this project on housing price prediction, get practical exposure on how to work with house price dataset and predict the sale price for each house with 79 explanatory variables describing every aspect of the residential houses.",
      icon: <FaHome className="text-white text-3xl" />, // Home icon for housing prediction
    },
    {
      title: "HR Analytics",
      description:
        "Learn to work with the HR Analytics dataset and understand how the HR can help you to re-imagine HR problem statements. Understand the features of the dataset and in the end, evaluate the model by metric identification process.",
      icon: <FaChartPie className="text-white text-3xl" />, // Chart-pie icon for HR analytics
    },
    {
      title: "Joke Rating Prediction",
      description:
        "Work with the dataset taken from the famous jester online Joke Recommender system and successfully create a model to predict the ratings for jokes that will be given by the users (the same users who earlier rated another joke).",
      icon: <FaLaugh className="text-white text-3xl" />, // Laugh icon for joke rating
    },
    {
      title: "Build Recommendation Engine",
      description:
        "Create your own recommendation engine using the SVD algorithm to predict the ratings on Netflix based on the past ratings of the user. Work with various packages like NumPy, pandas, matplotlib, plotly to handle missing values from the dataset.",
      icon: <FaVideo className="text-white text-3xl" />, // Video icon for recommendation engine
    },
  ];
  const courseDesc = [
        {
          title: 'High-Demand Data Science Roles',
          description: 'Prepare for sought-after roles like Data Scientist, Machine Learning Engineer, and AI Specialist with this comprehensive course tailored for the growing data-driven industry.',
        },
        {
          title: 'Certification-Driven AI Learning',
          description: 'Train for industry-recognized certifications like TensorFlow Developer and Microsoft AI Engineer, with structured modules, practical projects, and expert mentorship for career success.',
        },
        {
          title: 'Hands-On AI and Data Mastery',
          description: 'Gain real-world experience with live datasets and AI models. Master data analysis, machine learning algorithms, and neural networks through hands-on coding and real-time projects.',
        },
  ];
     const courses1 = [
      {
        title: "Preparatory Sessions - Python & Linux",
        duration: "1 Week",
        description: "This module is designed to prepare students with foundational knowledge in Python and Linux, essential for DevOps and cloud environments. It covers basic to intermediate concepts in Python including object-oriented programming, and introduces core Linux commands and environment handling through hands-on practice.",
        topics: {
          "Introduction to Python and IDEs": "Overview of Python programming and setting up development environments",
          "Python Basics": "Basic syntax, data types, control structures, and functions in Python",
          "Object Oriented Programming": "Understanding classes, objects, inheritance, and other OOP principles in Python",
          "Hands-on Sessions and Assignments (Python)": "Practical exercises to reinforce Python concepts",
          "Introduction to Linux": "Understanding the Linux operating system and its role in development environments",
          "Linux Basics": "Core Linux commands, file system navigation, and basic shell scripting",
          "Hands-on Sessions and Assignments (Linux)": "Practical Linux exercises to build command-line proficiency"
        }
      },
      {
        title: "Data Analysis With MS-Excel",
        duration: "1 Week",
        description: "This module focuses on using Microsoft Excel for data analysis tasks, including data exploration, visualization, and solving analytical problems. It covers key Excel features and tools used in the data analytics workflow, empowering learners to perform classification, regression, and statistical analysis within Excel.",
        topics: {
          "Excel Fundamentals": "Understanding Excel interface, formulas, functions, and data management basics",
          "Excel For Data Analytics": "Using Excel tools for data cleaning, transformation, and exploratory data analysis",
          "Data Visualization with Excel": "Creating charts, pivot tables, and dashboards for data insights",
          "Excel Power Tools": "Introduction to Power Query, Power Pivot, and advanced Excel features",
          "Classification Problems Using Excel": "Applying Excel techniques to solve classification problems",
          "Information Measure in Excel": "Using Excel to calculate statistical and information-based metrics",
          "Regression Problems Using Excel": "Performing regression analysis using Excel tools and functions"
        }
      },
      {
        title: "Data Wrangling with SQL",
        duration: "1 Week",
        description: "This module provides comprehensive training on using SQL for data wrangling tasks. It covers foundational and advanced SQL concepts, including user-defined functions and performance optimization, enabling learners to efficiently manipulate and query data in relational databases.",
        topics: {
          "SQL Basics": "Introduction to SQL syntax, SELECT statements, filtering, sorting, and joining tables",
          "Advanced SQL": "Nested queries, window functions, aggregations, and set operations",
          "Deep Dive into User Defined Functions": "Creating and using UDFs for custom SQL operations",
          "SQL Optimization and Performance": "Best practices for writing efficient SQL queries and improving database performance"
        }
      }      
  ];
    const courses2 = [
      {
        title: "Python With Data Science",
        duration: "1 Week",
        description: "This module introduces the use of Python in data science workflows, focusing on essential libraries and techniques for extracting, transforming, and loading data. Learners will gain hands-on experience in data handling, preprocessing, and visualization using popular Python libraries like NumPy, Pandas, and Matplotlib.",
        topics: {
          "Extract Transform Load": "Understanding the ETL process using Python for structured data pipelines",
          "Data Handling with NumPy": "Efficient numerical operations and array manipulations with NumPy",
          "Data Manipulation Using Pandas": "Using Pandas for data cleaning, filtering, grouping, and reshaping",
          "Data Preprocessing": "Preparing data for modeling through encoding, scaling, and imputation techniques",
          "Data Visualization": "Creating insightful plots and charts using Matplotlib and Seaborn"
        }
      },
      {
        title: "Linear Algebra and Advanced Statistics",
        duration: "1 Week",
        description: "This module covers the mathematical foundations essential for data science, focusing on linear algebra and advanced statistical methods. Students will learn key concepts in descriptive and inferential statistics, as well as probability theory, which are crucial for building and understanding machine learning models.",
        topics: {
          "Descriptive Statistics": "Summarizing and describing data using mean, median, mode, variance, and standard deviation",
          "Probability": "Understanding basic probability concepts, distributions, and their applications in data science",
          "Inferential Statistics": "Hypothesis testing, confidence intervals, and drawing conclusions from sample data"
        }
      },
      {
        title: "Machine Learning",
        duration: "1 Week",
        description: "This module introduces the fundamentals of machine learning, covering both supervised and unsupervised learning techniques. Students will explore key algorithms such as regression, classification, and clustering, along with essential performance metrics to evaluate model effectiveness.",
        topics: {
          "Introduction to Machine Learning": "Overview of machine learning concepts, types, and real-world applications",
          "Regression": "Understanding and implementing linear and logistic regression models",
          "Classification": "Exploring classification algorithms like decision trees, SVM, and k-NN",
          "Clustering": "Applying clustering techniques such as k-means and hierarchical clustering",
          "Supervised Learning": "Training models on labeled data using regression and classification methods",
          "Unsupervised Learning": "Discovering hidden patterns in data without predefined labels using clustering",
          "Performance Metrics": "Evaluating model performance using metrics like accuracy, precision, recall, and F1-score"
        }
      }      
  ];
    const courses3 = [
      {
        title: "Deep Learning Using TensorFlow",
        duration: "1 Week",
        description: "This module introduces the foundations of deep learning using TensorFlow, covering the basics of artificial intelligence and neural networks. Students will explore how deep learning models work and how to implement and train neural networks using TensorFlow.",
        topics: {
          "Artificial Intelligence Basics": "Introduction to AI, its types, and real-world use cases",
          "Neural Networks": "Understanding perceptrons, hidden layers, activation functions, and backpropagation",
          "Deep Learning": "Building and training deep neural networks using TensorFlow"
        }
      },
      {
        title: "Power BI",
        duration: "1 Week",
        description: "This module focuses on data visualization and business intelligence using Power BI. Learners will understand the basics of Power BI, work with DAX for data modeling, and build interactive dashboards for analytical insights.",
        topics: {
          "Power BI Basics": "Overview of Power BI interface, data connections, and report building",
          "DAX": "Data Analysis Expressions for calculated columns, measures, and advanced analytics",
          "Data Visualization with Analytics": "Creating dashboards and visuals for data storytelling and insights"
        }
      },
      {
        title: "Deploying Machine Learning Models With Cloud",
        duration: "1 Week",
        description: "This module introduces the principles of MLOps and focuses on deploying machine learning models using cloud platforms. Learners will gain practical knowledge of operationalizing ML models and integrating them into scalable cloud-based environments.",
        topics: {
          "Introduction to MLOps": "Understanding the MLOps lifecycle, CI/CD for ML, and the importance of model deployment",
          "Deploying Machine Learning Models": "Techniques and tools for deploying ML models on cloud services such as AWS, Azure, or GCP"
        }
      }      
  ];
const courses4 = [
  {
    title: "GIT",
    duration: "1 Week",
    description: "This module focuses on version control using GIT, an essential tool for collaborative software development. Learners will understand how to track changes, manage code versions, and collaborate effectively using GIT repositories.",
    topics: {
      "Version Control": "Introduction to version control systems and the importance of code management",
      "GIT": "Using GIT for initializing repositories, committing changes, branching, merging, and working with remote repositories like GitHub"
    }
  },
  {
    title: "Data Science Capstone Project",
    duration: "1 Week",
    description: "This final module is a culmination of all the skills and concepts learned throughout the course. Students will work on a comprehensive capstone project that involves solving a real-world problem using data science techniques such as data preprocessing, analysis, machine learning, and deployment.",
    topics: {
      "Capstone Project": "Apply data science workflow—from data collection and cleaning to model building, evaluation, and deployment—to a real-world problem"
    }
  },
  {
    title: "Business Case Studies",
    duration: "1 Week",
    description: "This module covers a variety of business case studies where data science and machine learning techniques are applied to real-world scenarios. Students will work on projects involving recommendation engines, prediction models, object detection, and financial analysis, gaining practical experience in solving complex business problems.",
    topics: {
      "Recommendation Engine": "Building and evaluating a recommendation system for personalized suggestions",
      "Rating Predictions": "Predicting ratings and feedback scores using regression techniques",
      "Census": "Analyzing census data to derive insights and trends",
      "Housing": "Predicting housing prices and analyzing factors that affect real estate",
      "Object Detection": "Implementing machine learning models to detect objects in images",
      "Stock Market Analysis": "Analyzing stock market trends and predicting future stock prices",
      "Banking Problem": "Solving a real-world banking problem using machine learning algorithms",
      "AI Chatbot": "Building a conversational AI chatbot using natural language processing techniques"
    }
  }      
  ];
const courses5 = [
  {
    title: "Natural Language Processing",
    duration: "1 Week",
    description: "This module introduces the fundamentals of Natural Language Processing (NLP), covering techniques for text mining, cleaning, and pre-processing. Students will explore methods for text classification, sentiment analysis, sequence tagging, and building AI chatbots and recommendation systems using NLP.",
    topics: {
      "Text Mining, Cleaning, and Pre-processing": "Techniques for extracting useful information from text data, including cleaning and preparation",
      "Text Classification, NLTK, Sentiment Analysis": "Using NLTK for text classification tasks and performing sentiment analysis on textual data",
      "Sentence Structure, Sequence Tagging, Sequence Tasks, and Language Modeling": "Understanding sentence structures, tagging sequences, and implementing language models",
      "AI Chatbots and Recommendations Engine": "Building AI chatbots using NLP and recommendation engines based on user preferences"
    }
  },
  {
    title: "Computer Vision",
    duration: "1 Week",
    description: "This module delves into the concepts and techniques used in computer vision, focusing on deep learning models like RBM, DBNs, and Variational Autoencoders. Students will explore object detection, image generation, and reinforcement learning, as well as the deployment of deep learning models for real-world applications.",
    topics: {
      "RBM and DBNs & Variational AutoEncoder": "Understanding Restricted Boltzmann Machines (RBM), Deep Belief Networks (DBNs), and Variational Autoencoders for feature extraction and generation tasks",
      "Object Detection using Convolutional Neural Net": "Implementing CNNs for detecting objects in images and videos",
      "Generating images with Neural Style and Working with Deep Generative Models": "Using neural style transfer to generate artistic images and working with GANs for image creation",
      "Distributed & Parallel Computing for Deep Learning Models": "Utilizing distributed and parallel computing techniques to scale deep learning model training",
      "Reinforcement Learning": "Understanding and implementing reinforcement learning algorithms for decision-making problems",
      "Deploying Deep Learning Models and Beyond": "Techniques for deploying and scaling deep learning models for production environments"
    }
  },
  {
    title: "Data Science at Scale with PySpark",
    duration: "1 Week",
    description: "This module introduces the concepts of Big Data processing using PySpark. Students will learn how to scale data science workflows with Spark, work with Resilient Distributed Datasets (RDDs), and explore advanced concepts like integrating Spark with Hive for efficient big data querying.",
    topics: {
      "Introduction to Big Data and Spark": "Overview of Big Data concepts and how Apache Spark enables distributed data processing",
      "RDDs": "Understanding Resilient Distributed Datasets (RDDs) for distributed data storage and computation",
      "Advanced Concepts & Spark-Hive": "Advanced Spark functionalities and integrating Spark with Hive for big data querying and analysis"
    }
  }      
  ];
const skills = [
  'Python', 'R', 'SQL', 'NumPy', 'Pandas',
  'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'TensorFlow',
  'Keras', 'PyTorch', 'XGBoost', 'LightGBM', 'OpenCV',
  'NLTK', 'spaCy', 'BeautifulSoup', 'Git', 'GitHub',
  'Jupyter Notebook', 'Google Colab', 'FastAPI', 'Selenium', 'Docker',
  'MLflow', 'DVC', 'Hadoop', 'Spark', 'AWS',
  'GCP', 'Azure', 'Linux', 'Statistics', 'Linear Algebra',
  'Calculus', 'Probability', 'EDA', 'Feature Engineering', 'Deep Learning',
  'Machine Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'Data Wrangling'
  ];

  return (
    <div className='h-auto w-full'>
        <Navbar />

        {/* Hero Section */}
        <div className='min-h-[75vh] 2xl:min-h-[50vh] w-full bg-zinc-950 relative'>
            <div className='absolute h-[200px] w-[200px] top-32 left-48 rounded-full bg-[#1DD9FF] blur-[180px]'/>
            <Image src='/coursePage/100.png' alt='#' width={600} height={600} className='absolute bottom-0 h-auto w-full'/>
            <div className='relative top-0 left-0 w-full h-full flex xl:flex-row flex-col items-center justify-center'>
                <div className='left h-fit xl:w-1/2 w-full xl:px-20 xl:py-16 p-4 flex flex-col gap-10 items-start'>
                <ScrollReveal animation='slightRight' delay={100} easing='gentle'>
                <div className='rounded-3xl border-2 sm:text-base text-xs border-white md:w-max sm:text-left text-center w-auto sm:px-10 sm:py-2 p-2 font-bold bg-black uppercase'>
                ONLINE DATA SCIENCE & AI COURSE
                </div>
                </ScrollReveal>
                <ScrollReveal animation='fadeIn' delay={300} easing='spring'>
                  <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>
                      Your Ultimate Handbook for Mastering <span className='text-red-600 capitalize'>Data Sceince & Artificial Intelligence</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal animation='slideUp' delay={500} easing='smooth'>
                  <p className='lg:text-xl sm:text-lg tracking-wide'>
                  Data Science and Artificial Intelligence is a course that delves into the techniques, tools, and methodologies used to extract insights from data and build intelligent systems. It focuses on Data Science, which involves data collection, cleaning, analysis, and visualization to support data-driven decision making. The course also explores Artificial Intelligence, enabling machines to mimic human intelligence through machine learning, deep learning, and natural language processing.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation='scaleUp' delay={700} easing='bouncy' className='flex gap-4 items-start'>
                <Button text='Enquire Now' link={'/contact'} />
                <Button text='Enroll Now' link={'https://courses.careertronic.com/courses'}/>
                </ScrollReveal>   
                </div>
                  <div className='right xl:w-1/2 w-full xl:px-20 md:px-48 p-4'>
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
                    <div className='sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'><span className='text-3xl'>12</span> Months</p></div>
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
        <div className='h-auto w-full bg-[#212121] relative flex lg:flex-row justify-around lg:pt-28 md:pt-20 sm:pt-40 pt-40 z-10'>
    {/* Image Section - Hidden on small screens, visible on medium and up */}
    <div className='w-full lg:w-[45%] relative hidden lg:block'>
        <div className="relative h-full">
            <Image src='/coursePage/103.png' alt='Image1' width={450} height={450} className='absolute -bottom-1 left-0 w-auto h-auto max-w-full max-h-[60vh]'/>
            <ScrollReveal animation='fadeIn' delay={700} easing='spring' className='relative h-full'> 
                <Image src='/coursePage/105.png' alt='Image2' width={400} height={400} className='absolute bottom-40 left-72 w-auto h-auto max-w-[80%] hidden lg:block'/>
            </ScrollReveal>
                <Image src='/coursePage/101.png' alt='Image3' width={1000} height={1000} className='absolute -bottom-1 left-0 h-auto xl:max-w-full 2xl:w-[700px] w-full'/>
        </div>
    </div>
    
    {/* Content Section */}
    <div className='w-full lg:w-[55%] flex p-4 sm:p-6 md:p-10 lg:p-20 flex-col justify-around relative'>
        <ScrollReveal animation='fadeIn' delay={200} easing='smooth'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-6 sm:mb-10 lg:mb-0 text-white leading-tight capitalize'>
                How Can We Turn You Into an Expert in data science & AI?
            </h1>
        </ScrollReveal>
        
        {/* Steps Section - Reorganizes on smaller screens */}
        <div className="flex flex-col md:flex-row w-full p-2 md:p-4 gap-6 md:gap-2 lg:gap-4 xl:gap-8 mt-8 lg:mt-0">
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
            <CourseSection courseName={'Data science & AI'} courseDescription={courseDesc} />
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40'>
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6'>Our Curriculum</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10'>Expert-Design Course Structure</h1>
        
        <CourseRoadmap courses={courses1} show={false}/>
        <CourseRoadmap courses={courses2} show={true} texts={{ 
          heading:'READY FOR DATA SCIENCE & AI ROLES', 
          subHeading:'Covering all modules above makes you ready to apply for data science & AI roles' 
        }} />
        <CourseRoadmap courses={courses3} />
        <CourseRoadmap courses={courses4} show={false}/>
        <CourseRoadmap courses={courses5}  show={true} texts={{ 
          heading:'YOU\'RE NOW READY FOR DATA SCIENCE & AI ROLES', 
          subHeading:'Covering all modules above makes you ready to apply for data science & AI roles' 
        }}/>
        
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
            Gain Real-World Data Science & AI Experience!
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
            Data Science & AI Curriculum
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
               Tap into the wisdom of Data Science & AI Experts
             </h1>
            </ScrollReveal>

             {/* Mentors Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                     <p className="text-gray-400 text-xs sm:text-sm">
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
            <FeeStructure courseName={'Data Science & AI'}/>
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
