import { useMemo, useState } from 'react'
import SectionReveal from './SectionReveal'
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import '../Contact.css'


export default function Contact() {
  const downloadHref = useMemo(() => '#', [])
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
  }

  return (
    <SectionReveal id="contact" className="section">
      <div className="container contact">
        <header className="contactHeader">
          <h2 className="sectionHeader__title">Contact Me</h2>
          <p className="sectionHeader__desc">
            Feel free to reach out if you have a project, collaboration, or opportunity.
          </p>
        </header>

        <div className="contactGrid">
          <div className="contactLeft">
            <div className="contactInfoCard">
              <div className="contactInfoRow">
                <span className="contactInfoIcon" aria-hidden="true">
                  <MdEmail />
                </span>
                <a className="contactInfoLink" href="mailto:ryanhillfree23@gmail.com">
                  ryanhillfree23@gmail.com
                </a>
              </div>

              <div className="contactInfoRow">
                <span className="contactInfoIcon" aria-hidden="true">
                  <FaLinkedinIn />
                </span>
                <a className="contactInfoLink" href="https://www.linkedin.com/in/ryan-erlangga-ardiansyah/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>

              <div className="contactInfoRow">
                <span className="contactInfoIcon" aria-hidden="true">
                  <FaGithub />
                </span>
                <a className="contactInfoLink" href="https://github.com/ryanea-exe" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </div>

              <div className="contactInfoRow">
                <span className="contactInfoIcon" aria-hidden="true">
                  <FaInstagram />
                </span>
                <a className="contactInfoLink" href="https://www.instagram.com/ryanea__/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>

              <div className="contactInfoRow">
                <span className="contactInfoIcon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                <span className="contactInfoText">East Java, Indonesia</span>
              </div>
            </div>

            <div className="contactHint">
              Prefer email? I typically respond within 1–2 business days.
            </div>

            {/* <a className="btn btn--ghost contactDownload" href={downloadHref}>
              View Portfolio PDF
            </a> */}
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field__label">Full Name</span>
              <input
                className="field__input"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="field">
              <span className="field__label">Email Address</span>
              <input
                className="field__input"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </label>

            <label className="field">
              <span className="field__label">Subject</span>
              <input
                className="field__input"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can I help?"
                required
              />
            </label>

            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                className="field__input field__textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={6}
                required
              />
            </label>

            <button className="btn btn--primary contactForm__btn" type="submit">
              Send Message
            </button>

            <div className="contactForm__note">
              This is a dummy handler for now.
            </div>
          </form>
        </div>
      </div>
    </SectionReveal>
  )
}

