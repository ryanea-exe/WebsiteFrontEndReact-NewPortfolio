import SectionReveal from './SectionReveal'

import {
  FaTools, 
  FaCode,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaLaravel,
  FaFlask,
  FaWordpress,
  FaGit,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa'

import {
  SiLaravel,
  SiNextdotjs,
  SiPython,
  SiTypescript,
  SiKotlin,
  SiTailwindcss,
  SiCodeigniter,
  SiFilament,
  SiMysql,
  SiPostgresql,
  SiMariadb,
  SiSqlite,
  SiNginx,
  SiApache,
  SiMamp,
  SiLaragon,
  SiPhpmyadmin,
  SiVercel,
  SiCanva,
  SiArduino,
} from 'react-icons/si'

import {
  VscVscode,
  VscLayoutSidebarLeft,
} from 'react-icons/vsc'

import { useMemo, useState } from 'react'

const TOOLS = [
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MariaDB', Icon: SiMariadb },
  { name: 'SQLite', Icon: SiSqlite },
  { name: 'Nginx', Icon: SiNginx },
  { name: 'Apache', Icon: SiApache },
  { name: 'VS Code', Icon: VscVscode },
  { name: 'GitHub', Icon: FaGithub },
  { name: 'MAMP', Icon: SiMamp },
  { name: 'Laragon', Icon: SiLaragon },
  { name: 'phpMyAdmin', Icon: SiPhpmyadmin },
  { name: 'DB Engine', Icon: FaDatabase },
  { name: 'Vercel', Icon: SiVercel },
  { name: 'Figma', Icon: FaFigma },
  { name: 'Canva', Icon: SiCanva },
  { name: 'WireFrame', Icon: VscLayoutSidebarLeft },
  { name: 'Arduino', Icon: SiArduino },
]

const SKILLS = [
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS3', Icon: FaCss3 },
  { name: 'JavaScript', Icon: FaJs },
  { name: 'PHP', Icon: FaPhp },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Java', Icon: FaJava },
  { name: 'Python', Icon: FaPython },
  { name: 'Kotlin', Icon: SiKotlin },
  { name: 'React', Icon: FaReact },
  { name: 'Vue JS', Icon: FaVuejs },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Bootstrap', Icon: FaBootstrap },
  { name: 'Laravel', Icon: FaLaravel },
  { name: 'Next JS', Icon: SiNextdotjs },
  { name: 'CodeIgniter', Icon: SiCodeigniter },
  { name: 'Flask', Icon: FaFlask },
  { name: 'Filament', Icon: SiFilament },
  { name: 'WordPress', Icon: FaWordpress },
  { name: 'Git', Icon: FaGit },
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
          <p className="sectionHeader__desc">Tools for workflow and skills I use to build products (TechStack).</p>
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

