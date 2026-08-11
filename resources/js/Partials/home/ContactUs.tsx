import { HiOutlineEnvelope } from "react-icons/hi2"
import { SiGithub } from "react-icons/si"
import clsx from "clsx"

const GITHUB_URL = "https://github.com/SouperLopers"
const EMAIL_URL = "info@sprlpr.ir"

export default function ContactUs() {
	return (
		<section className={clsx(
			"h-96 w-full", // dimension
			"bg-base-100/80", // background color
		)}>
			<div
				id="about"
				className={clsx(
					"h-full w-full max-w-337.5", // dimension
					"flex flex-col gap-10", // flex
					"mx-auto scroll-mt-20", // base
					"px-5 py-8", // padding
				)}
			>
				<h2
					className={clsx(
						"text-xl font-medium md:text-2xl lg:text-3xl", // text division
						"text-base-content", // text
						"mx-auto", // base
					)}
				>
					تماس با ما
				</h2>

				<div
					className={clsx(
						"flex flex-col items-center md:items-start", // flex
						"h-full", // dimension
						"px-0 md:px-5", // padding
					)}
				>
					<p
						className={clsx(
							"h-full", // dimension
							"text-base-content/90", // text base
							"text-lg leading-relaxed md:text-xl", // text dimension
							"flex items-center", // flex
							"px-0 md:px-5", // padding
						)}
					>
						ما باور داریم هر محصول موفق، از توجه به جزئیات آغاز می‌شود.
						با تمرکز بر کیفیت، عملکرد و تجربه کاربری، نرم‌افزارهایی
						می‌سازیم که استفاده از آن‌ها ساده، لذت‌بخش و قابل اعتماد
						باشد.
					</p>

					<div
						className={clsx(
							"flex flex-wrap items-center justify-center gap-5 md:justify-start md:gap-10", // flex
							"border-neutral/90 border-t", // border
							"pt-6", // padding
							"mt-10",
						)}
					>
						<a
							href={`mailto:${EMAIL_URL}`}
							dir="ltr"
							className={clsx(
								"inline-flex items-center gap-2", // flex
								"text-base-content/90 text-lg md:text-xl", // text
								"hover:text-primary hover:-translate-y-1", // hover
								"transition-all duration-300", // animation
							)}
						>
							ایمیل
							<HiOutlineEnvelope size={25} />
						</a>
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							dir="ltr"
							className={clsx(
								"inline-flex items-center gap-2", // flex
								"text-base-content/90 text-lg md:text-xl", // text
								"hover:text-primary hover:-translate-y-1", // hover
								"transition-all duration-300", // animation
							)}
						>
							گیت‌هاب
							<SiGithub size={25} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
