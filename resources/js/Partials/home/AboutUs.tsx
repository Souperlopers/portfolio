import { HiOutlineEnvelope } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

const GITHUBURL = "https://github.com/SouperLopers";
const EMAILURL = "contact@sprlpr.ir"

const AboutUs = () => {
    return (
        <section
            id="about"
            className="scroll-mt-20 py-14 mt-8 w-full max-w-[1350px] mx-auto lg:px-20 px-5"
        >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6 pr-1">
                مشخصات ما
            </h2>

            <div className="rounded-xl border border-white/10 hover:border-white/25 bg-white/5 transition-all duration-200 px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="text-xs text-white/30 font-mono mr-2">SouperLopers.md</span>
                </div>

                <p className="md:text-xl text-base text-white/70 leading-relaxed max-w-[1100px]">
                    ما باور داریم هر محصول موفق، از توجه به جزئیات آغاز می‌شود. با تمرکز بر
                    کیفیت، عملکرد و تجربه کاربری، نرم‌افزارهایی می‌سازیم که استفاده از
                    آن‌ها ساده، لذت‌بخش و قابل اعتماد باشد.
                </p>

                <div className="flex flex-wrap items-center md:justify-start justify-center gap-4 md:gap-6 mt-8 pt-6 border-t border-white/10">
                    <a
                        href="mailto:team@souperlopers.dev"
                        dir="ltr"
                        className="inline-flex items-center gap-2 text-sm md:text-base text-white/60 hover:text-primary transition-colors duration-150"
                    >
                        <HiOutlineEnvelope size={18} />
                        team@souperlopers.dev
                    </a>
                    <a
                        href={GITHUBURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex items-center gap-2 text-sm md:text-base text-white/60 hover:text-primary transition-colors duration-150"
                    >
                        <SiGithub size={18} />
                        {EMAILURL}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;