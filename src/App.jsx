import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
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
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
