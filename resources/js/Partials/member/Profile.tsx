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
		skills = "",
		banner = "",
	} = info

	const [imgError, setImgError] = useState(false)
	const initial = name?.trim()[0] ?? "؟"
	const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
	const [bannerLoaded, setBannerLoaded] = useState(false)
	const showFallback = !thumbnail || imgError

	console.log(banner)

	return (
		<div className="min-h-[350px] w-full overflow-hidden rounded-xl border border-primary/10 bg-base-200 shadow-[0_10px_30px_rgba(0,0,0,.25)]">
			{/* banner */}
			<div className="w-full">
				{banner && !bannerLoaded ? (
					<div
						className={clsx(
							"aspect-[4/1] w-full", // dimension
							"bg-base-300", // background
							banner && !bannerLoaded && "skeleton", // display skeleton only before banner loaded
						)}
					/>
				) : (
					<img
						src={banner}
						alt={`${name} banner`}
						className={clsx(
							"h-full w-full", // dimension
							"object-cover", // image behavior
							bannerLoaded ? "block" : "hidden", // display after loaded
							"transition-all duration-300 ease-in-out will-change-transform", // animation
						)}
						onError={() => setBannerLoaded(false)}
						onLoad={() => setBannerLoaded(true)}
					/>
				)}
			</div>

			{/* avatar + info */}
			<div className="px-4 pb-6 md:px-6">
				<div
					className={clsx(
						"relative", // position
						"mb-4", // margin
						banner ? "md:-mt-16" : "mt-8", // margin decrease if member doesn't have banner
					)}
				>
					<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-primary md:h-32 md:w-32">
						{!thumbnailLoaded && (
							<div className="skeleton absolute h-full w-full" />
						)}
						{showFallback ? (
							<div className="flex h-full w-full items-center justify-center bg-base-300">
								<span className="text-3xl font-medium text-primary md:text-4xl">
									{initial}
								</span>
							</div>
						) : (
							<img
								src={thumbnail}
								alt={`${name} cover`}
								className={clsx(
									"h-full w-full", // dimension
									"object-cover", // image behavior
									thumbnailLoaded ? "block" : "hidden", // display after loaded
									"transition-all duration-300 ease-in-out will-change-transform", // animation
								)}
								onError={() => setImgError(true)}
								onLoad={() => setThumbnailLoaded(true)}
							/>
						)}
					</div>
				</div>

				<div className="mt-7 flex flex-col gap-2">
					<span className="truncate text-xl font-semibold text-base-content md:text-3xl">
						{name}
					</span>
					<span className="truncate text-sm text-base-content/80 md:text-base">
						{position}
					</span>
					{description && (
						<p className="mt-1 text-sm leading-relaxed text-base-content/70 md:text-base">
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
