"use client";
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((projectData, index) => (
          <React.Fragment key={index}>
            <Project {...projectData} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
