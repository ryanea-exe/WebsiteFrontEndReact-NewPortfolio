import { useEffect, useRef, useState } from 'react'

export default function SectionReveal({ children, className = '', id }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}>
      {children}
    </section>
  )
}

