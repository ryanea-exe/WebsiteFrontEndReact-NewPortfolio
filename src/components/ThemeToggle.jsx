import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  return (
    <button type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'Light Mode' : 'Dark Mode'}`}
      aria-pressed={isDark}
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
