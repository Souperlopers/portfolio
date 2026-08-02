import { useState, useEffect } from "react"
import { Member } from "@/types/member"
import TagsComponent from "../../Components/TagsComponent"
import clsx from "clsx/lite"

export default function Profile({ info }: { info: Member }) {
	const {
		name = "",
		description = "",
		position = "",
		thumbnail = "",
		skills = [],
		banner = "",
	} = info

	const [imgError, setImgError] = useState(false)
	const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
	const [bannerLoaded, setBannerLoaded] = useState(false)
	const showFallback = !thumbnail || imgError

	// generate name initial
	const nameParts = name?.trim().split(" ")
	const initial = nameParts[0][0].concat(nameParts[1][0]) ?? "؟"

	console.log(banner)

	return (
		<>
			{/* banner */}
			{banner && (
				<img
					src={banner}
					alt="member-banner"
					onError={() => setBannerLoaded(false)}
					onLoad={() => setBannerLoaded(true)}
					className={clsx(
						"aspect-[4/1] w-full", // dimension
						"bg-base-300", // background
						!bannerLoaded && "skeleton", // display after loaded
					)}
				/>
			)}

			<div className="px-4 pb-6 md:px-6">
				{/* avatar */}
				<div
					className={clsx(
						"relative shrink-0 overflow-hidden", // basic
						"mb-4", // margin
						banner ? "md:-mt-16" : "mt-8", // decrease margin if member doesn't have banner
						"h-24 w-24 md:h-32 md:w-32", // dimension
						"rounded-full ring-4 ring-primary", // border
					)}
				>
					{showFallback ? (
						<div className="flex h-full w-full items-center justify-center bg-base-300">
							<span className="text-3xl font-medium text-primary md:text-4xl">
								{initial}
							</span>
						</div>
					) : (
						<img
							src={thumbnail}
							alt="member-avatar"
							onError={() => setImgError(true)}
							onLoad={() => setThumbnailLoaded(true)}
							className={clsx(
								"absolute", // base
								"h-full w-full", // dimension
								"object-cover", // image behavior
								!thumbnailLoaded && "skeleton", // display after loaded
							)}
						/>
					)}
				</div>

				{/* info */}
				<div className="mt-7 flex flex-col gap-2">
					<span className="truncate text-xl font-semibold text-base-content md:text-3xl">
						{name}
					</span>
					<span className="truncate text-sm text-base-content/80 md:text-base">
						{position}
					</span>
					<p className="mt-1 text-sm leading-relaxed text-base-content/70 md:text-base">
						{description}
					</p>

					{/* skills */}
					{skills.length > 0 && (
						<div className="mt-3">
							<TagsComponent tags={skills} />
						</div>
					)}
				</div>
			</div>
		</>
	)
}
