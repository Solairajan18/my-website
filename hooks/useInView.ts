import { useEffect, useRef, useState } from 'react'

/**
 * Hook to detect if an element is in viewport
 * Useful for triggering animations on scroll
 */
export function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Optionally stop observing after it comes into view
          // observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold])

  return isInView
}
