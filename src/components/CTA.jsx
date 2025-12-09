'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-40"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-40"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
                        Ready to Transform Your Digital Vision?
                    </h2>

                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Join 500+ businesses that have partnered with us to elevate their digital presence and achieve exceptional growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                            Get Started <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                            Schedule Demo
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
