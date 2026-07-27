import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import { Member } from "@/types/member"
import clsx from "clsx"

const ContactMember = ({ info }: { info: Member }) => {
    const allLinks = [
        {
            name: "LinkedIn",
            href: info.linkedin,
            icon: FaLinkedin,
        },
        {
            name: "GitHub",
            href: info.github,
            icon: FaGithub,
        },
        {
            name: "تماس",
            href: info.phone ? `tel:${info.phone}` : undefined,
            icon: IoCall,
        },
        {
            name: "ایمیل",
            href: info.email ? `mailto:${info.email}` : undefined,
            icon: Mail,
        },
    ]

    const socialLinks = allLinks.filter((link) => link.href)

    return (
        <section className="flex w-full flex-col gap-10">
            <motion.h2
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className={clsx(
                    "border-r-4 border-primary", // border
                    "text-xl font-medium md:text-2xl lg:text-3xl", // text division
                    "text-white", // text color
                    "pr-5 md:pr-10", // padding
                    "-mr-2 md:-mr-5", // margin
                )}
            >
                راه‌های ارتباطی
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-5 lg:justify-between">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target={
                            link.href?.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                            link.href?.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.35,
                        }}
                        className="group flex w-[250px] items-center gap-4 rounded-2xl border border-primary/10 bg-gradient-to-b from-base-200 to-[#0B1120] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(47,91,255,.12)]"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/15">
                            <link.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-base-content">
                                {link.name}
                            </span>

                            <span
                                className="max-w-[150px] truncate text-xs text-base-content/55"
                                dir="ltr"
                            >
                                {link.name === "LinkedIn"
                                    ? "linkedin.com"
                                    : link.name === "GitHub"
                                      ? "github.com"
                                      : link.name === "ایمیل"
                                        ? "  info.email  info.email  info.email  info.email  info.email"
                                        : info.phone}
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}

export default ContactMember
