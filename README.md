# AI Workshop Landing Page & Conversion Funnel

A complete landing page with integrated payment processing and automation for the AI Product Sprint workshop. Features email collection, payment processing, and automated community access.

## 🚀 Features

### Core Functionality
- ✨ **Modern Landing Page**: Dark theme with gradient backgrounds and glassmorphism effects
- 📧 **Email Integration**: Beehiiv API for subscriber management and automation
- 💳 **Payment Processing**: Stripe Payment Links for secure checkout
- 🏘️ **Community Access**: Automated Skool community invites via Zapier
- 📱 **Mobile Optimized**: Responsive design with one-click checkout

### Technical Features
- 🎯 **Complete Conversion Funnel**: Form → Email Capture → Payment → Automation
- ⚡ **Serverless Architecture**: No database required, uses external APIs
- 🛡️ **Secure Processing**: Webhook verification and encrypted data handling
- 📊 **Analytics Ready**: Track conversion from lead to customer
- 🎨 **Professional UX**: Success/cancel pages with clear next steps

## 🛠 Tech Stack

- **Framework**: Next.js 15 with TypeScript and App Router
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: shadcn/ui components
- **CMS**: Sanity Studio for content management
- **Email Platform**: Beehiiv API integration
- **Payments**: Stripe Payment Links
- **Automation**: Zapier workflows
- **Community**: Skool integration

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and configure:

```env
# Beehiiv API Configuration
BEEHIIV_API_KEY=your_beehiiv_api_key
BEEHIIV_PUBLICATION_ID=pub_your_publication_id  
BEEHIIV_AUTOMATION_IDS=aut_your_automation_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_payment_link

# Sanity CMS (Optional)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Third-Party Setup

#### Beehiiv Setup
1. Create Beehiiv account and publication
2. Generate API key in Settings → API
3. Create custom field named "name" 
4. Create automation with "Add by API" trigger

#### Stripe Setup  
1. Create Stripe Payment Link for your workshop
2. Set success URL: `https://yourdomain.com/success`
3. Set cancel URL: `https://yourdomain.com/cancel`
4. Copy Payment Link to environment variables

#### Zapier Setup (Optional)
1. Create Zap: Stripe Payment Success → Skool Invite
2. Configure trigger for new Stripe payments
3. Set action to invite customer email to Skool community

### 4. Run Development Server
```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── api/subscribe/route.ts    # Beehiiv API integration
│   ├── success/page.tsx          # Payment success page
│   ├── cancel/page.tsx           # Payment cancellation page
│   ├── studio/[[...tool]]/       # Sanity Studio CMS
│   ├── globals.css               # Global styles and font imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── components/
│   ├── ui/                       # shadcn/ui components (Button, Input, etc.)
│   ├── ApplySection.tsx          # Main conversion form with payment
│   ├── Navigation.tsx            # Header navigation
│   ├── HeroSection.tsx           # Landing hero section
│   ├── AgendaSection.tsx         # Workshop agenda overview
│   ├── TestimonialsSection.tsx   # Social proof section
│   ├── FAQSection.tsx            # Frequently asked questions
│   ├── Footer.tsx                # Site footer
│   └── ScrollProgress.tsx        # Scroll progress indicator
├── lib/
│   ├── sanity/                   # Sanity CMS configuration
│   └── utils.ts                  # Utility functions
├── .env.example                  # Environment variables template
├── CLAUDE.md                     # Development context for Claude
└── tailwind.config.ts            # Tailwind configuration
```

## 🎯 Conversion Funnel Flow

1. **Landing Page**: User explores workshop content
2. **Apply Section**: User fills name + email form  
3. **Beehiiv Integration**: Email captured and added to automation
4. **Payment Redirect**: Automatic redirect to Stripe checkout
5. **Stripe Processing**: Secure payment handling
6. **Zapier Automation**: Auto-invite to Skool community on payment success
7. **Success Page**: Confirmation with next steps

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