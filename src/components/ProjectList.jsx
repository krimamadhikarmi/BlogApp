import { ProjectDetails } from "./ProjectDetails";

export function ProjectList({projects,limitProjects}){
    const displayedProjects = limitProjects ? projects.slice(0, 2) : projects;
    return(
     <>
      {displayedProjects.map((project,index) => (
        <ProjectDetails
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </>

    )
}