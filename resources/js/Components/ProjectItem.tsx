import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectItemProps } from "@/types/project";
import TagsComponent from "./TagsComponent";
import { HiArrowLongLeft } from "react-icons/hi2";

const ProjectItem = ({ projectData, index }: ProjectItemProps) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { title = "بدون نام", technologies = [], description } = projectData;

    return (
        <div
            className=" card lg:card-side p-2.5 w-full flex md:flex-row flex-col-reverse rounded-xl
            border border-white/10 hover:border-white/20
            bg-white/5 hover:bg-white/[0.1] overflow-hidden transition-all duration-200"
        >
            {/* content */}
            <div className="flex-1 flex flex-col justify-center lg:px-5 pt-5 pb-2 gap-5 min-w-0">
                <div className="flex flex-col gap-5">
                    <h3 className="md:text-3xl text-base font-semibold text-white truncate">
                        {title}
                    </h3>
                    <TagsComponent tags={technologies} justify=""/>
                    <p className="md:text-base text-sm text-white/50 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
                
            {/* button */}
            <div className="flex items-end md:justify-start justify-end shrink-0">
                {/* <Link
                    href={projectData.url}
                    className="inline-flex items-center px-4 py-1.5 text-sm font-medium
                        text-primary border border-primary rounded-lg
                        hover:border-blue-200 hover:text-blue-200 transition-colors duration-150"
                >
                    جزئیات
                </Link> */}
                <Link href={projectData.url} className="text-primary text-sm">
                    <p className="inline-flex items-center gap-1">مشاهده جزئیات 
                        <HiArrowLongLeft  size={15} />
                    </p>
                </Link>
            </div>
            </div>

             {/* image */}
            <div className="relative md:w-[55%] md:h-72 h-44 shrink-0 overflow-hidden">
                {!imgLoaded && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse" />
                )}
                <img
                    src={projectData.thumbnail}
                    alt={`${title} cover`}
                    className="w-full h-full object-cover opacity-80 rounded-xl"
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

