'use client'

import { useState } from 'react'
import { Clock, Calendar, Users, Video, Files, MessageSquare, Rocket, User, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ApplySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Email captured! Redirecting to secure checkout...' })
        
        // Redirect to Stripe Payment Link after successful Beehiiv subscription
        setTimeout(() => {
          const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || 'https://buy.stripe.com/test_replace_with_your_link'
          window.location.href = stripePaymentLink
        }, 1500) // Brief delay to show success message
        
        // Don't reset form data yet - they might come back
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="apply" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-gradient-to-b p-6 border-blue-400/30 from-gray-900/80 to-black">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold font-geist" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: 600}}>
                Ready to become an AI-native builder?
              </h3>
              <p className="mt-2 font-geist tracking-tighter text-gray-300">
                Join the next live cohort and ship a real, AI-powered application in 5 days.
              </p>
              <p className="mt-1 text-sm font-geist tracking-tighter text-gray-400">
                Limited spots. The next sprint begins [Date].
              </p>
              <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-sm text-gray-300">
                <li className="flex items-center gap-2 font-geist tracking-tighter">
                  <Video className="w-3.5 h-3.5 text-gray-300" />
                  Daily live sessions
                </li>
                <li className="flex items-center gap-2 font-geist tracking-tighter">
                  <Files className="w-3.5 h-3.5 text-gray-300" />
                  Templates & assets
                </li>
                <li className="flex items-center gap-2 font-geist tracking-tighter">
                  <MessageSquare className="w-3.5 h-3.5 text-gray-300" />
                  Q&A + community
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-auto">
              <div className="rounded-xl border p-4 border-white/10 bg-white/5">
                <div className="flex items-center gap-2 text-sm font-geist tracking-tighter text-gray-300">
                  <Clock className="w-4 h-4" />
                  5 days · 60 min/day
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm font-geist tracking-tighter text-gray-300">
                  <Calendar className="w-4 h-4" />
                  Next cohort starts: <span className="ml-1 text-white">[Date]</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm font-geist tracking-tighter text-gray-300">
                  <Users className="w-4 h-4" />
                  Limited seats · Small group
                </div>

                <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                  {message.text && (
                    <div className={`p-3 rounded-md text-sm ${
                      message.type === 'success' 
                        ? 'bg-green-900/20 border border-green-500/30 text-green-300' 
                        : 'bg-red-900/20 border border-red-500/30 text-red-300'
                    }`}>
                      {message.text}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <User className="w-4 h-4" />
                      </span>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-geist tracking-tighter transition-all bg-blue-400 text-black hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-400"
                  >
                    {isSubmitting ? 'Processing...' : 'Join Workshop - $297'}
                    <Rocket className="w-4 h-4" />
                  </Button>
                  <p className="text-[12px] text-gray-400">Secure your spot with instant access to community and materials.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}