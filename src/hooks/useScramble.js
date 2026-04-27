import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const getRandomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)]

export const useScramble = (text, duration = 600, startDelay = 0, updateInterval = 16) => {
  const [displayedText, setDisplayedText] = useState(text)

  useEffect(() => {
    let timeoutId
    let rafId
    let lastUpdateTime = 0
    const targetText = text

    const startScramble = () => {
      const startTime = Date.now()
      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)

        if (now - lastUpdateTime < updateInterval && progress < 1) {
          rafId = requestAnimationFrame(animate)
          return
        }

        lastUpdateTime = now

        const scrambledText = targetText
          .split('')
          .map((char, index) => {
            // Calculate when this character should settle
            const charDelay = (index / targetText.length) * duration
            const charProgress = Math.max(0, (now - startTime - charDelay) / duration)

            if (charProgress >= 1) {
              // Character is revealed
              return char
            } else if (charProgress > 0) {
              // Character is being revealed, show random chars
              return getRandomChar()
            } else {
              // Character hasn't started revealing yet
              return getRandomChar()
            }
          })
          .join('')

        setDisplayedText(scrambledText)

        if (progress < 1) {
          rafId = requestAnimationFrame(animate)
        } else {
          setDisplayedText(targetText)
        }
      }

      timeoutId = setTimeout(() => {
        rafId = requestAnimationFrame(animate)
      }, startDelay)
    }

    startScramble()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [text, duration, startDelay, updateInterval])

  return displayedText
}
