'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/#about', label: 'About' },
        { href: '/#services', label: 'Services' },
        { href: '/#portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Nexus</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden border-t border-gray-200 bg-white"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-semibold mt-4 hover:shadow-lg transition-all">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}