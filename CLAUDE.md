# Claude Development Context

## Project Overview
AI Workshop Landing Page with integrated conversion funnel featuring:
- Email collection via Beehiiv integration
- Stripe Payment Links for workshop purchases
- Automated Skool community access via Zapier
- Modern Next.js 15 with TypeScript and Tailwind CSS

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity Studio
- **Email**: Beehiiv API integration
- **Payments**: Stripe Payment Links
- **Automation**: Zapier workflows
- **Community**: Skool integration

## Environment Configuration

### Required Environment Variables
```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=a61g6qyq
NEXT_PUBLIC_SANITY_DATASET=production

# Beehiiv API Configuration  
BEEHIIV_API_KEY=your_api_key
BEEHIIV_PUBLICATION_ID=pub_your_publication_id
BEEHIIV_AUTOMATION_IDS=aut_your_automation_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_payment_link
```

## Architecture

### API Routes
- `/api/subscribe` - Handles Beehiiv email subscription and automation enrollment

### Pages
- `/` - Main landing page
- `/success` - Post-payment success page
- `/cancel` - Payment cancellation page  
- `/studio/[...tool]` - Sanity Studio CMS

### Key Components
- `ApplySection.tsx` - Form with email collection + payment redirect
- Navigation, Hero, FAQ, Testimonials sections
- UI components (Button, Input) in `/components/ui/`

## Conversion Funnel Flow

1. **Landing Page**: User browses workshop content
2. **Apply Section**: User fills name/email form
3. **Beehiiv Integration**: Email captured, added to automation
4. **Payment Redirect**: Automatically redirects to Stripe Payment Link
5. **Payment Processing**: Stripe handles secure checkout
6. **Zapier Automation**: On payment success, invites to Skool community
7. **Success Page**: User lands on confirmation page

## Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## Third-Party Integrations

### Beehiiv API
- **Purpose**: Email list management and automation
- **Implementation**: Custom API integration in `/api/subscribe`
- **Features**: Subscriber creation, custom fields, automation enrollment
- **Endpoint**: `https://api.beehiiv.com/v2/publications/{id}/subscriptions`

### Stripe Payment Links
- **Purpose**: Payment processing without custom backend
- **Implementation**: Environment variable redirect after email capture
- **Features**: One-click checkout, mobile optimization, global payments
- **Success/Cancel URLs**: `/success` and `/cancel` pages

### Zapier Automation
- **Trigger**: Stripe payment success webhook
- **Actions**: 
  1. Send Skool community invite to customer email
  2. Send welcome email with access details
  3. Optional: Move subscriber to "paid customer" automation in Beehiiv

## File Structure
```
/
├── app/
│   ├── api/subscribe/route.ts    # Beehiiv API integration
│   ├── success/page.tsx          # Payment success page
│   ├── cancel/page.tsx           # Payment cancel page
│   └── studio/[[...tool]]/       # Sanity Studio
├── components/
│   ├── ApplySection.tsx          # Main conversion form
│   ├── HeroSection.tsx           # Landing hero
│   └── ui/                       # Reusable UI components
├── lib/sanity/                   # Sanity CMS configuration
└── .env.local                    # Environment variables
```

## Common Build/Deployment Tasks

### Testing Email Integration
```bash
npm run dev
# Fill form at http://localhost:3000/#apply
# Check terminal logs for API responses
```

### Updating Workshop Price
1. Update button text in `ApplySection.tsx` line 158
2. Update Stripe Payment Link price in dashboard
3. Rebuild and deploy

### Adding New Automation
1. Create automation in Beehiiv with "Add by API" trigger
2. Add automation ID to `BEEHIIV_AUTOMATION_IDS` (comma-separated)
3. Test via form submission

## Troubleshooting

### Email Not Appearing in Beehiiv
- Check API key permissions
- Verify custom field "name" exists in publication
- Check subscriber status (might be "invalid" if double opt-in enabled)

### Payment Not Redirecting  
- Verify `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` in environment
- Check browser console for JavaScript errors
- Ensure form submits successfully first

### Automation Not Triggering
- Confirm automation has "Add by API" trigger
- Verify automation is published/active
- Check automation ID format in environment variables

## Performance Notes
- Next.js 15 with App Router for optimal performance
- Static generation where possible
- Tailwind CSS for minimal bundle size
- External APIs (Beehiiv/Stripe) for scalability without database overhead

## Security Considerations
- API keys stored in environment variables only
- Webhook signature verification for Stripe (via Zapier)
- HTTPS required for payment processing
- No sensitive data stored in frontend code

## Future Enhancement Ideas
- A/B testing different pricing/copy
- Advanced analytics and conversion tracking  
- Multi-step checkout optimization
- Waitlist functionality for sold-out workshops
- Affiliate/referral tracking system