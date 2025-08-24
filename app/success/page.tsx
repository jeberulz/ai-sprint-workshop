import { CheckCircle, Mail, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 font-geist">
            Welcome to the AI Workshop!
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            🎉 Payment successful! You're all set for the 5-Day AI Product Sprint.
          </p>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-sm text-gray-400">Confirmation and welcome email with all details</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="font-medium">Join the Skool community</p>
                  <p className="text-sm text-gray-400">You'll receive an invite within 10 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium">Workshop starts soon</p>
                  <p className="text-sm text-gray-400">Daily live sessions begin [Date] at [Time]</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}