import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { MemberPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Profile, Projects } from "@/Pages/index";

export default function Member({ member }: MemberPageProps) {
    const projects = member.contributions;
    console.log(projects);
    return (
        <div>
            <Head title="SouperLopers" />
            <div className="bg-red-300 h-48">
                <Profile />
            </div>
            <div className="bg-red-900 h-64">
                {/* <Projects projects={}/> */}
            </div>
        </div>
    );
}

Member.layout = (page: ReactNode) => <MainLayout children={page} />;
