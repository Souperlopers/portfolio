import { ReactNode } from "react";
import { Link, Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Banner, Projects } from "../index";

export default function Home({
    projects,
    members,
}: {
    projects: object;
    members: object;
}) {
    return (
        <div>
            <Head title="SouperLopers" />
            <div className="flex flex-col gap-5">
                <div className="h-52">
                    <Banner />
                </div>
                <div className="h-64">
                    <Projects />
                </div>
                <div className="rounded bg-orange-400 h-48">Members</div>
            </div>
        </div>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
