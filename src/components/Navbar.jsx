import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]



function getNavOffsetPx() {
  // match CSS: .navbar top:20px and height: var(--navH)
  const navTop = 20
  const navH = 76
  // extra padding to prevent tiny overlaps due to subpixel rendering
  return navTop + navH + 8
}

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY
  const offset = getNavOffsetPx()

  window.scrollTo({ top: Math.max(0, top - offset), behavior: 'smooth' })
}



export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')


  const socials = useMemo(
    () => [
      { label: 'LinkedIn', href: '#', Icon: FaLinkedinIn },
      { label: 'GitHub', href: '#', Icon: FaGithub },
      { label: 'Instagram', href: '#', Icon: FaInstagram },
    ],
    [],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        // choose the most-relevant intersecting section for stable active state
        const intersecting = entries.filter((e) => e.isIntersecting)
        if (!intersecting.length) return

        // compute a score that prefers deeper visibility into the viewport focus area
        const scored = intersecting
          .map((e) => {
            const r = (e.intersectionRatio ?? 0) // 0..1
            return {
              id: e.target.id,
              score: r,
            }
          })
          .sort((a, b) => b.score - a.score)

        if (scored[0]?.id) setActiveId(scored[0].id)
      },
      {
        threshold: [0.35, 0.4, 0.5],
        // focus window around 35-40% from top; stable and avoids rapid switching
        rootMargin: '-35% 0px -55% 0px',
      },
    )


    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])


  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button
          type="button"
          className="navbar__brand"
          onClick={() => scrollToId('home')}
          aria-label="Go to top"
        >
          <span className="navbar__avatar" aria-hidden="true" />
          {/* <span className="navbar__name">Ryan</span> */}
        </button>

        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`navbar__link ${activeId === item.id ? 'navbar__link--active' : ''}`}
              onClick={() => {
                setActiveId(item.id)
                scrollToId(item.id)
              }}
            >
              {item.label}
            </button>


          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <a className="navbar__talk" href="mailto:hello@example.com">
            Let's Talk
          </a>
          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      <div className={`mobileMenu ${open ? 'mobileMenu--open' : ''}`}>
        <div className="mobileMenu__panel">
          <nav className="mobileMenu__nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="mobileMenu__link"
                onClick={() => {
                  setOpen(false)
                  scrollToId(item.id)
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mobileMenu__cta">
            <a className="navbar__talk navbar__talk--mobile" href="mailto:hello@example.com">
              Let's Talk
            </a>
            <div className="mobileMenu__social">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} className="iconBtn" href={href} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

