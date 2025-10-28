# JWT Authentication Implementation Guide

## Overview
This document outlines the JWT-based authentication system implemented in your MERN stack trading application.

## Backend Setup

### 1. Dependencies Required
Run this command in the `backend` directory:
```bash
npm install bcryptjs jsonwebtoken cookie-parser
```

### 2. Environment Variables (.env)
Add these to your `.env` file:
```
MONGO_URL = your_mongodb_connection_string
PORT = 3002
TOKEN_KEY = your_secret_token_key_change_this_to_something_secure
```

**IMPORTANT:** Change `TOKEN_KEY` to a strong, random secret key for production!

### 3. File Structure Created

```
backend/
├── Controllers/
│   └── AuthController.js       # Signup and Login logic
├── Middlewares/
│   └── AuthMiddleware.js       # JWT verification middleware
├── Routes/
│   └── AuthRoute.js           # Authentication routes
├── model/
│   └── UserModel.js           # User schema with password hashing
└── util/
    └── SecretToken.js         # JWT token generation
```

### 4. API Endpoints

#### Signup
- **URL:** `POST http://localhost:3002/auth/signup`
- **Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}
```

#### Login
- **URL:** `POST http://localhost:3002/auth/login`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Verify User
- **URL:** `POST http://localhost:3002/auth/`
- **Purpose:** Checks if user is authenticated via cookie

## Frontend Setup

### 1. Dependencies Required
The following are already installed in your dashboard:
- `axios` ✓
- `react-router-dom` ✓

### 2. File Structure Created

```
dashboard/src/components/
├── Login.js              # Login page component
├── Signup.js             # Signup page component
├── Auth.css              # Styling for auth pages
├── ProtectedRoute.js     # HOC for protecting routes
├── Menu.js               # Updated with logout functionality
└── Home.js               # Updated with ProtectedRoute wrapper
```

### 3. Routes Available

- `/login` - Login page
- `/signup` - Signup page
- `/` - Dashboard (protected, requires authentication)
- `/orders` - Orders page (protected)
- `/holdings` - Holdings page (protected)
- `/positions` - Positions page (protected)
- `/funds` - Funds page (protected)

## How It Works

### Authentication Flow

1. **Signup:**
   - User submits email, username, and password
   - Password is hashed using bcrypt (12 salt rounds)
   - User is created in MongoDB
   - JWT token is generated and sent as HTTP cookie
   - User is redirected to dashboard

2. **Login:**
   - User submits email and password
   - Password is compared with hashed password in database
   - If valid, JWT token is generated and sent as cookie
   - User is redirected to dashboard

3. **Protected Routes:**
   - `ProtectedRoute` component wraps protected pages
   - On mount, it verifies JWT token with backend
   - If valid, renders the page
   - If invalid/missing, redirects to `/login`

4. **Logout:**
   - Click profile avatar in sidebar
   - Click "Logout" button
   - Cookie is cleared
   - User is redirected to `/login`

## Security Features

✅ **Password Hashing:** Passwords are hashed with bcrypt (12 rounds)  
✅ **JWT Tokens:** Stateless authentication with 3-day expiration  
✅ **HTTP Cookies:** Tokens stored in cookies (with credentials)  
✅ **CORS Configuration:** Restricted to localhost:3000 and localhost:3001  
✅ **Protected Routes:** Frontend route protection with verification  
✅ **Environment Variables:** Sensitive data in .env file  

## Testing the Application

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install bcryptjs jsonwebtoken cookie-parser
```

### Step 2: Start Backend
```bash
cd backend
npm start
```
Server should start on `http://localhost:3002`

### Step 3: Start Frontend
```bash
cd dashboard
npm start
```
Frontend should start on `http://localhost:3000`

### Step 4: Test Authentication

1. Navigate to `http://localhost:3000`
2. You should be redirected to `/login`
3. Click "Sign up" link
4. Create a new account with:
   - Valid email address
   - Username
   - Password (minimum 6 characters)
5. You'll be redirected to dashboard automatically
6. Click profile avatar (MG) in sidebar
7. Click "Logout" button
8. Try logging in again with your credentials

## Important Notes

### For Production:
1. **Change TOKEN_KEY** in `.env` to a strong random string
2. **Set httpOnly: true** in cookie options (currently false for development)
3. **Use HTTPS** for secure cookie transmission
4. **Update CORS origins** to your production domain
5. **Add rate limiting** to prevent brute force attacks
6. **Implement password strength validation**
7. **Add email verification** for new signups

### Current Limitations:
- No password reset functionality
- No email verification
- No "Remember Me" option
- No session management (logout all devices)
- No user profile management

## Troubleshooting

### Issue: "User already exists" on signup
- Email is already registered, try logging in instead

### Issue: Redirected to login immediately after signup
- Check backend console for errors
- Verify MongoDB connection
- Check if TOKEN_KEY is set in .env

### Issue: CORS errors
- Ensure backend CORS allows your frontend origin
- Check if credentials: true is set in axios requests

### Issue: Cookie not being set
- Check browser developer tools > Application > Cookies
- Verify withCredentials: true in axios requests
- Check CORS configuration

## Next Steps

Consider implementing:
- [ ] Password strength requirements
- [ ] Email verification
- [ ] Password reset via email
- [ ] Two-factor authentication (2FA)
- [ ] Session management
- [ ] User profile editing
- [ ] Remember me functionality
- [ ] Social login (Google, GitHub, etc.)

---

**Created:** 2025-10-28  
**Framework:** MERN Stack (MongoDB, Express, React, Node.js)  
**Authentication:** JWT (JSON Web Tokens)
