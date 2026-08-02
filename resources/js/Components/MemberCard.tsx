import { useState } from "react"
import { Link } from "@inertiajs/react"
import { MemberBrief } from "@/types/member"
import TagsComponent from "@/Components/TagsComponent"
import clsx from "clsx"

const MemberCard = ({ memberData }: { memberData: MemberBrief }) => {
    const [imgError, setImgError] = useState(false)
    const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
    const {
        name = "بدون نام",
        position = "بدون سمت",
        thumbnail,
        url,
        skills = [],
    } = memberData

    const initial = name.trim()[0] ?? "؟"
    const showFallback = !thumbnail || imgError

    return (
        <div className="group flex w-full max-w-[350px] flex-col items-center gap-3 overflow-hidden rounded-2xl border border-primary/10 bg-base-200 px-4 py-5 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(47,91,255,.14)] md:gap-4 md:px-6 md:py-7">
            <div className="relative flex shrink-0 items-center justify-center">
                {/* Glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-primary/15 blur-xl group-hover:scale-125 group-hover:bg-primary/25" />

                {/* thumbnail */}
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary/60 md:h-24 md:w-24 lg:h-28 lg:w-28">
                    {!thumbnailLoaded && (
                        <div className="skeleton absolute h-full w-full" />
                    )}
                    {showFallback ? (
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10">
                            <span className="text-2xl font-medium text-primary md:text-3xl lg:text-4xl">
                                {initial}
                            </span>
                        </div>
                    ) : (
                        <img
                            src={thumbnail}
                            alt={`${name} thumbnail`}
                            onError={() => setImgError(true)}
                            className={clsx(
                                "h-full w-full", // dimension
                                "object-cover", // image behavior
                                thumbnailLoaded ? "block" : "hidden",
                            )}
                            onLoad={() => setThumbnailLoaded(true)}
                        />
                    )}
                </div>
            </div>

            <div className="flex w-full flex-col items-center gap-1">
                <h3 className="max-w-[220px] truncate text-base font-semibold text-base-content md:max-w-[260px] md:text-lg lg:text-xl">
                    {name}
                </h3>
                <p className="text-xs text-base-content/70 md:text-sm">
                    {position}
                </p>
            </div>

            <TagsComponent tags={skills} />

            <Link
                href={url}
                className="mt-auto w-full rounded-lg border border-primary py-1.5 text-center text-sm font-medium text-primary hover:border-primary/30 hover:bg-primary/10 md:py-2 md:text-base"
            >
                مشاهده پروفایل
            </Link>
        </div>
    )
}

export default MemberCard
