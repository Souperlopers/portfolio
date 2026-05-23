import { ReactNode } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members, ScrollBar } from "@/index";
import { HomePageProps } from "@/types";

export default function Home({ projects, members }: HomePageProps) {
    const projectsList = projects.data;
    const membersList = members.data;

    return (
        <>
            <Head title="SouperLopers" />
            <ScrollBar />
            <Banner fileName="banner.jpg" />
            <Projects projects={projectsList} />
            <Members members={membersList} />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
