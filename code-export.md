# Aldren Bagual 2026 - Personal Portfolio Website

A Next.js 16 portfolio website showcasing experience, projects, and professional background.

## Project Structure

```
/
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── .gitignore
├── README.md
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── resume.pdf
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── favicon.ico
    ├── components/
    │   ├── Header.tsx
    │   ├── Button.tsx
    │   ├── Section.tsx
    │   ├── Footer.tsx
    │   ├── Container.tsx
    │   ├── FadeIn.tsx
    │   ├── SafeImage.tsx
    │   └── ThemeToggle.tsx
    └── content/
        └── home.json
```

---

## Configuration Files

### package.json

```json
{
  "name": "aldrenbagual2026",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^12.34.0",
    "lucide-react": "^0.564.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### eslint.config.mjs

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### postcss.config.mjs

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## Source Files

### src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldren Bagual - Software Engineer",
  description:
    "My personal website showcasing my projects and experience as a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### src/app/globals.css

```css
@import "tailwindcss";

/* Enable `dark:` using the `.dark` class */
@custom-variant dark (&:where(.dark, .dark *));

:root {
  /* Light mode colors (default) */
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a68;
  --border-color: rgba(0, 0, 0, 0.1);
  color-scheme: light;
}

.dark {
  /* Dark mode colors */
  --bg-primary: #0b0f17;
  --bg-secondary: #151b2b;
  --text-primary: rgba(255, 255, 255, 0.92);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
  color-scheme: dark;
}

html,
body {
  height: 100%;
}

