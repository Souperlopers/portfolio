import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";

const MemberProjects = ({ projects }: { projects: ProjectBrief[] }) => {
    const projectsCount = projects.length;

    return (
        <div className="py-3 rounded flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                پروژه‌ها
            </h2>
            <div className="flex flex-col gap-5">
                {projectsCount === 0 && <EmptyProjects />}
                {projects.map((project, index) => (
                    <ProjectItem
                        key={project.id}
                        index={index}
                        projectData={project}
                    />
                ))}
            </div>
        </div>
    );
};

export default MemberProjects;
