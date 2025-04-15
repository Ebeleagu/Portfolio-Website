// import React from "react";
import dio from "/vercel.jpg";

const Projects = () => {
  return (
    <main
      id="Projects"
      className="h-[60vh] flex flex-col justify-center items-center p-10 mt-10"
    >
      <h2 className="text-3xl font-bold mb-2 font-[times-new-roman]">Project</h2>

      <img
        src={dio}
        alt="image of final project"
        className="md:w-[400px] w-[350px] md:h-[360px] h-[300px]"
      />
      <p className="mb-4 font-mono">
        a website that helps people with events preparation
      </p>
      <a
        href="https://my-final-project0.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        View Project
      </a>
    </main>
  );
};

export default Projects;
