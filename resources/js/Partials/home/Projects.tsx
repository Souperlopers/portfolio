import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
    console.log(projects);

    const projectsCount = projects.length;
    const topThreeProjects = projects.slice(0, 3);

    return (
        <section id="projects" className="sm:px-10 lg:px-5 px-3 py-14 w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    پروژه‌ها
                </h2>
            </div>
            <div className="rounded-3xl bg-primary/10 md:ring-1 ring-white/10 backdrop-blur-xl sm:p-5 lg:p-5">
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

                {projectsCount > 3 && (
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5
                        bg-white/10 text-white ring-1 ring-white/15
                        hover:bg-white/15 transition"
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
