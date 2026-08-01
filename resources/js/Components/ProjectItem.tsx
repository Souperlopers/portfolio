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
				"card", // daisyui
				"flex flex-col gap-3 sm:gap-5", // flex
				"overflow-hidden rounded-xl", // container
				"px-3 py-5", // padding
				"bg-gradient-to-b from-base-300 to-[#0B1120]", // background color
				"border border-primary/10", // border
				"shadow-[0_10px_30px_rgba(0,0,0,25)]", // shadow
				"transition-all duration-300 ease-in-out will-change-transform", // animation
				"hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_16px_40px_rgba(47,91,255,.15)]", // hover
			)}
		>
			<div
				className={clsx(
					"flex flex-col-reverse justify-center gap-3 sm:flex-row sm:justify-between sm:gap-5", // flex
				)}
			>
				{/* info */}
				<div
					className={clsx(
						"flex flex-col sm:gap-5", // flex
						"w-full sm:max-w-[45%]", // dimension
					)}
				>
					<h3
						className={clsx(
							"text-xl font-semibold md:text-3xl", // text dimension
							"truncate", // text overflow
							"text-base-content", // text color
						)}
					>
						{title}
					</h3>
					<p
						className={clsx(
							"line-clamp-3 md:line-clamp-2", // text overflow
							"text-sm md:text-base", // text dimension
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
						"h-44 w-full sm:max-w-[50%] md:min-h-[200px]", // dimension
						"relative shrink-0 overflow-hidden", // basic
					)}
				>
					{projectData.thumbnail ? (
						imgLoaded ? (
							<img
								src={projectData.thumbnail}
								alt={`${title} cover`}
								className={clsx(
									"h-full w-full", // dimension
									"rounded-xl", // container
									"object-cover opacity-80", // basic
									imgLoaded ? "block" : "hidden", // display after loaded
									"transition-all duration-300 ease-in-out will-change-transform", // animation
								)}
								onLoad={() => setImgLoaded(true)}
							/>
						) : (
							<div
								className={clsx(
									"absolute inset-0", // position
									"bg-base-200/30", // background color
									"skeleton", // animation
								)}
							/>
						)
					) : (
						<div
							className={clsx(
								"h-full w-full", // dimension
								"rounded-xl", // container
								"flex items-center justify-center", // flex
								"bg-base-100/70", // background color
							)}
						>
							<CiImageOn size={40} />
						</div>
					)}
				</div>
			</div>
			<Link
				href={projectData.url}
				className={clsx(
					"px-[15px] py-1 md:px-5 md:py-2", // padding
					"rounded-lg", // container
					"border border-primary", // border
					"text-center font-medium text-primary", // text
					"hover:border-primary/30 hover:bg-primary/10", // hover
					"transition-all duration-300 ease-in-out will-change-transform", // animation
				)}
			>
				<button
					className={clsx(
						"flex items-center justify-center gap-1", // flex
						"w-full", // dimension
						"text-xs sm:text-sm md:text-base", // text dimension
						"truncate", // text overflow
					)}
				>
					مشاهده جزئیات
				</button>
			</Link>
		</div>
	)
}
