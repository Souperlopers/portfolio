import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Header, Loading } from "@/index";
import { NavigationItem } from "@/types/navigation";
import { router } from "@inertiajs/react";

export default function MainLayout({
    children,
    navigationList,
    hasHero = false,
}: {
    children: ReactNode;
    navigationList: NavigationItem[];
    hasHero?: boolean;
}) {
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
        <>
            {isloading && <Loading />}
            <Header navigationList={navigationList} hasHero={hasHero} />
            <main className="flex flex-col justify-start gap-16 items-center md:px-20 md:py-10 px-5 py-10">
                {children}
            </main>
        </>
    );
}
