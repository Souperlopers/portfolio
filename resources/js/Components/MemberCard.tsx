import { useState } from "react";
import { Link } from "@inertiajs/react";
import { MemberBrief } from "@/types/member";
import TagsComponent from "./TagsComponent";

const MemberCard = ({ memberData }: { memberData: MemberBrief }) => {
    const [imgError, setImgError] = useState(false);
    const {
        name = "بدون نام",
        position = "بدون سمت",
        thumbnail,
        url,
        skills = [],
    } = memberData;

    const initial = name.trim()[0] ?? "؟";
    const showFallback = !thumbnail || imgError;

    return (
        <div
           className="group w-full max-w-[350px] flex flex-col items-center gap-3 md:gap-4 bg-base-200 border border-primary/10 px-4 md:px-6 py-5 md:py-7 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.25)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(47,91,255,.14)]"
        >
           <div className="relative flex items-center justify-center shrink-0">
    {/* Glow */}
    <div className="absolute inset-0 scale-110 rounded-full bg-primary/15 blur-xl transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/25" />

    {/* Avatar */}
    <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-primary/30 transition-colors duration-300 group-hover:border-primary/60">
        {showFallback ? (
            <div className="flex w-full h-full items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
                    {initial}
                </span>
            </div>
        ) : (
            <img
                src={thumbnail}
                alt={`${name} thumbnail`}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
            />
        )}
    </div>
</div>

            <div className="flex flex-col items-center gap-1 w-full">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white truncate max-w-[220px] md:max-w-[260px]">
                    {name}
                </h3>
                <p className="text-xs md:text-sm text-base-content/70">{position}</p>
            </div>

            <TagsComponent tags={skills} />

            <Link
                href={url}
                className="text-primary hover:bg-primary/10 text-center border border-primary hover:border-primary/30 w-full py-1.5 md:py-2 text-sm md:text-base font-medium
                  rounded-lg 
                     transition-all duration-150 mt-auto"
            >
                مشاهده پروفایل
            </Link>
        </div>
    );
};

export default MemberCard;
