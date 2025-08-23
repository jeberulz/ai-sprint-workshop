'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { href: '#why', label: 'Why' },
    { href: '#outcomes', label: 'Outcomes' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#apply', label: 'Apply' },
    { href: '#faq', label: 'FAQ' }
  ]

  return (
    <footer className="pt-12 pb-8 border-t border-white/10 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <button 
            onClick={() => handleNavClick('#overview')}
            className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="text-sm font-geist tracking-tighter text-white">AI Product Sprint</span>
          </button>
          <nav className="flex items-center gap-4 text-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-400 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {currentYear} AI Product Sprint. All rights reserved.</p>
          <p className="text-xs text-gray-500">Built live with modern AI tools.</p>
        </div>
      </div>
    </footer>
  )
}