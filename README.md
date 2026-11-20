# Rajesh M — Professional Portfolio Website

Modern, minimalist, and responsive developer portfolio website for **Rajesh M** (AI/ML Engineer | Data Scientist | Data Analyst).

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS** following a strict premium monochrome design system.

---

## 🎨 Monochrome Design System

- **Primary Black**: `#111111`
- **Pure White**: `#FFFFFF`
- **Light Grey**: `#F2F2F2`
- **Secondary Grey**: `#777777`
- **Border Grey**: `#E5E5E5`

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js 18.17+ or higher installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
rajesh-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg           # Replace with your professional headshot
│   │   └── README.txt
│   └── resume/
│       ├── Rajesh_M_Resume.pdf   # Replace with your latest resume PDF
│       └── README.txt
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind monochrome tokens & styles
│   │   ├── layout.tsx            # Metadata, SEO & OpenGraph config
│   │   └── page.tsx              # Single-page portfolio structure
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky navbar with mobile drawer & active indicator
│   │   ├── Hero.tsx              # Name, title, intro, CTAs & profile card
│   │   ├── About.tsx             # Academic background, interests & objective
│   │   ├── Skills.tsx            # Categorized skill badges
│   │   ├── Projects.tsx          # Featured projects with interactive detail modals
│   │   ├── Experience.tsx        # Thiranex Data Analyst experience
│   │   ├── Education.tsx         # B.Tech AIML (CGPA 7.7)
│   │   ├── Certifications.tsx   # Verified credentials section
│   │   ├── Contact.tsx           # Validated contact form & direct channels
│   │   └── Footer.tsx            # Footer with social links & back-to-top
│   └── data/
│       └── portfolioData.ts      # Primary authentic content reference
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✏️ How to Update Your Personal Information

All personal details, projects, skills, and links are centralized in:
`src/data/portfolioData.ts`

- **Email**: Update `profile.email`
- **Resume**: Replace `public/resume/Rajesh_M_Resume.pdf` with your real resume PDF
- **Profile Photo**: Place your headshot at `public/images/profile.jpg`
- **Thiranex Dates**: Update `experience[0].period` and bullet points
- **Certifications**: Add any verified certification objects in `certifications`

---

## 🌐 Deploy to Vercel (Step-by-Step)

### Option A: Via GitHub (Recommended)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rajesh M portfolio"
   git branch -M main
   git remote add origin https://github.com/Rajeshm2006/<repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your portfolio repository.
5. Vercel automatically detects **Next.js**. Click **Deploy**.
6. Your portfolio will be live at `https://<your-project>.vercel.app`.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Adding a Custom Domain
1. In your Vercel project dashboard, navigate to **Settings** &rarr; **Domains**.
2. Enter your custom domain (e.g. `rajeshm.dev` or `rajesh.ai`).
3. Follow the DNS instructions (CNAME or A record) in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).

