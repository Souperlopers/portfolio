import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function NotFound() {
    return <></>;
}

NotFound.layout = (page: ReactNode) => <MainLayout children={page} />;
