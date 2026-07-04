import { ReactNode } from "react";
import Header from "@/Components/Header";
import { Banner, Logo } from "@/index";

export default function MainLayout({ children }: { children: ReactNode }) {

    return (
        <div
            dir="rtl"
            className="min-h-screen relative
                    overflow-hidden pb-5 
                    bg-[#252526] font-vazir
                    flex flex-col justify-start items-center"
        >
            <Header />
            <Logo />
            <Banner />
            {children}
        </div>
    );
}
