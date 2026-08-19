import { NavigationItem } from "@/types/navigation"
import clsx from "clsx/lite"
import { MouseEventHandler, useEffect, useRef, useState } from "react"

export default function Hamburger({
	navList,
	classNames,
	clickHandler,
}: {
	navList: NavigationItem[]
	classNames: string
	clickHandler: (item: NavigationItem) => void
}) {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		setIsOpen((prev) => !prev)
	}

	const handleClickOutside = (e: MouseEvent) => {
		if (
			menuRef.current &&
			!menuRef.current.contains(e.target as Node) &&
			buttonRef.current &&
			!buttonRef.current.contains(e.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () =>
			document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	return (
		<div
			ref={menuRef}
			className={clsx(
				"dropdown pointer-events-none text-left", // daisyui
				classNames, // passed from parent
			)}
		>
			<button
				ref={buttonRef}
				onClick={handleClick}
				tabIndex={0}
				role="button"
				className="btn btn-circle btn-ghost pointer-events-auto"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="pointer-events-none h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</button>

			<ul
				id="hamburger-menu"
				role="menu"
				tabIndex={-1}
				className={clsx(
					isOpen ? "block" : "hidden", // toggling logic
					"text-lg text-nowrap", // text
					"menu-xl menu dropdown-content", // daisyui menu
					"w-fit", // demension
					"mt-3 p-1.5", // padding and margin
					"left-0", // position
					"rounded-box bg-base-100 shadow", // style
				)}
			>
				{navList.map((navEl) => (
					<li key={navEl.id} role="none">
						<button
							role="menuitem"
							className={clsx(
								"pointer-events-auto w-full", //
								"justify-between gap-4", // flex
							)}
							onClick={(e) => {
								e.preventDefault()
								clickHandler(navEl)
								setIsOpen(false)
							}}
						>
							{navEl.content}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
