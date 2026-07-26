import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ProjectItemProps } from "@/types/project";
import TagsComponent from "./TagsComponent";

export default function ProjectItem({ projectData, index }: ProjectItemProps) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const {
        title = "بدون نام",
        technologies = [],
        description = "",
    } = projectData;
    return (
        <div
            className="flex flex-col sm:gap-5 gap-3 card p-2.5 rounded-xl bg-base-200 border border-primary/10 hover:-translate-y-1 hover:border-primary/25
            hover:shadow-[0_16px_40px_rgba(47,91,255,.15)] shadow-[0_10px_30px_rgba(0,0,0,25)] overflow-hidden duration-300 bg-gradient-to-b from-base-300 to-[#0B1120]"
        >
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between justify-center sm:gap-5 gap-3">
                {/* info */}
                <div className="w-full sm:max-w-[45%] flex flex-col sm:gap-5 gap-3">
                    <h3 className="md:text-3xl text-xl font-semibold text-base-content truncate">
                        {title}
                    </h3>
                    <p className="md:text-base text-sm text-base-content/70 md:line-clamp-2 line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                    <TagsComponent tags={technologies} />
                </div>
                {/* image */}
                <div className="w-full sm:max-w-[50%] relative md:min-h-[200px] h-44 shrink-0 overflow-hidden">
                    {!imgLoaded && (
                        <div className="absolute inset-0 bg-white/5 animate-pulse" />
                    )}
                    <img
                        src={projectData.thumbnail}
                        alt={`${title} cover`}
                        className="w-full h-full object-cover opacity-80 rounded-xl"
                        onLoad={() => setImgLoaded(true)}
                        style={{
                            opacity: imgLoaded ? 1 : 0,
                            transition: "opacity 300ms ease",
                        }}
                    />
                </div>
            </div>
            <Link
                href={projectData.url}
                className="text-primary hover:bg-primary/10 text-center border border-primary hover:border-primary/30 font-medium rounded-lg py-1 md:py-2 md:px-5 px-[15px] duration-300"
            >
                <button className="inline-flex items-center gap-1 sm:text-sm text-xs md:text-base truncate">
                    مشاهده جزئیات
                </button>
            </Link>
        </div>
    );
}
