'use client';

import { motion } from 'framer-motion';

interface GlassIslandNavbarProps {
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  accentColor?: string;
  blurAmount?: number;
  height?: number;
}

export function GlassIslandNavbar({
  logoText = 'MyLogo',
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  accentColor = 'var(--accent)',
  blurAmount = 16,
  height = 72,
}: GlassIslandNavbarProps) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-7xl rounded-2xl"
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-muted)',
        height: `${height}px`,
      }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-10 select-none">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-[var(--text-primary)] font-extrabold text-lg sm:text-xl md:text-2xl cursor-pointer select-text"
          style={{ color: accentColor }}
          whileHover={{ scale: 1.05, color: 'var(--accent-hover)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Logo"
        >
          {logoText}
        </motion.a>

        <ul className="hidden md:flex gap-6 lg:gap-10 text-[var(--text-secondary)] font-semibold tracking-wide">
          {navLinks.map(({ label, href }) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.a
                href={href}
                className="relative px-2 py-1 rounded-md hover:text-[var(--accent-hover)] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--accent)] rounded"
                  layoutId="underline"
                  initial={false}
                  style={{ originX: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          aria-label="Open Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="md:hidden p-2 rounded-md border border-[var(--border-muted)] text-[var(--accent)] hover:text-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
}

export const componentMetadata = {
  id: 'glass-island-navbar',
  name: 'Glass Island Navbar',
  description: 'A modern glassmorphic island style navbar with smooth animations and responsive design.',
  category: 'navigation' as const,
  tags: ['glassmorphic', 'navbar', 'navigation', 'responsive', 'animated', 'framer-motion', 'tailwindcss'],
  defaultProps: {
    logoText: 'MyLogo',
    navLinks: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    accentColor: 'var(--accent)',
    blurAmount: 16,
    height: 72,
  },
  controls: [
    {
      name: 'logoText',
      type: 'text' as const,
      defaultValue: 'MyLogo',
      label: 'Logo Text',
    },
    {
      name: 'navLinks',
      type: 'text' as const,
      defaultValue:
        '[{ label: "Home", href: "#" }, { label: "About", href: "#" }, { label: "Services", href: "#" }, { label: "Contact", href: "#" }]',
      label: 'Navigation Links (JSON string)',
    },
    {
      name: 'accentColor',
      type: 'color' as const,
      defaultValue: 'var(--accent)',
      label: 'Accent Color',
    },
    {
      name: 'blurAmount',
      type: 'number' as const,
      defaultValue: 16,
      label: 'Backdrop Blur Amount (px)',
    },
    {
      name: 'height',
      type: 'number' as const,
      defaultValue: 72,
      label: 'Navbar Height (px)',
    },
  ],
  code: `<GlassIslandNavbar 
  logoText="MyLogo"
  navLinks={[
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" }
  ]}
  accentColor="var(--accent)"
  blurAmount={16}
  height={72}
/>`,
};