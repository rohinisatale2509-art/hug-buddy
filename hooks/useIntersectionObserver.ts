'use client'

import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}