'use client'

import { motion } from "framer-motion";
import { Award, Shield, Star, Trophy } from "lucide-react";

const badges = [
    { icon: Award, title: "Google Certified", color: "from-blue-500 to-blue-600" },
    { icon: Shield, title: "Security Expert", color: "from-green-500 to-green-600" },
    { icon: Star, title: "Top Rated 2024", color: "from-yellow-500 to-orange-500" },
    { icon: Trophy, title: "Best Design Award", color: "from-purple-500 to-pink-500" }
];

export default function CertificationsBadges() {
    return (
        <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Awards & Certifications</h2>
                    <p className="text-gray-300">Recognized excellence in web development</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {badges.map((badge, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform"
                        >
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 shadow-xl`}>
                                <badge.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{badge.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
