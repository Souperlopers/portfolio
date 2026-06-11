import { Tag } from "@/types/tag";

const TagsComponent = ({ tags }: { tags: Tag[] }) => {
    return (
        <div className="flex flex-wrap gap-2 min-h-8">
            {tags.map((tag) => (
                <div className="badge badge-soft badge-md" key={tag.id}>
                    <p className="truncate max-w-16 text-center">{tag.title}</p>
                </div>
            ))}
        </div>
    );
};

export default TagsComponent;
