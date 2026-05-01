import { ReactNode } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects, Members } from "@/Pages/index";
import { ProjectsObject, UsersObject } from "@/types";

export default function Home({
    projects,
    members,
}: {
    projects: ProjectsObject;
    members: UsersObject;
}) {
    const projectsList = projects.data || [];
    const membersList = members.data || [];

    return (
        <div>
            <Head title="SouperLopers" />
            <div className="flex flex-col gap-5 font-vazir">
                <Banner />
                <Projects projects={projectsList} />
                <Members members={membersList} />
            </div>
        </div>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
