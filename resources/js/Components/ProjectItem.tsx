import { useState } from "react"
import { Link } from "@inertiajs/react"
import { ProjectBrief } from "@/types/project"
import TagsComponent from "./TagsComponent"
import clsx from "clsx"
import { CiImageOn } from "react-icons/ci"

export default function ProjectItem({ projectData }: {projectData: ProjectBrief}) {
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
				)}
			>
				{/* info */}
				<div
					className={clsx(
						"flex flex-col gap-5", // flex
						"h-full w-full", // dimension
					)}
				>
					<h3
						className={clsx(
							"text-xl font-semibold md:text-3xl", // text dimension
							"text-base-content", // text color
						)}
					>
						{title}
					</h3>

					<p
						className={clsx(
							"text-base", // text dimension
							"text-base-content/70", // text color
							"text-justify", // justify
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
						projectData.thumbnail &&
							!imgLoaded &&
							"skeleton aspect-video", // show 16/9 skeleton
						projectData.thumbnail && imgLoaded && "block",
					)}
				>
					{projectData.thumbnail ? (
						<img
							src={projectData.thumbnail}
							alt={`${title} cover`}
							onLoad={() => setImgLoaded(true)}
							className={clsx(
								"max-h-60 sm:max-h-80", // dimension
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
								"aspect-video lg:aspect-auto",
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
				target="_blank"
				className={clsx(
					"px-3.75 py-3", // padding
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
