import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
    const projectsCount = projects.length;
    const topThreeProjects = projects.slice(0, 3);

    return (
        <div className="lg:px-10 lg:py-5 px-2 py-3 bg-yellow-500 rounded flex flex-col gap-6">
            <div className="flex justify-center gap-10">
                <p className="border-b border-neutral-800">همه پروژه ها</p>
                <p>فروشگاهی</p>
                <p>شخصی</p>
                <p>مدیریتی</p>
            </div>
            {projectsCount === 0 && <EmptyProjects />}
            {topThreeProjects.map((project) => (
                <ProjectItem projectData={project} />
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
