export interface Hero {
  _id: string
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  availabilityText: string
  splineUrl?: string
  demoApp: {
    title: string
    status: 'live' | 'demo' | 'development'
    inputPlaceholder: string
    inputExample: string
    analysisResults: string[]
  }
}

export interface Testimonial {
  _id: string
  quote: string
  author: string
  role: string
  badge: string
  gradient: string
  order: number
}

export interface FAQ {
  _id: string
  question: string
  answer: string
  order: number
}

export interface AgendaDay {
  _id: string
  day: string
  title: string
  description: string
  icon: string
  color: string
  order: number
}

export interface Outcome {
  _id: string
  title: string
  description: string
  icon: string
  features?: string[]
  order: number
}

export interface SiteSettings {
  _id: string
  title: string
  description: string
  sectionTitles: {
    testimonials: string
    testimonialsSubtitle: string
    faq: string
    faqSubtitle: string
    outcomes: string
    outcomesSubtitle: string
  }
}