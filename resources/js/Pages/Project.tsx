import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { ProjectPageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { Info, Images, Contributors } from "@/index"
import { GoHome } from "react-icons/go"
import { TbBrandStackshare } from "react-icons/tb"
import { ImUsers } from "react-icons/im"

const homeContent = (
    <>
        <GoHome />
        <span>خانه</span>
    </>
)

const infoContent = (
    <>
        <TbBrandStackshare />
        <span>تکنولوژی‌های پروژه</span>
    </>
)

const membersContent = (
    <>
        <ImUsers />
        <span>توسعه‌دهندگان پروژه</span>
    </>
)

export default function Project({ project }: ProjectPageProps) {
    const projectData = project.data
    const images = projectData.images || []
    const contributors = projectData.contributors || []

    return (
        <>
            <Head title={`SouperLopers ${projectData.title}`} />
            <div className={`flex w-full max-w-[1360px] flex-col gap-10`}>
                <div
                    id="info"
                    className={`flex scroll-mt-20 flex-col items-start justify-between gap-5 rounded lg:flex-row`}
                >
                    <Info info={projectData} />
                    <Images images={images} />
                </div>
                <div id="members" className={`scroll-mt-20`}>
                    <h2
                        className={`mb-5 border-r-4 border-primary pr-10 text-xl font-medium text-white md:mb-7 md:text-2xl lg:text-3xl`}
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
