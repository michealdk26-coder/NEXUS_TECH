'use client'

import { motion } from "framer-motion";

const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
];

export default function TechStackShowcase() {
    return (
        <section className="py-16 bg-gradient-to-br from-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Technologies We Master</h2>
                    <p className="text-gray-600">Building with the best tools in the industry</p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all group-hover:scale-110">
                                <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                            </div>
                            <p className="text-xs text-gray-600 mt-2 font-semibold">{tech.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
