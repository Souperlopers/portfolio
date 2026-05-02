import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { MemberPageProps } from "@/types";

export default function Member({ member }: MemberPageProps) {
    return <></>;
}

Member.layout = (page: ReactNode) => <MainLayout children={page} />;
