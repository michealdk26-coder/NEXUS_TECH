'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from '@/data/portfolio';

const Portfolio = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full py-20 px-4 md:px-20 bg-gradient-to-br from-slate-50 via-white to-blue-50" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-white font-semibold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1 rounded-full">Featured Projects</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Featured Projects</h2>
                    <p className="text-gray-500 text-lg text-center max-w-2xl">
                        Explore some of our recent work and success stories
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioData.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`rounded-2xl p-6 flex flex-col gap-4 border cursor-pointer transition-all duration-500 ${hoveredId === project.id
                                ? 'bg-gradient-to-br from-blue-50 to-cyan-50 shadow-2xl shadow-blue-300/40 border-blue-300 scale-105'
                                : 'bg-white shadow-md border-gray-100 hover:shadow-lg'
                                }`}
                        >
                            <div className={`relative w-full h-56 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center transition-all duration-500 ${hoveredId === project.id ? 'ring-4 ring-blue-400 shadow-lg shadow-blue-400/50' : ''
                                }`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`object-cover w-full h-full rounded-xl transition-transform duration-500 ${hoveredId === project.id ? 'scale-110' : ''
                                        }`}
                                />
                                {hoveredId === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-xl"
                                    />
                                )}
                            </div>
                            <div className="flex gap-2 mb-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <motion.span
                                        key={tag}
                                        animate={hoveredId === project.id ? { scale: 1.1 } : { scale: 1 }}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${hoveredId === project.id
                                            ? 'bg-gradient-to-r from-blue-300 to-cyan-300 text-blue-900 border-blue-400 shadow-md'
                                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200'
                                            }`}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                            <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${hoveredId === project.id ? 'text-blue-900' : 'text-gray-900'
                                }`}>{project.title}</h3>
                            <p className={`mb-2 transition-colors duration-300 ${hoveredId === project.id ? 'text-gray-700' : 'text-gray-500'
                                }`}>{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
