import { ProjectLinks } from "@/types/project";
import { Link } from "@inertiajs/react";
import { log } from "console";

const DetailButtons = ({ links }: { links: ProjectLinks }) => {
    console.log(links);
    
    const linkLoop = Object.entries(links).filter(
        (link: string[]) => link[1] !== null,
    );

    return (
        <>
            {linkLoop.map((link) => (
                <Link key={link[0]} href={link[1]}>
                    <button className={`bg-neutral-500 rounded w-32 px-3 py-2 font-semibold`}>
                        <span>{link[0]}</span>
                    </button>
                </Link>
            ))}
        </>
    );
};

export default DetailButtons;
