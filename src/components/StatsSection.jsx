import '../css/StatsSection.css'

const StatsSection = ({ items }) => (
  <div className="stats">
    {items.map((item) => (
      <div className="stat-item" key={item.value}>
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

export default StatsSection
