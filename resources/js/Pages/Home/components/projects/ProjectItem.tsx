import { Link } from "@inertiajs/react";
import { Project } from "@/types";

const ProjectItem = ({ data }: { data: Project }) => {
    const tagsCount = data.tags.length || 0;
    const tags = data.tags || [];
    const projectId = data.id || 0;

    const checkIsLastItem = (index: number) => index === tagsCount - 1;

    return (
        <div className="w-full flex justify-between bg-white p-3 rounded">
            <div>{data?.name || "-"}</div>
            <div className="text-blue-500" dir="ltr">
                {tags.map((tag, index) => {
                    let isLastItem = checkIsLastItem(index);
                    return (
                        <span>
                            #{tag}
                            {!isLastItem && ","}{" "}
                        </span>
                    );
                })}
            </div>
            <Link href={route("project", { projectSlug: data.id })}>
                <div className="cursor-pointer">⬅️</div>
            </Link>
        </div>
    );
};

export default ProjectItem;
