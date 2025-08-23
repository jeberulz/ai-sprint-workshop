import { groq } from 'next-sanity'

export const heroQuery = groq`
  *[_type == "hero"][0] {
    _id,
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
    availabilityText,
    splineUrl,
    demoApp {
      title,
      status,
      inputPlaceholder,
      inputExample,
      analysisResults
    }
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    role,
    badge,
    gradient,
    order
  }
`

export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

export const agendaDaysQuery = groq`
  *[_type == "agendaDay"] | order(order asc) {
    _id,
    day,
    title,
    description,
    icon,
    color,
    order
  }
`

export const outcomesQuery = groq`
  *[_type == "outcome"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features,
    order
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    sectionTitles {
      testimonials,
      testimonialsSubtitle,
      faq,
      faqSubtitle,
      outcomes,
      outcomesSubtitle
    }
  }
`