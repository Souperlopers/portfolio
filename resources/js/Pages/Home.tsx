import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { Projects, Members, About } from "@/index";
import { HomePageProps } from "@/types";
import { NavigationItems } from "@/types/navigation";

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Head title={"SouperLopers"} />
            <Projects projects={projects.data} />
            <Members members={members.data} />
            <About />
        </>
    );
}

const navList: NavigationItems[] = [
    { title: "نمونه کار", id: "projects" },
    { title: "توسعه‌دهندگان", id: "members" },
    { title: "تماس با ما", id: "about" },
];

Home.layout = (page: ReactNode) => (
    <MainLayout
        children={page}
        HeaderData={{ navList, isHero: true }}
    />
);
