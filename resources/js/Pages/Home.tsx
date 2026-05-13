import { ReactNode } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members, ScrollBar } from "@/index";
import { HomePageProps } from "@/types";

export default function Home({ projects, members }: HomePageProps) {
    const projectsList = projects.data;
    const membersList = members.data;

    return (
        <div>
            <Head title="SouperLopers" />
            <div className="flex flex-col gap-5 font-vazir">
                <ScrollBar />
                <Banner fileName="banner.jpg" />
                <section id="projects">
                    <Projects projects={projectsList} />
                </section>
                <section id="members">
                    <Members members={membersList} />
                </section>
            </div>
        </div>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
