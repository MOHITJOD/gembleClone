# 🚀 Deployment Guide - Gemble Clone

This guide will help you deploy your full-stack trading application for **FREE** using:
- **Render** for the backend (Node.js/Express API)
- **Netlify** for the frontend and dashboard (React apps)
- **MongoDB Atlas** for the database (already configured)

---

## 📋 Prerequisites

1. **GitHub Account** - Push your code to GitHub
2. **MongoDB Atlas Account** - You should already have this (check your `.env` file)
3. **Render Account** - Sign up at [render.com](https://render.com)
4. **Netlify Account** - Sign up at [netlify.com](https://netlify.com)

---

## 🗄️ Step 1: Prepare MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to your cluster → **Network Access**
3. Click **"Add IP Address"** → Select **"Allow Access from Anywhere"** (0.0.0.0/0)
   - This is necessary for Render to connect to your database
4. Copy your MongoDB connection string (you already have this in `backend/.env`)

---

## 🔧 Step 2: Push Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 🖥️ Step 3: Deploy Backend on Render

### 3.1 Create Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `gemble-backend` (or any name you prefer)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### 3.2 Add Environment Variables

In the Render dashboard, add these environment variables:

| Key | Value |
|-----|-------|
| `MONGO_URL` | Your MongoDB Atlas connection string |
| `PORT` | `3002` |
| `TOKEN_KEY` | Any random secure string (e.g., `your_jwt_secret_key_12345`) |
| `FRONTEND_URL` | Leave empty for now (will add after deploying frontend) |
| `DASHBOARD_URL` | Leave empty for now (will add after deploying dashboard) |
| `NODE_ENV` | `production` |

### 3.3 Deploy

1. Click **"Create Web Service"**
2. Wait for deployment to complete (5-10 minutes)
3. **Copy your backend URL** (e.g., `https://gemble-backend.onrender.com`)

⚠️ **Important**: Free Render services spin down after 15 minutes of inactivity. First request after inactivity may take 30-60 seconds.

---

## 🌐 Step 4: Deploy Frontend on Netlify

### 4.1 Create Production Environment File

1. In your `frontend` folder, create a file named `.env.production`
2. Add this content (replace with your actual Render backend URL):

```env
REACT_APP_BACKEND_URL=https://gemble-backend.onrender.com
```

### 4.2 Deploy to Netlify

**Option A: Using Netlify CLI (Recommended)**

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Navigate to frontend folder
cd frontend

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: gemble-frontend (or any name)
# - Publish directory: build
```

**Option B: Using Netlify Dashboard**

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
5. Add environment variable:
   - Key: `REACT_APP_BACKEND_URL`
   - Value: `https://gemble-backend.onrender.com` (your Render URL)
6. Click **"Deploy site"**

### 4.3 Copy Frontend URL

After deployment, copy your frontend URL (e.g., `https://gemble-frontend.netlify.app`)

---

## 📊 Step 5: Deploy Dashboard on Netlify

### 5.1 Create Production Environment File

1. In your `dashboard` folder, create a file named `.env.production`
2. Add this content:

```env
REACT_APP_BACKEND_URL=https://gemble-backend.onrender.com
```

### 5.2 Deploy to Netlify

**Option A: Using Netlify CLI**

```bash
# Navigate to dashboard folder
cd dashboard

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site
# - Site name: gemble-dashboard (or any name)
# - Publish directory: build
```

**Option B: Using Netlify Dashboard**

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Configure build settings:
   - **Base directory**: `dashboard`
   - **Build command**: `npm run build`
   - **Publish directory**: `dashboard/build`
5. Add environment variable:
   - Key: `REACT_APP_BACKEND_URL`
   - Value: `https://gemble-backend.onrender.com`
6. Click **"Deploy site"**

### 5.3 Copy Dashboard URL

After deployment, copy your dashboard URL (e.g., `https://gemble-dashboard.netlify.app`)

---

## 🔄 Step 6: Update Backend CORS Settings

Now that you have your frontend and dashboard URLs, update your backend:

1. Go to your **Render Dashboard**
2. Select your backend service
3. Go to **"Environment"** tab
4. Update these environment variables:
   - `FRONTEND_URL`: `https://gemble-frontend.netlify.app` (your actual URL)
   - `DASHBOARD_URL`: `https://gemble-dashboard.netlify.app` (your actual URL)
5. Click **"Save Changes"**
6. Your backend will automatically redeploy

---

## ✅ Step 7: Test Your Deployment

1. **Visit your frontend**: `https://gemble-frontend.netlify.app`
2. **Visit your dashboard**: `https://gemble-dashboard.netlify.app`
3. **Test the following**:
   - Sign up for a new account
   - Log in
   - View holdings, positions, orders
   - Place buy/sell orders
   - Check if data persists

---

## 🐛 Troubleshooting

### Backend Issues

**Problem**: Backend not connecting to MongoDB
- **Solution**: Check MongoDB Atlas Network Access allows 0.0.0.0/0
- Verify `MONGO_URL` in Render environment variables

**Problem**: CORS errors in browser console
- **Solution**: Ensure `FRONTEND_URL` and `DASHBOARD_URL` are set correctly in Render
- Check that URLs don't have trailing slashes

**Problem**: Backend takes 30+ seconds to respond
- **Solution**: This is normal for free Render services after inactivity
- Consider upgrading to paid plan for always-on service

### Frontend/Dashboard Issues

**Problem**: API calls failing with 404
- **Solution**: Verify `REACT_APP_BACKEND_URL` is set correctly
- Check browser console for the actual URL being called

**Problem**: Environment variables not working
- **Solution**: Rebuild and redeploy after changing environment variables
- Ensure variable names start with `REACT_APP_`

**Problem**: Routing not working (404 on page refresh)
- **Solution**: The `_redirects` file should handle this
- Verify `_redirects` file exists in `public` folder for dashboard
- Verify `_redirects` file exists in root for frontend

---

## 💰 Cost Breakdown (FREE Tier Limits)

| Service | Free Tier | Limitations |
|---------|-----------|-------------|
| **Render** | 750 hours/month | Spins down after 15 min inactivity |
| **Netlify** | 100 GB bandwidth/month | 300 build minutes/month |
| **MongoDB Atlas** | 512 MB storage | Shared cluster |

---

## 🔐 Security Best Practices

1. **Never commit `.env` files** to GitHub
2. **Use strong JWT secrets** in production
3. **Enable HTTPS** (automatic on Render & Netlify)
4. **Restrict MongoDB access** to specific IPs if possible
5. **Regularly update dependencies**

---

## 🚀 Continuous Deployment

Both Render and Netlify support automatic deployments:

1. **Push to GitHub** → Automatically triggers deployment
2. **No manual steps needed** after initial setup
3. **Monitor deployments** in respective dashboards

---

## 📞 Support

If you encounter issues:
- Check Render logs: Dashboard → Your Service → Logs
- Check Netlify logs: Dashboard → Your Site → Deploys → Deploy log
- Check browser console for frontend errors

---

## 🎉 Congratulations!

Your trading application is now live and accessible worldwide! 

**Your Live URLs:**
- Frontend: `https://your-frontend.netlify.app`
- Dashboard: `https://your-dashboard.netlify.app`
- Backend API: `https://your-backend.onrender.com`

Share these URLs with others to showcase your project!
