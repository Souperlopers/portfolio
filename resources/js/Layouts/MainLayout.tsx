import { ReactNode } from "react";

export default function Authenticated({ children }: { children: ReactNode }) {
    return (
        <div className="lg:p-5 p-2 bg-black" dir="rtl">
            {children}
        </div>
    );
}
