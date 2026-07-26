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
    <>
        <span>نمونه کار</span>
        <MdOutlineWorkOutline />
    </>
)

const membersContent = (
    <>
        <span>توسعه‌دهندگان</span>
        <IoCodeSlashOutline />
    </>
)

const aboutContent = (
    <>
        <span>تماس با ما</span>
        <MdOutlineMailOutline />
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
