import ProjectItem from "@/Components/ProjectItem"
import EmptyProjects from "@/Components/EmptyProjects"
import { ProjectBrief } from "@/types/project"
import { useState } from "react"
import { HiArrowLongLeft } from "react-icons/hi2"
import clsx from "clsx"

const Projects = ({ projects }: { projects: ProjectBrief[] }) => {
	const [showMoreCount, setShowMoreCount] = useState(1)
	const projectsCount = projects.length

	const isShowMore = projectsCount > 2 && projectsCount > 2 * showMoreCount
	const visibleProjects = projects.slice(0, 2 * showMoreCount)

	return (
		<section
			id="projects"
			className={clsx(
				"mx-auto mt-10", // margin
				"flex flex-col gap-10", // flex
				"w-full max-w-[1350px]", // dimension
				"scroll-mt-24", // prevent a section hidden behind header
			)}
		>
			<h2
				className={clsx(
					"border-r-4 border-primary", // border
					"text-xl font-medium md:text-2xl lg:text-3xl", // text division
					"text-base-content", // text color
					"pr-5 md:pr-10", // padding
					"-mr-2 md:-mr-5", // margin
				)}
			>
				نمونه کار
			</h2>

			{projectsCount === 0 && <EmptyProjects />}

			<div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
				{visibleProjects.map((project, index) => (
					<ProjectItem
						key={project.id}
						index={index}
						projectData={project}
					/>
				))}
			</div>

			{isShowMore && (
				<div className="ml-1 flex justify-center md:justify-end">
					<button
						className="inline-flex items-center gap-1 text-[15px] text-primary duration-300 hover:text-btn-primary"
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

export default Projects
