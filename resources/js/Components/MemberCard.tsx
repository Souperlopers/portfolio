import { useState } from "react";
import { Link } from "@inertiajs/react";
import { MemberBrief } from "@/types/member";

const MemberCard = ({ memberData }: { memberData: MemberBrief }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const name = memberData.name || "بدون نام";
    const position = memberData.position || "بدون سمت";

    return (
        <div className="bg-white p-5 rounded w-full">
            <div className="flex flex-col gap-5 w-full">
                <div className="flex justify-center">
                    <div className="bg-pink-300 w-32 h-32 rounded-full">
                        {!imgLoaded && (
                            <div className="lg:w-32 lg:h-32 md:w-full md:h-42 sm:w-24 sm:h-32 w-20 h-28 bg-neutral-500" />
                        )}
                        <img
                            src={memberData.thumbnail}
                            alt={`${name} thumbnail`}
                            className="w-32 h-32 rounded-full"
                            onLoad={() => setImgLoaded(true)}
                            style={{ display: imgLoaded ? "block" : "none" }}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col pt-5 gap-3 text-center">
                        <span className="truncate lg:max-w-32 max-w-10">
                            {name}
                        </span>
                        <span className="truncate lg:max-w-32 max-w-10">
                            {position}
                        </span>
                        <Link
                            href={memberData.url}
                            className="text-cyan-500 font-semibold"
                        >
                            مشاهده پروفایل
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
