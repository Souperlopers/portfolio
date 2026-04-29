import { ReactNode } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members } from "../index";
import { Project, User } from "@/types";

export default function Home({
    projects,
    members,
}: {
    projects: Project[];
    members: User[];
}) {
    return (
        <div>
            <Head title="SouperLopers" />
            <div className="flex flex-col gap-5">
                <Banner />
                <Projects projects={projects} />
                <Members members={members} />
            </div>
        </div>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
