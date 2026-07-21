import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";
import { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
    const [showMoreCount, setShowMoreCount] = useState(1);
    const projectsCount = projects.length;

    const isShowMore = projectsCount > 3 && projectsCount > 3 * showMoreCount;
    const visibleProjects = projects.slice(0, 3 * showMoreCount);

    return (
        <section id="projects" className="scroll-mt-20 w-full max-w-[1350px] mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6 pr-1">
                نمونه کار
            </h2>

            {projectsCount === 0 && <EmptyProjects />}

            <div className="flex flex-col gap-6 lg:px-1">
                {visibleProjects.map((project, index) => (
                    <ProjectItem key={project.id} index={index} projectData={project} />
                ))}
            </div>

            {isShowMore && (
                <div className="mt-5 flex md:justify-end justify-center ml-1">
                    <button className="inline-flex items-center gap-1 text-[15px] text-primary hover:text-btn-primary duration-300" type="button" onClick={() => setShowMoreCount((prev) => prev + 1)}>
                         پروژه‌های بیشتر
                        <HiArrowLongLeft  size={15} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;