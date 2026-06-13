import { useMemo } from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import SectionReveal from './SectionReveal'


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
          <div className="hero__profileOrbit" aria-hidden="true">
<img className="hero__img hero__img--profile" src="/avatar.png" alt="" style={{ border: 'none' }} />
            <div className="hero__orbitRing" />
            <div className="hero__orbitGlow" />
          </div>
        </div>

      </div>
    </SectionReveal>
  )
}

