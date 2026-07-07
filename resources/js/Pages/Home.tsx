import { ReactNode       }                    from "react"                ;
import   MainLayout                           from "@/Layouts/MainLayout" ;
import { Banner          ,Projects, Members } from "@/index"              ;
import { HomePageProps   }                    from "@/types"              ;
import { NavigationItems }                    from "@/types/navigation"   ;

const homePageNavigationItems: NavigationItems[] = [
    { title: "نمونه کار", id: "projects" },
    { title: "اعضا"     , id: "members"  },
    { title: "مشخصات ما", id: "about"    },
];

export default function Home({ projects, members }: HomePageProps) {
    return (
        <>
            <Banner />
            <Projects projects={projects.data} />
            <Members members={members.data} />
        </>
    );
}

Home.layout = (page: ReactNode) => <MainLayout children={page} navigationList={homePageNavigationItems}/>;
