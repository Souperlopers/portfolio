import { Project } from "@/types/project";
import { DetailButtons } from "@/index";
import TagButtons from "@/Components/TagsComponent";

const ProjectInfo = ({ info }: { info: Project }) => {
    const technologies = info.technologies || [];

    return (
        <div className="md:w-[47%] w-full flex flex-col justify-between gap-10 text-neutral-50">
            <div className="text-2xl font-semibold truncate max-w-80 md:max-w-96">
                {info.title}
            </div>
            <div className="md:text-xl text-base">{info.description}</div>
            <div className="flex flex-wrap gap-5">
                <TagButtons tags={technologies} />
            </div>
            <div className="flex gap-10">
                <DetailButtons links={info.links || {}} />
            </div>
        </div>
    );
};

export default ProjectInfo;
