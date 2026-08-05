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

	const firstCharacter = name.trim()[0] ?? "؟"
	const showFallback = !thumbnail || imgError

	return (
		<div
			className={clsx(
				"w-full max-w-[350px]", // dimension
				"rounded-2xl", // container
				"bg-base-200", // background color
				"border border-primary/10", // border
				"px-4 py-5 md:px-4 md:py-7", // padding
				"flex flex-col items-center gap-3 md:gap-4", // flex
				"shadow-[0_10px_30px_rgba(0,0,0,.25)]", // shadow
				"group hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(47,91,255,.14)]", // hover
				"transition-all duration-300", // animation
			)}
		>
			{/* image */}
			<div
				className={clsx(
					"flex shrink-0 items-center justify-center", // flex
					"relative", // position
				)}
			>
				{/* Glow */}
				<div
					className={clsx(
						"absolute inset-0", // position
						"rounded-full", // container
						"bg-primary/15 blur-xl", // background color
						"group-hover:scale-125 group-hover:bg-primary/25", // hover
					)}
				/>

				{/* thumbnail */}
				<div
					className={clsx(
						"h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28", // dimension
						"z-10", // position
					)}
				>
					{showFallback ? (
						<div
							className={clsx(
								"h-full w-full", // dimension
								"rounded-full", // container
								"bg-primary/10", // background color
								"flex items-center justify-center", // flex
							)}
						>
							<span
								className={clsx(
									"font-medium text-primary", // text
									"text-2xl md:text-3xl lg:text-4xl", // text responsive
								)}
							>
								{firstCharacter}
							</span>
						</div>
					) : (
						<img
							src={thumbnail}
							alt={`${name} thumbnail`}
							onError={() => setImgError(true)}
							className={clsx(
								"h-full w-full", // dimension
								"rounded-full", // container
								"object-cover", // image behavior
								"border-2 border-primary/30", // border
								"transition-colors duration-300 group-hover:border-primary/60", // hover
								"will-change-transform", // fix layout shift problem
								thumbnailLoaded ? "block" : "skeleton hidden", // skeleton
							)}
							onLoad={() => setThumbnailLoaded(true)}
						/>
					)}
				</div>
			</div>
			{/* info */}
			<div
				className={clsx(
					"w-full h-12", // dimension
					"flex flex-col items-center gap-1", // flex
				)}
			>
				<h3
					className={clsx(
						"font-semibold text-base-content", // text
						"text-base md:text-lg lg:text-xl", // text responsive
						"max-w-[220px] truncate md:max-w-[260px]", // truncate
					)}
				>
					{name}
				</h3>
				<p
					className={clsx(
						"text-base-content/70", // text
						"text-xs md:text-sm", // text responsive
						"max-w-[220px] truncate md:max-w-[260px]", // truncate
					)}
				>
					{position}
				</p>
			</div>
			{/* tags */}
			<div className="w-full h-10">
				<TagsComponent tags={skills} />
			</div>
			{/* button */}
			<Link
				href={url}
				className={clsx(
					"w-full", // dimension
					"rounded-lg", // container
					"py-1.5 md:py-2", // padding
					"border border-primary", // border
					"text-center font-medium text-primary", // text
					"text-sm md:text-base", // text responsive
					"hover:border-primary/30 hover:bg-primary/10", // hover
				)}
			>
				مشاهده پروفایل
			</Link>
		</div>
	)
}

export default MemberCard
