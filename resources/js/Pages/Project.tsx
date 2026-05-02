import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { ProjectPageProps } from "@/types";

export default function Project({ project }: ProjectPageProps) {
    return <></>;
}

Project.layout = (page: ReactNode) => <MainLayout children={page} />;
