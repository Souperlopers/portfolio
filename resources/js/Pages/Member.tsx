import { ReactNode       }                           from "react"              ;
import   Layout                                      from "@/Layouts/Layout"   ;
import { MemberPageProps }                           from "@/types"            ;
import { Head            }                           from "@inertiajs/react"   ;
import { Profile         , MemberProjects, Contact } from "@/index"            ;
import { NavigationItems }                           from "@/types/navigation" ;

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
        <div className="flex flex-col lg:gap-16 gap-5 w-full max-w-[1350px] lg:py-5 lg:px-20 px-5 mt-20">
            <Head title={`SouperLopers | ${info.name}`} />
            <div id="profile" className="scroll-mt-20">
                <Profile info={info} />
            </div>
            <div id="projects" className="scroll-mt-20">
                <MemberProjects projects={projects} />
            </div>
            <div id="contact" className="scroll-mt-20">
                <Contact info={info} />
            </div>
        </div>
    );
}

Member.layout = (page: ReactNode) => <Layout children={page} navigationList={memberPageNavigationItems} />;
