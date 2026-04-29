import { ReactNode } from "react";
import { Link, Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects } from "../index";
import { Project } from "@/types";

export default function Home({
    projects,
    members,
}: {
    projects: Project[];
    members: object;
}) {
    console.log(projects);
    return (
        <div>
            <Head title="SouperLopers" />
            <div className="flex flex-col gap-5">
                <Banner />
                <Projects projects={projects} />
                <div className="rounded bg-orange-400 h-48">Members</div>
            </div>
        </div>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
