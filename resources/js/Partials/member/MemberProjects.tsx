import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";

const MemberProjects = ({ projects }: { projects: ProjectBrief[] }) => {
    const projectsCount = projects.length;

    return (
        <div className="py-3 rounded flex flex-col gap-6">
            {projectsCount === 0 && <EmptyProjects />}
            {projects.map((project) => (
                <ProjectItem key={project.id} projectData={project} />
            ))}
        </div>
    );
};

export default MemberProjects;
