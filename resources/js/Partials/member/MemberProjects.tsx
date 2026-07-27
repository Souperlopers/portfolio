import ProjectItem from "@/Components/ProjectItem"
import EmptyProjects from "@/Components/EmptyProjects"
import { ProjectBrief } from "@/types/project"
import clsx from "clsx"

const MemberProjects = ({ projects }: { projects: ProjectBrief[] }) => {
    const projectsCount = projects.length

    return (
        <div className="flex flex-col gap-10 rounded py-3">
            <h2
                className={clsx(
                    "border-r-4 border-primary", // border
                    "text-xl font-medium md:text-2xl lg:text-3xl", // text division
                    "text-white", // text color
                    "pr-5 md:pr-10", // padding
                )}
            >
                پروژه‌ها
            </h2>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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
    )
}

export default MemberProjects
