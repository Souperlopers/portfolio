import { Tag } from "@/types/tag";

const SkillsTag = ({
    skills,
    isDisplayVersion,
}: {
    skills: Tag[];
    isDisplayVersion: boolean;
}) => {
    return (
        <div className="flex gap-2">
            {skills.map((skill) => (
                <div key={skill?.id} className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-white/80 ring-1 ring-white/10">
                   <p className="truncate max-w-16 text-center">{skill.title}</p>  
                </div>
            ))}
        </div>
    );
};

export default SkillsTag;
