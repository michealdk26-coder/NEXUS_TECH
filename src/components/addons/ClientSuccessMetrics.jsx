'use client'

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const metrics = [
    { icon: TrendingUp, value: "350%", label: "Average Traffic Increase", color: "from-green-500 to-emerald-600" },
    { icon: Users, value: "10K+", label: "Users Reached Monthly", color: "from-blue-500 to-cyan-600" },
    { icon: Clock, value: "99.9%", label: "Uptime Guarantee", color: "from-purple-500 to-pink-600" },
    { icon: DollarSign, value: "$2M+", label: "Revenue Generated for Clients", color: "from-orange-500 to-red-600" }
];

export default function ClientSuccessMetrics() {
    return (
        <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Real Results</h2>
                    <p className="text-gray-600 text-lg">Numbers that speak for our quality</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-all hover:scale-105"
                        >
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-xl`}>
                                <metric.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-2">{metric.value}</h3>
                            <p className="text-gray-600 text-sm font-semibold">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
