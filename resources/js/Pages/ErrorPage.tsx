import { ReactNode } from "react"
import MainLayout from "@/Layouts/MainLayout"
import { Head, Link } from "@inertiajs/react"
import { AiFillHome } from "react-icons/ai"
import { ErrorPageProps } from "@/types/error"
import clsx from "clsx"
import { homeContent } from "./Home"

export default function Project({ status }: ErrorPageProps) {
	const is404 = status === 404
	const title = is404 ? "صفحه‌ای که به دنبال آن هستید پیدا نشد!" : "خطا!"
	const description = is404
		? "متأسفیم، صفحه‌ای که درخواست کرده‌اید وجود ندارد یا حذف شده است."
		: "خطایی در سیستم رخ داده است. لطفاً بعداً مجدداً تلاش کنید."

	return (
		<>
			<Head title={is404 ? "صفحه پیدا نشد" : "خطا"} />

			<div
				className={clsx(
					"mx-auto flex w-full max-w-[1350px] flex-col items-center justify-center",
					"min-h-[60vh] gap-6 overflow-hidden", // height and spacing
				)}
			>
				{/* Status code */}
				<div
					className={clsx(
						"text-center",
						"text-8xl font-bold md:text-9xl lg:text-[200px]", // responsive size
						"text-primary/30", // faded color
						"select-none", // prevent selection
					)}
				>
					{status}
				</div>

				{/* Title */}
				<h2
					className={clsx(
						"border-r-4 border-primary", // border like Members section
						"text-xl font-medium md:text-2xl lg:text-3xl", // text size
						"text-base-content", // text color
						"pr-5 md:pr-10", // padding
						"-mr-2 md:-mr-5", // margin
					)}
				>
					{title}
				</h2>

				{/* Description */}
				<p
					className={clsx(
						"max-w-2xl text-center", // width
						"text-base text-base-content/70 md:text-lg", // text size and color
						"leading-relaxed", // line height
					)}
				>
					{description}
				</p>

				{/* Back to Home button */}
				<Link
					href="/"
					className={clsx(
						"group flex items-center gap-3", // flex
						"rounded-lg px-6 py-3", // padding
						"bg-primary text-primary-content", // colors
						"transition-all duration-300", // animation
						"hover:scale-105 hover:bg-primary/80", // hover
						"active:scale-95", // active
						"shadow-lg shadow-primary/20", // shadow
					)}
				>
					<AiFillHome className="text-xl transition-transform group-hover:-translate-x-1" />
					<span>بازگشت به خانه</span>
				</Link>
			</div>
		</>
	)
}

Project.layout = (page: ReactNode) => (
	<MainLayout
		children={page}
		navigationList={[
			{
				content: homeContent,
				href: "/",
			},
		]}
	/>
)
