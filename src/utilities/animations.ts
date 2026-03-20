import type { Variants } from "framer-motion"

export function createContainerVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }
}

export function createItemVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.2, 0.7, 0.2, 1],
      },
    },
  }
}