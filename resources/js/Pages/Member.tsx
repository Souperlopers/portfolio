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
            <Profile info={info} />
            <MemberProjects projects={projects} />
            <Contact />
        </div>
    );
}

Member.layout = (page: ReactNode) => <MainLayout children={page} />;
