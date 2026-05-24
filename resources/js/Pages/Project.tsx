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
        <div className="flex flex-col gap-5 lg:p-5 p-3">
            <Head title={`SouperLopers ${projectData.title}`} />
            <div className="w-full flex flex-col gap-10">
                <div className="flex lg:flex-row flex-col justify-between items-end rounded gap-5">
                    <Info info={projectData} />
                    <Images images={images} />
                </div>
                <div className="">
                    <Contributors contributors={contributors} />
                </div>
            </div>
        </div>
    );
}

Project.layout = (page: ReactNode) => <MainLayout children={page} />;
