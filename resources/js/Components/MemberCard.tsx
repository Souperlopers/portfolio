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
        <div className="w-[310px] md:w-[300px] lg:w-[310px] flex flex-col items-center gap-3 md:gap-4 px-4 md:px-6 py-5 md:py-7
            rounded-xl border border-white/10 bg-white/5
            hover:border-sky-500/40 hover:bg-white/[0.07]
            transition-all duration-200">

            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shrink-0">
                {showFallback ? (
                    <div className="w-full h-full rounded-full bg-sky-500/15 border border-sky-500/20
                        flex items-center justify-center">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-sky-400">
                            {initial}
                        </span>
                    </div>
                ) : (
                    <img
                        src={thumbnail}
                        alt={`${name} thumbnail`}
                        onError={() => setImgError(true)}
                        className="object-cover w-full h-full"
                    />
                )}
            </div>

            <div className="flex flex-col items-center gap-1 w-full">
                <h3 className="text-base md:text-lg lg:text-xl font-medium text-white truncate max-w-[220px] md:max-w-[260px]">
                    {name}
                </h3>
                <p className="text-xs md:text-sm text-white/40">{position}</p>
            </div>

            <TagsComponent tags={skills} />

            <Link
                href={url}
                className="w-full text-center py-1.5 md:py-2 text-sm md:text-base font-medium
                    text-sky-400 border border-sky-500/30 rounded-lg
                    hover:bg-sky-500/10 transition-colors duration-150 mt-auto"
            >
                مشاهده پروفایل
            </Link>
        </div>
    );
};

export default MemberCard;