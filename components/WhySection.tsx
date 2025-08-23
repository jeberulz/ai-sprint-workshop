'use client'

import Image from 'next/image'
import { XCircle } from 'lucide-react'

export default function WhySection() {
  return (
    <section id="why" className="bg-gray-950 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Headline and intro */}
          <div className="lg:col-span-8">
            <div className="border-b border-white/10 pb-6">
              <p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">The Game Has Changed</p>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
                Are You Building at the Speed of AI?
              </h2>
              <p className="mt-4 font-geist tracking-tighter text-gray-300">
                The old way of building products is too slow. Long research cycles, waiting for designers, and depending on overloaded engineering teams means your best ideas never see the light of day. The AI revolution isn't just about chatbots; it's about a fundamental shift in how we create.
              </p>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" 
                alt="Collaborative team building an AI product rapidly" 
                width={2160}
                height={1440}
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* Right: List column */}
          <aside className="lg:col-span-4">
            <div className="lg:h-full lg:border-l border-white/10 lg:pl-6">
              <ul className="mt-6 text-sm text-gray-300 divide-y divide-white/10">
                <li className="flex gap-3 tracking-tighter font-geist pt-4 pb-4 items-start">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
                    <XCircle className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex-1">
                    You're a PM or designer with a vision, but you're tired of the hand-off process and want to build and iterate yourself.
                  </div>
                </li>
                <li className="py-4 flex items-start gap-3 font-geist tracking-tighter">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
                    <XCircle className="w-3.5 h-3.5" />
                  </span>
                  You're a founder who needs to move at lightning speed, validating ideas and shipping an impressive MVP without a massive budget.
                </li>
                <li className="py-4 flex items-start gap-3 font-geist tracking-tighter">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
                    <XCircle className="w-3.5 h-3.5" />
                  </span>
                  You're using tools like ChatGPT, but you know you're only scratching the surface of what's possible with AI in product development.
                </li>
                <li className="py-4 flex items-start gap-3 font-geist tracking-tighter">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
                    <XCircle className="w-3.5 h-3.5" />
                  </span>
                  You want to prove you're at the forefront of the industry, a true AI-native builder, not just a manager or theorist.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}