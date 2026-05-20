import React from "react";
import Component from "@/components/ui/portfolio-hero";
import { ProjectsTimeline } from "@/components/projects-timeline";
import { ExperiencePage } from "@/components/experience-section";



export default function Demo() {

  return (

    <div className="w-full">

      <Component />

      <div id="projects" className="relative">

        <ProjectsTimeline />

      </div>

      <div id="badges" className="relative">

        <ExperiencePage />

      </div>

    </div>

  );

}

