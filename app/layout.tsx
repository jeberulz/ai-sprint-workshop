import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The AI Product Sprint — Design, Build & Launch in 5 Days",
  description: "A live, hands-on sprint to design, build, and deploy an AI-powered application in 5 days. Become an AI‑native builder.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased selection:bg-teal-400/20 selection:text-teal-200 bg-black text-gray-100`} style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
        {children}
      </body>
    </html>
  )
}