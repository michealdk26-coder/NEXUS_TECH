'use client'

import { motion } from "framer-motion";
import { Code2, Palette, Zap, CheckSquare } from "lucide-react";

const team = [
    { name: "Dev_Chukwuka", role: "Lead Developer / Full Stack Developer", icon: Code2, gradient: "from-blue-500 to-cyan-600", hasPhoto: false },
    { name: "Great_Grace", role: "UI/UX Designer", icon: Palette, gradient: "from-purple-500 to-pink-600", hasPhoto: false },
    { name: "DevCata001", role: "Full Stack Developer", icon: Zap, gradient: "from-orange-500 to-red-600", hasPhoto: false },
    { name: "Dimex", role: "Project Manager", icon: CheckSquare, gradient: "from-green-500 to-teal-600", hasPhoto: false }
];

export default function TeamSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 text-lg">Experts dedicated to your success</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {team.map((member, idx) => {
                        const Icon = member.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {member.hasPhoto ? (
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-32 h-32 rounded-full mb-4 shadow-2xl border-4 border-white overflow-hidden group-hover:shadow-2xl transition-all"
                                    >
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4 shadow-2xl border-4 border-white group-hover:shadow-2xl transition-all`}
                                    >
                                        <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                                    </motion.div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 text-sm font-semibold">{member.role}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
