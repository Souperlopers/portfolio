import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { MemberPageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { Profile, MemberProjects, Contact } from "@/index"
import { GoHome } from "react-icons/go"
import { IoCodeSlashOutline } from "react-icons/io5"
import { CgWebsite } from "react-icons/cg"
import { IoCall } from "react-icons/io5"

const homeContent = (
    <>
        <GoHome />
        <span>خانه</span>
    </>
)

const profileContent = (
    <>
        <IoCodeSlashOutline />
        <span>مهارت‌ها</span>
    </>
)

const projectsContent = (
    <>
        <CgWebsite />
        <span>پروژه‌های مربوطه</span>
    </>
)

const contactContent = (
    <>
        <IoCall />
        <span>تماس با توسعه‌دهنده</span>
    </>
)

export default function Member({ member }: MemberPageProps) {
    const info = member.data || {}
    const projects = member.data.contributions || []

    return (
        <div className="flex flex-col gap-10 md:gap-16">
            <Head title={`SouperLopers | ${info.name}`} />
            <div id="profile" className={`scroll-mt-20`}>
                <Profile info={info} />
            </div>
            <div id="projects" className={`scroll-mt-20`}>
                <MemberProjects projects={projects} />
            </div>
            <div id="contact" className={`scroll-mt-20`}>
                <Contact info={info} />
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
