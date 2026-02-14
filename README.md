# Aldren Bagual — Portfolio Website

A modern, production-ready portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Showcases my experience as a systems-oriented full-stack developer with a focus on clarity, maintainability, and real-world delivery.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat&logo=tailwind-css)

## 🌐 Live Site

**[aldrenbagual.com](https://aldrenbagual.com)** — My personal portfolio showcasing projects, experience, and technical approach.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Features

- **Dynamic Project Pages** — Case studies generated from JSON content
- **Responsive Design** — Mobile-first, works on all devices
- **Dark Mode** — Sleek dark theme with professional styling
- **SEO Optimized** — Meta tags, Open Graph support
- **Performance Optimized** — Static generation, image optimization
- **Content-Driven** — Easy to update via JSON files

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/drengual/aldrenbagual2026.git
cd aldrenbagual2026

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── process/           # Process page
│   └── work/[slug]/      # Dynamic project pages
├── components/            # Reusable UI components
│   ├── Button.tsx         # Button with multiple variants
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Section.tsx        # Content section wrapper
│   ├── Container.tsx      # Max-width container
│   ├── FadeIn.tsx         # Scroll animations
│   └── SafeImage.tsx      # Image with fallback
├── content/               # Content data
│   ├── content.json       # Main content (home + projects)
│   └── process.json       # Process page content
└── lib/                   # Utility functions
    └── projects/          # Project data utilities
```

## 📝 Content Management

All content is managed through JSON files in `src/content/`:

- **`content.json`** — Main portfolio content including:
  - Hero section (headline, subheadline, CTA)
  - Work experience
  - Projects/case studies
  - Skills & expertise
  - Contact information

### Adding/Editing Projects

Edit `src/content/content.json` to add or modify projects:

```json
{
  "slug": "my-project",
  "title": "Project Title",
  "summary": "Brief summary",
  "heroImage": { "src": "/images/projects/my-project.jpg", "alt": "..." },
  "video": "https://drive.google.com/...",
  "meta": {
    "role": "Your Role",
    "environment": "Environment",
    "duration": "Duration",
    "stack": ["Tech1", "Tech2"]
  },
  "links": { "live": "https://...", "repo": "https://github.com/..." },
  ...
}
```

The slug determines the URL: `"slug": "my-project"` → `/work/my-project`

## 🔗 Links

- **GitHub:** [github.com/drengual](https://github.com/drengual)
- **LinkedIn:** [linkedin.com/in/aldrenbagual](https://www.linkedin.com/in/aldrenbagual)
- **Email:** [aldrenbagual@outlook.com](mailto:aldrenbagual@outlook.com)

## 📄 License

This project is for personal use. All rights reserved.

---

Built with Next.js & Tailwind CSS
