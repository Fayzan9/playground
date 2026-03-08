"use client";

/**
 * Reveal Animations
 * Framer Motion animations for scroll-reveal effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Fade In Up Animation
 * Fades in and slides up from below
 */
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.8, 0.25, 1], // --ease-smooth
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade In Animation
 * Simple fade in effect
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
}

/**
 * Stagger Container
 * Container that staggers animations of its children
 */
export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item
 * Individual item within a StaggerContainer
 */
export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
