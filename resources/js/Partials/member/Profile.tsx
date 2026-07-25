import { useState } from "react";
import { Member } from "@/types/member";
import TagsComponent from "../../Components/TagsComponent";

const Profile = ({ info }: { info: Member }) => {
    console.log(info);
    const {name="", description="", position="", thumbnail="", skills=""} = info;

    const [imgError, setImgError] = useState(false);
    const initial = name?.trim()[0] ?? "؟";
    const showFallback = !thumbnail || imgError;

    return (
        <div className="w-full min-h-[500px] rounded-xl bg-base-200 border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,.25)] overflow-hidden ">
            {/* banner */}
            <div className="w-full h-40 md:h-52 bg-gradient-to-br from-sky-500/20 via-white/5 to-blue-600/10" />

            {/* avatar + info */}
            <div className="px-4 md:px-6 pb-6">
                <div className="relative -mt-12 md:-mt-16 mb-4">
                    <div
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden
                        ring-4 ring-primary shrink-0"
                    >
                        {showFallback ? (
                            <div
                                className="w-full h-full bg-sky-500/15
                                flex items-center justify-center"
                            >
                                <span className="text-3xl md:text-4xl font-medium text-sky-400">
                                    {initial}
                                </span>
                            </div>
                        ) : (
                            <img
                                src={thumbnail}
                                alt={`${name} cover`}
                                className="w-full h-full object-cover"
                                onError={() => setImgError(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-white text-xl md:text-3xl font-semibold truncate">
                        {name}
                    </span>
                    <span className="text-white/40 text-sm md:text-base truncate">
                        {position}
                    </span>
                    {description && (
                        <p className="text-white/60 text-sm md:text-base leading-relaxed mt-1">
                            {description}
                        </p>
                    )}

                    {/* skills */}
                    {skills && skills?.length > 0 && (
                        <div className="mt-3">
                            <TagsComponent tags={skills} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
