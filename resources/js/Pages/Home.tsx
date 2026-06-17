import { ReactNode, useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members, ScrollBar, Loading } from "@/index";
import { HomePageProps } from "@/types";

export default function Home({ projects, members }: HomePageProps) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const interval = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(interval);
    }, []);

    if(loading) return <Loading />;

    return (
        <>
            <Head title="SouperLopers" />
            <ScrollBar />
            <Banner fileName="banner-dark.webp" />
            <Projects projects={projects.data} />
            <Members members={members.data} />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
