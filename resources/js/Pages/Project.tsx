import { ReactNode } from "react";
import Layout from "@/Layouts/Layout";
import { ProjectPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Info, Images, Contributors } from "@/index";
import { NavigationItems           } from "@/types/navigation" ;

const projectPageNavigationItems: NavigationItems[] = [
    { title: "خانه"                , href : "/"       },
    { title: "تکنولوژی‌های پروژه"  , id   : "info"    },
    { title: "توسعه‌دهندگان پروژه" , id   : "members" },
];


export default function Project({ project }: ProjectPageProps) {
    const projectData = project.data;
    const images = projectData.images || [];
    const contributors = projectData.contributors || [];

    return (
        <div className="flex flex-col gap-5 lg:p-5 p-3 w-full max-w-[1350px] mt-24">
            <Head title={`SouperLopers ${projectData.title}`} />
            <div className="w-full flex flex-col gap-10">
                <div
                    id="info"
                    className="scroll-mt-20 flex lg:flex-row flex-col justify-between items-start rounded gap-5"
                >
                    <Info info={projectData} />
                    <Images images={images} />
                </div>
                <div className="scroll-mt-20" id="members">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-5 md:mb-7 pr-1">
                     توسعه‌دهندگان
                    </h2>
                    <Contributors contributors={contributors} />
                </div>
            </div>
        </div>
    );
}

Project.layout = (page: ReactNode) => <Layout children={page} navigationList={projectPageNavigationItems} />;
