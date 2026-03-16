# Vercel Deployment Guide

Complete step-by-step guide to deploy your Cloud Engineer portfolio to Vercel.

## Pre-Deployment Checklist

- [ ] Updated personal information in all sections
- [ ] Replaced placeholder images with your own
- [ ] Updated social media links
- [ ] Replaced resume PDF
- [ ] Tested locally with `npm run dev`
- [ ] Ran `npm run build` successfully
- [ ] Committed all changes to Git

## Quick Deployment (5 minutes)

### Method 1: GitHub + Vercel (Recommended)

#### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio_website.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (or log in)
2. Click "New Project"
3. Select "Import from Git"
4. Search for your repository and click "Import"
5. Click "Deploy"

✅ **Your site is now live!** Vercel will provide you with a URL like `https://portfolio-website-xxxxx.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts to link your account and configure the project
```

### Method 3: Manual Upload to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Click "Continue from template"
4. Select "Next.js"
5. Scroll down and click "Create Git Repository"
6. Follow the prompts

## Configuration (Optional)

### Environment Variables

If you want to use environment variables (e.g., for email service integration):

1. In Vercel Dashboard:
   - Go to your project
   - Click "Settings"
   - Click "Environment Variables"
   - Add your variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-domain.com
     RESEND_API_KEY=your_api_key (if using Resend)
     ```

2. Click "Save"

### Custom Domain

1. In Vercel Dashboard:
   - Go to your project
   - Click "Settings"
   - Click "Domains"
   - Click "Add"
   - Enter your custom domain
   - Follow DNS configuration instructions

### Analytics

To enable Vercel Analytics:

```bash
vercel analytics enable
```

Or in Vercel Dashboard:
- Go to "Settings"
- Click "Analytics"
- Click "Enable Web Analytics"

## Continuous Deployment

Once connected to GitHub, Vercel automatically deploys when you:

1. Push to the `main` branch
2. Create a pull request (preview deployment)

### Workflow

```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Vercel automatically deploys to production! ✨
```

## Troubleshooting

### Build fails with "next build" error

```bash
# Build locally first
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

### Environment variables not loading

1. Verify they're added in Vercel Dashboard
2. Redeploy after adding variables
3. Use `NEXT_PUBLIC_` prefix for client-side variables

### Deployment takes too long

- First deployment is slower (caching)
- Check build logs in Vercel Dashboard
- Optimize large images if included

### 404 errors after deployment

- Clear browser cache
- Check that all file paths are correct
- Verify images are in `public/` folder

### Custom domain not working

- Wait 24-48 hours for DNS propagation
- Verify DNS settings match Vercel requirements
- Clear browser cache and try incognito mode

## Production Checklist

- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Contact form works
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive layout works
- [ ] All links are functional
- [ ] Navigation smooth scrolling works
- [ ] Social links work
- [ ] Resume PDF downloads
- [ ] Chatbot responds correctly
- [ ] Performance is good (check Lighthouse)

## Performance Optimization

### Check Lighthouse Score

1. Open your deployed site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Click "Analyze page load"

**Target: 90+ on all metrics**

### If score is low

- Compress images using tools like [TinyPNG](https://tinypng.com)
- Remove unused CSS/JavaScript
- Enable Vercel Web Analytics
- Check for memory leaks with DevTools
- Use `next/image` for image optimization

## Monetization (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Get your Measurement ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=your-measurement-id
   ```
4. Create `lib/gtag.ts` for Google Analytics setup
5. Add to your layout

### Enable Vercel Analytics

Already configured! Just enable in Vercel Dashboard:
- Settings → Analytics → Enable Web Analytics

## Security

### Best Practices

- ✅ Never commit `.env.local` to Git (already in `.gitignore`)
- ✅ Use environment variables for sensitive data
- ✅ Keep dependencies updated: `npm update`
- ✅ Enable branch protection on main branch (GitHub)
- ✅ Use HTTPS only (Vercel provides SSL certificate)

### Check Dependencies for Vulnerabilities

```bash
npm audit

# Fix vulnerabilities (if any)
npm audit fix
```

## Monitoring

### Set Up Alerts (Vercel Pro)

1. In Vercel Dashboard
2. Click "Settings"
3. Click "Alerts"
4. Configure alerts for:
   - Build failure
   - High error rate
   - Slow response time

### Check Build Logs

1. In Vercel Dashboard
2. Click "Deployments"
3. Select a deployment
4. View detailed build logs

## Next Steps After Deployment

1. **Update social links** to your actual profiles
2. **Add Google Analytics** for traffic tracking
3. **Set up email** for contact form (Resend or Nodemailer)
4. **Configure custom domain**
5. **Set up GitHub Actions** for automated testing (optional)
6. **Add sitemap** for better SEO
7. **Monitor analytics** and user behavior

## Updating Your Site

After making changes:

```bash
# Make changes locally
git add .
git commit -m "Update section content"
git push origin main

# Vercel automatically deploys!
# Check deployment status in Vercel Dashboard
```

## Rollback to Previous Version

If something goes wrong:

1. In Vercel Dashboard
2. Go to "Deployments"
3. Find the previous good deployment
4. Click the three dots
5. Click "Promote to Production"

## Performance Tips

1. **Image Optimization**
   - Use Next.js `<Image>` component
   - Compress images before uploading
   - Use WebP format when possible

2. **Code Splitting**
   - Already handled by Next.js automatically
   - Dynamic imports for heavy components

3. **Caching**
   - Vercel handles static asset caching
   - Set cache headers in `next.config.ts`

4. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

## Support

### Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Alternative](https://pages.github.com)

### Getting Help

1. Check Vercel Build Logs
2. Check browser Console (F12)
3. Search existing issues on GitHub
4. Ask on Stack Overflow with tag `next.js`

## Congratulations! 🎉

Your Cloud Engineer portfolio is now live on the internet! Share your URL with:
- Recruiters
- Friends and colleagues
- LinkedIn profile
- Job applications
- Email signature

---

**Remember**: Your portfolio is a living document. Keep it updated with:
- New projects
- Updated skills
- Recent certifications
- Latest experience
- Fresh blog posts

Good luck with your portfolio! 🚀
