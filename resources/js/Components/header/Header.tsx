import { useState, useEffect } from "react";
import { HeaderData, NavigationItems } from "@/types/navigation";
import Hero from "@/Partials/home/Hero";
import MainLogo from "../logo/MainLogo";

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


    const [scrolled, setScrolled] = useState(false);

    const SouperSrc = "/assets/images/logo-images/souper.svg";
    const LopersSrc = "/assets/images/logo-images/lopers.svg";
    const PtxSrc = "/assets/images/logo-images/ptx.svg";

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
            {data.isHero && <Hero />}
            {data.isHero && <MainLogo />}
            <header className={`fixed z-50 w-full flex flex-col justify-start items-center`}>
                <div className={`flex items-center h-[80px] w-full max-w-[1350px]`}>
                    <div className={`flex w-full  font-medium text-white gap-8 ${isScrolled ? "justify-start gap-8 lg:pr-40 pr-24" : "justify-center lg:gap-40"} h-full`}>
                        {navigationList.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => scrollToSection(item)}
                                className={`${navItemStyle} ${activeSection != item.id && activeNotItemStyle}`}
                            >
                                <span>{item.title}</span>

                                {activeSection === item.id && (
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-primary`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}
