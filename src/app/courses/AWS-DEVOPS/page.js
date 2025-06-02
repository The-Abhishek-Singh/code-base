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
import { FaBug, FaCloud, FaSync } from "react-icons/fa";
import ScrollReveal from '@/components/ScrollReveal';


function page(){
    const faqData = {
    General: [
      {id: 1, question: ' Who can take up this course?', answer: "Anyone interested in starting or advancing a career in AWS Cloud and DevOps can enroll. Whether you're a student, working professional, or someone switching careers, this course is structured for all levels."},
      {id: 2, question: 'What is included in your course?', answer: "This course covers foundational to advanced topics in AWS Cloud and DevOps, including Linux, EC2, IAM, VPC, S3, CI/CD, Docker, Kubernetes, Jenkins, Infrastructure as Code (Terraform), and monitoring tools. It blends practical hands-on labs with theoretical knowledge to prepare you for real-world roles."},
      {id: 3, question: 'What will the student gain from your course?', answer: "Students will gain deep insight into cloud architecture, automation, containerization, and deployment strategies. You'll be able to build, manage, and deploy cloud infrastructure using AWS and DevOps tools efficiently—skills highly sought after in today’s job market."},
      {id: 4, question: 'How is this course going to help a student get a job?', answer: "This course is aligned with industry standards and includes practical projects, real-time scenarios, and resume-building guidance. It prepares students for AWS certifications (like AWS Certified Solutions Architect – Associate) and equips them with DevOps practices used by top tech companies, helping them crack technical interviews and perform confidently in professional roles."},
      {id: 5, question: 'What are the job opportunities in this field?', answer: "Cloud and DevOps roles are among the most in-demand across tech sectors. Companies like Amazon, Google, Microsoft, Infosys, TCS, Accenture, Capgemini, and countless startups seek professionals skilled in AWS, CI/CD pipelines, Docker, Kubernetes, and infrastructure automation. This course provides the exact skill set these companies are hiring for."}
    ],
    Pricing: [
      {id: 4, question: 'How much does it cost?', answer: "The course pricing starts at ₹35,000."},
      {id: 5, question: 'Do you offer discounts?',answer: "Yes, we offer early-bird, referral-based, and seasonal discounts. Reach out to our team to check current offers."},
      {id: 6, question: 'What payment methods do you accept?', answer: "We accept UPI, credit/debit cards, net banking, and major digital wallets. EMI options are available on request."}
    ],
    Features: [
      {id: 7, question: 'What software skills are you teaching and how well are these tools used in the industry?', answer: "You’ll learn essential DevOps tools like Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, and monitoring tools like Prometheus & Grafana. On the AWS side, you’ll master services like EC2, Lambda, S3, RDS, CloudFormation, and more—all of which are widely used in enterprise environments."},
      {id: 8, question: ' How will I access the softwares required for programming?', answer: "We guide you through installing and accessing all required tools, many of which are open-source or available via AWS Free Tier. Virtual lab access or cloud practice environments will also be provided."}, 
      {id: 9, question: 'What is the real world application for the tools and techniques will you teach in this course?', answer: "You’ll work on use-cases such as deploying a full-stack application using CI/CD, automating infrastructure with Terraform, container orchestration with Kubernetes, and configuring monitoring dashboards. These mimic real-world DevOps and AWS project scenarios."},
      {id: 10, question: "How is your course going to help a student's path to MS or PhD?", answer: "This course builds a strong foundation in cloud infrastructure and automation—skills that are highly beneficial for research in scalable systems, distributed computing, and systems automation. It’s also great preparation for academic research involving cloud-native or hybrid computing environments."}
    ],
    Support: [
      {id: 11, question: 'How can I contact support?' , answer: "You can contact our support team via email, WhatsApp, or through the chat function on our website. Contact details are listed on the course page."},
      {id: 12, question: 'What are your support hours?', answer: "Our support team is available from 10:00 AM to 6:00 PM IST, Monday to Saturday."},
      {id: 13, question: 'Do you have documentation?', answer: "Yes, we provide full documentation, reference materials, GitHub repositories, and recorded sessions to support your learning journey."}
    ],
    Security: [
      {id: 14, question: 'Is my data secure?', answer: "Yes, we follow best practices in data privacy and security. Your data is securely stored and protected."},
      {id: 15, question: 'Do you support 2FA?', answer: "Yes, we support two-factor authentication (2FA) for secure account access."},
      {id: 16, question: 'What encryption do you use?', answer: "We use AES-256 encryption and secure HTTPS protocols to protect all user data during transmission and at rest."}
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
  ]
  const projects = [
    {
      title: "Master Production Issue Handling",
      description:
        "Learn how to detect, classify, communicate, and resolve production issues, along with providing a workaround and RCA.",
      icon: <FaBug className="text-white text-3xl" />
    },
    {
      title: "Effortless Infrastructure Setup",
      description:
        "Set up and manage scalable infrastructure on AWS using EC2, VPC, and IAM, ensuring high availability and performance.",
      icon: <FaCloud className="text-white text-3xl" />
    },
    {
      title: "Streamline CI/CD Process",
      description:
        "Implement a CI/CD pipeline using AWS CodePipeline and CodeBuild to automate testing and deployment of applications.",
      icon: <FaSync  className="text-white text-3xl" />
    },
  ];
    const courseDesc = [
      {
        title: 'Integrated Cloud & DevOps Mastery',
        description: 'Master AWS and DevOps together—learn to deploy, automate, and manage cloud-native applications using EC2, S3, Docker, Jenkins, and Kubernetes. Build CI/CD pipelines and adopt Infrastructure as Code with real-world tools like Terraform and CloudFormation.'
      },
      {
        title: 'Real-World DevOps on AWS',
        description: 'Work hands-on in live AWS environments while applying DevOps principles. Set up pipelines, containerize apps with Docker, orchestrate with Kubernetes, and automate workflows with Jenkins and Lambda.'
      },
      {
        title: 'From Cloud Fundamentals to Automation',
        description: 'Start with core AWS services and scale up to advanced DevOps automation. Learn to provision infrastructure, manage deployments, and monitor performance—all aligned with industry best practices and certification goals.'
      }
    ]
    const courses1 = [
      {
        title: "Overview of DevOps",
        duration: "1 Week",
        description: "This module introduces the fundamentals of DevOps, focusing on its purpose, principles, and role in modern software development. You'll explore why DevOps is important, how it bridges the gap between development and operations, and the skills required to become a DevOps engineer. The module also covers the DevOps delivery pipeline and ecosystem, along with current market trends.",
        topics: {
          "Why DevOps?": "Understanding the need for DevOps in modern software development",
          "What is DevOps?": "Exploring the definition, principles, and goals of DevOps",
          "DevOps Market Trends": "Current trends, adoption stats, and industry insights",
          "DevOps Engineer Skills": "Key technical and soft skills required for DevOps roles",
          "DevOps Delivery Pipeline": "Overview of the DevOps delivery pipeline from development to deployment",
          "DevOps Ecosystem": "Tools, platforms, and practices that make up the DevOps environment"
        }
      },
      {
        title: "Version Control with Git",
        duration: "1 Week",
        description: "This module introduces version control systems with a focus on Git, the most widely used version control tool in the DevOps ecosystem. You'll learn the fundamentals of version control, understand Git’s role in collaborative development, and explore common Git commands. The module also covers working with remote repositories and installing Git for your development environment.",
        topics: {
          "Version Control Basics": "What is version control and why it's essential in software development",
          "Introduction to Git": "Understanding what Git is and how it works",
          "Organizational Benefits": "Why Git is a valuable tool for your organization",
          "Installing Git": "How to install and configure Git on different operating systems",
          "Git Commands": "Common Git commands for managing repositories",
          "Remote Repositories": "Working with remote repositories for collaboration and code sharing"
        }
      },
      {
        title: "Git, Jenkins & Maven Integration",
        duration: "1 Week",
        description: "This module covers advanced Git practices and introduces key DevOps tools—Jenkins and Maven. You'll explore branching and merging strategies, learn standard Git workflows, and utilize a Git cheatsheet for efficient usage. The module also introduces Continuous Integration (CI), its importance in modern development, and how Jenkins automates builds and deployments. Additionally, you'll gain insight into Maven for project build and dependency management.",
        topics: {
          "Git Branching & Merging": "Working with branches and merging changes in Git",
          "Git Workflows": "Understanding common Git workflows like GitFlow and feature branching",
          "Git Cheatsheet": "Quick reference guide to essential Git commands",
          "Continuous Integration (CI)": "What is CI and why it is important in modern development pipelines",
          "Introduction to Jenkins": "Overview of Jenkins with its architecture and use in CI",
          "Introduction to Maven": "Understanding Maven for project build automation and dependency management"
        }
      }
    ];
    const courses2 = [
      {
        title: "Continuous Integration using Jenkins",
        duration: "1 Week",
        description: "This module dives deeper into Continuous Integration by focusing on Jenkins. You’ll learn how to manage Jenkins, configure slave nodes, and implement a complete CI pipeline. The module emphasizes 'Pipeline as Code' for automating workflows and walks through building and executing pipelines to streamline the delivery process.",
        topics: {
          "Jenkins Management": "Managing Jenkins configurations and system settings",
          "Slave Node Configuration": "Adding and configuring slave nodes in Jenkins",
          "Delivery Pipeline": "Building a continuous delivery pipeline in Jenkins",
          "Pipeline as Code": "Implementing pipelines using Jenkinsfile and scripted/declarative syntax",
          "Jenkins Implementation": "Setting up and running Jenkins for CI workflows",
          "Pipeline Jobs": "Creating and managing a series of pipeline jobs using Jenkins"
        }
      },
      {
        title: "Continuous Deployment: Containerization with Docker",
        duration: "1 Week",
        description: "This module introduces Docker as a tool for containerization in the deployment phase of DevOps. You’ll learn the fundamentals of Docker containers, how to create and manage them, and how to build custom images using Dockerfiles. The module also covers Docker Compose for managing multi-container applications and publishing images to Docker Hub for sharing.",
        topics: {
          "Docker Introduction": "Understanding Docker and the role of containerization in DevOps",
          "Images and Containers": "Differences between Docker images and containers",
          "First Docker App": "Running 'Hello World' in Docker",
          "Container Concepts": "Introduction to containers and their life cycle",
          "Image Management": "Sharing and copying base images",
          "Dockerfile": "Creating custom images using Dockerfile",
          "Working with Containers": "Running and managing Docker containers",
          "Publishing Images": "Publishing Docker images to Docker Hub",
          "Docker Compose": "Using Docker Compose to manage multi-container applications"
        }
      },
      {
        title: "Containerization using Kubernetes",
        duration: "1 Week",
        description: "This module focuses on Kubernetes, the leading container orchestration platform. You'll learn the fundamentals of Kubernetes architecture, how to install and configure a cluster, and work with essential concepts like pods, namespaces, and replica sets. The module also covers deploying applications using YAML and Helm, managing services, and using the Kubernetes Dashboard for visualization and control.",
        topics: {
          "Kubernetes Introduction": "Overview of Kubernetes and its role in container orchestration",
          "K8s Architecture": "Understanding the components of Kubernetes architecture",
          "K8s Installation": "Installing and setting up Kubernetes",
          "Core Concepts": "Working with Pods, Namespaces, Clusters, and Replica Sets",
          "Cluster Setup": "Spinning up a Kubernetes cluster on Ubuntu VMs",
          "Cluster Exploration": "Exploring and interacting with your Kubernetes cluster",
          "YAML in Kubernetes": "Using YAML files for resource configuration",
          "HELM Charts": "Introduction to HELM and managing applications with Helm Charts",
          "Kubernetes Deployment": "Creating deployments using YAML files",
          "Kubernetes Services": "Creating and managing services in Kubernetes",
          "Kubernetes Dashboard": "Installing and using the Kubernetes Dashboard",
          "App Deployment via Dashboard": "Deploying applications through the Kubernetes Dashboard",
          "Rolling Updates": "Implementing rolling updates in Kubernetes",
          "Container Orchestration": "Understanding container orchestration and Kubernetes's role"
        }
      }
      
    ];
    const courses3 = [
      {
        title: "Configuration Management with Ansible",
        duration: "1 Week",
        description: "This module introduces Ansible, an open-source automation tool for configuration management, application deployment, and task automation. You’ll learn about Ansible's architecture, installation, and the essential concepts like inventory, hosts, and groups. The module also covers YAML scripting and writing effective Ansible playbooks to automate tasks across your infrastructure.",
        topics: {
          "Ansible Introduction": "Overview of Ansible and its role in configuration management",
          "Basics & Installation": "Installing and setting up Ansible on your system",
          "Ansible Architecture": "Understanding the architecture and components of Ansible",
          "Control Machine Requirements": "Requirements for the Ansible control machine",
          "Node Machine Requirements": "Setting up and configuring node machines for Ansible management",
          "Inventory": "Working with Ansible inventory files to define hosts and groups",
          "Hosts & Groups": "Organizing hosts and grouping them for easier management",
          "YAML Introduction": "Introduction to YAML for writing Ansible scripts",
          "Playbooks": "Writing and executing Ansible playbooks to automate tasks",
          "Writing Playbooks": "Best practices for writing efficient and maintainable Ansible playbooks"
        }
      },
      {
        title: "Continuous Monitoring with Nagios & ELK",
        duration: "1 Week",
        description: "This module covers continuous monitoring using Nagios and the ELK stack. You'll learn the fundamentals of monitoring, how to install Nagios and ELK, and configure Nagios plugins for enhanced monitoring. The module also explores using Nagios commands and notifications, and working with the ELK stack for log management and visualization.",
        topics: {
          "Continuous Monitoring": "Introduction to continuous monitoring and its importance in DevOps",
          "Nagios & ELK Introduction": "Overview of Nagios and the ELK stack for monitoring and logging",
          "Installing Nagios & ELK": "Installing and setting up Nagios and the ELK stack",
          "Nagios Plugins": "Using Nagios plugins (NRPE) for extended monitoring capabilities",
          "Nagios Commands & Notification": "Configuring Nagios commands and setting up notifications for alerts",
          "Working with ELK": "Leveraging the ELK stack (Elasticsearch, Logstash, Kibana) for log collection, storage, and visualization"
        }
      },
      {
        title: "Introduction to DevOps on Cloud",
        duration: "1 Week",
        description: "This module introduces cloud computing and the role of DevOps in cloud environments. You will learn why cloud adoption is essential in modern development and how DevOps enhances the cloud experience. The module covers an overview of AWS, its services, and how to use AWS for implementing DevOps practices.",
        topics: {
          "Why Cloud": "Understanding the need for cloud computing in modern software development",
          "Cloud Computing Introduction": "Introduction to cloud computing concepts and models (IaaS, PaaS, SaaS)",
          "DevOps on Cloud": "Why DevOps is crucial in cloud environments and its benefits",
          "AWS Introduction": "Introduction to Amazon Web Services (AWS) and its significance in DevOps",
          "AWS Services": "Overview of key AWS services used in DevOps workflows (EC2, S3, Lambda, etc.)",
          "DevOps using AWS": "Implementing DevOps practices using AWS tools and services"
        }
      }
      ];
const skills = [
  'AWS', 'EC2', 'S3', 'VPC', 'CloudFormation',
  'Lambda', 'ECS', 'EKS', 'Fargate', 'IAM',
  'Route 53', 'CloudFront', 'CloudWatch', 'RDS', 'Redshift',
  'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Jenkins',
  'Git', 'GitHub', 'GitLab CI/CD', 'CodePipeline', 'CodeBuild',
  'CodeDeploy', 'CI/CD', 'ELB', 'Auto Scaling', 'CloudTrail',
  'Bash Scripting', 'Linux', 'Prometheus', 'Grafana', 'ArgoCD',
  'Nagios', 'DataDog', 'Splunk', 'ELK Stack', 'Secrets Manager'
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
                ONLINE Amazon Web Services & DevOps COURSE
                </div>
                </ScrollReveal>
                <ScrollReveal animation='fadeIn' delay={300} easing='spring'>
                  <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>
                  Your Ultimate Handbook for Mastering <span className='text-red-600 capitalize'>AWS & DevOps</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal animation='slideUp' delay={500} easing='smooth'>
                  <p className='lg:text-xl sm:text-lg tracking-wide'>
                  This course covers the fundamentals of AWS cloud services and DevOps practices. It focuses on deploying and managing scalable applications using tools like EC2, S3, Lambda, Docker, Jenkins, and Kubernetes. Learners gain hands-on experience with CI/CD pipelines, infrastructure as code, and cloud automation. Ideal for those preparing for roles in cloud engineering or certifications like AWS Solutions Architect or DevOps Engineer.
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
            <div className='h-auto sm:w-[85%] w-[75%] rounded-lg px-5 py-3 bg-[#fff] relative bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-between
            
            '>
            <ScrollReveal animation='slideUp' delay={800} easing='spring' className='relative flex flex-col sm:flex-row w-full text-black gap-5'>
                <div className='flex flex-col sm:flex-row w-full text-black gap-5'>
                   <div className='h-full flex-1 px-3 gap-5 flex flex-row sm:flex-col shrink-0 justify-between sm:justify-around'>
                    <div className='h-auto'><p className='text-base md:text-lg'>Propgram Duration</p></div>
                    <div className='sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'><span className='text-3xl'>3.5</span> Months</p></div>
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
                How Can We Turn You Into an Expert in AWS & DevOps?
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
                    <DevOpsSkills skills={skills} />
                </div>
            </ScrollReveal>
            </div>
        </div>

        {/* DevOps Section */}
        <div className='h-auto w-full overflow-hidden'>
            <CourseSection courseName={'AWS & DevOps'} courseDescription={courseDesc}/>
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40'>
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6'>Our Curriculum</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10'>Expert-Design Course Structure</h1>
        
        <CourseRoadmap courses={courses1} show={false}/>
        <CourseRoadmap courses={courses2} show={true} texts={{ 
            heading:'READY FOR AWS & DEVOPS ROLES', 
            subHeading:'Covering all modules above makes you ready to apply for AWS & DevOps roles' 
        }} />
        <CourseRoadmap courses={courses3} show={true} texts={{ 
            heading:'YOU\'RE NOW READY FOR AWS DEVOPS ENGINEER ROLES', 
            subHeading:'Covering all modules above makes you ready to apply for AWS & DevOps roles' 
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
            Gain Real-World AWS & DevOps Experience!
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
             AWS & DevOps Curriculum
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
               Tap into the wisdom of AWS & DevOps Experts
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
            <FeeStructure courseName={'AWS & DevOps'} />
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto bg-white'>
            <FAQSection faqData={faqData} />
        </div>

    </div>
  </div>
  )
}

export default page;
