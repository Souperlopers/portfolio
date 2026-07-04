import { useState , useEffect       } from "react"           ;
import { ReactNode                  } from "react"           ;
import { router   , Head            } from "@inertiajs/react";
import { Banner   , Loading, Header } from "@/index"         ;

export default function MainLayout({ children }: { children: ReactNode }) {
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        const removeStart = router.on("start", () => setIsloading(true));
        const removeFinish = router.on("finish", () => setIsloading(false));

        return () => {
            removeStart();
            removeFinish();
        };
    }, []);

    return (
        <div
            dir="rtl"
            className="min-h-screen relative
            overflow-hidden pb-5
            bg-[#252526] font-vazir
            flex flex-col justify-start items-center"
            >
            <Head      title="SouperLopers" />
            {isloading && <Loading />}
            <Header    />
            <Banner    />
            {children }
        </div>
    );
}
