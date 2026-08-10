import { RefObject, useEffect, useRef, useState } from "react"
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "@/lib/store"
import { setTheme } from "@/lib/store/themeSlice"
import clsx from "clsx/lite"

const options = [
	{ value: "light", icon: <FiSun className="h-4 w-4" />, label: "حالت روشن" },
	{
		value: "system",
		icon: <FiMonitor className="h-4 w-4" />,
		label: "حالت سیستم",
	},
	{
		value: "dark",
		icon: <FiMoon className="h-4 w-4" />,
		label: "حالت تاریک",
	},
]

export default function ThemeSwitch({
	isCompact,
	className,
}: {
	isCompact: boolean
	className?: string | boolean
}) {
	const theme = useAppSelector((s) => s.theme.theme)
	const dispatch = useAppDispatch()
	const [open, setOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	// determine which option(theme) is active
	const activeIndex = options.findIndex((o) => o.value === theme)
	const activeOption = options[activeIndex]

	// theme switching logic
	useEffect(() => {
		const osIsDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches

		const currentTheme =
			theme === "system" ? (osIsDark ? "dark" : "light") : theme

		const html = document.documentElement

		html.setAttribute("data-theme", currentTheme)
		html.classList.toggle("dark", currentTheme === "dark")
	}, [theme])

	// listen to system theme changes and update the theme accordingly
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

		function handleThemeChange(e: MediaQueryListEvent) {
			if (theme !== "system") return

			const currentTheme = e.matches ? "dark" : "light"

			const html = document.documentElement

			html.setAttribute("data-theme", currentTheme)
			html.classList.toggle("dark", currentTheme === "dark")
		}

		mediaQuery.addEventListener("change", handleThemeChange)
		return () => {
			mediaQuery.removeEventListener("change", handleThemeChange)
		}
	}, [])

	// close drpdown menu logic
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () =>
			document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	return (
		<div className={clsx(className)}>
			{/* this is dispayed on desktop */}
			<div
				role="radiogroup"
				className={clsx(
					"relative p-1", // base
					isCompact ? "hidden" : "inline-flex items-center gap-0.5", // display
					"h-11", // dimension
					"border-base-300 rounded-full border", // border
					"bg-base-300", // background
				)}
			>
				<span
					className={clsx(
						"h-9 w-9", // dimension
						"absolute rounded-full", // base
						"bg-accent", // background
						"transition-all duration-300", // animation
					)}
					style={{ transform: `translateX(${activeIndex * -38}px)` }}
				/>

				{options.map((option) => (
					<button
						key={option.value}
						type="button"
						onClick={() => dispatch(setTheme(option.value))}
						className={clsx(
							"h-9 w-9", // dimension
							"relative z-10 rounded-full", // base
							"flex items-center justify-center", // flex
							"hover:cursor-pointer", // hover
							"transition-all duration-300", // animation
							theme === option.value
								? "text-base-content hover:bg-accent" // active theme
								: "text-primary hover:bg-base-200", // not active theme
						)}
					>
						{option.icon}
					</button>
				))}
			</div>

			{/* this is dispayed on mobile */}
			<div
				ref={containerRef}
				className={clsx(
					"relative", // base
					isCompact ? "inline-block" : "hidden", // display
				)}
			>
				<div
					className={clsx(
						"h-11 w-11", // dimension
						"relative rounded-full p-1", // base
						"bg-base-100", // background
						"flex items-center justify-center align-middle", // flex
						"border-base-300 border", // border
					)}
				>
					<button
						type="button"
						onClick={() => setOpen((prev) => !prev)}
						className={clsx(
							"h-9 w-9", // dimension
							"flex items-center justify-center", // flex
							"border-base-300 border", // border
							"text-base-content cursor-pointer rounded-full", // base
							"bg-accent", // background
							"transition-all duration-300", // animation
						)}
					>
						{activeOption.icon}
					</button>
				</div>

				<div
					role="listbox"
					className={clsx(
						"absolute top-13 z-50", // position
						"flex flex-col gap-0.5", // flex
						"transition-all duration-300", // animation
						"border-neutral/0 rounded-full", // border
						open // border
							? "bg-base-100 border p-1 shadow-lg"
							: "pointer-events-none border-0 px-1",
					)}
				>
					{options.map((option, index) => (
						<button
							key={option.value}
							type="button"
							role="option"
							onClick={() => {
								dispatch(setTheme(option.value))
								setOpen(false)
							}}
							style={{
								transform: !open
									? `translateY(${-(index + 1) * 20}px)`
									: "",
							}}
							className={clsx(
								"h-9 w-9", // dimension
								"cursor-pointer rounded-full", // base
								"flex items-center justify-center", // flex
								"hover:bg-accent", // hover
								"transition-all duration-300", // animation
								!open && "opacity-0",
								theme === option.value
									? "bg-accent text-base-content hover:bg-accent"
									: "text-primary hover:bg-base-300",
							)}
						>
							{option.icon}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
