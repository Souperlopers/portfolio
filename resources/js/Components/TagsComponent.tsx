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
                    className={`flex items-center justify-center gap-1.5 bg-white/5 rounded-xl px-3 py-1.5 text-sm`}
                >
                    {hasIcon && (
                        <img
                            className="w-4 h-4"
                            src={`/assets/icons/${tag.title}.svg`}
                            alt={tag.title}
                            onError={() => setHasIcon(false)}
                        />
                    )}
                    <span className={`truncate max-w-20 sm:text-sm text-xs pt-0.5`}>{tag.title}</span>
                </div>
            ))}
        </div>
    );
}
