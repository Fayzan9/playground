# Playground Component Development Guide

## Quick Start

To add a new component to the playground, simply create a `.tsx` file in the `components/playground-components/` directory following the template below. The component will be **automatically discovered and added** to the playground.

---

## Component Template

```tsx
'use client';

import { motion } from 'framer-motion';

// 1. Define your component props interface
interface YourComponentProps {
  // Add your props here with default values
  title?: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // ... more props
}

// 2. Create your component
export function YourComponent({ 
  title = 'Default Title',
  variant = 'default',
  size = 'md',
}: YourComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="your-styles-here"
    >
      {/* Your component JSX */}
      <h3>{title}</h3>
    </motion.div>
  );
}

// 3. REQUIRED: Export component metadata for auto-discovery
export const componentMetadata = {
  id: 'your-component-id',                    // Unique ID (kebab-case)
  name: 'Your Component Name',                // Display name
  description: 'Brief description of what your component does',
  category: 'button',                         // See categories below
  tags: ['interactive', 'modern', 'custom'],  // Searchable tags
  
  // Default props for initial render
  defaultProps: {
    title: 'Default Title',
    variant: 'default',
    size: 'md',
  },
  
  // Interactive controls for the playground
  controls: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Default Title',
      label: 'Title Text',
    },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'primary', 'secondary'],
      defaultValue: 'default',
      label: 'Variant',
    },
    {
      name: 'size',
      type: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      label: 'Size',
    },
  ],
  
  // Code snippet to display (will be syntax highlighted)
  code: `<YourComponent 
  title="Default Title"
  variant="default"
  size="md"
/>`,
};
```

---

## Available Categories

Choose one category that best fits your component:

- `'button'` - Buttons, CTA elements, interactive triggers
- `'card'` - Cards, panels, containers
- `'form'` - Inputs, forms, form controls
- `'navigation'` - Menus, nav bars, breadcrumbs, tabs
- `'animation'` - Animated elements, loaders, transitions
- `'layout'` - Grid systems, layouts, wrappers
- `'feedback'` - Alerts, toasts, notifications, loading states
- `'data-display'` - Lists, tables, badges, stats

---

## Control Types

Define what controls appear in the playground viewer:

### Text Input
```tsx
{
  name: 'propName',
  type: 'text',
  defaultValue: 'Some text',
  label: 'Display Label',
}
```

### Number Input
```tsx
{
  name: 'count',
  type: 'number',
  defaultValue: 5,
  label: 'Count',
  min: 0,        // Optional
  max: 100,      // Optional
  step: 1,       // Optional
}
```

### Boolean Toggle
```tsx
{
  name: 'isActive',
  type: 'boolean',
  defaultValue: false,
  label: 'Active State',
}
```

### Select Dropdown
```tsx
{
  name: 'variant',
  type: 'select',
  options: ['small', 'medium', 'large'],
  defaultValue: 'medium',
  label: 'Size Variant',
}
```

### Color Picker
```tsx
{
  name: 'color',
  type: 'color',
  defaultValue: '#6366F1',
  label: 'Accent Color',
}
```

---

## Design Guidelines

### 1. Use Design System Variables

Always use CSS variables for consistency:

```tsx
// ✅ Good - Uses design system
className="bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border)]"

// ❌ Bad - Hard-coded colors
className="bg-gray-100 text-black border-gray-300"
```

### 2. Make Components Responsive

```tsx
className="text-base md:text-lg lg:text-xl px-4 md:px-6"
```

### 3. Add Smooth Animations

Use Framer Motion for animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
```

### 4. Support Theme Variables

```tsx
// Background colors
var(--bg-primary)      // Main background
var(--bg-secondary)    // Card/section backgrounds
var(--bg-tertiary)     // Hover states

// Text colors
var(--text-primary)    // Main text
var(--text-secondary)  // Secondary text
var(--text-muted)      // Disabled/placeholder

// Accent colors
var(--accent)          // Primary accent
var(--accent-hover)    // Hover state
var(--accent-light)    // Light variant

// Borders
var(--border)          // Default borders
var(--border-muted)    // Subtle borders

// Shadows
var(--shadow-soft)
var(--shadow-medium)
var(--shadow-strong)
```

---

## Complete Examples

### Example 1: Simple Button Component

```tsx
'use client';

import { motion } from 'framer-motion';

interface SimpleButtonProps {
  text?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function SimpleButton({ 
  text = 'Click Me',
  variant = 'solid',
  size = 'md'
}: SimpleButtonProps) {
  const variants = {
    solid: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]',
    outline: 'border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-light)]',
    ghost: 'text-[var(--accent)] hover:bg-[var(--accent-light)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]}`}
    >
      {text}
    </motion.button>
  );
}

