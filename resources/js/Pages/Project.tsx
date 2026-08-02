import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { ProjectPageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { Info, Images, Contributors } from "@/index"
import { AiFillHome } from "react-icons/ai"
import { ImUsers } from "react-icons/im"
import { LuClipboardList } from "react-icons/lu"
import clsx from "clsx"
import { homeContent } from "@/Pages/Home"

export default function Project({ project }: ProjectPageProps) {
	const projectData = project.data
	const images = projectData.images || []
	const contributors = projectData.contributors || []

	return (
		<>
			<Head title={projectData.title} />
			<div
				className={`flex w-full max-w-[1360px] flex-col gap-10 md:gap-16`}
			>
				<div
					className={clsx(
						"flex flex-col gap-10", // flex
						"scroll-mt-20", // prevent a section hidden behind header
					)}
					id="info"
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
						معرفی
					</h2>
					<div
						className={`flex flex-col items-start justify-between gap-5 rounded lg:flex-row`}
					>
						<Info info={projectData} />
						<Images images={images} />
					</div>
				</div>
				<div
					id="members"
					className={`flex scroll-mt-20 flex-col gap-10`}
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
						توسعه‌دهندگان
					</h2>
					<Contributors contributors={contributors} />
				</div>
			</div>
		</>
	)
}

Project.layout = (page: ReactNode) => (
	<MainLayout
		children={page}
		navigationList={[
			{ content: homeContent, href: "/" },
			{ content: infoContent, id: "info" },
			{ content: membersContent, id: "members" },
		]}
	/>
)

const infoContent = (
	<>
		<span>معرفی</span>
		<LuClipboardList />
	</>
)

const membersContent = (
	<>
		<span>توسعه‌دهندگان پروژه</span>
		<ImUsers />
	</>
)
