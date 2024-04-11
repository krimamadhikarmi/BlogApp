import { ProjectDetails } from "./ProjectDetails";

export function ProjectList({projects}){
    return(
     <>
      {projects.map((project) => (
        <ProjectDetails
          title={project.title}
          description={project.description}
        />
      ))}
    </>

    )
}