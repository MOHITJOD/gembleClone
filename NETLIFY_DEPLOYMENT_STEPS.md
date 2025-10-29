# 🌐 Netlify Deployment Steps

## Important: Deploy Backend First!

Before deploying frontend/dashboard, you MUST deploy your backend on Render first to get the backend URL.

---

## 🔧 Option 1: Deploy Using Netlify Dashboard (Easiest)

### **Deploy Frontend**

1. **Go to Netlify**: https://app.netlify.com
2. **Sign in** with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. **Connect to GitHub**:
   - Authorize Netlify to access your GitHub
   - Select your repository: `MOHITJOD/gembleClone`
5. **Configure Build Settings**:
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: frontend/build
   ```
6. **Add Environment Variables**:
   - Click "Show advanced"
   - Click "New variable"
   - Key: `REACT_APP_BACKEND_URL`
   - Value: `https://your-backend.onrender.com` (replace with your actual Render URL)
7. Click **"Deploy site"**
8. **Wait for deployment** (2-3 minutes)
9. **Copy your frontend URL** (e.g., `https://random-name-123.netlify.app`)

### **Deploy Dashboard**

1. Go back to Netlify dashboard
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your repository again: `MOHITJOD/gembleClone`
4. **Configure Build Settings**:
   ```
   Base directory: dashboard
   Build command: npm run build
   Publish directory: dashboard/build
   ```
5. **Add Environment Variables**:
   - Click "Show advanced"
   - Click "New variable"
   - Key: `REACT_APP_BACKEND_URL`
   - Value: `https://your-backend.onrender.com` (same as frontend)
6. Click **"Deploy site"**
7. **Wait for deployment** (2-3 minutes)
8. **Copy your dashboard URL** (e.g., `https://random-name-456.netlify.app`)

---

## 🖥️ Option 2: Deploy Using Netlify CLI (Advanced)

### **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

### **Login to Netlify**

```bash
netlify login
```

### **Deploy Frontend**

```bash
cd frontend

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site
# - Team: Select your team
# - Site name: gemble-frontend (or any name you want)
# - Publish directory: build
```

### **Deploy Dashboard**

```bash
cd ../dashboard

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site
# - Team: Select your team
# - Site name: gemble-dashboard (or any name you want)
# - Publish directory: build
```

### **Set Environment Variables via CLI**

```bash
# For frontend
cd frontend
netlify env:set REACT_APP_BACKEND_URL "https://your-backend.onrender.com"

# For dashboard
cd ../dashboard
netlify env:set REACT_APP_BACKEND_URL "https://your-backend.onrender.com"
```

---

## ✅ After Deployment Checklist

### **1. Update Backend CORS**

After getting your Netlify URLs, update your backend on Render:

1. Go to Render Dashboard
2. Select your backend service
3. Go to "Environment" tab
4. Add/Update these variables:
   - `FRONTEND_URL` = `https://your-frontend.netlify.app`
   - `DASHBOARD_URL` = `https://your-dashboard.netlify.app`
5. Save changes (backend will auto-redeploy)

### **2. Custom Domain (Optional)**

If you want custom domains:

1. In Netlify dashboard, go to your site
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow the instructions to configure DNS

### **3. Test Your Deployment**

Visit your frontend URL and test:
- ✅ Homepage loads correctly
- ✅ All images and assets load
- ✅ "Sign up" button redirects to dashboard
- ✅ Can create an account
- ✅ Can log in
- ✅ Can view holdings/positions/orders
- ✅ Can place buy/sell orders

---

## 🐛 Troubleshooting

### **Build Failed**

**Error**: `npm ERR! code ELIFECYCLE`
- **Solution**: Make sure your `package.json` has correct dependencies
- Try building locally first: `npm run build`

### **Environment Variables Not Working**

**Error**: API calls going to `undefined`
- **Solution**: 
  1. Check variable name starts with `REACT_APP_`
  2. Redeploy after adding environment variables
  3. Clear browser cache

### **404 on Page Refresh**

**Error**: Getting 404 when refreshing pages
- **Solution**: The `_redirects` file should handle this (already added)
- Verify `_redirects` exists in:
  - `frontend/public/_redirects`
  - `dashboard/public/_redirects`

### **CORS Errors**

**Error**: `Access-Control-Allow-Origin` errors in console
- **Solution**: 
  1. Make sure backend has correct `FRONTEND_URL` and `DASHBOARD_URL`
  2. URLs should NOT have trailing slashes
  3. Backend must be redeployed after adding these variables

### **Images Not Loading**

**Error**: 404 for images
- **Solution**: Check image paths in your code
- Images should be in `public/assets/` folder
- Use paths like `/assets/images/logo.png` (starting with `/`)

---

## 🔄 Continuous Deployment

Both sites are now set up for automatic deployment:

1. **Push to GitHub** → Netlify automatically detects changes
2. **Builds and deploys** → Takes 2-3 minutes
3. **Live updates** → Your sites are updated automatically

To trigger a manual redeploy:
1. Go to Netlify dashboard
2. Select your site
3. Click "Deploys"
4. Click "Trigger deploy" → "Deploy site"

---

## 💡 Pro Tips

1. **Site Names**: Change random names to something memorable
   - Netlify Dashboard → Site settings → Change site name
   - Example: `gemble-frontend` instead of `random-name-123`

2. **Deploy Previews**: Netlify creates preview URLs for pull requests
   - Great for testing before merging

3. **Build Logs**: Always check build logs if deployment fails
   - Netlify Dashboard → Deploys → Click on failed deploy → View logs

4. **Performance**: Netlify automatically optimizes your site
   - Asset optimization
   - CDN distribution
   - HTTPS enabled by default

---

## 📞 Need Help?

- Check Netlify logs: Dashboard → Your Site → Deploys → Deploy log
- Check browser console for frontend errors (F12)
- Verify environment variables are set correctly

---

## 🎉 You're Done!

Your apps are now live and accessible worldwide!

**Your Live URLs:**
- Frontend: `https://your-frontend.netlify.app`
- Dashboard: `https://your-dashboard.netlify.app`
- Backend: `https://your-backend.onrender.com`

Share these URLs to showcase your project! 🚀
