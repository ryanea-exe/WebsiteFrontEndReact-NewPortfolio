import { useMemo } from 'react'

export default function HeroOrbit({
  image,
  icons = [],
}) {
  const outerIcons = useMemo(() => icons.slice(0, 6), [icons])
  const innerIcons = useMemo(() => icons.slice(6, 11), [icons])

  return (
    <div className="relative flex items-center justify-center w-full h-[500px]">

      {/* Orbit luar */}
      <div className="absolute w-[480px] h-[480px] rounded-full border border-slate-300/20 dark:border-slate-700 animate-spin-slow">
        {outerIcons.map(({ Icon }, index) => {
          const angle = (360 / outerIcons.length) * index

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateX(240px)
                `,
                }}
            >
              <div
                className="
                    orbit-icon-upright
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                    shadow-lg
                "
                >
                <Icon className="text-3xl" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Orbit dalam */}
      <div className="absolute w-[310px] h-[310px] rounded-full border border-slate-300/20 dark:border-slate-700 animate-spin-reverse">
        {innerIcons.map(({ Icon }, index) => {
          const angle = (360 / innerIcons.length) * index

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateX(150px)
                `,
                }}
            >
              <div
                className="
                    orbit-icon-upright-reverse
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                    shadow-md
                "
                >
                <Icon className="text-2xl" />
              </div>
            </div>
          )
        })}
      </div>

      {/* FOTO PROFIL */}
      <div className="relative z-20">
        <img
          src={image}
          alt="Profile"
          className="
            w-36
            h-36
            md:w-48
            md:h-48
            object-cover
            rounded-full
          "
        />
      </div>
    </div>
  )
}