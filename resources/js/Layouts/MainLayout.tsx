import { ReactNode } from "react";

export default function Authenticated({ children }: { children: ReactNode }) {
    return (
        <div>
            this is the main layout <br />
            {children}
        </div>
    );
}
