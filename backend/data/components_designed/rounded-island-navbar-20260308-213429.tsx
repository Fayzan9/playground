'use client';

import { motion } from 'framer-motion';

interface RoundedIslandNavbarProps {
  logoText?: string;
  links?: string[];
  gradientFrom?: string;
  gradientTo?: string;
}

export function RoundedIslandNavbar({
  logoText = 'PurpleLogo',
  links = ['Home', 'About', 'Services', 'Contact'],
  gradientFrom = 'var(--accent)',
  gradientTo = 'var(--accent-light)',
}: RoundedIslandNavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-full w-full flex justify-between items-center rounded-full overflow-hidden shadow-[var(--shadow-medium)]"
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 px-5 py-2 text-[var(--text-primary)] font-extrabold text-lg select-none cursor-default"
      >
        {logoText}
      </motion.div>
      <motion.ul
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex space-x-6 px-5 py-2 list-none"
      >
        {links.map((link, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1, color: 'var(--accent-hover)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="cursor-pointer text-[var(--text-primary)] font-semibold select-none"
          >
            {link}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export const componentMetadata = {
  id: 'rounded-island-navbar',
  name: 'Rounded Island Navbar',
  description:
    'A modern rounded island style navbar with a purple gradient background, logo on the left, and links on the right.',
  category: 'navigation' as const,
  tags: ['navbar', 'navigation', 'gradient', 'rounded', 'purple', 'animated', 'responsive'],
  defaultProps: {
    logoText: 'PurpleLogo',
    links: ['Home', 'About', 'Services', 'Contact'],
    gradientFrom: 'var(--accent)',
    gradientTo: 'var(--accent-light)',
  },
  controls: [
    {
      name: 'logoText',
      type: 'text' as const,
      defaultValue: 'PurpleLogo',
      label: 'Logo Text',
    },
    {
      name: 'links',
      type: 'text' as const,
      defaultValue: 'Home,About,Services,Contact',
      label: 'Links (comma separated)',
    },
    {
      name: 'gradientFrom',
      type: 'color' as const,
      defaultValue: 'var(--accent)',
      label: 'Gradient Start Color',
    },
    {
      name: 'gradientTo',
      type: 'color' as const,
      defaultValue: 'var(--accent-light)',
      label: 'Gradient End Color',
    },
  ],
  code:
    `<RoundedIslandNavbar
  logoText="PurpleLogo"
  links={['Home', 'About', 'Services', 'Contact']}
  gradientFrom="var(--accent)"
  gradientTo="var(--accent-light)"
/>`,
};