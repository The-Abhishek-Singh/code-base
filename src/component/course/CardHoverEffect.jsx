import Heading from "./Heading";
import { HoverEffect } from "@/component/UI/course/card-hover-effect";

export function CardHoverEffect() {
  return (
    (<div className="max-w-5xl mx-auto p-2">
      <Heading text='REVIEWS' bgColor='white' color='black'/>
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    image: '/coursePage/profile-circle-svgrepo-com.svg',
    title: "Sarah Chen - Software Developer",
    description:
      "Excellent Full Stack Development course with quick doubt resolution (under 2 hours). Course content perfectly aligns with industry needs. The certificate has genuine value - recruiters actually recognize it. Interactive projects provided great hands-on experience.",
    // link: "https://stripe.com",
  },
  {
    image: '/coursePage/profile-circle-svgrepo-com.svg',
    title: "James Wilson - Career Switcher",
    description:
      "Perfect for career transitions. Modular learning made it manageable alongside full-time work. Industry expert sessions were invaluable for real-world insights. Some video lectures need audio improvements. Rigorous certification process adds credibility.",
    // link: "https://netflix.com",
  },
  {
    image: '/coursePage/profile-circle-svgrepo-com.svg',
    title: "Maria Rodriguez - Student",
    description:
      "Good course variety and community features. Interactive exercises are engaging. Main issues: doubt resolution can be slow during peak hours, and mobile app needs stability fixes. Final assessment could be more challenging. Decent value for money.",
    // link: "https://google.com",
  },
  {
    image: '/coursePage/profile-circle-svgrepo-com.svg',
    title: "Dr. Rahul Sharma - Professor",
    description:
      "Outstanding pedagogical structure with personalized learning paths. Qualified experts provide thorough doubt resolution. Certification meets university standards. Excellent balance of theory and practical applications.",
    // link: "https://meta.com",
  },
  {
    image: '/coursePage/profile-circle-svgrepo-com.svg',
    title: "Emma Thompson - High School Student",
    description:
      "Beginner-friendly platform with engaging gamification features. Clear progress tracking helps stay motivated. Doubt resolution is helpful but sometimes uses complex terminology. Fair assessment system. Great for coding newcomers.",
    // link: "https://amazon.com",
  },
  {
    image: '/coursePage/profile-circle-svgrepo-com.svg',
    title: "Alex Kumar - IT Professional",
    description:
      "Solid advanced courses with reliable expert support. Well-organized content but needs more case studies. Strong certification process and networking opportunities through community features. Good for skill enhancement.",
    // link: "https://microsoft.com",
  },
];
