import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";

const Members = ({ members }: { members: MemberBrief[] }) => {
    return (
        <section id="members" className="lg:px-12 px-5 w-full">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white pb-4">
                توسعه‌دهندگان
            </h2>
            <div
                className="
                    grid 
                    lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                    lg:gap-5 gap-3
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
