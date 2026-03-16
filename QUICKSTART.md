# Quick Start Guide

Get your Cloud Engineer portfolio up and running in less than 10 minutes.

## 5-Minute Setup

### Step 1: Install Dependencies (2 min)
```bash
npm install
```

### Step 2: Create Environment File (1 min)
```bash
cp .env.local.example .env.local
```

### Step 3: Run Development Server (1 min)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Update Your Information (5 min)

Edit these key files with your information:

#### File 1: [components/sections/Hero.tsx](components/sections/Hero.tsx)
```typescript
// Update your profile image alt text
// Update social media links (lines with socialLinks)
// The quote is at line with "In the cloud, continuous learning..."
```

#### File 2: [components/sections/About.tsx](components/sections/About.tsx)
```typescript
// Update professional summary (lines with white text)
// Update highlights titles and descriptions
```

#### File 3: [components/sections/Experience.tsx](components/sections/Experience.tsx)
```typescript
// Update experiences array with your work history
// Update company names, roles, durations, achievements
```

#### File 4: [components/sections/Skills.tsx](components/sections/Skills.tsx)
```typescript
// Update skillsData array
// Change skill names and proficiency levels (0-100)
```

#### File 5: [components/sections/Tools.tsx](components/sections/Tools.tsx)
```typescript
// Update tools array with your technologies
// Change tool names and categories
```

#### File 6: [app/layout.tsx](app/layout.tsx)
```typescript
// Update page title (line with 'Cloud Engineer | Portfolio')
// Update meta description
// Update social links in openGraph
```

#### File 7: [components/Footer.tsx](components/Footer.tsx)
```typescript
// Update social media links (socialLinks array)
```

## Adding Images

### Profile Photo
1. Get a professional headshot photo (preferably 200x200px)
2. Convert to JPG format
3. Replace [public/profile.jpg](public/profile.jpg)

### Project Images
1. Prepare project screenshots or images (800x400px recommended)
2. Save in [public/projects/](public/projects/)
3. Update file names in [components/sections/WeekendProjects.tsx](components/sections/WeekendProjects.tsx)

### Project Images Needed:
- `k8s-migration.jpg` - Kubernetes Migration
- `cicd-pipeline.jpg` - CI/CD Pipeline
- `cost-optimizer.jpg` - AWS Cost Optimizer
- `monitoring-dashboard.jpg` - Monitoring Dashboard
- `terraform-modules.jpg` - Terraform Modules
- `docker-optimization.jpg` - Docker Optimization

## Updating Content

### Quick Content Changes

#### Update Name/Title
File: [components/sections/Hero.tsx](components/sections/Hero.tsx)
```typescript
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">
  Cloud Engineer  {/* Change this */}
</h1>
```

#### Update Motto/Tagline
File: [components/sections/Hero.tsx](components/sections/Hero.tsx)
```typescript
<p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
  AWS • Terraform • DevOps • Cloud Architecture  {/* Update this */}
</p>
```

#### Update Quote
File: [components/sections/Hero.tsx](components/sections/Hero.tsx)
```typescript
<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 italic">
  Your new quote here  {/* Update this */}
</p>
```

#### Update Chatbot Q&A
File: [components/Chatbot.tsx](components/Chatbot.tsx)
```typescript
const qaDatabase = {
  'hello': 'Your greeting here',
  'your question': 'Your answer here',
  // Add more Q&A pairs
}
```

#### Update Social Links
File: [components/Footer.tsx](components/Footer.tsx)
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/YOUR_PROFILE',  // Update this
    aria: 'GitHub profile',
  },
  // ... update other links
]
```

## Local Development

### Available Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### File Structure
```
portfolio_website/
├── app/
│   ├── layout.tsx        ← Update metadata here
│   ├── page.tsx          ← Add/remove sections
│   ├── globals.css       ← Global styles
│   └── api/
│       └── contact/route.ts  ← Contact form backend
├── components/
│   ├── Navbar.tsx        ← Navigation
│   ├── Footer.tsx        ← Update social links
│   ├── Chatbot.tsx       ← Q&A database
│   └── sections/         ← Each section component
├── hooks/
│   └── useInView.ts      ← Scroll animation hook
├── utils/
│   ├── helpers.ts        ← Utility functions
│   └── constants.ts      ← App constants
└── public/
    ├── profile.jpg       ← Your photo
    ├── resume.pdf        ← Your resume
    └── projects/         ← Project images
```

## Testing Locally

### Test Features

1. **Navigation**: Click navbar links, should smooth scroll
2. **Theme Toggle**: Click sun/moon icon, should toggle dark/light
3. **Mobile Menu**: On mobile, hamburger menu should work
4. **Contact Form**: Fill form, should validate and submit
5. **Resume Download**: Click "Download Resume" button
6. **Chatbot**: Click floating button, should open chat
7. **Social Links**: All social links should open in new tabs
8. **Smooth Scroll**: Scroll down, sections should animate

### Check Performance

```bash
npm run build
npm start

# Open Chrome DevTools (F12)
# Go to Lighthouse tab
# Click "Analyze page load"
# Should be 90+ on all metrics
```

## Common Customizations

### Change Primary Color

1. Open [tailwind.config.ts](tailwind.config.ts)
2. Update colors configuration
3. Or update CSS variables in [app/globals.css](app/globals.css)

### Add New Section

1. Create file: `components/sections/YourSection.tsx`
2. Import in [app/page.tsx](app/page.tsx)
3. Add to the return statement

### Change Font

1. Import font in [app/layout.tsx](app/layout.tsx):
```typescript
import { SomeFont } from 'next/font/google'
const font = SomeFont({ subsets: ['latin'] })
```

2. Apply to html element:
```typescript
<html lang="en" className={font.className}>
```

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
# Or kill process using port 3000
```

### Node Modules Issues
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build Fails
```bash
npm run lint   # Check for errors
npx tsc --noEmit  # Check TypeScript
```

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check class names in Tailwind config

### Images Not Showing
- Ensure files are in `public/` folder
- Check file paths match exactly
- Images should be in public root or subdirectories

## Next Steps

1. ✅ Run locally and test
2. ✅ Update all content
3. ✅ Replace images
4. ✅ Test on mobile
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel (See [DEPLOYMENT.md](DEPLOYMENT.md))

## Need Help?

- Check [README.md](README.md) for detailed documentation
- See [FEATURES.md](FEATURES.md) for feature documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Visit [Next.js Docs](https://nextjs.org/docs)

## Ready to Deploy?

Once you're happy with your local version, follow the [Deployment Guide](DEPLOYMENT.md) to launch to production.

---

**You're 10 minutes away from a live portfolio! 🚀**

Questions? Check the comprehensive documentation files or update the components directly - everything is clearly commented.

Happy building! 🎉
