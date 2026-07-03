import { ReactNode } from "react";
import Header from "@/Components/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div
        className="min-h-screen overflow-hidden pb-5 
        bg-[#252526] font-vazir
        flex flex-col justify-start items-center"
        dir="rtl"
        >
            <Header />
            {children}
        </div>
    );
}
