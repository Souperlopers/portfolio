import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectItemProps } from "@/types/project";
import TagsComponent from "./TagsComponent";

const ProjectItem = ({ projectData, index }: ProjectItemProps) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { title = "بدون نام", technologies = [], description } = projectData;

    return (
        <div
            className=" card lg:card-side p-3 w-full flex md:flex-row flex-col-reverse rounded-2xl
            border border-white/10 hover:border-primary
            bg-white/5 hover:bg-white/[0.1] overflow-hidden transition-all duration-200"
        >
            {/* content */}
            <div className="flex-1 flex flex-col justify-between px-4 py-3 min-w-0">
                <div className="flex flex-col gap-2">
                    <h3 className="md:text-2xl text-base font-semibold text-white truncate">
                        {title}
                    </h3>
                    <TagsComponent tags={technologies} justify=""/>
                    <p className="md:text-base text-sm text-white/50 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
                
            {/* button */}
            <div className="flex items-end md:justify-start justify-end shrink-0">
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

             {/* image */}
            <div className="relative md:w-[500px] md:h-80 h-44 shrink-0 overflow-hidden">
                {!imgLoaded && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse" />
                )}
                <img
                    src={projectData.thumbnail}
                    alt={`${title} cover`}
                    className="w-full h-full object-cover opacity-80 rounded-2xl"
                    onLoad={() => setImgLoaded(true)}
                    style={{
                        opacity: imgLoaded ? 0.85 : 0,
                        transition: "opacity 300ms ease",
                    }}
                />
            </div>
        </div>
       
    );
};

export default ProjectItem;

