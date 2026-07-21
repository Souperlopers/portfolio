import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectItemProps } from "@/types/project";
import TagsComponent from "./TagsComponent";
import { HiArrowLongLeft } from "react-icons/hi2";

const ProjectItem = ({ projectData, index }: ProjectItemProps) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { title = "بدون نام", technologies = [], description="" } = projectData;

    return (
        <div
            className="mx-auto md:mx-0 card lg:card-side w-[310px] md:w-full p-2.5 flex md:flex-row flex-col-reverse rounded-xl
            border border-white/10 hover:border-white/25
            bg-white/5 overflow-hidden transition-all duration-200"
        >
            {/* content */}
            <div className="flex-1 flex flex-col justify-center lg:px-5 pt-5 pb-2 gap-5 min-w-0">
                <div className="flex flex-col gap-5">
                    <h3 className="md:text-3xl text-base font-semibold text-white truncate">
                        {title}
                    </h3>
                    <TagsComponent tags={technologies}/>
                    <p className="md:text-base text-sm text-white/50 md:line-clamp-1 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
                
            {/* button */}
            <div className="flex items-end md:justify-start justify-end shrink-0">
                <Link href={projectData.url} className="text-[#0d1014] text-sm bg-btn-secundary  rounded-lg py-1 md:py-1.5 md:px-5 px-[15px]">
                    <p className="inline-flex items-center gap-1">جزئیات 
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

