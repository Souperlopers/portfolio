import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
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
    const pathname = usePage().url;

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const headerY = useTransform(scrollY, [0, 400], ["500px", "0px"]);

    const headerBg = useTransform(
        scrollY,
        [0, 700],
        [
            "linear-gradient(to top, rgba(51, 51, 51, 0), rgba(37, 37, 38, 0))",
            "linear-gradient(to top, rgba(51, 51, 51, 0.99), rgba(37, 37, 38, 0.99))",
        ],
    );
    const itemFontSize = useTransform(scrollY, [0, 400], ["30px", "20px"]);

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

    return (
        <motion.header
            style={{ y: headerY }}
            className="fixed -translate-x-1/2 z-50  lg:w-[1350px] w-[300px] rounded"
        >
            <motion.div
                style={{ background: headerBg }}
                className="flex items-center px-8 py-4 h-[95px]"
            >
                <motion.div
                    className={`flex ${isScrolled ? "justify-start pr-32" : "justify-center gap-40"} gap-16 ml-20 font-medium text-white w-full`}
                >
                    {navigationList.map((item) => (
                        <motion.button
                            key={item.title}
                            style={{ fontSize: itemFontSize }}
                            onClick={() => scrollToSection(item)}
                            onMouseEnter={() => setHoveredItem(item.title)}
                            className="relative py-2 text-white transition-colors duration-200 focus-visible:outline-none opacity-80 hover:opacity-100"
                        >
                            <span>{item.title}</span>

                            {hoveredItem === item.title && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500"
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
