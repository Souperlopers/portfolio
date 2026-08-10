import { NavigationItem } from "@/types/navigation"
import clsx from "clsx/lite"

export default function DrawerMenu ({
	list,
	onItemClick,
}: {
	list: NavigationItem[]
	onItemClick: (item: NavigationItem) => void
}) {
	const closeDrawer = () => {
		const drawer = document.getElementById(
			"my-drawer-1",
		) as HTMLInputElement | null
		if (drawer) {
			drawer.checked = false
		}
	}

	return (
		<div dir="rtl">
			<div className="drawer">
				<input
					id="my-drawer-1"
					type="checkbox"
					className="drawer-toggle"
				/>

				<div className="drawer-content">
					<label
						htmlFor="my-drawer-1"
						className="btn btn-square btn-ghost drawer-button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</label>
				</div>

				<div className="drawer-side">
					<label
						htmlFor="my-drawer-1"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>

					<ul className="menu bg-bg-primary text-base-content min-h-full w-64 p-4 text-base">
						{list.map((item, index) => (
							<li key={index}>
								<a
									onClick={() => {
										onItemClick(item)
										closeDrawer()
									}}
									className={clsx(
										"border-bg-primary", // background
										"active:bg-bg-primary", // background active
										"hover:bg-bg-primary", // background hover

										"rounded-none border-r-2", // border
										"active:border-primary", // border active
										"hover:border-primary hover:border-r-2", // border hover

										"py-2", // padding
										"cursor-pointer", // pointer
									)}
								>
									{item.content}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
