import { Project } from "@/types/project";
import { DetailButtons } from "@/index";

const ProjectInfo = ({ info }: { info: Project }) => {
    const technologies = info.technologies || [];

    return (
        <div className="w-[47%] flex flex-col gap-10">
            <div className="text-2xl font-semibold">{info.title}</div>
            <div className="text-xl">{info.description}</div>
            <div className="flex gap-5">
                {technologies.map((tech) => (
                    <p key={tech.id} className="text-cyan-500 font-semibold text-lg">
                        {tech.title}
                    </p>
                ))}
            </div>
            <div className="flex justify-center gap-10">
                <DetailButtons links={info.links || {}} />
            </div>
        </div>
    );
};

export default ProjectInfo;
