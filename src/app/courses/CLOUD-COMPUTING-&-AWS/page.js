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
import { FaLock, FaCloud, FaCogs } from "react-icons/fa";
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';


function page(){
    const faqData = {
    General: [
      {id: 1, question: ' Who can take up this course?', answer: "This course is designed for students, IT professionals, system administrators, developers, and anyone interested in cloud technologies. Whether you're a beginner or looking to upskill for cloud-based roles, this course covers everything from foundational concepts to advanced deployment on AWS."},
      {id: 2, question: 'What is included in your course?', answer: "The course includes core cloud computing principles, AWS architecture, services like EC2, S3, RDS, Lambda, IAM, VPC, CloudFormation, auto-scaling, load balancing, and real-world deployment practices. It also covers DevOps integration, monitoring, and cloud security basics."},
      {id: 3, question: 'What will the student gain from your course?', answer: "Students will gain hands-on experience in deploying scalable, fault-tolerant applications on AWS. You'll learn how to design cloud infrastructure, manage storage and databases, automate deployments, and prepare for industry certifications like AWS Certified Solutions Architect and AWS DevOps Engineer."},
      {id: 4, question: 'How is this course going to help a student get a job?', answer: "Cloud computing is one of the most in-demand skills globally. This course prepares students for AWS certifications and builds a job-ready portfolio through real-world projects—making them eligible for roles like Cloud Engineer, AWS Solutions Architect, DevOps Engineer, or Infrastructure Specialist."},
      {id: 5, question: 'What are the job opportunities in this field?', answer: "Companies across all industries are shifting to the cloud. This opens up roles in startups, enterprise IT, and global cloud service providers like Amazon, Microsoft, Google, Accenture, and Infosys. Cloud and DevOps roles are consistently among the highest-paying tech jobs today."}
    ],
    Pricing: [
      {id: 4, question: 'How much does it cost?', answer: "The course pricing starts at ₹35,000."},
      {id: 5, question: 'Do you offer discounts?', answer: "Yes, we offer discounts for early birds, college students, group enrollments, and special seasonal promotions. Get in touch with our support team to check current offers."},
      {id: 6, question: 'What payment methods do you accept?', answer: "We accept UPI, net banking, credit/debit cards, and major wallets. EMI options are available through supported payment gateways."}
    ],
    Features: [
      {id: 7, question: 'What software skills are you teaching and how well are these tools used in the industry?', answer: "You will learn to work with AWS CLI, EC2, S3, Lambda, RDS, CloudWatch, CloudFormation, IAM, and networking tools. The course also introduces infrastructure as code (IaC) using Terraform, and DevOps tools like Git, Jenkins, and Docker—all of which are used in modern cloud-based environments."},
      {id: 8, question: ' How will I access the softwares required for programming?', answer: "We guide you in setting up your own AWS Free Tier account so you can practice on actual cloud infrastructure. You’ll also use local tools like VS Code and Postman, and cloud IDEs like AWS Cloud9. Setup instructions and support are included."}, 
      {id: 9, question: 'What is the real world application for the tools and techniques will you teach in this course?', answer: "These tools are used daily by cloud professionals to deploy microservices, host applications, automate infrastructure, manage data, and monitor systems. You’ll build real projects like hosting a dynamic website on AWS, deploying serverless functions, and automating backups and alerts."},
      {id: 10, question: "How is your course going to help a student's path to MS or PhD?", answer: "This course provides a solid grounding in cloud infrastructure, distributed systems, and automation—topics commonly researched in computer science graduate programs. It also prepares students for academic research in cloud-native computing, serverless architecture, and scalable system design."}
    ],
    Support: [
      {id: 11, question: 'How can I contact support?', answer: "You can contact our team through email, live chat on the website, or WhatsApp. We are always ready to assist with technical or academic queries."},
      {id: 12, question: 'What are your support hours?', answer: "Our support team is available from 10:00 AM to 6:00 PM IST, Monday through Saturday."},
      {id: 13, question: 'Do you have documentation?', answer: "Yes, we provide comprehensive PDF manuals, reference guides, wiring diagrams, software tutorials, and recorded video sessions for every module covered in the course."}
    ],
    Security: [
      {id: 14, question: 'Is my data secure?', answer: "Absolutely. We use industry-standard practices to protect your personal data and learning progress, including encrypted data storage and secure servers."},
      {id: 15, question: 'Do you support 2FA?', answer: "Yes, we offer two-factor authentication (2FA) to ensure secure access to your student portal and course-related tools."},
      {id: 16, question: 'What encryption do you use?', answer: "We follow modern data protection standards and use AES-256 encryption and HTTPS protocol to safeguard your data during storage and transmission."}
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
        title: "Secure Cloud Architecture",
        description:
          "Design and deploy a secure, scalable infrastructure on AWS using EC2, VPC, IAM, and Security Groups. Learn the best practices of cloud security and access control.",
        icon: <FaLock className="text-white text-3xl" />,
      },
      {
        title: "Serverless App with Lambda & API Gateway",
        description:
          "Build a fully serverless backend using AWS Lambda, API Gateway, and DynamoDB. Trigger functions on-demand and manage APIs with zero server maintenance.",
        icon: <FaCogs className="text-white text-3xl" />,
      },
      {
        title: "S3 + CloudFront Website Hosting",
        description:
          "Host a static website using Amazon S3 and deliver it globally with CloudFront. Learn to configure buckets, set permissions, and optimize for performance and low latency.",
        icon: <FaCloud className="text-white text-3xl" />,
      },
      ];
      const courseDesc = [
        {
          title: 'Diverse Career Opportunities',
          description: 'Be job-ready for roles like SRE, Platform Engineer, and Infrastructure Engineer with this DevOps and AWS certification course, tailored to boost your career in the cloud industry.',
        },
        {
          title: 'Architect-Level Certification',
          description: 'Boost your resume by preparing for architect-level AWS certifications, enhancing your chances of getting shortlisted with expert-led training and certification support.',
        },
        {
          title: 'Real-World DevOps and Cloud Mastery',
          description: 'Dive into our exclusive sandbox environment with 50+ real-life case studies. Strengthen your DevOps and AWS skills through hands-on debugging, practical experience, and infrastructure management.',
        },
      ];
    const courses1 = [
      {
        title: "Overview of Cloud",
        duration: "1 Week",
        description: "This module introduces the foundational concepts of cloud computing. You'll explore what cloud computing is, why it is widely adopted, and the different types of cloud environments including public, private, and hybrid. The module also discusses cloud deployment models and the role of virtualization in enabling cloud services.",
        topics: {
          "What is Cloud Computing": "Understanding the definition and core principles of cloud computing",
          "Why Cloud Computing": "Exploring the benefits and business drivers of adopting cloud technology",
          "Cloud Types": "Distinguishing between Public, Private, and Hybrid cloud environments",
          "Deployment Models": "Understanding different cloud deployment models (IaaS, PaaS, SaaS)",
          "Virtualization": "Exploring virtualization technology and its role in cloud infrastructure"
        }
      },
      {
        title: "AWS Overview",
        duration: "1 Week",
        description: "This module provides an introduction to Amazon Web Services (AWS), the leading cloud services provider. You will learn what AWS is, explore its marketplace, and create your own AWS Free Tier account. The module also covers navigating the AWS Management Console, understanding regions and availability zones, and exploring various AWS services.",
        topics: {
          "What is AWS": "Introduction to Amazon Web Services and its significance in cloud computing",
          "AWS Marketplace": "Exploring the AWS Marketplace for pre-built solutions and services",
          "Free Tier Account": "Creating and configuring a Free Tier AWS account",
          "AWS Console": "Navigating the AWS Management Console and Dashboard",
          "Regions & Availability Zones": "Understanding AWS infrastructure through regions and availability zones",
          "Exploring Services": "Overview of core AWS services across compute, storage, networking, and more"
        }
      },
      {
        title: "Computing and AMI",
        duration: "1 Week",
        description: "This module explores AWS compute services with a focus on EC2 and AMI. You'll learn about different EC2 instance types, launch your first EC2 machine, and understand the role of key pairs and security groups. The module also introduces additional compute services like Elastic Beanstalk, Lightsail, and Lambda for deploying and managing applications in the cloud.",
        topics: {
          "What is EC2": "Introduction to Amazon EC2 and its use for scalable virtual computing",
          "Termination Protection": "Enabling protection to prevent accidental instance termination",
          "EC2 Instance Types": "Understanding different EC2 families and use cases",
          "What is AMI": "Amazon Machine Images (AMI) for creating customized EC2 instances",
          "Compute Resources": "Overview of resources used in AWS compute services",
          "Key Pairs": "Using key pairs for secure SSH access to EC2 instances",
          "Creating EC2 Instance": "Launching your first EC2 machine step-by-step",
          "Security Groups": "Setting up security groups for managing inbound and outbound traffic",
          "Elastic Beanstalk": "Introduction to AWS Elastic Beanstalk for application deployment",
          "Lightsail": "Simplified cloud hosting with AWS Lightsail",
          "Lambda": "Overview of AWS Lambda for serverless computing"
        }
      }
      
    ];
    const courses2 = [
      {
        title: "Linux Fundamentals",
        duration: "1 Week",
        description: "This module introduces the basics of Linux, a critical operating system in the world of cloud computing and DevOps. You’ll learn core Linux commands, work with file systems, directories, and editors like Vi and Nano. The module also covers user permissions and package management for software installation and updates.",
        topics: {
          "Linux Overview": "Introduction to the Linux operating system and its importance in DevOps",
          "Basic Linux Commands": "Essential commands for navigating and managing Linux systems",
          "Vi and Nano Editors": "Using Vi and Nano editors for file editing in the terminal",
          "Files and Directories": "Working with files and directories in Linux",
          "File Systems": "Understanding Linux file system structure and navigation",
          "Permissions": "Managing user and group permissions for security",
          "Package Manager": "Installing and managing software packages using package managers like apt or yum"
        }
      },
      {
        title: "Storage & Backup",
        duration: "1 Week",
        description: "This module covers AWS storage services and backup strategies. You'll learn how to work with Elastic Block Storage (EBS) and Simple Storage Service (S3), including uploading files, setting permissions, and understanding S3 policies. The module also introduces long-term storage options like Glacier, network storage concepts, and managing snapshots for data backup and recovery.",
        topics: {
          "Elastic Block Storage (EBS)": "Using EBS for persistent block-level storage with EC2 instances",
          "Object-Based Storage (S3)": "Storing and retrieving data using Amazon S3",
          "File Uploading on S3": "Uploading files and managing objects in S3 buckets",
          "S3 Permission & Policy": "Controlling access with S3 permissions and bucket policies",
          "Glacier Storage": "Using Amazon Glacier for low-cost, long-term data archiving",
          "S3 Transfer Acceleration": "Speeding up uploads with S3 Transfer Acceleration",
          "Network Storage": "Understanding network-attached storage solutions in AWS",
          "Snapshot & Backup": "Creating and managing snapshots for backup and recovery"
        }
      },
      {
        title: "Identity and Access Management (IAM)",
        duration: "1 Week",
        description: "This module introduces AWS Identity and Access Management (IAM), which allows you to manage access to AWS services and resources securely. You'll learn how to protect your AWS account, create and manage IAM users, groups, roles, and define custom policies to enforce fine-grained permissions.",
        topics: {
          "IAM Overview": "Understanding the purpose and benefits of Identity and Access Management in AWS",
          "AWS Account Protection": "Best practices for securing your AWS account using IAM",
          "IAM Users & Groups": "Creating and managing users and user groups for access control",
          "Custom Policies": "Writing custom IAM policies to define specific access rules",
          "Creating Roles": "Setting up IAM roles for secure access delegation across AWS services"
        }
      }      
    ];
    const courses3 = [
      {
        title: "Load Balancing & Auto Scaling",
        duration: "1 Week",
        description: "This module focuses on optimizing application availability and performance using AWS Load Balancing and Auto Scaling services. You'll learn how to distribute incoming traffic using different types of load balancers and automatically scale resources based on demand using Auto Scaling policies.",
        topics: {
          "Load Balancer Introduction": "Overview of load balancing and its role in high availability",
          "Types of Load Balancer": "Exploring the different types of AWS load balancers (ALB, NLB, CLB)",
          "Using Load Balancer": "Configuring and implementing load balancers in AWS",
          "Auto Scaling Introduction": "Understanding auto scaling for resource optimization and fault tolerance",
          "Types of Auto Scaling": "Different approaches to auto scaling in AWS (dynamic, scheduled, predictive)",
          "Using Auto Scaling": "Setting up auto scaling groups and configurations",
          "Auto Scaling Policies": "Defining and applying scaling policies based on custom metrics and thresholds"
        }
      },
      {
        title: "Virtual Private Cloud (VPC)",
        duration: "1 Week",
        description: "This module provides an in-depth understanding of AWS Virtual Private Cloud (VPC), which allows you to create isolated network environments for your resources. You'll learn about key networking concepts, components of VPC, creating custom subnets, and how to establish secure connections using VPC peering.",
        topics: {
          "VPC Introduction": "Overview of Virtual Private Cloud and its importance in AWS networking",
          "IP Addressing": "Understanding IP Addresses, MAC Addresses, and CIDR notation",
          "Elastic IP": "Allocating and using Elastic IPs for public-facing resources",
          "VPC Components": "Exploring components like subnets, route tables, internet gateways, and NAT gateways",
          "Custom VPC & Subnets": "Creating custom VPCs with private and public subnets",
          "VPC Peering": "Establishing secure communication between VPCs using VPC peering"
        }
      },
      {
        title: "Relational Database Service (RDS)",
        duration: "1 Week",
        description: "This module introduces Amazon RDS, a managed relational database service in AWS. You'll understand the basics of DBMS, explore different database engines supported by RDS, and learn how to set up and manage RDS instances. The module also highlights differences between traditional DB hosting methods and managed services, along with using snapshots for backup and recovery.",
        topics: {
          "What is DBMS & RDS": "Understanding database management systems and the benefits of using Amazon RDS",
          "Database Engines": "Overview of supported database engines such as MySQL, PostgreSQL, Oracle, and SQL Server",
          "DB Hosting Comparison": "Differences between on-premise DB servers, DB on EC2, and managed RDS",
          "Creating RDS Instance": "Step-by-step guide to creating and configuring an RDS instance",
          "DB Snapshot": "Taking and managing database snapshots for backup and recovery"
        }
      }      
      ];
const courses4 = [
  {
    title: "AWS CloudFront",
    duration: "1 Week",
    description: "This module covers Amazon CloudFront, a fast content delivery network (CDN) service. You'll learn how CloudFront works to deliver content with low latency and high transfer speeds. The module also includes steps to create a CloudFront distribution and understand caching mechanisms for optimized performance.",
    topics: {
      "What is CloudFront": "Introduction to Amazon CloudFront and its role as a CDN in AWS",
      "Creating CloudFront Distribution": "Setting up a CloudFront distribution to serve content globally",
      "Cache Memory": "Understanding how CloudFront uses caching to reduce latency and improve performance"
    }
  },
  {
    title: "Amazon Route 53",
    duration: "1 Week",
    description: "This module introduces Amazon Route 53, AWS's scalable and highly available Domain Name System (DNS) service. You'll learn how Route 53 helps in domain name registration, DNS routing, and health checking. The module also covers creating hosted zones and managing domain names in AWS.",
    topics: {
      "What is Route 53": "Overview of Amazon Route 53 and its role in DNS management",
      "Domain Names & Hosting": "Understanding domain names, DNS hosting, and how Route 53 facilitates this",
      "Hosted Zones": "Introduction to hosted zones in Route 53 for managing DNS records",
      "Creating Hosted Zones": "Step-by-step guide on creating hosted zones in Route 53",
      "Domain Name Registration": "How to register and manage domain names using Route 53"
    }
  },
  {
    title: "Monitoring Services",
    duration: "1 Week",
    "description": "This module covers AWS monitoring services, focusing on CloudWatch and CloudTrail. You'll learn how to set up dashboards and alarms in CloudWatch for monitoring your AWS resources. The module also introduces CloudTrail for tracking API calls and resource changes across your AWS environment.",
    "topics": {
      "Introduction to CloudWatch": "Overview of Amazon CloudWatch for monitoring AWS resources and applications",
      "Dashboard Creation": "Creating and configuring CloudWatch dashboards for visual monitoring",
      "Alarm Creation": "Setting up alarms to trigger actions based on specified thresholds in CloudWatch",
      "Reading Dashboard Details": "Interpreting metrics and logs displayed on CloudWatch dashboards",
      "CloudTrail": "Using CloudTrail to monitor API activity and maintain a record of all actions in your AWS account"
    }
  }    
];

const courses5 = [
  {
    title: "Application Services",
    duration: "1 Week",
    description: "This module covers AWS Application Services, specifically SNS (Simple Notification Service), SES (Simple Email Service), and SQS (Simple Queue Service). You’ll learn how to set up messaging systems, create topics, and manage subscriptions for various communication use cases in AWS.",
    topics: {
      "Introduction to SNS, SES, SQS": "Overview of Amazon SNS, SES, and SQS and their use cases in messaging and communication",
      "Topic Creation": "Creating topics in SNS for message broadcasting",
      "Subscription": "Managing subscriptions to SNS topics and handling message delivery to endpoints"
    }
  },
  {
    title: "AWS Troubleshooting",
    duration: "1 Week",
    description: "This module focuses on troubleshooting AWS services, with a specific emphasis on EC2 instances, CloudWatch, ELB, and CloudFront. You’ll learn how to identify and resolve issues in these services using various monitoring and diagnostic tools.",
    topics: {
      "Troubleshooting EC2 Instance": "Techniques for diagnosing and fixing issues with EC2 instances",
      "Troubleshooting Using CloudWatch": "Using CloudWatch logs and metrics to identify problems in your AWS environment",
      "Troubleshooting Using ELB": "Diagnosing and resolving issues with Elastic Load Balancers (ELB)",
      "Troubleshooting Using CloudFront": "Identifying and troubleshooting issues related to CloudFront distributions"
    }
  },  
  {
    title: "AWS Security",
    duration: "1 Week",
    description: "This module covers the security services provided by AWS to protect your resources. You'll learn how to use AWS Firewall, Guard, Amazon Inspector, and WAF & Shield to secure your applications and infrastructure from threats and vulnerabilities.",
    topics: {
      "AWS Firewall": "Using AWS Firewall to control network traffic and secure your environment",
      "AWS Guard": "Overview of AWS Guard for proactive threat detection and security monitoring",
      "Amazon Inspector": "Automating security assessments with Amazon Inspector to identify vulnerabilities",
      "WAF & Shield": "Implementing AWS Web Application Firewall (WAF) and Shield for protection against DDoS attacks"
    }
  }  
];
const courses6 = [
  {
    title: "Architecture, Design, Recovery & Migration",
    duration: "1 Week",
    description: "This module covers best practices for designing high-availability systems, disaster recovery strategies, and migration processes in AWS. You will learn how to implement backup solutions, plan for disaster recovery, and ensure high availability in your architecture, along with strategies for migrating applications and data to AWS.",
    topics: {
      "Backup": "Designing and implementing backup strategies for AWS resources and data",
      "Disaster Recovery": "Planning and executing disaster recovery strategies to ensure business continuity",
      "High Availability Design": "Designing highly available and fault-tolerant systems in AWS",
      "Migration": "Understanding the best practices for migrating applications, databases, and infrastructure to AWS"
    }
  }, 
  {
    title: "AWS Cost Management",
    duration: "1 Week",
    description: "This module introduces AWS cost management tools, including AWS Budgets, Cost Explorer, and Billing. You’ll learn how to monitor and manage your AWS costs, set budgets, and explore detailed cost data to optimize spending on AWS services.",
    topics: {
      "AWS Budget": "Setting up and managing AWS Budgets to track and control your AWS spending",
      "Cost Explorer": "Using AWS Cost Explorer to analyze and visualize your AWS usage and cost patterns",
      "Billing": "Understanding the AWS billing process and how to manage your billing and payments effectively"
    }
  }  
];

const skills = [
  'AWS', 'Azure', 'GCP', 'EC2', 'S3',
  'Lambda', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD',
  'Linux', 'IAM', 'CloudWatch', 'Load Balancing', 'Auto Scaling'
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
                  ONLINE CLOUD COMPUTING(AWS) COURSE
                </div>
                </ScrollReveal>
                <ScrollReveal animation='fadeIn' delay={300} easing='spring'>
                  <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold'>
                      Your Ultimate Handbook for Mastering <span className='text-red-600 capitalize'>Cloud Computing(AWS)</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal animation='slideUp' delay={500} easing='smooth'>
                  <p className='lg:text-xl sm:text-lg tracking-wide'>
                  This Cloud Computing(AWS) course introduces the fundamentals of delivering computing services over the internet, focusing on virtualization, cloud service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), and cloud architecture. It dives deep into AWS, offering hands-on experience in deploying, managing, and securing cloud-based applications and infrastructure using services like EC2, S3, and IAM.
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
                    <div className='sm:border-r-4 flex items-center'><p className='font-bold text-lg md:text-2xl'><span className='text-3xl'>5</span> Months</p></div>
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
                How Can We Turn You Into an Expert in Cloud Computing(AWS)?
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
            <CourseSection courseName={'Cloud Computing(AWS)'} courseDescription={courseDesc}/>
        </div>

        {/* Our Curriculum Section */}
        <div className='h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-20 xl:px-40'>
    <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6'>Our Curriculum</h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10'>Expert-Design Course Structure</h1>
        
        <CourseRoadmap courses={courses1} show={false}/>
        <CourseRoadmap courses={courses2} show={true} texts={{ 
          heading:'READY FOR CLOUD COMPUTING ROLES', 
          subHeading:'Covering all modules above makes you ready to apply for cloud computing roles' 
        }} />
        <CourseRoadmap courses={courses3} show={false} />
        <CourseRoadmap courses={courses4} show={false}/>
        <CourseRoadmap courses={courses5} show={false}/>
        <CourseRoadmap courses={courses6} show={true} texts={{ 
            heading:'YOU\'RE NOW READY FOR CLOUD COMPUTING ROLES', 
            subHeading:'Covering all modules above makes you ready to apply for cloud computing roles' 
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
          <button className='text-lg sm:text-xl md:text-2xl text-black'>
            Download Our Brochure for a Complete Overview!
          </button>
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
            Gain Real-World Cloud Computing Experience!
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
            Cloud Computing Curriculum
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
               Tap into the wisdom of Cloud Computing Experts
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
            <FeeStructure courseName={'Cloud Computing(AWS)'} />
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto bg-white'>
            <FAQSection faqData={faqData}/>
            <FAQSection faqData={faqData}/>
        </div>

    </div>
  </div>
  )
}

export default page;
