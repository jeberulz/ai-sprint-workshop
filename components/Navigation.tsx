'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Rocket, ArrowRight, CalendarRange, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = ['#why', '#outcomes', '#agenda', '#apply', '#faq']
    const sectionElements = sections.map(id => document.querySelector(id)).filter(Boolean)
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = '#' + entry.target.id
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(id)
        }
      })
    }, { threshold: [0.5] })
    
    sectionElements.forEach(s => s && observer.observe(s))
    
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { href: '#why', label: 'Why' },
    { href: '#outcomes', label: 'Outcomes' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#apply', label: 'Apply' }
  ]

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <header id="site-header" className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-transform duration-300 will-change-transform bg-black/70 border-white/5">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          {/* Brand */}
          <button 
            onClick={() => handleNavClick('#overview')}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-indigo-600">
              <Menu className="w-[18px] h-[18px]" />
            </span>
            <span className="text-lg font-geist tracking-tighter" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif'}}>
              AI Product Sprint
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 rounded-full border px-2 border-white/10 bg-black/30">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm transition font-geist tracking-tighter hover:text-white ${
                  activeSection === item.href ? 'text-white' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleNavClick('#apply')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-gray-100 text-black hover:bg-gray-200"
            >
              Join the Sprint
              <Rocket className="w-4 h-4" />
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900"
              aria-expanded={isOpen}
              aria-controls="mobile-panel"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/60" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 p-3 transition-all">
            <div className="rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden border-white/10 bg-gray-950/95">
              <div className="p-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-geist tracking-tighter hover:bg-white/5 text-white"
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
                <Button
                  onClick={() => handleNavClick('#apply')}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm transition-all font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
                >
                  Join the Sprint
                  <Rocket className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}