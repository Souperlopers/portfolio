import { useState, useEffect } from "react";
import { NavigationItem } from "@/types/navigation";
import { Hero, Logo } from "@/index";
import Hamburger from "./Hamburger";

export default function Header({
    navigationList,
    hasHero = false,
}: {
    navigationList: NavigationItem[];
    hasHero: boolean;
}) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // scroll to navbar item on click
    const scrollToSection = (item: NavigationItem) => {
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

    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 100; // pixels from top
            setScrolled(scrollY > threshold);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const isBelowHero = hasHero && !isScrolled // other pages || scrolled hero page

    return (
        <>
            <Logo isCompact={hasHero ? isScrolled : true} />
            {hasHero && <Hero />}
            <header
                className={`sticky top-0 z-50 flex justify-center items-center gap-10 ${isBelowHero ? "h-[calc(100vh-550px)]" : "h-[80px] py-2 bg-gradient-to-b from-[#010103] via-[#050912]/90 to-[#121927]/80 backdrop-blur-lg"} transition-all will-change-transform duration-300 ease-in-out`}
            >
                <div className={`navbar-start`}>
                    <div id="header-logo" className={`${isBelowHero && "hidden"} aspect-[200/150] w-[50%] transition-all will-change-transform duration-300 ease-in-out`}></div>
                </div>
                <nav
                    className={`flex navbar-center ${isBelowHero ? "flex-col h-full justify-evenly items-stretch w-fit" : "hidden flex-row justify-start items-center w-full"} transition-all will-change-transform duration-300 ease-in-out`}
                >
                    {navigationList.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => scrollToSection(item)}
                            className={`h-fit font-medium text-white text-nowrap text-3xl xs:text-5xl p-2 ${isBelowHero ? "bg-slate-800 rounded-xl" : activeSection === item.id ? "border-b border-primary" : "opacity-60 hover:opacity-90"} transition-all will-change-transform duration-300 ease-in-out`}
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>
                <div className={`navbar-end`}>
                    {!isBelowHero && <Hamburger navList={navigationList} classNames={`${isBelowHero && "hidden"}`} clickHandler={scrollToSection} />}
                </div>
            </header>
        </>
    );
}
