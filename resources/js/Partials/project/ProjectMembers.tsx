import { ProjectContributorsProps } from "@/types";
import MemberCard from "@/Components/MemberCard";

const ProjectMembers = ({
    contributors,
}: {
    contributors: ProjectContributorsProps[];
}) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
            {contributors.map((contributor) => (
                <MemberCard memberData={contributor}/>
            ))}
        </div>
    );
};

export default ProjectMembers;
