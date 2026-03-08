/**
 * Site Configuration
 * Central configuration for the entire website
 */

import { ColorPaletteName } from "./color-palettes";

export const siteConfig = {
  // Site Metadata
  name: "Portfolio",
  title: "Portfolio - Your Name",
  description: "Professional portfolio and blog showcasing projects and thoughts",
  url: "https://yourwebsite.com",
  
  // Author Information
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    url: "https://yourwebsite.com",
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com",
  },

  // Theme Configuration
  theme: {
    colorPalette: "indigo" as ColorPaletteName, // Change this to switch themes
  },

  // Navigation Links
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  // Feature Flags
  features: {
    blogEnabled: true,
    projectsEnabled: true,
    contactFormEnabled: true,
  },
};

// Export individual configs for convenience
export const { name, title, description, url, author, social, theme, nav, features } = siteConfig;
