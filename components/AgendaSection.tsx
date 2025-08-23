'use client'

import { Target, LayoutDashboard, Smartphone, BrainCircuit, Rocket, CalendarPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AgendaSection() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const agendaItems = [
    {
      day: "Day 1",
      title: "AI-Powered Strategy & Branding",
      description: "We'll use Perplexity for deep market research and Midjourney to generate a unique brand identity and logo for our app.",
      icon: Target,
      color: "text-blue-300"
    },
    {
      day: "Day 2", 
      title: "AI-Generated Design & UX",
      description: "We'll feed our brand assets and user stories into AI UI tools like Uizard to generate the core screens and build a clickable prototype.",
      icon: LayoutDashboard,
      color: "text-indigo-300"
    },
    {
      day: "Day 3",
      title: "No-Code Frontend Assembly", 
      description: "We'll move into Bubble to rapidly build our polished, responsive frontend based on the AI-generated designs.",
      icon: Smartphone,
      color: "text-violet-300"
    },
    {
      day: "Day 4",
      title: "AI-Assisted Backend & Code",
      description: "The core of the sprint. We'll connect to the OpenAI API and use an AI Coding Assistant like Cursor to write custom logic and functions, making our app truly intelligent.",
      icon: BrainCircuit,
      color: "text-emerald-300"
    },
    {
      day: "Day 5",
      title: "Launch, Test & Iterate",
      description: "We'll connect all the pieces, run final tests, implement a monetization feature, and deploy the application to a live URL.",
      icon: Rocket,
      color: "text-amber-300"
    }
  ]

  return (
    <section id="agenda" className="bg-gray-950 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="uppercase text-sm text-blue-300/90 tracking-tighter font-geist">GO FROM IDEA TO A WORKING PRODUCT</p>
            <h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
              Your Daily Mission: From Idea to Launch
            </h2>
            <p className="mt-3 max-w-2xl font-geist tracking-tighter text-gray-300">Each day, we'll tackle a critical stage of the product sprint in a 1-hour live, hands-on session.</p>
          </div>
          <Button
            onClick={() => handleNavClick('#apply')}
            variant="outline"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all hover:scale-[1.02] font-geist tracking-tighter bg-white/5 text-gray-100 hover:bg-white/10 border-white/10"
          >
            Join next cohort
            <CalendarPlus className="w-4 h-4" />
          </Button>
        </div>

        <div className="mt-8 grid lg:grid-cols-5 gap-4">
          {agendaItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full border font-geist tracking-tighter bg-white/5 border-white/10">
                    {item.day}
                  </span>
                  <IconComponent className={`w-4 h-4 ${item.color}`} />
                </div>
                <h3 className="mt-3 text-lg font-geist tracking-tighter">{item.title}</h3>
                <p className="mt-2 text-sm font-geist tracking-tighter text-gray-400">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}