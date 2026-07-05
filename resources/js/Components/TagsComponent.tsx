import { Tag } from "@/types/tag";

const TagsComponent = ({ tags }: { tags: Tag[] }) => {
    return (
        <div className="flex flex-wrap md:gap-2 gap-1.5 lg:h-8 max-h-[50px] overflow-hidden">
            {tags.map((tag) => (
                <span
                    key={tag.id}
                    dir="ltr"
                    className="inline-flex items-center px-2 md:py-1 py-0.5 md:text-sm text-xs font-medium
                        text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded"
                >
                    <p className="truncate max-w-20">{tag.title}</p>
                </span>
            ))}
        </div>
    );
};

export default TagsComponent;