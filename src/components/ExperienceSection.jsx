import { useLayoutEffect, useRef, useState } from 'react'
import '../css/ExperienceSection.css'
import { useReveal, anim } from '../hooks/useReveal'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const ExperienceSection = ({ experiences }) => {
  const layoutRef = useRef(null)
  const itemRefs = useRef([])
  const [sectionRef, visible] = useReveal()
  const [lineMetrics, setLineMetrics] = useState({
    top: 0,
    height: 0,
    progress: 0,
    centers: [],
  })

  useLayoutEffect(() => {
    const updateMetrics = () => {
      const layoutElement = layoutRef.current
      const items = itemRefs.current.filter(Boolean)

      if (!layoutElement || items.length === 0) {
        return
      }

      const layoutRect = layoutElement.getBoundingClientRect()
      const centersAbsolute = items.map((item) => {
        const itemRect = item.getBoundingClientRect()
        return itemRect.top - layoutRect.top + itemRect.height / 2
      })

      const top = centersAbsolute[0]
      const bottom = centersAbsolute[centersAbsolute.length - 1]
      const height = Math.max(bottom - top, 0)
      const centers = centersAbsolute.map((center) => center - top)

      const viewportHeight = window.innerHeight || 1
      const visibleStart = viewportHeight * 0.82
      const visibleEnd = viewportHeight * 0.28
      const sectionTop = layoutRect.top
      const sectionBottom = layoutRect.bottom

      const rawProgress = (visibleStart - sectionTop) / (visibleStart - visibleEnd)
      const lowerBound = sectionBottom < visibleStart ? 1 : 0
      const progress = clamp(Math.max(rawProgress, lowerBound), 0, 1)

      setLineMetrics({
        top,
        height,
        progress,
        centers,
      })
    }

    const handleScroll = () => updateMetrics()
    const handleResize = () => updateMetrics()

    updateMetrics()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [experiences])

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="exp-title">
        WORK <span>EXPERIENCE</span>
      </div>
      <div className="exp-layout" ref={layoutRef} style={{ '--timeline-start': `${lineMetrics.top}px` }}>
        <span
          className="exp-timeline"
          aria-hidden="true"
          style={{
            top: `${lineMetrics.top}px`,
            height: `${lineMetrics.height}px`,
          }}
        >
          <span
            className="exp-timeline-fill"
            style={{ transform: `scaleY(${lineMetrics.progress})` }}
          />
        </span>
        <div className="exp-list">
          {experiences.map((experience, index) => (
            <div
              className={`exp-item ${lineMetrics.height * lineMetrics.progress >= (lineMetrics.centers[index] ?? Number.MAX_SAFE_INTEGER) ? 'is-active' : ''}`}
              key={experience.year + experience.role}
              ref={(element) => {
                itemRefs.current[index] = element
              }}
            style={anim.slideRight(visible, index * 0.1)}
            >
              <div className="exp-year">{experience.year}</div>
              <div className="exp-body">
                <div className="exp-role">{experience.role}</div>
                <div className="exp-company">{experience.company}</div>
                {Array.isArray(experience.desc) ? (
                  <ul className="exp-desc-list">
                    {experience.desc.map((item, idx) => (
                      <li key={idx} className="exp-desc-item">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="exp-desc">{experience.desc}</p>
                )}
              </div>
              <div className="exp-badge">{experience.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
