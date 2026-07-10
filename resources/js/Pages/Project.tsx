import { ReactNode } from "react";
import Layout from "@/Layouts/Layout";
import { ProjectPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Info, Images, Contributors } from "@/index";
import { NavigationItems           } from "@/types/navigation" ;

//style
const containerStyle = "w-full flex flex-col gap-10";

const infoStyle = "scroll-mt-20 flex lg:flex-row flex-col justify-between items-start rounded gap-5";

const membersStyle = "scroll-mt-20";

const membersTitleStyle = "text-xl md:text-2xl lg:text-3xl font-medium text-white mb-5 md:mb-7 pr-1"

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
        <>
            <Head title={`SouperLopers ${projectData.title}`} />
            <div className={containerStyle}>
                <div id="info" className={infoStyle}>
                    <Info info={projectData} />
                    <Images images={images} />
                </div>
                <div id="members" className={membersStyle}>
                    <h2 className={membersTitleStyle}>
                     توسعه‌دهندگان
                    </h2>
                    <Contributors contributors={contributors} />
                </div>
            </div>
        </>
    );
}

Project.layout = (page: ReactNode) => <Layout children={page} navigationList={projectPageNavigationItems} />;
