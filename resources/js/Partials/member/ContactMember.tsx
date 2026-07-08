import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Member } from "@/types/member";

const ContactMember = ({ info }: { info: Member }) => {
    const allLinks = [
        { name: "LinkedIn", href: info.linkedin, icon: FaLinkedin },
        { name: "GitHub",   href: info.github,   icon: FaGithub   },
        { name: "تماس",     href: info.phone,    icon: IoCall      },
        { name: "ایمیل",    href: info.email ? `mailto:${info.email}` : undefined, icon: Mail },
    ];

    const socialLinks = allLinks.filter((link) => link.href);

    return (
        <div className="text-text-primary">
            <div className="flex md:flex-row flex-col items-center gap-10 w-full">

                <motion.h2
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-medium text-white w-full"
                >
                    راه‌های ارتباطی
                </motion.h2>

                <div className="w-full flex flex-wrap md:justify-end justify-between md:gap-5">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.08, duration: 0.4, ease: "easeOut" }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center gap-2.5 md:px-6 md:py-5 px-5 py-4
                                border border-white/10 rounded-xl bg-white/5
                                hover:border-sky-500/40 hover:bg-white/[0.07]
                                transition-colors duration-200 group"
                            aria-label={link.name}
                        >
                            <link.icon className="w-7 h-7 md:w-8 md:h-8 text-white/40 group-hover:text-sky-400 transition-colors duration-200" />
                            <span className="md:text-sm text-xs text-white/30 group-hover:text-white/60 transition-colors duration-200">
                                {link.name}
                            </span>
                        </motion.a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ContactMember;