# Tech Buyer Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Free)
1. **Push to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/tech-buyer.git
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Deploy automatically

3. **Your live URL will be:** `https://your-project-name.vercel.app`

### Option 2: Netlify (Free)
1. **Push to GitHub** (same as above)
2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Deploy

### Option 3: Railway (Free tier)
1. **Push to GitHub** (same as above)
2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "Deploy from GitHub repo"
   - Select your repository

## 🔐 Fixed Admin Credentials

### Working Login Credentials:
- **Username:** `admin` | **Password:** `admin123`
- **Username:** `demo` | **Password:** `demo`
- **Username:** `test` | **Password:** `test123`

### Admin Features:
- ✅ Real-time price monitoring
- ✅ Manual price updates
- ✅ Order management
- ✅ Device analytics
- ✅ Export functionality
- ✅ Session management (8-hour timeout)

## 🛠️ Local Development

### Prerequisites:
- Node.js 18+ installed
- npm or yarn package manager

### Setup:
\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd tech-buyer

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
\`\`\`

### Admin Access:
- **Local Admin URL:** `http://localhost:3000/admin/login`
- **Live Admin URL:** `https://your-domain.com/admin/login`

## 🔧 Environment Variables

Create a `.env.local` file:
\`\`\`env
# Optional: Add your own API keys
SHIPENGINE_API_KEY=your_shipengine_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
\`\`\`

## 📱 Features Included

### Frontend:
- ✅ Responsive design
- ✅ Real-time quote calculator
- ✅ Shopping cart system
- ✅ Device condition guide
- ✅ Customer testimonials
- ✅ About page

### Admin Dashboard:
- ✅ Secure login system
- ✅ Order management
- ✅ Price monitoring
- ✅ Device analytics
- ✅ Export tools
- ✅ Real-time updates

### Backend:
- ✅ Price scraping system
- ✅ Quote calculation API
- ✅ Shipping integration ready
- ✅ Admin authentication
- ✅ Data persistence

## 🎯 Next Steps After Deployment

1. **Test the live site** with the admin credentials
2. **Customize branding** (logo, colors, content)
3. **Add real payment processing** (Stripe, PayPal)
4. **Connect real database** (PostgreSQL, MongoDB)
5. **Set up email notifications**
6. **Add analytics** (Google Analytics)
7. **Configure domain** (custom domain)

## 🆘 Troubleshooting

### Login Issues:
- Clear browser cache and cookies
- Try incognito/private browsing mode
- Use the clickable credential cards on login page

### Deployment Issues:
- Ensure all files are committed to Git
- Check build logs in deployment platform
- Verify Node.js version compatibility

### Need Help?
- Check the deployment platform's documentation
- Review error logs in the platform dashboard
- Test locally first with `npm run dev`
