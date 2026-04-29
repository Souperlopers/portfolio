import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function Project({
    projects,
    tagGroups,
}: {
    projects: object;
    tagGroups: Object;
}) {
    return <></>;
}

Project.layout = (page: ReactNode) => <MainLayout children={page} />;
