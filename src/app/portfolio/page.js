'use client'

import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import CTA from '@/components/CTA.jsx'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Portfolio() {
    const [filter, setFilter] = useState('All')

    const categories = ['All', 'FinTech', 'E-commerce', 'SaaS', 'Healthcare', 'Portfolio', 'Education']

    const filteredProjects = filter === 'All' ? portfolioData : portfolioData.filter(p => p.category === filter)

    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-light flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-8"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-display text-dark">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Portfolio</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            Explore the projects that showcase our expertise and passion for digital excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === category
                                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                                    : 'bg-light text-dark hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -12 }}
                                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
                            >
                                {/* Image */}
                                <div className="relative h-64 bg-gradient-to-br from-primary/30 to-accent/30 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
                                        {project.title}
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 text-primary text-xs font-semibold rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold text-dark mb-2 font-display">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                                        View Project
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    )
}
