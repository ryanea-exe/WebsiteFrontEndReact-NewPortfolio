import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function getNavOffsetPx() {
  const navTop = 20
  const navH = 76
  return navTop + navH + 8
}

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY
  const offset = getNavOffsetPx()

  window.scrollTo({ top: Math.max(0, top - offset), behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="mt-8 py-8">
      {/* full-screen divider */}
      <div className="w-screen border-t" style={{ borderColor: 'var(--border)' }} aria-hidden="true" />

      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* profile avatar like navbar/header */}
          <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full">
            <img src="/avatar.png" alt="" className="h-12 w-12 rounded-full object-cover" style={{ border: 'none' }} />
          </div>

          {/* Footer navigation (1st row) */}
          <nav className="mt-6 flex flex-wrap justify-center gap-3"
            aria-label="Footer navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="flex items-center justify-center rounded-xl border border-transparent px-4 py-2 text-[11px] md:text-xs font-semibold text-[var(--text-h)]/80 transition-all duration-300 hover:text-[var(--text-h)] hover:-translate-y-0.5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hover-bg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social media (2nd section) */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5"
              href="https://www.linkedin.com/in/ryan-erlangga-ardiansyah/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              style={{ borderColor: 'var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5"
              href="https://github.com/ryanea-exe"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              style={{ borderColor: 'var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5"
              href="https://www.instagram.com/ryanea__/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              style={{ borderColor: 'var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5"
              href="mailto:ryanhillfree23@gmail.com"
              aria-label="Email"
              style={{ borderColor: 'var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <MdEmail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-xs md:text-sm text-gray-400">
            © 2026 RyanEA. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
