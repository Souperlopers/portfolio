import { Link } from "@inertiajs/react";
import { ProjectBrief } from "@/types/project";

const ProjectItem = ({ projectData }: { projectData: ProjectBrief }) => {
    const projectId = projectData.id;
    const projectName = projectData.title || "بدون نام";

    return (
        <div className="w-full flex gap-5 bg-white p-1 rounded">
            <div className="bg-orange-300 w-1/5 h-48 rounded">
                <img src={projectData.thumbnail} alt={`${projectName} cover`} />
                {/* TODO_Z HELLO */}
            </div>
            <div className="flex flex-col gap-5 w-4/5 py-3">
                <div className="truncate max-w-32 sm:max-w-xs lg:max-w-sm xl:max-w-md">
                    {projectName}
                </div>
                <div>descriptions</div>
                <div>tags</div>
            </div>
            <div className="flex justify-end items-end w-1/12">
                <Link href={projectData.url}>
                    <button className="cursor-pointer bg-green-400 px-5 py-3 rounded">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
