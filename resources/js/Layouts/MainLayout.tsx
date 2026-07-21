import { useState } from "react";
import { ReactNode } from "react";
import { Header, Loading } from "@/index";
import { HeaderData } from "@/types/navigation";

export default function MainLayout({ children, HeaderData}: { children: ReactNode, HeaderData: HeaderData}) {
    const [isloading, setIsloading] = useState(false);

    /* does this even work?
        const [isloading, setIsloading] = useState(false);

        useEffect(() => {
            const removeStart = router.on("start", () => setIsloading(true));
            const removeFinish = router.on("finish", () => setIsloading(false));

            return () => {
                removeStart();
                removeFinish();
            };
        }, [navigationList]);
    */

    return (
        <>
            {isloading && <Loading />}
            <Header data={HeaderData} />
            <main className="flex flex-col justify-start items-center">
                {children}
            </main>
        </>
    );
}
