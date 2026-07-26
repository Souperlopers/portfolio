import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react"
import { Projects, Members, About } from "@/index"
import { HomePageProps } from "@/types"
import { CgWebsite } from "react-icons/cg"
import { ImUsers } from "react-icons/im"
import { IoCall } from "react-icons/io5"

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
        <p>نمونه کار</p>
        <CgWebsite />
    </>
)

const membersContent = (
    <>
        <p>توسعه‌دهندگان</p>
        <ImUsers />
    </>
)

const aboutContent = (
    <>
        <p>تماس با ما</p>
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
