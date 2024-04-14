import { ProjectList } from "./ProjectList";

export function Project() {
  const projects =[
    {
        title:"TailwindCSS",
        description:"Rapidly build modern websites without ever leaving your HTML."
    },
    {
        title:"Maizzle",
        description:"Framework for Rapid Email Prototyping"
    },
    {
        title:"Alpine.js",
        description:"Think of it like Tailwind for JavaScript."
    },
    {
        title:"PostCSS",
        description:"A tool for transforming CSS with JavaScript"
    }
  ];

  const limitProjects = projects.length > 3;
  return (
    <>
    <div className="container mx-auto">
      <div className="pb-16 lg:pb-20">
        <div className="flex items-center pb-6">
          <img src="/assets/img/icon-project.png" alt="icon story" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Projects
          </h3>
        {projects.length > 3 ? (
        <a href="/blog" className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
          All Projects
          <img
            src="./assets/img/long-arrow-right.png"
            className="ml-3"
            alt="arrow right"
          />
        </a>
      ) : null}
        </div>
      </div>
      <ProjectList projects={projects} limitProjects={limitProjects} />
    </div>
    </>
  );
}



