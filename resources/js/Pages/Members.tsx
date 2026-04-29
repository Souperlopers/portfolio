import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function Members({ members }: { members: object }) {
    return <></>;
}

Members.layout = (page: ReactNode) => <MainLayout children={page} />;
