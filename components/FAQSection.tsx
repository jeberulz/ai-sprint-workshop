'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/lib/sanity/types'

interface FAQSectionProps {
  faqs?: FAQ[]
  sectionTitle?: string
  sectionSubtitle?: string
}

export default function FAQSection({ 
  faqs = [], 
  sectionTitle = "FAQ", 
  sectionSubtitle = "Answers to common questions" 
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Fallback FAQ items if none provided from CMS
  const fallbackFAQs: FAQ[] = [
    {
      _id: '1',
      question: "Do I need to know how to code?",
      answer: "No. We'll use no‑code tools and AI coding assistants. You'll learn just enough code to connect APIs and add logic where needed.",
      order: 1
    },
    {
      _id: '2',
      question: "What if I can't attend live?", 
      answer: "All sessions are recorded and shared within 24 hours. You'll also get step‑by‑step notes and templates.",
      order: 2
    },
    {
      _id: '3',
      question: "Which tools and APIs do we use?",
      answer: "Perplexity, Midjourney, Uizard/Visily, Bubble, and OpenAI API. We'll also demo Cursor and other assistants for coding.",
      order: 3
    },
    {
      _id: '4',
      question: "Is there a certificate?",
      answer: "Yes. You'll receive a completion badge and, more importantly, a live project link you can showcase.",
      order: 4
    }
  ]

  const displayFAQs = faqs.length > 0 ? faqs : fallbackFAQs

  return (
    <section id="faq" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">{sectionTitle}</p>
          <h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
            {sectionSubtitle}
          </h2>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {displayFAQs.map((item, index) => {
            const isOpen = openItems.includes(index)
            return (
              <div 
                key={item._id || index}
                className={`rounded-xl border p-5 border-white/10 transition-colors ${isOpen ? 'bg-black/50' : 'bg-black/40'}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex cursor-pointer items-center justify-between gap-4 w-full text-left"
                >
                  <span className="text-sm font-geist tracking-tighter text-white">{item.question}</span>
                  <span className={`shrink-0 rounded-md border border-white/10 bg-white/5 p-1 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}