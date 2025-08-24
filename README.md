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

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server  
npm start

# Run linter
npm run lint
```

## 🛠 API Integration Details

### Beehiiv API (`/api/subscribe`)
- **Endpoint**: `POST /api/subscribe`
- **Purpose**: Create subscribers and enroll in automations
- **Request**: `{ name: string, email: string }`
- **Features**: Custom fields, automation enrollment, error handling
- **Response**: Success/error with subscriber details

### Environment Variables
- `BEEHIIV_API_KEY`: Your Beehiiv API key
- `BEEHIIV_PUBLICATION_ID`: Publication ID (format: `pub_xxx`)
- `BEEHIIV_AUTOMATION_IDS`: Comma-separated automation IDs
- `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`: Stripe Payment Link URL

## 🔍 Troubleshooting

### Common Issues

**Email Not Appearing in Beehiiv**
- Check API key permissions in Beehiiv settings
- Verify custom field "name" exists in your publication
- Check if double opt-in is enabled (subscribers appear as "pending")

**Payment Redirect Not Working**
- Verify `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` in environment
- Check browser console for JavaScript errors
- Ensure form submits successfully before redirect

**Automation Not Triggering**
- Confirm automation uses "Add by API" trigger
- Verify automation is published/active in Beehiiv
- Check automation ID format matches environment variable

### Debug Mode
Development mode includes detailed logging. Check terminal output when testing the subscription flow.

## 🎨 Customization

### Updating Workshop Price
1. Edit button text in `components/ApplySection.tsx` (line ~158)
2. Update Stripe Payment Link price in Stripe Dashboard
3. Rebuild and redeploy

### Adding New Automations  
1. Create automation in Beehiiv with "Add by API" trigger
2. Add automation ID to `BEEHIIV_AUTOMATION_IDS` (comma-separated)
3. Test via form submission

### Styling Customization
- **Fonts**: Configured in `tailwind.config.ts` with Google Fonts
- **Colors**: Dark theme with blue accents, customizable in Tailwind config
- **Components**: Modular design, easy to modify individual sections

## 🚀 Deployment

### Quick Deploy
```bash
npm run build
npm start
```

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Environment Variables for Production
Remember to add all environment variables to your hosting platform:
- Beehiiv API credentials
- Stripe Payment Link
- Sanity CMS credentials (if using)

## 📊 Analytics & Optimization

The conversion funnel is designed for easy tracking:
- **Form submissions** → Beehiiv subscriber count
- **Payment completions** → Stripe dashboard
- **Community joins** → Skool member count

### A/B Testing Ideas
- Different pricing strategies
- Alternative button copy
- Various form layouts
- Different value propositions

## 🔐 Security Notes

- API keys are server-side only (not exposed to frontend)
- Stripe handles all payment security (PCI compliance)
- Webhook verification prevents unauthorized requests
- HTTPS required for production

## 📞 Support

For development questions, refer to `CLAUDE.md` for detailed context and troubleshooting information.

## 📄 License

This project is created for the AI Product Sprint workshop. Feel free to use as a template for your own workshops or products.