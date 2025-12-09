'use client'

import { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    return (
        <section className="py-10 bg-gradient-to-r from-cyan-50 to-blue-50 flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Get Web Dev Tips & Free Consultation</h3>
            <form
                className="flex gap-2"
                onSubmit={e => {
                    e.preventDefault();
                    setSubmitted(true);
                }}
            >
                <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-l-lg border border-blue-300 focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-2 rounded-r-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-all"
                >
                    Subscribe
                </button>
            </form>
            {submitted && (
                <p className="mt-4 text-green-600 font-semibold">Thank you! We'll be in touch soon.</p>
            )}
        </section>
    );
}
