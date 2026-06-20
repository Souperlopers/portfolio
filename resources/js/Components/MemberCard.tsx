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
        <div className="flex justify-center md:w-[310px] sm:w-full">
            <div
                className="lg:w-[310px] w-[300px] px-2 py-4 min-h-[320px]
                group relative overflow-hidden
                bg-black backdrop-blur-lg border border-stone-500
                rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                transition-all duration-500 ease-out
                flex flex-col gap-5  hover:-translate-y-1
            "
            >
                <div className="flex flex-col w-full ">
                    <div className="relative flex justify-center items-center w-full">
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
                                style={{
                                    display: imgLoaded ? "block" : "none",
                                }}
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                    </div>

                    <div className="mt-5 w-full space-y-1 pb-2">
                        <div className="flex justify-center w-full">
                            <h3
                                className="
                        text-white font-semibold text-xl truncate
                        group-hover:text-light-accent transition-colors duration-300 ax-w-64
                    "
                            >
                                {name}
                            </h3>
                        </div>
                        <p className="text-stone-400 text-sm text-center">
                            {position}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 w-full">
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
        </div>
    );
};

export default MemberCard;
