import { ReactNode, useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members, ScrollBar, Loading } from "@/index";
import { HomePageProps } from "@/types";

export default function Home({ projects, members }: HomePageProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Head title="SouperLopers" />
            <Banner />
            <Projects projects={projects.data} />
            <Members members={members.data} />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
