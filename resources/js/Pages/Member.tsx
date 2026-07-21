import { ReactNode       }                           from "react"              ;
import   Layout                                      from "@/Layouts/MainLayout"   ;
import { MemberPageProps }                           from "@/types"            ;
import { Head            }                           from "@inertiajs/react"   ;
import { Profile         , MemberProjects, Contact } from "@/index"            ;
import { NavigationItems }                           from "@/types/navigation" ;

export default function Member({ member }: MemberPageProps) {
    const info     = member.data               || {};
    const projects = member.data.contributions || [];

    return (
        <div className="flex flex-col gap-10">
            <Head title={`SouperLopers | ${info.name}`} />
            <div id="profile" className={`scroll-mt-20`}>
                <Profile info={info} />
            </div>
            <div id="projects" className={`scroll-mt-20`}>
                <MemberProjects projects={projects} />
            </div>
            <div id="contact" className={`scroll-mt-20`}>
                <Contact info={info} />
            </div>
        </div>
    );
}

const navList: NavigationItems[] = [
    { title: "خانه"                , href : "/"        },
    { title: "مهارت ها"            , id   : "profile"  },
    { title: "پروژه های مربوطه"    , id   : "projects" },
    { title: "تماس با توسعه‌دهنده" , id   : "contact"  },
];

Member.layout = (page: ReactNode) => <Layout children={page} HeaderData={{ navList }} />;
