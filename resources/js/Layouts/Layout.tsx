import { useState        , useEffect } from "react"              ;
import { router                      } from "@inertiajs/react"   ;
import { ReactNode                   } from "react"              ;
import { Loading         , Header    } from "@/index"            ;
import { NavigationItems             } from "@/types/navigation" ;

//style
const containerStyle = "min-h-screen overflow-hidden bg-bg-primary font-vazir pb-5 flex flex-col justify-start items-center";
const childrenStyle = "w-full max-w-[1350px] lg:py-5 lg:px-20 px-5 mt-24"

export default function Layout({ children, navigationList }: { children: ReactNode, navigationList: NavigationItems[]}) {
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        const removeStart = router.on("start", () => setIsloading(true));
        const removeFinish = router.on("finish", () => setIsloading(false));

        return () => {
            removeStart();
            removeFinish();
        };
    }, [navigationList]);

    return (
        <div dir="rtl" className={containerStyle}>
            {isloading && <Loading />}
            <Header navigationList={navigationList}/>
            <div className={childrenStyle}>
                {children}
            </div>
        </div>
    );
}
