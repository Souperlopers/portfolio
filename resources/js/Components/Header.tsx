import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    const [navigationList, setNavigationList] = useState(homePageNavigationItems);
    const pathname = usePage().url;

    const { scrollY } = useScroll();

    const headerY = useTransform(scrollY, [0, 200], ["500px", "10px"]);
    
    const logoOpacity = useTransform(scrollY, [0, 300], [0, 1]);
    const headerBg = useTransform(scrollY, [0, 300], ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]);

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
            className="fixed -translate-x-1/2 z-50 w-full max-w-[1350px] px-5 pointer-events-none"
        >
            <motion.div
                style={{ backgroundColor: headerBg }}
                className="flex items-center px-8 py-4 "
            >
                <motion.div style={{ opacity: logoOpacity }} className="flex items-center">
                    <Link href="/">
                        <img
                            src="/assets/images/logo.svg"
                            alt="SouperLopers"
                            className=""
                        />
                    </Link>
                </motion.div>

                <nav className="flex justify-center items-center gap-16 text-3xl ml-20 font-medium text-white w-full">
                    {navigationList.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => scrollToSection(item)}
                            className="hover:text-sky-300 transition-colors duration-300 w-48"
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>
            </motion.div>
        </motion.header>
    );
};

export default Header;