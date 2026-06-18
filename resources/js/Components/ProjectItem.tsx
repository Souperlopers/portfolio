import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectItemProps } from "@/types/project";
import TagsComponent from "./TagsComponent";

const ProjectItem = ({ projectData, index }: ProjectItemProps) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { title = "بدون نام", technologies = [], description } = projectData;

    return (
        <div className="flex justify-center md:w-full">
            <div className="md:w-full md:h-40 h-[350px] w-[300px] flex md:flex-row md:gap-3 gap-2 flex-col rounded-lg border border-white/20 hover:border-blue-500 overflow-hidden bg-black/30">
                <div className="relative md:w-64 h-40 w-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-transparent to-blue-500/20" />
                    {!imgLoaded && (
                        <div className="absolute inset-0 bg-neutral-800/60 animate-pulse" />
                    )}
                    <img
                        src={projectData.thumbnail}
                        alt={`${title} cover`}
                        className="w-full h-full object-cover "
                        onLoad={() => setImgLoaded(true)}
                        style={{
                            opacity: imgLoaded ? 1 : 0,
                            transition: "opacity 300ms ease",
                        }}
                    />
                </div>
                <div className="flex-1 flex flex-col md:gap-2 gap-1 md:py-2 md:px-0 px-2 py-0">
                    <h3 className="h-8 overflow-hidden text-text-primary font-bold text-lg sm:text-xl truncate md:max-w-[700px] max-w-64">
                        {title}
                    </h3>
                    <TagsComponent tags={technologies} />
                    <p className="md:text-lg text-sm lg:h-8 h-14 overflow-hidden">{description}</p>
                </div>
                <div className="flex md:justify-center justify-end items-end md:p-3 px-2 pb-2">
                    <Link href={projectData.url} className="bg-sky-600 md:hover:bg-sky-700 active:bg-sky-600 btn btn-soft font-medium">
                        <span>جزئیات</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
