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
                bg-text-primary/10 backdrop-blur-lg border border-text-secondary/40
                rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                transition-all duration-500 ease-out
                flex flex-col items-center justify-between
                p-6 min-h-[320px]
                hover:-translate-y-1
            "
        >
            <div className="relative flex items-center justify-center">
                <div
                    className="
                    absolute inset-0 bg-gradient-to-br from-sky-300 via-sky-500 to-blue-600
                    opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500
                "
                />
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border/90 shadow-inner">
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

            <div className="mt-5 text-center space-y-2 pb-2">
                <h3
                    className="
                        text-white font-semibold text-lg truncate
                        group-hover:text-light-accent transition-colors duration-300 max-w-52 lg:max-w-48
                    "
                >
                    {name}
                </h3>
                <p className="text-text-secondary text-sm">{position}</p>
            </div>

            <div className="flex flex-wrap gap-2 px-4">
                <TagsComponent tags={skills} />
            </div>

            <Link
                href={url}
                className="
                    mt-5 inline-block px-4 py-1.5 w-32
                    text-sm text-light-accent font-semibold border border-light-accent/30 rounded-full
                hover:bg-light-accent/80 hover:text-text-primary
                    transition-all duration-300
                "
            >
                مشاهده پروفایل
            </Link>
        </div>
    );
};

export default MemberCard;
