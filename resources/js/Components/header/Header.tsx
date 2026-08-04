import { useState, useEffect, useRef } from "react"
import { NavigationItem } from "@/types/navigation"
import { Hero, Logo } from "@/index"
import Hamburger from "./Hamburger"
import ThemeSwitch from "../ThemeSwitch"
import { clsx } from "clsx/lite"
import { router } from "@inertiajs/react"

export default function Header({
	navigationList,
	hasHero = false,
}: {
	navigationList: NavigationItem[]
	hasHero: boolean
}) {
	const [activeSection, setActiveSection] = useState<string | null>(null)
	const [showHamburger, setShowHamburger] = useState(false)
	const headerRef = useRef<HTMLElement>(null)
	const logoRef = useRef<HTMLDivElement>(null)
	const navRef = useRef<HTMLElement>(null)
	const lastElemsRef = useRef<HTMLDivElement>(null)

	// scroll to navbar item on click
	const scrollToSection = (item: NavigationItem) => {
		if (item.href) {
			router.get(item.href)
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

	// observer for activate section
	useEffect(() => {
		const visibleSections = new Map<string, number>()

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSections.set(
							entry.target.id,
							entry.boundingClientRect.top,
						)
					} else {
						visibleSections.delete(entry.target.id)
					}
				})

				if (visibleSections.size === 0) return

				const active = [...visibleSections.entries()].sort(
					(a, b) => Math.abs(a[1]) - Math.abs(b[1]),
				)[0][0]

				setActiveSection(active)
			},
			{
				root: null,
				rootMargin: "-20% 0px -20% 0px",
				threshold: 0,
			},
		)

		navigationList.forEach((item) => {
			if (!item.id) return
			const element = document.getElementById(item.id)
			if (element) {
				observer.observe(element)
			}
		})

		return () => observer.disconnect()
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
	}, [])

	// determine header position
	const isBelowHero = hasHero && !isScrolled // other pages || scrolled hero page

	// Check if there's enough space for the navbar
	useEffect(() => {
		const checkSpace = () => {
			if (!navRef.current || !headerRef.current) return

			const header = headerRef.current
			const logo = logoRef.current
			const nav = navRef.current
			const lastElems = lastElemsRef.current

			// Get available width (header width minus logo and theme switch)
			const headerWidth = header.offsetWidth
			const logoWidth = logo?.offsetWidth || 0
			const lastElemsWidth = lastElems?.offsetWidth || 0
			const gaps = 120
			const availableWidth =
				headerWidth - logoWidth - lastElemsWidth - gaps

			// Temporarily make nav visible to measure
			nav.style.display = "flex"
			nav.style.visibility = "hidden"

			// Check if nav overflows
			const navWidth = nav.scrollWidth
			const offset = 20
			let needsHamburger = showHamburger
			if (availableWidth < navWidth - offset) needsHamburger = true
			if (availableWidth > navWidth + offset) needsHamburger = false

			// Reset nav styles
			nav.style.display = ""
			nav.style.visibility = ""

			setShowHamburger(needsHamburger)
		}

		checkSpace()
		window.addEventListener("resize", checkSpace)

		return () => {
			window.removeEventListener("resize", checkSpace)
		}
	}, [navigationList, showHamburger, isBelowHero])

	return (
		<>
			<Logo isCompact={hasHero ? isScrolled : true} />
			{hasHero && <Hero />}

			<div // this element is to fill header above when it transits from below hero to on top of screen 
				className={clsx(
					hasHero && isScrolled ? "h-[calc(100vh-450px-80px)]" : "h-0"
				)}
			/>

			<header
				ref={headerRef}
				className={clsx(
					"sticky z-50", // basic
					"flex items-center", // flex
					"max-w-[100vw]", // avoid layout shifting when transiting from hero to on-top
					isBelowHero
						? clsx(
								"flex-col justify-center", // flex
								"h-[calc(100vh-450px)]", // dimension (fill height left from hero)
								"min-h-[200px]", // avoid conflicting with main content when height is too low
							)
						: clsx(
								"justify-between gap-5 lg:gap-16", // flex
								"top-0", // position
								"h-[80px]", // dimension
								"px-5 py-2", // padding
								"bg-gradient-to-b from-base-100 to-base-100/50 backdrop-blur-lg", // background
								"border-b border-base-200", // border
								"shadow-[0_10px_30px_rgba(255,255,255,.05)]", // shadow
							),
				)}
			>
				<div
					ref={logoRef}
					id="header-logo"
					className={clsx(
						isBelowHero && "fixed right-5", // hide when under hero
						"aspect-[200/150] h-[50px]", // dimension
					)}
				/>

				<nav
					ref={navRef}
					className={clsx(
						"overflow-y-hidden", // hide vertical overflow
						isBelowHero
							? clsx(
									"flex flex-col items-stretch justify-evenly lg:flex-row", // flex
									"h-full w-fit lg:h-fit lg:w-full", // dimension
									"max-w-[1500px]", // avoid being full screen on very large screens
								)
							: clsx(
									showHamburger ? "hidden" : "flex", // Show/hide based on available space
									"w-min", // dimension
									"flex-row items-center justify-center gap-14 lg:justify-start", // flex
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
											"text-xl", // text dimmension
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
				<div ref={lastElemsRef} className="flex flex-row-reverse gap-5">
					<Hamburger
						navList={navigationList}
						clickHandler={scrollToSection}
						classNames={clsx(
							isBelowHero
								? "hidden"
								: clsx(
										showHamburger ? "visible" : "hidden",
										"min-w-[66px]", // equal to logo width to center navbar
									),
						)}
					/>
					<ThemeSwitch isCompact={showHamburger} className={isBelowHero && "hidden"} />
				</div>
			</header>
		</>
	)
}
