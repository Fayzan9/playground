'use client';

import { motion } from 'framer-motion';

interface ImageCardProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  gradientFrom?: string;
  gradientTo?: string;
  rounded?: boolean;
}

export function ImageCard({
  imageSrc = '/images/default.jpg',
  title = 'Card Title',
  subtitle = 'Subtitle',
  description = 'This is a brief description to illustrate the card content.',
  gradientFrom = 'var(--accent)',
  gradientTo = 'var(--accent-light)',
  rounded = true,
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`
        relative
        max-w-sm
        bg-[var(--bg-primary)]
        border border-[var(--border)]
        shadow-[var(--shadow-medium)]
        overflow-hidden
        flex flex-col
        ${rounded ? 'rounded-xl' : ''}
        cursor-pointer
        select-none
        transition-all duration-300
        md:max-w-md
      `}
    >
      <div className="relative overflow-hidden w-full h-48 md:h-56">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out will-change-transform motion-reduce:transform-none hover:scale-105"
          draggable={false}
          loading="lazy"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t pointer-events-none"
          style={{ backgroundImage: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 80%)` }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="p-4 flex flex-col flex-grow"
      >
        <h3 className="text-[var(--text-primary)] font-semibold text-lg md:text-xl">{title}</h3>
        <h4 className="text-[var(--text-secondary)] text-sm md:text-base mt-1">{subtitle}</h4>
        <p className="text-[var(--text-muted)] text-xs md:text-sm mt-2 flex-grow">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export const componentMetadata = {
  id: 'image-card-with-gradient-hover',
  name: 'Image Card with Gradient Hover',
  description: 'A responsive card with an image, metadata, and smooth gradient hover effect.',
  category: 'card' as const,
  tags: ['card', 'image', 'gradient', 'hover', 'responsive', 'animated', 'framer-motion', 'tailwindcss'],
  defaultProps: {
    imageSrc: '/images/default.jpg',
    title: 'Card Title',
    subtitle: 'Subtitle',
    description: 'This is a brief description to illustrate the card content.',
    gradientFrom: 'var(--accent)',
    gradientTo: 'var(--accent-light)',
    rounded: true,
  },
  controls: [
    {
      name: 'imageSrc',
      type: 'text' as const,
      defaultValue: '/images/default.jpg',
      label: 'Image Source URL',
    },
    {
      name: 'title',
      type: 'text' as const,
      defaultValue: 'Card Title',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text' as const,
      defaultValue: 'Subtitle',
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'text' as const,
      defaultValue: 'This is a brief description to illustrate the card content.',
      label: 'Description',
    },
    {
      name: 'gradientFrom',
      type: 'color' as const,
      defaultValue: 'var(--accent)',
      label: 'Gradient From Color',
    },
    {
      name: 'gradientTo',
      type: 'color' as const,
      defaultValue: 'var(--accent-light)',
      label: 'Gradient To Color',
    },
    {
      name: 'rounded',
      type: 'boolean' as const,
      defaultValue: true,
      label: 'Rounded Corners',
    },
  ],
  code: `<ImageCard
  imageSrc="/images/sample.jpg"
  title="Sunset Vista"
  subtitle="Nature Photography"
  description="A beautiful view capturing the warm hues of a sunset."
  gradientFrom="var(--accent)"
  gradientTo="var(--accent-light)"
  rounded={true}
/>`,
};