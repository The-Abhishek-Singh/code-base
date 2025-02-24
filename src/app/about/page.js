"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import "@/styles/aboutUs.css";
import IconHover from "../../component/About/IconHover";
import { Goal, HandHeart, ScanEye } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <>
    <div className="bg-black h-auto">
      <div id="flexforpage1">
      
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.69,
            type: "spring",
          }}
          id="page1"
        >
          <div className="line1">
            <h5 style={{ color: "white" }}>&nbsp;About</h5>
            <h2 style={{ color: "red" }}>
              <span>&nbsp;</span>Careertronics
            </h2>
          </div>
          <p id="aboutText">
            At Careertronic Global Services Pvt. Ltd. (CGSPL), we are driven by
            a singular purpose: to empower businesses and individuals to thrive
            in a fast-changing, interconnected world. Founded with a vision to
            provide innovative, high-quality services, we have become a global
            leader in Software Development, IT Training, Industrial Automation
            Training, Corporate & Industrial Training, Global Education, and
            Business Consulting.
          </p>
          <p id="aboutText">
            Our mission is to enable sustainable growth and long-term success
            for clients through tailored solutions. Whether it&apos;s driving
            digital transformation, enhancing professional skills, or exploring
            global education, we are committed to guiding you every step of the
            way.
          </p>
          <p id="aboutText">
            With a focus on excellence, we help individuals advance their
            careers and organizations optimize performance, ensuring they stay
            competitive in an increasingly complex market.
          </p>
        </motion.div>
      </div>

      <div id="page2" className="text-center">
        <div className="row container" id="page2div2">
          <div id="ourMission" className="col-xl-4 ">
            <div id="ourMissionImage" className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  type: "spring",
                }}
              >
                <IconHover icon={ScanEye} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                type: "spring",
              }}
            >
              <div id="ourMissionText">
                <h1 id="mainTextPage2">OUR MISSION</h1>
              </div>
              <div>
                <p id="textPage2">
                  At Careertronic Global Services Pvt. Ltd. (CGSPL), we empower
                  businesses and individuals through advanced technology,
                  tailored training, and global education. Our mission is to
                  deliver innovative solutions, drive sustainable growth, and
                  build lasting partnerships for success in a digital world.
                </p>
              </div>
            </motion.div>
          </div>
          <div id="ourMission" className="col-xl-4">
            <div id="ourMissionImage" className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  type: "spring",
                }}
              >
                <IconHover icon={Goal} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                type: "spring",
              }}
            >
              <div id="ourMissionText">
                <h1 id="mainTextPage2">OUR VISION</h1>
              </div>
              <div>
                <p id="textPage2">
                  At Careertronic Global Services Pvt. Ltd. (CGSPL), we aim to
                  be a global leader in IT solutions, training, and education,
                  delivering innovative services that empower individuals and
                  organizations. Our vision is to drive digital transformation,
                  career growth, and success by equipping clients with the tools
                  and knowledge to thrive in a dynamic world.
                </p>
              </div>
            </motion.div>
          </div>
          <div id="ourMission" className="col-xl-4">
            <div id="ourMissionImage" className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  type: "spring",
                }}
              >
                <IconHover icon={HandHeart} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                type: "spring",
              }}
            >
              <div id="ourMissionText">
                <h1 id="mainTextPage2">OUR VALUES</h1>
              </div>
              <div>
                <p id="textPage2">
                  At Careertronic Global Services Pvt. Ltd. (CGSPL), our core
                  values define our commitment to excellence and success for
                  clients and partners:
                </p>
                <ul className="list-disc">
                  <li id="textPage2">
                    <strong>Striving for Innovation</strong>
                  </li>
                  <li id="textPage2">
                    <strong>Pursuing Excellence</strong>
                  </li>
                  <li id="textPage2">
                    <strong>Customer-Centricity</strong>
                  </li>
                  <li id="textPage2">
                    <strong>Upholding Integrity</strong>
                  </li>
                  <li id="textPage2">
                    <strong>Promoting Collaboration</strong>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        id="page3"
        className="page3 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div id="page3div2" className="container-sm row">
          <motion.div
            id="page3left"
            className="col-xl-7"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <div id="page3Heading">
              <h1 id="page3h1">
                <span id="Why">What we&nbsp;</span>
                <span id="Careertronics">Do</span>
                <span id="Why">?</span>
              </h1>
            </div>
            <div id="page3Content">
              <ul>
                <li>
                  <strong>Software Development:</strong>
                  Customized solutions to optimize operations, enhance
                  efficiency, and support business growth with scalable and
                  reliable software.
                </li>
                <li>
                  <strong>IT Training:</strong>
                  Comprehensive programs to upskill professionals in
                  cutting-edge technologies, equipping them for a dynamic IT
                  landscape.
                </li>
                <li>
                  <strong>Industrial Automation:</strong>
                  Specialized training to improve manufacturing and robotics
                  efficiency while reducing downtime.
                </li>
                <li>
                  <strong>Corporate Training:</strong>
                  Tailored solutions to enhance employee skills, leadership, and
                  technical expertise, driving team success.
                </li>
                <li>
                  <strong>Global Education:</strong>
                  Guidance for students seeking international study and career
                  opportunities with top global institutions.
                </li>
                <li>
                  <strong>Business Consulting:</strong>
                  Expert advice to overcome challenges, optimize operations, and
                  implement growth strategies for success.
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            id="page3right1"
            className="col-xl-5"
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              type: "spring",
              bounce: 0.4,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              className="mx-auto"
              id="page3image1"
              src="/about/page3img.svg"
              alt="What We Do Image"
              width={500}
              height={400}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="page3"
        className="page4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container-sm row vats-div-big">
          <motion.div
            id="page3right2"
            className="vats-div-1 col-xl-5"
            initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.3,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              id="page3image2"
              src="/about/page4img.svg"
              alt="Why Choose Us Image"
              width={500}
              height={400}
            />
          </motion.div>
          <motion.div
            id="page3left"
            className="col-xl-7"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <div id="page3Heading">
              <h1 id="page3h1">
                <span id="Why">Why Should You&nbsp;</span>
                <span id="Careertronics">Choose Us</span>
                <span id="Why">?</span>
              </h1>
            </div>
            <div id="page3Content">
              <ul>
                <li>
                  <strong>Global Reach:</strong>
                  Delivering tailored solutions to global markets with a strong
                  international presence and extensive network.
                </li>
                <li>
                  <strong>Expertise:</strong>
                  Skilled professionals in software, automation, IT training,
                  and consulting, providing innovative solutions.
                </li>
                <li>
                  <strong>Tailored Solutions:</strong>
                  Personalized strategies aligned with unique goals, ensuring
                  impactful outcomes for clients.
                </li>
                <li>
                  <strong>End-to-End Support:</strong>
                  Comprehensive assistance from start to finish for seamless
                  execution and success.
                </li>
                <li>
                  <strong>Proven Track Record:</strong>
                  Trusted for quality, reliability, and exceeding expectations
                  across diverse industries.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="page3"
        className="page5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div id="page3div2" className="container-sm row">
          <motion.div
            id="page3left"
            className="col-xl-7"
            initial={{ opacity: 0, y: 100, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <div id="page3Heading">
              <h1 id="page3h1">
                <span id="Why">Our Exceptional&nbsp;</span>
                <span id="Careertronics">Team</span>
                <span id="Why">!</span>
              </h1>
            </div>
            <div id="page3Content" className="me-4 !pl-8">
              <p>
                At Careertronic Global Services, our greatest asset is our
                exceptional team of passionate, skilled, and experienced
                professionals, each dedicated to delivering innovative solutions
                that drive your success. From software developers and IT
                trainers to business consultants and global education advisors,
                we have a diverse group of experts across every area of our
                service offerings, ensuring that you receive the highest level
                of expertise, care, and support. Our team thrives on
                collaboration, constantly sharing insights, ideas, and best
                practices to create solutions that are customized to your unique
                needs. We are committed to fostering a culture of continuous
                learning and growth, staying ahead of industry trends to deliver
                the most relevant, cutting-edge services to our clients.
              </p>
            </div>
          </motion.div>
          <motion.div
            id="page3right3"
            className="col-xl-5"
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              type: "spring",
              bounce: 0.4,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              id="page3image3"
              src="/about/page5img.svg"
              alt="Our Team Image"
              className="mx-auto"
              width={500}
              height={400}
            />
          </motion.div>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default AboutUs;
