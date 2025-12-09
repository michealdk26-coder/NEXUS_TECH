'use client'

const faqs = [
    {
        q: "How long does it take to build a website?",
        a: "Most websites take 1-3 weeks depending on complexity. E-commerce and custom projects may take longer."
    },
    {
        q: "Can you redesign my existing website?",
        a: "Absolutely! We specialize in redesigns and upgrades for better performance and aesthetics."
    },
    {
        q: "Do you offer support after launch?",
        a: "Yes, we provide ongoing support and maintenance packages."
    },
    {
        q: "What technologies do you use?",
        a: "We use React, Next.js, Tailwind CSS, and more for modern, fast, and secure websites."
    },
    {
        q: "How do I get started?",
        a: "Just click the Contact Us button or WhatsApp chat to get a free consultation!"
    }
];

export default function FAQSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="max-w-3xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">Frequently Asked Questions</h3>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <details key={i} className="bg-white rounded-xl shadow p-4">
                            <summary className="font-semibold text-blue-600 cursor-pointer">{faq.q}</summary>
                            <p className="mt-2 text-gray-700">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
