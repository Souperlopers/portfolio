import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiArrowLongLeft } from "react-icons/hi2"
import { IoCall } from "react-icons/io5"
import { SiFigma } from "react-icons/si"
import { Member } from "@/types/member"
import clsx from "clsx"

export default function ContactMember({
	contact,
}: {
	contact: Member["contact"]
}) {
	const icons = {
		"شماره تماس": IoCall,
		ایمیل: Mail,
		لینکدین: FaLinkedin,
		گیت‌هاب: FaGithub,
		فیگما: SiFigma,
	} as const

	const configContact = Object.entries(contact || {})
		.filter(([, value]) => value?.trim()) // filter null values
		.map(([key, value]) => ({
			key,
			value,
			icon: icons[key as keyof typeof icons],
			href: {
				"شماره تماس": `tel:${value}`,
				ایمیل: `mailto:${value}`,
				لینکدین: value,
				گیت‌هاب: value,
				فیگما: value,
			}[key as keyof Member["contact"]],
		}))

	return (
		<div
			className={clsx(
				"w-full", // dimension
				"flex flex-col gap-8 md:gap-10", // flex
			)}
		>
			<h2
				className={clsx(
					"border-primary border-r-4", // border
					"text-xl font-medium md:text-2xl lg:text-3xl", // text division
					"text-base-content", // text color
					"pr-4 md:pr-10", // padding
					"-mr-1 md:-mr-5", // margin
				)}
			>
				راه‌های ارتباطی
			</h2>

			<ul
				className={clsx(
					"grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5", // flex
				)}
			>
				{configContact.map(({ key, value, icon: Icon, href }) => (
					<li key={key}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={clsx(
								"group",
								"flex items-center justify-between gap-4", // flex
								"overflow-hidden rounded-xl", // container
								"p-4 md:p-5", // padding
								"bg-base-300", // background color
								"border-primary/10 border", // border
								"shadow-[0_10px_30px_rgba(0,0,0,.25)]", // shadow
								"transition-all duration-300 ease-in-out will-change-transform", // animation
								"cursor-pointer",
								"hover:border-primary/25 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,91,255,.15)]", // hover
							)}
						>
							<div
								className={clsx(
									"flex flex-1 items-center gap-3 md:gap-4", // flex
								)}
							>
								<div
									className={clsx(
										"h-10 w-10 md:h-11 md:w-11", // dimension
										"shrink-0", // only God knows about this
										"flex items-center justify-center", // flex
										"rounded-xl", // container
										"bg-primary/10", // background color
										"text-primary", // text color
										"group-hover:bg-primary/20", // hover
										"transition-colors duration-300 group-hover:scale-105", // animation
									)}
								>
									<Icon
										size={20}
										className="md:h-5.5 md:w-5.5"
									/>
								</div>

								<div className={clsx("flex flex-col")}>
									<span
										className={clsx(
											"text-sm md:text-base", // text dimension
											"text-base-content/60", // text color
											"group-hover:text-base-content", // hover
											"transition-colors duration-300", // animation
										)}
									>
										{key}
									</span>

									<span
										dir="ltr"
										className={clsx(
											"max-w-36 truncate sm:max-w-40 md:max-w-44 lg:max-w-64 xl:max-w-96", // text overflow
											"text-xs sm:text-sm md:text-base", // text dimension
											"font-medium", // text style
											"text-base-content/80", // text color
											"group-hover:text-primary/80", // hover
											"transition-colors duration-300", // animation
										)}
									>
										{value}
									</span>
								</div>
							</div>

							<HiArrowLongLeft
								size={22}
								className={clsx(
									"shrink-0",
									"text-primary/40", // text color
									"translate-x-1", // position
									"group-hover:translate-x-0", // hover
									"group-hover:text-primary", // hover
									"transition-transform duration-300", // animation
								)}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
