import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Project from './components/Project'
import Skill from './components/Skill'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <div className="appRoot">
        <Navbar />
        <main className="main">
          <Hero />
          <About />
          <Experience />
          <Project />
          <Skill />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
