import { ProjectLinks } from "@/types/project";
import { Link } from "@inertiajs/react";

const DetailButtons = ({ links }: { links: ProjectLinks }) => {
    
    const linkLoop = Object.entries(links).filter(
        (link: string[]) => link[1] !== null,
    );

    return (
        <>
            {linkLoop.map((link) => (
                <Link key={link[0]} href={link[1]}>
                    <button className={`bg-sky-500 rounded w-32 px-3 py-2 font-semibold`}>
                        <span>{link[0]}</span>
                    </button>
                </Link>
            ))}
        </>
    );
};

export default DetailButtons;
