'use client'

import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import CTA from '@/components/CTA.jsx'
import { motion } from 'framer-motion'
import { Users, Lightbulb, Award, Target } from 'lucide-react'

export default function About() {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We embrace new technologies and creative thinking to solve complex challenges.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We work closely with our clients as true partners, not just service providers.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Quality is non-negotiable. We deliver nothing less than exceptional work.',
        },
        {
            icon: Target,
            title: 'Impact',
            description: 'We measure success by the growth and success of our client\'s businesses.',
        },
    ]

    const timeline = [
        { year: '2015', event: 'Nexus Founded', description: 'Started with a vision to revolutionize digital solutions' },
        { year: '2017', event: '100+ Projects', description: 'Reached milestone of 100 successful projects' },
        { year: '2019', event: 'Global Presence', description: 'Expanded to serve clients across 5 continents' },
        { year: '2021', event: '500+ Projects', description: 'Delivered 500 successful digital transformations' },
        { year: '2023', event: '50+ Team Members', description: 'Grew to a team of 50+ dedicated professionals' },
        { year: '2025', event: 'Industry Leaders', description: 'Recognized as top digital agency globally' },
    ]

    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-light flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-8"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-display text-dark">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nexus</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            We're more than an agency—we're your partner in digital transformation, dedicated to turning your vision into reality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold font-display text-dark">Our Story</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Since 2015, Nexus has been at the forefront of digital innovation. What started as a small team with a big vision has grown into a powerhouse of 50+ talented professionals dedicated to delivering exceptional digital solutions.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every project we undertake is driven by our core belief: your success is our mission. We don't just build websites or apps; we build digital experiences that transform businesses.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                With over 500 projects delivered and a 98% client satisfaction rate, we've earned the trust of industry leaders across diverse sectors.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl"
                        >
                            <p className="text-gray-600">Company Story Visual</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold font-display text-dark mb-6">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These principles guide every decision we make and every solution we create
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                        <Icon className="text-primary" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark mb-3 font-display">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold font-display text-dark mb-6">Our Journey</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Milestones that define our growth and success
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>

                        {/* Timeline items */}
                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:text-right'}`}
                                >
                                    <div className={index % 2 === 0 ? '' : 'order-2'}>
                                        <div className={`p-6 rounded-2xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} bg-light border border-gray-200`}>
                                            <p className="text-primary font-bold text-2xl mb-2">{item.year}</p>
                                            <h3 className="text-2xl font-bold text-dark mb-2 font-display">{item.event}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className={`hidden md:flex justify-center ${index % 2 === 0 ? 'order-2' : ''}`}>
                                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold font-display text-dark mb-6">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            50+ talented professionals dedicated to your success
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
                            <motion.div
                                key={member}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 mb-4 flex items-center justify-center">
                                    <p className="text-gray-600">Team Member</p>
                                </div>
                                <h3 className="text-lg font-bold text-dark">Team Member {member}</h3>
                                <p className="text-gray-600 text-sm">Role & Expertise</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    )
}
