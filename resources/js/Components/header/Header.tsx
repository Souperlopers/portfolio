import { useState        ,useEffect  } from 'react'              ;
import { NavigationItems             } from "@/types/navigation" ;
import { usePage                     } from "@inertiajs/react"   ;
import { motion                      } from "framer-motion"      ;
import { Logo           , DrawerMenu } from "@/index"            ;

const Header = ({navigationList}:{navigationList:NavigationItems[]}) => {
        const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const pathname = usePage().url;
    

        const [activeSection, setActiveSection] = useState("projects");
        const [hoveredItem, setHoveredItem] = useState<string | null>(null);


        const scrollToSection = (item: NavigationItems) => {
            if (item.href) {
                window.location.href = item.href;
                return;
            }
            const element = document.getElementById(item.id!);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        };
        useEffect(() => {
            const sections = ["projects", "members", "info", "profile", "contact"];
            const observers: IntersectionObserver[] = [];

            const observerOptions = {
                root: null,
                rootMargin: "-20% 0px -20% 0px",
                threshold: 0,
            };

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (!element) return;

                const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                }, observerOptions);

                observer.observe(element);
                observers.push(observer);
            });

            return () => observers.forEach((observer) => observer.disconnect());
        }, []);


    return (
        <div className="fixed z-40 w-full max-w-[1350px] flex lg:justify-start justify-between items-center py-3" 
             style={{background:  "linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))"}}>
            <Logo />
            <div
                    className={`lg:flex hidden w-full justify-start gap-8 lg:mr-10 mr-6 font-medium md:text-[20px] text-[15px] text-white`}
                >
                    {navigationList.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => scrollToSection(item)}
                            onMouseEnter={() => setHoveredItem(item.title)}
                            className={`relative ${activeSection === item.id ? "text-sky-500" : ""} py-2 text-white transition-colors duration-200 focus-visible:outline-none opacity-80 hover:opacity-100`}
                        >
                            <span>{item.title}</span>

                            {hoveredItem === item.title && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500`}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
                <div className='lg:hidden flex'>
                    <DrawerMenu list={navigationList} onItemClick={scrollToSection}/>
                </div>                
        </div>
    );
}

export default Header;
