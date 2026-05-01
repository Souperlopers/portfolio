import { Link } from "@inertiajs/react";
import { User } from "@/types";

const MemberCard = ({ data }: { data: User }) => {
    const userId = data.id;
    const name = data.name || "بدون نام";
    const position = data.position || "بدون سمت";

    return (
        <div className="bg-white p-5 rounded w-full">
            <div className="flex lg:flex-row flex-col gap-5 w-full">
                <div className="flex lg:justify-start justify-center">
                    <div className="bg-pink-300 w-32 h-32 rounded-full"></div>
                </div>
                <div className="flex lg:justify-start justify-center">
                    <div className="flex flex-col pt-5 gap-3 lg:text-right text-center">
                        <span className="truncate lg:max-w-32 max-w-10">
                            {name}
                        </span>
                        <span className="truncate lg:max-w-32 max-w-10">
                            {position}
                        </span>
                        <Link
                            href={route("member", { slug: userId })}
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
