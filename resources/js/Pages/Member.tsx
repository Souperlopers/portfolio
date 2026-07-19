import { ReactNode       }                           from "react"              ;
import   Layout                                      from "@/Layouts/Layout"   ;
import { MemberPageProps }                           from "@/types"            ;
import { Head            }                           from "@inertiajs/react"   ;
import { Profile         , MemberProjects, Contact } from "@/index"            ;
import { NavigationItems }                           from "@/types/navigation" ;

//style
const scrollStyle = "scroll-mt-20";

const memberPageNavigationItems: NavigationItems[] = [
    { title: "خانه"                , href : "/"        },
    { title: "مهارت ها"            , id   : "profile"  },
    { title: "پروژه های مربوطه"    , id   : "projects" },
    { title: "تماس با توسعه‌دهنده" , id   : "contact"  },
];

export default function Member({ member }: MemberPageProps) {
    const info     = member.data               || {};
    const projects = member.data.contributions || [];

    return (
        <div className="flex flex-col gap-10">
            <Head title={`SouperLopers | ${info.name}`} />
            <div id="profile" className={scrollStyle}>
                <Profile info={info} />
            </div>
            <div id="projects" className={scrollStyle}>
                <MemberProjects projects={projects} />
            </div>
            <div id="contact" className={scrollStyle}>
                <Contact info={info} />
            </div>
        </div>
    );
}

Member.layout = (page: ReactNode) => <Layout children={page} navigationList={memberPageNavigationItems} />;
