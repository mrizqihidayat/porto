import '../css/StatsSection.css'
import { useReveal, anim } from '../hooks/useReveal'

const StatsSection = ({ items }) => {
  const [ref, visible] = useReveal()

  return (
    <div className="stats" ref={ref}>
    {items.map((item, idx) => (
      <div className="stat-item" key={item.value} style={anim.scaleUp(visible, idx * 0.1)}>
        <div className="stat-num">
          <span className="stat-plus">+</span>
          {item.value}
        </div>
        <div className="stat-lbl" style={{ whiteSpace: 'pre-line' }}>
          {item.label}
        </div>
      </div>
    ))}
    </div>
  )
}

export default StatsSection
