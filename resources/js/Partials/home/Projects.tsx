import ProjectItem from "@/Components/ProjectItem";
import EmptyProjects from "@/Components/EmptyProjects";
import { ProjectBrief } from "@/types/project";

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
    const projectsCount = projects.length;
    const topThreeProjects = projects.slice(0, 3);

    return (
        <section id="projects" className="px-4 sm:px-10 py-14 w-full max-w-[1280px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    پروژه‌ها
                </h2>

                {/* <div className="flex gap-2 overflow-auto p-3">
                    {["همه پروژه‌ها", "فروشگاهی", "شخصی", "مدیریتی"].map(
                        (t, idx) => (
                            <button
                                key={t}
                                className={
                                    "shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition " +
                                    (idx === 0
                                        ? "bg-white/10 text-white ring-1 ring-white/20"
                                        : "bg-white/0 text-neutral-300 hover:bg-white/5 hover:text-white")
                                }
                                type="button"
                            >
                                {t}
                            </button>
                        ),
                    )}
                </div> */}
            </div>
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl sm:p-6 p-0">
                {projectsCount === 0 && <EmptyProjects />}

                <div className="flex flex-col gap-5">
                    {topThreeProjects.map((project) => (
                        <ProjectItem key={project.id} projectData={project} />
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
                            <span className="transition group-hover:translate-x-[-2px]">
                                ⬅️
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
