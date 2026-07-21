import { useState, useEffect } from "react";
import { HeaderData, NavigationItems } from "@/types/navigation";
import { Hero, Logo } from "@/index";

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
            <header
                className={`fixed z-50 w-full flex flex-col justify-start items-center`}
            >
                <div
                    className={`flex items-center h-[80px] w-full max-w-[1350px]`}
                >
                    <Logo isCompact={isScrolled} />
                    <nav
                        className={`flex w-full  font-medium text-white gap-8 ${isScrolled ? "justify-start gap-8 lg:pr-40 pr-24" : "justify-center lg:gap-40"} h-full`}
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
                </div>
            </header>
            {data.isHero && <Hero />}
        </>
    );
}
