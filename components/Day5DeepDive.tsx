'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { 
  Megaphone, 
  Briefcase, 
  ArrowRight, 
  CalendarRange, 
  Share2, 
  FileText, 
  BarChart2, 
  Rocket, 
  Check, 
  Video, 
  Globe, 
  Copy, 
  Play 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Day5DeepDive() {
  const [copied, setCopied] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const copyURL = async () => {
    const url = 'https://yourapp-demo.live'
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL: ', err)
    }
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.play()
    }
  }

  // Intersection Observer for auto-play
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && !isVideoPlaying && videoRef.current) {
          // Auto-play muted when section comes into view
          videoRef.current.muted = true
          videoRef.current.play().catch(() => {
            // Auto-play failed, which is fine - user can still click play
          })
        } else if (!entry.isIntersecting && videoRef.current && !isVideoPlaying) {
          // Pause when out of view if still in auto-play mode
          videoRef.current.pause()
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVideoPlaying])

  return (
    <section ref={sectionRef} id="day5" className="bg-gray-950 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black/40 p-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 bg-white/5">
                <Megaphone className="w-4 h-4 text-amber-300" />
              </span>
              <div>
                <p className="text-xs uppercase text-blue-300/90 font-geist tracking-tighter">Day 5 Deep Dive</p>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
                  GTM Strategy & Live Deployment
                </h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-amber-400/10 border-amber-400/20 text-amber-300">
                <Briefcase className="w-3.5 h-3.5" />
                Framework Focus: Business (GTM Strategy)
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleNavClick('#apply')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
                >
                  Join Day 5 Session
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleNavClick('#agenda')}
                  variant="outline"
                  className="inline-flex items-center gap-2 transition-all border rounded-full px-4 py-2 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10"
                >
                  Back to Agenda
                  <CalendarRange className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Action */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                  <Megaphone className="w-4 h-4 text-amber-300" />
                </span>
                <p className="text-sm font-geist tracking-tighter text-gray-100">Live Action</p>
              </div>
              <p className="mt-3 text-sm font-geist tracking-tighter text-gray-300">
                We'll use AI to draft a simple <span className="text-white">Go‑To‑Market (GTM) Strategy</span> and a launch announcement. Then, after final testing, we will hit the deploy button in <span className="text-white">Bubble</span> and push our application to a live public URL. You built a product. It's live.
              </p>

              {/* GTM mini plan */}
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/10 ring-1 ring-sky-400/20 text-sky-300">
                      <Share2 className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-geist tracking-tighter text-gray-100">Channels & Audience</p>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Product Hunt, X/LinkedIn, niche communities.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/10 ring-1 ring-violet-400/20 text-violet-300">
                      <FileText className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-geist tracking-tighter text-gray-100">Launch Assets</p>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">AI‑drafted announcement, visuals, and tagline.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
                      <BarChart2 className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-geist tracking-tighter text-gray-100">Metrics to Watch</p>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Sign‑ups, activation rate, Pro conversions.</p>
                </div>
              </div>
            </div>

            {/* Deployment checklist */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                    <Rocket className="w-4 h-4 text-amber-300" />
                  </span>
                  <p className="text-sm font-geist tracking-tighter text-gray-100">Deployment Checklist</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
                  Final pass
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm font-geist tracking-tighter text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                  QA core flows: input → AI call → results
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                  Set environment variables / API keys
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                  Connect custom domain (optional)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                  Deploy to live URL and verify status
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Video placeholder and Live URL */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-64 sm:h-72">
                {!isVideoPlaying ? (
                  <>
                    <Image 
                      src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" 
                      alt="GTM strategy and deployment walk-through" 
                      width={2160}
                      height={1440}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <button 
                      type="button" 
                      onClick={handleVideoPlay}
                      className="absolute inset-0 m-auto h-16 w-16 sm:h-18 sm:w-18 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition"
                    >
                      <Play className="w-6 h-6 text-white" />
                    </button>
                    <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-black/40 text-gray-200">
                        <Video className="w-3 h-3" />
                        Session Walkthrough
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
                        GTM → Deploy in 60 minutes
                      </div>
                    </div>
                  </>
                ) : (
                  <video 
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    controls={isVideoPlaying}
                    muted={!isVideoPlaying}
                    preload="metadata"
                    onLoadStart={() => setIsVideoPlaying(true)}
                    onPlay={() => setIsVideoPlaying(true)}
                  >
                    <source src="/videos/day5-gtm-deployment.mp4" type="video/mp4" />
                    <source src="/videos/day5-gtm-deployment.webm" type="video/webm" />
                    <p className="absolute inset-0 flex items-center justify-center text-white bg-black/60">
                      Your browser does not support the video tag.
                    </p>
                  </video>
                )}
              </div>
            </div>

            {/* Live URL preview */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
                    <Globe className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-sm font-geist tracking-tighter text-gray-100">Live URL</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
                  Ready to launch
                </span>
              </div>
              <div className="mt-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 flex items-center justify-between">
                <p className="text-[13px] font-geist tracking-tighter text-gray-200">https://yourapp-demo.live</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyURL}
                  className="ml-3 inline-flex items-center gap-1.5 text-[11px] rounded px-2 py-1 ring-1 ring-white/10 bg-black/40 text-gray-300 hover:bg-black/60"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}