import { HiOutlineEnvelope } from "react-icons/hi2"
import { SiGithub } from "react-icons/si"
import clsx from "clsx"

const GITHUB_URL = "https://github.com/SouperLopers"
const EMAIL_URL = "info@sprlpr.ir"
const ABOUT_US_TEXT =
	"رشد محصولات ما، از توجه به جزئیات آغاز می‌شود. با تمرکز بر کیفیت، عملکرد و تجربه کاربری، نرم‌افزارهایی می‌سازیم که استفاده از آن‌ها ساده، لذت‌بخش و قابل اعتماد باشد."

export default function ContactUs() {
	return (
		<section
			className={clsx(
				"h-fit w-full", // dimension
				"bg-base-100/80", // background color
			)}
		>
			<div
				id="about"
				className={clsx(
					"h-full w-full max-w-337.5", // dimension
					"flex flex-col items-center gap-10", // flex
					"scroll-mt-20", // scroll margin
					"px-5 py-8", // padding
				)}
			>
				<h2
					className={clsx(
						"text-xl font-medium md:text-2xl lg:text-3xl", // text division
						"text-base-content", // text
					)}
				>
					درباره ما
				</h2>

				<p
					className={clsx(
						"text-base-content/90", // text color
						"text-justify text-lg leading-relaxed md:text-xl", // text dimension
						"px-0 md:px-5", // padding
					)}
				>
					{ABOUT_US_TEXT}
				</p>

				<div
					className={clsx(
						"w-[75%]", // dimension
						"flex flex-wrap items-center justify-center gap-5 md:gap-10", // flex
						"border-neutral/90 border-t", // border
						"pt-6", // padding and margin
					)}
				>
					<a
						href={`mailto:${EMAIL_URL}`}
						target="_blank"
						dir="ltr"
						className={clsx(
							"inline-flex items-stretch gap-2", // flex
							"text-base-content/90 text-lg md:text-xl", // text
							"hover:text-primary hover:-translate-y-1", // hover
							"transition-all duration-300", // animation
						)}
					>
						<p>Email</p>
						<HiOutlineEnvelope size={25} />
					</a>
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						dir="ltr"
						className={clsx(
							"inline-flex items-stretch gap-2", // flex
							"text-base-content/90 text-lg md:text-xl", // text
							"hover:text-primary hover:-translate-y-1", // hover
							"transition-all duration-300", // animation
						)}
					>
						<p>Github</p>
						<SiGithub size={25} />
					</a>
				</div>
			</div>
		</section>
	)
}
