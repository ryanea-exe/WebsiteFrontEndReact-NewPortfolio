import { useEffect, useId, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const id = useId()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'Light Mode' : 'Dark Mode'}`}
      aria-pressed={isDark}
    >
      <span className="themeToggle__track" aria-hidden="true">
        <span className={`themeToggle__thumb ${mounted ? 'themeToggle__thumb--anim' : ''}`}>
          <span className="themeToggle__icon themeToggle__icon--moon">
            <FiMoon />
          </span>
          <span className="themeToggle__icon themeToggle__icon--sun">
            <FiSun />
          </span>
        </span>
        <span className="themeToggle__srOnly" id={id}>
          Theme: {isDark ? 'Dark' : 'Light'}
        </span>
      </span>
      <span className="themeToggle__label" aria-hidden="true">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}

