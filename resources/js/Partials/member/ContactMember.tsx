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
            color: "group-hover:text-blue-700",
        },
        {
            name: "GitHub",
            href: info.github,
            icon: FaGithub,
            color: "group-hover:text-neutral-200",
        },
        {
            name: "Phone",
            href: info.phone,
            icon: IoCall,
            color: "group-hover:text-green-600",
        },
        {
            name: "Email",
            href: info.email ? `mailto:${info.email}` : undefined,
            icon: Mail,
            color: "group-hover:text-red-700",
        },
    ];

    const socialLinks = allLinks.filter((link) => link.href);

    return (
        <div className="bg-(--bg-container) p-5 py-16 rounded-xl shadow-md border border-border text-text-primary">
            <section>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-extrabold text-(--text-secondary) mb-10"
                    >
                        راه های ارتباطی
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.6 + index * 0.15,
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -12,
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.6 },
                                }}
                                className="group relative p-6 bg-(--bg-main) rounded-2xl shadow-lg hover:shadow-2xl border border-(--border) hover:border-(--accent) transition-all duration-500"
                                aria-label={link.name}
                            >
                                <link.icon
                                    className={`w-12 h-12 md:w-14 md:h-14 text-(--text-secondary) transition-colors duration-300 ${link.color}`}
                                />

                                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-secondary text-text-primary text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                                    {link.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactMember;
