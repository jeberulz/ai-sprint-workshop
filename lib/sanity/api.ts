import { client } from './client'
import { 
  heroQuery, 
  testimonialsQuery, 
  faqsQuery, 
  agendaDaysQuery, 
  outcomesQuery, 
  siteSettingsQuery 
} from './queries'
import type { 
  Hero, 
  Testimonial, 
  FAQ, 
  AgendaDay, 
  Outcome, 
  SiteSettings 
} from './types'

export async function getHero(): Promise<Hero | null> {
  try {
    return await client.fetch(heroQuery)
  } catch (error) {
    console.error('Error fetching hero:', error)
    return null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(testimonialsQuery)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    return await client.fetch(faqsQuery)
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
}

export async function getAgendaDays(): Promise<AgendaDay[]> {
  try {
    return await client.fetch(agendaDaysQuery)
  } catch (error) {
    console.error('Error fetching agenda days:', error)
    return []
  }
}

export async function getOutcomes(): Promise<Outcome[]> {
  try {
    return await client.fetch(outcomesQuery)
  } catch (error) {
    console.error('Error fetching outcomes:', error)
    return []
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(siteSettingsQuery)
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}