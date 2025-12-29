'use client'

import { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setSubmitted(true);
                setEmail("");
            } else {
                setError(data.error || "Failed to subscribe");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-10 bg-gradient-to-r from-cyan-50 to-blue-50 flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Get Web Dev Tips & Free Consultation</h3>
            <form
                className="flex gap-2"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-l-lg border border-blue-300 focus:outline-none"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-2 rounded-r-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-all disabled:opacity-50"
                >
                    {loading ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
            {error && (
                <p className="mt-4 text-red-600 font-semibold">{error}</p>
            )}
            {submitted && (
                <p className="mt-4 text-green-600 font-semibold">Thank you! Check your email for a welcome message.</p>
            )}
        </section>
    );
}
