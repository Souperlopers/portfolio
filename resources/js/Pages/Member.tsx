import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { MemberPageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { Profile, MemberProjects, Contact } from "@/index"
import { GoHome } from "react-icons/go"
import { IoCodeSlashOutline } from "react-icons/io5"
import { MdOutlineWorkOutline, MdOutlineMailOutline } from "react-icons/md"

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
        <MdOutlineWorkOutline />
        <span>پروژه‌های مربوطه</span>
    </>
)

const contactContent = (
    <>
        <MdOutlineMailOutline />
        <span>تماس با توسعه‌دهنده</span>
    </>
)

export default function Member({ member }: MemberPageProps) {
    const info = member.data || {}
    const projects = member.data.contributions || []

    return (
        <div className="flex flex-col gap-10">
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
            { content: "مهارت ها", id: "profile" },
            { content: projectsContent, id: "projects" },
            { content: contactContent, id: "contact" },
        ]}
    />
)
