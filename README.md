# AI Product Sprint

A modern Next.js landing page for the AI Product Sprint course, built with Tailwind CSS and shadcn/ui components.

## Features

- ✨ **Modern Design**: Dark theme with gradient backgrounds and glassmorphism effects
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎯 **Interactive**: Smooth scrolling navigation, animated progress bar
- 🎨 **Custom Fonts**: Multiple Google Fonts including Geist, Jakarta Sans, and more
- ⚡ **Performance**: Built with Next.js 14 for optimal performance
- 🧩 **Component-based**: Modular components using shadcn/ui

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion (optional)
- **Fonts**: Google Fonts (Geist, Plus Jakarta Sans, Inter)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and font imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Navigation.tsx       # Header navigation with mobile menu
│   ├── HeroSection.tsx      # Hero section with Spline background
│   ├── WhySection.tsx       # Problem/agitation section
│   ├── OutcomesSection.tsx  # Solution/outcomes section
│   ├── AgendaSection.tsx    # 5-day agenda overview
│   ├── Day1DeepDive.tsx     # Detailed Day 1 breakdown
│   ├── ApplySection.tsx     # CTA with application form
│   ├── TestimonialsSection.tsx # User testimonials
│   ├── FAQSection.tsx       # Expandable FAQ
│   ├── Footer.tsx           # Site footer
│   └── ScrollProgress.tsx   # Scroll progress indicator
├── lib/
│   └── utils.ts             # Utility functions for className merging
└── tailwind.config.ts       # Tailwind configuration with custom fonts
```

## Key Features

### 🎨 Design System
- Custom color palette with dark theme
- Multiple font families with proper fallbacks
- Consistent spacing and border radius
- Glassmorphism effects and subtle animations

### 📱 Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Mobile navigation menu
- Optimized images with Next.js Image component

### ⚡ Performance
- Next.js 14 with TypeScript
- Optimized fonts with `next/font`
- Efficient component structure
- Lazy loading for images

### 🎯 Interactive Elements
- Smooth scroll navigation
- Progress bar tracking page scroll
- Expandable FAQ section
- Form validation and submission
- Copy-to-clipboard functionality

## Customization

### Fonts
The project uses multiple Google Fonts configured in `tailwind.config.ts`. To add new fonts:

1. Add the font import to `app/globals.css`
2. Add the font family to `tailwind.config.ts`
3. Use the font class in your components

### Colors
Customize the color scheme in `tailwind.config.ts` and `app/globals.css`. The design uses:
- Dark backgrounds (black, gray-950, gray-900)
- Blue accent colors (blue-400, indigo-600)
- Subtle borders (white/10 opacity)

### Components
All components are modular and can be easily customized:
- Modify content in individual component files
- Adjust styling with Tailwind classes
- Add new sections by creating new components

## Deployment

The project is ready for deployment on Vercel, Netlify, or any hosting platform that supports Next.js:

```bash
npm run build
npm start
```

## License

This project is created for educational purposes as part of the AI Product Sprint course.