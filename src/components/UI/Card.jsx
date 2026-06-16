import { useRef } from 'react'

export default function Card({ children, className = '', ...props }) {
  const cardRef = useRef(null)

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-md shadow-slate-100/50 
                  transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
