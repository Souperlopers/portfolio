import ProjectItem from "./ProjectItem";
import EmptyProjects from "./EmptyProjects";
import { ProjectsData } from "./ProjectsData";
import { Project } from "@/types";

const Projects = () => {
    const projectsCount = ProjectsData.length;
    const topThreeProjects: Project[] = ProjectsData.slice(0, 3);

    return (
        <div className="px-10 py-5 flex flex-col gap-6">
            <h1> پروژه ها</h1>
            {projectsCount === 0 && <EmptyProjects />}
            {topThreeProjects.map((project) => (
                <ProjectItem data={project} />
            ))}
            {projectsCount > 3 && (
                <div className="flex justify-end">
                    پروژه های بیشتر
                    <span>⬅️</span>
                </div>
            )}
        </div>
    );
};

export default Projects;
