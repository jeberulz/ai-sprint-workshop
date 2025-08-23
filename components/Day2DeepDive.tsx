'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Target, FileText, Layout, ArrowRight, CalendarRange, Check, Zap, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Day2DeepDive() {
  const [copied, setCopied] = useState(false)

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const copyPrompt = async () => {
    const promptText = '"Based on these feature specs, design a 3-screen mobile app UI: a simple input screen, a detailed results screen, and a user profile page."'
    try {
      await navigator.clipboard.writeText(promptText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section id="day2" className="bg-gray-950 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <p className="text-sm uppercase text-blue-300/90 font-geist tracking-tighter">Day 2 Deep Dive</p>
            <h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
              AI‑Generated Product Specs & Design
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-white/5 border-white/10 text-gray-200">
              <Target className="w-3.5 h-3.5" />
              Framework Focus: Product
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-geist tracking-tighter text-gray-400">Live Action</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
                      <FileText className="w-3.5 h-3.5 text-blue-300" />
                    </span>
                    We'll use ChatGPT‑4 to write detailed Feature Specs and user stories.
                  </li>
                  <li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
                      <Layout className="w-3.5 h-3.5 text-indigo-300" />
                    </span>
                    Then we'll feed those specs into Uizard to generate core app screens and a clickable prototype.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400 font-geist tracking-tighter">AI Prompt Example</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyPrompt}
                    className="inline-flex items-center gap-1.5 text-[11px] rounded-md px-2 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition text-gray-300"
                  >
                    <Copy className="w-3 h-3" />
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
                <pre className="mt-2 text-[13px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre-wrap">
                  "Based on these feature specs, design a 3-screen mobile app UI: a simple input screen, a detailed results screen, and a user profile page."
                </pre>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => handleNavClick('#apply')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
              >
                Join Day 2 Session
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleNavClick('#agenda')}
                variant="outline"
                className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10"
              >
                Back to Agenda
                <CalendarRange className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" 
                alt="Specs to prototype workflow" 
                width={2160}
                height={1440}
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  Specs → Prototype in 60 minutes
                </div>
              </div>
              {/* Floating outcome card */}
              <div className="absolute left-4 -bottom-6 sm:left-6 sm:-bottom-8">
                <div className="rounded-xl border border-white/10 bg-black/80 backdrop-blur p-4 w-[260px] shadow-2xl">
                  <p className="text-xs font-geist tracking-tighter text-gray-300">You'll walk away with:</p>
                  <ul className="mt-2 space-y-1.5 text-sm font-geist tracking-tighter text-gray-100">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      Detailed feature spec document
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      User stories mapped to screens
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      Clickable 3‑screen prototype
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Spacer to account for floating card overlap */}
          <div className="lg:hidden h-16" />
        </div>
      </div>
    </section>
  )
}