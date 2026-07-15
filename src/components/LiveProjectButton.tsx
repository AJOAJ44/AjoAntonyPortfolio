import { type ReactNode } from 'react'

interface LiveProjectButtonProps {
  children?: ReactNode
  className?: string
  href?: string
}

export default function LiveProjectButton({ children, className, href = 'https://pizzaproject-seven.vercel.app/' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 ${className ?? ''}`}
    >
      {children ?? 'Live Project'}
    </a>
  )
}
