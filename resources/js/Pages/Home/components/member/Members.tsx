import MemberCard from "./MemberCard";
import { User } from "@/types";

const Members = ({ members }: { members: User[] }) => {
    return (
        <div className="px-10 py-5 flex flex-col gap-5 rounded bg-orange-400">
            دولوپرها
            <div className="flex gap-5">
                {members.map((member) => (
                    <div className="w-1/2">
                        <MemberCard data={member} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
