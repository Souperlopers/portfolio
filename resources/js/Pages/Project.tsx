import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { ProjectPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Info, Images, Contributors } from "@/index";

export default function Project({ project }: ProjectPageProps) {
    const projectData = project.data;
    const images = projectData.images || [];
    const contributors = projectData.contributors || [];

    return (
        <>
            <Head title={`SouperLopers ${projectData.title}`} />
            <div className={`w-full max-w-[1360px] flex flex-col gap-10 md:px-10 px-5`}>
                <div
                    id="info"
                    className={`scroll-mt-20 flex lg:flex-row flex-col justify-between items-start rounded gap-5`}
                >
                    <Info info={projectData} />
                    <Images images={images} />
                </div>
                <div id="members" className={`scroll-mt-20`}>
                    <h2
                        className={`text-xl md:text-2xl lg:text-3xl font-medium text-white mb-5 md:mb-7 pr-1`}
                    >
                        توسعه‌دهندگان
                    </h2>
                    <Contributors contributors={contributors} />
                </div>
            </div>
        </>
    );
}

Project.layout = (page: ReactNode) => (
    <MainLayout
        children={page}
        navigationList={[
            { title: "خانه", href: "/" },
            { title: "تکنولوژی‌های پروژه", id: "info" },
            { title: "توسعه‌دهندگان پروژه", id: "members" },
        ]}
    />
);
