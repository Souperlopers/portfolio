import ProjectItem from "./ProjectItem";
import EmptyProjects from "./EmptyProjects";
import { Project } from "@/types";

const Projects = ({projects}:{projects:Project[]}) => {
    const projectsCount = projects.length;
    const topThreeProjects: Project[] = projects.slice(0, 3);

    return (
        <div className="px-10 bg-yellow-500 rounded py-5 flex flex-col gap-6">
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
