# Vercel Deployment Instructions

## Quick Start

To deploy this Next.js project to Vercel:

### Option 1: Using Vercel CLI (Recommended)
```bash
npm i -g vercel
vercel
```

Then follow the prompts to:
- Link to your GitHub account
- Select the GitHub repository: `mikewilley-vibe/orchard-house-basketball`
- Configure project settings (use defaults for Next.js)
- Deploy to production

### Option 2: Via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import from GitHub: `mikewilley-vibe/orchard-house-basketball`
4. Click "Deploy"
5. Wait for build to complete

## Project Configuration

This is a Next.js 16.1.1 project with:
- **Framework**: Next.js with Turbopack
- **Styling**: Tailwind CSS 4
- **Environment**: Node.js 18+

## Auto-Deployment

Once connected, every push to the `main` branch will automatically deploy to production.

## Domain Setup

After deployment, you can add a custom domain:
1. Go to project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain (e.g., wolfhounds.example.com)
4. Follow DNS configuration instructions

## Build Output

The site will be available at:
- `https://st-patricks-wolfhounds.vercel.app` (default Vercel domain)
- Or your custom domain once configured

