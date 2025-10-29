# ⚡ Quick Deployment Checklist

## Before You Start
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

## 1️⃣ Deploy Backend (Render)
1. Go to [render.com](https://render.com) → New Web Service
2. Connect GitHub repo → Select `backend` folder
3. Settings:
   - Build: `npm install`
   - Start: `npm start`
4. Add environment variables:
   - `MONGO_URL` = your MongoDB connection string
   - `TOKEN_KEY` = any random secret string
   - `NODE_ENV` = production
5. Deploy & copy your backend URL

## 2️⃣ Deploy Frontend (Netlify)
1. Create `frontend/.env.production`:
   ```
   REACT_APP_BACKEND_URL=https://your-backend.onrender.com
   ```
2. Go to [netlify.com](https://netlify.com) → New Site
3. Connect GitHub → Select `frontend` folder
4. Settings:
   - Build: `npm run build`
   - Publish: `frontend/build`
5. Add environment variable: `REACT_APP_BACKEND_URL`
6. Deploy & copy frontend URL

## 3️⃣ Deploy Dashboard (Netlify)
1. Create `dashboard/.env.production`:
   ```
   REACT_APP_BACKEND_URL=https://your-backend.onrender.com
   ```
2. Netlify → New Site → Select `dashboard` folder
3. Settings:
   - Build: `npm run build`
   - Publish: `dashboard/build`
4. Add environment variable: `REACT_APP_BACKEND_URL`
5. Deploy & copy dashboard URL

## 4️⃣ Update Backend CORS
1. Go back to Render → Your backend service
2. Add environment variables:
   - `FRONTEND_URL` = your frontend Netlify URL
   - `DASHBOARD_URL` = your dashboard Netlify URL
3. Save (auto-redeploys)

## ✅ Done!
Test your live app at your Netlify URLs!

---

**Need detailed instructions?** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
