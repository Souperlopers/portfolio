import { useState, useEffect } from "react";
import { NavigationItem } from "@/types/navigation";
import { Hero, Logo } from "@/index";

export default function Header({
    navigationList,
    hasHero = false,
}: {
    navigationList: NavigationItem[];
    hasHero: boolean;
}) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // scroll
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
            console.log(scrollY);
            console.log(scrollY > threshold);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const isBelowHero = hasHero && !isScrolled

    return (
        <>
            <Logo isCompact={hasHero ? isScrolled : true} />
            {hasHero && <Hero />}
            <header
                className={`sticky top-0 h-fit z-50 flex justify-center items-center gap-10`}
            >
                <div id="header-logo" className={`aspect-[313/150] w-[120px] ${isBelowHero && "hidden"}`}></div>
                <nav
                    className={`flex justify-start items-center font-medium transition-position will-change-transform duration-500 ${isBelowHero ? "gap-60 text-4xl" : "w-full gap-20 text-xl"}`}
                >
                    {navigationList.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => scrollToSection(item)}
                            className={`h-fit text-white text-nowrap ${isBelowHero ? "bg-slate-800 p-2 rounded-xl" : activeSection === item.id ? "border-b border-primary" : "opacity-60 hover:opacity-90"}`}
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>
            </header>
        </>
    );
}
