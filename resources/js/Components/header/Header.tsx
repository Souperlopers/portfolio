import { useState, useEffect } from "react";
import { NavigationItem } from "@/types/navigation";
import { Hero, Logo } from "@/index";
import { Link } from "@inertiajs/react";

export default function Header({
    navigationList,
    hasHero = false,
}: {
    navigationList: NavigationItem[];
    hasHero: boolean;
}) {
    const [activeSection, setActiveSection] = useState(
        navigationList[0].id || "",
    );

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

    return (
        <>
            <Logo isCompact={hasHero ? isScrolled : true} />
            {hasHero && <Hero />}
            <header
                className={`sticky top-0 h-20 z-50 w-full flex justify-start items-center`}
            >
                <Link href="/" id="header-logo" className="w-[150px]"></Link>
                <nav
                    className={`flex w-full font-medium text-white gap-8 h-full ${hasHero && !isScrolled ? "justify-center lg:gap-40" : "justify-start gap-8"}`}
                >
                    {navigationList.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => scrollToSection(item)}
                            className={`relative py-2 transition-all duration-200 focus-visible:outline-none text-white hover:text-white ${activeSection != item.id && "opacity-60 hover:opacity-90"}`}
                        >
                            <span>{item.title}</span>

                            {activeSection === item.id && (
                                <span
                                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-primary`}
                                />
                            )}
                        </button>
                    ))}
                </nav>
            </header>
        </>
    );
}
