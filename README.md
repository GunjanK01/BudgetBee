# 💰 Expense Tracker App

An **Expense Tracker** built with modern tools to manage and visualize your personal finances on the go.  
This project includes a **Node.js backend (API)** hosted on **Render**, a **mobile app built with Expo (React Native)**, and integrations for **authentication, database, and caching**.

---

## 🚀 Tech Stack

- **Frontend (Mobile)**: [Expo](https://expo.dev) + React Native  
- **Backend (API)**: [Node.js](https://nodejs.org) hosted on [Render](https://render.com)  
- **Authentication**: [Clerk](https://clerk.com) (secure user management & auth)  
- **Database**: [Neon](https://neon.tech) (Postgres, serverless & scalable)  
- **Rate Limiting / Cache**: [Redis](https://redis.io)  
- **Version Control**: GitHub  

---

## ✨ Features

- 🔐 **Secure login & signup** using Clerk  
- 📊 **Track expenses & income** in real time  
- 🏷️ **Categorize transactions** (Food, Travel, Bills, etc.)  
- 📈 **Visual reports** to understand spending habits  
- ☁️ **Cloud-hosted backend** for global accessibility  
- ⚡ **Rate-limited APIs** for security and performance

---
## 📸 Screenshots


|--------------|--------------|
| <img width="300" src="https://github.com/user-attachments/assets/faae7410-c2b1-42db-bd90-da1b7b104c48" /> | <img width="300" src="https://github.com/user-attachments/assets/5674c441-f232-467e-bfbb-fca37b7f2b6e" /> |

| <img width="300" src="https://github.com/user-attachments/assets/c476cbb1-a8c4-4ae7-9666-3ca5e49712d5" /> | <img width="300" src="https://github.com/user-attachments/assets/098978b0-1d53-4a22-9b3b-1af944e7e4b7" /> |




## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/GunjanK01/BudgetBee.git
cd expense-tracker


```
1. Backend Installation
   ```bash
   cd backend
   npm install
   ```
2. Create a .env file in /backend and add:
   
PORT=5001
DATABASE_URL=
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

3. Run backend:
   ```bash
   npm start
   ```
4.3️⃣ Mobile App Setup (Expo)
```bash
cd ../mobile
npm install
```
5. Create a .env file in /mobile and add:
   EXPO_PUBLIC_API_URL=https://your-render-api-url/api
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   
6. Run the app:
   ```bash
   npx expo start
   ```
## Deployment

Backend → Deploy on Render
 (Node.js service + Neon DB + Redis add-on)

Mobile App → Build and publish via Expo EAS

## 📚 Documentation

- [Clerk Docs](https://clerk.com/docs)  
- [Neon DB Docs](https://neon.tech/docs)  
- [Render Docs](https://render.com/docs)  
- [Expo Docs](https://docs.expo.dev)  


