import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import ProjectsSection from './components/ProjectSection'
import TechToolsSection from './components/TechToolsSection'
import ExperienceSection from './components/ExperienceSection'
import FooterSection from './components/FooterSection'
import { projects, experiences, navItems, stats } from './Data/index.js'

const App = () => {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 60)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar items={navItems} />
      <HeroSection entered={entered} />
      <StatsSection items={stats} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <TechToolsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App