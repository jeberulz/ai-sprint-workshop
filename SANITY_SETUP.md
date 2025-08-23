# Sanity CMS Integration Setup

Your Next.js application has been successfully integrated with Sanity CMS! Here's how to complete the setup:

## 🚀 Quick Setup Guide

### 1. Create a Sanity Project

First, you need to authenticate with Sanity and create a new project:

```bash
npx sanity init
```

Follow the prompts to:
- Log in with your preferred method (Google, GitHub, or email)
- Create a new project (or select an existing one)
- Choose "production" as your dataset name
- Don't add any sample data (we have our own schemas)

### 2. Update Environment Variables

After creating your project, update `.env.local` with your actual Sanity project details:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_TOKEN=your_sanity_token_here
```

You can find your project ID in the Sanity management console or it will be displayed during the init process.

### 3. Create a Sanity Token (Optional)

If you need write access (for preview mode or server-side mutations):
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API → Tokens
4. Create a new token with Editor permissions
5. Add it to your `.env.local`

### 4. Access Sanity Studio

Once set up, you can access the Sanity Studio at:
- **Local Development**: http://localhost:3000/studio
- **Production**: https://yourdomain.com/studio

## 📝 Content Management

### Available Content Types

Your CMS now supports the following content types:

1. **Hero Section** - Main landing page content
2. **Testimonials** - Customer testimonials with ratings
3. **FAQ** - Frequently asked questions
4. **Agenda Days** - Daily agenda items
5. **Outcomes** - Expected outcomes and benefits
6. **Site Settings** - Global site configuration

### Adding Content

1. Navigate to `/studio` in your browser
2. Log in with your Sanity credentials
3. Start creating content using the schemas provided
4. Publish your changes
5. Your Next.js app will automatically use the new content

### Content Structure

- **Hero**: Configure the main headline, description, buttons, and demo app details
- **Testimonials**: Add customer quotes with author info and badges
- **FAQ**: Create question-answer pairs with ordering
- **Site Settings**: Update meta tags, section titles, and global content

## 🔧 Development Features

### Fallback Content

All components include fallback content, so your site will work even without Sanity data. This ensures:
- Development environment works immediately
- Graceful degradation if CMS is unavailable
- Easy testing and development workflow

### Type Safety

Full TypeScript integration ensures:
- Auto-completion for content fields
- Compile-time error checking
- Better development experience

### Performance

- **Static Generation**: Content is fetched at build time by default
- **Image Optimization**: Automatic image optimization via Sanity CDN
- **Caching**: Built-in caching for better performance

## 🎯 Next Steps

1. **Create Initial Content**: Add your first hero section, testimonials, and FAQ items
2. **Customize Schemas**: Modify the schemas in `lib/sanity/schemas/` to match your needs
3. **Add More Content Types**: Extend the CMS by adding new schemas for additional sections
4. **Set Up Preview Mode**: Enable live preview functionality (optional)

## 📚 File Structure

```
lib/sanity/
├── schemas/           # Content type definitions
│   ├── hero.ts
│   ├── testimonial.ts
│   ├── faq.ts
│   ├── agendaDay.ts
│   ├── outcome.ts
│   └── siteSettings.ts
├── client.ts          # Sanity client configuration
├── queries.ts         # GROQ queries
├── types.ts           # TypeScript interfaces
└── api.ts             # Data fetching functions

app/studio/            # Sanity Studio interface
sanity.config.ts       # Sanity configuration
```

## 🆘 Troubleshooting

### Common Issues

1. **"Cannot find module @sanity/vision"**: Run `yarn add @sanity/vision`
2. **CORS errors**: Make sure your domain is configured in Sanity project settings
3. **Environment variables**: Ensure all required env vars are set and start with `NEXT_PUBLIC_` for client-side access

### Support

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Integration Guide](https://www.sanity.io/docs/nextjs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

Happy content managing! 🎉