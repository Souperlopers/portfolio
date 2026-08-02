"use client"

import { useEffect, useRef, useState } from "react"
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "@/lib/store"
import { setTheme } from "@/lib/store/themeSlice"

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

export default function ThemeSwitch() {
	const theme = useAppSelector((s) => s.theme.theme)
	const dispatch = useAppDispatch()
	const [open, setOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	// determine which option(theme) is active
	const activeIndex = options.findIndex((o) => o.value === theme)
	const activeOption = options[activeIndex]

	// theme swapping logic
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
		<div>
			{/* this is dispayed on desktop */}
			<div
				role="radiogroup"
				aria-label="تغییر تم"
				className="relative hidden h-11 items-center gap-0.5 rounded-full border border-base-300 bg-base-100 p-1 md:inline-flex"
			>
				{/* gold background that is transformed in desktop mode */}
				<span
					className="absolute h-9 w-9 rounded-full bg-accent transition-transform duration-300"
					style={{ transform: `translateX(${activeIndex * -38}px)` }}
				/>

				{options.map((option) => (
					<button
						key={option.value}
						type="button"
						role="radio"
						aria-checked={theme === option.value}
						aria-label={option.label}
						onClick={() => dispatch(setTheme(option.value))}
						className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:cursor-pointer hover:bg-accent ${
							theme === option.value
								? "text-base-content"
								: "text-primary"
						}`}
					>
						{option.icon}
					</button>
				))}
			</div>

			{/* this is dispayed on mobile */}
			<div ref={containerRef} className="relative inline-block md:hidden">
				<div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-base-300 bg-base-100 p-1 align-middle">
					<button
						type="button"
						aria-haspopup="listbox"
						aria-expanded={open}
						aria-label="تغییر تم"
						onClick={() => setOpen((prev) => !prev)}
						className="flex h-9 w-9 items-center justify-center rounded-full border border-base-300 bg-accent text-base-content transition-colors hover:cursor-pointer"
					>
						{activeOption.icon}
					</button>
				</div>

				<div
					role="listbox"
					className={`${open ? "border bg-base-100 p-1 shadow-lg" : "pointer-events-none border-0 px-1"} top-13 absolute z-50 flex flex-col gap-0.5 rounded-full border-base-300 transition-transform duration-300`}
				>
					{options.map((option, index) => (
						<button
							key={option.value}
							type="button"
							role="option"
							aria-selected={theme === option.value}
							aria-label={option.label}
							onClick={() => {
								dispatch(setTheme(option.value))
								setOpen(false)
							}}
							style={{
								transform: !open
									? `translateY(${-(index + 1) * 20}px)`
									: "",
							}}
							className={`${!open && "opacity-0"} flex h-9 w-9 items-center justify-center rounded-full transition-all ${theme === option.value ? "bg-accent text-base-content" : "text-primary"} hover:cursor-pointer hover:bg-accent`}
						>
							{option.icon}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
