import MemberCard from "@/Components/MemberCard";
import { MemberBrief } from "@/types/member";

const ProjectMembers = ({
    contributors,
}: {
    contributors: MemberBrief[];
}) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
            {contributors.map((contributor) => (
                <MemberCard key={contributor.id} memberData={contributor}/>
            ))}
        </div>
    );
};

export default ProjectMembers;
