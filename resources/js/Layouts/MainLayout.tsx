import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div
        className="
        min-h-screen bg-neutral-800 font-vazir
        flex flex-col justify-start items-center
        "
        dir="rtl"
        >
            {children}
        </div>
    );
}
