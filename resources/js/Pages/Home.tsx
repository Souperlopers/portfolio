import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { Projects, Members, About } from "@/index";
import { HomePageProps } from "@/types";

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Head title={"SouperLopers"} />
            <Projects projects={projects.data} />
            <Members members={members.data} />
            <About />
            <About />
            <About />
            <About />
        </>
    );
}

Home.layout = (page: ReactNode) => (
    <MainLayout
        children={page}
        hasHero={true}
        navigationList={[
            { title: "نمونه کار", id: "projects" },
            { title: "توسعه‌دهندگان", id: "members" },
            { title: "تماس با ما", id: "about" },
        ]}
    />
);
