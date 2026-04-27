import { useEffect, useState } from 'react'
import '../css/HeroSection.css'
import { useTypewriter } from '../hooks/useTypewriter'
import { useScramble } from '../hooks/useScramble'
import heroImage from '../assets/hero.png'

const HeroSection = ({ entered }) => {
  const roleText = 'Welcome to\nMy Portfolio'
  const descText = 'I am a developer passionate about building impactful digital products, from concept to production.'
  const tagText = 'Frontend Developer'
  const nameText = 'Rizqi'
  
  const { displayedText: displayedRole } = useTypewriter(roleText, 50, entered ? 300 : 999999)
  const { displayedText: displayedDesc } = useTypewriter(descText, 30, entered ? 900 : 999999)
  const scrambledTag = useScramble(tagText, 1200, entered ? 0 : 999999, 64)
  const scrambledName = useScramble(nameText, 1200, entered ? 200 : 999999, 64)

  return (
    <section
      id="home"
      className="hero"
      style={{ opacity: entered ? 1 : 0, transition: 'opacity .7s ease' }}
    >
      <span className="v-label v-label-l">PORTFOLIO</span>

      <div className="hero-left">
        <span className="hero-tag">{scrambledTag}</span>
        <div className="hero-name">
          {scrambledName}<span className="dot">.</span>
        </div>
      </div>

      <div className="hero-center">
        <div className="hero-circle" />
        <div className="hero-photo-placeholder">
          <img src={heroImage} alt="Rizqi profile" className="hero-photo" />
        </div>
      </div>

      <div className="hero-right">
        <p className="hero-role" style={{ whiteSpace: 'pre-line', minHeight: '56px' }}>
          {displayedRole}
          {displayedRole.length < roleText.length && <span className="typing-cursor">|</span>}
        </p>
        <p className="hero-desc" style={{ minHeight: '52px' }}>
          {displayedDesc}
          {displayedDesc.length < descText.length && <span className="typing-cursor">|</span>}
        </p>
        <div className="hero-cta">
          <button className="btn-red">View Projects</button>
          <button className="btn-ghost">Contact Me</button>
        </div>
      </div>

    </section>
  )
}

export default HeroSection