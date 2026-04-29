import { ReactNode } from "react";
import { Link, Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Home({
    projects,
    members,
}: {
    projects: object;
    members: object;
}) {
    return (
        <>
            <Head title="Home" />
            hallo
            <br />
            <br />
            <Link href={route("projects")}>Projects:</Link>
            <br />
            {JSON.stringify(projects)}
            <br />
            <br />
            <Link href={route("members")}>Members:</Link>
            <br />
            {JSON.stringify(members)}
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
