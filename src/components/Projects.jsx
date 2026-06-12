import { useMemo, useState } from 'react'
import SectionReveal from './SectionReveal'

import { FiExternalLink, FiGithub, FiMoreHorizontal } from 'react-icons/fi'
import { createPortal } from 'react-dom'

const PROJECTS = [
  {
    id: 'project-1',
    title: 'WNA Tracking System',
    summary:
      'Developed a full-stack web application for foreign national monitoring, integrating data management, analytics dashboards, automated notifications, and reporting systems.',
    tech: ['React', 'Vite', 'REST API', 'Chart.js'],
    image: '/login-tracking-wna.png',
    details: {
      challenges: [
        'Mengoptimasi rendering data besar tanpa lag.',
        'Menyediakan filtering yang responsif dan konsisten.',
      ],
      solutions: [
        'Memoization & rendering tersegmentasi.',
        'Skeleton loading, caching, dan pagination.',
      ],
      stack: ['React', 'Vite', 'React Query (optional)', 'CSS', 'Chart.js'],
    },
  },
  {
    id: 'project-2',
    title: 'Singobarong System',
    summary: 'Built a full-stack inventory and asset management platform with workflow automation, maintenance tracking, reporting, and role-based access control.',
    tech: ['Laravel', 'MySQL', 'JWT', 'React'],
    image: '/login-singobarong.png',
    details: {
      challenges: [
        'Keamanan autentikasi dan otorisasi.',
        'Integrasi checkout dan manajemen stok.',
      ],
      solutions: [
        'Role-based access control dan validasi server-side.',
        'Transaksi database dan update stok atomik.',
      ],
      stack: ['Laravel', 'MySQL', 'JWT', 'API Resources', 'React'],
    },
  },
  {
    id: 'project-3',
    title: 'SDawetJabung System',
    summary: 'Built a responsive WordPress website with customized content management features to streamline information publishing and administration.',
    tech: ['Next (optional)', 'Node', 'Markdown', 'React'],
    image: '/foreigners-sdawetjabung.png',
    details: {
      challenges: ['Menjaga konsistensi layout dari konten Markdown.', 'Menyediakan preview real-time.'],
      solutions: ['Parser Markdown terstandar dan sandbox preview.', 'Debounce dan caching state preview.'],
      stack: ['React', 'Node', 'Markdown', 'REST API'],
    },
  },
]

function Modal({ open, onClose, project }) {
  const el = document.getElementById('root')
  if (!open || !project || !el) return null

  return createPortal(
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
      tabIndex={-1}
    >
      <div className="modal">
        <div className="modal__header">
          <div>
            <div className="modal__kicker">Project Details</div>
            <h3 className="modal__title">{project.title}</h3>
          </div>
          <button type="button" className="iconBtn iconBtn--danger" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal__grid">
          <div className="modal__left">
            <p className="modal__summary">{project.summary}</p>

            <div className="modal__section">
              <h4 className="modal__h">Tantangan</h4>
              <ul className="modal__ul">
                {project.details.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="modal__section">
              <h4 className="modal__h">Solusi</h4>
              <ul className="modal__ul">
                {project.details.solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal__right">
            <div className="modal__poster" aria-hidden="true" />
            <div className="modal__section">
              <h4 className="modal__h">Tech Stack</h4>
              <div className="chips chips--dense">
                {project.details.stack.map((t) => (
                  <span key={t} className="chip chip--soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal__links">
              <a className="btn btn--primary" href="#" onClick={(e) => e.preventDefault()}>
                <FiExternalLink /> Live Demo
              </a>
              <a className="btn btn--secondary" href="#" onClick={(e) => e.preventDefault()}>
                <FiGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    el,
  )
}

export default function Projects() {
  const [activeId, setActiveId] = useState(null)

  const active = useMemo(() => PROJECTS.find((p) => p.id === activeId) ?? null, [activeId])

  return (
    <SectionReveal id="projects" className="section">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionHeader__title">Featured Projects</h2>
          <p className="sectionHeader__desc">Some of the featured projects with easy-to-understand details on Maganghub at "Kantor Imigrasi Kelas II Non TPI Ponorogo"</p>
        </header>

        <div className="projectsRow">
          {PROJECTS.map((p) => (
            <article key={p.id} className="projectCard">
              <div className="projectCard__media" aria-hidden="true">
                <div className="projectCard__bg" />
                <img className="projectCard__img" src={p.image} alt="" />
              </div>


              <div className="projectCard__body">
                <h3 className="projectCard__title">{p.title}</h3>
                <p className="projectCard__summary">{p.summary}</p>
                <div className="chips">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="chip chip--soft">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="projectCard__actions">
                  <a className="btn btn--ghost" href="#" onClick={(e) => e.preventDefault()}>
                    <FiExternalLink /> Live Demo
                  </a>
                  <a className="btn btn--ghost" href="#" onClick={(e) => e.preventDefault()}>
                    <FiGithub /> GitHub
                  </a>
                </div>

                <button
                  type="button"
                  className="btn btn--primary btn--full"
                  onClick={() => setActiveId(p.id)}
                >
                  <FiMoreHorizontal /> Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        <Modal open={!!activeId} onClose={() => setActiveId(null)} project={active} />
      </div>
    </SectionReveal>
  )
}

