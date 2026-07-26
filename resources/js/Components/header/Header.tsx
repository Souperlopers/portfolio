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
            if (scrollY > 150) {
                setScrolled(true)
            } else if (scrollY < 100) {
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
            <div
                className={isScrolled ? "h-[calc(100vh-450px-80px)]" : "h-0"}
            />
            <header
                className={clsx(
                    "sticky z-50", // basic
                    "flex items-center", // flex
                    "max-w-[100vw] overflow-hidden", // avoid layout shifting when transiting from hero to on-top
                    isBelowHero
                        ? clsx(
                              "flex-col justify-around", // flex
                              "h-[calc(100vh-450px)]", // dimension (fill height left from hero)
                              "min-h-[200px]", // avoid conflicting with main content when height is too low
                          )
                        : clsx(
                              "justify-between gap-5 lg:gap-16", // flex
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
                        isBelowHero
                            ? clsx(
                                  "flex flex-col items-stretch justify-evenly lg:flex-row", // flex
                                  "h-full w-fit lg:h-fit lg:w-full", // dimension
								  "max-w-[1500px]", // avoid being full screen on very large screens
                              )
                            : clsx(
                                  "hidden sm:flex", // Hide on mobile, show on sm+
                                  "w-full", // dimension
                                  "flex-row items-center justify-center gap-5 lg:justify-start lg:gap-14", // flex
                              ),
                    )}
                >
                    {navigationList.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item)}
                            className={clsx(
                                "flex items-center justify-between", // flex
                                "text-nowrap font-medium text-base-content", // text common
                                "transition-all duration-300 ease-in-out will-change-transform", // animation
                                isBelowHero
                                    ? clsx(
                                          "gap-4", // content gap
                                          "rounded-xl", // container
                                          "text-3xl sm:text-4xl", // text dimmension
                                          "border border-primary/20", // border
                                          "bg-base-200/60", // background color
                                          "hover:border-primary/50 hover:bg-base-200 hover:text-primary", // hover
                                          "px-3 py-2 md:px-4 md:py-2.5", // padding
                                      )
                                    : clsx(
                                          "py-1.5", // padding
                                          "gap-2", // content gap
                                          "w-fit", // dimension
                                          "border-b border-primary", // bottom border
                                          activeSection !== item.id && // not active
                                              "border-opacity-0 opacity-60 hover:opacity-90",
                                      ),
                            )}
                        >
                            {item.content}
                        </button>
                    ))}
                </nav>
                <Hamburger
                    navList={navigationList}
                    clickHandler={scrollToSection}
                    classNames={
                        isBelowHero
                            ? "hidden"
                            : "visible sm:invisible min-w-[66px]"
                    }
                />
            </header>
        </>
    )
}
