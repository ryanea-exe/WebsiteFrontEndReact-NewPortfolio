import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
]


function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__navRow">
        <nav className="footerNav" aria-label="Footer navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="footerNav__link"
              onClick={() => scrollToId(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a className="footerNav__link" href="mailto:hello@example.com">
            Contact
          </a>
        </nav>
      </div>

      <div className="container footer__socialRow">
        <div className="footerSocial" aria-label="Social links">
          <a className="footerSocial__link" href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="footerSocial__link" href="#" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="footerSocial__link" href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a
            className="footerSocial__link"
            href="mailto:hello@example.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <div className="footer__copy">© 2026 Ryan. All Rights Reserved.</div>
      </div>
    </footer>
  )
}


