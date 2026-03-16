# Cloud Engineer Portfolio Website

A modern, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Optimized for Vercel deployment and Lighthouse performance (90+).

## 🚀 Features

- ✅ **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- ✅ **Fully Responsive**: Mobile-first design with responsive breakpoints
- ✅ **Dark/Light Mode**: Theme toggle with next-themes
- ✅ **Smooth Animations**: Scroll reveal animations and transitions
- ✅ **SEO Optimized**: Metadata API, Open Graph tags, canonical URLs
- ✅ **Performance**: Image optimization, code splitting, lazy loading
- ✅ **Chatbot**: Floating AI assistant with predefined Q&A
- ✅ **Contact Form**: VZ endpoint with validation and error handling
- ✅ **Single Page Scroll**: Smooth navigation between sections
- ✅ **Vercel Ready**: Zero-config deployment ready

## 📋 Sections

1. **Hero** - Profile photo, name, designation, quote, CTA buttons, social links
2. **About** - Professional summary with key highlights
3. **Experience** - Timeline view of work history
4. **Skills** - Categorized skills with proficiency levels
5. **Tools** - Grid of technologies with filtering
6. **Certifications** - Professional certifications with links
7. **Weekend Projects** - Project showcase with filtering and external links
8. **Contact** - Contact form with validation
9. **Chatbot** - Floating assistant for instant Q&A
10. **Navigation** - Sticky navbar with smooth scrolling

## 🛠️ Local Setup

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio_website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Create environment file**
```bash
cp .env.local.example .env.local
```

4. **Update environment variables** (optional)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Production

### Build for production
```bash
npm run build
npm start
```

### Lint the code
```bash
npm run lint
```

## 🌐 Vercel Deployment

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL` with your deployed URL

### Option 2: Direct Upload

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts** to link your account and configure the project

## ✏️ Customization

### Update Personal Information

**Hero Section:**
- [Hero.tsx](components/sections/Hero.tsx) - Profile photo, name, quote, social links
- [layout.tsx](app/layout.tsx) - Meta information and site title

**About Section:**
- [About.tsx](components/sections/About.tsx) - Professional summary and highlights

**Experience Section:**
- [Experience.tsx](components/sections/Experience.tsx) - Work history and achievements

**Skills Section:**
- [Skills.tsx](components/sections/Skills.tsx) - Skills categories and proficiency

**Tools Section:**
- [Tools.tsx](components/sections/Tools.tsx) - Technologies and tools list

**Certifications Section:**
- [Certifications.tsx](components/sections/Certifications.tsx) - Certificates with links

**Projects Section:**
- [WeekendProjects.tsx](components/sections/WeekendProjects.tsx) - Projects with images and links

**Contact & Footer:**
- [Contact.tsx](components/sections/Contact.tsx) - Contact form settings
- [Footer.tsx](components/Footer.tsx) - Social links

### Update Images

- Replace profile photo: `public/profile.jpg`
- Replace project images in: `public/projects/`
- Replace resume PDF: `public/resume.pdf`

### Update Resume

- Replace the PDF file at `public/resume.pdf`
- The download button in Hero section will serve the new file

### Add Contact Form Integration

The contact form is set up with Zod validation. To enable email delivery:

**Option 1: Using Resend**
```typescript
// In app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Then uncomment the resend.emails.send(...) code
```

**Option 2: Using Nodemailer**
```typescript
// Install nodemailer
npm install nodemailer

// Update the API route to use Nodemailer
```

## 🎨 Theming

### Colors

- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Pink (#ec4899)

Modify in:
- [tailwind.config.ts](tailwind.config.ts)
- [globals.css](app/globals.css)

### Font

Currently using system fonts. To add custom fonts:

1. Add to `app/layout.tsx`:
```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'] });
```

## 📊 Performance

### Lighthouse Metrics Target: 90+

- Largest Contentful Paint: < 2.5s
- First Input Delay: < 100ms
- Cumulative Layout Shift: < 0.1

### Optimization Techniques

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading sections
- ✅ CSS-in-JS with Tailwind (purged unused styles)
- ✅ Minified Lucide React icons
- ✅ Framer Motion optimized animations

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 12+, Android 6+

## 🔧 Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Validation**: Zod
- **Notifications**: react-hot-toast

### Deployment
- **Platform**: Vercel
- **Hosting**: Edge Functions (optional)
- **Analytics**: Vercel Analytics (ready to enable)

## 📝 SEO

- ✅ Metadata API for page titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Robots meta tags
- ✅ Canonical URLs
- ✅ Sitemap ready (can be generated)

## 🤖 Chatbot Q&A Database

Add more Q&A pairs in [Chatbot.tsx](components/Chatbot.tsx):

```typescript
const qaDatabase = {
  'your question': 'Your answer',
  'another question': 'Another answer',
  // Add more...
}
```

## 📂 Project Structure

```
portfolio_website/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Main page with all sections
│   ├── globals.css             # Global styles
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API endpoint
├── components/
│   ├── Navbar.tsx              # Navigation bar with theme toggle
│   ├── Footer.tsx              # Footer with social links
│   ├── Chatbot.tsx             # Floating chatbot component
│   ├── ThemeProvider.tsx       # Theme provider wrapper
│   └── sections/               # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Tools.tsx
│       ├── Certifications.tsx
│       ├── WeekendProjects.tsx
│       └── Contact.tsx
├── hooks/
│   └── useInView.ts           # Scroll reveal hook
├── public/
│   ├── profile.jpg            # Profile photo
│   ├── resume.pdf             # Resume PDF
│   └── projects/              # Project images
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── vercel.json                # Vercel deployment config
└── package.json               # Dependencies
```

## 🚀 Deploy Updates

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically deploys on push

## 🐛 Troubleshooting

### Build fails with TypeScript errors
```bash
npm run lint
npx tsc --noEmit
```

### Images not showing
- Check image paths in `public/` folder
- Ensure Next.js Image component is used correctly
- Use fallback images if needed

### Animations not smooth
- Check browser DevTools Performance
- Reduce animation complexity if needed
- Use GPU acceleration in CSS

### Contact form not working
- Check API route at `app/api/contact/route.ts`
- Verify form validation
- Check browser console for errors

## 📞 Support

For issues or feature requests:
1. Check the troubleshooting section
2. Review the Next.js documentation
3. Check Vercel documentation

## 📄 License

MIT License - Feel free to use this template for your portfolio

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Remember to:**
- Update all social links
- Replace placeholder images
- Customize content with your information
- Add your email configuration for contact form
- Update metadata and SEO tags
- Test across different devices and browsers before deployment
