import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";

const Members = ({ members }: { members: MemberBrief[] }) => {
    return (
        <section id="members" className="lg:w-[1300px] w-[300px]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary pb-4">
                توسعه‌دهندگان
            </h2>
            <div
                className="flex flex-wrap
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
