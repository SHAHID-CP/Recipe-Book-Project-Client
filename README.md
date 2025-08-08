# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 📅 Project Name: Recipe Book

## 🌟 Purpose
Recipe Book একটি আধুনিক ওয়েব অ্যাপ যেখানে ব্যবহারকারীরা বিভিন্ন রেসিপি খুঁজে পেতে পারে, পছন্দের রেসিপি বুকমার্ক করতে পারে, এবং রান্নার সহজ নির্দেশনা অনুসরণ করতে পারে।
এই প্ল্যাটফর্মটি ঘরোয়া রাঁধুনিদের থেকে শুরু করে শেফদের জন্যও খুবই উপযোগী।


## 🔗 Live URL
[👉 View the Live Website](https://taupe-panda-1b8323.netlify.app/)

## 🚀 Key Features
- 🔍 User-friendly Interface – সহজ ও পরিষ্কার ডিজাইন
- ⚡ Fast Performance – Vite ব্যবহার করে আল্ট্রা ফাস্ট লোডিং টাইম
- 📱 Fully Responsive – মোবাইল ও ডেস্কটপ উভয়ের জন্য উপযোগী
- 🔐 Authentication – Firebase দিয়ে ইউজার অথেন্টিকেশন
- 🖱️ Interactive Tooltips – React Tooltip দিয়ে ইনফরমেটিভ হোভার টিপস
- ⌨️ Animated Text Effects – React Simple Typewriter দিয়ে চমৎকার টাইপিং এনিমেশন
- 📢 Toast Notifications – React Toastify দিয়ে রিয়েলটাইম ইউজার নোটিফিকেশন
- 💡 Attractive UI – DaisyUI এবং TailwindCSS ব্যবহার করে তৈরি

## 📦 NPM Packages Used
Here are the key npm packages used in this project:
- [`vite`] - Fast & optimized build tool
- [`react`] – UI গঠনের জন্য
- [`react-router-dom`] – রাউটিং এর জন্য
- [`firebase`]) – ইউজার অথেন্টিকেশন ও ডেটা ব্যবস্থাপনার জন্য
- [`react-toastify`]) – ইউজার নোটিফিকেশনের জন্য
- [`react-icons`] – সুন্দর আইকনের জন্য
- [`react-tooltip`] – টুলটিপ দেখানোর জন্য
- [`tailwindcss`] – দ্রুত ও কাস্টম স্টাইলিংয়ের জন্য
- [`daisyui`] – Tailwind এর জন্য রেডিমেড UI কম্পোনেন্ট লাইব্রেরি
- [`react-simple-typewriter`] - টাইপিং এনিমেশনের জন্য

- ---


## ⚙️ Installation & Setup

### 📥 Clone Repositories

# Clone Frontend
```bash
git clone https://github.com/Programming-Hero-Web-Course11/b11a10-client-side-CodesWithshahid.git
cd b11a10-client-side-CodesWithshahid
npm install
npm run dev
```
# Clone Backend
```bash
git clone https://github.com/Programming-Hero-Web-Course11/b11a10-server-side-CodesWithshahid.git
cd b11a10-server-side-CodesWitshahid
npm install
npm run dev
```

---

## 🔒 Environment Variables

### 🔹 Client (.env)

```env
VITE_API_KEY=your_firebase_key
VITE_AUTH_DOMAIN=your_firebase_auth
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_API_URL=https://backend-eta.vercel.app
```

### 🔹 Server (.env)

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_BACKEND_URL=http://localhost:5000

```

---

## 📤 Image Upload

- Users can upload product images using Imgbb
- Supported on both **Add** and **Update** forms
- Upload triggered through a secure backend API

---

## 🚀 Deployment

### 🔹 Frontend (Firebase)

```bash
npm run build
firebase deploy
```

### 🔹 Backend (Vercel Serverless)

- Routes inside `/api/` folder
- Export handlers using CommonJS/ES6
- Follow [Vercel Docs](https://vercel.com/docs/functions) for structure

---

## 🧪 Testing

- Backend routes tested via Postman
- Firebase test users used for auth
- UI feedback tested via forms, toasts, and edge cases

---

## 📫 Contact

📧 Email: [shaahid.045@gmail.com](mailto:shaahid.045@gmail.com)
🔗 LinkedIn: [Shahid Islam](https://linkedin.com/in/shaahid-cp)

---

## 🧑‍🎓 Author

Made with 💻 by **Md. Shahid Islam**
Recipe Book Project © 2025

---

