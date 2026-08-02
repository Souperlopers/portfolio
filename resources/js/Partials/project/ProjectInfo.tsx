import { Project } from "@/types/project"
import { DetailButtons } from "@/index"
import TagsComponent from "@/Components/TagsComponent"

export default function ProjectInfo({ info }: { info: Project }) {
	const technologies = info.technologies || []
	return (
		<div className="flex min-h-[400px] w-full flex-col justify-between gap-7 pt-5 text-primary-content lg:max-w-[40%]">
			<div className="max-w-80 truncate text-3xl font-semibold text-base-content md:max-w-96">
				{info.title}
			</div>
			<div className="text-base text-secondary-content md:text-lg">
				{info.description}
			</div>
			<div className="flex flex-wrap gap-5">
				<h2 className="text-lg text-base-content md:text-xl">
					تکنولوژی‌ها
				</h2>
				<TagsComponent tags={technologies} />
			</div>
			<div className="flex gap-10">
				<DetailButtons links={info.links || {}} />
			</div>
		</div>
	)
}
