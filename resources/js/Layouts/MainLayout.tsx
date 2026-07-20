import { useState        , useEffect  } from "react"              ;
import { ReactNode                    } from "react"              ;
import { router          , Head       } from "@inertiajs/react"   ;
import { Loading         , MainHeader } from "@/index"            ;
import { NavigationItems              } from "@/types/navigation" ;

export default function MainLayout({ children, navigationList}: { children: ReactNode, navigationList: NavigationItems[]}) {
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        const removeStart  = router.on("start" , () => setIsloading(true ));
        const removeFinish = router.on("finish", () => setIsloading(false));

        return () => {
            removeStart();
            removeFinish();
        };
    }, [navigationList]);

    return (
        <div dir="rtl" className={`min-h-screen overflow-x-hidden bg-bg-primary font-vazir flex flex-col justify-start items-center`}>
            <Head title={'SouperLopers'} />
            {isloading && <Loading />}
            {/* <MainHeader  navigationList={navigationList}  /> */}
            {children }
        </div>
    );
}
