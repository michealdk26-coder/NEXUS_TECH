import Navbar from '@/components/Navbar.jsx'
import Hero from '@/components/Hero.jsx'
import Services from '@/components/Services.jsx'
import About from '@/components/About.jsx'
import Features from '@/components/Features.jsx'
import Portfolio from '@/components/Portfolio.jsx'
import Testimonials from '@/components/Testimonials.jsx'
import CTA from '@/components/CTA.jsx'
import Footer from '@/components/Footer.jsx'
import AnimatedStats from '@/components/addons/AnimatedStats.jsx'
import SocialProof from '@/components/addons/SocialProof.jsx'
import NewsletterSignup from '@/components/addons/NewsletterSignup.jsx'
import WhatsAppChatWidget from '@/components/addons/WhatsAppChatWidget.jsx'
import PricingSection from '@/components/addons/PricingSection.jsx'
import FAQSection from '@/components/addons/FAQSection.jsx'
import ProcessTimeline from '@/components/addons/ProcessTimeline.jsx'
import TeamSection from '@/components/addons/TeamSection.jsx'
import CertificationsBadges from '@/components/addons/CertificationsBadges.jsx'
import TechStackShowcase from '@/components/addons/TechStackShowcase.jsx'
import ClientSuccessMetrics from '@/components/addons/ClientSuccessMetrics.jsx'

export default function Home() {
    return (
        <main className="bg-white">
            <Navbar />
            <div className="pt-16">
                <Hero />
                <AnimatedStats stats={[{ label: 'Projects Delivered', value: 70 }, { label: 'Client Satisfaction', value: 98 }, { label: 'Team Members', value: 50 }]} />
                <SocialProof />
                <Services />
                <ProcessTimeline />
                <TechStackShowcase />
                <About />
                <TeamSection />
                <Features />
                <ClientSuccessMetrics />
                <PricingSection />
                <Portfolio />
                <Testimonials />
                <CertificationsBadges />
                <NewsletterSignup />
                <FAQSection />
                <CTA />
                <Footer />
                <WhatsAppChatWidget />
            </div>
        </main>
    )
}
