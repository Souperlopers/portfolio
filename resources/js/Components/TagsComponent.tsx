import { useState } from "react"
import { Tag } from "@/types/tag"
import clsx from "clsx"

export default function TagsComponent({ tags }: { tags: Tag[] }) {
	const [hasIcon, setHasIcon] = useState(true)
	return (
		<div
			className={clsx(
				"flex flex-wrap gap-2", // flex
				"h-10 overflow-hidden", // dimension
			)}
		>
			{tags.map((tag) => (
				<div
					key={tag.id}
					dir="ltr"
					className={clsx(
						"flex items-center justify-center gap-1.5", // flex
						"rounded-xl", // container
						"px-3 py-1.5", // padding
						"bg-primary/10", // background color
						"text-sm", // text dimmension
					)}
				>
					{hasIcon && (
						<img
							className={clsx(
								"h-4 w-4", // dimension
							)}
							src={`/assets/tags/${tag.title}.svg`}
							alt={tag.title}
							onError={() => setHasIcon(false)}
						/>
					)}
					<span
						className={clsx(
							"text-xs sm:text-sm text-base-content", // text dimension
							"pt-0.5", // padding
							"max-w-20 truncate", // text overflow
						)}
					>
						{tag.title}
					</span>
				</div>
			))}
		</div>
	)
}
