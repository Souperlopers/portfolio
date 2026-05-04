import { Project } from "@/types/project";

const ProjectInfo = ({ info }: { info: Project }) => {
    const technologies = info.technologies;
    console.log(info);

    return (
        <div className="w-[47%] flex flex-col gap-10">
            <div className="text-2xl font-semibold">{info.title}</div>
            <div className="text-xl">{info.description}</div>
            <div className="flex gap-5">
                {technologies.map((tech) => (
                    <p className="text-cyan-500 font-semibold text-lg">{tech.title}</p>
                ))}
            </div>
            <div className="flex justify-center gap-10">
                <div className="border border-neutral-700 rounded px-5">
                    GITHUB
                </div>
                <div className="border border-neutral-700 rounded px-5">
                    FIGMA
                </div>
                <div className="border border-neutral-700 rounded px-5">
                    PREVIEW
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
