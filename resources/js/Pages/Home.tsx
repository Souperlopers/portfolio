import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react"
import { Projects, Members, About } from "@/index"
import { HomePageProps } from "@/types"
import { IoCodeSlashOutline } from "react-icons/io5"
import { MdOutlineWorkOutline, MdOutlineMailOutline } from "react-icons/md"

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Head title={"SouperLopers"} />
            <Projects projects={projects.data} />
            <Members members={members.data} />
            <About />
            <About />
            <About />
            <About />
        </>
    )
}

const projectsContent = (
    <span className="flex items-center justify-between gap-4">
        <p>نمونه کار</p>
        <MdOutlineWorkOutline />
    </span>
)

const membersContent = (
    <span className="flex items-center justify-between gap-4">
        <p>توسعه‌دهندگان</p>
        <IoCodeSlashOutline />
    </span>
)

const aboutContent = (
    <span className="flex items-center justify-between gap-4">
        <p>تماس با ما</p>
        <MdOutlineMailOutline />
    </span>
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
