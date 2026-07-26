import { useState, useEffect } from "react"
import { NavigationItem } from "@/types/navigation"
import { Hero, Logo } from "@/index"
import Hamburger from "./Hamburger"
import { clsx } from "clsx/lite"

export default function Header({
    navigationList,
    hasHero = false,
}: {
    navigationList: NavigationItem[]
    hasHero: boolean
}) {
    const [activeSection, setActiveSection] = useState<string | null>(null)

    // scroll to navbar item on click
    const scrollToSection = (item: NavigationItem) => {
        if (item.href) {
            window.location.href = item.href
            return
        }
        if (!item.id) return
        const element = document.getElementById(item.id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    //observer for activate section
    useEffect(() => {
        const sections = navigationList.map((item) => item.id) || []
        const observers: IntersectionObserver[] = []
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -20% 0px",
            threshold: 0,
        }

        sections.forEach((id) => {
            if (!id) return
            const element = document.getElementById(id)
            if (!element) return

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id)
                }
            }, observerOptions)

            observer.observe(element)
            observers.push(observer)
        })

        return () => observers.forEach((observer) => observer.disconnect())
    }, [navigationList])

    // calculate header breakpoint when hero exists
    const [isScrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > 415) {
                setScrolled(true)
            } else if (scrollY < 300) {
                setScrolled(false)
            }
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    // determine header position
    const isBelowHero = hasHero && !isScrolled // other pages || scrolled hero page

    return (
        <>
            <Logo isCompact={hasHero ? isScrolled : true} />
            {hasHero && <Hero />}
            <header
                className={clsx(
                    "sticky z-50", // basic
                    "flex items-center", // flex
                    "transition-all duration-300 ease-in-out will-change-transform", // animation
                    isBelowHero
                        ? clsx(
                              "flex-col justify-around", // flex
                              "h-[calc(100vh-450px)]", // dimension (fill height left from hero)
                              "min-h-[200px]", // avoid conflicting with main content when height is too low
                          )
                        : clsx(
                              "justify-between sm:justify-start", // flex
                              "top-0", // position
                              "h-[80px]", // dimension
                              "px-5 py-2", // padding
                              "bg-gradient-to-b from-[#010103] via-[#050912]/90 to-[#121927]/80 backdrop-blur-lg", // background
                              "shadow-[0_10px_30px_rgba(255,255,255,.05)]", // shadow
                          ),
                )}
            >
                <div
                    id="header-logo"
                    className={clsx(
                        isBelowHero && "hidden", // hide when under hero
                        "aspect-[200/150] h-[50px]", // dimension
                        "transition-all duration-300 ease-in-out will-change-transform", // animation
                    )}
                ></div>

                <nav
                    className={clsx(
                        "transition-all duration-300 ease-in-out will-change-transform", // animation
                        "flex", // flex
                        isBelowHero
                            ? clsx(
                                  "flex-col items-stretch justify-evenly", // flex
                                  "h-full w-fit", // dimension
                              )
                            : clsx(
                                  "flex-row items-center justify-start", // flex
                                  "w-full", // dimension
                                  "hidden sm:visible", // hide on smaller than sm
                              ),
                    )}
                >
                    {navigationList.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => scrollToSection(item)}
                            className={clsx(
                                "text-nowrap p-2 text-3xl font-medium text-white xs:text-5xl", // text
                                "transition-all duration-300 ease-in-out will-change-transform", // animation
                                "h-fit", // dimension
                                isBelowHero
                                    ? "rounded-xl bg-slate-800" // on hero
                                    : activeSection === item.id
                                      ? "border-b border-primary" // active
                                      : "opacity-60 hover:opacity-90", // not active
                            )}
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>
                <Hamburger
                    navList={navigationList}
                    clickHandler={scrollToSection}
                    classNames={isBelowHero ? "hidden" : "visible sm:hidden"}
                />
            </header>
        </>
    )
}
