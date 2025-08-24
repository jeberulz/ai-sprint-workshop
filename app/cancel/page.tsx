import { XCircle, ArrowLeft, Mail, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6">
            <XCircle className="w-10 h-10 text-orange-400" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 font-geist">
            Payment Cancelled
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No worries! Your spot isn't reserved yet, but your email is safely stored.
          </p>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">What you can do:</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <ArrowLeft className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium">Try again</p>
                  <p className="text-sm text-gray-400">Go back and secure your spot in the workshop</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium">Stay in the loop</p>
                  <p className="text-sm text-gray-400">You'll receive updates about future workshops</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="font-medium">Need help?</p>
                  <p className="text-sm text-gray-400">Contact us if you have questions about payment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Link href="/#apply">
              <Button className="bg-blue-400 text-black hover:bg-blue-300">
                Try Payment Again
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}