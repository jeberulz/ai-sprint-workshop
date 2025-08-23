'use client'

import Image from 'next/image'
import { ArrowRight, CalendarRange, Cpu, Car, Stethoscope, Check, Wrench, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Hero } from '@/lib/sanity/types'

interface HeroSectionProps {
  hero?: Hero | null
}

export default function HeroSection({ hero }: HeroSectionProps) {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Spline Background */}
      <div className="spline-container fixed top-0 w-full h-screen -z-10">
        <iframe 
          src={hero?.splineUrl || "https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb"} 
          frameBorder="0" 
          width="100%" 
          height="100%"
        />
      </div>

      <section id="overview" className="relative overflow-hidden sm:pt-28 pt-24 pb-16">
        {/* Subtle gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]" />
          <div className="absolute -bottom-40 right-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.14),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
                {hero?.title || "The AI Product Sprint: Design, Build & Launch a Live App in 5 Days."}
              </h1>
              <p className="mt-6 text-lg max-w-2xl mx-auto lg:mx-0 font-geist tracking-tighter text-gray-300">
                {hero?.description || "Stop just using AI and start building with it. This is a live, hands-on sprint where I will guide you from a blank canvas to a deployed, AI-powered application. You will learn to leverage a full suite of AI tools for research, branding, design, and even code."}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  onClick={() => handleNavClick('#apply')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
                >
                  {hero?.primaryButtonText || "Join the Sprint"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleNavClick('#agenda')}
                  variant="outline"
                  className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10"
                >
                  {hero?.secondaryButtonText || "See the plan"}
                  <CalendarRange className="w-4 h-4" />
                </Button>
              </div>
              <p className="mt-3 text-sm font-geist tracking-tighter text-gray-400">
                {hero?.availabilityText || "Limited spots. The next sprint begins [Date]."}
              </p>
            </div>

            {/* Preview card */}
            <div className="flex-1 w-full">
              <div className="relative w-full max-w-xl mx-auto">
                <div className="relative overflow-hidden border rounded-2xl shadow-2xl backdrop-blur bg-gray-900/50 border-white/10">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                        <Cpu className="w-4.5 h-4.5" />
                      </span>
                      <p className="text-sm font-geist tracking-tighter">{hero?.demoApp?.title || "AI Car Diagnostic App"}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs ring-1 font-geist tracking-tighter bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
                      <Cloud className="w-3.5 h-3.5" />
                      {hero?.demoApp?.status === 'live' ? 'Live' : hero?.demoApp?.status === 'demo' ? 'Demo' : hero?.demoApp?.status === 'development' ? 'Development' : 'Live'}
                    </span>
                  </div>
                  <div className="p-4 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border p-4 border-white/10 bg-black/30">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 bg-white/5 ring-white/10">
                          <Car className="w-4 h-4" />
                        </span>
                        <p className="text-sm font-geist tracking-tighter">{hero?.demoApp?.inputPlaceholder || "Describe your issue"}</p>
                      </div>
                      <div className="mt-3 rounded-lg border p-3 border-white/10 bg-white/5">
                        <p className="text-xs font-geist tracking-tighter text-gray-400">Prompt</p>
                        <p className="text-sm mt-1 font-geist tracking-tighter text-gray-100">
                          {hero?.demoApp?.inputExample || '"High‑pitched squeal when braking, worse in rain."'}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md transition font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
                      >
                        Analyze
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
                          <path d="M20 2v4"/>
                          <path d="M22 4h-4"/>
                          <circle cx="4" cy="20" r="2"/>
                        </svg>
                      </Button>
                    </div>
                    <div className="rounded-xl border p-4 border-white/10 bg-black/30">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 bg-white/5 ring-white/10">
                          <Stethoscope className="w-4 h-4" />
                        </span>
                        <p className="text-sm font-geist tracking-tighter">AI diagnosis</p>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm">
                        {hero?.demoApp?.analysisResults?.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 font-geist tracking-tighter">
                            {index === hero.demoApp.analysisResults.length - 1 ? (
                              <Wrench className="mt-0.5 w-4 h-4 text-indigo-300" />
                            ) : (
                              <Check className="mt-0.5 w-4 h-4 text-emerald-300" />
                            )}
                            {result}
                          </li>
                        )) || (
                          <>
                            <li className="flex items-start gap-2 font-geist tracking-tighter">
                              <Check className="mt-0.5 w-4 h-4 text-emerald-300" />
                              Likely brake wear indicator contacting rotor.
                            </li>
                            <li className="flex items-start gap-2 font-geist tracking-tighter">
                              <Check className="mt-0.5 w-4 h-4 text-emerald-300" />
                              Risk: Low–Medium. Inspect pads and rotors.
                            </li>
                            <li className="flex items-start gap-2 font-geist tracking-tighter">
                              <Wrench className="mt-0.5 w-4 h-4 text-indigo-300" />
                              DIY steps + shop estimate provided.
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-x-6 -bottom-6 -z-10 h-32 bg-gradient-to-t to-transparent from-black" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}