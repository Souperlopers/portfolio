import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";

const Members = ({ members }: { members: MemberBrief[] }) => {
    return (
        <section id="members" className="w-full max-w-[1350px] mx-auto px-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-5 md:mb-7">
                توسعه‌دهندگان
            </h2>
            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
                {members.map((member) => (
                    <MemberCard key={member.id} memberData={member} />
                ))}
            </div>
        </section>
    );
};

export default Members;