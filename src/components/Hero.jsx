'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 md:px-20 overflow-hidden">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 shadow-md mb-2 flex items-center border border-white/20"
                >
                    <span className="text-pink-400 text-lg mr-2">🚀</span>
                    <span className="text-white font-semibold">Innovation Meets Excellence</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-black leading-tight text-white"
                >
                    Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Digital Vision</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-gray-300 text-lg max-w-xl"
                >
                    We craft exceptional digital experiences that drive growth and elevate your brand to new heights.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex gap-4 mt-4"
                >
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200">
                        Get Started
                    </button>
                    <ContactModal />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex gap-10 mt-10"
                >
                    <div>
                        <span className="text-3xl font-bold text-white">70+</span>
                        <p className="text-gray-300 text-sm">Projects Delivered</p>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">98%</span>
                        <p className="text-gray-300 text-sm">Client Satisfaction</p>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">50+</span>
                        <p className="text-gray-300 text-sm">Team Members</p>
                    </div>
                </motion.div>
            </div>
            {/* Right: Device Mockup & Shapes */}
            <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-[400px] h-[350px] flex items-center justify-center"
                >
                    {/* Floating Gradient Shapes */}
                    <motion.div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl opacity-60 blur-2xl" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
                    <motion.div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl opacity-60 blur-2xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
                    <motion.div className="absolute bottom-8 left-8 w-16 h-16 bg-cyan-500 rounded-lg opacity-60 blur-2xl" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
                    <motion.div className="absolute bottom-0 right-8 w-10 h-10 bg-blue-400 rounded-lg opacity-60 blur-2xl" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
                    <motion.div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-400 rounded-full opacity-60 blur-2xl" animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 7 }} />
                    {/* Device Mockup */}
                    <div className="relative z-10 w-[320px] h-[260px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                        <div className="w-[90%] h-[80%] bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Device Mockup" className="object-cover w-full h-full rounded-xl" />
                        </div>
                        <div className="w-24 h-3 bg-white/20 rounded-full mt-4" />
                    </div>
                </motion.div>
            </div>
            {/* Soft background gradient shadow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-0 top-0 w-2/3 h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 via-transparent to-transparent opacity-60" />
            </div>
        </section>
    );
};

export default Hero;

// WhatsApp contact button
const ContactModal = () => {
    const whatsappMessage = "Hi! I'm interested in creating a website. What kind of website do you want to create? (e.g., E-commerce, Portfolio, Business, Blog, etc.)";
    const whatsappUrl = `https://wa.me/2348149355727?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur border border-white/30 hover:border-white/50 text-white font-bold py-3 px-8 rounded-full shadow transition-all duration-200 inline-block"
        >
            Contact Us
        </a>
    );
};
