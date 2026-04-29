import { Link } from "@inertiajs/react";
import { User } from "@/types";

const MemberCard = ({ data }: { data: User }) => {
    const userId = data.id;
    return (
        <div className="bg-white p-5 rounded flex justify-center w-full">
            <div className="flex  gap-5 w-full">
                <div className="bg-pink-300 w-32 h-32 rounded-full"></div>
                <div className="flex flex-col pt-5 gap-3">
                    <span>{data.name || "-"}</span>
                    <span>{data.position || "-"}</span>
                    <Link href={route('member',{userSlug:userId})}>
                    مشاهده پروفایل
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
