'use client'

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
    { icon: Search, title: "Discovery", desc: "Understanding your needs and goals", color: "from-blue-500 to-cyan-500" },
    { icon: Palette, title: "Design", desc: "Creating beautiful mockups and prototypes", color: "from-purple-500 to-pink-500" },
    { icon: Code, title: "Development", desc: "Building your website with clean code", color: "from-green-500 to-teal-500" },
    { icon: Rocket, title: "Launch", desc: "Deploying and monitoring your site", color: "from-orange-500 to-red-500" }
];

export default function ProcessTimeline() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">How We Work</h2>
                    <p className="text-gray-300 text-lg">Our proven 4-step process ensures success</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl`}>
                                <step.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-300 text-sm">{step.desc}</p>
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" style={{ transform: 'translateX(50%)' }} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
