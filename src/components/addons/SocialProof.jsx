'use client'

export default function SocialProof() {
    return (
        <section className="py-10 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Trusted By</h3>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                    {/* Example client logos */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="h-10" />
                    {/* Add more logos as needed */}
                </div>
            </div>
        </section>
    );
}
