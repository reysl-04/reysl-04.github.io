import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { createContainerVariants, createItemVariants } from "../../utilities/animations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  amount?: number
}

interface AnimatedItemProps {
  children: ReactNode
  className?: string
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <motion.div
      className={className}
      variants={createContainerVariants(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({ children, className }: AnimatedItemProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <motion.div className={className} variants={createItemVariants(shouldReduceMotion)}>
      {children}
    </motion.div>
  )
}