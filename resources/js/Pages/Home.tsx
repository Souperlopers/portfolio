import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react"
import { Projects, Members, ContactUs } from "@/index"
import { HomePageProps } from "@/types"
import { CgWebsite } from "react-icons/cg"
import { ImUsers } from "react-icons/im"
import { IoCall } from "react-icons/io5"

export default function Home({ projects, members }: HomePageProps) {
	return (
		<>
			<Head title={"خانه"} />
			<Projects projects={projects.data} />
			<Members members={members.data} />
			<ContactUs />
		</>
	)
}

const projectsContent = (
	<>
		<span>نمونه کار</span>
		<CgWebsite />
	</>
)

const membersContent = (
	<>
		<span>اعضا</span>
		<ImUsers />
	</>
)

const aboutContent = (
	<>
		<span>تماس با ما</span>
		<IoCall />
	</>
)

Home.layout = (page: ReactNode) => (
	<MainLayout
		children={page}
		hasHero={true}
		navigationList={[
			{ content: projectsContent, id: "projects" },
			{ content: membersContent, id: "members" },
			{ content: aboutContent, id: "about" },
		]}
	/>
)
