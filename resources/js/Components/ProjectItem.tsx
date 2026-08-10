import { useState } from "react"
import { Link } from "@inertiajs/react"
import { ProjectItemProps } from "@/types/project"
import TagsComponent from "./TagsComponent"
import clsx from "clsx"
import { CiImageOn } from "react-icons/ci"

export default function ProjectItem({ projectData }: ProjectItemProps) {
	const [imgLoaded, setImgLoaded] = useState(false)

	const {
		title = "بدون نام",
		technologies = [],
		description = "",
	} = projectData

	return (
		<div
			className={clsx(
				// structure
				"overflow-hidden", // basic
				"flex flex-col justify-start gap-3 sm:gap-5", // flex
				"h-full w-full px-3 py-5", // dimension and padding

				// color and style
				"bg-base-300 shadow-[0_10px_30px_rgba(0,0,0,.25)]", // background and shadow
				"border-primary/10 rounded-xl border", // border

				// movement
				"transition-all duration-300 ease-in-out will-change-transform", // animation
				"hover:border-primary/25 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,91,255,.15)]", // hover
			)}
		>
			<div
				className={clsx(
					"flex grow flex-col gap-3 sm:flex-row", // flex
					"items-center justify-start sm:items-start sm:justify-center", // flex justify & align
					"", // dimension
				)}
			>
				{/* info */}
				<div
					className={clsx(
						"flex shrink flex-col gap-5", // flex
						"h-full w-full", // dimension
					)}
				>
					<h3
						className={clsx(
							"text-3xl font-semibold", // text dimension
							"text-base-content", // text color
						)}
					>
						{title}
					</h3>

					<p
						className={clsx(
							"text-base", // text dimension
							"text-base-content/70", // text color
						)}
					>
						{description}
					</p>

					<TagsComponent tags={technologies} />
				</div>

				{/* image */}
				<div
					className={clsx(
						"flex flex-col items-stretch", // flex
						"h-full w-full", // dimension
						!imgLoaded && "aspect-video", // show 16/9 skeleton
						imgLoaded ? "block" : "skeleton", // display after loaded
					)}
				>
					{projectData.thumbnail ? (
						<img
							src={projectData.thumbnail}
							alt={`${title} cover`}
							onLoad={() => setImgLoaded(true)}
							className={clsx(
								"max-h-60 sm:max-h-none", // dimension
								"opacity-80", // basic
								"object-contain", // object
							)}
						/>
					) : (
						<div
							className={clsx(
								"h-full w-full", // dimension
								"rounded-xl", // container
								"flex items-center justify-center", // flex
								"bg-base-100/70", // background color
							)}
						>
							<CiImageOn
								className={clsx(
									"-rotate-20 opacity-25", // display
								)}
								size={90}
							/>
						</div>
					)}
				</div>
			</div>

			<Link
				href={projectData.url}
				className={clsx(
					"px-[15px] py-3", // padding
					"rounded-lg", // container
					"border-primary border", // border
					"text-primary text-center font-medium", // text
					"hover:border-primary/30 hover:bg-primary/10", // hover
				)}
			>
				<button
					className={clsx(
						"flex items-center justify-center gap-1", // flex
						"w-full", // dimension
						"text-base sm:text-sm", // text dimension
						"truncate", // text overflow
					)}
				>
					مشاهده جزئیات
				</button>
			</Link>
		</div>
	)
}
