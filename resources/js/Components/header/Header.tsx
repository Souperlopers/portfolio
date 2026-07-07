import { useState        ,useEffect  } from 'react'              ;
import { NavigationItems             } from "@/types/navigation" ;
import { motion                      } from "framer-motion"      ;
import { Logo           , DrawerMenu } from "@/index"            ;

//style
const constainerStyle = "fixed z-40 w-full max-w-[1350px] flex lg:justify-start justify-between items-center py-3";
const backgroundColor = "linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))";

const itemParentStyle = "lg:flex hidden w-full justify-start gap-8 lg:mr-10 mr-6 font-medium md:text-[16px] text-[14px] text-white";

const navItemStyle       = "relative py-2 transition-all duration-200 focus-visible:outline-none text-white hover:text-white";
const activeNotItemStyle = "opacity-60 hover:opacity-90"   

const underLineStyle = "absolute bottom-0 left-0 right-0 h-[2px] bg-primary";

const Header = ({navigationList}:{navigationList:NavigationItems[]}) => {
        const [activeSection, setActiveSection] = useState(navigationList[0].id || "");

        // scroll
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

        //observer for activate section
        useEffect(() => {
            const sections                          = navigationList.map((item)=>item.id) || [ ] ;
            const observers: IntersectionObserver[] =                                        [ ] ;
            setActiveSection(navigationList[0]?.id || "");

            const observerOptions = {
                root: null,
                rootMargin: "-20% 0px -20% 0px",
                threshold: 0,
            };

            sections.forEach((id) => {
                if (!id) return;
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
        }, [navigationList]);


    return (
        <div className={constainerStyle} style={{background: backgroundColor}}>
            <Logo />
            <div className={itemParentStyle}>
                {navigationList.map((item) => (
                    <button
                        key={item.title}
                        onClick={() => scrollToSection(item)}
                        className={`${navItemStyle} ${activeSection != item.id && activeNotItemStyle}`}
                    >
                        <span>{item.title}</span>
                        {activeSection === item.id && (
                            <motion.span
                                layoutId="nav-underline"
                                className={underLineStyle}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
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
