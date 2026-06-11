import { useState } from "react";
import { Link } from "@inertiajs/react";
import { MemberBrief } from "@/types/member";
import TagsComponent from "./TagsComponent";

const MemberCard = ({ memberData }: { memberData: MemberBrief }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const {
        name = "بدون نام",
        position = "بدون سمت",
        thumbnail,
        url,
        skills = [],
    } = memberData;

    return (
        <div
            className="
                group relative overflow-hidden
                bg-black backdrop-blur-lg border border-text-secondary/10
                rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                transition-all duration-500 ease-out
                flex flex-col items-center justify-between gap-5
                px-2 py-4 min-h-[320px]
                hover:-translate-y-1
            "
        >
            <div className="flex flex-col w-full ">
                <div className="relative flex items-center w-full bg-slate-400 rounded">
                    <div
                        className="
                    absolute inset-0 bg-gradient-to-br from-sky-300 via-sky-500 to-blue-600
                    opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500
                "
                    />
                    <div className="relative w-28 h-28 top-10 rounded-full overflow-hidden border-2 border-border/90 shadow-inner">
                        {!imgLoaded && (
                            <div className="absolute inset-0 bg-secondary animate-pulse rounded-full" />
                        )}
                        <img
                            src={thumbnail}
                            alt={`${name} thumbnail`}
                            onLoad={() => setImgLoaded(true)}
                            style={{ display: imgLoaded ? "block" : "none" }}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </div>
                </div>

                <div className="mt-5 w-full text-right space-y-1 pb-2 pt-10">
                    <h3
                        className="
                        text-white font-semibold text-xl truncate
                        group-hover:text-light-accent transition-colors duration-300 max-w-52 lg:max-w-64
                    "
                    >
                        {name}
                    </h3>
                    <p className="text-stone-400 text-sm">{position}</p>
                </div>

                <div className="flex flex-wrap gap-2 w-full">
                    <TagsComponent tags={skills} />
                </div>
            </div>

            <Link
                href={url}
                className="btn btn-block font-medium 
            bg-light-accent hover:bg-light-accent-hover"
            >
                مشاهده پروفایل
            </Link>
        </div>
    );
};

export default MemberCard;