html {
  background: var(--bg-primary);
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
```

### src/app/page.tsx

```tsx
import home from "@/content/home.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/Container";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <Header name={home.meta.name} links={home.meta.links} />

      {/* HERO */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.15)] blur-3xl" />
        </div>

        <Container>
          <FadeIn>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm text-[rgba(255,255,255,0.7)]">
                  {home.meta.role}
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[rgba(255,255,255,0.92)] sm:text-5xl">
                  {home.hero.headline}
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgba(255,255,255,0.72)] sm:text-lg">
                  {home.hero.subheadline}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={home.hero.primaryCta.href}>
                    {home.hero.primaryCta.label}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    href={home.hero.secondaryCta.href}
                    variant="secondary"
                  >
                    {home.hero.secondaryCta.label}
                  </Button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-3 shadow-soft">
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                    <SafeImage
                      src={home.hero.portrait.src}
                      alt={home.hero.portrait.alt}
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 420px"
                      fallback={
                        <div className="relative h-full w-full overflow-hidden rounded-xl bg-linear-to-br from-[rgba(124,58,237,0.18)] to-transparent">
                          <div className="absolute inset-0 bg-[rgba(11,15,23,0.65)]" />
                          <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] text-lg font-semibold">
                              AB
                            </div>
                            <p className="mt-4 text-sm font-medium text-[rgba(255,255,255,0.9)]">
                              {home.meta.name}
                            </p>
                            <p className="mt-1 text-xs text-[rgba(255,255,255,0.65)]">
                              {home.meta.role}
                            </p>
                          </div>
                        </div>
                      }
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[rgba(11,15,23,0.85)] via-transparent to-transparent" />
                  </div>
                  <div className="mt-3 px-1">
                    <p className="text-sm font-medium text-[rgba(255,255,255,0.9)]">
                      {home.meta.name}
                    </p>
                    <p className="mt-1 text-xs text-[rgba(255,255,255,0.65)]">
                      {home.meta.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CREDIBILITY */}
      <Section id="credibility" title={home.credibility.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {home.credibility.body}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {home.credibility.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-xl border border-black/10 dark:border-white/08 bg-gray-100 dark:bg-[rgba(17,24,39,0.6)] p-4 text-sm text-black/78 dark:text-white/78"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={home.experience.title}>
        <div className="space-y-4">
          {home.experience.roles.map((r, idx) => (
            <FadeIn key={`${r.company}-${r.title}`} delay={idx * 0.05}>
              <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-black/92 dark:text-white/92">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                      {r.company}
                    </p>
                  </div>

                  <p className="text-sm text-black/60 dark:text-white/60">
                    {r.date}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-black/75 dark:text-white/75">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(124,58,237,0.8)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WORK */}
      <Section id="work" title={home.work.title}>
        <div className="grid gap-4">
          {home.work.items.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.05}>
              <a
                href={item.href}
                className="block overflow-hidden rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 shadow-soft transition hover:bg-white/6 dark:hover:bg-white/06"
              >
                <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
                  <div className="relative h-44 sm:h-full">
                    {item.image ? (
                      <SafeImage
                        src={item.image.src}
                        alt={item.image.alt}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-white/04">
                        <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
                          Project Preview
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[rgba(11,15,23,0.75)] via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-black/92 dark:text-white/92">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/72 dark:text-white/72">
                          {item.outcome}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 text-black/6 dark:text-white/60" />
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* HOW I WORK */}
      <Section id="how" title={home.how.title}>
        <FadeIn>
          <p className="max-w-3xl text-black/75 dark:text-white/75">
            {home.how.intro}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {home.how.principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-5 shadow-soft"
              >
                <h3 className="text-sm font-semibold text-black/92 dark:text-white/92">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/72 dark:text-white/72">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* SYSTEMS */}
      <Section id="systems" title={home.systems.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {home.systems.body}
            </p>
            <div className="mt-5">
              <Button href={home.systems.link.href} variant="secondary">
                {home.systems.link.label}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ABOUT */}
      <Section id="about" title={home.about.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {home.about.body}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA + CONTACT */}
      <Section id="contact" title={home.contact.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-black/92 dark:text-white/92">
              {home.cta.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-black/72 dark:text-white/72">
              {home.cta.body}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {home.cta.buttons.map((b, idx) => (
                <Button
                  key={b.label}
                  href={b.href}
                  variant={idx === 0 ? "primary" : "secondary"}
                >
                  {b.label}
                </Button>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-[rgba(17,24,39,0.6)] p-5">
              <p className="text-sm text-black/72 dark:text-white/72">
                {home.contact.body}
              </p>
              <a
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-black/92 dark:text-white/92 hover:opacity-90"
                href={`mailto:${home.contact.emailLabel}`}
              >
                <Mail className="h-4 w-4 text-black/92 dark:text-white/92" />
                {home.contact.emailLabel}
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Footer
        name={home.meta.name}
        email={home.meta.email}
        links={home.meta.links}
      />
    </div>
  );
}
```

---

## Components

### src/components/Header.tsx

```tsx
import { Container } from "./Container";
import { Button } from "./Button";

export function Header({
  name,
  links,
}: {
  name: string;
  links: { label: string; href: string }[];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f17]/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <div className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
            {name}
          </div>

          <nav className="hidden items-center gap-2 sm:flex">
            {links.map((l) => (
              <Button key={l.label} href={l.href} variant="ghost">
                {l.label}
              </Button>
            ))}
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </nav>

          <div className="sm:hidden">
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
```

### src/components/Button.tsx

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0";

  const styles: Record<Variant, string> = {
    primary:
      "bg-accent text-white shadow-soft hover:opacity-95 focus:ring-[rgba(124,58,237,0.45)]",
    secondary:
      "bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] hover:bg-[rgba(255,255,255,0.12)] focus:ring-[rgba(255,255,255,0.18)]",
    ghost:
      "text-[rgba(255,255,255,0.75)] hover:text-[rgba(255,255,255,0.92)] hover:bg-[rgba(255,255,255,0.06)] focus:ring-[rgba(255,255,255,0.18)]",
  };

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        className={`${base} ${styles[variant]}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </Link>
  );
}
```

### src/components/Section.tsx

```tsx
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs tracking-widest text-[rgba(255,255,255,0.6)]">
              {eyebrow.toUpperCase()}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold text-[rgba(255,255,255,0.92)] sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
```

### src/components/Footer.tsx

```tsx
import { Container } from "./Container";
import { Button } from "./Button";

export function Footer({
  name,
  email,
  links,
}: {
  name: string;
  email: string;
  links: { label: string; href: string }[];
}) {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="mt-1 text-sm text-[rgba(255,255,255,0.7)]">
              {email}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {links.map((l) => (
              <Button key={l.label} href={l.href} variant="secondary">
                {l.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

### src/components/Container.tsx

```tsx
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
```

### src/components/FadeIn.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
```

### src/components/SafeImage.tsx

```tsx
"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallback?: ReactNode;
}

export function SafeImage({
  src,
  alt,
  className,
  sizes,
  priority,
  fallback,
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      fallback ?? (
        <div className="flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.04)]">
          <span className="text-xs uppercase tracking-wider text-[rgba(255,255,255,0.4)]">
            Image
          </span>
        </div>
      )
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setError(true)}
    />
  );
}
```

### src/components/ThemeToggle.tsx

```tsx
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Default to dark mode
    const saved = localStorage.getItem("theme");
    const initial: Theme = saved === "light" ? "light" : "dark";
    applyTheme(initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-9 w-9 rounded-xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10"
      />
    );
  }

  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => {
        setTheme(next);
        applyTheme(next);
        localStorage.setItem("theme", next);
      }}
      className="h-9 w-9 rounded-xl border border-black/10 bg-white/70 text-black/70 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 transition"
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}
```

---

## Content

### src/content/home.json

```json
{
  "meta": {
    "name": "Aldren Bagual",
    "role": "Full-Stack Developer • Systems-Oriented Team Lead",
    "location": "Philippines (Remote-ready)",
    "email": "aldrenbagual@outlook.com",
    "links": [
      { "label": "GitHub", "href": "https://github.com/your-handle" },
      { "label": "LinkedIn", "href": "https://linkedin.com/in/your-handle" },
      { "label": "Resume", "href": "/resume.pdf" },
      { "label": "Experience", "href": "/#experience" }
    ]
  },
  "hero": {
    "headline": "I architect and maintain production web systems teams can depend on.",
    "subheadline": "Systems-oriented full-stack developer focused on clarity, maintainability, and real-world delivery — from planning to production.",
    "portrait": {
      "src": "/images/portrait.jpg",
      "alt": "Portrait of Aldren Bagual"
    },
    "primaryCta": { "label": "View Case Studies", "href": "#work" },
    "secondaryCta": { "label": "Contact Me", "href": "#contact" }
  },
  "credibility": {
    "title": "Currently leading web & system delivery",
    "body": "I lead architecture and delivery of business-critical websites and internal systems, define requirements, ship production releases, and serve as the primary technical point of contact for stakeholders.",
    "bullets": [
      "Led planning, architecture, and development of multiple company websites",
      "Defined PRDs and technical specifications with stakeholders",
      "Architected scalable frontend + headless CMS integrations",
      "Deployed and maintained production sites (VPS, releases, reliability)",
      "Coordinated implementation, task tracking, and quality reviews"
    ]
  },
  "expertise": {
    "title": "Core expertise",
    "areas": [
      {
        "title": "Architecture & Delivery",
        "body": "Planning, structuring, and shipping scalable web systems aligned with business timelines and stakeholder expectations."
      },
      {
        "title": "Headless & CMS Systems",
        "body": "Designing content workflows that empower non-technical teams without compromising frontend performance or maintainability."
      },
      {
        "title": "Production Reliability",
        "body": "Deployments, VPS configuration, CI/CD workflows, and long-term system stability in real-world environments."
      }
    ]
  },
  "experience": {
    "title": "Work experience",
    "roles": [
      {
        "company": "Z Aviation Consulting",
        "title": "IT Developer / Team Lead",
        "date": "Aug 2025 — Present",
        "highlights": [
          "Led planning, architecture, and delivery of multiple company websites using WordPress and headless CMS strategy",
          "Defined PRDs and technical specifications through stakeholder discussions",
          "Architected Next.js + Tailwind with headless WordPress and Supabase integrations",
          "Deployed and maintained sites on VPS infrastructure; handled production releases and reliability",
          "Primary technical point of contact for stakeholders (support, troubleshooting, explanations)"
        ]
      },
      {
        "company": "SmartRetry (Fintech Startup)",
        "title": "Web Platform Engineer (Project-Based)",
        "date": "Sep 2025 — Dec 2025",
        "highlights": [
          "Built and maintained a production-grade fintech marketing platform (Next.js, TypeScript, Tailwind, Headless WordPress)",
          "Implemented CMS-driven directories, search, filtering, FAQs, glossary modules, and utilities",
          "Owned platform lifecycle from architecture planning through deployment and iterative improvements"
        ]
      },
      {
        "company": "Creaxon, Inc.",
        "title": "Junior Full Stack Developer",
        "date": "May 2024 — May 2025",
        "highlights": [
          "Supported and maintained 10+ production websites (updates, fixes, post-deploy checks)",
          "Built and customized WordPress and Shopify sites; handled themes, plugins, configurations",
          "Managed deployments via Cloudways; collaborated with GitLab workflows"
        ]
      },
      {
        "company": "Freelance / Project-Based",
        "title": "Full-Stack Web Developer & Project Manager",
        "date": "Feb 2023 — Apr 2024",
        "highlights": [
          "Led end-to-end delivery across multiple client projects by scoping work, managing timelines, and tracking progress to ship on schedule, while guiding a small dev team through code reviews and mentorship to enforce clean, scalable standards.",
          "Collaborated directly with clients to translate business needs into clear technical plans and implementation decisions, serving as the primary bridge between stakeholder requirements and final product execution.",
          "Built 10+ responsive, accessible websites using React and Tailwind CSS with strong cross-device performance, integrating third-party and custom APIs to ensure dynamic functionality and reliable data flow.",
          "Implemented authentication, real-time updates, and cloud database workflows using Supabase and Node.js, while optimizing release speed through CI/CD via GitHub and Vercel and maintaining collaborative Git branching and PR best practices."
        ]
      },
      {
        "company": "Campus Library — Cavite State University (CCAT)",
        "title": "Lead Programmer (Intern)",
        "date": "Sep 2023 — Jan 2024",
        "highlights": [
          "Spearheaded the development of a Python desktop application to monitor library PC usage, automating session tracking and generating usage reports to significantly improve administrative efficiency.",
          "Translated library staff workflows into technical specifications and designed an intuitive interface using PySimpleGUI, specifically tailored for seamless use by non-technical staff.",
          "Engineered Excel-based data storage and automated report exports, effectively reducing manual encoding while improving overall record accuracy and data integrity.",
          "Delivered comprehensive software and hardware support, including troubleshooting, device optimization, and hands-on assistance with staff onboarding and daily library operations."
        ]
      }
    ]
  },
  "work": {
    "title": "Selected Work",
    "items": [
      {
        "title": "SmartRetry — Fintech Marketing Platform",
        "outcome": "Built and maintained a production marketing platform with CMS-driven directories, search, FAQs, and glossary modules — optimized for maintainability and iteration.",
        "image": {
          "src": "/images/projects/smartretry.jpg",
          "alt": "SmartRetry project preview"
        },
        "href": "/work/smartretry"
      },
      {
        "title": "Z Aviation — Multi-site Delivery & Headless Strategy",
        "outcome": "Led architecture and phased delivery across multiple company websites, balancing stakeholder needs, timelines, and production reliability.",
        "image": {
          "src": "/images/projects/zav.jpg",
          "alt": "Z Aviation project preview"
        },
        "href": "/work/zav-websites"
      },
      {
        "title": "Internal Tools & Reliability Improvements",
        "outcome": "Supported internal systems and automation workflows, resolving issues and improving operational reliability for teams.",
        "image": {
          "src": "/images/projects/internal-tools.jpg",
          "alt": "Internal tools project preview"
        },
        "href": "/work/internal-systems"
      }
    ]
  },
  "how": {
    "title": "How I work",
    "intro": "I aim to reduce ambiguity, own outcomes, and build systems that others can confidently maintain.",
    "principles": [
      {
        "title": "Structured clarity",
        "body": "I translate requirements into simple specs and decision points to prevent rework."
      },
      {
        "title": "Ownership",
        "body": "I take responsibility beyond implementation — including production behavior and iteration."
      },
      {
        "title": "Maintainability",
        "body": "I design code and workflows that remain understandable as projects evolve."
      }
    ]
  },
  "systems": {
    "title": "Systems & process",
    "body": "Beyond code, I design workflows and delivery structure that reduce chaos — requirements → execution → release → support — so teams can move with confidence.",
    "link": { "label": "Read about my process", "href": "/process" }
  },
  "tech": {
    "title": "Technology focus",
    "items": [
      "Next.js & TypeScript",
      "Tailwind CSS",
      "Headless WordPress (REST API)",
      "Supabase & PostgreSQL",
      "Node.js",
      "Git & CI/CD (GitHub, Vercel)",
      "VPS Deployments & Production Releases"
    ]
  },
  "about": {
    "title": "About",
    "body": "I care about building systems that are reliable, understandable, and actually used. My focus is not just shipping features, but reducing operational friction for teams and stakeholders."
  },
  "cta": {
    "title": "Let's talk",
    "body": "If you're looking for a reliable developer who can own delivery end-to-end, I'd love to connect.",
    "buttons": [
      { "label": "Contact Me", "href": "#contact" },
      { "label": "View Resume", "href": "/resume.pdf" }
    ]
  },
  "contact": {
    "title": "Contact",
    "body": "Email is best. I reply within 24–48 hours.",
    "emailLabel": "aldrenbagual@outlook.com"
  }
}
```

---

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.34.0
- **Icons**: Lucide React 0.564.0
- **Language**: TypeScript 5
- **Deployment**: Vercel
