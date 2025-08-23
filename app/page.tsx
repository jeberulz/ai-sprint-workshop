import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import OutcomesSection from '@/components/OutcomesSection'
import AgendaSection from '@/components/AgendaSection'
import Day1DeepDive from '@/components/Day1DeepDive'
import Day2DeepDive from '@/components/Day2DeepDive'
import Day3DeepDive from '@/components/Day3DeepDive'
import Day4DeepDive from '@/components/Day4DeepDive'
import ApplySection from '@/components/ApplySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import { getHero, getTestimonials, getFAQs, getSiteSettings } from '@/lib/sanity/api'

export default async function Home() {
  // Fetch data from Sanity CMS
  const [hero, testimonials, faqs, siteSettings] = await Promise.all([
    getHero(),
    getTestimonials(),
    getFAQs(),
    getSiteSettings(),
  ])
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection hero={hero} />
        <WhySection />
        <OutcomesSection />
        <AgendaSection />
        <Day1DeepDive />
        <Day2DeepDive />
        <Day3DeepDive />
        <Day4DeepDive />
        <ApplySection />
        <TestimonialsSection 
          testimonials={testimonials}
          sectionTitle={siteSettings?.sectionTitles?.testimonials}
          sectionSubtitle={siteSettings?.sectionTitles?.testimonialsSubtitle}
        />
        <FAQSection 
          faqs={faqs}
          sectionTitle={siteSettings?.sectionTitles?.faq}
          sectionSubtitle={siteSettings?.sectionTitles?.faqSubtitle}
        />
      </main>
      <Footer />
    </div>
  )
}