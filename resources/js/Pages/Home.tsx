import { ReactNode       }                           from "react"                ;
import   MainLayout                                  from "@/Layouts/MainLayout" ;
import { Banner          ,Projects, Members, About } from "@/index"              ;
import { HomePageProps   }                           from "@/types"              ;
import { NavigationItems }                           from "@/types/navigation"   ;

const homePageNavigationItems: NavigationItems[] = [
    { title: "نمونه کار", id: "projects" },
    { title: "توسعه‌دهندگان"     , id: "members"  },
    { title: "تماس با ما", id: "about"    },
];

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Banner />
            <Projects projects={projects.data} />
            <Members members={members.data} />
            <About />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} navigationList={homePageNavigationItems}/>;
