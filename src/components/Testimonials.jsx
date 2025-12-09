'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { testimonialsData } from '@/data/testimonials'

export default function Testimonials() {
    const [hoveredId, setHoveredId] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-blue-600 font-semibold mb-2">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join hundreds of satisfied clients who transformed their business with us
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {testimonialsData.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            onMouseEnter={() => setHoveredId(testimonial.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`p-8 rounded-2xl border cursor-pointer transition-all duration-500 bg-white ${hoveredId === testimonial.id
                                    ? 'border-blue-400 shadow-2xl shadow-blue-300/40 scale-105 bg-gradient-to-br from-blue-50 to-cyan-50'
                                    : 'border-gray-100 hover:border-blue-200 hover:shadow-lg'
                                }`}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={hoveredId === testimonial.id ? { scale: 1.2, rotate: 15 } : { scale: 1, rotate: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className={`mb-6 text-lg leading-relaxed italic transition-colors duration-300 ${hoveredId === testimonial.id ? 'text-gray-800' : 'text-gray-700'
                                }`}>
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                                <motion.div
                                    animate={hoveredId === testimonial.id ? { scale: 1.15 } : { scale: 1 }}
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md transition-all duration-300"
                                >
                                    {testimonial.name.charAt(0)}
                                </motion.div>
                                <div>
                                    <p className={`font-bold transition-colors duration-300 ${hoveredId === testimonial.id ? 'text-blue-900' : 'text-gray-900'
                                        }`}>{testimonial.name}</p>
                                    <p className={`text-sm transition-colors duration-300 ${hoveredId === testimonial.id ? 'text-blue-700' : 'text-gray-600'
                                        }`}>{testimonial.role}</p>
                                </div>
                            </div>

                            {hoveredId === testimonial.id && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: '100%' }}
                                    className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
