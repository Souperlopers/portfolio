import { Link } from "@inertiajs/react";
import { User } from "@/types";

const MemberCard = ({ data }: { data: User }) => {
    const userId = data.id;
    return (
        <div className="bg-white p-5 rounded w-full">
            <div className="flex lg:flex-row flex-col gap-5 w-full">
                <div className="flex lg:justify-start justify-center">
                    <div className="bg-pink-300 w-32 h-32 rounded-full"></div>
                </div>
                <div className="flex lg:justify-start justify-center">
                    <div className="flex flex-col pt-5 gap-3 text-center">
                        <span>{data.name || "-"}</span>
                        <span>{data.position || "-"}</span>
                        <Link href={route("member", { userSlug: userId })}>
                            مشاهده پروفایل
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
