import { useState        , useEffect } from "react"              ;
import { router                      } from "@inertiajs/react"   ;
import { ReactNode                   } from "react"              ;
import { Loading         , Header    } from "@/index"            ;
import { NavigationItems             } from "@/types/navigation" ;

//style
const containerStyle = "min-h-screen overflow-hidden bg-[#252526] font-vazir pb-5";

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
            {children}
        </div>
    );
}
