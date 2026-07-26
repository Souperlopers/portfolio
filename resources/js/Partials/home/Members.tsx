import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";
import styles from "./style/MembersStyle.module.css";

const Members = ({ members }: { members: MemberBrief[] }) => {
    return (
        <section id="members" className="scroll-mt-24 w-full max-w-[1350px] mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-5 md:mb-7 pr-10 border-r-4 border-primary">
                توسعه‌دهندگان
            </h2>
            <div className={styles.container}>
                {members.map((member) => (
                    <MemberCard key={member.id} memberData={member} />
                ))}
            </div>
        </section>
    );
};

export default Members;