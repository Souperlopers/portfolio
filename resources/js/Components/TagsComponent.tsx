import { Tag } from "@/types/tag";

const TagsComponent = ({ tags, justify="start" }: { tags: Tag[], justify: string }) => {
    const justifyContent = justify==="center" ? "justify-center":"justify-start";
    const containerStyle = "w-full flex flex-wrap md:gap-2 gap-1.5 lg:h-7 max-h-[50px] overflow-hidden " + justifyContent;

    const tagStyle = "inline-flex items-center px-2 md:py-1.5 py-1 md:text-[12px] font-semibold text-xs text-primary bg-[#0078d426] rounded-[4px]";
    const tagTitleStyle = "truncate max-w-20";

    return (
        <div className={containerStyle}>
            {tags.map((tag) => (
                <span key={tag.id} dir="ltr" className={tagStyle}>
                    <p className={tagTitleStyle}>{tag.title}</p>
                </span>
            ))}
        </div>
    );
};

export default TagsComponent;