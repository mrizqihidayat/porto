import { useEffect, useRef } from 'react'

const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null)
  const hasBeenVisible = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible.current) {
        entry.target.classList.add('fade-in-visible')
        hasBeenVisible.current = true
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return ref
}

export default useIntersectionObserver
