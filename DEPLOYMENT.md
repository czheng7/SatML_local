# 🚀 Deploy to GitHub Pages

This guide will help you deploy your SatML project to GitHub Pages.

## Prerequisites

- A GitHub repository named `Sat-Local`
- **Node.js 18+ installed** (required for build compatibility)
- Git configured

**⚠️ Important:** Your current Node.js version (16.20.2) is too old. You need Node.js 18+ to build the project.

## Method 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically build and deploy your site

3. **Your site will be available at:**
   ```
   https://[your-username].github.io/Sat-Local/
   ```

## Method 2: Manual Deployment

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## Configuration Files

- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
- **`vite.config.ts`** - Configured with base path for GitHub Pages
- **`package.json`** - Added deployment scripts

## Troubleshooting

- **Site not loading?** Check that the repository name matches exactly: `Sat-Local`
- **Build errors?** Ensure Node.js 18+ is installed
- **404 errors?** Verify the base path in `vite.config.ts` matches your repository name

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the base path in `vite.config.ts` to `/` instead of `/Sat-Local/`
