import { useRef, useState, type ReactNode, type MouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)')
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const isInside =
      e.clientX >= rect.left - padding &&
      e.clientX <= rect.right + padding &&
      e.clientY >= rect.top - padding &&
      e.clientY <= rect.bottom + padding

    if (!isInside) {
      setTransform('translate3d(0px, 0px, 0px)')
      setIsHovered(false)
      return
    }

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    setIsHovered(true)
    setTransform(`translate3d(${deltaX / strength}px, ${deltaY / strength}px, 0px)`)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform('translate3d(0px, 0px, 0px)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
