'use client'

import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/sanity/types'

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
  sectionTitle?: string
  sectionSubtitle?: string
}

export default function TestimonialsSection({ 
  testimonials = [], 
  sectionTitle = "What Builders Say", 
  sectionSubtitle = "Real outcomes in just one week" 
}: TestimonialsSectionProps) {
  // Fallback testimonials if none provided from CMS
  const fallbackTestimonials = [
    {
      _id: '1',
      quote: "I went from a vague idea to a working AI tool my team actually uses. The structure and momentum were game-changing.",
      author: "Maya K.",
      role: "Product Manager",
      badge: "Shipped in 5 days",
      gradient: "from-blue-500 to-indigo-600",
      order: 1
    },
    {
      _id: '2',
      quote: "The sprint forced me to focus on outcomes. I launched a niche AI app and got my first 50 users in a week.",
      author: "Jordan P.",
      role: "Founder", 
      badge: "From idea to MVP",
      gradient: "from-emerald-500 to-teal-600",
      order: 2
    },
    {
      _id: '3',
      quote: "My portfolio piece from the sprint directly led to two interviews. It showed I can ship with AI, fast.",
      author: "Samira L.",
      role: "UX Designer",
      badge: "Career boost",
      gradient: "from-rose-500 to-pink-600",
      order: 3
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  return (
    <section id="testimonials" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">{sectionTitle}</p>
          <h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
            {sectionSubtitle}
          </h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {displayTestimonials.map((testimonial, index) => (
            <figure key={testimonial._id || index} className="rounded-xl border p-5 border-white/10 bg-black/40">
              <div className="flex items-center gap-2 text-amber-300">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-geist tracking-tighter">{testimonial.badge}</span>
              </div>
              <blockquote className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className={`inline-flex h-8 w-8 rounded-full bg-gradient-to-br ${testimonial.gradient}`} />
                <div>
                  <p className="text-sm font-geist tracking-tighter text-white">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}