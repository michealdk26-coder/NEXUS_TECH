import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'NEXUS - Professional Web Development & Design Services | Nigeria',
    description: 'Expert web development agency in Nigeria. We build stunning websites, e-commerce platforms, and custom web applications. 70+ projects delivered, 98% client satisfaction. Get your free consultation today!',
    keywords: 'web development Nigeria, website design, e-commerce development, React developer, Next.js, custom websites, responsive design, SEO optimization',
    authors: [{ name: 'NEXUS Digital Agency' }],
    openGraph: {
        title: 'NEXUS - Transform Your Digital Vision',
        description: 'Premium web development services in Nigeria. Building exceptional digital experiences.',
        type: 'website',
        locale: 'en_NG',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NEXUS - Professional Web Development',
        description: 'Expert web development agency in Nigeria. 70+ projects delivered.',
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
