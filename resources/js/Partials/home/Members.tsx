import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";

const Members = ({ members }: { members: MemberBrief[] }) => {
    return (
        <section id="members" className="px-20 py-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white pb-4">
                توسعه‌دهندگان
            </h2>
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
