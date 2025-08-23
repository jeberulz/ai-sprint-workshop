'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  // Only render the studio if we're in the browser
  if (typeof window === 'undefined') {
    return <div>Loading Studio...</div>
  }
  
  return <NextStudio config={config} />
}