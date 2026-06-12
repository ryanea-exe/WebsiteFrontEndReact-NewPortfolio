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
            Informatics Engineering graduate with experience in Full-Stack Web Development, Software Engineering, IT Support, and Web Administration. 
            Skilled in developing and maintaining web applications, managing databases, and supporting operational and technical systems. Possesses a basic 
            understanding of Machine Learning and data-driven solution development.
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
                <div className="aboutCard__h">Education</div>
                <div className="aboutCard__p">Informatics Engineering graduate with a strong foundation in software development and information technology.</div>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__h">Experience</div>
                <div className="aboutCard__p">Experienced in developing web applications, managing databases, and supporting IT operations.</div>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__h">Career Focus</div>
                <div className="aboutCard__p">Focused on Full-Stack Web Development, Software Engineering, and Backend Development.</div>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__h">Interests</div>
                <div className="aboutCard__p">Passionate about building scalable digital solutions and exploring emerging technologies.</div>
              </div>
            </div>

            <div className="stats" aria-label="About stats">
              <div className="stat">
                <div className="stat__v">2+ Years</div>
                <div className="stat__k">Experience</div>
              </div>
              <div className="stat">
                <div className="stat__v">10+ Projects</div>
                <div className="stat__k">Completed</div>
              </div>
              <div className="stat">
                <div className="stat__v">5+ Tech</div>
                <div className="stat__k">Core Stack</div>
              </div>
            </div>

            {/* <div className="about__actions">
              <a className="btn btn--primary" href="#" download>
                <FaDownload /> Download Resume
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}


