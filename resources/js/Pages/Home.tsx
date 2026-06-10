import { ReactNode } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members, ScrollBar } from "@/index";
import { HomePageProps } from "@/types";

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Head title="SouperLopers" />
            <ScrollBar />
            <Banner fileName="banner-dark.svg" />
            <Projects projects={projects.data} />
            <Members members={members.data} />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
