'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

export function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useIntersectionObserver()
  const countedRef = useRef(false)

  useEffect(() => {
    if (!isVisible || countedRef.current) return

    countedRef.current = true
    let current = 0
    const increment = target / (duration / 16)

    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isVisible, target, duration])

  return { ref, count }
}