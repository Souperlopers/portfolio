import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";
import { useState } from "react";

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
    const [showMoreCount, setShowMoreCount] = useState(1);
    const projectsCount = projects.length;

    const isShowMore = projectsCount > 3 && projectsCount > 3 * showMoreCount;
    const visibleProjects = projects.slice(0, 3 * showMoreCount);

    return (
        <section id="projects" className="scroll-mt-20 py-14 w-full max-w-[1350px] mx-auto px-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6">
                پروژه‌ها
            </h2>

            {projectsCount === 0 && <EmptyProjects />}

            <div className="flex flex-col gap-6 lg:px-5">
                {visibleProjects.map((project, index) => (
                    <ProjectItem key={project.id} index={index} projectData={project} />
                ))}
            </div>

            {isShowMore && (
                <div className="mt-5 flex justify-end">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm
                            text-white/50 border border-white/10 rounded-lg
                            hover:text-white/80 hover:border-white/20 transition-colors duration-150"
                        onClick={() => setShowMoreCount((prev) => prev + 1)}
                    >
                        پروژه‌های بیشتر
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;