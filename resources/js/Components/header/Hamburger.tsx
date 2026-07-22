import { NavigationItem } from "@/types/navigation";

export default function Hamburger({ navList, classNames, clickHandler }: { navList: NavigationItem[], classNames: string, clickHandler: any }) {
    const innerClickHandler = (e: any, item: NavigationItem) => {
        e.preventDefault()
        clickHandler(item)
    }

    return (
        <div className={`dropdown text-center ${classNames}`}>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="left-0 menu menu-xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit p-2 shadow">
                {navList.map(navEl => (
                    <li key={navEl.title}>
                        <button onClick={(e) => innerClickHandler(e, navEl)} className="w-full">{navEl.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}