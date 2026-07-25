import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Member } from "@/types/member";

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
    ];

    const socialLinks = allLinks.filter((link) => link.href);

    return (
        <section className="w-full">
            <motion.h2
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-2xl md:text-3xl font-semibold text-white mb-8"
            >
                راه‌های ارتباطی
            </motion.h2>

            <div className="flex flex-wrap lg:justify-between justify-center gap-5">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target={link.href?.startsWith("http") ? "_blank" : undefined}
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
                        className="
                            group
                            flex items-center gap-4
                            
                            w-[250px]
                            px-5 py-4

                            rounded-2xl

                            border border-primary/10
                            bg-gradient-to-b from-base-200 to-[#0B1120]

                            shadow-[0_10px_30px_rgba(0,0,0,.25)]

                            transition-all duration-300

                            hover:-translate-y-1
                            hover:border-primary/25
                            hover:shadow-[0_18px_45px_rgba(47,91,255,.12)]
                        "
                    >
                        <div
                            className="
                                flex items-center justify-center

                                w-11 h-11

                                rounded-xl

                                bg-primary/10
                                border border-primary/15

                                transition-all duration-300

                                group-hover:bg-primary/15
                                group-hover:border-primary/30
                            "
                        >
                            <link.icon
                                className="
                                    w-5 h-5

                                    text-primary

                                    transition-transform duration-300
                                    group-hover:scale-110
                                "
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-base-content text-sm font-medium">
                                {link.name}
                            </span>

                            <span className="text-xs text-base-content/55 truncate max-w-[150px]" dir="ltr">
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
    );
};

export default ContactMember;