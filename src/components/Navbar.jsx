import { useEffect, useState } from 'react'
import '../css/Navbar.css'

const Navbar = ({ items }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sectionMap = {
    Home: 'home',
    Experience: 'experience',
    Projects: 'projects',
    Contact: 'contact',
  }

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    const sectionId = sectionMap[item] || item.toLowerCase()
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <span className="nav-brand">PORTOFOLIO</span>

      <ul className="nav-links nav-links-desktop">
        {items.map((item, index) => (
          <li key={item}>
            <a 
              href={`#${sectionMap[item] || item.toLowerCase()}`}
              className={index === 0 ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`nav-menu ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside className={`mobile-popup ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-popup-head">PORTOFOLIO</div>

        <ul className="nav-links nav-links-mobile">
          {items.map((item, index) => (
            <li key={`mobile-${item}`}>
              <a
                href={`#${sectionMap[item] || item.toLowerCase()}`}
                className={index === 0 ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  )
}

export default Navbar