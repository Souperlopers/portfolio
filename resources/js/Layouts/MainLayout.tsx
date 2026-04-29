import { ReactNode } from "react";

export default function Authenticated({ children }: { children: ReactNode }) {
    return (
        <div className="p-5" dir="rtl">
            {children}
        </div>
    );
}
