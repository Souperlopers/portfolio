import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { ProjectPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Info, Images, Contributors } from "@/index";

export default function Project({ project }: ProjectPageProps) {
    const projectData = project.data;
    const images = projectData.images;
    const contributors = projectData.contributors;

    return (
        <div className="flex flex-col gap-5">
            <Head title={`SouperLopers ${projectData.title}`} />
            <div className="w-full flex flex-col gap-5">
                <div className="flex justify-between rounded bg-yellow-300">
                    <Info info={projectData} />
                    <Images images={images} />
                </div>
                <div className="bg-orange-400 p-5 rounded">
                    <Contributors contributors={contributors} />
                </div>
            </div>
        </div>
    );
}

Project.layout = (page: ReactNode) => <MainLayout children={page} />;
