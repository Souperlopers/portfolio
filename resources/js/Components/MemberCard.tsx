import { Link } from "@inertiajs/react";
import { MemberBrief } from "@/types/member";

const MemberCard = ({ memberData }: { memberData: MemberBrief }) => {
    const userId = memberData.id;
    const name = memberData.name || "بدون نام";
    const position = memberData.position || "بدون سمت";

    return (
        <div className="bg-white p-5 rounded w-full">
            <div className="flex flex-col gap-5 w-full">
                <div className="flex justify-center">
                    <div className="bg-pink-300 w-32 h-32 rounded-full">
                        <img
                            src={memberData.thumbnail}
                            alt={`${name} thumbnail`}
                            className="w-32 h-32 rounded-full"
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
