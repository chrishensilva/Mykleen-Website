import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 8,    suffix: '+',  label: 'Years of Excellence',   color: 'text-mykleen-blue-light' },
  { value: 10,   suffix: 'k+', label: 'Spaces Cleaned',        color: 'text-mykleen-green-light' },
  { value: 98,   suffix: '%',  label: 'Client Retention Rate', color: 'text-mykleen-blue-light' },
  { value: 5.0,  suffix: '★',  label: 'Google Rating',         color: 'text-yellow-400' },
]

export default function StatsCounter({ darkBg = false }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = document.querySelector(`[data-stat="${i}"]`)
        if (!el) return

        const isDecimal = stat.value % 1 !== 0
        const obj = { val: 0 }

        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
          onUpdate() {
            el.textContent = isDecimal
              ? obj.val.toFixed(1) + stat.suffix
              : Math.round(obj.val) + stat.suffix
          },
        })
      })

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-16 border-y ${
        darkBg
          ? 'bg-gradient-to-r from-[#1D2D44] to-[#1e3a5f] border-white/10'
          : 'bg-gradient-to-r from-mykleen-blue to-mykleen-blue-light border-mykleen-blue/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div
                data-stat={i}
                className={`text-4xl md:text-5xl font-extrabold ${stat.color} tabular-nums`}
              >
                0{stat.suffix}
              </div>
              <div className="text-white/70 text-sm font-medium mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
