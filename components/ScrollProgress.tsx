'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const percent = height > 0 ? (scrollTop / height) * 100 : 0
      setProgress(percent)
    }

    const handleScroll = () => updateProgress()
    const handleResize = () => updateProgress()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    // Initial update
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div 
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r z-[60] from-blue-400 to-purple-400 transition-all duration-200"
      style={{ width: `${progress}%` }}
    />
  )
}