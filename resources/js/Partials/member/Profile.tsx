import { useState } from "react"
import { Member } from "@/types/member"
import TagsComponent from "../../Components/TagsComponent"

const Profile = ({ info }: { info: Member }) => {
    console.log(info)
    const {
        name = "",
        description = "",
        position = "",
        thumbnail = "",
        skills = "",
    } = info

    const [imgError, setImgError] = useState(false)
    const initial = name?.trim()[0] ?? "؟"
    const showFallback = !thumbnail || imgError

    return (
        <div className="min-h-[500px] w-full overflow-hidden rounded-xl border border-primary/10 bg-base-200 shadow-[0_10px_30px_rgba(0,0,0,.25)]">
            {/* banner */}
            <div className="h-40 w-full bg-gradient-to-br from-sky-500/20 via-white/5 to-blue-600/10 md:h-52" />

            {/* avatar + info */}
            <div className="px-4 pb-6 md:px-6">
                <div className="relative -mt-12 mb-4 md:-mt-16">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-primary md:h-32 md:w-32">
                        {showFallback ? (
                            <div className="flex h-full w-full items-center justify-center bg-base-200/80">
                                <span className="text-3xl font-medium text-sky-400 md:text-4xl">
                                    {initial}
                                </span>
                            </div>
                        ) : (
                            <img
                                src={thumbnail}
                                alt={`${name} cover`}
                                className="h-full w-full object-cover"
                                onError={() => setImgError(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="truncate text-xl font-semibold text-white md:text-3xl">
                        {name}
                    </span>
                    <span className="truncate text-sm text-white/40 md:text-base">
                        {position}
                    </span>
                    {description && (
                        <p className="mt-1 text-sm leading-relaxed text-white/60 md:text-base">
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
    )
}

export default Profile
