import { useState } from "react"
import { Member } from "@/types/member"
import TagsComponent from "@/Components/TagsComponent"
import { MemberAvatar } from "@/Partials/member/Avatar"
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

	const [bannerLoaded, setBannerLoaded] = useState(false)

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
						"aspect-4/1 w-full", // dimension
						"bg-base-300", // background
						!bannerLoaded && "skeleton", // display after loaded
					)}
				/>
			)}

			<div className="px-4 pb-6 md:px-6">
				{/* avatar */}
				<MemberAvatar
					name={name}
					thumbnail={thumbnail}
					className={clsx(
						"ring-primary ring-4", // border
						"h-24 w-24 md:h-32 md:w-32", // dimension
						"mb-4", // margin
						banner ? "md:-mt-16" : "mt-8", // decrease margin if member doesn't have banner
					)}
				/>

				{/* info */}
				<div className="mt-7 flex flex-col gap-2">
					<span className="text-base-content truncate text-xl font-semibold md:text-3xl">
						{name}
					</span>
					<span className="text-base-content/80 truncate text-sm md:text-base">
						{position}
					</span>
					<p className="text-base-content/70 mt-1 text-sm leading-relaxed md:text-base">
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
