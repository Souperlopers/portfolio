import { Link } from "@inertiajs/react";
import { Project } from "@/types";

const ProjectItem = ({ data }: { data: Project }) => {
    const projectId = data.id || 0;

    return (
        <div className="w-full flex justify-between bg-white p-3 rounded">
            <div>{data?.name || "-"}</div>
            <Link href={route("project", { projectSlug: projectId })}>
                <div className="cursor-pointer">⬅️</div>
            </Link>
        </div>
    );
};

export default ProjectItem;
