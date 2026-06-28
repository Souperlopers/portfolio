import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { MemberPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Profile, MemberProjects, Contact } from "@/index";

export default function Member({ member }: MemberPageProps) {
    const info = member.data || {};
    const projects = member.data.contributions || [];

    return (
        <div className="flex flex-col gap-5 w-full lg:p-5 p-3">
            <Head title={`SouperLopers | ${info.name}`} />
            <div id="profile">
                <Profile info={info} />
            </div>
            <div id="projects">
                <MemberProjects projects={projects} />
            </div>
            <div id="contact">
                <Contact info={info} />
            </div>
        </div>
    );
}

Member.layout = (page: ReactNode) => <MainLayout children={page} />;
