import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import OutcomesSection from '@/components/OutcomesSection'
import AgendaSection from '@/components/AgendaSection'
import Day1DeepDive from '@/components/Day1DeepDive'
import ApplySection from '@/components/ApplySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <WhySection />
        <OutcomesSection />
        <AgendaSection />
        <Day1DeepDive />
        <ApplySection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}