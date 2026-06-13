import { useMemo } from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import SectionReveal from './SectionReveal'

import HeroOrbit from './HeroOrbit'

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

import profileImage from '/avatar.png'

const orbitIcons = [
  { Icon: FaPhp },
  { Icon: FaReact },
  { Icon: FaJs },
  { Icon: FaVuejs },
  { Icon: SiTailwindcss },
  { Icon: FaHtml5 },
  { Icon: FaLaravel },
  { Icon: SiMysql },
  { Icon: SiPostgresql },
  { Icon: SiNginx },
  { Icon: FaGit },
]


export default function Hero() {
  const downloadHref = useMemo(() => '#', [])


  return (
    <SectionReveal id="home" className="section section--hero">
      <div className="container hero">
        <div className="hero__copy" style={{ alignSelf: 'center' }}>

          <div className="hero__eyebrow">
            <span className="dot" aria-hidden="true" />
            Open for collaboration
          </div>
          <h1 className="hero__title">
            Hi, I'm <span className="gradientText">Ryan</span>
          </h1>
          <h2 className="hero__subtitle">Web Developer</h2>
          <p className="hero__desc">
            Web Developer & Software Engineer | Machine Learning Cohort at Bangkit Academy 2024 | 
            Bachelor of Computer Science | Building a Data Inventory System, Foreign Tracking System, & Scheduling Application
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={downloadHref} download>
              <FaDownload /> Download CV
            </a>
            <a className="btn btn--secondary" href="mailto:hello@example.com">
              <MdOutlineEmail /> Contact Me
            </a>
          </div>

          {/*
          <div className="hero__meta">
            <div className="metaCard">
              <div className="metaCard__k">Focus</div>
              <div className="metaCard__v">React • Node • Laravel</div>
            </div>
            <div className="metaCard">
              <div className="metaCard__k">Approach</div>
              <div className="metaCard__v">Clean UI, Clean Code</div>
            </div>
          </div>
          */}
        </div>

        <div className="hero__media" aria-hidden="true">
          <div className="hero__frame" />
            <HeroOrbit
              image={profileImage}
              icons={orbitIcons}
            />
        </div>

      </div>
    </SectionReveal>
  )
}

