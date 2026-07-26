import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react"
import { Projects, Members, About } from "@/index"
import { HomePageProps } from "@/types"
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineWorkOutline, MdOutlineMailOutline } from "react-icons/md";


const projectsContent = (
    <span className="flex items-center justify-center gap-3">
        <MdOutlineWorkOutline /> نمونه کار
    </span>
)

const membersContent = (
    <span className="flex items-center justify-center gap-3">
        <IoCodeSlashOutline /> توسعه‌دهندگان
    </span>
)

const aboutContent = (
    <span className="flex items-center justify-center gap-3">
        <MdOutlineMailOutline /> تماس با ما
    </span>
)

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
