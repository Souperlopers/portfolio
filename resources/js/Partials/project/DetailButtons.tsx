import { ProjectDetailsButton } from "@/types/project";
import { Link } from "@inertiajs/react";

const DetailButtons = ({ data }: { data: ProjectDetailsButton[] }) => {    
    return (
        <>
            {data.map((buttonInfo) => (
                <Link href={buttonInfo.url}>
                    <button className={`${buttonInfo.color} rounded w-32 px-3 py-2 font-semibold`}>
                        <span>{buttonInfo.name}</span>
                    </button>
                </Link>
            ))}
        </>
    );
};

export default DetailButtons;
