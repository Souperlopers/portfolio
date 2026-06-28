import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectItemProps } from "@/types/project";
import TagsComponent from "./TagsComponent";

const ProjectItem = ({ projectData, index }: ProjectItemProps) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { title = "بدون نام", technologies = [], description } = projectData;

    return (
        <div
            className="w-full flex md:flex-row flex-col md:h-36 rounded-xl
            border border-white/10 hover:border-sky-500/40
            bg-white/5 hover:bg-white/[0.1] overflow-hidden transition-all duration-200"
        >
            {/* image */}
            <div className="relative md:w-56 md:h-full h-44 shrink-0 overflow-hidden">
                {!imgLoaded && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse" />
                )}
                <img
                    src={projectData.thumbnail}
                    alt={`${title} cover`}
                    className="w-full h-full object-cover opacity-80"
                    onLoad={() => setImgLoaded(true)}
                    style={{
                        opacity: imgLoaded ? 0.85 : 0,
                        transition: "opacity 300ms ease",
                    }}
                />
            </div>

            {/* content */}
            <div className="flex-1 flex flex-col justify-between px-4 py-3 min-w-0">
                <div className="flex flex-col gap-2">
                    <h3 className="md:text-xl text-base font-medium text-white truncate">
                        {title}
                    </h3>
                    <TagsComponent tags={technologies} />
                    <p className="md:text-base text-sm text-white/50 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* button */}
            <div className="flex items-end md:justify-center justify-end p-3 shrink-0">
                <Link
                    href={projectData.url}
                    className="inline-flex items-center px-4 py-1.5 text-sm font-medium
                        text-sky-400 border border-sky-500/30 rounded-lg
                        hover:bg-sky-500/10 transition-colors duration-150"
                >
                    جزئیات
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
