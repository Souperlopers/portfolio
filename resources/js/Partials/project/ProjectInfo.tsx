import { Project } from "@/types/project";
import { DetailButtons } from "@/index";
import TagButtons from "@/Components/TagsComponent";

export default function ProjectInfo ({ info }: { info: Project }){
    const technologies = info.technologies || [];
    return (
        <div className="lg:max-w-[40%] w-full min-h-[400px] pt-5 flex flex-col justify-between gap-7 text-primary-content">
            <div className="text-3xl font-semibold truncate max-w-80 md:max-w-96">
                {info.title}
            </div>
            <div className="md:text-lg text-base text-secondary-content">{info.description}</div>
            <div className="flex flex-wrap gap-5">
                <h2 className="md:text-xl text-lg">تکنولوژی‌ها</h2>
                <TagButtons tags={technologies} />
            </div>
            <div className="flex gap-10">
                <DetailButtons links={info.links || {}} />
            </div>
        </div>
    );
}
