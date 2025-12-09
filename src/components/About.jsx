'use client'

import { motion } from 'framer-motion'
import { Award, Users } from "lucide-react"
import Image from 'next/image'

export default function About() {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center items-center mb-10 md:mb-0"
                    >
                        <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Team" className="rounded-3xl shadow-xl w-full max-w-md object-cover" />
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col items-start gap-6 md:pl-16"
                    >
                        <div>
                            <p className="text-primary font-semibold mb-2">About Us</p>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-dark mb-6">
                                Building Tomorrow's Digital Solutions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Since 2017, we've been at the forefront of digital innovation, helping businesses transform their ideas into powerful digital experiences. Our team of experts combines creativity with cutting-edge technology.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe in partnerships, not just projects. Every client is unique, and we tailor our approach to meet your specific needs and exceed your expectations.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 mt-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl shadow-lg">
                                    <Award className="h-8 w-8 text-blue-100" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Award Winning</h4>
                                    <p className="text-gray-500 text-sm">Recognized globally for excellence</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 p-4 rounded-xl shadow-lg">
                                    <Users className="h-8 w-8 text-cyan-100" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Expert Team</h4>
                                    <p className="text-gray-500 text-sm">50+ talented professionals</p>
                                </div>
                            </div>
                        </div>

                        <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105">
                            Learn Our Story
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
