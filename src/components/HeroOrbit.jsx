import { useMemo } from 'react'

export default function HeroOrbit({
  image,
  icons = [],
}) {
  const outerIcons = useMemo(() => icons.slice(0, 6), [icons])
  const innerIcons = useMemo(() => icons.slice(6, 11), [icons])

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Orbit luar */}
      <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] rounded-full border border-slate-300/40 dark:border-slate-700 animate-spin-slow">
        {outerIcons.map(({ Icon }, index) => {
          const angle = (360 / outerIcons.length) * index
          const radius = typeof window !== 'undefined' && window.innerWidth < 480 ? 170 
                      : typeof window !== 'undefined' && window.innerWidth < 640 ? 200 
                      : 240

          return (
            <div key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateX(${radius}px)
                `,
              }}
            >
              <div className="
                    orbit-icon-upright
                    flex
                    items-center
                    justify-center
                    w-10 h-10
                    sm:w-12 sm:h-12
                    md:w-14 md:h-14
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                    shadow-lg
                    border border-slate-200
                    dark:border-slate-700
                "
                >
                <Icon className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Orbit dalam */}
      <div className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px] rounded-full border border-slate-300/40 dark:border-slate-700 animate-spin-reverse">
        {innerIcons.map(({ Icon }, index) => {
          const angle = (360 / innerIcons.length) * index
          const radius = typeof window !== 'undefined' && window.innerWidth < 480 ? 110 
                      : typeof window !== 'undefined' && window.innerWidth < 640 ? 130 
                      : 155

          return (
            <div key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateX(${radius}px)
                `,
              }}
            >
              <div className="
                    orbit-icon-upright-reverse
                    flex
                    items-center
                    justify-center
                    w-8 h-8
                    sm:w-10 sm:h-10
                    md:w-12 md:h-12
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                    shadow-md
                    border border-slate-200
                    dark:border-slate-700
                "
                >
                <Icon className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300" />
              </div>
            </div>
          )
        })}
      </div>

      {/* FOTO PROFIL */}
      <div className="relative z-20">
        <img src={image}
          alt="Profile"
          className="
            w-28 h-28
            sm:w-32 sm:h-32
            md:w-40 md:h-40
            lg:w-48 lg:h-48
            object-cover
            rounded-full
          "
        />
      </div>
    </div>
  )
}
