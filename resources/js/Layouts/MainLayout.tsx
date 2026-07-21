import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Header, Loading } from "@/index";
import { HeaderData } from "@/types/navigation";
import { router } from "@inertiajs/react";

export default function MainLayout({
    children,
    HeaderData,
}: {
    children: ReactNode;
    HeaderData: HeaderData;
}) {
    const [isloading, setIsloading] = useState(false);
    const navigationList = HeaderData.navList;

    useEffect(() => {
        const removeStart = router.on("start", () => setIsloading(true));
        const removeFinish = router.on("finish", () => setIsloading(false));

        return () => {
            removeStart();
            removeFinish();
        };
    }, [navigationList]);

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
