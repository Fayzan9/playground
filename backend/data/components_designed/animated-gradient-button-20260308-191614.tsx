'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
}

export function AnimatedGradientButton({
  label = 'Click Me',
  size = 'md',
  disabled = false,
  fullWidth = false,
}: AnimatedGradientButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : 'inline-block';

  return (
    <motion.button
      type="button"
      disabled={disabled}
      initial={{ opacity: disabled ? 0.6 : 1, scale: 1 }}
      animate={{ opacity: disabled ? 0.6 : 1, scale: 1 }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        ${widthClass}
        rounded-xl
        border border-[var(--border)]
        shadow-[var(--shadow-medium)]
        bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent-hover)]
        text-[var(--text-primary)]
        font-semibold
        select-none
        cursor-pointer
        disabled:cursor-not-allowed
        disabled:border-[var(--border-muted)]
        disabled:shadow-[var(--shadow-soft)]
        disabled:bg-[var(--bg-secondary)]
        transition-all duration-300
        ${sizes[size]}
      `}
    >
      {label}
    </motion.button>
  );
}

export const componentMetadata = {
  id: 'animated-gradient-button',
  name: 'Animated Gradient Button',
  description: 'A modern animated button with a smooth gradient background and interactive scaling effects.',
  category: 'button' as const,
  tags: ['button', 'gradient', 'animated', 'interactive', 'framer-motion', 'tailwindcss'],
  defaultProps: {
    label: 'Click Me',
    size: 'md',
    disabled: false,
    fullWidth: false,
  },
  controls: [
    {
      name: 'label',
      type: 'text' as const,
      defaultValue: 'Click Me',
      label: 'Button Label',
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
    {
      name: 'fullWidth',
      type: 'boolean' as const,
      defaultValue: false,
      label: 'Full Width',
    },
  ],
  code: `<AnimatedGradientButton 
  label="Click Me"
  size="md"
  disabled={false}
  fullWidth={false}
/>`,
};