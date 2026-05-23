import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div
            className="
        bg-neutral-800 font-vazir
        flex flex-col gap-5
        "
            dir="rtl"
        >
            {children}
        </div>
    );
}
