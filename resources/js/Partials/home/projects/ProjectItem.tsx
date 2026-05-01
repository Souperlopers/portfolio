import { Link } from "@inertiajs/react";
import { Project } from "@/types";

const ProjectItem = ({ data }: { data: Project }) => {
    const projectId = data.id || 0;
    const projectName = data?.title || "بدون نام";

    return (
        <div className="w-full flex gap-5 bg-white p-1 rounded">
            <div className="bg-orange-300 w-1/5 h-48 rounded"></div>
            <div className="flex flex-col gap-5 w-4/5 py-3">
                <div className="truncate max-w-32 sm:max-w-xs lg:max-w-sm xl:max-w-md">
                    {projectName}
                </div>
                <div>descriptions</div>
                <div>tags</div>
            </div>
            <Link
                className="flex justify-end items-end w-1/12"
                href={route("project", { slug: projectId })}
            >
                <button className="cursor-pointer bg-green-400 px-5 py-3 rounded">
                    Details
                </button>
            </Link>
        </div>
    );
};

export default ProjectItem;
