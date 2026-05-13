import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { MemberPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Profile, MemberProjects } from "@/index";

export default function Member({ member }: MemberPageProps) {
    const info = member.data || {};
    const projects = member.data.contributions || [];

    return (
        <div className="flex flex-col gap-5 w-full">
            <Head title={`SouperLopers | ${info.name}`} />
            <Profile info={info} />
            <MemberProjects projects={projects} />
        </div>
    );
}

Member.layout = (page: ReactNode) => <MainLayout children={page} />;
