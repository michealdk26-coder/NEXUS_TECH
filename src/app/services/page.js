'use client'

import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import CTA from '@/components/CTA.jsx'
import { motion } from 'framer-motion'
import { servicesData } from '@/data/services'
import { CheckCircle } from 'lucide-react'

export default function Services() {
    const serviceDetails = [
        {
            id: 1,
            features: [
                'Custom Website Development',
                'E-commerce Solutions',
                'Progressive Web Apps',
                'Website Optimization',
                'Database Design',
                'API Integration',
            ],
        },
        {
            id: 2,
            features: [
                'iOS App Development',
                'Android App Development',
                'Cross-platform Solutions',
                'App UI/UX Design',
                'App Store Optimization',
                'Maintenance & Support',
            ],
        },
        {
            id: 3,
            features: [
                'User Research & Testing',
                'Wireframing & Prototyping',
                'Interface Design',
                'Brand Identity',
                'Design Systems',
                'Accessibility Design',
            ],
        },
        {
            id: 4,
            features: [
                'SEO Strategy',
                'Content Marketing',
                'Social Media Strategy',
                'Email Marketing',
                'PPC Campaigns',
                'Analytics & Reporting',
            ],
        },
        {
            id: 5,
            features: [
                'Cloud Migration',
                'Infrastructure Setup',
                'DevOps Services',
                'Security Implementation',
                'Backup & Recovery',
                'Monitoring & Maintenance',
            ],
        },
        {
            id: 6,
            features: [
                'Technology Audit',
                'Digital Strategy',
                'Process Optimization',
                'Digital Transformation',
                'Training & Support',
                'Ongoing Advisory',
            ],
        },
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital solutions tailored to your business needs and goals
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Details */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon
                            const details = serviceDetails.find((d) => d.id === service.id)
                            const isEven = index % 2 === 0

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="grid md:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Image/Icon */}
                                    <div className={isEven ? '' : 'order-2'}>
                                        <div className="h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl">
                                            <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                                <Icon className="w-16 h-16 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={isEven ? '' : 'order-1'}>
                                        <p className="text-primary font-semibold mb-2">Service {service.id}</p>
                                        <h2 className="text-4xl font-bold font-display text-dark mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                                            {details?.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3">
                                                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105">
                                            Learn More
                                        </button>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold font-display text-dark mb-6">Simple Pricing</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose the plan that works best for your needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Starter',
                                price: '$999',
                                description: 'Perfect for small projects',
                                features: ['5-10 pages', 'Responsive Design', 'Basic SEO', 'Email Support'],
                            },
                            {
                                name: 'Professional',
                                price: '$2,999',
                                description: 'For growing businesses',
                                features: [
                                    '20+ pages',
                                    'Advanced Features',
                                    'SEO Optimization',
                                    'Priority Support',
                                    'Analytics Setup',
                                ],
                                featured: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                description: 'For large-scale solutions',
                                features: [
                                    'Unlimited pages',
                                    'Custom Development',
                                    'Full Support',
                                    'Dedicated Team',
                                    'Ongoing Maintenance',
                                ],
                            },
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-2xl transition-all ${plan.featured
                                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl scale-105'
                                    : 'bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl'
                                    }`}
                            >
                                <h3 className={`text-2xl font-bold font-display mb-2 ${plan.featured ? 'text-white' : 'text-dark'}`}>
                                    {plan.name}
                                </h3>
                                <p className={plan.featured ? 'text-white/80' : 'text-gray-600'} >{plan.description}</p>
                                <p className={`text-4xl font-bold my-6 ${plan.featured ? 'text-white' : 'text-dark'}`}>
                                    {plan.price}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <CheckCircle size={20} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-full font-semibold transition-all ${plan.featured
                                        ? 'bg-white text-primary hover:shadow-xl hover:scale-105'
                                        : 'bg-primary text-white hover:shadow-xl hover:scale-105'
                                        }`}
                                >
                                    Get Started
                                </button>
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
