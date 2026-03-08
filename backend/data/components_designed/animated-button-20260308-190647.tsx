'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  label?: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function AnimatedButton({
  label = 'Click Me',
  variant = 'default',
  size = 'md',
  disabled = false,
}: AnimatedButtonProps) {
  const variants = {
    default: 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] shadow-[var(--shadow-soft)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)]',
    primary: 'bg-[var(--accent)] text-white border border-[var(--accent)] shadow-[var(--shadow-medium)] hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-strong)]',
    secondary:
      'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-muted)] shadow-[var(--shadow-soft)] hover:bg-[var(--accent-light)] hover:text-[var(--text-primary)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={!disabled ? { scale: 1.05, boxShadow: '0px 8px 15px var(--shadow-strong)' } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      disabled={disabled}
      className={`
        rounded-xl
        font-semibold
        focus:outline-none focus:ring-4 focus:ring-[var(--accent-light)]
        transition-all duration-300
        select-none
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyles}
        flex items-center justify-center
      `}
      aria-disabled={disabled}
    >
      {label}
    </motion.button>
  );
}

export const componentMetadata = {
  id: 'animated-button',
  name: 'Animated Button',
  description: 'A smooth, modern animated button with variants and sizes using Framer Motion and Tailwind CSS.',
  category: 'button' as const,
  tags: ['button', 'animated', 'interactive', 'framer-motion', 'tailwind', 'tsx', 'react', 'nextjs'],
  defaultProps: {
    label: 'Click Me',
    variant: 'default',
    size: 'md',
    disabled: false,
  },
  controls: [
    {
      name: 'label',
      type: 'text' as const,
      defaultValue: 'Click Me',
      label: 'Label Text',
    },
    {
      name: 'variant',
      type: 'select' as const,
      options: ['default', 'primary', 'secondary'],
      defaultValue: 'default',
      label: 'Variant',
    },
    {
      name: 'size',
      type: 'select' as const,
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      label: 'Size',
    },
    {
      name: 'disabled',
      type: 'boolean' as const,
      defaultValue: false,
      label: 'Disabled',
    },
  ],
  code: `<AnimatedButton 
  label="Submit" 
  variant="primary" 
  size="md" 
  disabled={false} 
/>`,
};