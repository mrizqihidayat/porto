import '../css/TechToolsSection.css'
import tech1 from '../assets/tech/technology_1.png'
import tech2 from '../assets/tech/technology_2.png'
import tech3 from '../assets/tech/technology_3.png'
import tech4 from '../assets/tech/technology_4.png'
import tech5 from '../assets/tech/technology_5.png'
import tech6 from '../assets/tech/technology_6.png'
import tech7 from '../assets/tech/technology_7.png'
import tech8 from '../assets/tech/technology_8.png'
import tool1 from '../assets/tool/tools_1.png'
import tool2 from '../assets/tool/tools_2.png'
import tool3 from '../assets/tool/tools_3.png'
import tool4 from '../assets/tool/tools_4.png'
import tool5 from '../assets/tool/tools_5.png'
import tool6 from '../assets/tool/tools_6.png'
import tool7 from '../assets/tool/tools_7.png'
import tool8 from '../assets/tool/tools_8.png'

const techStack = [
  { name: 'HTML5', src: tech1 },
  { name: 'CSS3', src: tech2 },
  { name: 'JavaScript', src: tech3 },
  { name: 'React', src: tech4 },
  { name: 'Next.js', src: tech5 },
  { name: 'Node.js', src: tech6 },
  { name: 'SQL', src: tech7 },
  { name: 'Tailwind CSS', src: tech8 },
]

const tools = [
  { name: 'Vscode', src: tool1 },
  { name: 'Git', src: tool2 },
  { name: 'GitHub', src: tool3 },
  { name: 'ubuntu', src: tool4 },
  { name: 'Docker', src: tool5 },
  { name: 'Postman', src: tool6 },
  { name: 'Vercel', src: tool7 },
  { name: 'Figma', src: tool8 },
]

const TechToolsSection = () => (
  <section className="tech-tools-section" id="tech-tools">
    <div className="tech-tools-container">
      <div className="tech-tools-column">
        <p className="section-kicker">My Tech Stack</p>
        <h3 className="section-title">Technologies I Work With</h3>
        <div className="logo-grid" aria-label="Tech Stack logos">
          {techStack.map((item) => (
            <div className="logo-card" key={item.name}>
              <img src={item.src} alt={item.name} className="logo-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="tech-tools-column">
        <p className="section-kicker">Tools I Use</p>
        <h3 className="section-title">Development Tools</h3>
        <div className="logo-grid" aria-label="Tools logos">
          {tools.map((item) => (
            <div className="logo-card" key={item.name}>
              <img src={item.src} alt={item.name} className="logo-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default TechToolsSection
