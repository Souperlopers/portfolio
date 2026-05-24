import { useEffect, useState } from "react";
import { FolderKanban, Users } from "lucide-react";

const ScrollBar = () => {
    const [activeSection, setActiveSection] = useState("");

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const sections = ["projects", "members"];
        const observers: IntersectionObserver[] = [];

        // این تنظیمات threshold رو به یک مقدار منعطف‌تر تغییر می‌دهیم
        const observerOptions = {
            root: null, // کل صفحه (viewport)
            rootMargin: "-20% 0px -20% 0px", // بخش فعال رو در وسط صفحه نگه می‌داره
            threshold: 0, // به محض ورود، فعال بشه
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

    const items = [
        {
            id: "projects",
            label: "پروژه‌ها",
            icon: <FolderKanban size={18} />,
            rounded:
                "rounded-r-full md:rounded-t-full md:rounded-l-none md:rounded-r-none",
        },
        {
            id: "members",
            label: "کاربران",
            icon: <Users size={18} />,
            rounded:
                "rounded-l-full md:rounded-b-full md:rounded-r-full md:rounded-t-none",
        },
    ];

    return (
        <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-40 md:top-60 md:right-4 md:left-auto md:translate-x-0">
            <div className="flex flex-row md:flex-col rounded-full border border-white/15 bg-black/40 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                {items.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                group relative lg:w-12 lg:h-20 w-28 h-12 flex items-center justify-center
                                transition-all duration-300 ease-out
                                active:scale-95
                                ${item.rounded}
                                ${
                                    isActive
                                        ? "bg-white/20 text-sky-400 shadow-inner"
                                        : "text-white/75 hover:text-white hover:bg-white/10"
                                }
                            `}
                        >
                            <span
                                className={`
                                     z-10 transition-all duration-300
                                    ${isActive ? "scale-110" : "group-hover:scale-110 group-hover:-translate-y-[1px]"}
                                `}
                            >
                                {item.icon}
                            </span>

                            <span
                                className="
                                    absolute bottom-16 left-1/2 -translate-x-1/2
                                    md:right-16 md:top-1/2 md:bottom-auto md:left-auto md:-translate-y-1/2 md:translate-x-0
                                    whitespace-nowrap px-3 py-1.5 rounded-xl
                                    bg-neutral-900/85 text-white text-sm
                                    shadow-xl backdrop-blur-md
                                    opacity-0 translate-y-3 scale-95
                                    pointer-events-none
                                    transition-all duration-300 ease-out
                                    group-hover:opacity-100
                                    group-hover:translate-y-0
                                    group-hover:scale-100
                                "
                            >
                                {item.label}
                            </span>

                            {isActive && (
                                <span className="absolute md:left-1 md:top-1/2 bottom-0 -translate-y-1/2 md:w-1 md:h-8 w-8 h-1 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                            )}

                            {index === 0 && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-white/10" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ScrollBar;
