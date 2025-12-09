'use client'

import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'],
        Company: ['About Us', 'Blog', 'Careers', 'Contact'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    }

    return (
        <footer className="bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold font-display mb-4">Nexus</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming digital visions into powerful experiences that drive growth and elevate your brand.
                        </p>
                    </motion.div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold mb-4">{title}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Nexus. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
