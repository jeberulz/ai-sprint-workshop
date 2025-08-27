'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Target, Search, Users, Palette, ArrowRight, CalendarRange, Check, Zap, Copy, Play, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Day1DeepDive() {
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

  const copyPrompt = async () => {
    const promptText = '"Generate 3 distinct user personas for an AI car diagnostic app, including their pain points, goals, and technical skill level."'
    try {
      await navigator.clipboard.writeText(promptText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
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
    <section ref={sectionRef} id="day1" className="bg-gray-950 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <p className="text-sm uppercase text-blue-300/90 font-geist tracking-tighter">Day 1 Deep Dive</p>
            <h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
              AI‑Powered Research & Strategy
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-white/5 border-white/10 text-gray-200">
              <Target className="w-3.5 h-3.5" />
              Framework Focus: Research & Marketing
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-geist tracking-tighter text-gray-400">Live Action</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
                      <Search className="w-3.5 h-3.5 text-blue-300" />
                    </span>
                    Use Perplexity to run a rapid Competitive Analysis: competitors, positioning, pricing, and feature gaps.
                  </li>
                  <li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
                      <Users className="w-3.5 h-3.5 text-indigo-300" />
                    </span>
                    Generate User Personas (goals, pain points, technical level) to guide UX and messaging.
                  </li>
                  <li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
                      <Palette className="w-3.5 h-3.5 text-emerald-300" />
                    </span>
                    Translate insights into brand directions with Midjourney: mood boards, logo concepts, and color systems.
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
                  "Generate 3 distinct user personas for an AI car diagnostic app, including their pain points, goals, and technical skill level."
                </pre>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => handleNavClick('#apply')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
              >
                Join Day 1 Session
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

          {/* Right: Video and Visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-72 sm:h-80">
                {!isVideoPlaying ? (
                  <>
                    <Image 
                      src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" 
                      alt="Research to brand identity workflow" 
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
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
                        <Zap className="w-3.5 h-3.5 text-amber-300" />
                        Research → Brand in 60 minutes
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
                    <source src="/videos/day1-research-strategy.mp4" type="video/mp4" />
                    <source src="/videos/day1-research-strategy.webm" type="video/webm" />
                    <p className="absolute inset-0 flex items-center justify-center text-white bg-black/60">
                      Your browser does not support the video tag.
                    </p>
                  </video>
                )}
              </div>
              {/* Floating outcome card */}
              {!isVideoPlaying && (
                <div className="absolute left-4 -bottom-6 sm:left-6 sm:-bottom-8">
                  <div className="rounded-xl border border-white/10 bg-black/80 backdrop-blur p-4 w-[260px] shadow-2xl">
                    <p className="text-xs font-geist tracking-tighter text-gray-300">You'll walk away with:</p>
                    <ul className="mt-2 space-y-1.5 text-sm font-geist tracking-tighter text-gray-100">
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                        Competitive landscape matrix
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                        3 validated user personas
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                        Brand moodboard + logo drafts
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Spacer to account for floating card overlap */}
          <div className="lg:hidden h-16" />
        </div>
      </div>
    </section>
  )
}