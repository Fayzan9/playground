# Portfolio Frontend - Setup Complete ✅

A modern, professional portfolio website built with Next.js 14, TypeScript, and a comprehensive design system featuring 13 color palettes.

## 🚀 Quick Start

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
frontend/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles with design tokens
├── components/              
│   ├── animations/          # Framer Motion animation components
│   │   └── reveal.tsx       # FadeInUp, FadeIn, Stagger animations
│   ├── layout/              # Layout components
│   │   └── theme-toggle.tsx # Dark/light mode toggle
│   └── ui/                  # UI components
│       └── button.tsx       # Button with variants
├── content/                 # Markdown content
│   ├── blog/               # Blog posts (.md files)
│   └── projects/           # Project pages (.md files)
├── lib/                    # Utilities and configuration
│   ├── color-palettes.ts   # 13 color palette definitions
│   ├── theme-utils.ts      # Theme CSS generation
│   ├── config.ts           # Site configuration
│   ├── utils.ts            # Common utilities
│   ├── blog.ts             # Blog post utilities
│   └── projects.ts         # Project utilities
├── providers/              
│   └── ThemeProvider.tsx   # next-themes provider
└── public/                 # Static assets
    ├── projects/           # Project images
    └── blog/              # Blog images
```

## 🎨 Design System

### Color Palettes

The project includes **13 professionally crafted color palettes**:

1. **Professional Indigo** (Default) - Clean, professional
2. **Ocean Blue** - Refreshing teal and cyan
3. **Sunset Warmth** - Warm amber and orange
4. **Royal Purple** - Bold and creative
5. **Emerald Fresh** - Natural green
6. **Modern Rose** - Elegant pink
7. **Minimal Slate** - Clean monochrome
8. **Cyber Neon** - Cyberpunk aesthetic
9. **Dracula** - Dark editor style
10. **Nord Arctic** - Calm nordic palette
11. **Material Blue** - Material design
12. **GitHub** - GitHub UI colors
13. **Mint Fresh** - Soft mint greens

**Switch themes** by editing `lib/config.ts`:

```typescript
theme: {
  colorPalette: 'ocean' // Change to any palette name
}
```

### Design Tokens

All design tokens are available as CSS variables:

```css
/* Colors */
var(--bg-primary)      /* Main background */
var(--bg-secondary)    /* Card backgrounds */
var(--bg-tertiary)     /* Subtle backgrounds */
var(--text-primary)    /* Main text */
var(--text-secondary)  /* Secondary text */
var(--text-muted)      /* Muted text */
var(--accent)          /* Primary accent */
var(--accent-hover)    /* Accent hover state */
var(--border)          /* Border color */

/* Effects */
var(--glass-bg)        /* Glass morphism background */
var(--shadow-soft)     /* Soft shadow */
var(--shadow-medium)   /* Medium shadow */
var(--shadow-strong)   /* Strong shadow */

/* Motion */
var(--duration-fast)   /* 150ms */
var(--duration-medium) /* 250ms */
var(--ease-smooth)     /* Smooth easing function */
```

### Utility Classes

```css
.glass          /* Glass morphism effect */
.hover-lift     /* Lift on hover */
.accent-border  /* Accent colored border */
.accent-glow    /* Accent glow effect */
```

## 🧩 Components

### Animations

```tsx
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/reveal';

<FadeInUp delay={0.2}>
  <Component />
</FadeInUp>
```

### Button

```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="ghost" size="sm">Ghost</Button>
```

### Theme Toggle

```tsx
import { ThemeToggle } from '@/components/layout/theme-toggle';

<ThemeToggle />
```

## 📝 Content Management

### Adding Blog Posts

Create `.md` files in `content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2026-03-08"
category: "React"
author: "Your Name"
published: true
---

# Your Content Here
```

### Adding Projects

Create `.md` files in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description"
image: "/projects/image.jpg"
tags: ["Next.js", "TypeScript"]
demoUrl: "https://demo.com"
githubUrl: "https://github.com/..."
featured: true
---

# Project Details
```

## ⚙️ Configuration

Edit `lib/config.ts` to customize:

- Site metadata (title, description, URL)
- Author information
- Social media links
- Theme color palette
- Navigation links
- Feature flags

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Markdown**: gray-matter, react-markdown
- **Icons**: Lucide React
- **Syntax Highlighting**: rehype-highlight

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The project works with any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Custom Node.js server

## 📚 Next Steps

1. **Customize Theme** - Change color palette in `lib/config.ts`
2. **Add Content** - Create blog posts and project pages
3. **Update Info** - Edit site configuration and metadata
4. **Build Pages** - Implement your pages using the design system
5. **Add Images** - Place images in `public/` directory
6. **Deploy** - Push to production when ready

## 📖 Documentation

For detailed design documentation, see:
- [DESIGN_DOCUMENTATION.md](./DESIGN_DOCUMENTATION.md) - Complete design system guide
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Setup and customization guide

## 🤝 Support

Questions? Issues? Refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Ready to build something amazing!** 🎉
