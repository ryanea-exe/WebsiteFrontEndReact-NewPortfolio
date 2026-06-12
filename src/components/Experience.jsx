import SectionReveal from './SectionReveal'

const EXPERIENCE = [
  {
    company: 'Kantor Imigrasi Kelas II Non TPI Ponorogo',
    position: 'System Manager & Software Engineer',
    period: 'Nov 2025 - May 2026',
    description:
      `
        • Manage and develop IT systems and infrastructure (website and network), and implement digital solutions to support the agency's overall operations.
        • Troubleshoot and maintain systems to maintain stability, service reliability, and smooth operations.
        • Analyze needs and develop websites, including the Foreign National Information feature and WhatsApp auto-response, which accelerate service response by up to 40% and increase user satisfaction.
        • Develop internal applications (the "Singobarong" Inventory System and Vehicle Maintenance) to reduce manual processes and accelerate administrative data processing.
        • Develop a Foreign National Tracking system that improves data monitoring accuracy and accelerates real-time information management.
        • Build a Google Apps Script-based scheduling system integrated with Google Calendar and Maps to improve schedule accuracy and operational coordination efficiency.
      `,
    tech: ['Laravel', 'PHP', 'TypeScript', 'Tailwind', 'MySQL', 'RESTful Architecture', 'etc.'],
  },
  {
    company: 'Bangkit Academy led by Google, GoTo, and Traveloka',
    position: 'Machine Learning Cohort (Studi Independent)',
    period: 'Sep 2024 - Jan 2025',
    description:
      `
        • Designed and developed an Android application for early detection of coffee leaf diseases, integrating Machine Learning, Android, and Cloud Computing, and successfully published it on the Play Store as a digital solution for the plantation sector.
        • Developed and trained a Machine Learning model for coffee leaf disease classification with an accuracy of ±92%, to improve detection accuracy and support data-driven decision-making.
        • Collaborated within a team to develop a business model and marketing strategy, resulting in a solution that was not only technically sound but also ready for business implementation.
        • Presented project results, reported progress regularly to mentors, and conducted development evaluations and iterations to ensure project quality and success.
      `,
    tech: ['Python', 'TensorFlow', 'Flask', 'Keras', 'Pytorch', 'Scipy', 'Numpy', 'Pandas', 'Sckit-Learn', 'Matplotlib', 'etc.'],
  },
  {
    company: 'Pemerintah Desa Kalimalang',
    position: 'IT Support & Web Admin',
    period: 'Jul 2023 - Sep 2023',
    description:
      `
        • Manage and maintain the Village Information System (KIM Pariwara) website to ensure the availability of information and support village digital services.
        • Designed and developed a web-based correspondence service system using Laravel which succeeded in speeding up the administration process by up to ±50%.
        • Manage and prepare electronic facilities for administrative and community activities to ensure smooth village operations.
        • Carry out document management and tax recapitulation using village funds to ensure data accuracy and administrative compliance.
      `,
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    company: 'Dinas PMD Kabupaten Ponorogo',
    position: 'IT Support & Web Developer',
    period: 'Nov 2019 - Apr 2020',
    description:
      `
        • Managed the input and recapitulation of administrative data for office activities to ensure data accuracy and support smooth operational processes.
        • Managed the procurement and maintenance of office facilities (electronic and non-electronic) to ensure availability and optimize asset utilization.
        • Developed and added features to the incoming and outgoing mail archive website system, which successfully increased archive management efficiency by up to 40% and facilitated digital data access.
      `,
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <SectionReveal id="experience" className="section">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionHeader__title">Work Experience</h2>
          <p className="sectionHeader__desc">Summary of my career journey.</p>
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

