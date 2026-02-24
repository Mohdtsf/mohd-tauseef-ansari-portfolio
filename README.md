# Mohd Tauseef Ansari - Portfolio Website

A futuristic, highly polished, dark-mode first portfolio website tailored for a Full-Stack Developer with AI and Cyber Security sub-focuses.

## Features
- **Next.js 14 App Router** for Server-side rendering and edge functions.
- **Three.js & React Three Fiber** for a subtle 3D star background.
- **Tailwind CSS v4** with glassmorphism and custom neon tokens.
- **Framer Motion** for scroll-triggered reveal animations.
- **Dynamic GitHub API Integration** using React Server Components.
- **Nodemailer Contact Form** with Zod schema validation.
- **Full SEO Optimization** with OpenGraph tags, sitemap, and robots.txt.
- **Futuristic Dual-Spinner Loading** and interactive cursor.

## Prerequisites
- Node.js >= 18.0.0
- MongoDB Atlas cluster URL
- SMTP credentials for Nodemailer (e.g., Gmail App Password)

## Environment Setup
Create a `.env.local` file in the root based on `.env.example`:

```bash
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## Running the Application
Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm run start
```

## Deployment
This project is optimized for deployment on Vercel. 
Simply push to GitHub and import the repository in Vercel. Ensure to add the environment variables in the Vercel project settings.