export const componentMetadata = {
  id: 'simple-button',
  name: 'Simple Button',
  description: 'A clean, animated button with multiple variants',
  category: 'button' as const,
  tags: ['button', 'cta', 'interactive'],
  defaultProps: {
    text: 'Click Me',
    variant: 'solid',
    size: 'md',
  },
  controls: [
    {
      name: 'text',
      type: 'text' as const,
      defaultValue: 'Click Me',
      label: 'Button Text',
    },
    {
      name: 'variant',
      type: 'select' as const,
      options: ['solid', 'outline', 'ghost'],
      defaultValue: 'solid',
      label: 'Style Variant',
    },
    {
      name: 'size',
      type: 'select' as const,
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      label: 'Size',
    },
  ],
  code: `<SimpleButton 
  text="Click Me"
  variant="solid"
  size="md"
/>`,
};
```

### Example 2: Interactive Card Component

```tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface InteractiveCardProps {
  title?: string;
  description?: string;
  showIcon?: boolean;
  elevation?: 'low' | 'medium' | 'high';
}

export function InteractiveCard({ 
  title = 'Card Title',
  description = 'Card description goes here',
  showIcon = true,
  elevation = 'medium'
}: InteractiveCardProps) {
  const shadows = {
    low: 'shadow-[var(--shadow-soft)]',
    medium: 'shadow-[var(--shadow-medium)]',
    high: 'shadow-[var(--shadow-strong)]',
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        bg-[var(--bg-secondary)] rounded-xl p-6
        border border-[var(--border)]
        ${shadows[elevation]}
        hover:border-[var(--accent)]
        transition-all duration-300 cursor-pointer
        group
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>
        {showIcon && (
          <ArrowRight className="w-5 h-5 text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      <p className="text-[var(--text-secondary)]">
        {description}
      </p>
    </motion.div>
  );
}

export const componentMetadata = {
  id: 'interactive-card',
  name: 'Interactive Card',
  description: 'A hover-responsive card with smooth animations',
  category: 'card' as const,
  tags: ['card', 'interactive', 'hover', 'container'],
  defaultProps: {
    title: 'Card Title',
    description: 'Card description goes here',
    showIcon: true,
    elevation: 'medium',
  },
  controls: [
    {
      name: 'title',
      type: 'text' as const,
      defaultValue: 'Card Title',
      label: 'Card Title',
    },
    {
      name: 'description',
      type: 'text' as const,
      defaultValue: 'Card description goes here',
      label: 'Description',
    },
    {
      name: 'showIcon',
      type: 'boolean' as const,
      defaultValue: true,
      label: 'Show Arrow Icon',
    },
    {
      name: 'elevation',
      type: 'select' as const,
      options: ['low', 'medium', 'high'],
      defaultValue: 'medium',
      label: 'Shadow Elevation',
    },
  ],
  code: `<InteractiveCard 
  title="Card Title"
  description="Card description goes here"
  showIcon={true}
  elevation="medium"
/>`,
};
```

---

## File Naming Convention

- Use **kebab-case** for file names: `my-awesome-component.tsx`
- Component name should be **PascalCase**: `MyAwesomeComponent`
- Export the component and metadata in the same file

---

## Testing Your Component

1. Create your component file in `components/playground-components/`
2. Ensure you export both the component and `componentMetadata`
3. Run the dev server: `npm run dev`
4. Navigate to `/playground`
5. Your component should automatically appear in the gallery!

---

## Checklist Before Submitting

- [ ] Component is in `components/playground-components/` directory
- [ ] File uses `.tsx` extension
- [ ] Component is exported as a named export
- [ ] `componentMetadata` is exported with all required fields
- [ ] Component uses design system CSS variables
- [ ] Component is responsive (mobile, tablet, desktop)
- [ ] Animations are smooth and performant
- [ ] Controls allow meaningful customization
- [ ] Code example is clear and accurate
- [ ] Component works in both light and dark themes

---

## Auto-Discovery Magic

The playground system will:
1. ✅ Automatically scan `components/playground-components/` directory
2. ✅ Import all files ending in `.tsx`
3. ✅ Extract `componentMetadata` from each file
4. ✅ Register components in the playground
5. ✅ Make them searchable via AI chat
6. ✅ Display them in the gallery grid

**You just write the component - the system handles the rest!**

---

## Need Help?

- Check existing components in `components/playground-components/` for reference
- Review the design documentation: `DESIGN_DOCUMENTATION.md`
- Test your component locally before committing
- Use the AI chat to search for similar components

---

## Pro Tips

1. **Keep it simple** - Each component should do one thing well
2. **Use Framer Motion** - For smooth, professional animations
3. **Make it interactive** - Hover states, click effects, transitions
4. **Think accessibility** - Keyboard navigation, ARIA labels, focus states
5. **Mobile-first** - Design for small screens, enhance for larger ones
6. **Copy & Paste Ready** - Others should be able to use your code directly

---

Happy component building! 🚀
