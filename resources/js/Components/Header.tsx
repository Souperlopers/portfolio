import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import { NavigationItems } from "@/types/navigation";

const homePageNavigationItems: NavigationItems[] = [
    { title: "نمونه کار", id: "projects" },
    { title: "اعضا", id: "members" },
    { title: "مشخصات ما", id: "about" },
];

const projectPageNavigationItems: NavigationItems[] = [
    { title: "خانه", href: "/" },
    { title: "درباره پروژه", id: "info" },
    { title: "توسعه‌دهندگان پروژه", id: "members" },
];

const memberPageNavigationItems: NavigationItems[] = [
    { title: "خانه", href: "/" },
    { title: "مهارت های توسعه‌دهنده", id: "skills" },
    { title: "تماس با توسعه‌دهنده", id: "contact" },
];

const Header = () => {
    const [navigationList, setNavigationList] = useState(
        homePageNavigationItems,
    );

    const [activeSection, setActiveSection] = useState("projects");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const pathname = usePage().url;

    useEffect(() => {
        const headerList = [
            { path: "/projects", items: projectPageNavigationItems },
            { path: "/members", items: memberPageNavigationItems },
            { path: "/", items: homePageNavigationItems },
        ];

        const current = headerList.find((item) => pathname.includes(item.path));
        setNavigationList(current?.items || homePageNavigationItems);
    }, [pathname]);

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
        [0, 100],
        [isMobiled ? "140px" : "510px", isMobiled ? "0px" : "0px"],
    );

    const headerBg = useTransform(
        scrollY,
        [0, isMobiled ? 200 : 200],
        [
            "linear-gradient(to top, rgba(51, 51, 51, 0), rgba(37, 37, 38, 0))",
            "linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))",
        ],
    );
    const itemFontSize = useTransform(
        scrollY,
        [0, 100],
        [isMobiled ? "16px" : "30px", isMobiled ? "15px" : "20px"],
    );

    return (
        <motion.header
            style={{ y: headerY }}
            className="fixed z-50 w-full max-w-[1350px]"
        >
            <motion.div
                style={{ background: headerBg }}
                className="flex items-center h-[80px] w-full"
            >
                <motion.div
                    className={`flex w-full ${isScrolled ? "justify-start gap-8 lg:pr-40 pr-24" : "justify-center lg:gap-40 gap-8"} font-medium text-white w-full`}
                >
                    {navigationList.map((item) => (
                        <motion.button
                            key={item.title}
                            style={{ fontSize: itemFontSize }}
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
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </motion.header>
    );
};

export default Header;
