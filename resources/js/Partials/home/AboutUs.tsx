import { HiOutlineEnvelope } from "react-icons/hi2"
import { SiGithub } from "react-icons/si"
import clsx from "clsx"

const GITHUBURL = "https://github.com/SouperLopers"
const EMAILURL = "contact@sprlpr.ir"

const AboutUs = () => {
    return (
        <section
            id="about"
            className="mx-auto flex w-full h-[500px] max-w-[1350px] scroll-mt-20 flex-col gap-10"
        >
            <h2
                className={clsx(
                    "border-r-4 border-primary", // border
                    "text-xl font-medium md:text-2xl lg:text-3xl", // text division
                    "text-base-content", // text color
                    "pr-5 md:pr-10", // padding
                    "-mr-2 md:-mr-5", // margin
                )}
            >
                تماس با ما
            </h2>

            <div className="flex flex-col justify-start items-start h-full rounded-xl border border-primary/10 bg-base-200 px-6 py-8 shadow-[0_10px_30px_rgba(0,0,0,25)] transition-all duration-200 md:px-10 md:py-10">
                <div className="mb-6 flex items-center gap-2 md:mb-8">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="mr-2 font-mono text-xs text-base-content/45">
                        SouperLopers.md
                    </span>
                </div>

                <p className="max-w-[1100px] h-full shrink text-base leading-relaxed text-base-content/90 md:text-xl">
                    ما باور داریم هر محصول موفق، از توجه به جزئیات آغاز می‌شود.
                    با تمرکز بر کیفیت، عملکرد و تجربه کاربری، نرم‌افزارهایی
                    می‌سازیم که استفاده از آن‌ها ساده، لذت‌بخش و قابل اعتماد
                    باشد.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-6 md:justify-start md:gap-6">
                    <a
                        href={`mailto:${EMAILURL}`}
                        dir="ltr"
                        className="inline-flex items-center gap-2 text-base-content/70 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                    >
                        ایمیل
                        <HiOutlineEnvelope size={20} />
                    </a>
                    <a
                        href={GITHUBURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex items-center gap-2 text-base-content/70 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                    >
                        گیت‌هاب
                        <SiGithub size={20} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
