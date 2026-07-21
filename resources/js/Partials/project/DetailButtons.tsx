import { ProjectLinks } from "@/types/project";
import { Link } from "@inertiajs/react";

export default function DetailButtons ({ links }: { links: ProjectLinks }){
     const linkLoop = Object.entries(links).filter(
        (link: string[]) => link[1] !== null,
    );

    return (
        <>
            {linkLoop.map((link) => (
                <Link key={link[0]} href={link[1]}>
                    <button className={`bg-btn-primary hover:bg-btn-hover duration-300 rounded-lg md:w-32 w-24 px-3 py-2 text-[15px]`}>
                        <span>{link[0]}</span>
                    </button>
                </Link>
            ))}
        </>
    );
}