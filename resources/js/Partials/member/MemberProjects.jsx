import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";

const MemberProjects = ({ projects }) => {
    const projectsCount = projects.length;

    return (
        <div className="lg:px-10 lg:py-5 px-2 py-3 bg-yellow-500 rounded flex flex-col gap-6">
            {projectsCount === 0 && <EmptyProjects />}
            {projects.map((project) => (
                <ProjectItem projectData={project} />
            ))}
        </div>
    );
};


export default MemberProjects;
