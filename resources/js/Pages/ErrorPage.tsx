import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react"
import { AiFillHome } from "react-icons/ai"
import { ErrorPageProps } from "@/types/error"
import clsx from "clsx"

export default function Project({ status }: ErrorPageProps) {
    return (
        <>
            <Head title={status == 404 ? "Not Found!" : "Error!"} />
            <p>{status == 404 ? "Not Found!" : "Error!"}</p>
        </>
    )
}

Project.layout = (page: ReactNode) => (
    <MainLayout
        children={page}
        navigationList={[
            {
                content: (
                    <>
                        <AiFillHome />
                        <span>خانه</span>
                    </>
                ),
                href: "/",
            },
        ]}
    />
)
