import { useMemo, useState, useEffect } from 'react'
import SectionReveal from './SectionReveal'

import { FiExternalLink, FiGithub, FiMoreHorizontal, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { createPortal } from 'react-dom'

const PROJECTS = [
  {
    id: 'project-1',
    title: 'WNA Tracking System',
    liveDemoUrl: 'https://www.linkedin.com/posts/ryan-erlangga-ardiansyah_laravel-webdevelopment-fullstackdeveloper-ugcPost-7467056578592964608-rFBx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH8VVgB3TsOGz8rhBvscTxV7UOXQ_VUB3Q',
    githubUrl: 'https://github.com/ryanea-exe/WebsiteLaravel11-TrackingWNAKanimPonorogo2.git',
    summary:
      'Developed a full-stack web application for foreign national monitoring, integrating data management, analytics dashboards, automated notifications, and reporting systems.',
    tech: ['Laravel', 'PHP', 'Tailwind', 'MySQL', 'etc.'],
    images: [
      '/login-trackingwna.png',
      '/trackingwna-1.png', // Tambahkan gambar tambahan
      '/trackingwna-2.png',
      '/trackingwna-3.png',
      '/trackingwna-4.png',
      '/trackingwna-5.png',
      '/trackingwna-6.png',
      '/trackingwna-7.png',
      '/trackingwna-8.png',
      '/trackingwna-9.png',
    ],
    details: {
      challenges: [
        '• Handling complex immigration data across multiple categories.',
        '• Preventing missed stay permit expiration deadlines.',
        '• Generating accurate statistical reports from diverse immigration data.',
      ],
      solutions: [
        '• Built a centralized database with advanced filtering and analytics.',
        '• Implemented automated alerts and dashboard-based monitoring.',
        '• Built interactive dashboards and automated analytics reporting.',
      ],
      stack: ['Laravel', 'PHP', 'Tailwind', 'MySQL', 'RESTful Architecture', 'Chart.js', 'DataTables', 'etc.'],
    },
  },
  {
    id: 'project-2',
    title: 'Singobarong System',
    liveDemoUrl: 'https://www.linkedin.com/posts/ryan-erlangga-ardiansyah_laravel-webdevelopment-informationsystem-ugcPost-7462856785536770048-fuPp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH8VVgB3TsOGz8rhBvscTxV7UOXQ_VUB3Q',
    githubUrl: 'https://github.com/ryanea-exe/WebsiteLaravel11-InventoryPengelolaBMNKanimPonorogo.git',
    summary:
      'Built a full-stack inventory and asset management platform with workflow automation, maintenance tracking, reporting, and role-based access control.',
    tech: ['Laravel', 'PHP', 'TypeScript', 'Tailwind', 'etc.'],
    images: [
      '/login-singobarong.png',
      '/singobarong-1.png', // Tambahkan gambar tambahan
      '/singobarong-2.png',
      '/singobarong-3.png',
      '/singobarong-4.png',
      '/singobarong-5.png',
      '/singobarong-6.png',
      '/singobarong-7.png',
      '/singobarong-8.png',
    ],
    details: {
      challenges: [
        '• Ensuring accurate asset tracking and stock monitoring.',
        '• Managing approval workflows and maintenance requests efficiently.',
        '• Maintaining data consistency across inventory, asset, and vehicle records.',
      ],
      solutions: [
        '• Built real-time inventory monitoring and reporting features.',
        '• Implemented role-based workflows with automated notifications.',
        '• Designed a centralized database structure for integrated asset management.',
      ],
      stack: ['Laravel', 'PHP', 'TypeScript', 'Tailwind', 'MySQL', 'RESTful Architecture', 'DataTables', 'etc.'],
    },
  },
  {
    id: 'project-3',
    title: 'SDawetJabung System',
    liveDemoUrl: 'https://sdawetjabung.com/visit-visa',
    githubUrl: '-',
    summary: 'Built a responsive WordPress website with customized content management features to streamline information publishing and administration.',
    tech: ['WordPress', 'HTML', 'CSS', 'Etc.'],
    images: [
      '/sdawetjabung-foreigners.png',
      '/sdawetjabung-visitvisa.png', // Tambahkan gambar tambahan
      '/sdawetjabung-staypermit.png',
      '/sdawetjabung-tariffs.png',
      '/sdawetjabung-overstay.png',
    ],
    details: {
      challenges: [
        '• Maintaining organized and scalable website content.',
        '• Optimizing website performance and usability.',
        '• Keeping website content organized and easy to update.',
      ],
      solutions: [
        '• Leveraged WordPress CMS for efficient content administration.',
        '• Applied responsive design and performance optimization techniques.',
        '• Utilized WordPress content management features for streamlined updates.',
      ],
      stack: ['WordPress', 'HTML', 'CSS', 'Etc.'],
    },
  },
]

function Modal({ open, onClose, project }) {
  const el = document.getElementById('root')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset index saat project berubah
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0)
    }
  }, [project])

  if (!project || !el) return null

  const images = project.images || [project.image] // Fallback ke image tunggal
  const totalImages = images.length
  const hasMultipleImages = totalImages > 1

  const goToPrevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const goToNextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const overlayClass = open ? 'modalOverlay modalOverlay--open' : 'modalOverlay'
  const modalClass = open ? 'modal modal--open' : 'modal'

  return createPortal(
    <div className={overlayClass}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
      onMouseDown={(e) => {
        if (!open) return
        if (e.target === e.currentTarget) onClose()
      }}
      onKeyDown={(e) => {
        if (!open) return
        if (e.key === 'Escape') onClose()
      }}
      tabIndex={-1}
    >
      <div className={modalClass}>
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
              <h4 className="modal__h">Challenge</h4>
              <ul className="modal__ul">
                {project.details.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="modal__section">
              <h4 className="modal__h">Solution</h4>
              <ul className="modal__ul">
                {project.details.solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal__right">
            {/* Carousel */}
            <div className="modal__carousel">
              <div className="modal__carousel-container">
                <img 
                  className="modal__poster" 
                  src={images[currentImageIndex]} 
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                />
                
                {hasMultipleImages && (
                  <>
                    <div 
                      className="modal__carousel-btn-wrapper modal__carousel-btn-wrapper--prev"
                      onClick={goToPrevImage}
                    >
                      <button 
                        className="modal__carousel-btn"
                        aria-label="Previous image"
                      >
                        <FiChevronLeft />
                      </button>
                    </div>
                    <div 
                      className="modal__carousel-btn-wrapper modal__carousel-btn-wrapper--next"
                      onClick={goToNextImage}
                    >
                      <button 
                        className="modal__carousel-btn"
                        aria-label="Next image"
                      >
                        <FiChevronRight />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Dots indicator */}
              {hasMultipleImages && (
                <div className="modal__carousel-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`modal__carousel-dot ${index === currentImageIndex ? 'modal__carousel-dot--active' : ''}`}
                      onClick={() => goToImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

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
              <a className="btn btn--secondary"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!project.liveDemoUrl) e.preventDefault()
                }}
                aria-disabled={!project.liveDemoUrl}
                style={{ pointerEvents: project.liveDemoUrl ? 'auto' : 'none', opacity: project.liveDemoUrl ? 1 : 0.6 }}
              >
                <FiExternalLink /> Live Demo
              </a>
              <a className="btn btn--secondary"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!project.githubUrl) e.preventDefault()
                }}
                aria-disabled={!project.githubUrl}
                style={{ pointerEvents: project.githubUrl ? 'auto' : 'none', opacity: project.githubUrl ? 1 : 0.6 }}
              >
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
  const [modalVisible, setModalVisible] = useState(false)

  const active = useMemo(() => PROJECTS.find((p) => p.id === activeId) ?? null, [activeId])

  const openModal = (id) => {
    setActiveId(id)
    requestAnimationFrame(() => setModalVisible(true))
  }

  const closeModal = () => {
    setModalVisible(false)
    setTimeout(() => setActiveId(null), 220)
  }

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
                <img className="projectCard__img" src={p.images?.[0] || p.image} alt="" />
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
                  <a className="btn btn--ghost"
                    href={p.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!p.liveDemoUrl) e.preventDefault()
                    }}
                    aria-disabled={!p.liveDemoUrl}
                    style={{ pointerEvents: p.liveDemoUrl ? 'auto' : 'none', opacity: p.liveDemoUrl ? 1 : 0.6 }}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a className="btn btn--ghost"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!p.githubUrl) e.preventDefault()
                    }}
                    aria-disabled={!p.githubUrl}
                    style={{ pointerEvents: p.githubUrl ? 'auto' : 'none', opacity: p.githubUrl ? 1 : 0.6 }}
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>

                <button type="button"
                  className="btn btn--primary btn--full"
                  onClick={() => openModal(p.id)}
                >
                  <FiMoreHorizontal /> Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        <Modal open={modalVisible && !!activeId} onClose={closeModal} project={active} />
      </div>
    </SectionReveal>
  )
}
