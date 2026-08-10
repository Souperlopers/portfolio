import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { MemberPageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { Profile, MemberProjects, Contact } from "@/index"
import { IoCodeSlashOutline } from "react-icons/io5"
import { CgWebsite } from "react-icons/cg"
import { IoCall } from "react-icons/io5"
import { homeContent } from "@/Pages/Home"
import clsx from "clsx"

export default function Member({ member }: MemberPageProps) {
	const info = member.data || {}
	const projects = member.data.contributions || []
	const contact = member.data.contact || {}

	return (
		<div
			className={clsx(
				"flex flex-col gap-10 md:gap-16", // flex
				"px-5 pb-10 md:px-20 md:pb-16", // padding
			)}
		>
			<Head title={info.name} />
			<div id="profile" className={`scroll-mt-20`}>
				<Profile info={info} />
			</div>
			<div id="projects" className={`scroll-mt-20`}>
				<MemberProjects projects={projects} />
			</div>
			<div id="contact" className={`scroll-mt-20`}>
				<Contact contact={contact} />
			</div>
		</div>
	)
}

Member.layout = (page: ReactNode) => (
	<MainLayout
		children={page}
		navigationList={[
			{ content: homeContent, href: "/" },
			{ content: profileContent, id: "profile" },
			{ content: projectsContent, id: "projects" },
			{ content: contactContent, id: "contact" },
		]}
	/>
)

const profileContent = (
	<>
		<span>معرفی</span>
		<IoCodeSlashOutline />
	</>
)

const projectsContent = (
	<>
		<span>پروژه‌های مربوطه</span>
		<CgWebsite />
	</>
)

const contactContent = (
	<>
		<span>تماس با توسعه‌دهنده</span>
		<IoCall />
	</>
)
