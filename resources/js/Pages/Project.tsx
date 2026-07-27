import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { ProjectPageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { Info, Images, Contributors } from "@/index"
import { GoHome } from "react-icons/go"
import { TbBrandStackshare } from "react-icons/tb"
import { ImUsers } from "react-icons/im"
import clsx from "clsx"

const homeContent = (
    <>
        <GoHome />
        <span>خانه</span>
    </>
)

const infoContent = (
    <>
        <TbBrandStackshare />
        <span>معرفی</span>
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
                            "text-white", // text color
                            "pr-5 md:pr-10", // padding
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
                            "text-white", // text color
                            "pr-5 md:pr-10", // padding
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
