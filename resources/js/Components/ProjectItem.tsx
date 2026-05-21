import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectBrief } from "@/types/project";
import SkillsTag from "./SkillsTag";

const ProjectItem = ({ projectData }: { projectData: ProjectBrief }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const {title = "بدون نام", technologies = []} = projectData;

    return (
        <article
            className="
        group w-full rounded-2xl overflow-hidden
        bg-white/10 ring-1 ring-white/10 backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:bg-white/15 hover:ring-white/20 hover:-translate-y-[2px]
      "
        >
            <div className="flex flex-col sm:flex-row">
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

                <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <h3 className="text-white font-bold text-lg sm:text-xl truncate">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <SkillsTag skills={technologies} />
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-3">
                        <Link href={projectData.url}>
                            <span
                                className="
                  inline-flex items-center gap-2
                  rounded-full px-5 py-2.5
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  text-white font-semibold
                  shadow-[0_12px_30px_rgba(34,211,238,0.25)]
                  transition-all duration-300
                  group-hover:shadow-[0_16px_40px_rgba(34,211,238,0.35)]
                "
                            >
                                جزئیات
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectItem;
