import SectionReveal from './SectionReveal'
import profileImg from '../assets/profile/profile-placeholder.png'
import { FaDownload } from 'react-icons/fa'

export default function About() {

  return (
    <SectionReveal id="about" className="section">
      <div className="container about">
        <header className="aboutHeader">
          <h2 className="aboutHeader__title">About Me</h2>
          <p className="aboutHeader__desc">
            {/* Passionate Full Stack Developer with experience building modern web applications and solving real-world problems through technology. */}
            Informatics Engineering graduate with a focus on Full-Stack Web Development and Software Engineering. Experienced in developing web applications 
            using Laravel Framework, PHP, JavaScript, Vue.js, Modern UI Framework, MySQL and PostgreSQL Database, including feature development, database management, 
            and system performance optimization. Also experienced in IT Support and Web Administration to support operational and technical needs and have a basic 
            understanding of Machine Learning (Python) for data-driven solution development. Passionate about building efficient, scalable, and impactful digital solutions.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__left">
            <div className="about__photoWrap">
              <img className="about__photo" src={profileImg} alt="" />
              <div className="about__photoGlow" />
            </div>

          </div>

          <div className="about__right">
            <div className="about__cards">
              <div className="aboutCard">
                <div className="aboutCard__h">Pendidikan</div>
                <div className="aboutCard__p">Teknik Informatika (S1) — fokus pada pengembangan web.</div>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__h">Pengalaman</div>
                <div className="aboutCard__p">
                  Membangun fitur dari UI sampai backend, termasuk integrasi API dan optimasi performa.
                </div>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__h">Fokus Karier</div>
                <div className="aboutCard__p">React + Node/Laravel, scalable architecture, clean UX.</div>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__h">Ketertarikan</div>
                <div className="aboutCard__p">UI engineering, state management, dan automation tools.</div>
              </div>
            </div>

            <div className="stats" aria-label="About stats">
              <div className="stat">
                <div className="stat__v">3+ Years</div>
                <div className="stat__k">Experience</div>
              </div>
              <div className="stat">
                <div className="stat__v">10+ Projects</div>
                <div className="stat__k">Delivered</div>
              </div>
              <div className="stat">
                <div className="stat__v">5+ Tech</div>
                <div className="stat__k">Core Stack</div>
              </div>
            </div>

            <div className="about__actions">
              <a className="btn btn--primary" href="#" download>
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}


