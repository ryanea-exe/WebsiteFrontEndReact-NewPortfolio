import SectionReveal from './SectionReveal'
import { FaTools, FaCode } from 'react-icons/fa'
import {
  SiGithub,
  SiGit,
  SiFigma,
  SiPostman,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiPython,
} from 'react-icons/si'

import { useMemo, useState } from 'react'

const TOOLS = [
  { name: 'VS Code', Icon: SiGit },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Figma', Icon: SiFigma },
  { name: 'Postman', Icon: SiPostman },
  { name: 'Docker', Icon: SiDocker },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PostgreSQL', Icon: SiPostgresql },
]

const SKILLS = [
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'CSS', Icon: SiCss },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'PHP', Icon: SiPhp },
  { name: 'Laravel', Icon: SiLaravel },
  { name: 'React JS', Icon: SiReact },
  { name: 'Vue JS', Icon: SiVuedotjs },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Python', Icon: SiPython },
]

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  const tools = useMemo(() => TOOLS, [])
  const skills = useMemo(() => SKILLS, [])

  return (
    <SectionReveal id="skills" className="section">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionHeader__title">Skills & Tools</h2>
          <p className="sectionHeader__desc">Tools untuk workflow dan skill yang saya gunakan untuk membangun produk.</p>
        </header>

        <div className="skillsGrid">
          <div className="skillsPanel">
            <div className="panelHeader">
              <FaTools />
              <h3>Tools</h3>
            </div>

            <div className="iconRow">
              {tools.map(({ name, Icon }) => (
                <button
                  key={name}
                  type="button"
                  className={`skillIcon ${hovered === name ? 'skillIcon--active' : ''}`}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon />
                  <span className="skillIcon__label">{name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="skillsPanel">
            <div className="panelHeader">
              <FaCode />
              <h3>Skills</h3>
            </div>

            <div className="iconRow iconRow--wrap">
              {skills.map(({ name, Icon }) => (
                <button
                  key={name}
                  type="button"
                  className={`skillIcon ${hovered === name ? 'skillIcon--active' : ''}`}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon />
                  <span className="skillIcon__label">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

