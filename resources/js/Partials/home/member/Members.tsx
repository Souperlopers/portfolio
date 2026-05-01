import MemberCard from "./MemberCard";
import { User } from "@/types";

const Members = ({ members }: { members: User[] }) => {
    return (
        <div className="lg:px-10 lg:py-5 px-2 py-3 flex flex-col gap-5 rounded bg-orange-400">
            دولوپرها
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
                {members.map((member) => (
                    <div className="">
                        <MemberCard data={member} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
