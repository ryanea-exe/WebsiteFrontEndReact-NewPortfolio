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
]


function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          <span className="navbar__name">Ryan</span>
        </button>

        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="navbar__link"
              onClick={() => scrollToId(item.id)}
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

