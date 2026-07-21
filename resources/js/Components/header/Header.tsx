import { useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import { HeaderData, NavigationItems } from "@/types/navigation";
import Hero from "@/Partials/home/Hero";

export default function Header({ data }: { data: HeaderData }) {
    const navigationList = data.navList;

    const [activeSection, setActiveSection] = useState(
        navigationList[0].id || "",
    );

    // scroll
    const scrollToSection = (item: NavigationItems) => {
        if (item.href) {
            window.location.href = item.href;
            return;
        }
        if (!item.id) return;
        const element = document.getElementById(item.id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    //observer for activate section
    useEffect(() => {
        const sections = navigationList.map((item) => item.id) || [];
        const observers: IntersectionObserver[] = [];
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

    /* THIS WAS IN MAIN HEADER
    
    // check resize
    const [isMobiled, setIsMobiled] = useState(
        () => typeof window !== "undefined" && window.innerWidth < 600,
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobiled(window.innerWidth < 600);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Animation
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const headerY = useTransform(
        scrollY,
        [0, isMobiled ? 100 : 400],
        [isMobiled ? "140px" : "510px", isMobiled ? "0px" : "0px"],
    );
    const itemFontSize = useTransform(
        scrollY,
        [0, 100],
        [isMobiled ? "14px" : "30px", isMobiled ? "14px" : "18px"],
    );

    const headerBg = useTransform(
        scrollY,
        [0, isMobiled ? 100 : 200],
        [
            "linear-gradient(to top, rgba(51, 51, 51, 0), rgba(37, 37, 38, 0))",
            "linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))",
        ],
    );
*/

    return (
        <>
            {data.isHero && <Hero />}
            this is header
        </>
    );

    /* HEADER RETURN
return (
        <div
            className={`navbar shadow-sm fixed z-40 flex lg:justify-start justify-between items-center py-3`}
            style={{ background: 'linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))' }}
        >
            <Logo />
            <div className={'lg:flex hidden w-full justify-start gap-8 lg:mr-10 mr-6 font-medium md:text-[16px] text-[14px] text-white'}>
                {navigationList.map((item) => (
                    <button
                        key={item.title}
                        onClick={() => scrollToSection(item)}
                        className={`relative py-2 transition-all duration-200 focus-visible:outline-none text-white hover:text-white ${activeSection != item.id && 'opacity-60 hover:opacity-90'}`}
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
            <div className="lg:hidden flex">
                <DrawerMenu
                    list={navigationList}
                    onItemClick={scrollToSection}
                />
            </div>
        </div>
    );
*/
    /* MAIN HEADER RETURN
return (
    <motion.header
            style={{ y: headerY, background: headerBg }}
            className={`fixed z-50 w-full flex flex-col justify-start items-center`}
        >
            <motion.div className={`flex items-center h-[80px] w-full max-w-[1350px]`}>
                <motion.div
                    className={`flex w-full  font-medium text-white gap-8 ${isScrolled ? 'justify-start gap-8 lg:pr-40 pr-24' : 'justify-center lg:gap-40'} h-full`}
                >
                    {navigationList.map((item) => (
                        <motion.button
                            key={item.title}
                            style={{ fontSize: itemFontSize }}
                            onClick={() => scrollToSection(item)}
                            className={`${navItemStyle} ${activeSection != item.id && activeNotItemStyle}`}
                        >
                            <span>{item.title}</span>

                            {activeSection === item.id && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className={'absolute bottom-0 left-0 right-0 h-[2px] bg-primary'}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </motion.header>
    );
*/
}
