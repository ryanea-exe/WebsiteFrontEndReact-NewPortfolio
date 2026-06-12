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
    <footer className="mt-6 py-8">
      {/* full-screen divider */}
      <div className="w-screen border-t border-white/10" aria-hidden="true" />

      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* profile avatar like navbar/header */}
          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[rgba(255,255,255,0.04)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="text-sm font-semibold text-white/90">RY</span>
          </div>

          {/* Footer navigation (1st row) */}
          <nav
            className="mt-6 flex flex-wrap justify-center gap-3"
            aria-label="Footer navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="flex items-center justify-center rounded-lg border border-transparent px-4 py-2 text-xs font-semibold text-[var(--text-h)]/80 transition-all duration-300 hover:text-[var(--text-h)] hover:bg-white/5 hover:-translate-y-0.5 hover:border-white/35 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social media (2nd section) */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              href="https://www.linkedin.com/in/ryan-erlangga-ardiansyah/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>

            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              href="https://github.com/ryanea-exe"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              href="https://www.instagram.com/ryanea__/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              href="mailto:ryanhillfree23@gmail.com"
              aria-label="Email"
            >
              <MdEmail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-sm text-gray-400">
            © 2026 Ryan. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

