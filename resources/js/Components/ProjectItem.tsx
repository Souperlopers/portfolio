import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectBrief } from "@/types/project";
import SkillsTag from "./SkillsTag";

const ProjectItem = ({ projectData }: { projectData: ProjectBrief }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { title = "بدون نام", technologies = [] } = projectData;

    return (
        <article
            className="
        group w-full rounded-2xl overflow-hidden
        bg-white/10 ring-1 ring-white/10 backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:bg-white/15 hover:ring-white/20 hover:-translate-y-[2px]
        flex flex-col sm:flex-row
        relative
      "
        >
            <div className="relative sm:w-[260px] w-full h-44 sm:h-auto">
                <div
                    className="
            absolute inset-0
            bg-gradient-to-br from-cyan-500/25 via-transparent to-blue-500/20
        "
                />

                {!imgLoaded && (
                    <div className="absolute inset-0 bg-neutral-800/60 animate-pulse" />
                )}

                <img
                    src={projectData.thumbnail}
                    alt={`${title} cover`}
                    className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-105
            "
                    onLoad={() => setImgLoaded(true)}
                    style={{
                        opacity: imgLoaded ? 1 : 0,
                        transition: "opacity 300ms ease",
                    }}
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </div>

            <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3 mb-14">
                <h3 className="text-white font-bold text-lg sm:text-xl truncate">
                    {title}
                </h3>
                <SkillsTag skills={technologies} />
            </div>
            <Link
                href={projectData.url}
                className="
                    absolute left-3 bottom-3
                    rounded-full px-5 py-2.5
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    text-white font-semibold
                    shadow-[0_12px_30px_rgba(34,211,238,0.25)]
                    transition-all duration-300
                    group-hover:shadow-[0_16px_40px_rgba(34,211,238,0.35)]
                "
            >
                <span>جزئیات</span>
            </Link>
        </article>
    );
};

export default ProjectItem;
