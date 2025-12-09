'use client'

export default function PricingSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="max-w-5xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Pricing</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Starter", price: "$200", features: ["1-3 Pages", "Responsive Design", "Contact Form", "Basic SEO"], highlight: false },
                        { title: "Business", price: "$500", features: ["Up to 10 Pages", "Custom Design", "Blog Integration", "Advanced SEO", "WhatsApp Integration"], highlight: true },
                        { title: "Enterprise", price: "$1200", features: ["Unlimited Pages", "Full Customization", "E-commerce", "API Integrations", "Priority Support"], highlight: false },
                    ].map((tier, i) => (
                        <div key={tier.title} className={`rounded-2xl shadow-lg p-8 flex flex-col gap-4 border-2 ${tier.highlight ? "border-blue-500 bg-white" : "border-gray-200 bg-white/80"}`}>
                            <h4 className={`text-xl font-bold mb-2 ${tier.highlight ? "text-blue-600" : "text-gray-700"}`}>{tier.title}</h4>
                            <div className="text-3xl font-black mb-4">{tier.price}</div>
                            <ul className="mb-4 flex flex-col gap-2">
                                {tier.features.map(f => <li key={f} className="text-gray-600">• {f}</li>)}
                            </ul>
                            <button className={`w-full py-2 rounded-lg font-bold ${tier.highlight ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" : "bg-gray-200 text-gray-700"}`}>Get Started</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
