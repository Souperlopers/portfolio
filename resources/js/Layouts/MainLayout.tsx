import { ReactNode } from "react";
import Header from "@/Components/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div
        className="
        min-h-screen bg-neutral-800 font-vazir
        flex flex-col justify-start items-center pb-5
        "
        dir="rtl"
        >
            <Header />
            {children}
        </div>
    );
}
