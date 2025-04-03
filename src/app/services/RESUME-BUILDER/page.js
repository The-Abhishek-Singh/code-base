"use client";
import React from "react";
import VantaBackground from "@/components/VantaBackground";
import ScrollCards from "@/components/UI/servicespage/StackwithFixedHeading";
import {
  Code,
  Cloud,
  FileChartColumn,
  Bitcoin,
  Construction,
  Link,
  FileUp as FileUser,
  AppWindow,
  BrainCircuit,
} from "lucide-react";
import ServicesContent from "@/components/UI/servicespage/ServicesUI";
const SoftwareServices = () => {
  const softwareIcons = {
    brainCircuit: BrainCircuit,
    cloud: Cloud,
    appWindow: AppWindow,
    construction: Construction,
    fileChartColumn: FileChartColumn,
    bitcoin: Bitcoin,
  };

  const softwareServicesData = [
    {
      title: "How it works",
      heading: "How it works",
      image: "/ServiceImg/Resume/r1.png",
      content:
        "With Careertronic’s CV builder, you can choose from sleek, professional templates, fill in your details, and let our smart wizard create a keyword-optimized CV. Customize the layout and content to match your style, then download it in multiple formats to start applying confidently!",
      iconType: "brainCircuit",
    },
    {
      title: "Why Choose Careertronic?",
      heading: "Why Choose Careertronic?",
      image: "/ServiceImg/Resume/r2.avif",
      content:
        "Save time with Careertronic’s expert-designed CV templates optimized for ATS, allowing you to showcase your skills effortlessly. Create your CV in minutes with real-time updates and get free professional advice and career tips to stand out to employers.",
      iconType: "cloud",
    },
    {
      title: "CV Builder Features",
      heading: "CV Builder Features",
      image: "/ServiceImg/Resume/r3.webp",
      content:
        "Careertronic offers sleek, industry-specific CV templates with customizable sections, smart suggestions, and ATS optimization to help you stand out. Download your CV in multiple formats (PDF, DOCX, TXT) for seamless job applications.",
      iconType: "appWindow",
    },
    {
      title: "Benefits for Employers",
      heading: "Benefits for Employers",
      image: "/ServiceImg/Resume/r4.webp",
      content:
        "Our platform provides access to top talent from leading institutions, with customizable recruitment campaigns tailored to your company's needs. The streamlined interview process and data-driven insights help you make informed, efficient hiring decisions.",
      iconType: "construction",
    },
  ];

    return (
            <div className="relative w-full ">
              <div className="relative z-10">
                <VantaBackground
                  className="z-50"
                  color={"#AB0003"} //RED color
                  backgroundColor={"#000000"} // Dark background
                  points={10} // More connection points
                  maxDistance={25} // Slightly increased connection distance
                  spacing={22}
                  showDots={true}
                >
                  <div className="opacity-90">
        <ServicesContent
          title="RESUME BUILDER"
          description="Fast. Easy. Effective.
          If a sheet of paper represents your entire work life, personality, and skills, it better be an impressive one. Let Careertronic do the heavy lifting for you with our powerful and easy-to-use CV Maker Online. Whether you're a recent graduate or an experienced professional, we make sure your resume reflects the best version of you."
          sectionTitle="Our Web Solutions"
        />
</div>

</VantaBackground>
        <ScrollCards
          cardsData={softwareServicesData}
          customIcons={softwareIcons}
        />
      </div>
    </div>
  );
};

export default SoftwareServices;
