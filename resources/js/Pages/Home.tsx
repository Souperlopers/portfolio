import { ReactNode     }                   from "react"               ;
import   MainLayout                        from "@/Layouts/MainLayout";
import { Banner       ,Projects, Members } from "@/index"             ;
import { HomePageProps }                   from "@/types"             ;

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Banner />
            <Projects projects={projects.data} />
            <Members members={members.data} />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} />;
