import { useState } from "react";
import { Tag } from "@/types/tag";

export default function ({ tags }: { tags: Tag[] }) {
    const [hasIcon, setHasIcon] = useState(true);
    return (
        <div className={`flex gap-2 flex-wrap`}>
            {tags.map((tag) => (
                <div
                    key={tag.id}
                    dir="ltr"
                    className={`flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 text-sm`}
                >
                    {hasIcon && (
                        <img
                            className="w-5 h-5"
                            src={`/assets/icons/${tag.title}.svg`}
                            alt={tag.title}
                            onError={() => setHasIcon(false)}
                        />
                    )}
                    <span className={`truncate max-w-20`}>{tag.title}</span>
                </div>
            ))}
        </div>
    );
}
