import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/lib/images/corpcomment.png";
import rmtdevImg from "@/lib/images/rmtdev.png";
import wordanalyticsImg from "@/lib/images/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech",
    location: "Kolkata, India",
    description:
      "I graduated with a Bachelor of Technology in Electrical Engineering, equipped with a strong foundation in theoretical principles and practical skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer",
    location: "Kolkata, India",
    description: `I possess two years of professional experience, demonstrating expertise in ReactJs,Redux  while contributing to the success of Simpsoft Solutions`,
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Simpvault WebApp",
    description: `Crafting a responsive and feature-rich user interface using React.js, Redux, Skillfully integrating this frontend with the backend API, expertly
      managing state.`,
    tags: ["React", "Redux-toolkit", "AG-grid"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Simpvault Mobile App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React Native", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Tag Graph",
    description: `Designed and developed a robust Data Visualization Application, enabling the dynamic visualization of
    data sets fetched from RESTful APIs.I implemented optimization techniques to enhance the overall web app
    performance, ensuring a seamless user experience.`,
    tags: ["React", "D3", "Express", "Nodejs"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
] as const;
