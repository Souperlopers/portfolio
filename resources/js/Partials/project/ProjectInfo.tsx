import { Project } from "@/types/project"
import { DetailButtons } from "@/index"
import TagsComponent from "@/Components/TagsComponent"
import clsx from "clsx/lite"

export default function ProjectInfo({ info }: { info: Project }) {
	const technologies = info.technologies || []
	return (
		<div className="text-primary-content flex min-h-100 w-full flex-col justify-between gap-7 pt-5 lg:max-w-[40%]">
			<div className="text-base-content max-w-80 truncate text-3xl font-semibold md:max-w-96">
				{info.title}
			</div>
			<div
				className={clsx(
					"text-secondary-content", // color
					"text-base md:text-lg", // size
					"text-justify", // justify
					)}
			>
				{info.description}
			</div>
			<div className="flex flex-wrap gap-5">
				<h2 className="text-base-content text-lg md:text-xl">
					تکنولوژی‌ها
				</h2>
				<TagsComponent tags={technologies} />
			</div>
			<div className="flex gap-5">
				<DetailButtons links={info.links} />
			</div>
		</div>
	)
}
