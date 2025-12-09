'use client'

import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate form submission
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@nexus.com',
            link: 'mailto:hello@nexus.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            title: 'Address',
            value: '123 Tech Street, Silicon Valley, CA 94025',
            link: '#',
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
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            Have a project in mind? Let's talk about how we can help transform your digital vision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl font-bold font-display text-dark mb-6">
                                    Let's Work Together
                                </h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Have a question or ready to start your next project? Contact us today and let's create something amazing.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <motion.a
                                            key={index}
                                            href={info.link}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-6 border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="text-primary" size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-dark">{info.title}</h3>
                                                    <p className="text-gray-600 group-hover:text-primary transition-colors">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </div>

                            {/* Response Time */}
                            <div className="p-6 bg-light rounded-2xl border border-gray-200">
                                <p className="text-sm text-gray-600">
                                    We typically respond to inquiries within <span className="font-bold text-dark">24 hours</span>. For urgent matters, please call us directly.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="p-8 border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-xl transition-all"
                            >
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center"
                                    >
                                        Thank you! We'll get back to you soon.
                                    </motion.div>
                                )}

                                <div className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-dark font-semibold mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-dark font-semibold mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-dark font-semibold mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label className="block text-dark font-semibold mb-2">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-dark font-semibold mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        Send Message <Send size={20} />
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    We respect your privacy. Your information is safe with us.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-24 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                    >
                        <p className="text-gray-600 text-lg">Map Placeholder - Interactive Map Can Be Added Here</p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
