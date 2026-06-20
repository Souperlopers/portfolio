import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";
import { useState } from "react";

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
    const [showMoreCount, setShowMoreCount] = useState(1);
    const projectsCount = projects.length;

    const isShowMore =
        projectsCount > 3 && projectsCount > 3 * showMoreCount ? true : false;

    const topThreeProjects = projects.slice(0, 3 * showMoreCount);

    return (
        <section id="projects" className="py-14 w-[1300px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    پروژه‌ها
                </h2>
            </div>
            <div className="backdrop-blur-xl">
                {projectsCount === 0 && <EmptyProjects />}

                <div className="flex flex-col gap-5">
                    {topThreeProjects.map((project, index) => (
                        <ProjectItem
                            key={project.id}
                            index={index}
                            projectData={project}
                        />
                    ))}
                </div>

                {isShowMore && (
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5
                        bg-white/10 text-white ring-1 ring-white/15
                        hover:bg-white/15 transition"
                            onClick={() => {
                                setShowMoreCount((prev) => prev + 1);
                            }}
                        >
                            <span>پروژه‌های بیشتر</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
