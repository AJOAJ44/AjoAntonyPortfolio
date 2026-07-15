import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface FadeInProps {
  as?: string
  delay?: number
  duration?: number
  x?: number
  y?: number
  children?: ReactNode
  className?: string
  style?: Record<string, string | number>
  [key: string]: unknown
}

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  className,
  style,
  ...rest
}: FadeInProps) {
  const Component = motion.create(as as any)

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
      {...(rest as any)}
    >
      {children}
    </Component>
  )
}
