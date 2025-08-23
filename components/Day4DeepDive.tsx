'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { 
  ServerCog, 
  BadgeDollarSign, 
  ArrowRight, 
  CalendarRange, 
  Bot, 
  KeyRound, 
  SquareCode, 
  Wallet, 
  Check, 
  Stars, 
  Clock, 
  BarChart2, 
  FileCode2, 
  Copy, 
  Play, 
  Zap 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Day4DeepDive() {
  const [copied, setCopied] = useState(false)
  const [issue, setIssue] = useState('')
  const [cost, setCost] = useState('')
  const [output, setOutput] = useState('Output will appear here...')
  const [outputType, setOutputType] = useState('default') // 'default', 'success', 'error'
  const chartRef = useRef<HTMLCanvasElement>(null)

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const copyPrompt = async () => {
    const promptText = '"Write a javascript function that takes a JSON object with \'issue\' and \'cost\' and formats it into a user-friendly summary string."'
    try {
      await navigator.clipboard.writeText(promptText)
      setCopied(true)
      setTimeout(() => setCopied(false), 700)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const runDemo = () => {
    try {
      function formatSummary(input: { issue: string; cost: string | number }) {
        const issueValue = typeof input.issue === 'string' && input.issue.trim() ? input.issue.trim() : 'Unknown issue'
        const costNum = typeof input.cost === 'number' ? input.cost : Number(input.cost)
        const costValue = Number.isFinite(costNum) ? costNum : 0
        const tierHint = costValue > 150 ? 'Consider Pro for detailed steps.' : 'Free plan covers basics.'
        return `Issue: ${issueValue} • Estimated cost: $${costValue.toFixed(0)} — ${tierHint}`
      }
      
      const result = formatSummary({ issue, cost })
      setOutput(result)
      setOutputType('success')
    } catch (e) {
      setOutput('Error running demo.')
      setOutputType('error')
    }
  }

  // Chart initialization (placeholder for Chart.js)
  useEffect(() => {
    // In a real implementation, you'd initialize Chart.js here
    // For now, we'll just show a placeholder
  }, [])

  return (
    <section id="day4" className="bg-gray-950 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: different structure from Day 3 */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black/40 p-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 bg-white/5">
                <ServerCog className="w-4 h-4 text-emerald-300" />
              </span>
              <div>
                <p className="text-xs uppercase text-blue-300/90 font-geist tracking-tighter">Day 4 Deep Dive</p>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
                  AI‑Assisted Backend & Business Logic
                </h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-emerald-400/10 border-emerald-400/20 text-emerald-300">
                <BadgeDollarSign className="w-3.5 h-3.5" />
                Framework Focus: Business (Pricing Strategy)
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleNavClick('#apply')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
                >
                  Join Day 4 Session
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

        {/* New asymmetric layout: Left content stack + Right sticky code demo */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Live action + pricing + chart */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Action pipeline */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                  <Bot className="w-4 h-4 text-indigo-300" />
                </span>
                <p className="text-sm font-geist tracking-tighter text-gray-100">Live Action</p>
              </div>
              <p className="mt-3 text-sm font-geist tracking-tighter text-gray-300">
                The magic happens. We'll connect our app to the <span className="text-white">OpenAI API</span>. Using an AI Coding Assistant like <span className="text-white">Cursor</span>, we'll write backend logic to process user input and implement a simple <span className="text-white">Pricing Strategy</span> with a "Pro" feature.
              </p>

              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 ring-1 ring-blue-400/20 text-blue-300">
                      <KeyRound className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-geist tracking-tighter text-gray-100">Connect OpenAI</p>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Securely store keys, test a completions endpoint.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/10 ring-1 ring-violet-400/20 text-violet-300">
                      <SquareCode className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-geist tracking-tighter text-gray-100">Write business logic</p>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Generate functions with Cursor and refine.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
                      <BadgeDollarSign className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-geist tracking-tighter text-gray-100">Add "Pro" feature</p>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Gate advanced steps behind a simple plan.</p>
                </div>
              </div>
            </div>

            {/* Pricing Strategy mini-comparison */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                    <Wallet className="w-4 h-4 text-emerald-300" />
                  </span>
                  <p className="text-sm font-geist tracking-tighter text-gray-100">Pricing Strategy</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
                  Simple testable tiers
                </span>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-geist tracking-tighter text-gray-100">Free</p>
                    <span className="text-[11px] rounded px-2 py-0.5 bg-gray-400/10 text-gray-300 ring-1 ring-white/10">Starter</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm font-geist tracking-tighter text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      Basic diagnosis summary
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      Estimated cost range
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-500/10 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-geist tracking-tighter text-white">Pro</p>
                    <span className="text-[11px] rounded px-2 py-0.5 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">Upgrade</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm font-geist tracking-tighter text-gray-200">
                    <li className="flex items-start gap-2">
                      <Stars className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      Step‑by‑step repair guidance
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="mt-0.5 w-3.5 h-3.5 text-emerald-300" />
                      Shop time estimate + parts list
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Chart: MVP Progress */}
            <div className="bg-black/40 border-white/10 border rounded-2xl px-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-geist tracking-tighter text-gray-400">MVP Progress</p>
                <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
                  <Stars className="w-3 h-3" />
                  Auto‑updated
                </span>
              </div>
              <div className="mt-3">
                <canvas ref={chartRef} height="242" style={{display: 'block', boxSizing: 'border-box', height: '121px', width: '458px'}} width="917" className="" />
              </div>
            </div>
          </div>

          {/* Right: Sticky code demo */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/40">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 ring-white/10 bg-white/5">
                      <FileCode2 className="w-4 h-4 text-violet-300" />
                    </span>
                    <p className="text-sm font-geist tracking-tighter text-gray-100">Backend function (demo)</p>
                  </div>
                  <span className="text-[11px] font-geist tracking-tighter text-gray-400">JavaScript</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400 font-geist tracking-tighter">AI Prompt Example (for the code)</p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={copyPrompt}
                      className={`inline-flex items-center gap-1.5 text-[11px] rounded-md px-2 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition text-gray-300 ${copied ? 'ring-blue-400' : ''}`}
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                  <pre className="mt-2 text-[13px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre-wrap">
                    "Write a javascript function that takes a JSON object with 'issue' and 'cost' and formats it into a user-friendly summary string."
                  </pre>

                  <div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-3">
                    <pre className="text-[12.5px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre">{`function formatSummary(input) {
  const issue = typeof input.issue === 'string' && input.issue.trim() ? input.issue.trim() : 'Unknown issue';
  const costNum = typeof input.cost === 'number' ? input.cost : Number(input.cost);
  const cost = Number.isFinite(costNum) ? costNum : 0;
  const tierHint = cost > 150 ? 'Consider Pro for detailed steps.' : 'Free plan covers basics.';
  return \`Issue: \${issue} • Estimated cost: $\${cost.toFixed(0)} — \${tierHint}\`;
}`}</pre>
                  </div>

                  {/* Tiny runner */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="day4-issue" className="sr-only">Issue</label>
                      <input 
                        id="day4-issue"
                        type="text" 
                        placeholder="e.g. Squeal when braking"
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="day4-cost" className="sr-only">Cost</label>
                      <input 
                        id="day4-cost"
                        type="number" 
                        placeholder="120"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={runDemo}
                    className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md transition font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300"
                  >
                    Run demo
                    <Play className="w-3.5 h-3.5" />
                  </Button>
                  <div className={`mt-3 rounded-md border border-white/10 bg-white/5 p-3 text-[13px] font-geist tracking-tighter ${
                    outputType === 'success' ? 'text-emerald-300' : 
                    outputType === 'error' ? 'text-rose-300' : 
                    'text-gray-300'
                  }`}>
                    {output}
                  </div>
                </div>
              </div>

              {/* Inline visual */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" 
                  alt="Backend & business logic wiring preview" 
                  width={2160}
                  height={1440}
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    Logic → Pricing in 60 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}