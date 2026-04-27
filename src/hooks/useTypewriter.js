import { useEffect, useState } from 'react'

export const useTypewriter = (text, speed = 50, startDelay = 0) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId
    let index = 0

    const startTyping = () => {
      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
          timeoutId = setTimeout(type, speed)
        } else {
          setIsComplete(true)
        }
      }

      timeoutId = setTimeout(type, startDelay)
    }

    startTyping()

    return () => clearTimeout(timeoutId)
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}
