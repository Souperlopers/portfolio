import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";

const Members = ({ members }: { members: MemberBrief[] }) => {
    return (
        <section className="px-5 py-10">
            <div
                className="
                    grid 
                    lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                    gap-8
                "
            >
                {members.map((member) => (
                    <MemberCard key={member.id} memberData={member} />
                ))}
            </div>
        </section>
    );
};

export default Members;
