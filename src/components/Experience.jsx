import SectionReveal from './SectionReveal'

const EXPERIENCE = [
  {
    company: 'TechNova Indonesia',
    position: 'Full Stack Developer',
    period: '2024 - Present',
    description:
      'Mengembangkan dashboard internal dan layanan web end-to-end. Optimasi performa dan perbaikan UX untuk meningkatkan konversi.',
    tech: ['React', 'Laravel', 'MySQL', 'REST API'],
  },
  {
    company: 'Studio Pixel',
    position: 'Front-End Developer',
    period: '2022 - 2024',
    description:
      'Membangun UI interaktif untuk landing page dan aplikasi web. Kolaborasi dengan tim desain untuk menghasilkan komponen yang konsisten.',
    tech: ['React', 'TypeScript', 'Tailwind (optional)', 'Figma'],
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2020 - 2022',
    description:
      'Mengerjakan proyek kecil sampai menengah: e-commerce, web company profile, dan integrasi API.',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <SectionReveal id="experience" className="section">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionHeader__title">Work Experience</h2>
          <p className="sectionHeader__desc">Ringkasan perjalanan karier saya.</p>
        </header>

        <div className="timeline">
          {EXPERIENCE.map((item, idx) => (
            <article key={item.company} className="timelineItem">
              <div className="timelineItem__marker" aria-hidden="true">
                <span className="timelineItem__dot" />
                {idx !== EXPERIENCE.length - 1 && <span className="timelineItem__line" />}
              </div>
              <div className="timelineItem__content">
                <div className="timelineItem__top">
                  <h3 className="timelineItem__company">{item.company}</h3>
                  <span className="timelineItem__period">{item.period}</span>
                </div>
                <div className="timelineItem__position">{item.position}</div>
                <p className="timelineItem__desc">{item.description}</p>
                <div className="chips">
                  {item.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

