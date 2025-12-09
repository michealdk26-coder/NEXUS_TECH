'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Shield, Lightbulb } from "lucide-react";

const Features = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full py-20 px-4 md:px-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            <div className="flex flex-col items-center mb-12">
                <span className="text-white font-semibold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-black mb-4">Your Success Is Our Mission</h2>
                <p className="text-gray-300 text-lg text-center max-w-2xl">
                    We combine expertise, innovation, and dedication to deliver exceptional results
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center hover:border-cyan-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">70+</span>
                    <p className="text-gray-300 text-sm">Projects Completed</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center hover:border-cyan-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</span>
                    <p className="text-gray-300 text-sm">Client Satisfaction</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center hover:border-cyan-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">15+</span>
                    <p className="text-gray-300 text-sm">Awards Won</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center hover:border-cyan-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">24/7</span>
                    <p className="text-gray-300 text-sm">Support Available</p>
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard idx={0} hoveredId={hoveredId} setHoveredId={setHoveredId} title="Fast Delivery" description="We deliver projects on time without compromising on quality, ensuring your business stays ahead." icon={<Rocket className="h-8 w-8 text-blue-100" />} gradient="from-blue-500 to-blue-600" />
                <FeatureCard idx={1} hoveredId={hoveredId} setHoveredId={setHoveredId} title="Secure & Reliable" description="Enterprise-grade security and reliability built into every solution we create for your peace of mind." icon={<Shield className="h-8 w-8 text-green-100" />} gradient="from-green-500 to-green-600" />
                <FeatureCard idx={2} hoveredId={hoveredId} setHoveredId={setHoveredId} title="Innovation First" description="We stay ahead of trends and leverage cutting-edge technologies to give you a competitive edge." icon={<Lightbulb className="h-8 w-8 text-yellow-100" />} gradient="from-yellow-500 to-yellow-600" />
            </div>
        </section>
    );
};

const FeatureCard = ({ idx, hoveredId, setHoveredId, title, description, icon, gradient }) => {
    const isHovered = hoveredId === idx;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            onMouseEnter={() => setHoveredId(idx)}
            onMouseLeave={() => setHoveredId(null)}
            className={`border rounded-2xl p-8 flex flex-col items-start cursor-pointer transition-all duration-500 ${isHovered
                ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border-cyan-400/60 shadow-2xl shadow-cyan-500/30 scale-105'
                : 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-500/50'
                }`}
        >
            <motion.div
                animate={isHovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
                className={`bg-gradient-to-br ${gradient} p-4 rounded-xl mb-4 shadow-lg transition-all duration-500`}
            >
                {icon}
            </motion.div>
            <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${isHovered ? 'text-cyan-300' : 'text-white'
                }`}>{title}</h4>
            <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-gray-200' : 'text-gray-300'
                }`}>{description}</p>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    className="mt-4 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                />
            )}
        </motion.div>
    );
};

export default Features;
