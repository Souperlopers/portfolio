import { ReactNode } from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function Member({
    members,
    tagGroups,
}: {
    members: object;
    tagGroups: Object;
}) {
    return <></>;
}

Member.layout = (page: ReactNode) => <MainLayout children={page} />;
