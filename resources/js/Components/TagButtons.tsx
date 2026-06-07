import { Tag } from "@/types/tag";

const TagButtons = ({ tags }: { tags: Tag[] }) => {
    return (
        <div className="flex flex-wrap gap-2 min-h-8">
            {tags.map((tag) => (
                <div
                    key={tag.id}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-white/90 ring-1 ring-white/10"
                >
                    <p className="truncate max-w-16 text-center">{tag.title}</p>
                </div>
            ))}
        </div>
    );
};

export default TagButtons;
