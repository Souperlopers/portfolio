import ProjectItem from "@/Components/ProjectItem"
import { ProjectBrief } from "@/types/project"
import { useState } from "react"
import { HiArrowLongLeft } from "react-icons/hi2"
import clsx from "clsx"
import EmptyProjects from "@/Components/EmptyProjects"

export default function Projects({ projects }: { projects: ProjectBrief[] }) {
	const SHOW_ALL = true // if set to false, a 'show more' button will appear
	
	const [showMoreCount, setShowMoreCount] = useState(1)
	const projectsCount = projects.length

	const isShowMore = projectsCount > 2 && projectsCount > 2 * showMoreCount
	const visibleProjects = SHOW_ALL ? projects : projects.slice(0, 2 * showMoreCount)

	return (
		<section
			id="projects"
			className={clsx(
				"mx-auto mt-10", // margin
				"flex flex-col gap-10", // flex
				"w-full max-w-337.5", // dimension
				"scroll-mt-24", // prevent a section hidden behind header
				"px-5 md:px-20 md:pt-16", // padding
			)}
		>
			<h2
				className={clsx(
					"border-primary border-r-4", // border
					"text-xl font-medium md:text-2xl lg:text-3xl", // text division
					"text-base-content", // text color
					"pr-5 md:pr-10", // padding
					"-mr-2 md:-mr-5", // margin
				)}
			>
				نمونه کار
			</h2>

			{projectsCount === 0 && <EmptyProjects />}

			<div
				className={clsx(
					"flex flex-col items-center", // flex (small screen)
					"sm:grid sm:grid-cols-1 sm:gap-8 xl:grid-cols-2 gap-5", // grid
				)}
			>
				{visibleProjects.map((project, index) => (
					<ProjectItem
						key={project.id}
						index={index}
						projectData={project}
					/>
				))}
			</div>

			{SHOW_ALL && isShowMore && (
				<div
					className={clsx(
						"flex justify-center md:justify-end", // flex
					)}
				>
					<button
						className={clsx(
							"inline-flex items-center gap-1", // flex
							"text-primary text-[15px]", // text
							"hover:text-btn-primary hover:cursor-pointer", // hover
							"transition-colors duration-300", // animation
						)}
						type="button"
						onClick={() => setShowMoreCount((prev) => prev + 1)}
					>
						پروژه‌های بیشتر
						<HiArrowLongLeft size={15} />
					</button>
				</div>
			)}
		</section>
	)
}
