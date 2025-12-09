'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from '@/data/services';

const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" id="services">
            <div className="flex flex-col items-center mb-14">
                <span className="text-white font-semibold mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full shadow-lg tracking-wide">Our Services</span>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">What We Do Best</h2>
                <p className="text-gray-300 text-lg text-center max-w-2xl">
                    Comprehensive solutions tailored to your business needs
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicesData.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`relative bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col gap-5 border transition-all duration-500 group cursor-pointer ${hoveredId === service.id
                                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 scale-[1.06]'
                                : 'border-white/10 hover:border-white/20'
                            }`}
                    >
                        <div className={`absolute -top-8 left-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br ${service.color} transition-all duration-500 ${hoveredId === service.id ? 'scale-140 rotate-12 shadow-cyan-500/50 shadow-2xl' : 'group-hover:scale-125'
                            }`}>
                            <service.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="pt-12">
                            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${hoveredId === service.id ? 'text-cyan-300' : 'text-white'
                                }`}>{service.title}</h3>
                            <p className="text-gray-300 mb-4 text-base">{service.description}</p>
                            <ul className={`text-sm flex flex-col gap-1 mb-4 transition-colors duration-300 ${hoveredId === service.id ? 'text-cyan-200' : 'text-cyan-300'
                                }`}>
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 transform transition-transform duration-300" style={{
                                        transform: hoveredId === service.id ? `translateX(4px)` : 'translateX(0)'
                                    }}>
                                        <span className={hoveredId === service.id ? 'text-cyan-300' : 'text-cyan-400'}>✔️</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <motion.a
                                href="#"
                                className={`font-semibold flex items-center gap-1 transition-all duration-300 ${hoveredId === service.id
                                        ? 'text-cyan-200 scale-105'
                                        : 'text-cyan-400 hover:text-cyan-300'
                                    }`}
                                whileHover={{ x: 4 }}
                            >
                                Learn More <span>→</span>
                            </motion.a>
                        </div>
                        {hoveredId === service.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-3xl -z-10 blur-3xl"
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
