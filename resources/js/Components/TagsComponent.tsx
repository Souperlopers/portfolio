import { Tag } from "@/types/tag";

const TagsComponent = ({ tags }: { tags: Tag[] }) => {
    return (
        <div className="flex flex-wrap gap-2 h-8 overflow-hidden">
            {tags.map((tag) => (
                <div className="badge badge-soft badge-md" key={tag.id} dir="ltr">
                    <p className="truncate max-w-20 text-center">{tag.title}</p>
                </div>
            ))}
        </div>
    );
};

export default TagsComponent;
