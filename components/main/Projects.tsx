import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        List of Works
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        <ProjectCard
          src="/times.png"
          title="Horizon Times"
          description="Latest Economic News & Geopolitical World, And The Best Community to Learn Trade Forex."
        />
        <ProjectCard
          src="/caps.png"
          title="Caps Academy"
          description="Online Course About Apple Ecosytem Service."
        />
        <ProjectCard
          src="/crypto.png"
          title="Cryptofeed"
          description="Crypto Platform News & Tutorial About Airdrop Crypto."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-[20px]">
        <ProjectCard
          src="/horizonfx.webp"
          title="Horizonfx Landing Page"
          description="A Unique Trader Community Platform at Indonesia."
        />
        <ProjectCard
          src="/tools.webp"
          title="Online Tools Service"
          description="Providing tools for you with online access."
        />
        <ProjectCard
          src="/short.webp"
          title="URL Shortner"
          description="Url Shortner For Your SAAS Business."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-[20px]">
        <ProjectCard
          src="/xai.webp"
          title="XAI"
          description="Ai Service With Much Feature Offered to Users."
        />
        <ProjectCard
          src="/uptime.webp"
          title="Uptime"
          description="Online Monitor Service For Your Apps."
        />
        <ProjectCard
          src="/analytic.webp"
          title="Self-Hosted Analytic"
          description="Alternative for google analytics."
        />
      </div>
  
    </div> 
  );
};

export default Projects;
