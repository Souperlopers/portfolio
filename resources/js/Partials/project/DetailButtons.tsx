import { ProjectLinks } from "@/types/project";
import { Link } from "@inertiajs/react";

//style
const buttonStyle = "bg-sky-500 rounded md:w-32 w-24 px-3 py-2 md:font-semibold md:text-base text-sm";

const DetailButtons = ({ links }: { links: ProjectLinks }) => {
    
    const linkLoop = Object.entries(links).filter(
        (link: string[]) => link[1] !== null,
    );

    return (
        <>
            {linkLoop.map((link) => (
                <Link key={link[0]} href={link[1]}>
                    <button className={buttonStyle}>
                        <span>{link[0]}</span>
                    </button>
                </Link>
            ))}
        </>
    );
};

export default DetailButtons;
