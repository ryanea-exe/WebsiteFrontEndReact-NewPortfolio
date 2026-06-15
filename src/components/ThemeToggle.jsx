import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  const handleToggle = (e) => {
    if (animating) return
    
    // Dapatkan posisi tombol
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    // Set CSS variables untuk animasi
    document.documentElement.style.setProperty('--theme-transition-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-transition-y', `${y}px`)
    
    setAnimating(true)
    
    // Mulai animasi overlay
    document.documentElement.classList.add('theme-transitioning')
    
    // Toggle theme di tengah animasi (setelah overlay mulai terlihat)
    setTimeout(() => {
      toggleTheme()
    }, 150)
    
    // Hapus animasi setelah selesai
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
      setAnimating(false)
    }, 700)
  }

  return (
    <button type="button"
      className="themeToggle"
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'Light Mode' : 'Dark Mode'}`}
      aria-pressed={isDark}
      disabled={animating}
    >
      <span className="themeToggle__iconWrap" aria-hidden="true">
        <span
          className={`themeToggle__icon ${isDark ? 'themeToggle__icon--moon' : 'themeToggle__icon--sun'} ${mounted ? 'themeToggle__icon--anim' : ''}`}
        >
          {isDark ? <FiMoon /> : <FiSun />}
        </span>
      </span>
      <span className="themeToggle__srOnly">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  )
}
