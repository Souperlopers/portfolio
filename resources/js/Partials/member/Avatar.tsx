import { useState } from "react"
import clsx from "clsx/lite"

function AvatarFallback(name: string) {
	const nameParts = name?.trim().split(" ")
	const initial =
		name === "بدون نام"
			? "?"
			: nameParts.length < 2
				? nameParts[0][0]
				: nameParts[0][0].concat(nameParts[1][0])

	return (
		<div className="bg-base-300 flex h-full w-full items-center justify-center">
			<span className="text-primary text-3xl font-medium md:text-4xl">
				{initial}
			</span>
		</div>
	)
}

export function MemberAvatar({
	name,
	thumbnail,
	className,
}: {
	name: string
	thumbnail?: string
	className: string
}) {
	const [imgError, setImgError] = useState(false)
	const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
	const showFallback = !thumbnail || imgError

	return (
		<div
			className={clsx(
				"shrink-0 overflow-hidden", // basic
				"rounded-full", // border
				className,
			)}
		>
			{showFallback ? (
				AvatarFallback(name)
			) : (
				<img
					src={thumbnail}
					alt="member-avatar"
					onError={() => setImgError(true)}
					onLoad={() => setThumbnailLoaded(true)}
					className={clsx(
						"h-full w-full", // dimension
						"object-cover", // image behavior
						!thumbnailLoaded && "skeleton", // display after loaded
					)}
				/>
			)}
		</div>
	)
}
