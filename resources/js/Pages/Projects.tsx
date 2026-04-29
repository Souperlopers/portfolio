import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function Projects({ projects }: { projects: object }) {
    return <></>;
}

Projects.layout = (page: ReactNode) => <MainLayout children={page} />;
