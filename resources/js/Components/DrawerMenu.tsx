import { NavigationItems } from "@/types/navigation";

const DrawerMenu = ({ list, onItemClick }: { 
    list: NavigationItems[]; 
    onItemClick: (item: NavigationItems) => void;
}) => {

    const closeDrawer = () => {
        const drawer = document.getElementById("my-drawer-1") as HTMLInputElement | null;
        if (drawer) {
            drawer.checked = false;
        }
    };

    return (
        <div dir="ltr">
            <div className="drawer">
                <input
                    id="my-drawer-1"
                    type="checkbox"
                    className="drawer-toggle"
                />

                <div className="drawer-content">
                    <label htmlFor="my-drawer-1" className="btn btn-square btn-ghost drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                </div>

                <div className="drawer-side">
                    <label 
                        htmlFor="my-drawer-1" 
                        aria-label="close sidebar" 
                        className="drawer-overlay"
                    ></label>
                    
                    <ul className="menu bg-base-200 min-h-full w-60 p-4 text-base-content text-base">
                        {list.map((item, index) => (
                            <li key={index}>
                                <a 
                                    onClick={() => {
                                        onItemClick(item);   
                                        closeDrawer();       
                                    }}
                                    className="cursor-pointer py-2"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DrawerMenu;