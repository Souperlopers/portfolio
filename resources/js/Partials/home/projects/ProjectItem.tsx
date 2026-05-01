import { Link } from "@inertiajs/react";
import { Project } from "@/types";

const ProjectItem = ({ data }: { data: Project }) => {
    const projectId = data.id || 0;
    const projectName = data?.title || "بدون نام";

    return (
        <div className="w-full flex justify-between bg-white p-3 rounded">
            <div className="truncate max-w-32 sm:max-w-xs lg:max-w-sm xl:max-w-md">
                {projectName}
            </div>
            <Link href={route("project", { slug: projectId })}>
                <div className="cursor-pointer">⬅️</div>
            </Link>
        </div>
    );
};

export default ProjectItem;
