import { useRef, useState, useEffect } from 'react'

export function useReveal(threshold = 0.08, once = true) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const hasBeenVisible = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (once) {
          if (e.isIntersecting && !hasBeenVisible.current) {
            setVisible(true)
            hasBeenVisible.current = true
            obs.unobserve(el)
          }
        } else {
          setVisible(e.isIntersecting)
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, once])

  return [ref, visible]
}

export const anim = {
  fadeUp: (v, delay = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  }),
  slideLeft: (v, delay = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateX(0)' : 'translateX(-28px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  }),
  slideRight: (v, delay = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateX(0)' : 'translateX(28px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  }),
  scaleUp: (v, delay = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(18px)',
    transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
  }),
}
