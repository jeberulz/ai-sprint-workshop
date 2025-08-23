'use client'

import { Globe, Briefcase, Repeat, Check, ArrowRight, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function OutcomesSection() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="outcomes" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">Become an AI‑Native Builder</p>
          <h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
            Master the Full AI-Powered Workflow. Not Just Theory—Live Execution.
          </h2>
          <p className="mt-4 font-geist tracking-tighter text-gray-300">
            This is not a course. It's a live, intensive sprint. You will learn the complete, end-to-end process of building a modern product by leveraging AI at every single step.
          </p>
          <p className="mt-2 font-geist tracking-tighter text-gray-300">
            We will take a validated startup idea—an <span className="font-geist tracking-tighter text-gray-100">AI Car Diagnostic App</span>—and build it from the ground up.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800">
              <Globe className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="mt-4 text-lg font-geist tracking-tighter">A Live, Deployed AI Application</h3>
            <p className="text-sm text-gray-400 tracking-tighter font-geist mt-2">Your own product, on the internet, that you built from scratch.</p>
          </div>

          <div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
            <div className="w-10 h-10 flex bg-gray-800 rounded-lg items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-geist tracking-tighter">A Full-Stack AI Toolbelt</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li className="flex gap-2 tracking-tighter font-geist items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 w-4 h-4 text-blue-300">
                  <path d="m21 21-4.34-4.34"/>
                  <circle cx="11" cy="11" r="8"/>
                </svg>
                Research & Strategy: with Perplexity & ChatGPT-4.
              </li>
              <li className="flex items-start gap-2 font-geist tracking-tighter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 w-4 h-4 text-indigo-300">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                Branding & Assets: with Midjourney.
              </li>
              <li className="flex items-start gap-2 font-geist tracking-tighter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 w-4 h-4 text-violet-300">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
                UI/UX Design: with Uizard & Visily.
              </li>
              <li className="flex items-start gap-2 font-geist tracking-tighter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 w-4 h-4 text-emerald-300">
                  <path d="m18 16 4-4-4-4"/>
                  <path d="m6 8-4 4 4 4"/>
                  <path d="m14.5 4-5 16"/>
                </svg>
                Development & Code: with Bubble & AI Coding Assistants like Cursor.
              </li>
            </ul>
          </div>

          <div className="group transition-colors hover:bg-black/50 bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800">
              <Briefcase className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="mt-4 text-lg font-geist tracking-tighter">A Career-Defining Portfolio Piece</h3>
            <p className="text-sm text-gray-400 tracking-tighter font-geist mt-2">Demonstrate you can lead the entire product lifecycle with modern tools.</p>
          </div>

          <div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800">
              <Repeat className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="mt-4 text-lg font-geist tracking-tighter">The AI Sprint Framework</h3>
            <p className="mt-2 text-sm font-geist tracking-tighter text-gray-400">A repeatable system to turn any idea into a product in days, not months.</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-gradient-to-b p-5 border-white/10 from-gray-950 to-black">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                <BadgeCheck className="w-4.5 h-4.5 text-emerald-300" />
              </span>
              <div>
                <p className="text-sm font-geist tracking-tighter">By the end of this 5-day sprint, you will have:</p>
              </div>
            </div>
            <Button
              onClick={() => handleNavClick('#apply')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
            >
              Reserve your spot
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'A Live, Deployed AI Application',
              'A Full-Stack AI Toolbelt',
              'A Career-Defining Portfolio Piece',
              'The AI Sprint Framework'
            ].map((item) => (
              <div key={item} className="rounded-lg border p-3 border-white/10 bg-white/5">
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 w-4 h-4 text-emerald-300" />
                  <p className="text-sm font-geist tracking-tighter">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}